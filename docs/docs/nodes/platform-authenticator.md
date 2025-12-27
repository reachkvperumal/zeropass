---
id: platform-authenticator
title: PlatformAuthenticator
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | platform-authenticator                   |
| **Node Type**       | system             |
| **Name**            | PlatformAuthenticator                 |
| **Description**     | Platform authenticator (Touch ID/Face ID/Windows Hello/Android) performing user verification and holding non-exportable private keys.          |

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
                        platform-authenticator-uv
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
                                        <b>Capability</b>
                                    </td>
                                    <td>
                                        user-verification
                                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Methods</b>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>biometric</li>
                                            <li>device-pin</li>
                                        </ul>
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
platform-authenticator[platform-authenticator]:::highlight;
user-browser -- Connects --> platform-authenticator;
user-browser -- Connects --> platform-authenticator;
classDef highlight fill:#f2bbae;

```
## Controls

        ### Key Protection

        Private keys remain on-device and are protected by the platform security boundary.

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
                                <a href="https://zeropass.example/requirements/webauthn/key-protection" target="_blank">
                                    https://zeropass.example/requirements/webauthn/key-protection
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
                                            <td>privateKeyExportable</td>
                                            <td>false</td>
                                        </tr>
                                        <tr>
                                            <td>hardwareBackedPreferred</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>userVerification</td>
                                            <td>required</td>
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
                      <li>NIST-SP-800-63-4</li>
                  </ul>
              </td>
          </tr>
          </tbody>
      </table>
  </div>
