# Check if the data resource Code or name is available

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Check if the data resource name or Code is valid in the permission space. Use the data resource name or data resource Code and the permission space Code to determine whether it is available in the specified permission space.

### Data resource Code valid example

- Input parameter

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceCode": "test"
}
```

- Parameters

```json
{
  "statusCode": 200,
  "message": "Success",
  "apiCode": 0,
  "data": {
    "isValid": "true"
  }
}
```

### Valid examples of data resource namess

- Input parameter

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "test"
}
```

- Output parameter

```json
{
  "statusCode": 200,
  "message": "Success",
  "apiCode": 0,
  "data": {
    "isValid": "true"
  }
}
```

### Invalid data resource Code example

- Input parameter

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceCode": "test"
}
```

- Output parameter

```json
{
  "statusCode": 200,
  "message": "Success",
  "apiCode": 0,
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "isValid": "false",
    "message": "data resource code already exist"
  }
}
```

## Method name

`ManagementClient.check_data_resource_exists`

## Request parameters

| Name          | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                   | <div style="width:200px">Example value</div> |
| ------------- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------- |
| namespaceCode | string | Yes                                    | -                                           | The permission space Code to which the data resource belongs | `examplePermissionNamespace`                 |
| resourceName  | string | No                                     | -                                           | Data resource name, unique in the permission space           | `Example data resource name`                 |
| resourceCode  | string | No                                     | -                                           | Data resource Code, unique in the permission space           | `dataResourceTestCode`                       |

## Request Response

Type: `CheckParamsDataResourceResponseDto`

| Name       | Type                                                                         | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                                                       | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                                                       | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#CheckParamsDataResourceRespDto">CheckParamsDataResourceRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "isValid": "false",
    "message": "data resource name already exist"
  }
}
```

## Data Structure

### <a id="CheckParamsDataResourceRespDto"></a> CheckParamsDataResourceRespDto

| Name    | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                          | <div style="width:200px">Sample value</div> |
| ------- | ------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| isValid | boolean | yes                                           | Is the data resource name or Code verification valid?                                                                               | `false`                                     |
| message | string  | no                                            | Prompt message if the data resource name or Code verification fails. If the verification succeeds, the message will not be returned | `data resource name already exist`          |
