# Get row information in batches

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get row information in batches

## Method Name

`ManagementClient.getRowBatch`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| rowIds | string[] | yes | - | list of row ids | |
| modelId | string | yes | - | feature id | |




## Request Response

Type： `MetadataListResDto`

| Name | Type | Description |
| ---- | ---- | ---- |
| statusCode | number | Business status code. You can use this status code to determine whether the operation is successful. 200 means success. |
| message | string | Description |
| apiCode | number | This error code is used to get the specific error type. |
| data | array | Response data |



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

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- |  ---- | ---- | ---- | ---- |
| rowId | string | Yes | row id | |
| cellList | array | Yes | cell list nested Type: <a href="#CellDto">CellDto</a>. | |

### <a id="CellDto"></a> CellDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | ---- | ---- | ---- |
| fieldId | string | Yes | field id | |
| value | object | Yes | data content | |


