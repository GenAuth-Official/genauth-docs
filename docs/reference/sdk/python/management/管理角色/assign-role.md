# Single role batch authorization

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Assign roles through the role code in the permission group. The assignee can be a user or department.

## Method name

`ManagementClient.assign_role`

## Request parameters

| Name       | Type                                 | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                     | <div style="width:200px">Sample value</div>                             |
| ---------- | ------------------------------------ | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------- |
| targets    | <a href="#TargetDto">TargetDto[]</a> | Yes                                    | -                                           | Target object Array length limit: 50.                          | `[{"targetIdentifier":"60b49eb83fd80adb96f26e68","targetType":"USER"}]` |
| code       | string                               | yes                                    | -                                           | Unique identifier of the role in the permission group          | `code1`                                                                 |
| endTime    | number                               | no                                     | -                                           | Subject expiration time in milliseconds, valid forever if null | `1669114748050`                                                         |
| enableTime | number                               | no                                     | -                                           | Subject join time in milliseconds, join immediately if null    | `1669114748050`                                                         |
| namespace  | string                               | no                                     | -                                           | Code of the permission group                                   | `60b49eb83fd80adb96f26e68`                                              |

## Request Response

Type: `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                   | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                   | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                                                                                                                                                                                                                                                                 |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "success": true
  }
}
```

## Data Structure

### <a id="TargetDto"></a> TargetDto

| Name             | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| targetType       | string | Yes                                           | Target object type:<br>- `USER`: user<br>- `ROLE`: role<br>- `GROUP`: group<br>- `DEPARTMENT`: department<br>                                                                                                                                                                                                                             | USER                                        |
| targetIdentifier | string | Yes                                           | Target object unique identifier:<br>- If it is a user, it is the user's ID, such as `6343b98b7cfxxx9366e9b7c`<br>- If it is a role, it is the role's code, such as `admin`<br>- If it is a group, it is the group's code, such as `developer`<br>- If it is a department, it is the department ID, such as `6343bafc019xxxx889206c4c`<br> | `60b49eb83fd80adb96f26e68`                  |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| success | boolean | yes                                          | Whether the operation is successful        | `true`                                      |
