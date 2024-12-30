# Get the ASA account assigned to the subject

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If this document description is incorrect, please refer to the V3 API.

Get the ASA account directly assigned to the subject based on the subject type and identifier

## Method Name

`ManagementClient.getAssignedAccount`

## Request Parameters

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                         | <div style="width:200px">Example Value</div> |
| ---------------- | ------ | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| targetIdentifier | string | Yes                                          | -                                           | Unique identifier of the target object:<br>- If Yes user, it is the user's ID, such as `6343b98b7cfxxx9366e9b7c`<br>- If Yes role, it is the role's code, such as `admin`<br>- If Yes group, it is the group's code, such as `developer`<br>- If Yes department, it is the department's ID, such as `6343bafc019xxxx889206c4c`<br> | `code`                                       |
| targetType       | string | Yes                                          | -                                           | Target object Type:<br>- `USER`: user<br>- `ROLE`: role<br>- `GROUP`: group<br>- `DEPARTMENT`: department<br>                                                                                                                                                                                                                      | `USER`                                       |
| appId            | string | Yes                                          | -                                           | Application ID                                                                                                                                                                                                                                                                                                                     | `62a50xxxxxxxxxxxd15d57c7`                   |

## Request Response

Type： `AsaAccountSingleNullableRespDto`

| Name       | Type                                       | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                     | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                     | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                     | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#AsaAccountDto">AsaAccountDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "appId": "62a50xxxxxxxxxxxd15d57c7",
    "accountId": "62b40xxxxxxxxxxxd16f57c7",
    "accountInfo": {
      "account": "account@example.com",
      "password": "123456"
    }
  }
}
```

## Data Structure

### <a id="AsaAccountDto"></a> AsaAccountDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                         | <div style="width:200px">Example Value</div>            |
| ----------- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------- |
| appId       | string | Yes                                          | Application ID                                                                     | `62a50xxxxxxxxxxxd15d57c7`                              |
| accountId   | string | Yes                                          | Account ID                                                                         | `62b40xxxxxxxxxxxd16f57c7`                              |
| accountInfo | object | Yes                                          | Account information, usually a key-value pair containing "account", "password" key | `{"account":"account@example.com","password":"123456"}` |
