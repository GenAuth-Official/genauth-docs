# Get custom field values ​​for users, groups, roles, and organizations

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get custom field values ​​for users, groups, roles, and organizations through filtering conditions.

## Method name

`ManagementClient.getCustomData`

## Request parameters

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                         | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | -------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| tenantId         | string | yes                                          | -                                           | Tenant ID                                                                                                                                                                                                                                                                                                                                          | `642c1df417c2d8a80d744c1d`                  |
| targetType       | string | yes                                          | -                                           | Target object type:<br>- `USER`: User<br>- `ROLE`: Role<br>- `GROUP`: Group<br>- `DEPARTMENT`: Department<br>                                                                                                                                                                                                                                      | `USER`                                      |
| targetIdentifier | string | yes                                          | -                                           | Unique identifier of the target object:<br>- If it is a user, it is the user's ID, such as `6343b98b7cfxxx9366e9b7c`<br>- If it is a role, it is the role's code, such as `admin`<br>- If it is a group, it is the group's code, such as `developer`<br>- If it is a department, it is the department's ID, such as `6343bafc019xxxx889206c4c`<br> | `userId1`                                   |
| namespace        | string | no                                           | -                                           | The code of the permission group, which needs to be filled in when targetType is a role, otherwise it can be ignored                                                                                                                                                                                                                               | `default`                                   |

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
  const result = await managementClient.getCustomData({
    targetType: "USER",
    targetIdentifier: "userId1",
    namespace: "default",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `GetCustomDataRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | object | Specific custom data value                                                                                                                                                                                                                                                                                                                     |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "age": 18,
    "school": "pku"
  }
}
```

## Data structure
