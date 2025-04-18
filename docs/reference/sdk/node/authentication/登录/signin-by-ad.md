# Login with AD account and password

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Login with AD account and password.

## Request parameters

| Name           | Type                                             | <div style="width:80px">Is it required</div> | Default value | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                        | <div style="width:200px"></div>Sample value</div> |
| -------------- | ------------------------------------------------ | -------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| sAMAccountName | String                                           | Yes                                          | -             | sAMAccountName of the account in the AD user directory                                                                                                                                                                                                                                                                                                            | `test`                                            |
| password       | String                                           | Yes                                          | -             | User password, not encrypted by default. All GenAuth APIs use the HTTPS protocol to securely transmit passwords, which can ensure security to a certain extent. If you need a higher level of security, we also support `RSA256` and the national secret `SM2` password encryption method. For details, see the optional parameter `options.passwordEncryptType`. | `passw0rd`                                        |
| options        | <a href="#SignInOptionsDto">SignInOptionsDto</a> | No                                           | -             | Optional                                                                                                                                                                                                                                                                                                                                                          | `{"passwordEncryptType":"none"}`                  |

## Example code

```typescript
import { AuthenticationClient, Models } from "@genauth/nodejs";

const authenticationClient = new AuthenticationClient({
  // Need to replace with your GenAuth AppId, Secret and Host
  appId: "GEN_AUTH_APP_ID",
  appSecret: "GEN_AUTH_APP_SECRET",
  appHost: "GEN_AUTH_APP_HOST",
});

(async () => {
  const result = await authenticationClient.signInByAD({
    password: "passw0rd",
    sAMAccountName: "testuser",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `LoginTokenRespDto`

| Name       | Type                                                               | Description                                                                                                  |
| ---------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                             | Description                                                                                                  |
| apiCode    | number                                                             | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                             | Request ID. It will be returned when the request fails.                                                      |
| data       | <a href="#LoginTokenResponseDataDto">LoginTokenResponseDataDto</a> | Response data                                                                                                |

Sample result:

!!!include(reference/sdk/common/token_response_json.md)!!!

## Data structure

### <a id="SignInOptionsDto"></a> SignInOptionsDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| scope      | string | No                                           | The permissions that need to be requested, must include openid. If you need to obtain the phone number and email, you need to include phone email; if you need refresh_token, you need to include offline_access. Multiple scopes should be separated by spaces. The decoded content of id_token will contain the user information related fields corresponding to these scopes. <br>- `openid`: Must be included. <br>- `profile`: Returns birthdate, family_name, gender, given_name, locale, middle_name, name, nickname, picture, preferred_username, profile, updated_at, website, zoneinfo fields. <br>- `username`: Returns username. <br>- `email`: Returns email, email_verified. <br>- `phone`: Returns phone_number, phone_number_verified. <br>- `offline_access`: If this parameter exists, the token interface will return the refresh_token field. <br>- `roles`: Returns the user's role list. <br>- `external_id`: The user's user ID in the original system. <br>- `extended_fields`: Returns the user's extended field information, the content is an object, the key is the extended field name, and the value is the extended field value. <br>- `tenant_id`: Returns the user's tenant ID. <br> | `openid profile`                            |
| clientIp   | string | No                                           | The real IP address of the client. By default, GenAuth will identify the IP of the request source as the IP address of the user's login. If you call this interface in the backend server, you need to set this IP to the user's real request IP.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `192.168.0.1`                               |
| context    | string | no                                           | Additional request context, which will be passed to the `context` object of the [Pipeline](https://docs.genauth.ai/guides/pipeline/) before and after authentication. Learn [how to get the additional context passed in the `context` parameter of the Pipeline](https://docs.genauth.ai/guides/pipeline/context-object.html).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `{"source":"utm"}`                          |
| tenantId   | string | no                                           | Tenant ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `625783d629f2bd1f5ddddd98c`                 |
| customData | object | no                                           | Set additional user custom data. You need to [configure custom data](https://docs.genauth.ai/guides/users/user-defined-field/) in the GenAuth console first.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### <a id="LoginTokenResponseDataDto"></a> LoginTokenResponseDataDto

!!!include(reference/sdk/common/token_response_table.md)!!!
