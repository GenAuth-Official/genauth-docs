# Unassign ASA account

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Unassign an ASA account from a user, organization, group, or role

## Method name

`ManagementClient.unassign_asa_account`

## Request parameters

| Name      | Type                                                       | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>         | <div style="width:200px">Sample value</div> |
| --------- | ---------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | -------------------------------------------------- | ------------------------------------------- |
| targets   | <a href="#AssignAsaAccountItem">AssignAsaAccountItem[]</a> | Yes                                          | -                                           | List of associated objects Array length limit: 10. |                                             |
| accountId | string                                                     | yes                                          | -                                           | Account ID to be associated                        | `6228edaxxxxxxxxcade3a3d9`                  |
| appId     | string                                                     | yes                                          | -                                           | Application ID                                     | `62a50xxxxxxxxxxxd15d57c7`                  |

## Request Response

Type: `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                   | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                                                                                                                                                                                                                                                            |

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

### <a id="AssignAsaAccountItem"></a> AssignAsaAccountItem

| Name              | Type   | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                        | <div style="width:200px">Sample value</div> |
| ----------------- | ------ | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| targetType        | string | yes                                                   | Target object type:<br>- `USER`: user<br>- `ROLE`: role<br>- `GROUP`: group<br>- `DEPARTMENT`: department<br>                                                                                                                                                                                                                                                     | USER                                        |
| targetIdentifiers | array  | yes                                                   | Unique identifier of target object:<br>- If it is a user, it is the user's ID, such as `6343b98b7cfxxx9366e9b7c`<br>- If it is a role, it is the role code, such as `admin`<br>- If it is a group, it is the group code, such as `developer`<br>- If it is a department, it is the department ID, such as `6343bafc019xxxx889206c4c`<br> Array length limit: 100. | `["userId1","userId2"]`                     |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| success | boolean | yes                                          | Whether the operation was successful       | `true`                                      |
