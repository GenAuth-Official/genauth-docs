# Create permission spaces in batches

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Create permission spaces in batches, and you can set the permission space name, code, and description information separately.

## Method name

`ManagementClient.createPermissionNamespacesBatch`

## Request parameters

| Name | Type                                                                                           | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>    | <div style="width:200px">Sample value</div> |
| ---- | ---------------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------- | --------------------------------------------- | ------------------------------------------- |
| list | <a href="#CreatePermissionNamespacesBatchItemDto">CreatePermissionNamespacesBatchItemDto[]</a> | Yes                                    | -                                           | Permission space list Array length limit: 50. |                                             |

## Sample code

```ts
import { ManagementClient, Models } from "@genauth/nodejs";

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
  const result = await managementClient.createPermissionNamespacesBatch({
    list: [
      {
        code: "examplePermissionNamespace1",
        name: "Example Permission Space 1",
        description: "Example Permission Space 1 Description",
      },
      {
        code: "examplePermissionNamespace2",
        name: "Example Permission Space 2",
        description: "Example Permission Space 2 Description",
      },
      {
        code: "examplePermissionNamespace3",
        name: "Example Permission Space 3",
        description: "Example Permission Space 3 Description",
      },
    ],
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request Response

Type: `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                   | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                   | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                                                                                                                                                                                                                                                          |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "success": true
  }
}
```

## Data structure

### <a id="CreatePermissionNamespacesBatchItemDto"></a> CreatePermissionNamespacesBatchItemDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| code        | string | yes                                          | Permission space Code                      | `examplePermissionNamespace`                |
| name        | string | yes                                          | Permission space name                      | `Sample permission space`                   |
| description | string | No                                           | Permission space description               | `Sample permission space description`       |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| success | boolean | Yes                                          | Whether the operation was successful       | `true`                                      |
