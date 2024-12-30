# Use QR code ticket to exchange for TokenSet

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This endpoint is to use QR code ticket to exchange for user's `access_token` and `id_token`.

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

`ManagementClient.exchange_token_set_with_qr_code_ticket`

## Request parameters

| Name          | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                        | <div style="width:200px">Sample value</div> |
| ------------- | ------ | -------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| ticket        | string | Yes                                    | -                                           | Returned when the QR code status is authorized. If "Web polling interface returns complete user information" is not enabled in console Application Security - General Security - Login Security - APP Scan Code Login Web Security (disabled by default), this ticket will be returned to exchange for complete user information. |                                             |
| client_id     | string | No                                     | -                                           | Application ID. Required when the application's "Exchange token authentication method" is configured as `client_secret_post`.                                                                                                                                                                                                     | `6342b8537axxxx047d314109`                  |
| client_secret | string | No                                     | -                                           | Application secret key. Required when the application's "Exchange token authentication method" is configured as `client_secret_post`.                                                                                                                                                                                             | `4203d30e5e915xxxxxx26c31c9adce68`          |

## Request response

Type: `LoginTokenRespDto`

| Name       | Type                                                               | Description                                                                                                  |
| ---------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                             | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
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

### <a id="LoginTokenResponseDataDto"></a> LoginTokenResponseDataDto !!!include(reference/sdk/common/token_response_table.md)!!!
