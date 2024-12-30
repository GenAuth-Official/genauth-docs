# Modify permission space

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to V3 API.

Modify the permission space, you can modify the permission space name, permission space description information and the new unique identifier (Code) of the permission space.

## Method name

`ManagementClient.updatePermissionNamespace`

## Request parameters

| Name        | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>  | <div style="width:200px">Example value</div> |
| ----------- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------- | -------------------------------------------- |
| code        | string | Yes                                    | -                                           | Permission group old unique identifier Code | `examplePermissionNamespace`                 |
| name        | string | No                                     | -                                           | Permission space name                       | `Example Permission Space`                   |
| newCode     | string | No                                     | -                                           | Permission group new unique identifier Code | `exampleNewPermissionNamespace`              |
| description | string | No                                     | -                                           | Permission space description                | `Example Permission Space Description`       |

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
  const result = await managementClient.updatePermissionNamespace({
    code: "examplePermissionNamespace",
    newCode: "exampleNewPermissionNamespace",
    name: "New name of the example permission space",
    description: "New description of the example permission space",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `UpdatePermissionNamespaceResponseDto`

| Name       | Type                                                                             | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                           | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                                           | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                                           | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#UpdatePermissionNamespaceRespDto">UpdatePermissionNamespaceRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Example result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "code": "examplePermissionNamespace",
    "name": "Example Permission Space",
    "description": "Example Permission Space Description"
  }
}
```

## Data structure

### <a id="UpdatePermissionNamespaceRespDto"></a> UpdatePermissionNamespaceRespDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| code        | string | yes                                          | Permission space unique identifier         | `examplePermissionNamespace`                 |
| name        | string | yes                                          | Permission space name                      | `Example Permission Space`                   |
| description | string | no                                           | Permission space description               | `Example Permission Space Description`       |
