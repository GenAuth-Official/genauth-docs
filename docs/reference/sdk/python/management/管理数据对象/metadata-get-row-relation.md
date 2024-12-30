# Get row-related data

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Get row relation data

## Method name

`ManagementClient.get_relation_value`

## Request parameters

| Name    | Type   | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| ------- | ------ | --------------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| modelId | string | yes                                           | -                                           | Function id                                              |                                             |
| fieldId | string | yes                                           | -                                           | Field id                                                 |                                             |
| rowId   | string | yes                                           | -                                           | Row id                                                   |                                             |
| page    | number | no                                            | 1                                           | Current page number, starting from 1                     | `1`                                         |
| limit   | number | no                                            | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |

## Request Response

Type: `RelationValueListResDto`

| Name       | Type                                                     | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                   | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                   | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                   | Segmented error code, which can be used to get the specific error type (successful request is not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#RelationValueListDto">RelationValueListDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {}
}
```

## Data Structure

### <a id="RelationValueListDto"></a> RelationValueListDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| totalCount | number | Yes                                          | Total number of records                    |                                              |
| list       | array  | Yes                                          | Response data                              |                                              |
