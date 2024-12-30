# Get Webhook details

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get webhook details based on the specified webhookId

## Method Name

`ManagementClient.getWebhook`

## Request Parameters

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| --------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| webhookId | string | yes                                          | -                                           | Webhook ID                                 | `6229ffaxxxxxxxxcade3e3d9`                   |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CostGetCurrentUsageRespDto;
import cn.authing.sdk.java.dto.GetWebhookDto;
import cn.authing.sdk.java.dto.GetWebhookRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetWebhookTest {
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

        GetWebhookDto getWebhookDto = new GetWebhookDto();
        getWebhookDto.setWebhookId("6354e687e0b27d408dc8a9bf");
        GetWebhookRespDto webhook = client.getWebhook(getWebhookDto);
        System.out.println(JsonUtils.serialize(webhook));
    }
}

```

## Request Response

Type： `GetWebhookRespDto`

| Name       | Type                                 | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                               | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                               | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                               | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#WebhookDto">WebhookDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "webhookId": "6229ffaxxxxxxxxcade3e3d9",
    "createdAt": "2022-07-03T02:20:30.000Z",
    "updatedAt": "2022-07-03T02:20:30.000Z",
    "name": "User Created Event",
    "url": "https://example.com/callback",
    "contentType": "application/json",
    "enabled": true,
    "events": "[\"user:created\"]",
    "secret": "xxxxxxxxxxxx"
  }
}
```

## Data Structure

### <a id="WebhookDto"></a> WebhookDto

| Name        | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>             | <div style="width:200px">Example Value</div> |
| ----------- | ------- | -------------------------------------------- | ------------------------------------------------------ | -------------------------------------------- |
| webhookId   | string  | yes                                          | Webhook ID                                             | `6229ffaxxxxxxxxcade3e3d9`                   |
| createdAt   | string  | yes                                          | Creation time                                          | `2022-07-03T02:20:30.000Z`                   |
| updatedAt   | string  | yes                                          | Update time                                            | `2022-07-03T02:20:30.000Z`                   |
| name        | string  | yes                                          | Webhook Name                                           | `User creation event`                        |
| url         | string  | yes                                          | Webhook callback address                               | `https://example.com/callback`               |
| contentType | string  | yes                                          | Request data format                                    | application/json                             |
| enabled     | boolean | yes                                          | Whether to enable                                      | `true`                                       |
| events      | array   | no                                           | User's real name, not unique. Example value: Zhang San | `["user:created"]`                           |
| secret      | string  | No                                           | Request key                                            | `xxxxxxxxxxxx`                               |
