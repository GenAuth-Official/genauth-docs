# Get the order list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the current user pool order list

## Method Name

`ManagementClient.getOrders`

## Request Parameters

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Example Value</div> |
| ----- | ------ | -------------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | -------------------------------------------- |
| page  | number | No                                           | 1                                           | Current page number, starting from 1                     | `1`                                          |
| limit | number | No                                           | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                         |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CostGetCurrentUsageRespDto;
import cn.authing.sdk.java.dto.CostGetOrdersRespDto;
import cn.authing.sdk.java.dto.GetOrdersDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetOrdersTest {
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

        GetOrdersDto getOrdersDto = new GetOrdersDto();
        CostGetOrdersRespDto orders = client.getOrders(getOrdersDto);
        System.out.println(JsonUtils.serialize(orders));
    }
}

```

## Request Response

Type： `CostGetOrdersRespDto`

| Name       | Type                                     | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                   | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                   | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#GetOrdersRes">GetOrdersRes</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "orderNo": "202209251234224",
      "status": "1: Unpaid, 2: Paid, 3: Completed, 4: Cancelled, 5: Expired",
      "orderType": "New: New purchase, Upgrade: Upgrade, Renew: Renew, Overdue_Correct: Overdue correction, Overflowed_Correct: Overdue correction"
    }
  }
}
```

## Data Structure

### <a id="GetOrdersRes"></a> GetOrdersRes

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                     | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------- |
| totalCount | string | yes                                          | total                                                          |                                              |
| list       | array  | yes                                          | Response data nested type: <a href="#OrderItem">OrderItem</a>. |                                              |

### <a id="OrderItem"></a> OrderItem

| Name           | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                         | <div style="width:200px">Example Value</div>                                                                                          |
| -------------- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| orderNo        | string | Yes                                          | Order number                                                                                                                                       | `202209251234224`                                                                                                                     |
| goodsName      | string | Yes                                          | Package name in Chinese                                                                                                                            |                                                                                                                                       |
| goodsNameEn    | string | Yes                                          | Package name in English                                                                                                                            |                                                                                                                                       |
| goodsUnitPrice | string | Yes                                          | Unit price                                                                                                                                         |                                                                                                                                       |
| quantity       | string | Yes                                          | Quantity                                                                                                                                           |                                                                                                                                       |
| actualAmount   | string | Yes                                          | Actual amount                                                                                                                                      |                                                                                                                                       |
| status         | string | Yes                                          | Order status                                                                                                                                       | `1: Unpaid, 2: Paid, 3: Completed, 4: Cancelled, 5: Expired`                                                                          |
| orderType      | string | Yes                                          | Order type                                                                                                                                         | `New: New purchase, Upgrade: Upgrade, Renew: Renewal, Overdue_Correct: Overdue correction, Overflowed_Correct: Overflowed correction` |
| createTime     | string | Yes                                          | Creation time                                                                                                                                      |                                                                                                                                       |
| source         | string | Yes                                          | Licence: License order, Offline: Offline transaction, Eadmin: Backstage activation, SelfHelp: Self-service order, Cdkey: Cdkey activity redemption |                                                                                                                                       |
