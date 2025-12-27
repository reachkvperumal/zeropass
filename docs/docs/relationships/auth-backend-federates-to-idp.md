---
id: auth-backend-federates-to-idp
title: Auth Backend Federates To Idp
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | auth-backend-federates-to-idp                   |
| **Description**      |  Optional federation of authentication results to an IdP via OIDC authorization code (PKCE) and/or SAML assertions.   |
</div>

## Related Nodes
```mermaid
graph TD;
auth-backend -- Connects --> identity-provider;

```

## Controls

        ### Federation Controls

        Federation enforces PKCE, issuer/audience pinning, and signed assertion validation.

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
                                <a href="https://zeropass.example/requirements/federation/secure" target="_blank">
                                    https://zeropass.example/requirements/federation/secure
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
                                            <td>oidc</td>
                                            <td>[object Object]</td>
                                        </tr>
                                        <tr>
                                            <td>saml</td>
                                            <td>[object Object]</td>
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
