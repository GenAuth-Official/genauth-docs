# Get user behavior log

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

You can select request ID, client IP, user ID, application ID, start timestamp, request success, and paging parameters to obtain user behavior logs

## Method name

`ManagementClient.getUserActionLogs`

## Request parameters

| Name       | Type                                           | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                | <div style="width:200px">Sample value</div> |
| ---------- | ---------------------------------------------- | -------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------- |
| requestId  | string                                         | No                                     | -                                           | Request ID                                                                                | `xxx`                                       |
| clientIp   | string                                         | No                                     | -                                           | Client IP                                                                                 | `xxx`                                       |
| eventType  | string                                         | No                                     | -                                           | Event type, a series of user operations, such as login, logout, register, verifyMfa, etc. | `login`                                     |
| userId     | string                                         | No                                     | -                                           | User ID                                                                                   | `xxx`                                       |
| appId      | string                                         | No                                     | -                                           | Application ID                                                                            | `xxx`                                       |
| start      | number                                         | No                                     | -                                           | Start timestamp                                                                           | `11`                                        |
| end        | number                                         | No                                     | -                                           | End timestamp                                                                             | `111`                                       |
| success    | boolean                                        | No                                     | -                                           | Whether the request is successful                                                         | `true`                                      |
| pagination | <a href="#ListWebhooksDto">ListWebhooksDto</a> | No                                     | -                                           | Pagination                                                                                |                                             |

## Sample code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If you are a privately deployed customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.getUserActionLogs({
    requestId: "requestId",
    eventType: "login",
    userId: "userId1",
    appId: "appId1",
    success: true,
    pagination: {
      page: 1,
      limit: 10,
    },
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `UserActionLogRespDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string | Description information                                                                                      |
