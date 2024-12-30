# Use QR code ticket to exchange for TokenSet

This endpoint uses a QR code ticket to exchange the user's `access_token` and `id_token`.

<!--
Warning⚠️:
Do not modify the document directly,
https://github.com/Authing/authing-docs-factory
Use this project to build

-->

Note: Depending on the **application type** you select when creating an application with GenAuth and the **token exchange authentication method** configured in the application, different forms of verification of the client's identity are required when calling this interface.

<LastUpdated />

<details>

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API. It is consistent with API parameters and return results. The description of this document is incorrect. , please refer to V3 API.

<summary>Click to expand details</summary>

<br>

You can go to **Application** - **Self-built Application** - **Application Details** - **Application Configuration** - ** in [GenAuth Console](https://console.genauth.ai) Additional Settings** - **Authorization Configuration**
Find the **exchange token authentication method** configuration item:

> Single-page web applications and client applications are hidden, the default is `none`, and modification is not allowed; back-end applications and standard web applications can modify this configuration item.

![](https://files.authing.co/api-explorer/tokenAuthMethod.jpg)

#### In exchange for token authentication method is none

No additional operations are required to call this interface.

#### In exchange for token authentication method is client_secret_post

When calling this interface, the `client_id` and `client_secret` parameters must be passed in the body as a condition for verifying the client's identity. Where `client_id` is the application ID and `client_secret` is the application key.

#### In exchange for token authentication method is client_secret_basic

When calling this interface, the `authorization` request header must be carried in the HTTP request header as a condition for verifying the client's identity. The format of the `authorization` request header is as follows (where `client_id` is the application ID and `client_secret` is the application key.):

Basic base64(<client_id>:<client_secret>)
Example of results:
Basic NjA2M2ZiMmYzY3h4eHg2ZGY1NWYzOWViOjJmZTdjODdhODFmODY3eHh4eDAzMjRkZjEyZGFlZGM3

JS code example:

```js
"Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64");
```

</details>

`AuthenticationClient.exchangeTokenSetWithQrCodeTicket`

| Name   | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                               | <div style="width:200px "></div>Example value</div> |
| ------ | ------ | -------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| ticket | string | Yes                                    | -             | Returned when the QR code status is authorized. If "Web polling interface returns complete user information" is not turned on in the console application security - general security - login security - APP scan code to log in to web security (it is turned off by default), this ticket will be returned in exchange for a complete user information. |                                                     |

| client_id | string | No | - | Application ID. It needs to be passed when the application's "token exchange authentication method" is configured as `client_secret_post`. | `6342b8537axxxx047d314109` |

| client_secret | string | No | - | Application secret. It needs to be passed when the application's "token exchange authentication method" is configured as `client_secret_post`. | `4203d30e5e915xxxxxx26c31c9adce68` |

Type: `LoginTokenRespDto`

| Name | Type | Description |

| ---------- | ------------------------------------------ ---------------------------- | ----------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------------------ |
| statusCode | number | Business status code. You can use this status code to determine whether the operation is successful. 200 means success. |

```

| message | string | description information |

```

| apiCode | number | Subdivided error code. The specific error type can be obtained through this error code (successful requests will not be returned). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#t ag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90% 86/apiCode) |

| requestId | string | Request ID. Returned when the request fails. |

| data | <a href="#LoginTokenResponseDataDto">LoginTokenResponseDataDto</a> | response data |

```

"scope": "openid profile",

```

"access_token": "eyJhbGciOiJSxxxxx",
"id_token": "eyJhbGxxxx",
"refresh_token": "WPsGJbvpBjqXz6IJIr1UHKyrdVF",

"token_type": "bearer",

"expire_in": 7200

````

| Name  | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| ----- | ------ | -------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| scope | string | No                                     | scope corresponding to access_token        | `openid profile`                             |

## Method name

| access_token | string | No | Credentials for interface calls, authorized to access resources within the limited time API | `eyJhbGciOiJSxxxxx` |
| id_token | string | No | The user's identity credentials, which will contain user information after parsing | `eyJhbGxxxx` |
| refresh_token | string | No | refresh_token is used to obtain a new AccessToken | `WPsGJbvpBjqXz6IJIr1UHKyrdVF` |

## Request parameters

| token_type | string | yes | token type | `bearer` |
| expire_in | number | Yes | Expiration time in seconds | `7200` |

## Request response

Example results:

```json
{
  "statusCode": 200,

  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {}
}
````

## Data structure

### <a id="LoginTokenResponseDataDto"></a> LoginTokenResponseDataDto
