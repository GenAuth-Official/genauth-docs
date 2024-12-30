# Subject authorization list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Subject authorization list

## Method name

`ManagementClient.list_auth_subject`

## Request parameters

| Name        | Type     | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | -------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| targetType  | string   | yes                                    | -                                           | Subject type                               | `USER`                                      |
| targetId    | string   | yes                                    | -                                           | Subject id                                 | `6229ffaxxxxxxxxcade3e3d9`                  |
| appName     | string   | no                                     | -                                           | Application name                           | `Application One`                           |
| appTypeList | string[] | no                                     | -                                           | Application type list                      | `["SELFBUILT"]`                             |
| effect      | string[] | no                                     | -                                           | action type list                           | `["ALLOW","DENY"]`                          |
| enabled     | boolean  | no                                     | -                                           | switch                                     | `true`                                      |

## Request Response

Type: `ListApplicationSubjectRespDto`

| Name       | Type                                                                               | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                                                             | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                                                             | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#ListApplicationSubjectDataListDto">ListApplicationSubjectDataListDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
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

| Name | Type  | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                         | <div style="width:200px">Sample value</div> |
| ---- | ----- | -------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| list | array | Yes                                    | List data Nested type: <a href="#ListApplicationSubjectDataDto">ListApplicationSubjectDataDto</a>. |                                             |

### <a id="ListApplicationSubjectDataDto"></a> ListApplicationSubjectDataDto

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                      | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------- |
| appId    | string | Yes                                           | Application ID                                                  | `5a597f35085a2000144a10ed`                  |
| logo     | string | Yes                                           | Application logo                                                |                                             |
| ext      | string | Yes                                           |                                                                 |                                             |
| template | string | Yes                                           |                                                                 |                                             |
| appType  | string | Yes                                           | Application type: Integrated application/self-built application | INTEGRATED                                  |
| effect   | string | Yes                                           | Allow/deny                                                      | ALLOW                                       |
