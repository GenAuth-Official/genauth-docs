# Get Token

<LastUpdated />

This document describes how to obtain `access_token`, `id_token` and `refresh_token` based on the OIDC standard, as well as the meaning and usage scenarios of these "tokens". If you need to use your own login page, please refer to the documentation in the login section.

<details>
<summary>1. What is "based on the OIDC standard protocol"? </summary>

!!!include(reference/sdk/common/hosted_page_signin.md)!!!

</details>

<br>

<details>
<summary>2. Click to expand the detailed introduction of access_token, id_token and refresh_token</summary>

!!!include(reference/sdk/common/token_desc.md)!!!

</details>

<br>

<details>
<summary>3. The token issued by GenAuth follows the specifications of the OIDC standard protocol. Depending on the specific usage scenario, you need to first select the appropriate authorization mode. Different authorization modes have different methods for obtaining tokens. Click here to expand the details. </summary>

!!!include(reference/sdk/common/grant_type_desc.md)!!!

</details>

## Use code to exchange for token

:::hint-info
Note: `refresh_token` will only be returned when `offline_access` is added to `scope` when initiating an OIDC login request. For details, see [Build login address](../login/build-authorize-url.md).
:::

### Request parameters

| Name | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                               | <div style="width:200px"></div>Sample value</div> |
| ---- | ------ | -------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| code | string | Yes                                    | -             | The one-time authorization code obtained. A code can only be used once and will be invalid after use. The validity period is 10 minutes. | `some-randon-string`                              |

### Sample code

```typescript
import { AuthenticationClient, Models } from "@genauth/nodejs";

const authenticationClient = new AuthenticationClient({
  // Need to be replaced with your GenAuth application ID
  appId: "GEN_AUTH_APP_ID",
  // Need to be replaced with your GenAuth application key
  appSecret: "GEN_AUTH_APP_SECRET",
  // Need to be replaced with your GenAuth application domain name
  appHost: "GEN_AUTH_APP_HOST",
  // Need to be replaced with your GenAuth application callback address
  redirectUri: "GEN_AUTH_APP_REDIRECT_URI",
});

(async () => {
  const result = await authenticationClient.getAccessTokenByCode(
    // After the user authentication is completed and the callback is sent to your system, you can get a one-time temporary credential from the query parameter of the callback address
    "REPLACE_ME_WITH_REAL_CODE"
  );
  console.log(JSON.stringify(result, null, 2));
})();
```

## Use refresh_toke to exchange for a new token

:::hint-info
Note: `refresh_token` will only be returned when `offline_access` is added to `scope` when an OIDC login request is initiated.
:::

When `access_token` expires, `refresh_token` can be used to exchange for a new `access_token`, thereby ensuring security and achieving the function of keeping the user logged in for a long time without the user having to log in again.

### Request parameters

| Name          | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>   | <div style="width:200px"></div>Sample value</div> |
| ------------- | ------ | -------------------------------------- | ------------- | -------------------------------------------- | ------------------------------------------------- |
| refresh_token | string | Yes                                    | -             | `refresh_token` returned when getting token. | `some-randon-string`                              |

### Sample code

```typescript
import { AuthenticationClient, Models } from "@genauth/nodejs";

const authenticationClient = new AuthenticationClient({
  // Need to be replaced with your GenAuth application ID
  appId: "GEN_AUTH_APP_ID",
  // Need to be replaced with your GenAuth application key
  appSecret: "GEN_AUTH_APP_SECRET",
  // Need to be replaced with your GenAuth application domain name
  appHost: "GEN_AUTH_APP_HOST",
  // Need to be replaced with your GenAuth application callback address
  redirectUri: "GEN_AUTH_APP_REDIRECT_URI",
});

(async () => {
  const result = await authenticationClient.getAccessTokenByCode(
    // After the user authentication is completed and the callback is sent to your system, you can get the one-time temporary credentials from the query parameter of the callback address
    "REPLACE_ME_WITH_REFRESH_TOKEN"
  );
  console.log(JSON.stringify(result, null, 2));
})();
```

## Request Response

Type: `OIDCTokenResponse`

| Name          | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                          | <div style="width:200px">Sample value</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------- | ------ | --------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| access_token  | string | No                                            | Interface call credentials, authorized to access resource API within a limited time | `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InIxTGtiQm8zOTI1UmIyWkZGckt5VTNNVmV4OVQyODE3S3gwdmJpNmlfS2MifQ.eyJqdGkiOiJ4R01uczd5cmNFckxiakNRVW9US1MiLCJzdWIiOiI1YzlmNzVjN2NjZjg3YjA1YTk yMWU5YjAiLCJpc3MiOiJodHRwczovL2F1dGhpbmcuY24iLCJpYXQiOjE1NTQ1Mzc4NjksImV4cCI6MTU1NDU0MTQ2OS wic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBvZmZsaW5lX2FjY2VzcyBwaG9uZSBlbWFpbCIsImF1ZCI6IjVjYTc2NWUzOT MxOTRkNTg5MWRiMTkyNyJ9.wX05OAgYuXeYM7zCxhrkvTO_taqxrCTG_L2ImDmQjMml6E3GXjYA9EFK0NfWquUI2mdS MAqohX-ndffN0fa5cChdcMJEm3XS9tt6-_zzhoOojK-q9MHF7huZg4O1587xhSofxs-KS7BeYxEHKn_10tAkjEIo9QtY UE7zD7JXwGUsvfMMjOqEVW6KuY3ZOmIq_ncKlB4jvbdrduxy1pbky_kvzHWlE9El_N5qveQXyuvNZVMSIEpw8_y5iSxPxKfrVwGY7hBaF40Oph-d2PO7AzKvxEVMamzLvMGBMaRAP_WttBPAUSqTU5uMXwMafryhGdIcQVsDPcGNgMX6E1jzLA`                      |
| id_token      | string | No                                            | User's identity credentials, which will contain user information after parsing      | `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InIxTGtiQm8zOTI1UmIyWkZGckt5VTNNVmV4OVQyODE3S3gw dmJpNmlfS2MifQ.eyJzdWIiOiI1YzlmNzVjN2NjZjg3YjA1YTkyMWU5YjAiLCJub25jZSI6IjIyMTIxIiwiYXRfaGFzaCI 6Ik5kbW9iZVBZOEFFaWQ2T216MzIyOXciLCJzaWQiOiI1ODM2NzllNC1lYWM5LTRjNDEtOGQxMS1jZWFkMmE5OWQzZWIiL CJhdWQiOiI1Y2E3NjVlMzkzMTk0ZDU4OTFkYjE5MjciLCJleHAiOjE1NTQ1NDE0NjksImlhdCI6MTU1NDUzNzg2OSwiaXN zIjoiaHR0cHM6Ly9hdXRoaW5nLmNuIn0.IQi5FRHO756e_eAmdAs3OnFMU7QuP-XtrbwCZC1gJntevYJTltEg1CLkG7eVh di_g5MJV1c0pNZ_xHmwS0R-E4lAXcc1QveYKptnMroKpBWs5mXwoOiqbrjKEmLMaPgRzCOdLiSdoZuQNw_z-gVhFiMNxI0 55TyFJdXTNtExt1O3KmwqanPNUi6XyW43bUl29v_kAvKgiOB28f3I0fB4EsiZjxp1uxHQBaDeBMSPaRVWQJcIjAJ9JLgka Dt1j7HZ2a1daWZ4HPzifDuDfi6_Ob1ZL40tWEC7xdxHlCEWJ4pUIsDjvScdQsez9aV_xMwumw3X4tgUIxFOCNVEvr73Fg` |
| refresh_token | string | No                                            | refresh_token is used to obtain a new AccessToken                                   | `WPsGJbvpBjqXz6IJIr1UHKyrdVF`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| token_type    | string | Yes                                           | token type                                                                          | `xxx`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| expire_in     | number | Yes                                           | expiration time in seconds                                                          | `7200`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

Sample result:

!!!include(reference/sdk/common/token_response_json.md)!!!
