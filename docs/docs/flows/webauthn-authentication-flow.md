---
id: webauthn-authentication-flow
title: WebAuthn Authentication (Passwordless or MFA)
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | webauthn-authentication-flow                   |
| **Name**            | WebAuthn Authentication (Passwordless or MFA)                 |
| **Description**     | Phishing-resistant authentication using the WebAuthn assertion ceremony with strict server-side verification and audit logging; optionally federated via OIDC/SAML.          |
</div>

## Sequence Diagram
```mermaid
sequenceDiagram
            UserBrowser ->> WebFrontend: User initiates sign-in on the legitimate origin.
            WebFrontend ->> AuthBackend: Frontend requests assertion options; backend returns a fresh challenge and request options.
            UserBrowser ->> PlatformAuthenticator: Browser obtains an assertion from the authenticator after user verification.
            WebFrontend ->> AuthBackend: Frontend submits assertion; backend validates and establishes session/tokens.
            AuthBackend ->> AuditLogStore: Backend writes an authentication audit event and any risk evaluation result.
            AuthBackend ->> IdentityProvider: Optional: backend federates the authentication result to an IdP for broader SSO via OIDC/SAML.
```
## Controls

        ### Authentication Uv Required

        Authentication requires user verification and strict assertion validation.

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
                                <a href="https://zeropass.example/requirements/webauthn/authentication-policy" target="_blank">
                                    https://zeropass.example/requirements/webauthn/authentication-policy
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
                                            <td>verifySignature</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>verifyOrigin</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>verifyRpIdHash</td>
                                            <td>true</td>
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
                      <li>NIST-SP-800-63-4</li>
                  </ul>
              </td>
          </tr>
          </tbody>
      </table>
  </div>
