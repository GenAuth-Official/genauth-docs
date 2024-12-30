# Get the Pipeline function list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Get Pipeline function list

## Method name

`ManagementClient.list_pipeline_functions`

## Request parameters

| Name  | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                | <div style="width:200px">Sample value</div> |
| ----- | ------ | -------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| scene | string | yes                                    | -                                           | Filter by the triggering scene of the function (optional, all are returned by default):<br>- `PRE_REGISTER`: Before registration<br>- `POST_REGISTER`: After registration<br>- `PRE_AUTHENTICATION`: Before authentication<br>- `POST_AUTHENTICATION`: After authentication<br>- `PRE_OIDC_ID_TOKEN_ISSUED`: Before OIDC ID Token is issued<br>- `PRE_OIDC_ACCESS_TOKEN_ISSUED`: Before OIDC Access Token is issued<br>- `PRE_COMPLETE_USER_INFO`: Before completing user information<br> | `PRE_REGISTER`                              |

## Request response

Type: `PipelineFunctionPaginatedRespDto`

| Name       | Type                                                               | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                             | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                             | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                             | Segmented error code, which can be used to get the specific error type (successful request is not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#PipelineFunctionPagingDto">PipelineFunctionPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "funcId": "62ce9135dxxxxb83e373f5d6",
      "funcName": "Registration/login is prohibited from 3-6 am every Sunday for system maintenance",
      "funcDescription": "Registration/login is prohibited from 3-6 am every Sunday for system maintenance.",
      "scene": "PRE_REGISTER",
      "createdAt": "2022-07-03T03:20:30.000Z",
      "updatedAt": "2022-07-03T03:20:30.000Z",
      "timeout": 3,
      "sourceCode": "async function pipe(user, context, callback) {\n const date = new Date();\n const d = date.getDay();\n const n = date.getHours();\n // Registration is prohibited from 3-6 am every Sunday\n if (d === 0 && (3 <= n && n <= 6)) {\n return callback(new Error('System maintenance, temporarily stop registration!'));\n }\n callback(null, user, context)\n}",
      "status": "success"
    }
  }
}
```

## Data structure

### <a id="PipelineFunctionPagingDto"></a> PipelineFunctionPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                     | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------- |
| totalCount | number | yes                                          | total number                                                                   |                                             |
| list       | array  | yes                                          | data list Nested type: <a href="#PipelineFunctionDto">PipelineFunctionDto</a>. |                                             |

### <a id="PipelineFunctionDto"></a> PipelineFunctionDto

| Name               | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                    | <div style="width:200px">Sample value</div>                                              |
| ------------------ | ------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| funcId             | string  | Yes                                           | Function ID                                                                                                                                                                                                                                                                                                                                                                                                                   | `62ce9135dxxxxb83e373f5d6`                                                               |
| funcName           | string  | Yes                                           | Function name                                                                                                                                                                                                                                                                                                                                                                                                                 | `Registration/login is prohibited every Sunday from 3am to 6am for system maintenance`   |
| funcDescription    | string  | No                                            | Function description                                                                                                                                                                                                                                                                                                                                                                                                          | `Registration/login is prohibited every Sunday from 3am to 6am for system maintenance. ` |
| scene              | string  | yes                                           | Function triggering scenario:<br>- `PRE_REGISTER`: before registration<br>- `POST_REGISTER`: after registration<br>- `PRE_AUTHENTICATION`: before authentication<br>- `POST_AUTHENTICATION`: after authentication<br>- `PRE_OIDC_ID_TOKEN_ISSUED`: before OIDC ID Token issuance<br>- `PRE_OIDC_ACCESS_TOKEN_ISSUED`: before OIDC Access Token issuance<br>- `PRE_COMPLETE_USER_INFO`: before completing user information<br> | PRE_REGISTER                                                                             |
| createdAt          | string  | yes                                           | Function creation time                                                                                                                                                                                                                                                                                                                                                                                                        | `2022-07-03T03:20:30.000Z`                                                               |
| updatedAt          | string  | yes                                           | Function modification time                                                                                                                                                                                                                                                                                                                                                                                                    | `2022-07-03T03:20:30.000Z`                                                               |
| isAsynchronous     | boolean | yes                                           | Whether to execute asynchronously. Functions set to asynchronous execution will not block the execution of the entire process, and are suitable for asynchronous notification scenarios, such as Feishu group notifications, DingTalk group notifications, etc.                                                                                                                                                               |                                                                                          |
| timeout            | number  | yes                                           | Function execution timeout, the shortest is 1 second, the longest is 60 seconds, and the default is 3 seconds.                                                                                                                                                                                                                                                                                                                | `3`                                                                                      |
| terminateOnTimeout | boolean | yes                                           | If the function runs out of time, whether to terminate the entire process, the default is no.                                                                                                                                                                                                                                                                                                                                 |                                                                                          |
| sourceCode         | string  | yes                                           | function source code                                                                                                                                                                                                                                                                                                                                                                                                          | `async function pipe(user, context, callback) {                                          |

const date = new Date();
const d = date.getDay();
const n = date.getHours();
// Registration is prohibited from 3-6 am every Sunday
if (d === 0 && (3 <= n && n <= 6)) {
return callback(new Error('System maintenance, registration temporarily suspended!'));
}
callback(null, user, context)
}`| | status | string | yes | Function current status: <br>-`uploading`: Uploading<br>- `success`: Upload successful<br>- `failed`: Upload failed <br> | uploading |
| uploadErrMsg | string | no | Error message for upload failure | |
| enabled | boolean | yes | Is this Pipeline enabled | |
