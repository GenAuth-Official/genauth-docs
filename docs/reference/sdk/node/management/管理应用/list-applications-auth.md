# Application authorization list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Application authorization list

## Method name

`ManagementClient.listAuthApplication`

## Request parameters

| Name           | Type     | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| -------------- | -------- | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| appId          | string   | yes                                    | -                                           | Application ID                                           | `5a597f35085a2000144a10ed`                  |
| page           | number   | no                                     | 1                                           | Current page number, starting from 1                     | `1`                                         |
| limit          | number   | no                                     | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |
| targetName     | string   | no                                     | -                                           | Subject name                                             | `Zhang San`                                 |
| targetTypeList | string[] | No                                     | -                                           | Subject type list, USER/ORG/ROLE/GROUP                   | `["USER","ORG"]`                            |
| effect         | string   | No                                     | -                                           | Operation, ALLOW/DENY                                    | `["ALLOW","DENY"]`                          |
| enabled        | boolean  | No                                     | -                                           | Authorization effective switch,                          | `true`                                      |

## Request response

Type: `ListApplicationAuthPaginatedRespDto`

| Name       | Type                                                                                   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                                 | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                                                 | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                                                 | Segmented error code, which can be used to get the specific error type (successful request is not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#ListApplicationAuthPaginatedDataDto">ListApplicationAuthPaginatedDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "id": "6229ffaxxxxxxxxcade3e3d9",
      "targetId": "6229ffaxxxxxxxxcade3e3d9",
      "targetName": "xxxx",
      "targetType": "USER",
      "effect": "ALLOW",
      "enabled": true,
      "permissionType": "SUBJECT"
    },
    "totalCount": 10
  }
}
```

## Data structure

### <a id="ListApplicationAuthPaginatedDataDto"></a> ListApplicationAuthPaginatedDataDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                   | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------- |
| list       | array  | Yes                                          | List data Nested type: <a href="#ListApplicationAuthDataDto">ListApplicationAuthDataDto</a>. |                                             |
| totalCount | number | yes                                          | total number of records                                                                      | `10`                                        |

### <a id="ListApplicationAuthDataDto"></a> ListApplicationAuthDataDto

| name           | type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">description</div>       | <div style="width:200px">example value</div> |
| -------------- | ------- | --------------------------------------------- | ------------------------------------------------ | -------------------------------------------- |
| id             | string  | yes                                           | authorization id                                 | `6229ffaxxxxxxxxcade3e3d9`                   |
| targetId       | string  | yes                                           | principal id                                     | `6229ffaxxxxxxxxcade3e3d9`                   |
| targetName     | string  | yes                                           | principal name                                   | `xxxx xxx`                                   |
| targetType     | string  | yes                                           | principal type, USER/ORG/GROUP/ROLE              | USER                                         |
| effect         | string  | yes                                           | Subject type, ALLOW/DENY                         | ALLOW                                        |
| enabled        | boolean | yes                                           | Authorization switch                             | `true`                                       |
| permissionType | string  | yes                                           | Authorization type, ALL:Everyone SUBJECT:Subject | ALL                                          |
