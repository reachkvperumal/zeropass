---
id: user-browser
title: UserBrowser
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | user-browser                   |
| **Node Type**       | webclient             |
| **Name**            | UserBrowser                 |
| **Description**     | Modern browser providing the WebAuthn API (navigator.credentials.create/get) and enforcing secure context/origin policies.          |

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
                        user-browser-webauthn-api
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
                                        <b>Api</b>
                                    </td>
                                    <td>
                                        WebAuthn
                                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Notes</b>
                                    </td>
                                    <td>
                                        Represents the browser WebAuthn API surface used by the web-frontend.
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
                        user-browser-to-web-frontend-url
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
                                        https://login.kv.com
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
user-browser[user-browser]:::highlight;
user-browser -- Connects --> web-frontend;
user-browser -- Connects --> platform-authenticator;
user-browser -- Connects --> roaming-security-key;
user-browser -- Connects --> platform-authenticator;
user-browser -- Connects --> roaming-security-key;
classDef highlight fill:#f2bbae;

```
## Controls

        ### Secure Context

        WebAuthn usage requires a secure context and hardened session handling.

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
                                <a href="https://zeropass.example/requirements/client/secure-context" target="_blank">
                                    https://zeropass.example/requirements/client/secure-context
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
                                            <td>secureContextRequired</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>thirdPartyContext</td>
                                            <td>restricted</td>
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
                  end-user
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
