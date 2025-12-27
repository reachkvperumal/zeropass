---
id: end-user-to-web-frontend
title: End User To Web Frontend
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | end-user-to-web-frontend                   |
| **Description**      |  User connects to the login UI on the legitimate origin to enroll or authenticate.   |
</div>

## Related Nodes
```mermaid
graph TD;
end-user -- Connects --> web-frontend;

```

## Controls

        ### Tls And Hsts

        User-to-frontend transport is protected by HTTPS and HSTS.

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
                                <a href="https://zeropass.example/requirements/transport/tls" target="_blank">
                                    https://zeropass.example/requirements/transport/tls
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
                                            <td>hsts</td>
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
