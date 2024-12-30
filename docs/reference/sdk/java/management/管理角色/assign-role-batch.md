# Batch Assign Roles

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Assign roles in batches. The assignees can be users or departments.

## Method Name

`ManagementClient.assignRoleBatch`

## Request Parameters

| Name    | Type                                     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Example Value</div>                            |
| ------- | ---------------------------------------- | -------------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| targets | <a href="#TargetDto">TargetDto[]</a>     | Yes                                          | -                                           | Target list for assigning roles. Array length limit: 10. | `[{"targetIdentifier":"60b49eb83fd80adb96f26e68","targetType":"USER"}]` |
| roles   | <a href="#RoleCodeDto">RoleCodeDto[]</a> | Yes                                          | -                                           | Role information list Array length limit: 10.            | `[{"code":"60b49eb83fd80adb96f26e68","namespace":"USER"}]`              |

## Request Response

Type: `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                   | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                   | Segmented error code, which can be used to get the specific error type (successful request is not returned). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                                                                                                                                                                                                                                                                 |

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

### <a id="RoleCodeDto"></a> RoleCodeDto

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>            | <div style="width:200px">Example Value</div> |
| --------- | ------ | -------------------------------------------- | ----------------------------------------------------- | -------------------------------------------- |
| code      | string | yes                                          | Unique identifier of the role in the permission group | `admin`                                      |
| namespace | string | no                                           | Code of the permission group                          | `60b49eb83fd80adb96f26e68`                   |

### <a id="TargetDto"></a> TargetDto

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                      | <div style="width:200px">Example Value</div> |
| ---------------- | ------ | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| targetType       | string | yes                                          | Target object type: <br>- `USER`: User<br>- `ROLE`: Role<br>- `GROUP`: Group<br>- `DEPARTMENT`: Department<br>                                                                                                                                                                                                                                  | USER                                         |
| targetIdentifier | string | yes                                          | The unique identifier of the target object:<br>- If it is a user, it is the user's ID, such as `6343b98b7cfxxx9366e9b7c`<br>- If it is a role, it is the role code, such as `admin`<br>- If it is a group, it is the group code, such as `developer`<br>- If it is a department, it is the department ID, such as`6343bafc019xxxx889206c4c`<br> | `60b49eb83fd80adb96f26e68`                   |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| success | boolean | yes                                          | Whether the operation is successful        | `true`                                       |
