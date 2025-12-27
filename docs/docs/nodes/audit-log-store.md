---
id: audit-log-store
title: AuditLogStore
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | audit-log-store                   |
| **Node Type**       | database             |
| **Name**            | AuditLogStore                 |
| **Description**     | Stores enrollment, authentication, and risk events for monitoring, forensics, and compliance.          |

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
                        audit-log-store-endpoint
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
                                        <b>Host</b>
                                    </td>
                                    <td>
                                        audit-log.internal
                                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Port</b>
                                    </td>
                                    <td>
                                        443
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
audit-log-store[audit-log-store]:::highlight;
auth-backend -- Connects --> audit-log-store;
auth-backend -- Connects --> audit-log-store;
classDef highlight fill:#f2bbae;

```
## Controls

        ### Tamper Evident Logging

        Audit logs are append-only and tamper-evident with restricted access.

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
                                <a href="https://zeropass.example/requirements/logging/tamper-evident" target="_blank">
                                    https://zeropass.example/requirements/logging/tamper-evident
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
                                            <td>appendOnly</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>tamperEvident</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>restrictedRead</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>retentionDays</td>
                                            <td>365</td>
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
                  security-team
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
                      <li>SOC2</li>
                      <li>ISO-27001</li>
                  </ul>
              </td>
          </tr>
          </tbody>
      </table>
  </div>
