# Manually trigger Webhook execution

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Manually trigger webhook execution by specifying webhookId, optional request headers and request body

## Method name

`ManagementClient.trigger_webhook`

## Request parameters

| Name           | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div>                         |
| -------------- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------- |
| webhookId      | string | Yes                                    | -                                           | Webhook ID                                 | `6229ffaxxxxxxxxcade3e3d9`                                          |
| requestHeaders | object | No                                     | -                                           | Request headers                            | `{"eventName":"test","data":{"description":"A test from authing"}}` |
| requestBody    | object | No                                     | -                                           | Request body                               | `{"eventName":"test","data":{"description":"A test from authing"}}` |

## Request response

Type: `TriggerWebhookRespDto`

| Name       | Type                                                 | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                               | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                               | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                               | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#TriggerWebhookData">TriggerWebhookData</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "response": {}
  }
}
```

## Data structure

### <a id="TriggerWebhookData"></a> TriggerWebhookData

| Name     | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                | <div style="width:200px">Sample value</div> |
| -------- | ---- | -------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------- |
| response |      | Yes                                          | The response data returned by the original interface Nested type: <a href="#Any">Any</a>. |                                             |

### <a id="Any"></a> Any

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
