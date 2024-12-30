# Query push code status

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

According to the order of push code use, there are five states: pushed, waiting for user consent/cancel authorization, push code expired, and unknown error. The front end should give users different feedback through different states.

## Method name

`AuthenticationClient.checkPushCodeStatus`

## Request parameters

| Name       | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ---------- | ------ | -------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |
| pushCodeId | string | yes                                    | -             | Push code (unique ID for push login)       |                                                   |

## Request response

Type: `CheckPushCodeStatusRespDto`

| Name       | Type                                                                 | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                               | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                               | description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                               | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#CheckPushCodeStatusDataDto">CheckPushCodeStatusDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "status": "PUSHED",
    "tokenSet": {
      "scope": "openid profile",
      "access_token": "eyJhbGciOiJSxxxxx",
      "id_token": "eyJhbGxxxx",
      "refresh_token": "WPsGJbvpBjqXz6IJIr1UHKyrdVF",
      "token_type": "bearer",
      "expire_in": 7200
    }
  }
}
```

## Data structure

### <a id="CheckPushCodeStatusDataDto"></a> CheckPushCodeStatusDataDto

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                 | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| status   | string | Yes                                           | Push code status. According to the order of push login, there are five states: PUSHED (pushed), AUTHORIZED (user authorized), CANCELLED (cancelled authorization), EXPIRED (push login expired) and ERROR (unknown error). | PUSHED                                      |
| tokenSet |        | No                                            | This data will be returned only when the push code status is authorized. Nested type: <a href="#LoginTokenResponseDataDto">LoginTokenResponseDataDto</a>.                                                                  |                                             |

### <a id="LoginTokenResponseDataDto"></a> LoginTokenResponseDataDto

| Name          | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                     | <div style="width:200px">Sample value</div> |
| ------------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------- |
| scope         | string | No                                            | Scope corresponding to access_token                                            | `openid profile`                            |
| access_token  | string | No                                            | API call credentials, authorized to access resource API within a limited time  | `eyJhbGciOiJSxxxxx`                         |
| id_token      | string | No                                            | User's identity credentials, which will contain user information after parsing | `eyJhbGxxxx`                                |
| refresh_token | string | No                                            | refresh_token is used to obtain a new AccessToken                              | `WPsGJbvpBjqXz6IJIr1UHKyrdVF`               |
| token_type    | string | yes                                           | token type                                                                     | `bearer`                                    |
| expire_in     | number | yes                                           | expiration time in seconds                                                     | `7200`                                      |
