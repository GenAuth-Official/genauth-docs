# Get resource details in batches

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get resource details in batches according to the filtering conditions.

## Method name

`ManagementClient.getResourcesBatch`

## Request parameters

| Name      | Type     | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                           | <div style="width:200px">Sample value</div> |
| --------- | -------- | -------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| codeList  | string[] | Yes                                    | -                                           | Resource code list, batches can be separated by commas. Array length limit: 50.                      | `["code1","code2"]`                         |
| namespace | string   | No                                     | -                                           | Code of the permission group (permission space). Do not pass to obtain the default permission group. | `default`                                   |

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
  const result = await managementClient.getResourcesBatch({
    codeList: ["code1", "code2"],
    namespace: "default",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `ResourceListRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | array  | Resource details list                                                                                                                                                                                                                                                                                                                        |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "code": "ecs",
    "description": "Server",
    "name": "Server",
    "type": "API",
    "actions": "[{\"name\":\"ecs:Start\",\"description\":\"Start ECS server\"},{\"name\":\"ecs:Stop\",\"description\":\"Stop ECS server\"}]",
    "apiIdentifier": "https://my-awesome-api.com/api",
    "namespace": "default"
  }
}
```

## Data structure

### <a id="ResourceDto"></a> ResourceDto

| Name           | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                              | <div style="width:200px">Sample value</div>                                                                   |
| -------------- | ------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| code           | string  | Yes                                           | Resource unique identifier                                                                                              | `ecs`                                                                                                         |
| description    | stringg | No                                            | Resource description                                                                                                    | `Server`                                                                                                      |
| name           | string  | No                                            | Resource name                                                                                                           | `Server`                                                                                                      |
| type           | string  | Yes                                           | Resource type, such as data, API, button, menu                                                                          | DATA                                                                                                          |
| actions        | array   | No                                            | Action type defined by the resource Nested type: <a href="#ResourceAction">ResourceAction</a>. Array length limit: 100. | `[{"name":"ecs:Start","description":"Start ECS server"},{"name":"ecs:Stop","description":"Stop ECS server"}]` |
| apiIdentifier  | string  | No                                            | URL identifier of the API resource                                                                                      | `https://my-awesome-api.com/api`                                                                              |
| namespace      | string  | No                                            | Code of the permission group (permission space). Do not pass to obtain the default permission group.                    | `default`                                                                                                     |
| linkedToTenant | boolean | no                                            | Whether the tenant application is associated with the self-built application resource                                   |                                                                                                               |

### <a id="ResourceAction"></a> ResourceAction

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| name        | string | yes                                           | Resource operation name                    | `ecs:Start`                                 |
| description | string | yes                                           | Resource operation description             | `ecs:Start`                                 |
