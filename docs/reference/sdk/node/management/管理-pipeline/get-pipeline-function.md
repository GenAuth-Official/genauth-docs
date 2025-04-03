# Get Pipeline function details

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get Pipeline function details

## Method name

`ManagementClient.getPipelineFunction`

## Request parameters

| Name   | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------ | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| funcId | string | Yes                                    | -                                           | Pipeline function ID                       | `62ce9135dxxxxb83e373f5d6`                  |

## Sample code

```ts
import { ManagementClient, Models } from "@genauth/nodejs";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If it is a private deployment customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.getPipelineFunction({
    funcId: "62ce9135dxxxxb83e373f5d6",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `PipelineFunctionSingleRespDto`

| Name       | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                 | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                 | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                 | Request ID. This is returned when the request fails.                                                                                                                                                                                                                                                                                           |
| data       | <a href="#PipelineFunctionDto">PipelineFunctionDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "funcId": "62ce9135dxxxxb83e373f5d6",
    "funcName": "Registration/login is prohibited from 3-6 am every Sunday for system maintenance",
    "funcDescription": "Registration/login is prohibited from 3-6 am every Sunday for system maintenance.",
    "scene": "PRE_REGISTER",
    "createdAt": "2022-07-03T03:20:30.000Z",
    "updatedAt": "2022-07-03T03:20:30.000Z",
    "timeout": 3,
    "sourceCode": "async function pipe(user, context, callback) {\n const date = new Date();\n const d = date.getDay();\n const n = date.getHours();\n // Registration is prohibited from 3-6 am every Sunday\n if (d === 0 && (3 <= n && n <= 6)) {\n return callback(new Error('System maintenance, registration is temporarily suspended!'));\n }\n callback(null, user, context)\n}",
    "status": "success"
  }
}
```

## Data structure

### <a id="PipelineFunctionDto"></a> PipelineFunctionDto

| Name               | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                    | <div style="width:200px">Sample value</div>                                               |
| ------------------ | ------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| funcId             | string  | yes                                           | Function ID                                                                                                                                                                                                                                                                                                                                                                                                                   | `62ce9135dxxxxb83e373f5d6`                                                                |
| funcName           | string  | yes                                           | Function name                                                                                                                                                                                                                                                                                                                                                                                                                 | `Registration/login is prohibited during system maintenance from 3-6 a.m. every Sunday`   |
| funcDescription    | string  | no                                            | Function description                                                                                                                                                                                                                                                                                                                                                                                                          | `Registration/login is prohibited during system maintenance from 3-6 a.m. every Sunday` ` |
| scene              | string  | yes                                           | Function triggering scenario:<br>- `PRE_REGISTER`: before registration<br>- `POST_REGISTER`: after registration<br>- `PRE_AUTHENTICATION`: before authentication<br>- `POST_AUTHENTICATION`: after authentication<br>- `PRE_OIDC_ID_TOKEN_ISSUED`: before OIDC ID Token issuance<br>- `PRE_OIDC_ACCESS_TOKEN_ISSUED`: before OIDC Access Token issuance<br>- `PRE_COMPLETE_USER_INFO`: before completing user information<br> | PRE_REGISTER                                                                              |
| createdAt          | string  | yes                                           | Function creation time                                                                                                                                                                                                                                                                                                                                                                                                        | `2022-07-03T03:20:30.000Z`                                                                |
| updatedAt          | string  | yes                                           | Function modification time                                                                                                                                                                                                                                                                                                                                                                                                    | `2022-07-03T03:20:30.000Z`                                                                |
| isAsynchronous     | boolean | yes                                           | Whether to execute asynchronously. Functions set to asynchronous execution will not block the execution of the entire process, and are suitable for asynchronous notification scenarios, such as Feishu group notifications, DingTalk group notifications, etc.                                                                                                                                                               |                                                                                           |
| timeout            | number  | yes                                           | Function execution timeout, the shortest is 1 second, the longest is 60 seconds, and the default is 3 seconds.                                                                                                                                                                                                                                                                                                                | `3`                                                                                       |
| terminateOnTimeout | boolean | yes                                           | If the function runs out of time, whether to terminate the entire process, the default is no.                                                                                                                                                                                                                                                                                                                                 |                                                                                           |
| sourceCode         | string  | yes                                           | function source code                                                                                                                                                                                                                                                                                                                                                                                                          | `async function pipe(user, context, callback) {                                           |

const date = new Date();
const d = date.getDay();
const n = date.getHours();
// Registration is prohibited from 3-6 am every Sunday
if (d === 0 && (3 <= n && n <= 6)) {
return callback(new Error('System maintenance, temporarily stop registration!'));
}
callback(null, user, context)
}`| | status | string | yes | Function current status: <br>-`uploading`: uploading<br>- `success`: upload successful<br>- `failed`: upload failed <br> | uploading |
| uploadErrMsg | string | no | Error message for upload failure | |
| enabled | boolean | yes | This Pipeline is enabled | |
