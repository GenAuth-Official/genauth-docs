# Get user role list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to V3 API.

Get the user role list through the user ID, you can select the permission group code, select the specified user ID type, etc. Note: If you do not pass the namespace, by default, only the roles under the default permission group will be obtained!

## Method name

`ManagementClient.get_user_roles`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ------------------------------------ | ---------------------------- ... | `6229ffaxxxxxxxxcade3e3d9` |
| userIdType | string | No | user_id | User ID type, the default value is `user_id`, the optional values ​​are:<br>- `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`<br>- `phone`: User phone number<br>- `email`: User email<br>- `username`: User name<br>- `external_id`: User ID in the external system, corresponding to the `externalId` field of GenAuth user information<br>- `identity`: User's external identity source information, the format is `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, and `<userIdInIdp>` is the ID of the user in the external identity source. <br>Example value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`. <br>- `sync_relation`: The user's external identity source information, in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the type of sync identity source, such as wechatwork, lark; `<userIdInIdp>` is the user's ID in the external identity source. <br>Example value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`. <br> | `user_id` |
| namespace | string | No | - | Code of the permission group (permission space). If not passed, the default permission group is obtained. | `default` |

## Request Response

Type: `RolePaginatedRespDto`

| Name       | Type                                       | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                     | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                     | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#RolePagingDto">RolePagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "id": "60b49eb83fd80adb96f26e68",
      "code": "role1",
      "name": "role1",
      "description": "this is role description",
      "namespace": "default",
      "namespaceName": "xxx",
      "status": "ENABLE",
      "disableTime": "1669881887852"
    }
  }
}
```

## Data Structure

### <a id="RolePagingDto"></a> RolePagingDto

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                 | <div style="width:200px">Sample value</div> |
| ---------- | ------ | --------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                           | Total number of records                                    |                                             |
| list       | array  | Yes                                           | Response data Nested type: <a href="#RoleDto">RoleDto</a>. |                                             |

### <a id="RoleDto"></a> RoleDto

| Name          | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                             | <div style="width:200px">Sample value</div> |
| ------------- | ------ | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| id            | string | Yes                                           | Role ID                                                                                                                                | `60b49eb83fd80adb96f26e68`                  |
| code          | string | Yes                                           | Unique identifier of the role in the permission group (permission space) Code                                                          | `role1`                                     |
| name          | string | Yes                                           | Role name in the permission group (permission space)                                                                                   | `role1`                                     |
| description   | string | Yes                                           | Role description                                                                                                                       | `this is role description`                  |
| namespace     | string | Yes                                           | The name of the permission group (permission space) to which it belongs Code, if not passed, the default permission group is obtained. | `default`                                   |
| namespaceName | string | yes                                           | The name of the permission group (permission space)                                                                                    | `Sample permission name`                    |
| status        | string | no                                            | Role status, ENABLE- means normal, DISABLE- means disabled                                                                             | `ENABLE`                                    |
| disableTime   | number | no                                            | Role automatic disable time, in milliseconds, if null is passed, it means permanent                                                    | `1669881887852`                             |
