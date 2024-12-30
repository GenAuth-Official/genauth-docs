# Create a Webhook

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

You need to specify the Webhook Name, Webhook callback address, request data format, and user real name to create a Webhook. You can also choose whether to enable and request a key to create it

## Method Name

`ManagementClient.createWebhook`

## Request Parameters

| Name        | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>             | <div style="width:200px">Example Value</div> |
| ----------- | -------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------ | -------------------------------------------- |
| contentType | string   | Yes                                          | -                                           | Request data format                                    | `application/json`                           |
| events      | string[] | Yes                                          | -                                           | User's real name, not unique. Example value: Zhang San | `["user:created"]`                           |
| url         | string   | yes                                          | -                                           | Webhook callback address                               | `https://example.com/callback`               |
| name        | string   | yes                                          | -                                           | Webhook Name                                           | `User creation event`                        |
| enabled     | boolean  | no                                           | -                                           | Enabled                                                | `true`                                       |
| secret      | string   | no                                           | -                                           | Request key                                            | `xxxxxxxxxxxx`                               |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CostGetCurrentUsageRespDto;
import cn.authing.sdk.java.dto.CreateWebhookDto;
import cn.authing.sdk.java.dto.CreateWebhookRespDto;
import cn.authing.sdk.java.dto.WebhookDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

import java.util.ArrayList;
import java.util.List;

public class CreateWebhookTest {
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

        CreateWebhookDto createWebhookDto = new CreateWebhookDto();
        createWebhookDto.setContentType(CreateWebhookDto.ContentType.APPLICATION_JSON);
        List<String> events = new ArrayList<>();
        events.add("user");
        createWebhookDto.setEvents(events);
        createWebhookDto.setUrl("https://example.com/callback");
        createWebhookDto.setName("example");
        CreateWebhookRespDto webhook = client.createWebhook(createWebhookDto);
        System.out.println(JsonUtils.serialize(webhook));
    }
}

```

## Request Response

Type： `CreateWebhookRespDto`

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
