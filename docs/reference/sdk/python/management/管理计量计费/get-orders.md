# Get order list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the current user pool order list

## Method name

`ManagementClient.get_orders`

## Request parameters

| Name  | Type   | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| ----- | ------ | --------------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| page  | number | No                                            | 1                                           | Current page number, starting from 1                     | `1`                                         |
| limit | number | No                                            | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |

## Request Response

Type: `CostGetOrdersRespDto`

| Name       | Type                                     | Description                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                       |
| message    | string                                   | Description                                                                                                                                                                                                                                                                                                                                        |
| apiCode    | number                                   | Segmented error code, which can be used to get the specific error type (no return for successful requests). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                       |
| data       | <a href="#GetOrdersRes">GetOrdersRes</a> | Response data                                                                                                                                                                                                                                                                                                                                      |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "orderNo": "202209251234224",
      "status": "1: Unpaid, 2: Paid, 3: Completed, 4: Cancelled, 5: Expired",
      "orderType": "New: New Purchase, Upgrade: Upgrade, Renew: Renew, Overdue_Correct: Overdue Correction, Overflowed_Correct: Overdue Correction"
    }
  }
}
```

## Data Structure

### <a id="GetOrdersRes"></a> GetOrdersRes

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                     | <div style="width:200px">Sample value</div> |
| ---------- | ------ | --------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------- |
| totalCount | string | yes                                           | Total                                                          |                                             |
| list       | array  | yes                                           | Response data Nested type: <a href="#OrderItem">OrderItem</a>. |                                             |

### <a id="OrderItem"></a> OrderItem

| Name           | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                         | <div style="width:200px">Sample value</div>                                                                                           |
| -------------- | ------ | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| orderNo        | string | Yes                                           | Order number                                                                                                                                       | `202209251234224`                                                                                                                     |
| goodsName      | string | Yes                                           | Package name in Chinese                                                                                                                            |                                                                                                                                       |
| goodsNameEn    | string | Yes                                           | Package name in English                                                                                                                            |                                                                                                                                       |
| goodsUnitPrice | string | Yes                                           | Unit price                                                                                                                                         |                                                                                                                                       |
| quantity       | string | Yes                                           | Quantity                                                                                                                                           |                                                                                                                                       |
| actualAmount   | string | Yes                                           | Actual amount                                                                                                                                      |                                                                                                                                       |
| status         | string | Yes                                           | Order status                                                                                                                                       | `1: Unpaid, 2: Paid, 3: Completed, 4: Cancelled, 5: Expired`                                                                          |
| orderType      | string | Yes                                           | Order type                                                                                                                                         | `New: New purchase, Upgrade: Upgrade, Renew: Renewal, Overdue_Correct: Overdue correction, Overflowed_Correct: Overflowed correction` |
| createTime     | string | Yes                                           | Creation time                                                                                                                                      |                                                                                                                                       |
| source         | string | Yes                                           | Licence: License order, Offline: Offline transaction, Eadmin: Backstage activation, SelfHelp: Self-service order, Cdkey: Cdkey activity redemption |                                                                                                                                       |
