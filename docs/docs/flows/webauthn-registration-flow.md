---
id: webauthn-registration-flow
title: WebAuthn Registration (Enrollment)
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | webauthn-registration-flow                   |
| **Name**            | WebAuthn Registration (Enrollment)                 |
| **Description**     | Phishing-resistant enrollment using the WebAuthn registration ceremony with strict origin/RP ID binding and user verification.          |
</div>

## Sequence Diagram
```mermaid
sequenceDiagram
            UserBrowser ->> WebFrontend: User initiates passkey enrollment on the legitimate origin.
            WebFrontend ->> AuthBackend: Frontend requests registration options; backend returns a fresh challenge and creation options.
            UserBrowser ->> PlatformAuthenticator: Browser creates a credential with platform authenticator (preferred) after user verification.
            WebFrontend ->> AuthBackend: Frontend submits attestation; backend validates and completes registration.
            AuthBackend ->> CredentialStore: Backend persists credential public key and metadata.
            AuthBackend ->> AuditLogStore: Backend writes a registration audit event.
```
## Controls

        ### Registration Uv Required

        Enrollment requires user verification and strict origin/RP ID binding.

        <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th>Requirement URL</th>
                    <th>Config</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                                <a href="https://zeropass.example/requirements/webauthn/registration-policy" target="_blank">
                                    https://zeropass.example/requirements/webauthn/registration-policy
                                </a>
                        </td>

                        <td>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Key</th>
                                        <th>Value</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>userVerification</td>
                                            <td>required</td>
                                        </tr>
                                        <tr>
                                            <td>rpId</td>
                                            <td>login.kv.com</td>
                                        </tr>
                                        <tr>
                                            <td>allowedOrigins</td>
                                            <td>https://login.kv.com</td>
                                        </tr>
                                    </tbody>
                                </table>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


## Metadata
  <div className="table-container">
      <table>
          <thead>
          <tr>
              <th>Key</th>
              <th>Value</th>
          </tr>
          </thead>
          <tbody>
          <tr>
              <td>
                  <b>Owner</b>
              </td>
              <td>
                  zeropass-team
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Environment</b>
              </td>
              <td>
                  prod
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Compliance</b>
              </td>
              <td>
                  <ul>
                      <li>WebAuthn</li>
                      <li>FIDO2</li>
                  </ul>
              </td>
          </tr>
          </tbody>
      </table>
  </div>
