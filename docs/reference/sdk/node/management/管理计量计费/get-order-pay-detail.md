# Get order payment details

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the payment details of the current user pool order

## Method name

`ManagementClient.getOrderPayDetail`

## Request parameters

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| orderNo | string | Yes                                          | -                                           | Order number                               | `2022080410062060e26f7fd6b9`                |

## Sample code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If it is a private deployment customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.getOrderPayDetail({
    orderNo: "20220804xxxxxx60e26f7fd6b9",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `CostGetOrderPayDetailRespDto`

| Name       | Type                                                       | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                     | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                     | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                     | Request ID. It will be returned when the request fails.                                                                                                                                                                                                                                                                                        |
| data       | <a href="#CostGetOrderPayDetail">CostGetOrderPayDetail</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

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

## Data structure

### <a id="CostGetOrderPayDetail"></a> CostGetOrderPayDetail

| Name           | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| orderNo        | string | Yes                                           | Order number                               | `2022080911591337da0aae9660`                |
| channelOrderNo | string | yes                                           | channel order number                       | `Mock22e7ecfd-745d-46ad-b563-ef4db5719bfb`  |
| paidAmount     | string | yes                                           | channel order number                       | `7.9`                                       |
| paidTime       | string | yes                                           | Payment time                               | `2022-08-09 11:59:46`                       |
| paidAccountNo  | string | yes                                           | Payment account                            | `62bec1591aeb41ad3f1a6503`                  |
| payStatus      | string | yes                                           | Payment status                             | `3`                                         |
| createTime     | string | yes                                           | Creation time                              | `2022-08-09 11:59:20`                       |
| payType        | string | yes                                           | Payment method                             | `Alipay`                                    |
