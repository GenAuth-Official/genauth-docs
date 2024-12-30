# Get package details

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get the current user pool package details.

## Method Name

`ManagementClient.getCurrentPackageInfo`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CostGetCurrentPackageRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;


public class GetCurrentPackageInfoTest {
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

        CostGetCurrentPackageRespDto currentPackageInfo = client.getCurrentPackageInfo();
        System.out.println(JsonUtils.serialize(currentPackageInfo));
    }
}

```

## Request Response

Type： `CostGetCurrentPackageRespDto`

| Name       | Type                                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                       | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                       | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                       | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#CostCurrentPackageInfo">CostCurrentPackageInfo</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "code": "V4_B2C_Enterprise:1000",
    "endTime": "2022-09-09 00:00:00",
    "overdueDays": "0",
    "goodsPackage": "Package Information"
  }
}
```

## Data Structure

### <a id="CostCurrentPackageInfo"></a> CostCurrentPackageInfo

| Name         | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                       | <div style="width:200px">Example Value</div> |
| ------------ | ------ | -------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------- |
| code         | string | Yes                                          | Package code                                                                     | `V4_B2C_Enterprise:1000`                     |
| endTime      | string | Yes                                          | Package end time                                                                 | `2022-09-09 00:00:00`                        |
| overdueDays  | string | Yes                                          | Package overdue days                                                             | `0`                                          |
| goodsPackage |        | Yes                                          | Package information Nested Type: <a href="#GoodsPackageDto">GoodsPackageDto</a>. | `Package Information`                        |

### <a id="GoodsPackageDto"></a> GoodsPackageDto

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| --------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| name      | string | Yes                                          | Package Name name                          | `Test Package`                               |
| nameEn    | string | Yes                                          | Package Name nameEn                        | `test package`                               |
| unitPrice | string | Yes                                          | Package Unit Price                         | `99.00`                                      |
| code      | string | Yes                                          | Package Code code                          | `V4_B2C_Enterprise:1000`                     |
| group     | string | Yes                                          | Package Version                            | `Enterprise`                                 |
| sceneCode | string | yes                                          | Package scene code                         | `B2C`                                        |
| amount    | string | yes                                          | Package MAU amount                         | `1000`                                       |
