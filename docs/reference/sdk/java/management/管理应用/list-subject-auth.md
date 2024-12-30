# Subject Authorization List

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Subject Authorization List

## Method Name

`ManagementClient.listAuthSubject`

## Request Parameters

| Name        | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----------- | -------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| targetType  | string   | Yes                                          | -                                           | Subject type                               | `USER`                                       |
| targetId    | string   | Yes                                          | -                                           | Subject id                                 | `6229ffaxxxxxxxxcade3e3d9`                   |
| appName     | string   | No                                           | -                                           | Application Name                           | `Application One`                            |
| appTypeList | string[] | No                                           | -                                           | Application type list                      | `["SELFBUILT"]`                              |
| effect      | string[] | No                                           | -                                           | Action type list                           | `["ALLOW","DENY"]`                           |
| enabled     | boolean  | No                                           | -                                           | Switch                                     | `true`                                       |

## Request Response

Type： `ListApplicationSubjectRespDto`

| Name       | Type                                                                               | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                             | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                             | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                             | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#ListApplicationSubjectDataListDto">ListApplicationSubjectDataListDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "appId": "5a597f35085a2000144a10ed",
      "appType": "SELFBUILT",
      "effect": "ALLOW"
    }
  }
}
```

## Data Structure

### <a id="ListApplicationSubjectDataListDto"></a> ListApplicationSubjectDataListDto

| Name | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                         | <div style="width:200px">Example Value</div> |
| ---- | ----- | -------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| list | array | Yes                                          | List data nested Type: <a href="#ListApplicationSubjectDataDto">ListApplicationSubjectDataDto</a>. |                                              |

### <a id="ListApplicationSubjectDataDto"></a> ListApplicationSubjectDataDto

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                      | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------- |
| appId    | string | Yes                                          | Application ID                                                  | `5a597f35085a2000144a10ed`                   |
| logo     | string | Yes                                          | Application logo                                                |                                              |
| ext      | string | Yes                                          |                                                                 |                                              |
| template | string | Yes                                          |                                                                 |                                              |
| appType  | string | Yes                                          | Application Type: Integrated application/self-built application | INTEGRATED                                   |
| effect   | string | Yes                                          | Allow/deny                                                      | ALLOW                                        |
