# Advanced search for data objects

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Advanced search for data objects

## Method name

`ManagementClient.listRow`

## Request parameters

| Name                   | Type                                 | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                 | <div style="width:200px">Sample value</div> |
| ---------------------- | ------------------------------------ | -------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| modelId                | string                               | Yes                                    | -                                           | Function id                                                                                                |                                             |
| keywords               | string                               | No                                     | -                                           | Keywords                                                                                                   |                                             |
| conjunction            | string                               | No                                     | -                                           | Relationship of multiple search conditions: <br> - and: and <br> - or: or <br>                             |                                             |
| conditions             | <a href="#Condition">Condition[]</a> | No                                     | -                                           | Search condition                                                                                           |                                             |
| sort                   | object[]                             | No                                     | -                                           | Sorting condition                                                                                          | `[{"key1":"desc"},{"key2":"asc"}]`          |
| page                   | number                               | No                                     | 1                                           | Current page number, starting from 1                                                                       | `1`                                         |
| limit                  | number                               | No                                     | 10                                          | Number per page, maximum cannot exceed 50, default is 10                                                   | `10`                                        |
| fetchAll               | boolean                              | No                                     | -                                           | Whether to return all without paging (only supports the scenario of getting child nodes in tree structure) |                                             |
| withPath               | boolean                              | No                                     | -                                           | Whether to return the full path of the node (only supports tree structure)                                 |                                             |
| showFieldId            | boolean                              | No                                     | -                                           | Whether to use field id as key in the returned result                                                      |                                             |
| previewRelation        | boolean                              | No                                     | -                                           | The returned result contains a preview of related data (the first three)                                   |                                             |
| getRelationFieldDetail | boolean                              | No                                     | -                                           | Whether to return detailed user information of related data, currently only supports users.                |                                             |
| scope                  | <a href="#ScopeDto">ScopeDto</a>     | No                                     | -                                           | Limit the search scope to the part associated with a certain function                                      |                                             |
| filterRelation         | <a href="#ScopeDto">ScopeDto</a>     | No                                     | -                                           | Filter the specified related data                                                                          |                                             |
| expand                 | <a href="#Expand">Expand[]</a>       | No                                     | -                                           | Get the detailed fields of the corresponding related data                                                  |                                             |

## Request response

Type: `FunctionModelValueListResDto`

| Name       | Type                                                               | Description                                                                                                                                                                                                                                                                                                                                           |
| ---------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                             | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                          |
| message    | string                                                             | Description                                                                                                                                                                                                                                                                                                                                           |
| apiCode    | number                                                             | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| data       | <a href="#FunctionModelValueListDto">FunctionModelValueListDto</a> | Response data                                                                                                                                                                                                                                                                                                                                         |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {}
}
```

## Data structure

### <a id="Condition"></a> Condition

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                         | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| key      | string | Yes                                           | Search field key                                                                                                                                                                                                                   |                                             |
| value    | object | Yes                                           | Search value                                                                                                                                                                                                                       |                                             |
| operator | string | Yes                                           | Operation type: <br> - eq: equal to <br> - ne: not equal to <br> - co: contains <br> - gt: greater than <br> - lt: less than <br> - lte: less than or equal to <br> - gte: greater than or equal to <br> - in: array contains <br> |                                             |

### <a id="ScopeDto"></a> ScopeDto

| Name    | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| modelId | string | Yes                                           | Feature id                                 |                                             |
| id      | string | Yes                                           | Row id                                     |                                             |
| fieldId | string | Yes                                           | Field id                                   |                                             |

### <a id="Expand"></a> Expand

| Name   | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------ | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| field  | string | Yes                                           | Related field key                          |                                             |
| select | array  | Yes                                           | Which related fields to expand             |                                             |

### <a id="FunctionModelValueListDto"></a> FunctionModelValueListDto

| Name       | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| totalCount | number | yes                                    | Total number of rows                       |                                             |
| list       | array  | yes                                    | Response data                              |                                             |
