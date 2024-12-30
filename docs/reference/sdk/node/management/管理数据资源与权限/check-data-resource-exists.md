# Check if the data resource Code or name is available

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to V3 API.

Check if the data resource name or Code is valid in the permission space. Use the data resource name or data resource Code and the permission space Code to determine whether it is available in the specified permission space.

### Data resource code valid example

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
  "message": "Operation successful",
  "apiCode": 0,
  "data": {
    "isValid": "true"
  }
}
```

### Data resource name valid example

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
  "message": "Operation successful",
  "apiCode": 0,
  "data": {
    "isValid": "true"
  }
}
```

### Data resource code Invalid example

- Input parameters

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceCode": "test"
}
```

- Output parameters

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 0,
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "isValid": "false",
    "message": "data resource code already exist"
  }
}
```

## Method name

`ManagementClient.checkDataResourceExists`

## Request parameters

| Name          | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Example value</div> |
| ------------- | ------ | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | -------------------------------------------- |
| namespaceCode | string | yes                                    | -                                           | Permission space Code to which the data resource belongs | `examplePermissionNamespace`                 |
| resourceName  | string | no                                     | -                                           | Data resource name, unique in the permission space       | `Example data resource name`                 |
| resourceCode  | string | no                                     | -                                           | Data resource Code, unique in the permission space       | `dataResourceTestCode`                       |

## Example code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If you are a privately deployed customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.checkDataResourceExists({
    namespaceCode: "examplePermissionNamespace",
    resourceName: "Sample tree data resource name",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `CheckParamsDataResourceResponseDto`

| Name       | Type                                                                         | Description                                                                                                                                                                                                                                                                                                                                     |
| ---------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                       | Business status code, which can be used to determine whether the operation is successful. 200 indicates success.                                                                                                                                                                                                                                |
| message    | string                                                                       | description                                                                                                                                                                                                                                                                                                                                     |
| apiCode    | number                                                                       | Subdivided error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                    |
| data       | <a href="#CheckParamsDataResourceRespDto">CheckParamsDataResourceRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                   |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "isValid": "false",
    "message": "data resource name already exist"
  }
}
```

## Data structure

### <a id="CheckParamsDataResourceRespDto"></a> CheckParamsDataResourceRespDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                           | <div style="width:200px">Sample value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| isValid | boolean | yes                                          | Is the data resource name or Code verification valid?                                                                                | `false`                                     |
| message | string  | no                                           | Prompt message if the data resource name or Code verification fails. If the verification succeeds, the message will not be returned. | `data resource name already exist`          |
