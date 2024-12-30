# Use mobile social login

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This endpoint is a mobile social login interface, which uses the temporary credentials returned by a third-party mobile social login to log in and exchange for the user's `id_token` and `access_token`. Please read the corresponding social login access process first.

Note: Depending on the **Application Type** you selected when creating the application in GenAuth and the **Exchange token authentication method** configured in the application, different forms of verification of the client's identity are required when calling this interface.

<details>
<summary>Click to expand details</summary>

<br>

You can find the **Exchange token authentication method** configuration item in **Application** - **Self-built application** - **Application details** - **Application configuration** - **Other settings** - **Authorization configuration** in the [GenAuth console](https://console.genauth.ai):

> Single-page web applications and client applications are hidden, and the default value is `none`, which is not allowed to be modified; backend applications and standard web applications can modify this configuration item.

![](https://files.authing.co/api-explorer/tokenAuthMethod.jpg)

#### When the exchange token authentication method is none

No additional operations are required to call this interface.

#### When the exchange token authentication method is client_secret_post

When calling this interface, the `client_id` and `client_secret` parameters must be passed in the body as conditions for verifying the client identity. Among them, `client_id` is the application ID, and `client_secret` is the application secret key.

#### When exchanging token authentication mode is client_secret_basic

When calling this interface, the `authorization` request header must be carried in the HTTP request header as a condition for verifying the client's identity. The format of the `authorization` request header is as follows (where `client_id` is the application ID, and `client_secret` is the application secret key.):

```
Basic base64(<client_id>:<client_secret>)
```

Sample result:

```
Basic NjA2M2ZiMmYzY3h4eHg2ZGY1NWYzOWViOjJmZTdjODdhODFmODY3eHh4eDAzMjRkZjEyZGFlZGM3
```

JS Code example:

```js
"Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64");
```

</details>

## Method name

`ManagementClient.sign_in_by_mobile`

## Request parameters

| Name                          | Type                                                                                             | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | <div style="width:200px">Sample value</div> |
| ----------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| extIdpConnidentifier          | string                                                                                           | yes                                    | -                                           | External identity source connection identifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `wework`                                    |
| connection                    | string                                                                                           | yes                                    | -                                           | Mobile social login type:<br>- `apple`: Apple mobile application<br>- `wechat`: WeChat mobile application<br>- `alipay`: Alipay mobile application<br>- `wechatwork`: WeChat mobile application for enterprises<br>- `wechatwork_agency`: WeChat mobile application for enterprises (agency development mode)<br>- `lark_internal`: Feishu mobile terminal enterprise self-built application<br>- `lark_public`: Feishu mobile terminal application store application<br>- `yidun`: NetEase Yidun one-click login<br>- `wechat_mini_program_code`: WeChat mini program uses code to log in<br>- `wechat_mini_program_phone`: WeChat mini program uses mobile phone number to log in<br>- `google`: Google mobile terminal social login<br> | `wechat`                                    |
| wechatPayload                 | <a href="#SignInByWechatPayloadDto">SignInByWechatPayloadDto</a>                                 | No                                     | -                                           | Apple mobile social login data, required when `connection` is `wechat`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                             |
| applePayload                  | <a href="#SignInByApplePayloadDto">SignInByApplePayloadDto</a>                                   | No                                     | -                                           | WeChat social login data, required when `connection` is `apple`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                             |
| alipayPayload                 | <a href="#SignInByAlipayPayloadDto">SignInByAlipayPayloadDto</a>                                 | No                                     | -                                           | Alipay social login data, required when `connection` is `alipay`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                             |
| wechatworkPayload             | <a href="#SignInByWechatworkDto">SignInByWechatworkDto</a>                                       | No                                     | -                                           | Enterprise WeChat social login data, required when `connection` is `wechatwork`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                             |
| wechatworkAgencyPayload       | <a href="#SignInByWechatworkAgencyPayloadDto">SignInByWechatworkAgencyPayloadDto</a>             | No                                     | -                                           | WeChat for Enterprise (Agency Development Mode) mobile social login data, required when `connection` is `wechatwork_agency`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                             |
| larkPublicPayload             | <a href="#SignInByLarkPublicPayloadDto">SignInByLarkPublicPayloadDto</a>                         | No                                     | -                                           | Social login data for mobile apps in Lark App Store. Required when `connection` is `lark_public`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                             |
| larkInternalPayload           | <a href="#SignInByLarkInternalPayloadDto">SignInByLarkInternalPayloadDto</a>                     | No                                     | -                                           | Social login data for mobile apps in Lark self-built apps. Required when `connection` is `lark_internal`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                             |
| yidunPayload                  | <a href="#SignInByYidunPayloadDto">SignInByYidunPayloadDto</a>                                   | No                                     | -                                           | NetEase Yidun mobile social login data, required when `connection` is `yidun`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                             |
| wechatMiniProgramCodePayload  | <a href="#SignInByWechatMiniProgramCodePayloadDto">SignInByWechatMiniProgramCodePayloadDto</a>   | No                                     | -                                           | WeChat mini program uses code login related data, required when `connection` is `wechat_mini_program_code`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                             |
| wechatMiniProgramPhonePayload | <a href="#SignInByWechatMiniProgramPhonePayloadDto">SignInByWechatMiniProgramPhonePayloadDto</a> | No                                     | -                                           | WeChat Mini Program uses mobile phone number to log in related data. Required when `connection` is `wechat_mini_program_phone`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                             |
| googlePayload                 | <a href="#SignInByGooglePayloadDto">SignInByGooglePayloadDto</a>                                 | No                                     | -                                           | Google mobile social login data, required when `connection` is `google`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                             |
| options                       | <a href="#SignInByMobileOptionsDto">SignInByMobileOptionsDto</a>                                 | No                                     | -                                           | Optional parameters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                             |
| client_id                     | string                                                                                           | No                                     | -                                           | Application ID. Required when the application's "Exchange token authentication method" is configured as `client_secret_post`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `6342b8537axxxx047d314109`                  |
| client_secret                 | string                                                                                           | No                                     | -                                           | Application secret key. Required when the application's "Exchange token authentication method" is configured as `client_secret_post`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `4203d30e5e915xxxxxx26c31c9adce68`          |

## Request response

Type: `LoginTokenRespDto`

| Name       | Type                                                               | Description                                                                                                  |
| ---------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                             | Description                                                                                                  |
| apiCode    | number                                                             | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                             | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#LoginTokenResponseDataDto">LoginTokenResponseDataDto</a> | Response data                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "access_token": "eyJhbGciOiJSxxxxx",
    "id_token": "eyJhbGxxxx",
    "refresh_token": "WPsGJbvpBjqXz6IJIr1UHKyrdVF",
    "token_type": "bearer",
    "expire_in": 7200
  }
}
```

## Data structure

### <a id="SignInByWechatPayloadDto"></a> SignInByWechatPayloadDto

| Name | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                     | <div style="width:200px">Sample value</div> |
| ---- | ------ | --------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------- |
| code | string | No                                            | One-time temporary code returned by WeChat mobile social login | `1660291866076`                             |

### <a id="SignInByApplePayloadDto"></a> SignInByApplePayloadDto

| Name | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                | <div style="width:200px">Sample value</div> |
| ---- | ------ | --------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------- |
| code | string | No                                            | One-time temporary code returned by social login on Apple mobile terminal | `1660291866076`                             |

### <a id="SignInByAlipayPayloadDto"></a> SignInByAlipayPayloadDto

| Name | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                 | <div style="width:200px">Sample value</div> |
| ---- | ------ | -------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------- |
| code | string | No                                           | One-time temporary code returned by social login on Alipay mobile terminal | `1660291866076`                             |

### <a id="SignInByWechatworkDto"></a> SignInByWechatworkDto

| Name | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                 | <div style="width:200px">Sample value</div> |
| ---- | ------ | --------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------- |
| code | string | No                                            | One-time temporary code returned by social login on WeChat mobile terminal | `1660291866076`                             |

### <a id="SignInByWechatworkAgencyPayloadDto"></a> SignInByWechatworkAgencyPayloadDto

| Name | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                       | <div style="width:200px">Example value</div> |
| ---- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| code | string | No                                            | One-time temporary code returned by WeChat for Enterprise (development mode) mobile social login | `1660291866076`                              |

### <a id="SignInByLarkPublicPayloadDto"></a> SignInByLarkPublicPayloadDto

| Name | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                      | <div style="width:200px">Sample value</div> |
| ---- | ------ | --------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------- |
| code | string | No                                            | One-time temporary code returned by social login on the mobile terminal of the Feishu App Store | `1660291866076`                             |

### <a id="SignInByLarkInternalPayloadDto"></a> SignInByLarkInternalPayloadDto

| Name | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                 | <div style="width:200px">Sample value</div> |
| ---- | ------ | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| code | string | No                                            | One-time temporary code returned by social login on the mobile terminal of Feishu's self-built application | `1660291866076`                             |

### <a id="SignInByYidunPayloadDto"></a> SignInByYidunPayloadDto

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| token       | string | No                                            | NetEase Yidun token                        | `1660291866076`                             |
| accessToken | string | No                                            | NetEase Yidun operator authorization code  | `1660291866076`                             |

### <a id="SignInByWechatMiniProgramCodePayloadDto"></a> SignInByWechatMiniProgramCodePayloadDto

| Name          | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                               | <div style="width:200px">Sample value</div> |
| ------------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------- |
| encryptedData | string | yes                                           | Get the encrypted data (encryptedData) returned by WeChat open data      |                                             |
| iv            | string | yes                                           | Symmetric decryption algorithm initialization vector, returned by WeChat |                                             |
| code          | string | yes                                           | User `code` returned by `wx.login` interface                             |                                             |

### <a id="SignInByWechatMiniProgramPhonePayloadDto"></a> SignInByWechatMiniProgramPhonePayloadDto

| Name          | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                               | <div style="width:200px">Sample value</div> |
| ------------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------- |
| encryptedData | string | Yes                                           | Get the encrypted data (encryptedData) returned by WeChat open data      |                                             |
| iv            | string | Yes                                           | Symmetric decryption algorithm initialization vector, returned by WeChat |                                             |
| code          | string | Yes                                           | User `code` returned by `wx.login` interface                             |                                             |

### <a id="SignInByGooglePayloadDto"></a> SignInByGooglePayloadDto

| Name | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>      | <div style="width:200px">Example value</div> |
| ---- | ------ | --------------------------------------------- | ----------------------------------------------- | -------------------------------------------- |
| code | string | is                                            | the code obtained by Google mobile social login |                                              |

### <a id="SignInByMobileOptionsDto"></a> SignInByMobileOptionsDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| scope      | string | no                                           | The permissions that need to be requested, must include openid. If you need to obtain the mobile phone number and email, you need to include phone email; if you need refresh_token, you need to include offline_access. Please separate multiple scopes with spaces. The decoded content of id_token will contain the user information related fields corresponding to these scopes. <br>- `openid`: Must be included. <br>- `profile`: Returns birthdate, family_name, gender, given_name, locale, middle_name, name, nickname, picture, preferred_username, profile, updated_at, website, zoneinfo fields. <br>- `username`: Returns username. <br>- `email`: Returns email, email_verified. <br>- `phone`: Returns phone_number, phone_number_verified. <br>- `offline_access`: If this parameter exists, the token interface will return the refresh_token field. <br>- `roles`: Returns the user's role list. <br>- `external_id`: The user ID of the original system. <br>- `extended_fields`: Returns the user's extended field information, the content is an object, the key is the extended field name, the value is the extended field value. <br>- `tenant_id`: Returns the user's tenant ID. <br> | `openid profile`                            |
| context    | string | No                                           | Additional request context, which will be passed to the `context` object of the [Pipeline](https://docs.genauth.ai/guides/pipeline/) before and after authentication. Learn [how to get the additional context passed in the `context` parameter of Pipeline](https://docs.genauth.ai/guides/pipeline/context-object.html).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `{"source":"utm"}`                          |
| tenantId   | string | No                                           | Tenant ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `625783d629f2bd1f5ddddd98c`                 |
| customData | object | No                                           | To set additional user custom data, you need to [configure custom data](https://docs.genauth.ai/guides/users/user-defined-field/) in the GenAuth console first.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `{"school":"pku","age":"20"}`               |

### <a id="LoginTokenResponseDataDto"></a> LoginTokenResponseDataDto

!!!include(reference/sdk/common/token_response_table.md)!!!
