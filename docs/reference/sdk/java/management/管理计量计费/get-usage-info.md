# Get usage details

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get the current user pool usage details.

## Method Name

`ManagementClient.getUsageInfo`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CostGetCurrentUsageRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetUsageInfoTest {
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

        CostGetCurrentUsageRespDto usageInfo = client.getUsageInfo();
        System.out.println(JsonUtils.serialize(usageInfo));
    }
}

```

## Request Response

Type： `CostGetCurrentUsageRespDto`

| Name       | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                 | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                 | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#CurrentUsageRespDto">CurrentUsageRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "usages": {
      "amount": "0",
      "current": "0",
      "experience": true,
      "modelCode": "SocialConnections",
      "modelName": "SocialConnections: Social account links"
    }
  }
}
```

## Data Structure

### <a id="CurrentUsageRespDto"></a> CurrentUsageRespDto

| Name   | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                        | <div style="width:200px">Example Value</div> |
| ------ | ----- | -------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------- |
| usages | array | yes                                          | Current usage entity Nested Type: <a href="#CurrentUsageDto">CurrentUsageDto</a>. |                                              |

### <a id="CurrentUsageDto"></a> CurrentUsageDto

| Name       | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| amount     | string  | yes                                          | Total equity                               | `0`                                          |
| current    | string  | yes                                          | Current equity usage                       | `0`                                          |
| experience | boolean | yes                                          | Is it a trial period equity                | `true`                                       |
| modelCode  | string  | yes                                          | Equity code                                | `SocialConnections`                          |
| modelName  | string  | yes                                          | Equity Name                                | `SocialConnections: Social account links`    |
