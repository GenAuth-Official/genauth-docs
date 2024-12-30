# Get Webhook List

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the list of Webhooks, you can select the number of pages and the paging size to get

## Method Name

`ManagementClient.listWebhooks`

## Request Parameters

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                       | <div style="width:200px">Example Value</div> |
| ----- | ------ | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------- |
| page  | number | No                                           | 1                                           | Current page number, starting from 1                             | `1`                                          |
| limit | number | No                                           | 10                                          | Number per page, the maximum cannot exceed 50, the default is 10 | `10`                                         |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CostGetCurrentUsageRespDto;
import cn.authing.sdk.java.dto.GetWebhooksRespDto;
import cn.authing.sdk.java.dto.ListWebhooksDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class ListWebhooksTest {
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

        ListWebhooksDto listWebhooksDto = new ListWebhooksDto();
        GetWebhooksRespDto getWebhooksRespDto = client.listWebhooks(listWebhooksDto);
        System.out.println(JsonUtils.serialize(getWebhooksRespDto));
    }
}

```

## Request Response

Type： `GetWebhooksRespDto`

| Name       | Type                                           | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                         | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                         | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#GetWebhooksData">GetWebhooksData</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 1,
    "list": {
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
}
```

## Data Structure

### <a id="GetWebhooksData"></a> GetWebhooksData

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                         | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------- |
| totalCount | number | Yes                                          | Total number of records                                            | `1`                                          |
| list       | array  | Yes                                          | Return to list Nested Type：<a href="#WebhookDto">WebhookDto</a>。 |                                              |

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
