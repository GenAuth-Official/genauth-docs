# Get data object row information based on attribute values

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get data object row information based on attribute values, only allow accurate query through unique fields.

## Method Name

`ManagementClient.getRowByValue`

## Request Parameters

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>            | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------- | ----------------------------------------------------- | -------------------------------------------- |
| showFieldId | string | yes                                          | -                                           | Whether to use field id as key in the returned result |                                              |
| value       | string | yes                                          | -                                           | Field value                                           |                                              |
| key         | string | yes                                          | -                                           | Field key                                             |                                              |
| modelId     | string | yes                                          | -                                           | Function id                                           |                                              |

## Request Response

Type： `FunctionModelValueResDto`

| Name       | Type                         | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                       | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                       | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                       | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| data       | <a href="#RowDto">RowDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {
    "cellList": {}
  }
}
```

## Data Structure

### <a id="RowDto"></a> RowDto

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>             | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------------------------ | -------------------------------------------- |
| rowId    | string | Yes                                          | row id                                                 |                                              |
| cellList | array  | Yes                                          | cell list nested Type: <a href="#CellDto">CellDto</a>. |                                              |

### <a id="CellDto"></a> CellDto

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| fieldId | string | Yes                                          | field id                                   |                                              |
| value   | object | Yes                                          | data content                               |                                              |
