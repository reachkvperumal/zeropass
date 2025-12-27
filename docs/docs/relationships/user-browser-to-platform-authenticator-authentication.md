---
id: user-browser-to-platform-authenticator-authentication
title: User Browser To Platform Authenticator Authentication
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | user-browser-to-platform-authenticator-authentication                   |
| **Description**      |  Browser invokes navigator.credentials.get; authenticator performs user verification and signs the challenge for the bound RP ID.   |
</div>

## Related Nodes
```mermaid
graph TD;
user-browser -- Connects --> platform-authenticator;

```

## Controls

        ### Uv Required

        Authentication requires user verification to meet phishing-resistant requirements.

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
