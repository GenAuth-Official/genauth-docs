# Create resources in batches

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Create resources in batches, you can set the description of the resource, the defined operation type, URL identifier, etc.

## Method name

`ManagementClient.createResourcesBatch`

## Request parameters

| Name      | Type                                                                   | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                           | <div style="width:200px">Sample value</div> |
| --------- | ---------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| list      | <a href="#CreateResourceBatchItemDto">CreateResourceBatchItemDto[]</a> | Yes                                           | -                                           | Resource list Array length limit: 50.                                                                |                                             |
| namespace | string                                                                 | No                                            | -                                           | Code of the permission group (permission space). Do not pass to obtain the default permission group. | `default`                                   |

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
  const result = await managementClient.createResourcesBatch({
    namespace: "default",
    list: [
      {
        code: "ecs",
        description: "Server",
        name: "Server",
        type: Models.ResourceDto.type.API,
        actions: [
          {
            name: "ecs:Start",
            description: "ecs:Start",
          },
        ],
        apiIdentifier: "https://my-awesome-api.com/api",
      },
    ],
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
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

### <a id="CreateResourceBatchItemDto"></a> CreateResourceBatchItemDto

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                               | <div style="width:200px">Sample value</div>                                                                   |
| ------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| code          | string | yes                                          | Resource unique identifier                                                                                               | `ecs`                                                                                                         |
| description   | string | no                                           | Resource description                                                                                                     | `Server`                                                                                                      |
| name          | string | no                                           | Resource name                                                                                                            | `Server`                                                                                                      |
| type          | string | yes                                          | Resource type, such as data, API, button, menu                                                                           | DATA                                                                                                          |
| actions       | array  | no                                           | Action types defined by the resource Nested type: <a href="#ResourceAction">ResourceAction</a>. Array length limit: 100. | `[{"name":"ecs:Start","description":"Start ECS server"},{"name":"ecs:Stop","description":"Stop ECS server"}]` |
| apiIdentifier | string | No                                           | URL identifier of API resource                                                                                           | `https://my-awesome-api.com/api`                                                                              |

### <a id="ResourceAction"></a> ResourceAction

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| name        | string | Yes                                           | Resource action name                       | `ecs:Start`                                 |
| description | string | Yes                                           | Resource action description                | `ecs:Start`                                 |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| success | boolean | yes                                           | Whether the operation was successful       | `true`                                      |
