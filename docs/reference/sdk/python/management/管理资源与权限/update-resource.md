# Modify resources

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Modify resources, you can set the description of the resource, the defined operation type, URL identifier, etc.

## Method name

`ManagementClient.update_resource`

## Request parameters

| Name          | Type                                           | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                           | <div style="width:200px">Sample value</div>                                                                   |
| ------------- | ---------------------------------------------- | -------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| code          | string                                         | yes                                    | -                                           | Resource unique identifier                                                                           | `ecs`                                                                                                         |
| description   | string                                         | no                                     | -                                           | Resource description                                                                                 | `Server`                                                                                                      |
| name          | string                                         | no                                     | -                                           | Resource name                                                                                        | `Server`                                                                                                      |
| actions       | <a href="#ResourceAction">ResourceAction[]</a> | no                                     | -                                           | Resource defined action type Array length limit: 100.                                                | `[{"name":"ecs:Start","description":"Start ECS server"},{"name":"ecs:Stop","description":"Stop ECS server"}]` |
| apiIdentifier | string                                         | No                                     | -                                           | URL identifier of API resource                                                                       | `https://my-awesome-api.com/api`                                                                              |
| namespace     | string                                         | No                                     | -                                           | Code of the permission group (permission space). Do not pass to obtain the default permission group. | `default`                                                                                                     |
| type          | string                                         | No                                     | -                                           | Resource type, such as data, API, button, menu                                                       | `API`                                                                                                         |

## Request Response

Type: `ResourceRespDto`

| Name       | Type                                   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                 | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                 | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#ResourceDto">ResourceDto</a> | Resource details                                                                                                                                                                                                                                                                                                                             |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
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

## Data Structure

### <a id="ResourceAction"></a> ResourceAction

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| name        | string | Yes                                           | Resource action name                       | `ecs:Start`                                 |
| description | string | Yes                                           | Resource action description                | `ecs:Start`                                 |

### <a id="ResourceDto"></a> ResourceDto

| name           | type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                              | <div style="width:200px">Sample value</div>                                                                   |
| -------------- | ------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| code           | string  | yes                                           | Resource unique identifier                                                                                              | `ecs`                                                                                                         |
| description    | string  | no                                            | Resource description                                                                                                    | `Server`                                                                                                      |
| name           | string  | no                                            | Resource name                                                                                                           | `Server`                                                                                                      |
| type           | string  | yes                                           | Resource type, such as data, API, button, menu                                                                          | DATA                                                                                                          |
| actions        | array   | no                                            | Action type defined by the resource Nested type: <a href="#ResourceAction">ResourceAction</a>. Array length limit: 100. | `[{"name":"ecs:Start","description":"Start ECS server"},{"name":"ecs:Stop","description":"Stop ECS server"}]` |
| apiIdentifier  | string  | No                                            | URL identifier of API resource                                                                                          | `https://my-awesome-api.com/api`                                                                              |
| namespace      | string  | No                                            | Code of the permission group (permission space). If not passed, the default permission group will be obtained.          | `default`                                                                                                     |
| linkedToTenant | boolean | no                                            | Whether the tenant application is associated with the self-built application resource                                   |                                                                                                               |

### <a id="ResourceAction"></a> ResourceAction

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| name        | string | yes                                           | Resource operation name                    | `ecs:Start`                                 |
| description | string | yes                                           | Resource operation description             | `ecs:Start`                                 |
