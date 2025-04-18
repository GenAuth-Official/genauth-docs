# Get data resource details

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to V3 API.

Get data resources, query the corresponding data resource information through the data resource ID, including data resource name, data resource Code, data resource type (TREE, STRING, ARRAY), data resource permission space ID, data resource permission space Code, and data resource operation list and other basic information.

## Method name

`ManagementClient.get_data_resource`

## Request parameters

| Name          | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                   | <div style="width:200px">Sample value</div> |
| ------------- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| namespaceCode | string | Yes                                    | -                                           | The permission space Code to which the data resource belongs | `examplePermissionNamespace`                |
| resourceCode  | string | Yes                                    | -                                           | The data resource Code, unique in the permission space       | `dataResourceTestCode`                      |

## Request Response

Type: `GetDataResourceResponseDto`

| Name       | Type                                                         | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                       | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                       | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#GetDataResourceRespDto">GetDataResourceRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

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
    "namespaceCode": "code1",
    "actions": "[\"read\",\"get\"]"
  }
}
```

## Data Structure

### <a id="GetDataResourceRespDto"></a> GetDataResourceRespDto

| Name          | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                            | <div style="width:200px">Sample value</div> |
| ------------- | ------ | --------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| resourceName  | string | Yes                                           | Data resource name, unique in the permission space                                                    | `Sample data resource name`                 |
| resourceCode  | string | Yes                                           | Data resource Code, unique in the permission space                                                    | `dataResourceTestCode`                      |
| type          | string | Yes                                           | Data resource type, currently supports tree structure (TREE), string (STRING), array (ARRAY)          | TREE                                        |
| description   | string | No                                            | Data resource description                                                                             | `Sample data resource description`          |
| struct        |        | Yes                                           | Data resource structure, supports string (STRING), tree structure (TREE) and array structure (ARRAY). |                                             |
| namespaceCode | string | Yes                                           | The permission space where the data policy is located Code                                            | `code1`                                     |
| actions       | array  | Yes                                           | Data resource permission operation list Array length limit: 50.                                       | `["read","get"]`                            |
