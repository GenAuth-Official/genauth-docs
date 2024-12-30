# Create a tree data resource

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

When you only need to create a tree type data resource, you can use this API. We have fixed the data resource type, and you do not need to pass in the `type` character field. Note: `struct` should be passed in according to the tree type data resource structure, please refer to the example.

## Method name

`ManagementClient.create_data_resource_by_tree`

## Request parameters

| Name          | Type                                                             | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                      | <div style="width:200px">Sample value</div> |
| ------------- | ---------------------------------------------------------------- | -------------------------------------- | ------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------- |
| actions       | string[]                                                         | Yes                                    | -                                           | Data resource permission operation list Array length limit: 50. | `["read","get"]`                            |
| struct        | <a href="#DataResourceTreeStructs">DataResourceTreeStructs[]</a> | Yes                                    | -                                           | Tree data resource node Array length limit: 50.                 |                                             |
| resourceCode  | string                                                           | yes                                    | -                                           | Data resource Code, unique in the permission space              | `dataResourceTestCode`                      |
| resourceName  | string                                                           | yes                                    | -                                           | Data resource name, unique in the permission space              | `Sample data resource name`                 |
| namespaceCode | string                                                           | yes                                    | -                                           | Permission space where the data policy is located               | `code1`                                     |
| description   | string                                                           | no                                     | -                                           | Data resource description                                       | `Sample data resource description`          |

## Request Response

Type: `CreateTreeDataResourceResponseDto`

| Name       | Type                                                                       | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                     | Business status code, which can be used to determine whether the operation is successful. 200 indicates success.                                                                                                                                                                                                                               |
| message    | string                                                                     | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                                     | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#CreateTreeDataResourceRespDto">CreateTreeDataResourceRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "resourceName": "Sample data resource name",
    "resourceCode": "dataResourceTestCode",
    "type": "TREE",
    "description": "Sample data resource description",
    "struct": {
      "code": "123",
      "name": "Data resource",
      "value": "Sample data resource node",
      "children": "[{\"code\":\"code1\",\"name\":\"Subnode 1\",\"value\":\"Subnode value\",\"children\":[{\"code\":\"code2\",\"name\":\"Subnode 2\",\"value\":\"Subnode 2 value\"}]}]"
    },
    "actions": "[\"read\",\"get\"]"
  }
}
```

## Data Structure

### <a id="DataResourceTreeStructs"></a> DataResourceTreeStructs

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                      | <div style="width:200px">Sample value</div>                                                                                   |
| -------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| code     | string | Yes                                           | Data resource node Code, unique in the same level                               | `123`                                                                                                                         |
| name     | string | Yes                                           | Data resource node name, unique in the same level                               | `Data resource`                                                                                                               |
| value    | string | No                                            | Data resource node Value                                                        | `Sample data resource node`                                                                                                   |
| children | array  | No                                            | Child nodes of data resource nodes, child node levels support up to five levels | `[{"code":"code1","name":"child1","value":"childvalue","children":[{"code":"code2","name":"child2","value":"child2value"}]}]` |

### <a id="CreateTreeDataResourceRespDto"></a> CreateTreeDataResourceRespDto

| Name         | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                   | <div style="width:200px">Sample value</div> |
| ------------ | ------ | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| resourceName | string | Yes                                           | Data resource name, unique in the permission space                                                                           | `Sample data resource name`                 |
| resourceCode | string | Yes                                           | Data resource Code, unique in the permission space                                                                           | `dataResourceTestCode`                      |
| type         | string | yes                                           | Data resource type, currently supports tree structure (TREE), string (STRING), array (ARRAY)                                 | TREE                                        |
| description  | string | no                                            | Data resource description                                                                                                    | `Sample data resource description`          |
| struct       | array  | yes                                           | Tree data resource node Nested type: <a href="#DataResourceTreeStructs">DataResourceTreeStructs</a>. Array length limit: 50. |                                             |
| actions      | array  | yes                                           | Data resource permission operation list Array length limit: 50.                                                              | `["read","get"]`                            |

### <a id="DataResourceTreeStructs"></a> DataResourceTreeStructs

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                      | <div style="width:200px">Sample value</div>                                                                                                            |
| -------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| code     | string | Yes                                           | Data resource node Code, unique in the same level                               | `123`                                                                                                                                                  |
| name     | string | Yes                                           | Data resource node name, unique in the same level                               | `Data Resource`                                                                                                                                        |
| value    | string | No                                            | Data resource node Value                                                        | `Sample Data Resource Node`                                                                                                                            |
| children | array  | No                                            | Child nodes of data resource nodes, child node levels support up to five levels | `[{"code":"code1","name":"child node 1","value":"child node value","children":[{"code":"code2","name":"child node 2","value":"child node 2 value"}]}]` |
