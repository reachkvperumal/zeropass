---
id: web-frontend-to-auth-backend-authentication-complete
title: Web Frontend To Auth Backend Authentication Complete
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | web-frontend-to-auth-backend-authentication-complete                   |
| **Description**      |  Frontend submits assertion response; backend validates signature, challenge, origin, RP ID, and userVerified; then creates a session/tokens.   |
</div>

## Related Nodes
```mermaid
graph TD;
web-frontend -- Connects --> auth-backend;

```

## Controls

        ### Assertion Protection

        Assertion payload is protected in transit and validated strictly; signCount is checked when available.

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
                                <a href="https://zeropass.example/requirements/webauthn/assertion-validation" target="_blank">
                                    https://zeropass.example/requirements/webauthn/assertion-validation
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
                                            <td>tlsRequired</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>verifySignature</td>
                                            <td>true</td>
                                        </tr>
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
                                            <td>signCountCheck</td>
                                            <td>enforce-when-supported</td>
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
