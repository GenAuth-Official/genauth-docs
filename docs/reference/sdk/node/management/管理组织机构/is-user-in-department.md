# Determine whether the user is in a certain department

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Use the organization code and department ID to determine whether the user is in a certain department, and you can choose to include sub-departments.

## Method name

`ManagementClient.isUserInDepartment`

## Request parameters

| Name                       | Type    | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                  | <div style="width:200px">Sample value</div> |
| -------------------------- | ------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| userId                     | string  | Yes                                    | -                                           | The unique identifier of the user, which can be user ID, user name, email address, mobile phone number, externalId, or ID in an external identity source. For details, see the description of the userIdType field. The default is user id. | `6229ffaxxxxxxxxcade3e3d9`                  |
| organizationCode           | string  | yes                                    | -                                           | Organization code                                                                                                                                                                                                                           | `steamory`                                  |
| departmentId               | string  | yes                                    | -                                           | Department ID. Pass `root` for the root department. Either departmentId or departmentCode must be passed.                                                                                                                                   | `root`                                      |
| departmentIdType           | string  | No                                     | department_id                               | The type of department ID used in this call                                                                                                                                                                                                 | `department_id`                             |
| includeChildrenDepartments | boolean | No                                     | -                                           | Whether to include child departments                                                                                                                                                                                                        |                                             |
| tenantId                   | string  | No                                     | -                                           | Tenant ID                                                                                                                                                                                                                                   | `623c20b2a062aaaaf41b17da`                  |

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
  const result = await managementClient.isUserInDepartment({
    // Replace user ID
    userId: "6229ffaxxxxxxxxcade3e3d9",
    // Replace organization Code and department ID
    organizationCode: "steamory",
    departmentId: "root",
    departmentIdType: "department_id",
    includeChildrenDepartments: false,
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request Response

Type: `IsUserInDepartmentRespDto`

| Name       | Type                                                               | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                             | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                             | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#IsUserInDepartmentDataDto">IsUserInDepartmentDataDto</a> | data                                                                                                                                                                                                                                                                                                                                         |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "inDepartment": true
  }
}
```

## Data structure

### <a id="IsUserInDepartmentDataDto"></a> IsUserInDepartmentDataDto

| Name         | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------ | ------- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| inDepartment | boolean | yes                                          | in this department                         | `true`                                      |
