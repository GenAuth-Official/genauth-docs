# Get row information in batches

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get row information in batches

## Method name

`ManagementClient.get_row_batch`

## Request parameters

| Name    | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | -------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| rowIds  | string[] | yes                                          | -                                           | List of row ids                            |                                             |
| modelId | string   | yes                                          | -                                           | Function id                                |                                             |

## Request Response

Type: `MetadataListResDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type.                                      |
| data       | array  | Response data                                                                                                |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "apiCode": 20001,
  "data": {
    "cellList": {}
  }
}
```

## Data Structure

### <a id="RowDto"></a> RowDto

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>             | <div style="width:200px">Sample value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------------------------ | ------------------------------------------- |
| rowId    | string | Yes                                          | Row id                                                 |                                             |
| cellList | array  | Yes                                          | Cell list Nested type: <a href="#CellDto">CellDto</a>. |                                             |

### <a id="CellDto"></a> CellDto

| Name    | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------ | -------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| fieldId | string | Yes                                    | Field id                                   |                                             |
| value   | object | Yes                                    | Data content                               |                                             |
