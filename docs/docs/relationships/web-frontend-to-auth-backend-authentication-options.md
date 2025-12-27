---
id: web-frontend-to-auth-backend-authentication-options
title: Web Frontend To Auth Backend Authentication Options
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | web-frontend-to-auth-backend-authentication-options                   |
| **Description**      |  Frontend requests WebAuthn authentication options (challenge + request options) for passwordless sign-in or MFA.   |
</div>

## Related Nodes
```mermaid
graph TD;
web-frontend -- Connects --> auth-backend;

```

## Controls

        ### Request Hardening

        Authentication options are issued with fresh challenges and hardened against abuse.

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
                                <a href="https://zeropass.example/requirements/webauthn/assertion-options" target="_blank">
                                    https://zeropass.example/requirements/webauthn/assertion-options
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
                                            <td>freshChallenge</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>challengeTtlSeconds</td>
                                            <td>300</td>
                                        </tr>
                                        <tr>
                                            <td>rateLimiting</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>noStoreResponses</td>
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
                  moderate
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
