# Get data object details

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Use the function id to get the detailed information of the data object

## Method name

`ManagementClient.get_model`

## Request parameters

| Name | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>        | <div style="width:200px">Sample value</div> |
| ---- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| id   | string | Yes                                          | -                                           | Function id can be obtained from the console page |                                             |

## Request Response

Type: `FunctionModelResDto`

| Name       | Type                                             | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                           | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                           | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                           | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#FunctionModelDto">FunctionModelDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "dataType": "list"
  }
}
```

## Data Structure

### <a id="FunctionModelDto"></a> FunctionModelDto

| Name        | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                   | <div style="width:200px">Sample value</div> |
| ----------- | ------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| id          | string  | Yes                                           | Function id                                                                                                                                                                                                                                  |                                             |
| userPoolId  | string  | Yes                                           | User pool id                                                                                                                                                                                                                                 |                                             |
| name        | string  | Yes                                           | Function name                                                                                                                                                                                                                                |                                             |
| description | string  | Yes                                           | Function description                                                                                                                                                                                                                         |                                             |
| dataType    | string  | Yes                                           | Data type:<br> - list: list type data. <br> - tree: tree structure data. <br>                                                                                                                                                                | list                                        |
| enable      | boolean | yes                                           | Whether the function is enabled:<br> - true: Enable<br> - false: Disable<br>                                                                                                                                                                 |                                             |
| parentKey   | string  | yes                                           | Parent menu                                                                                                                                                                                                                                  |                                             |
| createdAt   | string  | yes                                           | Creation time                                                                                                                                                                                                                                |                                             |
| updatedAt   | string  | yes                                           | Update time                                                                                                                                                                                                                                  |                                             |
| type        | string  | yes                                           | Function type:<br> - user: User<br> - post: Position<br> - group: User group<br> - ueba: ueba<br> - department: Tree structure data<br> - organization: Organization<br> - device: Device<br> - device_rely: Device<br> - custom: Custom<br> | ueba                                        |
| fieldOrder  | string  | yes                                           | Field sorting                                                                                                                                                                                                                                |                                             |
| config      | object  | yes                                           | Details page configuration                                                                                                                                                                                                                   |                                             |
