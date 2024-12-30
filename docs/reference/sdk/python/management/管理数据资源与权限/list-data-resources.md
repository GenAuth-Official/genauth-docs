# Get data resource list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get the data resource list, you can specify the filter by data resource name, data resource Code and data resource permission space Code list.

## Method name

`ManagementClient.list_data_resources`

## Request parameters

| Name           | Type     | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                   | <div style="width:200px">Sample value</div>                    |
| -------------- | -------- | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| page           | number   | No                                     | 1                                           | Current page number, starting from 1                                                         | `1`                                                            |
| limit          | number   | No                                     | 10                                          | Number per page, maximum cannot exceed 50, default is 10                                     | `10`                                                           |
| query          | string   | No                                     | -                                           | Keyword search, can be data resource name or data resource Code                              | `Resource1`                                                    |
| namespaceCodes | string[] | No                                     | -                                           | The permission space code list to which the permission data belongs. Array length limit: 50. | `["examplePermissionNamespace1","examplePermissionNamespac2"]` |

## Request Response

Type: `ListDataResourcesPaginatedRespDto`

| Name       | Type                                                                       | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                                                     | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                                                     | Segmented error code, which can be used to get the specific error type (successful request is not returned). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#DataResourcesPaginatedRespDto">DataResourcesPaginatedRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "resourceName": "Sample data resource name",
      "resourceCode": "dataResourceTestCode",
      "type": "TREE",
      "description": "Sample data resource description",
      "namespaceCode": "examplePermissionNamespace",
      "namespaceName": "Sample permission space",
      "authorizationNum": 1,
      "updatedAt": "2022-07-03T03:20:30.000Z"
    }
  }
}
```

## Data Structure

### <a id="DataResourcesPaginatedRespDto"></a> DataResourcesPaginatedRespDto

| Name       | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                   | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                    | Total number of records                                                                      |                                             |
| list       | array  | Yes                                    | Response data Nested type: <a href="#ListDataResourcesRespDto">ListDataResourcesRespDto</a>. |                                             |

### <a id="ListDataResourcesRespDto"></a> ListDataResourcesRespDto

| Name             | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                   | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | --------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------- |
| resourceName     | string | Yes                                           | Data resource name, unique in the permission space                                           | `Sample data resource name`                 |
| resourceCode     | string | Yes                                           | Data resource Code, unique in the permission space                                           | `dataResourceTestCode`                      |
| type             | string | Yes                                           | Data resource type, currently supports tree structure (TREE), string (STRING), array (ARRAY) | TREE                                        |
| description      | string | No                                            | Data resource description                                                                    | `Sample data resource description`          |
| namespaceCode    | string | Yes                                           | The permission space to which the data resource belongs Code                                 | `examplePermissionNamespace`                |
| namespaceName    | string | yes                                           | The name of the permission space to which the data resource belongs                          | `example permission space`                  |
| authorizationNum | number | yes                                           | The number of authorizations associated with the data resource                               | `1`                                         |
| updatedAt        | string | yes                                           | The time the data resource was updated                                                       | `2022-07-03T03:20:30.000Z`                  |
