# Verify Token

<LastUpdated />

This document describes how to verify the legitimacy of `access_token` and `refresh_token`. For an introduction to `access_token` and `refresh_token`, see [Get Token](./get-access-token.md).

The GenAuth Go SDK provides two ways to verify Tokens: online verification and local verification. Here is a comparison of the two methods:

| <div style="width:80px">Verification method</div> | <div style="width:80px">Advantages</div>                                             | <div style="width:80px">Disadvantages</div>                                                                                                                                                                                                                                                                   |
| ------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Online verification                               | Use a central server to verify the Token to ensure that the final result is correct. | <br> - Network requests will be generated. <br> - There is a risk of single point failure.                                                                                                                                                                                                                    |
| Local verification                                | No network request required, faster performance.                                     | If `access_token` and `refresh_token` are manually revoked, and the application server does not clear the cached `access_token`, the local verification will still pass, so the application server must clear the locally cached `access_token` and `refresh_token` after `access_token` and `refresh_token`. |

## Online verification

This interface is used to verify `access_token` and `refresh_token` online.

### Request parameters

| Name  | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ----- | ------ | -------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |
| token | string | Yes                                    | -             | Access Token or Refresh Token              | `some-randon-string`                              |

### Sample code

```typescript
import { AuthenticationClient, Models } from "@genauth/nodejs";

const authenticationClient = new AuthenticationClient({
  // Need to be replaced with your GenAuth application ID
  appId: "GEN_AUTH_APP_ID",
  // Need to be replaced with your GenAuth application secret
  appSecret: "GEN_AUTH_APP_SECRET",
  // Need to be replaced with your GenAuth Application domain name
  appHost: "GEN_AUTH_APP_HOST",
  // Need to be replaced with your GenAuth application callback address
  redirectUri: "GEN_AUTH_APP_REDIRECT_URI",
});

(async () => {
  const result = await authenticationClient.introspectToken(
    // Need to be replaced with the real access_token or refresh_token
    "REPLACE_ME_WITH_REAL_CODE"
  );
  console.log(JSON.stringify(result, null, 2));
})();
```

### Request response

Type: `IntrospectTokenResult`

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                     | <div style="width:200px">Sample value</div> |
| --------- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------- |
| active    | bool   | yes                                          | valid                                                                                          | `true`                                      |
| sub       | string | no                                           | The user ID corresponding to this token, returned when the token is valid.                     | `xxxxxx`                                    |
| client_id | string | no                                           | The application ID that issued this token, returned when the token is valid.                   | `xxxxxx`                                    |
| exp       | string | no                                           | The expiration time of the token, as a timestamp in seconds. Returned when the token is valid. | `1601460494`                                |
| iat       | string | no                                           | The issuance time of the token, as a timestamp in seconds. Returned when the token is valid.   | `1601456894`                                |
| iss       | string | no                                           | Issuer, returned when the token is valid.                                                      | `https://example.genauth.ai/oidc`           |
| jti       | string | no                                           | The unique ID of this token, returned when the token is valid.                                 | `K5TYewNhvdGBdHiRifMyW`                     |
| scope     | string | No                                           | A comma-separated array of scopes to be returned when the token is valid.                      | `openid profile`                            |

Sample result:

```json
{
  "active": true,
  "sub": "xxxx",
  "client_id": "xxxxx",
  "exp": 1601460494,
  "iat": 1601456894,
  "iss": "https://example.genauth.ai/oidc",
  "jti": "K5TYewNhvdGBdHiRifMyW",
  "scope": "openid profile email phone"
}
```

## Local verification

### Request parameters

| Name  | Type   | <div style="width:80px">Is it required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ----- | ------ | -------------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |
| token | string | yes                                          | -             | Access Token or Refresh Token              | `some-randon-string`                              |

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
  const result = await authenticationClient.parseAccessToken(
    // Need to be replaced with real access_token or refresh_token
    "REPLACE_ME_WITH_REAL_CODE"
  );
  console.log(JSON.stringify(result, null, 2));
})();
```

### Request response

Type: `IntrospectTokenResult`

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                     | <div style="width:200px">Example value</div> |
| ----- | ------ | -------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| aud   | string | Yes                                          | Application ID that issued this token                          | `xxxxxxx`                                    |
| sub   | string | Yes                                          | User ID corresponding to this token                            | `xxxxxxx`                                    |
| exp   | string | Yes                                          | Token expiration time, as a timestamp in seconds.              | `1601460494`                                 |
| iat   | string | Yes                                          | Token issuance time, as a timestamp in seconds.                | `1601460494`                                 |
| iss   | string | Yes                                          | OIDC Issuer                                                    | `https://example.genauth.ai/oidc`            |
| scope | string | Yes                                          | scope                                                          | `openid profile`                             |
| jti   | string | No                                           | The unique ID of this token, returned when the token is valid. | `K5TYewNhvdGBdHiRifMyW`                      | Example results: `json { "sub": "635908aba85516ca765699a7", "aud": "633ba16e3e48825124d34a6f", "scope": "openid profile email address phone", "iat": 1666779590, "exp": 1667989190, "jti": "ZXdivSulJUiVhRNcSs9CMJhpBBAe2i7cKBt1AXg1BE9", "iss": "https://testguoqing.genauth.ai/oidc" } ` |
