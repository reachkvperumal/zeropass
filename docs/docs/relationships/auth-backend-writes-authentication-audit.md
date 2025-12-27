---
id: auth-backend-writes-authentication-audit
title: Auth Backend Writes Authentication Audit
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | auth-backend-writes-authentication-audit                   |
| **Description**      |  Backend writes an authentication audit event (success/failure and risk evaluation).   |
</div>

## Related Nodes
```mermaid
graph TD;
auth-backend -- Connects --> audit-log-store;

```

## Controls

        ### Audit Integrity

        Authentication audit events are securely ingested and stored tamper-evidently.

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
                                <a href="https://zeropass.example/requirements/logging/secure-ingest" target="_blank">
                                    https://zeropass.example/requirements/logging/secure-ingest
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
                                            <td>mTLS</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>appendOnly</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>tamperEvident</td>
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
                  medium
                      </td>
          </tr>
          </tbody>
      </table>
  </div>
