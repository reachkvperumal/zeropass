# Implement Phishing-Resistant MFA with WebAuthn

You are an architect implementing phishing-resistant multi-factor
authentication (MFA) using WebAuthn and FIDO2 authenticators.

- Design WebAuthn-based enrollment and authentication as a primary factor
  (passkeys) or as a strong second factor.
- Ensure the solution is phishing-resistant by binding credentials to the
  legitimate origin and keeping private keys on the user’s device.
- Prefer platform authenticators (device biometrics) where possible, while
  supporting roaming hardware security keys for high-assurance users.
- Integrate with existing identity providers (IdPs) and authentication
  backends via OIDC/SAML as needed.
- Provide clear user guidance for registration and sign-in flows.
- Ensure compliance with relevant security standards and best practices.
- Document architecture decisions, security controls, and implementation
  checklists.
- Generate a CALM 1.x architecture model representing the design.
- Produce a `zero-pass.calm.json` file encoding the architecture model.
- Generated output **must** validate against:
  `https://calm.finos.org/release/1.1/meta/calm.json`.

## Generation rules for Copilot

- Always include a `metadata` array on every node and relationship, at minimum with:
  - `owner`, `environment`, `compliance` for nodes
  - `sensitivity` or `criticality` for relationships
- Always include a `controls` object on:
  - All security-relevant nodes (such as `auth-backend`, `identity-provider`,
    `credential-store`).
  - All nodes that store or process sensitive data
    (such as `audit-log-store`).
  - All nodes that interface with external systems or users (such as
    `web-frontend`, `user-authenticator`).
  - All relationships that carry sensitive data (such as authentication assertions).
  - All relationships using `HTTPS`, `mTLS`, or `HTTPS/OIDC`
- Do NOT place `metadata` or `controls` only at the top-level; they MUST be
  defined inside each relevant `node` and `relationship` object.

## Objectives

- Eliminate shared secrets such as passwords and OTP codes from the
  authentication ceremony whenever feasible.
- Provide a user experience that is at least as simple as username +
  password + OTP, while significantly more secure.
- Meet phishing-resistant requirements from modern standards and guidance
  (for example, NIST SP 800‑63‑4 AAL2/AAL3, FIDO2/WebAuthn).

## Architecture Overview

Model the following high-level components:

- user-browser: Modern browser with built-in WebAuthn API support.
- user-authenticator:
  - Platform authenticator (Touch ID, Face ID, Windows Hello, Android, etc.).
  - Roaming FIDO2 security key (USB/NFC/BLE).
- web-frontend: SPA or web app that initiates WebAuthn flows using the
  browser API.
- auth-backend: Service that issues WebAuthn options, validates
  assertions, and manages sessions/tokens.
- identity-provider (IdP): Optional IdP that acts as WebAuthn relying
  party and federates results via OIDC/SAML.
- credential-store: Store for WebAuthn public keys and metadata
  (credentialId, publicKey, signCount, userHandle, etc.).
- audit-log-store: Store for authentication, enrollment, and risk events.

Use TLS everywhere, and ensure strict origin binding:

- All frontend calls to the backend over `https://` with HSTS enabled.
- Relying Party ID (RP ID) must match the effective domain used by
  WebAuthn (for example, `login.kv.com`).[

## Enrollment (Registration) Flow

Implement phishing-resistant enrollment using the WebAuthn registration
ceremony:

1) Start registration

- User navigates to the app and signs in with an initial bootstrap method
  (for example, password or IdP) to prove account ownership.
- web-frontend → auth-backend: POST `/webauthn/registration/options`
  with the user identifier and requested authenticator policies
  (for example, `userVerification=required`).

1) Generate options

- auth-backend generates a unique challenge and constructs
  `PublicKeyCredentialCreationOptions` including:
  - `rp.id` and `rp.name` bound to the legitimate domain.
  - `user.id`, `user.name`, `user.displayName`.
  - `pubKeyCredParams` with supported algorithms (for example, `ES256`).
  - `authenticatorSelection.userVerification = "required"`.
- auth-backend stores the challenge server-side and returns options to
  the frontend.

1) Create credential on authenticator

- web-frontend calls `navigator.credentials.create({ publicKey: options })`
  in the browser.
- user-authenticator prompts the user for verification (biometric or PIN)
  and generates a new asymmetric key pair bound to the RP ID.
- Private key stays on the authenticator; the public key and
  attestation data are returned to the browser.

1) Complete registration

- web-frontend → auth-backend: POST `/webauthn/registration/complete`
  with the attestation response.
- auth-backend:
  - Verifies the challenge, RP ID, origin, attestation, and `userVerified`
    flag.
  - Persists credential metadata in `credential-store`.
  - Writes a registration event to `audit-log-store`.

At this point the user has a phishing-resistant authenticator registered
for subsequent MFA or passwordless sign-ins.

## Authentication (MFA / Passwordless) Flow

Implement authentication using the WebAuthn assertion ceremony:

1) Start authentication

- User initiates sign-in:
  - Passwordless: user provides only an identifier (for example,
    username or email).
  - MFA: user first enters a primary factor (for example, password or
    federated identity), then is prompted for WebAuthn.
- web-frontend → auth-backend: POST `/webauthn/authentication/options`
  with the user identifier or allow list preferences.

1) Generate assertion options

- auth-backend builds `PublicKeyCredentialRequestOptions` with:
  - A fresh challenge.
  - `rpId` bound to the correct domain.
  - `allowCredentials` list (or an empty list for discoverable
    credentials/passkeys).
  - `userVerification = "required"` for phishing resistance.
- auth-backend stores the challenge and returns options to the frontend.

1) Perform assertion on authenticator

- web-frontend calls `navigator.credentials.get({ publicKey: options })`.
- user-authenticator prompts the user for biometric or PIN and signs the
  challenge using the stored private key.
- The authenticator verifies the RP ID and origin, ensuring the credential
  cannot be used on a phishing site with a different domain.

1) Validate assertion and create session

- web-frontend → auth-backend: POST `/webauthn/authentication/complete`
  with the assertion response.
- auth-backend validates:
  - Challenge, origin, RP ID hash, and signature.
  - `userVerified` and authenticator flags.
  - `signCount` or equivalent to detect cloned credentials if supported.
  - On success, auth-backend:
  - Issues a session (cookie) and/or tokens (for example, JWT/OIDC).
  - Writes a login event and any risk evaluation result to
    `audit-log-store`.

This end-to-end flow is phishing-resistant because credentials are
origin-bound and there are no shared secrets to steal or replay.

## Security Controls and Policies

Apply the following **controls** for a phishing-resistant configuration:

- Enforce `userVerification=required` for all WebAuthn ceremonies to
  ensure real user presence.
- Require TLS with strong ciphers and HSTS for all web endpoints.
- Pin allowed origins and RP IDs in configuration and CI tests to
  prevent accidental changes that would break origin binding.
- Prefer non-exportable, hardware-backed keys for higher assurance
  populations (for example, security keys, platform secure enclaves).
- Treat passwords and OTPs as fallback only, and clearly mark them as
  weaker factors in policy and user guidance.

## Architecture Decision Records (ADRs)

Document key decisions for WebAuthn-based phishing-resistant MFA:

| ADR ID  | Title                                                  | Status   |
| ------- | -------------------------------------------------------| -------- |
| ADR-101 | Adopt WebAuthn/FIDO2 for phishing-resistant MFA        | accepted |
| ADR-102 | Enforce user verification for all authentications      | accepted |
| ADR-105 | Use hardware-backed authenticators for high-risk users | accepted |

## Implementation Checklist

Use this checklist when implementing WebAuthn for phishing-resistant MFA:

- [ ] RP ID and origins are explicitly configured and tested in dev, test,
      and prod environments.
- [ ] All WebAuthn ceremonies use unique, unpredictable challenges with
      strict server-side verification.
- [ ] `userVerification` is set to `required` for registration and
      authentication, except in narrowly justified edge cases.
- [ ] Credential metadata (public keys, signCount, userHandle) is stored
      securely and linked to user accounts.
- [ ] Audit logs capture enrollment, authentication, and any failed or
      suspicious attempts for monitoring and forensics.
- [ ] Fallback methods (if any) are clearly segregated and rate-limited,
      and do not undermine phishing resistance (for example, avoid SMS OTP as
      primary MFA).
- [ ] Generate the `zero-pass.calm.json` file by encoding these components
      according to the CALM 1.x schema, ensuring structural validity and schema
      compliance.
