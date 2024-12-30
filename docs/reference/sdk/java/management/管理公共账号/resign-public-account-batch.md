# Batch resignation users

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Batch resignation users. The resignation operation will perform the following operations:

- After resignation, the member's authorization, department, role, group, and position relationship will be deleted;
- After resignation, the user's basic information will be retained, and the account will be disabled and unable to log in to the application; if you need to completely delete the account, please call the deletion interface.

This operation cannot be recovered, please operate with caution!

## Method Name

`ManagementClient.resignPublicAccountBatch`

## Request Parameters

| Name       | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | <div style="width:200px">Example Value</div> |
| ---------- | -------- | -------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| userIds    | string[] | yes                                          | -                                           | User id array. Array length limit: 50.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `["6229ffaxxxxxxxxcade3e3d9"]`               |
| userIdType | string   | No                                           | user_id                                     | User id type, the default value is `user_id`, the optional values ​​are:<br>- `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`<br>- `phone`: user phone number<br>- `email`: user email<br>- `username`: user name<br>- `external_id`: user ID in the external system, corresponding to the `externalId` field of GenAuth user information<br>- `identity`: user's external identity source information, the format is `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, and `<userIdInIdp>` is the user's ID in the external identity source. <br>Example Value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`. <br>- `sync_relation`: The user's external identity source information, in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the synchronization identity source type, such as wechatwork, lark; `<userIdInIdp>` is the user's ID in the external identity source. <br>Example Value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`. <br> | `user_id`                                    |

## Request Response

Type： `ResignUserRespDto`

| Name       | Type                                               | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                             | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                             | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                             | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#ResignUserDataDto">ResignUserDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "success": true
  }
}
```

## Data Structure

### <a id="ResignUserDataDto"></a> ResignUserDataDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| success | boolean | yes                                          | Whether the operation is successful        | `true`                                       |
