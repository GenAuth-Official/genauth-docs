# Create a string data resource

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to the V3 API.

When you only need to create a string type data resource, you can use this API. We have fixed the data resource type, and you do not need to pass in the `type` character field. Note: The `struct` field can only pass in string type data.

## Method name

`ManagementClient.create_data_resource_by_string`

## Request parameters

| Name          | Type     | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                      | <div style="width:200px">Sample value</div> |
| ------------- | -------- | -------------------------------------- | ------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------- |
| actions       | string[] | Yes                                    | -                                           | Data resource permission operation list Array length limit: 50. | `["read","get"]`                            |
| struct        | string   | yes                                    | -                                           | String data resource node                                       | `exampleStringStruct`                       |
| resourceCode  | string   | yes                                    | -                                           | Data resource Code, unique in the permission space              | `dataResourceTestCode`                      |
| resourceName  | string   | yes                                    | -                                           | Data resource name, unique in the permission space              | `Example data resource name`                |
| namespaceCode | string   | yes                                    | -                                           | Permission space where the data policy is located               | `code1`                                     |
| description   | string   | no                                     | -                                           | Data resource description                                       | `Example data resource description`         |

## Request Response

Type: `CreateStringDataResourceResponseDto`

| Name       | Type                                                                           | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                         | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                                         | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                                         | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#CreateStringDataResourceRespDto">CreateStringDataResourceRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

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
    "struct": "exampleStringStruct",
    "actions": "[\"read\",\"get\"]"
  }
}
```

## Data Structure

### <a id="CreateStringDataResourceRespDto"></a> CreateStringDataResourceRespDto

| Name         | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                   | <div style="width:200px">Sample value</div> |
| ------------ | ------ | --------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------- |
| resourceName | string | yes                                           | Data resource name, unique in the permission space                                           | `Example data resource name`                |
| resourceCode | string | yes                                           | Data resource Code, unique in the permission space                                           | `dataResourceTestCode`                      |
| type         | string | yes                                           | Data resource type, currently supports tree structure (TREE), string (STRING), array (ARRAY) | TREE                                        |
| description  | string | no                                            | Data resource description                                                                    | `Example data resource description`         |
| struct       | string | yes                                           | String data resource node                                                                    | `exampleStringStruct`                       |
| actions      | array  | yes                                           | Data resource permission operation list Array length limit: 50.                              | `["read","get"]`                            |
