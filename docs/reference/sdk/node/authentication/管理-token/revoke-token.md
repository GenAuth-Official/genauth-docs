# Revoke Token

<LastUpdated />

This document describes how to revoke `access_token` and `refresh_token`.

:::hint-danger
Note: If you use the method of verifying `access_token` and `refresh_token` locally, when revoking `access_token` and `refresh_token`, be sure to clear the cache of `access_token` and `refresh_token` locally, otherwise the result of local verification will still be valid. For details, please see [Verify access_token](./introspect-token.md).
:::

## Revoke Token

This interface is used to revoke the issued `access_token` and `refresh_token`.

## Request parameters

| Name  | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ----- | ------ | -------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |
| token | string | Yes                                    | -             | Access Token or Refresh Token              | `some-randon-string`                              |

## Sample code

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
  const result = await authenticationClient.revokeToken(
    // Need to be replaced with the real access_token or refresh_token
    "REPLACE_ME_WITH_REAL_CODE"
  );
  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `IntrospectTokenResult`

| Name    | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ---- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| success | bool | yes                                          | Whether the withdrawal was successful      | `true`                                      |

Sample result:

```json
true
```
