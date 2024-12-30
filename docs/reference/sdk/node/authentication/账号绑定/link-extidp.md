# Bind external identity source

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Since most external identity source logins do not allow the user to directly enter the account and password to log in to the third-party system, the binding of external identity sources always requires jumping to the other party's login page for authentication. This endpoint will jump to the third-party login page first through the browser `302` jump method.
After the end user completes the authentication in the third-party system, the browser will jump to the GenAuth server, and the GenAuth server will bind this external identity source to the user. The final result will be passed to the developer through the browser Window Post Message.
You can place a button in your application system to guide the user to click it, and a Window Popup will pop up with the address of this endpoint. After the user completes the authentication in the third-party identity source, this Popup will be passed to the parent window through Window Post Message.

To this end, we encapsulate the relevant methods in the `@authing/web` SDK, saving developers a lot of details:

```typescript
import { GenAuth } from "@authing/web";
const sdk = new GenAuth({
  // Application authentication address, for example: https://domain.genauth.ai
  domain: "",

  // GenAuth application ID
  appId: "GEN_AUTH_APP_ID",

  // Login callback address, which needs to be specified in the console "Application Configuration - Login callback URL"
  redirectUri: "your_redirect_uri",
});

// success indicates whether the binding operation is successful;
// errMsg is the specific reason for failure if the binding fails, such as the identity source has been bound to another account, etc.
// identities is the third-party identity information specifically bound for this binding operation
const { success, errMsg, identities } = await sdk.bindExtIdpWithPopup({
  extIdpConnIdentifier: "my-wechat",
});
```

After successfully binding the external identity source, you can get the user's information in this third-party identity source. Take binding a Feishu account as an example:

```json
[
  {
    "identityId": "62f20932xxxxbcc10d966ee5",
    "extIdpId": "62f209327xxxxcc10d966ee5",
    "provider": "lark",
    "type": "open_id",
    "userIdInIdp": "ou_8bae746eac07cd2564654140d2a9ac61",
    "originConnIds": ["62f2093244fa5cb19ff21ed3"]
  },
  {
    "identityId": "62f726239xxxxe3285d21c93",
    "extIdpId": "62f209327xxxxcc10d966ee5",
    "provider": "lark",
    "type": "union_id",
    "userIdInIdp": "on_093ce5023288856aa0abe4099123b18b",
    "originConnIds": ["62f2093244fa5cb19ff21ed3"]
  },
  {
    "identityId": "62f72623e011cf10c8851e4c",
    "extIdpId": "62f209327xxxxcc10d966ee5",
    "provider": "lark",
    "type": "user_id",
    "userIdInIdp": "23ded785",
    "originConnIds": ["62f2093244fa5cb19ff21ed3"]
  }
]
```

As you can see, we have obtained the user's identity information in Feishu:

- `open_id`: ou_8bae746eac07cd2564654140d2a9ac61
- `union_id`: on_093ce5023288856aa0abe4099123b18b
- `user_id`: 23ded785

After binding this external identity source, subsequent users can use this identity source to log in, see **Login** interface.

## Request parameters

| Name                    | Type   | <div style="width:80px">Is it required</div> | Default value | <div style="width:300px">Description</div>            | <div style="width:200px"></div>Sample value</div> |
| ----------------------- | ------ | -------------------------------------------- | ------------- | ----------------------------------------------------- | ------------------------------------------------- |
| ext_idp_conn_identifier | string | Yes                                          | -             | External identity source connection unique identifier | `my-wechat`                                       |
| app_id                  | string | Yes                                          | -             | GenAuth application ID                                |                                                   |
| id_token                | string | Yes                                          | -             | User's id_token                                       |                                                   |

## Request response

Type: `GenerateBindExtIdpLinkRespDto`

| Name       | Type                                                                       | Description                                                                                                  |
| ---------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                                     | Description                                                                                                  |
| apiCode    | number                                                                     | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                                     | Request ID. It will be returned when the request fails.                                                      |
| data       | <a href="#GenerateBindExtIdpLinkDataDto">GenerateBindExtIdpLinkDataDto</a> | Response data                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {}
}
```

## Data structure

### <a id="GenerateBindExtIdpLinkDataDto"></a> GenerateBindExtIdpLinkDataDto

| Name | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                  | <div style="width:200px">Sample value</div> |
| ---- | ------ | -------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------- |
| url  | string | yes                                          | URL of the external identity source to which the user binds |                                             |
