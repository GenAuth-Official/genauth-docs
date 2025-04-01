# Get department information

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get department information through organization code and department ID or department code, and you can get custom data.

## Method name

`ManagementClient.getDepartment`

## Request parameters

| Name             | Type    | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                | <div style="width:200px">Sample value</div> |
| ---------------- | ------- | -------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| organizationCode | string  | No                                     | -                                           | Organization code                                                                                         | `steamory`                                  |
| departmentId     | string  | No                                     | -                                           | Department ID, pass `root` for the root department. Either departmentId or departmentCode must be passed. | `root`                                      |
| departmentCode   | string  | No                                     | -                                           | Department code. Either departmentId or departmentCode must be passed.                                    | `example`                                   |
| departmentIdType | string  | No                                     | department_id                               | The type of department ID used in this call                                                               | `department_id`                             |
| withCustomData   | boolean | No                                     | -                                           | Whether to obtain custom data                                                                             | `true`                                      |
| flatCustomData   | boolean | No                                     | -                                           | Whether to flatten extended fields                                                                        |                                             |
| tenantId         | string  | No                                     | -                                           | Tenant ID                                                                                                 | `623c20b2a062aaaaf41b17da`                  |

## Example code

```ts
import { ManagementClient, Models } from "@genauth/nodejs";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If you are a privately deployed customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.getDepartment({
    // Replace organization code
    organizationCode: "steamory",
    // Replace department ID
    departmentId: "root",
    departmentIdType: "department_id",
    withCustomData: true,
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `DepartmentSingleRespDto`

| Name       | Type                                       | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                     | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                     | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#DepartmentDto">DepartmentDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "organizationCode": "steamory",
    "departmentId": "60b49eb83fd80adb96f26e68",
    "createdAt": "2022-07-03T03:20:30.000Z",
    "updatedAt": "2022-07-03T03:20:30.000Z",
    "openDepartmentId": "ou_7dab8a3d3cdccxxxxxx777c7ad535d62",
    "name": "Development Department",
    "leaderUserIds": "[\"60b49eb83fd80adb96f26e68\"]",
    "description": "Technology R&D Department",
    "parentDepartmentId": "6229c4deb3e4d8a20b6021ff",
    "code": "6229c4deb3e4d8a20b6021ff",
    "parentDepartmentCode": "test",
    "membersCount": 11,
    "hasChildren": true,
    "i18n": {
      "name": {
        "zh-CN": {
          "enabled": false,
          "value": "Chinese"
        },
        "en-US": {
          "enabled": false,
          "value": "English"
        }
      }
    },
    "customData": {
      "icon": "https://example.com/logo"
    },
    "postIdList": "[\"xxx\"]",
    "status": "false",
    "allow": "[\"xxx\"]"
  }
}
```

## Data structure

### <a id="DepartmentDto"></a> DepartmentDto

| Name                 | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                               | <div style="width:200px">Sample value</div> |
| -------------------- | ------- | --------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------- |
| organizationCode     | string  | Yes                                           | Organization Code (organizationCode)                                                     | `steamory`                                  |
| departmentId         | string  | Yes                                           | Department system ID (automatically generated by the GenAuth system, cannot be modified) | `60b49eb83fd80adb96f26e68`                  |
| createdAt            | string  | Yes                                           | Department creation time                                                                 | `2022-07-03T03:20:30.000Z`                  |
| updatedAt            | string  | no                                            | modification time                                                                        | `2022-07-03T03:20:30.000Z`                  |
| openDepartmentId     | string  | no                                            | custom department ID, used to store custom IDs                                           | `ou_7dab8a3d3cdccxxxxxx777c7ad535d62`       |
| name                 | string  | yes                                           | department name                                                                          | `Development Department`                    |
| leaderUserIds        | array   | no                                            | department head ID                                                                       | `["60b49eb83fd80adb96f26e68"]`              |
| description          | string  | no                                            | department description                                                                   | `Technical R&D Department`                  |
| parentDepartmentId   | string  | yes                                           | parent department ID, if it is a root department, pass root                              | `6229c4deb3e4d8a20b6021ff`                  |
| code                 | string  | no                                            | Department identification code                                                           | `6229c4deb3e4d8a20b6021ff`                  |
| parentDepartmentCode | string  | yes                                           | Parent department code                                                                   | `test`                                      |
| membersCount         | number  | yes                                           | Number of department members (only direct members)                                       | `11`                                        |
| hasChildren          | boolean | yes                                           | Whether to include child departments                                                     | `true`                                      |
| isVirtualNode        | boolean | no                                            |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "organizationCode": "steamory",
    "departmentId": "60b49eb83fd80adb96f26e68",
    "createdAt": "2022-07-03T03:20:30.000Z",
    "updatedAt": "2022-07-03T03:20:30.000Z",
    "openDepartmentId": "ou_7dab8a3d3cdccxxxxxx777c7ad535d62",
    "name": "Development Department",
    "leaderUserIds": "[\"60b49eb83fd80adb96f26e68\"]",
    "description": "Technology R&D Department",
    "parentDepartmentId": "6229c4deb3e4d8a20b6021ff",
    "code": "6229c4deb3e4d8a20b6021ff",
    "parentDepartmentCode": "test",
    "membersCount": 11,
    "hasChildren": true,
    "i18n": {
      "name": {
        "zh-CN": {
          "enabled": false,
          "value": "Chinese"
        },
        "en-US": {
          "enabled": false,
          "value": "English"
        }
      }
    },
    "customData": {
      "icon": "https://example.com/logo"
    },
    "postIdList": "[\"xxx\"]",
    "status": "false",
    "allow": "[\"xxx\"]"
  }
}
```

## Data structure

### <a id="DepartmentDto"></a> DepartmentDto

| Name                 | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                               | <div style="width:200px">Sample value</div> |
| -------------------- | ------- | --------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------- |
| organizationCode     | string  | Yes                                           | Organization Code (organizationCode)                                                     | `steamory`                                  |
| departmentId         | string  | Yes                                           | Department system ID (automatically generated by the GenAuth system, cannot be modified) | `60b49eb83fd80adb96f26e68`                  |
| createdAt            | string  | Yes                                           | Department creation time                                                                 | `2022-07-03T03:20:30.000Z`                  |
| updatedAt            | string  | no                                            | modification time                                                                        | `2022-07-03T03:20:30.000Z`                  |
| openDepartmentId     | string  | no                                            | custom department ID, used to store custom IDs                                           | `ou_7dab8a3d3cdccxxxxxx777c7ad535d62`       |
| name                 | string  | yes                                           | department name                                                                          | `Development Department`                    |
| leaderUserIds        | array   | no                                            | department head ID                                                                       | `["60b49eb83fd80adb96f26e68"]`              |
| description          | string  | no                                            | department description                                                                   | `Technical R&D Department`                  |
| parentDepartmentId   | string  | yes                                           | parent department ID, if it is a root department, pass root                              | `6229c4deb3e4d8a20b6021ff`                  |
| code                 | string  | no                                            | Department identification code                                                           | `6229c4deb3e4d8a20b6021ff`                  |
| parentDepartmentCode | string  | yes                                           | Parent department code                                                                   | `test`                                      |
| membersCount         | number  | yes                                           | Number of department members (only direct members)                                       | `11`                                        |
| hasChildren          | boolean | yes                                           | Whether to include child departments                                                     | `true`                                      |
| isVirtualNode        | boolean | no                                            |
