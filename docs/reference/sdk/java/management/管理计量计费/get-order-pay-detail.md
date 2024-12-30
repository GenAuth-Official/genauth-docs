# Get order payment details

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the current user pool order payment details

## Method Name

`ManagementClient.getOrderPayDetail`

## Request Parameters

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| orderNo | string | yes                                          | -                                           | Order Number                               | `2022080410062060e26f7fd6b9`                 |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CostGetCurrentUsageRespDto;
import cn.authing.sdk.java.dto.CostGetOrderPayDetailRespDto;
import cn.authing.sdk.java.dto.GetOrderPayDetailDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetOrderPayDetailTest {
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

        GetOrderPayDetailDto getOrderPayDetailDto = new GetOrderPayDetailDto();
        getOrderPayDetailDto.setOrderNo("AUTHING_ORDER_NO");
        CostGetOrderPayDetailRespDto orderPayDetail = client.getOrderPayDetail(getOrderPayDetailDto);
        System.out.println(JsonUtils.serialize(orderPayDetail));
    }
}

```

## Request Response

Type： `CostGetOrderPayDetailRespDto`

| Name       | Type                                                       | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                     | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                     | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                     | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#CostGetOrderPayDetail">CostGetOrderPayDetail</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "orderNo": "2022080911591337da0aae9660",
    "channelOrderNo": "Mock22e7ecfd-745d-46ad-b563-ef4db5719bfb",
    "paidAmount": "7.9",
    "paidTime": "2022-08-09 11:59:46",
    "paidAccountNo": "62bec1591aeb41ad3f1a6503",
    "payStatus": "3",
    "createTime": "2022-08-09 11:59:20",
    "payType": "Alipay"
  }
}
```

## Data Structure

### <a id="CostGetOrderPayDetail"></a> CostGetOrderPayDetail

| Name           | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| -------------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| orderNo        | string | yes                                          | order number                               | `2022080911591337da0aae9660`                 |
| channelOrderNo | string | yes                                          | channel order number                       | `Mock22e7ecfd-745d-46ad-b563-ef4db5719bfb`   |
| paidAmount     | string | yes                                          | channel order number                       | `7.9`                                        |
| paidTime       | string | yes                                          | payment time                               | `2022-08-09 11:59:46`                        |
| paidAccountNo  | string | yes                                          | payment account                            | `62bec1591aeb41ad3f1a6503`                   |
| payStatus      | string | yes                                          | payment status                             | `3`                                          |
| createTime     | string | yes                                          | creation time                              | `2022-08-09 11:59:20`                        |
| payType        | string | yes                                          | payment method                             | `Alipay`                                     |
