# Get user MFA binding information

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get user MFA binding information through user ID, and you can choose to specify the user ID type, etc.

## Method name

`ManagementClient.get_user_mfa_info`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ------------------------------------ | ---------------------------- ... | `6229ffaxxxxxxxxcade3e3d9` |
| userIdType | string | No | user_id | User ID type, the default value is `user_id`, the optional values ​​are:<br>- `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`<br>- `phone`: User phone number<br>- `email`: User email<br>- `username`: User name<br>- `external_id`: User ID in the external system, corresponding to the `externalId` field of GenAuth user information<br>- `identity`: User's external identity source information, the format is `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, and `<userIdInIdp>` is the ID of the user in the external identity source. <br>Example value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`. <br>- `sync_relation`: The user's external identity source information, in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the synchronization identity source type, such as wechatwork, lark; `<userIdInIdp>` is the user's ID in the external identity source. <br>Example value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`. <br> | `user_id` |

## Request Response

Type: `UserMfaSingleRespDto`

| Name       | Type                                         | Description                                                                                                                                                                                                                                                                                                                                        |
| ---------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                       |
| message    | string                                       | Description                                                                                                                                                                                                                                                                                                                                        |
| apiCode    | number                                       | Segmented error code, which can be used to get the specific error type (no return for successful requests). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                       |
| data       | <a href="#UserMfaRespDto">UserMfaRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                      |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totpStatus": true,
    "faceMfaStatus": true,
    "smsMfaStatus": true,
    "emailMfaStatus": true
  }
}
```

## Data Structure

### <a id="UserMfaRespDto"></a> UserMfaRespDto

| Name           | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                   | <div style="width:200px">Sample value</div> |
| -------------- | ------ | --------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| totpStatus     | string | yes                                           | Whether TOTP is bound, optional value enabled, disabled      | `true`                                      |
| faceMfaStatus  | string | yes                                           | Whether face MFA is bound, optional value enabled, disabled  | `true`                                      |
| smsMfaStatus   | string | yes                                           | Whether SMS MFA is bound, optional value enabled, disabled   | `true`                                      |
| emailMfaStatus | string | yes                                           | Whether EMAIL MFA is bound, optional value enabled, disabled | `true`                                      |
