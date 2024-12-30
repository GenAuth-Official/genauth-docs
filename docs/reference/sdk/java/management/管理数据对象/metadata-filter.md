# Advanced search for data objects

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Advanced search for data objects

## Method Name

`ManagementClient.listRow`

## Request Parameters

| Name                   | Type                                 | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                   | <div style="width:200px">Example Value</div> |
| ---------------------- | ------------------------------------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| modelId                | string                               | Yes                                          | -                                           | Function id                                                                                                  |                                              |
| keywords               | string                               | No                                           | -                                           | Keywords                                                                                                     |                                              |
| conjunction            | string                               | No                                           | -                                           | Relationship of multiple search conditions: <br> - and: and <br> - or: or <br>                               |                                              |
| conditions             | <a href="#Condition">Condition[]</a> | No                                           | -                                           | Search condition                                                                                             |                                              |
| sort                   | object[]                             | No                                           | -                                           | Sorting conditions                                                                                           | `[{"key1":"desc"},{"key2":"asc"}]`           |
| page                   | number                               | No                                           | 1                                           | Current page number, starting from 1                                                                         | `1`                                          |
| limit                  | number                               | No                                           | 10                                          | The maximum number of pages per page cannot exceed 50, and the default value is 10                           | `10`                                         |
| fetchAll               | boolean                              | No                                           | -                                           | Whether to return all without paging (only supports the scenario of obtaining child nodes in tree structure) |                                              |
| withPath               | boolean                              | No                                           | -                                           | Whether to return the full path of the node (only supports tree structure)                                   |                                              |
| showFieldId            | boolean                              | No                                           | -                                           | Whether to use field id as key in the returned result                                                        |                                              |
| previewRelation        | boolean                              | No                                           | -                                           | The returned result contains a preview of related data (the first three)                                     |                                              |
| getRelationFieldDetail | boolean                              | No                                           | -                                           | Whether to return detailed user information of related data. Currently only users are supported.             |                                              |
| scope                  | <a href="#ScopeDto">ScopeDto</a>     | No                                           | -                                           | Limit the search scope to the part related to a certain function                                             |                                              |
| filterRelation         | <a href="#ScopeDto">ScopeDto</a>     | No                                           | -                                           | Filter specified related data                                                                                |                                              |
| expand                 | <a href="#Expand">Expand[]</a>       | No                                           | -                                           | Get detailed fields of corresponding related data                                                            |                                              |

## Request Response

Type： `FunctionModelValueListResDto`

| Name       | Type                                                               | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                             | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                             | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                             | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| data       | <a href="#FunctionModelValueListDto">FunctionModelValueListDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {}
}
```

## Data Structure

### <a id="Condition"></a> Condition

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| key      | string | Yes                                          | Key of the search field                                                                                                                                                                                                   |                                              |
| value    | object | Yes                                          | Search value                                                                                                                                                                                                              |                                              |
| operator | string | Yes                                          | Operation Type:<br> - eq: equal to<br> - ne: not equal to<br> - co: contains<br> - gt: greater than<br> - lt: less than<br> - lte: less than or equal to<br> - gte: greater than or equal to<br> - in: array contains<br> |                                              |

### <a id="ScopeDto"></a> ScopeDto

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| modelId | string | Yes                                          | Function id                                |                                              |
| id      | string | Yes                                          | row id                                     |                                              |
| fieldId | string | yes                                          | field id                                   |                                              |

### <a id="Expand"></a> Expand

| Name   | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------ | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| field  | string | yes                                          | associated field key                       |                                              |
| select | array  | yes                                          | which associated fields to expand          |                                              |

### <a id="FunctionModelValueListDto"></a> FunctionModelValueListDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| totalCount | number | yes                                          | total number of rows                       |                                              |
| list       | array  | yes                                          | Response data                              |                                              |
