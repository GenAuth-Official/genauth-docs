# Create roles in batches

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Create roles in batches, you can choose permission grouping, role description, etc.

## Method name

`ManagementClient.createRolesBatch`

## Request parameters

| Name | Type                                       | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div>                                           |
| ---- | ------------------------------------------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------- |
| list | <a href="#RoleListItem">RoleListItem[]</a> | Yes                                    | -                                           | Role list Array length limit: 50.          | `[{"code":"my-role-code","namespace":"default","description":"this is description"}]` |

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
  const result = await managementClient.createRolesBatch({
    list: [
      {
        code: "my-role-code",
        description: "this is a description about the role",
        namespace: "default",
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

### <a id="RoleListItem"></a> RoleListItem

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                | <div style="width:200px">Sample value</div> |
| ----------- | ------ | -------------------------------------------- | --------------------------------------------------------- | ------------------------------------------- | --------- | ------ | --- | ------------------------------------------------------------------------------------------------------------------------ | --------- |
| code        | string | yes                                          | Unique identifier of the role within the permission group | `my-role-code`                              |
| name        | string | no                                           | Name of the role within the permission group              | `my-role-name`                              |
| description | string | no                                           | Description of the role                                   | `this is a description about the role`      | namespace | string | No  | The code of the permission group (permission space). If it is not passed, the default permission group will be obtained. | `default` |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| success | boolean | Yes                                           | Whether the operation is successful        | `true`                                      |

|
