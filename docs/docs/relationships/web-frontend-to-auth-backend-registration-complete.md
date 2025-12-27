---
id: web-frontend-to-auth-backend-registration-complete
title: Web Frontend To Auth Backend Registration Complete
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | web-frontend-to-auth-backend-registration-complete                   |
| **Description**      |  Frontend submits attestation response to complete registration; backend verifies challenge/origin/RP ID and userVerified.   |
</div>

## Related Nodes
```mermaid
graph TD;
web-frontend -- Connects --> auth-backend;

```

## Controls

        ### Assertion Attestation Protection

        Attestation payload is protected in transit and validated strictly server-side.

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
                                <a href="https://zeropass.example/requirements/webauthn/attestation-validation" target="_blank">
                                    https://zeropass.example/requirements/webauthn/attestation-validation
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
