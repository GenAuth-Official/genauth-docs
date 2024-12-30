# Subject authorization detail

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Subject authorization detail

## Method Name

`ManagementClient.detailAuthSubject`

## Request Parameters

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| appId      | string | Yes                                          | -                                           | application id                             | `5a597f35085a2000144a10ed`                   |
| targetType | string | Yes                                          | -                                           | subject type                               | `USER`                                       |
| targetId   | string | Yes                                          | -                                           | subject id                                 | `6229ffaxxxxxxxxcade3e3d9`                   |

## Request Response

Type： `GetSubjectAuthRespDto`

| Name       | Type                                                       | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                     | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                     | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                     | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#GetSubjectAuthDataDto">GetSubjectAuthDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "appId": "5a597f35085a2000144a10ed",
    "appName": "Demo",
    "reqTargetId": "6229ffaxxxxxxxxcade3e3d9",
    "reqTargetName": "dmy",
    "reqTargetType": "USER",
    "targetType": "USER",
    "targetName": "dgy",
    "authType": "SUBJECT"
  }
}
```

## Data Structure

### <a id="GetSubjectAuthDataDto"></a> GetSubjectAuthDataDto

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| appId         | string | Yes                                          | Application ID                             | `5a597f35085a2000144a10ed`                   |
| appName       | string | Yes                                          | Application Name                           | `Application One`                            |
| reqTargetId   | string | Yes                                          | Request Subject ID                         | `6229ffaxxxxxxxxcade3e3d9`                   |
| reqTargetName | string | Yes                                          | Request Subject Name                       | `dmy`                                        |
| reqTargetType | string | Yes                                          | Request Subject Type                       | USER                                         |
| targetType    | string | Yes                                          | Target Subject Type                        | USER                                         |
| targetName    | string | Yes                                          | Target Subject Name                        | `dgy`                                        |
| authType      | string | Yes                                          | Authorization Type                         | DEFAULT                                      |
