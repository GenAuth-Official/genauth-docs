# Get a list of general resources by page

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

According to the filtering conditions, get a list of general resource details by page.

## Method Name

`ManagementClient.listCommonResource`

## Request Parameters

| Name              | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                         | <div style="width:200px">Example Value</div> |
| ----------------- | ------ | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- |
| page              | number | No                                           | 1                                           | Current page number, starting from 1                                               | `1`                                          |
| limit             | number | No                                           | 10                                          | The maximum number of pages per page cannot exceed 50, and the default value is 10 | `10`                                         |
| keyword           | string | No                                           | -                                           | Query condition                                                                    | `resourceName`                               |
| namespaceCodeList | string | No                                           | -                                           | Permission space list                                                              | `["code1","code2"]`                          |

## Request Response

Type： `CommonResourcePaginatedRespDto`

| Name       | Type                                                           | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                         | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                         | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#CommonResourcePagingDto">CommonResourcePagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

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
      "actions": "[{\"name\":\"ecs:Start\",\"description\":\"Start ECS Server\"},{\"name\":\"ecs:Stop\",\"description\":\"Stop ECS Server\"}]",
      "apiIdentifier": "https://my-awesome-api.com/api",
      "namespace": "default",
      "id": "62b40xxxxxxxxxxxd16f57c7",
      "namespaceId": "1",
      "namespaceName": "Demo",
      "userPoolId": "62b40xxxxxxxxxxxd16f57c7",
      "createdAt": "2022-07-03T02:20:30.000Z",
      "updatedAt": "2022-07-03T02:20:30.000Z"
    }
  }
}
```

## Data Structure

### <a id="CommonResourcePagingDto"></a> CommonResourcePagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                        | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| statusCode | number | Yes                                          | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           | `200`                                        |
| message    | string | Yes                                          | Description                                                                                                                                                                                                                                                                                                                                       | `Operation successful`                       |
| apiCode    | number | No                                           | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |                                              |
| requestId  | string | No                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      | `934108e5-9fbf-4d24-8da1-c330328abd6c`       |
| totalCount | number | Yes                                          | Total number of records                                                                                                                                                                                                                                                                                                                           |                                              |
| list       | array  | Yes                                          | Data Nested Type: <a href="#CommonResourceDto">CommonResourceDto</a>.                                                                                                                                                                                                                                                                             |                                              |

### <a id="CommonResourceDto"></a> CommonResourceDto

| Name           | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                 | <div style="width:200px">Example Value</div>                                                                  |
| -------------- | ------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| code           | string  | Yes                                          | Resource unique identifier                                                                                                 | `ecs`                                                                                                         |
| description    | string  | No                                           | Resource description                                                                                                       | `Server`                                                                                                      |
| name           | string  | No                                           | Resource Name                                                                                                              | `Server`                                                                                                      |
| type           | string  | Yes                                          | Resource Type, such as data, API, button, menu                                                                             | DATA                                                                                                          |
| actions        | array   | No                                           | Operation type defined by the resource Nested Type: <a href="#ResourceAction">ResourceAction</a>. Array length limit: 100. | `[{"name":"ecs:Start","description":"Start ECS Server"},{"name":"ecs:Stop","description":"Stop ECS Server"}]` |
| apiIdentifier  | string  | No                                           | URL identifier of the API resource                                                                                         | `https://my-awesome-api.com/api`                                                                              |
| namespace      | string  | No                                           | Code of the permission group (permission space). Do not pass to obtain the default permission group.                       | `default`                                                                                                     |
| linkedToTenant | boolean | No                                           | Tenant application Yes No Associated self-built application resources                                                      |                                                                                                               |
| id             | string  | Yes                                          | Resource id                                                                                                                | `62b40xxxxxxxxxxxd16f57c7`                                                                                    |
| namespaceId    | number  | Yes                                          | Permission application id                                                                                                  | `1`                                                                                                           |
| namespaceName  | string  | Yes                                          | Permission application Name                                                                                                | `Permission application one`                                                                                  |
| userPoolId     | string  | Yes                                          | UserPool ID                                                                                                                | `62b40xxxxxxxxxxxd16f57c7`                                                                                    |
| createdAt      | string  | Yes                                          | Creation time                                                                                                              | `2022-07-03T02:20:30.000Z`                                                                                    |
| updatedAt      | string  | Yes                                          | Update time                                                                                                                | `2022-07-03T02:20:30.000Z`                                                                                    |

### <a id="ResourceAction"></a> ResourceAction

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| name        | string | Yes                                          | Resource Action Name                       | `ecs:Start`                                  |
| description | string | Yes                                          | Resource Action Description                | `ecs:Start`                                  |
