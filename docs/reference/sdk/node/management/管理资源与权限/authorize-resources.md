# Authorized resources

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Authorize one or more resources to users, roles, groups, organizations and other entities, and specify different operation permissions for each.

## Method name

`ManagementClient.authorizeResources`

## Request parameters

| Name      | Type                                                         | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                           | <div style="width:200px">Sample value</div> |
| --------- | ------------------------------------------------------------ | --------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| list      | <a href="#AuthorizeResourceItem">AuthorizeResourceItem[]</a> | Yes                                           | -                                           | Authorization resource list Array length limit: 10.                                                  |                                             |
| namespace | string                                                       | No                                            | -                                           | Code of the permission group (permission space). Do not pass to obtain the default permission group. | `default`                                   |

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
  const result = await managementClient.authorizeResources({
    namespace: "default",
    list: [
      {
        targetType: Models.AuthorizeResourceItem.targetType.USER,
        targetIdentifiers: ["userId1", "userId2"],
        resources: [
          {
            code: "ecs",
            actions: ["ecs:Stop", "ecs:Start"],
            resourceType: Models.ResourceItemDto.resourceType.API,
          },
        ],
      },
    ],
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                   | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                                                                                                                                                                                                                                                            |

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

### <a id="AuthorizeResourceItem"></a> AuthorizeResourceItem

| Name              | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                            | <div style="width:200px">Example value</div> |
| ----------------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| targetType        | string | yes                                          | Target object type:<br>- `USER`: user<br>- `ROLE`: role<br>- `GROUP`: group<br>- `DEPARTMENT`: department<br>                                                                                                                                                                                                                                                         | USER                                         |
| targetIdentifiers | array  | yes                                          | Unique identifier of the target object:<br>- If it is a user, it is the user's ID, such as `6343b98b7cfxxx9366e9b7c`<br>- If it is a role, it is the role code, such as `admin`<br>- If it is a group, it is the group code, such as `developer`<br>- If it is a department, it is the department ID, such as `6343bafc019xxxx889206c4c`<br> Array length limit: 100. | `["userId1","userId2"]`                      |
| resources         | array  | Yes                                          | List of authorized resources Nested type: <a href="#ResourceItemDto">ResourceItemDto</a>.                                                                                                                                                                                                                                                                             |                                              |

### <a id="ResourceItemDto"></a> ResourceItemDto

| Name         | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                   | <div style="width:200px">Sample value</div> |
| ------------ | ------ | --------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| code         | string | Yes                                           | Resource unique identifier                                   | `ecs`                                       |
| actions      | array  | Yes                                           | Action types defined by the resource Array length limit: 50. | `["ecs:Stop","ecs:Start"]`                  |
| resourceType | string | yes                                           | Resource type, such as data, API, button, menu               | DATA                                        |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| success | boolean | yes                                          | Whether the operation was successful       | `true`                                      |
