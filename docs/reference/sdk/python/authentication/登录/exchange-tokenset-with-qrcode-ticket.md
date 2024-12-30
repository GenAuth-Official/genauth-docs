# Use QR code ticket to exchange for TokenSet

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

This endpoint uses QR code ticket to exchange for user's `access_token` and `id_token`.

Note: Depending on the **application type** you selected when creating the application in GenAuth and the **exchange token authentication method** configured in the application, different forms of client identity verification are required when calling this interface.

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

When calling this interface, the `authorization` request header must be carried in the HTTP request header as a condition for verifying the client identity. The format of the `authorization` request header is as follows (where `client_id` is the application ID and `client_secret` is the application secret key):

```
Basic base64(<client_id>:<client_secret>)
```

Result example:

```
Basic NjA2M2ZiMmYzY3h4eHg2ZGY1NWYzOWViOjJmZTdjODdhODFmODY3eHh4eDAzMjRkZjEyZGFlZGM3
```

JS code example:

```js
"Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64");
```

</details>

## Method name

`AuthenticationClient.exchange_token_set_with_qr_code_ticket`

## Request parameters

| Name          | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                        | <div style="width:200px"></div>Sample value</div> |
| ------------- | ------ | -------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| ticket        | string | Yes                                    | -             | Returned when the QR code status is authorized. If "Web polling interface returns complete user information" is not enabled in console Application Security - General Security - Login Security - APP Scan Code Login Web Security (disabled by default), this ticket will be returned to exchange for complete user information. |                                                   |
| client_id     | string | No                                     | -             | Application ID. Required when the application's "Exchange token authentication method" is configured as `client_secret_post`.                                                                                                                                                                                                     | `6342b8537axxxx047d314109`                        |
| client_secret | string | No                                     | -             | Application secret key. Required when the application's "Exchange token authentication method" is configured as `client_secret_post`.                                                                                                                                                                                             | `4203d30e5e915xxxxxx26c31c9adce68`                |

## Request response

Type: `LoginTokenRespDto`

| Name       | Type                                                               | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                                             | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                                             | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#LoginTokenResponseDataDto">LoginTokenResponseDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example result:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "scope": "openid profile",
    "access_token": "eyJhbGciOiJSxxxxx",
    "id_token": "eyJhbGxxxx",
    "refresh_token": "WPsGJbvpBjqXz6IJIr1UHKyrdVF",
    "token_type": "bearer",
    "expire_in": 7200
  }
}
```

## Data structure

### <a id="LoginTokenResponseDataDto"></a> LoginTokenResponseDataDto

| Name          | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                     | <div style="width:200px">Sample value</div> |
| ------------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------- |
| scope         | string | No                                            | Scope corresponding to access_token                                            | `openid profile`                            |
| access_token  | string | No                                            | API call credentials, authorized to access resource API within a limited time  | `eyJhbGciOiJSxxxxx`                         |
| id_token      | string | No                                            | User's identity credentials, which will contain user information after parsing | `eyJhbGxxxx`                                |
| refresh_token | string | No                                            | refresh_token is used to obtain a new AccessToken                              | `WPsGJbvpBjqXz6IJIr1UHKyrdVF`               |
| token_type    | string | yes                                           | token type                                                                     | `bearer`                                    |
| expire_in     | number | yes                                           | expiration time in seconds                                                     | `7200`                                      |
