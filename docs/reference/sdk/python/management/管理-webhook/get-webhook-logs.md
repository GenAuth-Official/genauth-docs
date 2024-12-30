# Get Webhook log

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get webhook logs by specifying webhookId, optional page and limit. If webhookId does not exist, no error message is returned

## Method name

`ManagementClient.get_webhook_logs`

## Request parameters

| Name      | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| --------- | ------ | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| webhookId | string | Yes                                    | -                                           | Webhook ID                                               | `6229ffaxxxxxxxxcade3e3d9`                  |
| page      | number | No                                     | 1                                           | Current page number, starting from 1                     | `1`                                         |
| limit     | number | No                                     | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |

## Request response

Type: `ListWebhookLogsRespDto`

| Name       | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                 | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                 | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                 | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#ListWebhookLogsData">ListWebhookLogsData</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 1,
    "list": {
      "webhookId": "6229ffaxxxxxxxxcade3e3d9",
      "eventName": "user:created",
      "requestBody": {
        "eventName": "test",
        "data": {
          "description": "A test from authing"
        }
      },
      "requestHeaders": {
        "eventName": "test",
        "data": {
          "description": "A test from authing"
        }
      },
      "responseStatusCode": 200,
      "responseHeaders": {
        "Accept": "application/json, text/plain, */*",
        "user-agent": "authing-webhook@2.0",
        "x-authing-token": "a",
        "x-authing-webhook-secret": "a"
      },
      "responseBody": {
        "success": true
      },
      "timestamp": "2022-09-20T08:55:00.188+0800",
      "success": true,
      "errorMessage": "ERRTIMEOUT"
    }
  }
}
```

## Data structure

### <a id="ListWebhookLogsData"></a> ListWebhookLogsData

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                           | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | yes                                          | Total number of records                                              | `1`                                         |
| list       | array  | yes                                          | Return list Nested type: <a href="#WebhookLogDto">WebhookLogDto</a>. |                                             |

### <a id="WebhookLogDto"></a> WebhookLogDto

| Name               | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>    | <div style="width:200px">Sample value</div>                                                                                              |
| ------------------ | ------- | --------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| webhookId          | string  | Yes                                           | Webhook ID                                    | `6229ffaxxxxxxxxcade3e3d9`                                                                                                               |
| eventName          | string  | Yes                                           | Webhook event name                            | `user:created`                                                                                                                           |
| requestBody        | object  | Yes                                           | Webhook request body                          | `{"eventName":"test","data":{"description":"A test from authing"}}`                                                                      |
| requestHeaders     | object  | Yes                                           | Webhook request headers                       | `{"eventName":"test","data":{"description":"A test from authing"}}`                                                                      |
| responseStatusCode | number  | yes                                           | Webhook response code                         | `200`                                                                                                                                    |
| responseHeaders    | object  | yes                                           | Webhook response header                       | `{"Accept":"application/json, text/plain, */*","user-agent":"authing-webhook@2.0","x-authing-token":"a","x-authing-webhook-secret":"a"}` |
| responseBody       | object  | yes                                           | Webhook response body                         | `{"success":true}`                                                                                                                       |
| timestamp          | string  | yes                                           | timestamp                                     | `2022-09-20T08:55:00.188+0800`                                                                                                           |
| success            | boolean | yes                                           | request success                               | `true`                                                                                                                                   |
| errorMessage       | string  | No                                            | Error message returned when the request fails | `ERRTIMEOUT`                                                                                                                             |
