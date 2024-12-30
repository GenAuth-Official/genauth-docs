# Determine whether the user has a certain role

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Determine whether the user has a certain role through the user ID. Supports passing in multiple roles, and can choose to specify the user ID type, etc.

## Method name

`ManagementClient.has_any_role`

## Request parameters

| Name    | Type                                                     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                   | <div style="width:200px">Sample value</div> |
| ------- | -------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| roles   | <a href="#HasRoleRolesDto">HasRoleRolesDto[]</a>         | Yes                                          | -                                           | Role list                                                                                                                                                                                                                    |                                             |
| userId  | string                                                   | Yes                                          | -                                           | The unique identifier of the user, which can be user ID, user name, email, phone number, externalId, or ID in an external identity source. For details, see the description of the userIdType field. The default is user id. | `6229ffaxxxxxxxxcade3e3d9`                  |
| options | <a href="#HasAnyRoleOptionsDto">HasAnyRoleOptionsDto</a> | No                                           | -                                           | Optional parameters                                                                                                                                                                                                          |                                             |

## Request Response

Type: `HasAnyRoleRespDto`

| Name       | Type                                       | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                     | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                     | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#HasAnyRoleDto">HasAnyRoleDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "hasAnyRole": true
  }
}
```

## Data Structure

### <a id="HasRoleRolesDto"></a> HasRoleRolesDto

| Name      | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                | <div style="width:200px">Sample value</div> |
| --------- | ------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| namespace | string | No                                     | Code of the permission group (permission space). If not passed, the default permission group is obtained. | `default`                                   |
| code      | string | yes                                    | role code                                                                                                 | `admin`                                     |

### <a id="HasAnyRoleOptionsDto"></a> HasAnyRoleOptionsDto

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ---------------------------- ... `6319a1504f3xxxxf214dd5b7`<br>- `phone`: user's phone number<br>- `email`: user's email address<br>- `username`: user name<br>- `external_id`: user's ID in the external system, corresponding to the `externalId` field in the GenAuth user information<br>- `identity`: user's external identity source information, in the format of `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, and `<userIdInIdp>` is the user's ID in the external identity source. <br>Example value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`. <br>- `sync_relation`: The user's external identity source information, in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the type of sync identity source, such as wechatwork, lark; `<userIdInIdp>` is the user's ID in the external identity source. <br>Example value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`. <br> | user_id |

### <a id="HasAnyRoleDto"></a> HasAnyRoleDto

| Name       | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| hasAnyRole | boolean | Yes                                           | Does it have any of the roles?             | `true`                                      |
