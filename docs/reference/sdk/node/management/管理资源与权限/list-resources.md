# Get resource list by page

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the resource details list by page according to the filter conditions.

## Method name

`ManagementClient.listResources`

## Request parameters

| Name      | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                           | <div style="width:200px">Sample value</div> |
| --------- | ------ | -------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| namespace | string | No                                     | -                                           | Code of the permission group (permission space). Do not pass to obtain the default permission group. | `default`                                   |
| type      | string | No                                     | -                                           | resource type                                                                                        | `DATA`                                      |
| page      | number | No                                     | 1                                           | current page number, starting from 1                                                                 | `1`                                         |
| limit     | number | No                                     | 10                                          | number per page, maximum cannot exceed 50, default is 10                                             | `10`                                        |

## Sample code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If you are a private deployment customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.listResources({
    namespace: "default",
    type: "DATA",
    page: 1,
    limit: 10,
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `ResourcePaginatedRespDto`

| Name       | Type                                               | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                             | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                             | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                             | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#ResourcePagingDto">ResourcePagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "statusCode": 200,
    "message": "Operation successful",
    "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
    "list": {
      "code": "ecs",
      "description": "Server",
      "name": "Server",
      "type": "API",
      "actions": "[{\"name\":\"ecs:Start\",\"description\":\"Start ECS Server\"},{\"name\":\"ecs:Stop\",\"description\":\"Stop ECS server\"}]",
      "apiIdentifier": "https://my-awesome-api.com/api",
      "namespace": "default"
    }
  }
}
```

## Data structure

### <a id="ResourcePagingDto"></a> ResourcePagingDto

| Name       | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                        | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| statusCode | number | Yes                                    | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                      | `200`                                       |
| message    | string | Yes                                    | Description                                                                                                                                                                                                                                                                                                                                       | `Operation successful`                      |
| apiCode    | number | No                                     | Segmented error code, which can be used to obtain the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |                                             |
| requestId  | string | No                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      | `934108e5-9fbf-4d24-8da1-c330328abd6c`      |
| totalCount | number | yes                                    | total number of records                                                                                                                                                                                                                                                                                                                           |                                             |
| list       | array  | yes                                    | data Nested type: <a href="#ResourceDto">ResourceDto</a>.                                                                                                                                                                                                                                                                                         |                                             |

### <a id="ResourceDto"></a> ResourceDto

| Name           | Type    | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                              | <div style="width:200px">Sample value</div>                                                                   |
| -------------- | ------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| code           | string  | Yes                                    | Resource unique identifier                                                                                              | `ecs`                                                                                                         |
| description    | string  | No                                     | Resource description                                                                                                    | `Server`                                                                                                      |
| name           | string  | No                                     | Resource name                                                                                                           | `Server`                                                                                                      |
| type           | string  | Yes                                    | Resource type, such as data, API, button, menu                                                                          | DATA                                                                                                          |
| actions        | array   | No                                     | Action type defined by the resource Nested type: <a href="#ResourceAction">ResourceAction</a>. Array length limit: 100. | `[{"name":"ecs:Start","description":"Start ECS server"},{"name":"ecs:Stop","description":"Stop ECS server"}]` |
| apiIdentifier  | string  | No                                     | URL identifier of API resource                                                                                          | `https://my-awesome-api.com/api`                                                                              |
| namespace      | string  | No                                     | Code of the permission group (permission space). Do not pass it to get the default permission group.                    | `default`                                                                                                     |
| linkedToTenant | boolean | No                                     | Whether the tenant application is associated with the self-built application resource                                   |                                                                                                               |

### <a id="ResourceAction"></a> ResourceAction

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| name        | string | Yes                                           | Resource operation name                    | `ecs:Start`                                 |
| description | string | Yes                                           | Resource operation description             | `ecs:Start`                                 |
