# Get the user MFA trigger data under the application

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Get the user MFA trigger data under the application.

## Method Name

`ManagementClient.getMfaTriggerData`

## Request Parameters

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| userId     | string | Yes                                          | -                                           | The unique identifier of the user. It can be Yes user ID, user name, email address, mobile phone number, externalId, or ID in the external identity source. For details, see the description of the userIdType field. The default is user id.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `6229ffaxxxxxxxxcade3e3d9`                   |
| appId      | string | Yes                                          | -                                           | Application ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `62a50xxxxxxxxxxxd15d57c7`                   |
| userIdType | string | No                                           | user_id                                     | User id type, the default value is `user_id`, the optional values ​​are:<br>- `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`<br>- `phone`: User phone number<br>- `email`: User email<br>- `username`: User name<br>- `external_id`: User ID in the external system, corresponding to the `externalId` field of GenAuth user information<br>- `identity`: User's external identity source information, in the format of `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the GenAuth The ID of the identity source. `<userIdInIdp>` is the ID of the user in the external identity source. <br>Example Value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`. <br>- `sync_relation`: The user's external identity source information, in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the synchronization identity source type, such as wechatwork, lark; `<userIdInIdp>` is the ID of the user in the external identity source. <br>Example Value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`. <br> | `user_id`                                    |

## Request Response

Type： `GetMapInfoRespDto`

| Name       | Type                                               | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                             | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                             | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                             | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#GetMfaInfoDataDto">GetMfaInfoDataDto</a> | MFA Factor detail                                                                                                                                                                                                                                                                                                                                 |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "mfaToken": "xxxxxxx",
    "mfaPhone": "132xxxxx1234",
    "mfaPhoneCountryCode": "+86",
    "mfaEmail": "authing@authing.com",
    "nickname": "test",
    "username": "test",
    "phone": "123xxxx1234",
    "phoneCountryCode": "+86",
    "applicationMfa": {
      "mfaPolicy": "EMAIL",
      "status": 1
    }
  }
}
```

## Data Structure

### <a id="GetMfaInfoDataDto"></a> GetMfaInfoDataDto

| Name                | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                       | <div style="width:200px">Example Value</div> |
| ------------------- | ------- | -------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------- |
| mfaToken            | string  | Yes                                          | MFA Token                                                                        | `xxxxxxx`                                    |
| mfaPhone            | string  | No                                           | Mobile phone number bound to MFA                                                 | `132xxxxx1234`                               |
| mfaPhoneCountryCode | string  | No                                           | Mobile phone area code bound to MFA                                              | `+86`                                        |
| mfaEmail            | string  | No                                           | Email address bound to MFA                                                       | `authing@authing.com`                        |
| nickname            | string  | No                                           | User nickname                                                                    | `test`                                       |
| username            | string  | No                                           | User name                                                                        | `test`                                       |
| phone               | string  | No                                           | User mobile phone number                                                         | `123xxxx1234`                                |
| phoneCountryCode    | string  | No                                           | User mobile phone area code                                                      | `+86`                                        |
| faceMfaEnabled      | boolean | No                                           | Face verification Yes No Enable                                                  |                                              |
| totpMfaEnabled      | boolean | No                                           | OTP verification Yes No Enable                                                   |                                              |
| applicationMfa      | array   | Yes                                          | MFA Factor List Nested Type: <a href="#ApplicationMfaDto">ApplicationMfaDto</a>. |                                              |

### <a id="ApplicationMfaDto"></a> ApplicationMfaDto

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| --------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| mfaPolicy | string | Yes                                          | MFA type                                   | `EMAIL`                                      |
| status    | number | Yes                                          | MFA status                                 | `1`                                          |
| sort      | number | Yes                                          | MFA sort                                   |                                              |
