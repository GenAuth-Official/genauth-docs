# Get user department list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get the user department list through user ID, support paging, you can choose to get custom data, select a specified user ID type, ascending or descending order, etc.

## Method name

`ManagementClient.getUserDepartments`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------------- | ------- | -------------------------------------- | ------------------------------------ | ---------------------------- ... | `6229ffaxxxxxxxxcade3e3d9` |
| userIdType | string | No | user_id | User ID type, the default value is `user_id`, the optional values ​​are:<br>- `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`<br>- `phone`: User phone number<br>- `email`: User email<br>- `username`: User name<br>- `external_id`: User ID in the external system, corresponding to the `externalId` field of GenAuth user information<br>- `identity`: User's external identity source information, the format is `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, and `<userIdInIdp>` is the ID of the user in the external identity source. <br>Example value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`. <br>- `sync_relation`: The user's external identity source information, in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the synchronization identity source type, such as wechatwork, lark; `<userIdInIdp>` is the user's ID in the external identity source. <br>Example value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`. <br> | `user_id` |
| page | number | No | 1 | Current page number, starting from 1 | `1` |
| limit | number | No | 10 | Number per page, maximum cannot exceed 50, default is 10| `10` |
| withCustomData | boolean | No | - | Whether to obtain custom data | `true` |
| withDepartmentPaths | boolean | No | - | Whether to obtain department paths | `true` |
| sortBy | string | No | JoinDepartmentAt | Sorting basis, such as department creation time, department joining time, department name, department identifier | `JoinDepartmentAt` |
| orderBy | string | No | Desc | Ascending or descending order | `Desc` |

## Sample code

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
  const result = await managementClient.getUserDepartments({
    // Replace user ID
    userId: "6229ffaxxxxxxxxcade3e3d9",
    userIdType: "user_id",
    page: 1,
    limit: 10,
    withCustomData: true,
    sortBy: "JoinDepartmentAt",
    orderBy: "Desc",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `UserDepartmentPaginatedRespDto`

| Name       | Type                                                           | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                         | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                         | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                         | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#UserDepartmentPagingDto">UserDepartmentPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "organizationCode": "steamory",
      "departmentId": "60b49eb83fd80adb96f26e68",
      "createdAt": "2022-07-03T03:20:30.000Z",
      "name": "dd8d7stf44",
      "description": "dd8d7stf44",
      "openDepartmentId": "ou_7dab8a3d3cdccxxxxxx777c7ad535d62",
      "isLeader": true,
      "code": "6229c4deb3e4d8a20b6021ff",
      "isMainDepartment": true,
      "joinedAt": "2022-07-03T03:20:30.000Z",
      "i18n": {
        "name": {
          "zh-CN": { "enabled": false, "value": "Chinese" },
          "en-US": { "enabled": false, "value": "English" }
        }
      },
      "customData": { "icon": "https://example.com/logo" },
      "departmentIdPath": "[\"parentId1\",\"parentId2\"]",
      "departmentCodePath": "[\"parentCode1\",\"parentCode2\"]",
      "departmentNamePath": "[\"parentName1\",\"parentName2\"]"
    }
  }
}
```

## Data structure

### <a id="UserDepartmentPagingDto"></a> UserDepartmentPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                             | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                          | Total number of records                                                                |                                             |
| list       | array  | Yes                                          | Response data Nested type: <a href="#UserDepartmentRespDto">UserDepartmentRespDto</a>. |                                             |

### <a id="UserDepartmentRespDto"></a> UserDepartmentRespDto

| Name               | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                               | <div style="width:200px">Sample value</div>                                                       |
| ------------------ | ------- | --------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| organizationCode   | string  | Yes                                           | Organization Code (organizationCode)                                                     | `steamory`                                                                                        |
| departmentId       | string  | Yes                                           | Department ID                                                                            | `60b49eb83fd80adb96f26e68`                                                                        |
| isRoot             | boolean | yes                                           | Is it the root department?                                                               |                                                                                                   |
| createdAt          | string  | yes                                           | Department creation time                                                                 | `2022-07-03T03:20:30.000Z`                                                                        |
| name               | string  | yes                                           | Department name                                                                          | `dd8d7stf44`                                                                                      |
| description        | string  | yes                                           | Department description                                                                   | `dd8d7stf44`                                                                                      |
| openDepartmentId   | string  | no                                            | Custom department ID, used to store custom IDs                                           | `ou_7dab8a3d3cdccxxxxxx777c7ad535d62`                                                             |
| isLeader           | boolean | yes                                           | Is it the department leader?                                                             | `true`                                                                                            |
| code               | string  | yes                                           | Department identification code                                                           | `6229c4deb3e4d8a20b6021ff`                                                                        |
| isMainDepartment   | boolean | yes                                           | Is it the main department                                                                | `true`                                                                                            |
| joinedAt           | string  | yes                                           | Joined department time                                                                   | `2022-07-03T03:20:30.000Z`                                                                        |
| isVirtualNode      | boolean | yes                                           | Is it a virtual department                                                               |                                                                                                   |
| i18n               |         | no                                            | Multi-language settings Nested type: <a href="#DepartmentI18nDto">DepartmentI18nDto</a>. | `{"name":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}}` |
| customData         | object  | No                                            | Extended field data of department                                                        | `{"icon":"https://example.com/logo"}`                                                             |
| departmentIdPath   | array   | No                                            | Department ID path                                                                       | `["parentId1","parentId2"]`                                                                       |
| departmentCodePath | array   | No                                            | Department Code path                                                                     | `["parentCode1","parentCode2"]`                                                                   |
| departmentNamePath | array   | No                                            | Department name path                                                                     | `["parentName1","parentName2"]`                                                                   |

### <a id="DepartmentI18nDto"></a> DepartmentI18nDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                        | <div style="width:200px">Sample value</div>                                              |
| ---- | ---- | -------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| name |      | Yes                                          | Multi-language-supported field Nested type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}` |

### <a id="LangUnit"></a> LangUnit

| Name    | Type    | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                     | <div style="width:200px">Example value</div> |
| ------- | ------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| enabled | boolean | Yes                                    | Whether it is enabled. If enabled and the language is selected in the console, the content will be displayed. (off by default) |                                              |
| value   | string  | yes                                    | multilingual content                                                                                                           |                                              |
