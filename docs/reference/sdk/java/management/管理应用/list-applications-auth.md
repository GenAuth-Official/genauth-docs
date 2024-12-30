# Application Authorization List

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Application Authorization List

## Method Name

`ManagementClient.listAuthApplication`

## Request Parameters

| Name           | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                         | <div style="width:200px">Example Value</div> |
| -------------- | -------- | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- |
| appId          | string   | Yes                                          | -                                           | Application ID                                                                     | `5a597f35085a2000144a10ed`                   |
| page           | number   | No                                           | 1                                           | Current page number, starting from 1                                               | `1`                                          |
| limit          | number   | No                                           | 10                                          | The maximum number of pages per page cannot exceed 50, and the default value is 10 | `10`                                         |
| targetName     | string   | No                                           | -                                           | Subject Name                                                                       | `Zhang San`                                  |
| targetTypeList | string[] | No                                           | -                                           | Subject type list, USER/ORG/ROLE/GROUP                                             | `["USER","ORG"]`                             |
| effect         | string   | No                                           | -                                           | Operation, ALLOW/DENY                                                              | `["ALLOW","DENY"]`                           |
| enabled        | boolean  | No                                           | -                                           | Authorization Yes No Effective switch,                                             | `true`                                       |

## Request Response

Type： `ListApplicationAuthPaginatedRespDto`

| Name       | Type                                                                                   | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                                 | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                                 | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                                 | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#ListApplicationAuthPaginatedDataDto">ListApplicationAuthPaginatedDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "id": "6229ffaxxxxxxxxcade3e3d9",
      "targetId": "6229ffaxxxxxxxxcade3e3d9",
      "targetName": "Zhang San",
      "targetType": "USER",
      "effect": "ALLOW",
      "enabled": true,
      "permissionType": "SUBJECT"
    },
    "totalCount": 10
  }
}
```

## Data Structure

### <a id="ListApplicationAuthPaginatedDataDto"></a> ListApplicationAuthPaginatedDataDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                   | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------- |
| list       | array  | Yes                                          | List data nested Type: <a href="#ListApplicationAuthDataDto">ListApplicationAuthDataDto</a>. |                                              |
| totalCount | number | Yes                                          | Total number of records                                                                      | `10`                                         |

### <a id="ListApplicationAuthDataDto"></a> ListApplicationAuthDataDto

| Name           | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>         | <div style="width:200px">Example Value</div> |
| -------------- | ------- | -------------------------------------------- | -------------------------------------------------- | -------------------------------------------- |
| id             | string  | Yes                                          | Authorization id                                   | `6229ffaxxxxxxxxcade3e3d9`                   |
| targetId       | string  | Yes                                          | Subject id                                         | `6229ffaxxxxxxxxcade3e3d9`                   |
| targetName     | string  | Yes                                          | Subject Name                                       | `Zhang San`                                  |
| targetType     | string  | Yes                                          | Subject type, USER/ORG/GROUP/ROLE                  | USER                                         |
| effect         | string  | Yes                                          | Subject type, ALLOW/DENY                           | ALLOW                                        |
| enabled        | boolean | Yes                                          | Authorization switch                               | `true`                                       |
| permissionType | string  | Yes                                          | Authorization type, ALL: Everyone SUBJECT: Subject | ALL                                          |
