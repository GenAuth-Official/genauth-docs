# Get the list of subjects assigned to the ASA account

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Get the list of principals assigned to the account by paging according to the ASA account ID

## Method name

`ManagementClient.getAsaAccountAssignedTargets`

## Request parameters

| Name      | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| --------- | ------ | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| appId     | string | yes                                    | -                                           | Application ID                                           | `62a50xxxxxxxxxxxd15d57c7`                  |
| accountId | string | yes                                    | -                                           | ASA account ID                                           | `6228edaxxxxxxxxcade3a3d9`                  |
| page      | number | no                                     | 1                                           | Current page number, starting from 1                     | `1`                                         |
| limit     | number | No                                     | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |

## Request response

Type: `GetAsaAccountAssignedTargetRespDto`

| Name       | Type                                                                                 | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                               | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                                               | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                                               | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#GetAsaAccountAssignedTargetDataDto">GetAsaAccountAssignedTargetDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 10,
    "list": {
      "targetType": "USER",
      "targetIdentifier": "code"
    }
  }
}
```

## Data structure

### <a id="GetAsaAccountAssignedTargetDataDto"></a> GetAsaAccountAssignedTargetDataDto

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                              | <div style="width:200px">Sample value</div> |
| ---------- | ------ | --------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | yes                                           | total                                                                                   | `10`                                        |
| list       | array  | yes                                           | list of principals Nested type: <a href="#AsaAccountTargetDto">AsaAccountTargetDto</a>. |                                             |

### <a id="AsaAccountTargetDto"></a> AsaAccountTargetDto

| Name             | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                            | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| targetType       | string | Yes                                           | Target object type:<br>- `USER`: user<br>- `ROLE`: role<br>- `GROUP`: group<br>- `DEPARTMENT`: department<br>                                                                                                                                                                                                                         | USER                                        |
| targetIdentifier | string | Yes                                           | Target object unique identifier:<br>- If it is a user, it is the user's ID, such as `6343b98b7cfxxx9366e9b7c`<br>- If it is a role, it is the role code, such as `admin`<br>- If it is a group, it is the group code, such as `developer`<br>- If it is a department, it is the department ID, such as `6343bafc019xxxx889206c4c`<br> | `code`                                      |
