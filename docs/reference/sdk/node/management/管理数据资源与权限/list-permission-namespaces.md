# Get permission space list by page

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get permission space list by page

## Method name

`ManagementClient.listPermissionNamespaces`

## Request parameters

| Name  | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Example value</div> |
| ----- | ------ | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | -------------------------------------------- |
| page  | number | No                                     | 1                                           | Current page number, starting from 1                     | `1`                                          |
| limit | number | No                                     | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                         |
| query | string | No                                     | -                                           | Permission space name                                    | `examplePermissionNamespace`                 |

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
  const result = await managementClient.listPermissionNamespaces({
    page: 1,
    limit: 10,
    query: "Sample permission space name",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `PermissionNamespaceListPaginatedRespDto`

| Name       | Type                                                                             | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                           | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                                           | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                                           | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#PermissionNamespaceListPagingDto">PermissionNamespaceListPagingDto</a> | data                                                                                                                                                                                                                                                                                                                                         |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "name": "Example permission space name",
      "code": "examplePermissionNamespace",
      "description": "dd8d7stf44",
      "status": 1
    }
  }
}
```

## Data structure

### <a id="PermissionNamespaceListPagingDto"></a> PermissionNamespaceListPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                 | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | yes                                          | total number of records                                                                                    |                                             |
| list       | array  | yes                                          | response data Nested type: <a href="#PermissionNamespacesListRespDto">PermissionNamespacesListRespDto</a>. |                                             |

### <a id="PermissionNamespacesListRespDto"></a> PermissionNamespacesListRespDto

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>      | <div style="width:200px">Example value</div> |
| ----------- | ------ | --------------------------------------------- | ----------------------------------------------- | -------------------------------------------- |
| name        | string | Yes                                           | Permission space name                           | `Example Permission space name`              |
| code        | string | Yes                                           | Permission space Code                           | `examplePermissionNamespace`                 |
| description | string | No                                            | Permission space description                    | `dd8d7stf44`                                 |
| status      | number | No                                            | Permission space status: 0 -> closed, 1 -> open | `1`                                          |
