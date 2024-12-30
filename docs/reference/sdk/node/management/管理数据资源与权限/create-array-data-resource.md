# Create array data resource

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to V3 API.

When you only need to create array type data resources, you can use this API. We have fixed the data resource type, and you do not need to pass in the `type` character field. Note: The `struct` field can only pass in array type data.

## Method name

`ManagementClient.createDataResourceByArray`

## Request parameters

| Name          | Type     | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                      | <div style="width:200px">Sample value</div>     |
| ------------- | -------- | -------------------------------------- | ------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------- |
| actions       | string[] | Yes                                    | -                                           | Data resource permission operation list Array length limit: 50. | `["read","get"]`                                |
| struct        | string[] | Yes                                    | -                                           | Array data resource node Array length limit: 50.                | `["exampleArrayStruct1","exampleArrayStruct2"]` |
| resourceCode  | string   | yes                                    | -                                           | Data resource Code, unique in the permission space              | `dataResourceTestCode`                          |
| resourceName  | string   | yes                                    | -                                           | Data resource name, unique in the permission space              | `Sample data resource name`                     |
| namespaceCode | string   | yes                                    | -                                           | Permission space where the data policy is located               | `code1`                                         |
| description   | string   | no                                     | -                                           | Data resource description                                       | `Sample data resource description`              |

## Sample code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If it is a private deployment customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.createDataResourceByArray({
    namespaceCode: "examplePermissionNamespace",
    resourceCode: "arrayResourceCode",
    resourceName: "Example array data resource",
    struct: ["exampleArrayStruct1", "exampleArrayStruct2"],
    description: "Example array data resource description",
    actions: ["get", "read"],
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `CreateArrayDataResourceResponseDto`

| Name       | Type                                                                         | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                                       | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                                       | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#CreateArrayDataResourceRespDto">CreateArrayDataResourceRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "resourceName": "Sample data resource name",
    "resourceCode": "dataResourceTestCode",
    "type": "TREE",
    "description": "Sample data resource description",
    "struct": "[\"exampleArrayStruct1\",\"exampleArrayStruct2\"]",
    "actions": "[\"read\",\"get\"]"
  }
}
```

## Data structure

### <a id="CreateArrayDataResourceRespDto"></a> CreateArrayDataResourceRespDto

| Name         | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                   | <div style="width:200px">Sample value</div>     |
| ------------ | ------ | --------------------------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| resourceName | string | Yes                                           | Data resource name, unique in the permission space                                           | `Sample data resource name`                     |
| resourceCode | string | Yes                                           | Data resource Code, unique in the permission space                                           | `dataResourceTestCode`                          |
| type         | string | Yes                                           | Data resource type, currently supports tree structure (TREE), string (STRING), array (ARRAY) | TREE                                            |
| description  | string | No                                            | Data resource description                                                                    | `Sample data resource description`              |
| struct       | array  | Yes                                           | Array data resource node Array length limit: 50.                                             | `["exampleArrayStruct1","exampleArrayStruct2"]` |
| actions      | array  | Yes                                           | Data resource permission operation list Array length limit: 50.                              | `["read","get"]`                                |
