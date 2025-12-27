---
id: web-frontend-to-auth-backend-registration-options
title: Web Frontend To Auth Backend Registration Options
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | web-frontend-to-auth-backend-registration-options                   |
| **Description**      |  Frontend requests WebAuthn registration options (challenge + creation options) for the user.   |
</div>

## Related Nodes
```mermaid
graph TD;
web-frontend -- Connects --> auth-backend;

```

## Controls

        ### Request Hardening

        Options endpoints enforce CSRF protections, rate limits, and origin/RP pinning.

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
                                <a href="https://zeropass.example/requirements/api/request-hardening" target="_blank">
                                    https://zeropass.example/requirements/api/request-hardening
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
                                            <td>csrfProtection</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>rateLimiting</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>allowedOriginsPinned</td>
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
