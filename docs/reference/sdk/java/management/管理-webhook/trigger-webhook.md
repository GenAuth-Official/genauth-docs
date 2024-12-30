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

## Method Name

`ManagementClient.triggerWebhook`

## Request Parameters

| Name           | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div>                        |
| -------------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------- |
| webhookId      | string | yes                                          | -                                           | Webhook ID                                 | `6229ffaxxxxxxxxcade3e3d9`                                          |
| requestHeaders | object | no                                           | -                                           | Request Headers                            | `{"eventName":"test","data":{"description":"A test from authing"}}` |
| requestBody    | object | No                                           | -                                           | Request body                               | `{"eventName":"test","data":{"description":"A test from authing"}}` |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CostGetCurrentUsageRespDto;
import cn.authing.sdk.java.dto.TriggerWebhookDto;
import cn.authing.sdk.java.dto.TriggerWebhookRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class TriggerWebhookTest {
    // Need to be replaced with your GenAuth Access Key ID
    private static final String ACCESS_KEY_ID = "AUTHING_ACCESS_KEY_ID";
    // Need to be replaced with your GenAuth Access Key Secret
    private static final String ACCESS_KEY_SECRET = "AUTHING_ACCESS_KEY_SECRET";

    public static void main(String[] args) throws Throwable {
        ManagementClientOptions clientOptions = new ManagementClientOptions();
        clientOptions.setAccessKeyId(ACCESS_KEY_ID);
        clientOptions.setAccessKeySecret(ACCESS_KEY_SECRET);
        // If you are a private deployment customer, you need to set the GenAuth service domain name
        // clientOptions.setHost("https://api.your-authing-service.com");

        ManagementClient client = new ManagementClient(clientOptions);

        TriggerWebhookDto triggerWebhookDto = new TriggerWebhookDto();
        triggerWebhookDto.setWebhookId("AUTHING_WEBHOOK_ID");
        TriggerWebhookRespDto triggerWebhookRespDto = client.triggerWebhook(triggerWebhookDto);
        System.out.println(JsonUtils.serialize(triggerWebhookRespDto));
    }
}

```

## Request Response

Type： `TriggerWebhookRespDto`

| Name       | Type                                                 | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                               | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                               | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                               | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#TriggerWebhookData">TriggerWebhookData</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

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

## Data Structure

### <a id="TriggerWebhookData"></a> TriggerWebhookData

| Name     | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                    | <div style="width:200px">Example Value</div> |
| -------- | ---- | -------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------- |
| response |      | Yes                                          | The original response data returned by the interface is nested Type：<a href="#Any">Any</a>。 |                                              |

### <a id="Any"></a> Any

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
