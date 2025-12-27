---
id: auth-backend
title: AuthBackend
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | auth-backend                   |
| **Node Type**       | service             |
| **Name**            | AuthBackend                 |
| **Description**     | Issues registration/authentication options, verifies attestation/assertions, manages sessions/tokens, and records audit events.          |

</div>

## Interfaces
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
                        <b>UniqueId</b>
                    </td>
                    <td>
                        auth-backend-api
                            </td>
                </tr>
                <tr>
                    <td>
                        <b>AdditionalProperties</b>
                    </td>
                    <td>
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
                                        <b>Url</b>
                                    </td>
                                    <td>
                                        https://login.kv.com/api
                                            </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>


## Related Nodes
```mermaid
graph TD;
auth-backend[auth-backend]:::highlight;
web-frontend -- Connects --> auth-backend;
web-frontend -- Connects --> auth-backend;
auth-backend -- Connects --> credential-store;
auth-backend -- Connects --> audit-log-store;
web-frontend -- Connects --> auth-backend;
web-frontend -- Connects --> auth-backend;
auth-backend -- Connects --> audit-log-store;
auth-backend -- Connects --> identity-provider;
classDef highlight fill:#f2bbae;

```
## Controls

        ### Webauthn Verification

        Strict server-side verification of WebAuthn ceremonies.

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
                                <a href="https://zeropass.example/requirements/webauthn/server-verification" target="_blank">
                                    https://zeropass.example/requirements/webauthn/server-verification
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
                                            <td>verifyChallenge</td>
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
                                        <tr>
                                            <td>requireUserVerified</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>challengeTtlSeconds</td>
                                            <td>300</td>
                                        </tr>
                                        <tr>
                                            <td>challengeOneTimeUse</td>
                                            <td>true</td>
                                        </tr>
                                    </tbody>
                                </table>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


        ### Abuse Prevention

        Rate limiting and replay protection for enrollment and authentication endpoints.

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
                                <a href="https://zeropass.example/requirements/security/abuse-prevention" target="_blank">
                                    https://zeropass.example/requirements/security/abuse-prevention
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
                                            <td>rateLimiting</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>replayProtection</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>userEnumerationMinimized</td>
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
                      <li>SOC2</li>
                  </ul>
              </td>
          </tr>
          </tbody>
      </table>
  </div>
