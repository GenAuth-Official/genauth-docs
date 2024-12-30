# Set the value of the custom field

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If this document description is incorrect, please refer to the V3 API.

Set the value of the custom field for the user, role or department. If it exists, update it, and if it does not exist, create it.

## Method name

`ManagementClient.setCustomData`

## Request parameters

| Name             | Type                                               | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                         | <div style="width:200px">Sample value</div> |
| ---------------- | -------------------------------------------------- | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| list             | <a href="#SetCustomDataDto">SetCustomDataDto[]</a> | Yes                                    | -                                           | Custom data list Array length limit: 50.                                                                                                                                                                                                                                                                                                           |                                             |
| targetIdentifier | string                                             | yes                                    | -                                           | Unique identifier of the target object:<br>- If it is a user, it is the user's ID, such as `6343b98b7cfxxx9366e9b7c`<br>- If it is a role, it is the role's code, such as `admin`<br>- If it is a group, it is the group's code, such as `developer`<br>- If it is a department, it is the department's ID, such as `6343bafc019xxxx889206c4c`<br> | `userId1`                                   |
| targetType       | string                                             | yes                                    | -                                           | Target object type:<br>- `USER`: user<br>- `ROLE`: role<br>- `GROUP`: group<br>- `DEPARTMENT`: department<br>                                                                                                                                                                                                                                      | `USER`                                      |
| tenantId         | string                                             | no                                     | -                                           | Tenant ID                                                                                                                                                                                                                                                                                                                                          | `642c1df417c2d8a80d744c1d`                  |
| namespace        | string                                             | No                                     | -                                           | The code of the permission group. It needs to be filled in when target_type is role, otherwise it can be ignored                                                                                                                                                                                                                                   | `default`                                   |

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
  const result = await managementClient.setCustomData({
    targetType: Models.CustomFieldDto.targetType.USER,
    targetIdentifier: "userId1",
    namespace: "default",
    list: [
      {
        key: "school",
        value: "pku",
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

### <a id="SetCustomDataDto"></a> SetCustomDataDto

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                   | <div style="width:200px">Sample value</div> |
| -------- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| tenantId | string | No                                           | Tenant ID                                                                                                                    | `642c1df417c2d8a80d744c1d`                  |
| key      | string | Yes                                          | Field key, cannot conflict with the key of built-in fields                                                                   | `school`                                    |
| value    | string | Yes                                          | Custom data, can be of any type, but must match the custom field type defined when creating, otherwise the setting will fail | `pku`                                       |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| success | boolean | Yes                                          | Whether the operation was successful       | `true`                                      |
