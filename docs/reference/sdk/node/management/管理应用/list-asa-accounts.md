# Get ASA account list

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the ASA account list under a certain application in pages

## Method name

`ManagementClient.listAsaAccount`

## Request parameters

| Name  | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| ----- | ------ | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| appId | string | yes                                    | -                                           | Application ID                                           | `62a50xxxxxxxxxxxd15d57c7`                  |
| page  | number | no                                     | 1                                           | Current page number, starting from 1                     | `1`                                         |
| limit | number | no                                     | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |

## Request response

Type: `AsaAccountPaginatedRespDto`

| Name       | Type                                                                 | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                               | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                               | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                               | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#AsaAccountPaginatedDataDto">AsaAccountPaginatedDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "appId": "62a50xxxxxxxxxxxd15d57c7",
      "accountId": "62b40xxxxxxxxxxxd16f57c7",
      "accountInfo": {
        "account": "account@example.com",
        "password": "123456"
      }
    },
    "totalCount": 10
  }
}
```

## Data structure

### <a id="AsaAccountPaginatedDataDto"></a> AsaAccountPaginatedDataDto

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                         | <div style="width:200px">Sample value</div> |
| ---------- | ------ | --------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------- |
| list       | array  | Yes                                           | List data Nested type: <a href="#AsaAccountDto">AsaAccountDto</a>. |                                             |
| totalCount | number | yes                                           | total number of records                                            | `10`                                        |

### <a id="AsaAccountDto"></a> AsaAccountDto

| name        | type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">description</div>                                         | <div style="width:200px">example value</div>            |
| ----------- | ------ | --------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------- |
| appId       | string | yes                                           | application ID                                                                     | `62a50xxxxxxxxxxxd15d57c7`                              |
| accountId   | string | yes                                           | account ID                                                                         | `62b40xxxxxxxxxxxd16f57c7`                              |
| accountInfo | object | yes                                           | account information, usually a key-value pair containing "account", "password" key | `{"account":"account@example.com","password":"123456"}` |
