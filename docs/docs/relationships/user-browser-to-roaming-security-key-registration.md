---
id: user-browser-to-roaming-security-key-registration
title: User Browser To Roaming Security Key Registration
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | user-browser-to-roaming-security-key-registration                   |
| **Description**      |  Browser invokes navigator.credentials.create using a roaming security key for high-assurance users.   |
</div>

## Related Nodes
```mermaid
graph TD;
user-browser -- Connects --> roaming-security-key;

```

## Controls

        ### Uv Required

        User verification is required for roaming key-based enrollment.

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
                                <a href="https://zeropass.example/requirements/webauthn/user-verification" target="_blank">
                                    https://zeropass.example/requirements/webauthn/user-verification
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
                                            <td>privateKeyExportable</td>
                                            <td>false</td>
                                        </tr>
                                        <tr>
                                            <td>rpIdBinding</td>
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
                  <b>Sensitivity</b>
              </td>
              <td>
                  high
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Criticality</b>
              </td>
              <td>
                  high
                      </td>
          </tr>
          </tbody>
      </table>
  </div>
