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

## Method name

`ManagementClient.get_current_package_info`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

## Request Response

Type: `CostGetCurrentPackageRespDto`

| Name       | Type                                                         | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                       | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                       | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#CostCurrentPackageInfo">CostCurrentPackageInfo</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "code": "V4_B2C_Enterprise:1000",
    "endTime": "2022-09-09 00:00:00",
    "overdueDays": "0",
    "goodsPackage": "Package information"
  }
}
```

## Data Structure

### <a id="CostCurrentPackageInfo"></a> CostCurrentPackageInfo

| Name         | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                       | <div style="width:200px">Sample value</div> |
| ------------ | ------ | --------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------- |
| code         | string | Yes                                           | Package code                                                                     | `V4_B2C_Enterprise:1000`                    |
| endTime      | string | Yes                                           | Package end time                                                                 | `2022-09-09 00:00:00`                       |
| overdueDays  | string | Yes                                           | Package overdue days                                                             | `0`                                         |
| goodsPackage |        | Yes                                           | Package information Nested type: <a href="#GoodsPackageDto">GoodsPackageDto</a>. | `Package information`                       |

### <a id="GoodsPackageDto"></a> GoodsPackageDto

| Name      | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| --------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| name      | string | yes                                           | Package name name                          | `Test package`                              |
| nameEn    | string | yes                                           | Package name nameEn                        | `test package`                              |
| unitPrice | string | yes                                           | Package unit price                         | `99.00`                                     |
| code      | string | yes                                           | Package code code                          | `V4_B2C_Enterprise:1000`                    |
| group     | string | yes                                           | Package version                            | `Enterprise`                                |
| sceneCode | string | yes                                           | Package scene code                         | `B2C`                                       |
| amount    | string | yes                                           | Package MAU quantity                       | `1000`                                      |
