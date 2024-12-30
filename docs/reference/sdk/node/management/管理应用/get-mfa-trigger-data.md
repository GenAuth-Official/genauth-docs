# Get the user MFA trigger data under the application

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the user MFA trigger data under the application.

## Method name

`ManagementClient.getMfaTriggerData`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ------------------------------------ | ---------------------------- ... ID, user name, email address, mobile phone number, externalId, ID in the external identity source, for details, see the description of the userIdType field. The default is user id. | `6229ffaxxxxxxxxcade3e3d9` |
| userIdType | string | No | user_id | User ID type, the default value is `user_id`, the optional values ​​are:<br>- `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`<br>- `phone`: User phone number<br>- `email`: User email<br>- `username`: User name<br>- `external_id`: User ID in the external system, corresponding to the `externalId` field of GenAuth user information<br>- `identity`: User's external identity source information, the format is `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, and `<userIdInIdp>` is the ID of the user in the external identity source. <br>Example value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`. <br>- `sync_relation`: User's external identity source information, in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the type of sync identity source, such as wechatwork, lark; `<userIdInIdp>` is the user's ID in the external identity source. <br>Example value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`. <br> | `user_id` |

## Request response

Type: `GetMapInfoRespDto`

| Name       | Type                                               | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                             | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                             | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                             | Request ID. This is returned when the request fails.                                                                                                                                                                                                                                                                                           |
| data       | <a href="#GetMfaInfoDataDto">GetMfaInfoDataDto</a> | MFA Factor details                                                                                                                                                                                                                                                                                                                             |

Sample result:

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

## Data structure

### <a id="GetMfaInfoDataDto"></a> GetMfaInfoDataDto

| Name                | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                       | <div style="width:200px">Sample value</div> |
| ------------------- | ------- | --------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------- |
| mfaToken            | string  | Yes                                           | MFA Token                                                                        | `xxxxxxx`                                   |
| mfaPhone            | string  | No                                            | Mobile phone number bound to MFA                                                 | `132xxxxx1234`                              |
| mfaPhoneCountryCode | string  | No                                            | Mobile phone area code bound to MFA                                              | `+86`                                       |
| mfaEmail            | string  | No                                            | Email address bound to MFA                                                       | `authing@authing.com`                       |
| nickname            | string  | No                                            | User nickname                                                                    | `test`                                      |
| username            | string  | No                                            | User name                                                                        | `test`                                      |
| phone               | string  | No                                            | User phone number                                                                | `123xxxx1234`                               |
| phoneCountryCode    | string  | No                                            | User phone area code                                                             | `+86`                                       |
| faceMfaEnabled      | boolean | No                                            | Is face verification enabled?                                                    |                                             |
| totpMfaEnabled      | boolean | No                                            | Is OTP verification enabled?                                                     |                                             |
| applicationMfa      | array   | Yes                                           | MFA Factor list Nested type: <a href="#ApplicationMfaDto">ApplicationMfaDto</a>. |                                             |

### <a id="ApplicationMfaDto"></a> ApplicationMfaDto

| Name      | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| --------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| mfaPolicy | string | yes                                           | MFA type                                   | `EMAIL`                                     |
| status    | number | yes                                           | MFA status                                 | `1`                                         |
| sort      | number | yes                                           | MFA sort                                   |                                             |
