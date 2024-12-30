# Create data resources (recommended, key points)

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

## Description

This interface is used to create data resources. When you have data that needs to be set with permissions, create data resources of the corresponding type according to their data types. Currently, we support three types: string, array, and tree.

## Note

The `struct` field in the request body needs to pass in different data structures according to different resource types. Please refer to the following examples for details

## Request example

### Example of creating a string type data resource

This type can be used when your data can be represented by only one string, such as an API, a user ID, etc.

The following is an example of creating a data resource representing the '/resource/create' API:

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "createResource API",
  "description": "This is the createResource API",
  "resourceCode": "createResourceAPI",
  "type": "STRING",
  "struct": "/resource/create",
  "actions": ["access"]
}
```

### Example of creating an array type data resource

This type can be used when your data is a group of data of the same type, such as a group of document links, a group of access card numbers, etc.
The following is an example of creating a data resource representing a set of access card numbers:

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "A set of access card numbers",
  "description": "This is a set of access card numbers",
  "resourceCode": "accessCardNumber",
  "type": "ARRAY",
  "struct": ["accessCardNumber1", "accessCardNumber2", "accessCardNumber3"],
  "actions": ["get", "update"]
}
```

### Example of creating a tree type data resource

This type can be used when your data has a hierarchical relationship, such as organizational structure, folder structure, etc.
The following is an example of creating a data resource representing the company's organizational structure:

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "GenAuth",
  "description": "This is the organizational structure of GenAuth",
  "resourceCode": "authing",
  "type": "TREE",
  "struct": [
    {
      "name": "Product",
      "code": "product",
      "value": "product",
      "children": [
        {
          "name": "Product Manager",
          "code": "productManager",
          "value": "pm"
        },
        {
          "name": "Design",
          "code": "design",
          "value": "ui"
        }
      ]
    },
    {
      "name": "R&D",
      "code": "researchAndDevelopment",
      "value": "rd"
    }
  ],
  "actions": ["get", "update", "delete"]
}
```

## Method name

`ManagementClient.create_data_resource`

## Request parameters

| Name          | Type             | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                            | <div style="width:200px">Sample value</div> |
| ------------- | ---------------- | -------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| actions       | string[]         | Yes                                    | -                                           | Data resource permission operation list Array length limit: 50.                                       | `["read","get"]`                            |
| struct        | <a href="#"></a> | Yes                                    | -                                           | Data resource structure, supports string (STRING), tree structure (TREE) and array structure (ARRAY). |                                             |
| type          | string           | yes                                    | -                                           | Data resource type, currently supports tree structure (TREE), string (STRING), array (ARRAY)          | `TREE`                                      |
| resourceCode  | string           | yes                                    | -                                           | Data resource Code, unique in the permission space                                                    | `dataResourceTestCode`                      |
| resourceName  | string           | yes                                    | -                                           | Data resource name, unique in the permission space                                                    | `example data resource name`                |
| namespaceCode | string           | yes                                    | -                                           | Permission space Code to which the data resource belongs                                              | `examplePermissionNamespace`                |
| description   | string           | no                                     | -                                           | Data resource description                                                                             | `example data resource description`         |

## Request Response

Type: `CreateDataResourceResponseDto`

| name       | type                                                               | description                                                                                                                                                                                                                                                                                                                                     |
| ---------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                             | Business status code, which can be used to determine whether the operation is successful, 200 Indicates success.                                                                                                                                                                                                                                |
| message    | string                                                             | Description                                                                                                                                                                                                                                                                                                                                     |
| apiCode    | number                                                             | Subdivided error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                    |
| data       | <a href="#CreateDataResourceRespDto">CreateDataResourceRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                   |

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
    "actions": "[\"read\",\"get\"]"
  }
}
```

## Data Structure

### <a id="CreateDataResourceRespDto"></a> CreateDataResourceRespDto

| Name         | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                            | <div style="width:200px">Sample value</div> |
| ------------ | ------ | --------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| resourceName | string | Yes                                           | Data resource name, unique in the permission space                                                    | `Sample data resource name`                 |
| resourceCode | string | Yes                                           | Data resource Code, unique in the permission space                                                    | `dataResourceTestCode`                      |
| type         | string | Yes                                           | Data resource type, currently supports tree structure (TREE), string (STRING), array (ARRAY)          | TREE                                        |
| description  | string | No                                            | Data resource description                                                                             | `Sample data resource description`          |
| struct       |        | Yes                                           | Data resource structure, supports string (STRING), tree structure (TREE) and array structure (ARRAY). |                                             |
| actions      | array  | Yes                                           | Data resource permission operation list. Array length limit: 50.                                      | `["read","get"]`                            |
