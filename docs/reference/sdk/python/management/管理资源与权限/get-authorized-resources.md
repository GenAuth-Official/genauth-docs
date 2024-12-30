# Get a list of resources authorized by a subject

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get a list of resources authorized by a subject based on the filtering conditions.

## Method name

`ManagementClient.get_authorized_resources`

## Request parameters

| Name             | Type     | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                         | <div style="width:200px">Sample value</div> |
| ---------------- | -------- | --------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| targetType       | string   | yes                                           | -                                           | Target object type:<br>- `USER`: User<br>- `ROLE`: Role<br>- `GROUP`: Group<br>- `DEPARTMENT`: Department<br>                                                                                                                                                                                                                                                                      | `USER`                                      |
| targetIdentifier | string   | yes                                           | -                                           | Target object unique identifier:<br>- If it is a user, it is the user's ID, such as `6343b98b7cfxxx9366e9b7c`<br>- If it is a role, it is the role code, such as `admin`<br>- If it is a group, it is the group code, such as `developer`<br>- If it is a department, it is the department ID, such as `6343bafc019xxxx889206c4c`<br>                                              | `userId1`                                   |
| namespace        | string   | No                                            | -                                           | The code of the permission group (permission space). Do not pass to obtain the default permission group.                                                                                                                                                                                                                                                                           | `default`                                   |
| resourceType     | string   | No                                            | -                                           | Limit resource types, such as data, API, button, menu                                                                                                                                                                                                                                                                                                                              | `DATA`                                      |
| resourceList     | string[] | No                                            | -                                           | Limit the query resource list. If specified, only the specified resource list will be returned. <br><br>The resourceList parameter supports prefix matching, for example:<br>- Authorized a resource as `books:123`, which can be matched by `books:*`;<br>- Authorized a resource as `books:fictions_123`, which can be matched by `books:fictions_`;<br> Array length limit: 50. |                                             |
| withDenied       | boolean  | No                                            | -                                           | Whether to obtain denied resources                                                                                                                                                                                                                                                                                                                                                 |                                             |

## Request Response

Type: `AuthorizedResourcePaginatedRespDto`

| Name       | Type                                                                   | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                                                 | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                                                 | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#AuthorizedResourcePagingDto">AuthorizedResourcePagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "resourceCode": "ecs:1",
      "description": "Server",
      "condition": {
        "param": "AppId",
        "operator": "StringEquals",
        "value": "1"
      },
      "resourceType": "API",
      "apiIdentifier": "/api/v1/example",
      "actions": "[\"ecs:Start\",\"ecs:Stop\"]",
      "effect": "ALLOW"
    }
  }
}
```

## Data Structure

### <a id="AuthorizedResourcePagingDto"></a> AuthorizedResourcePagingDto

| Name       | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                             | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                    | Total number of records                                                                |                                             |
| list       | array  | Yes                                    | Response data Nested type: <a href="#AuthorizedResourceDto">AuthorizedResourceDto</a>. |                                             |

### <a id="AuthorizedResourceDto"></a> AuthorizedResourceDto

| Name          | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                    | <div style="width:200px">Sample value</div> |
| ------------- | ------ | -------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------- |
| resourceCode  | string | Yes                                    | Resource descriptor                                                           | `ecs:1`                                     |
| description   | string | No                                     | Resource description information                                              | `Server`                                    |
| condition     | array  | No                                     | Policy Condition Nested type: <a href="#PolicyCondition">PolicyCondition</a>. |                                             |
| resourceType  | string | yes                                    | Resource type                                                                 | DATA                                        |
| apiIdentifier | string | yes                                    | API URL                                                                       | `/api/v1/example`                           |
| actions       | array  | yes                                    | List of authorized actions                                                    | `["ecs:Start","ecs:Stop"]`                  |
| effect        | string | yes                                    | Allow or deny                                                                 | ALLOW                                       |

### <a id="PolicyCondition"></a> PolicyCondition

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| -------- | ------ | --------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| param    | string | yes                                           | Condition Param                            | UserPoolId                                   |
| operator | string | yes                                           | Condition Operator                         | Bool                                         |
| value    | string | yes                                           | Condition Value                            | `1`                                          |
