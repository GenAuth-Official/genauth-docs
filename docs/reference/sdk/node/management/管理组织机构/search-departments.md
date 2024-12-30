# Search department

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

You can search by organization code, search keywords, search department, organization name, etc.

## Method name

`ManagementClient.searchDepartments`

## Request parameters

| Name             | Type    | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>       | <div style="width:200px">Sample value</div> |
| ---------------- | ------- | --------------------------------------------- | ------------------------------------------- | ------------------------------------------------ | ------------------------------------------- |
| keywords         | string  | yes                                           | -                                           | Search keywords, such as organization name, etc. | `GenAuth`                                   |
| organizationCode | string  | yes                                           | -                                           | Organization code                                | `steamory`                                  |
| withCustomData   | boolean | no                                            | -                                           | Whether to obtain custom data                    | `true`                                      |
| tenantId         | string  | no                                            | -                                           | Tenant ID                                        | `623c20b2a062aaaaf41b17da`                  |

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
  const result = await managementClient.searchDepartments({
    organizationCode: "steamory",
    keywords: "GenAuth",
    withCustomData: true,
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `DepartmentListRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                               |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                |
| apiCode    | number | Segment error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                               |
| data       | array  | response data                                                                                                                                                                                                                                                                                                                              |

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
    "description": "Technical R&D Department",
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

| Name                 | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                               | <div style="width:200px">Sample value</div>                                                       |
| -------------------- | ------- | --------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| organizationCode     | string  | Yes                                           | Organization Code (organizationCode)                                                     | `steamory`                                                                                        |
| departmentId         | string  | Yes                                           | Department system ID (automatically generated by the GenAuth system, cannot be modified) | `60b49eb83fd80adb96f26e68`                                                                        |
| createdAt            | string  | yes                                           | Department creation time                                                                 | `2022-07-03T03:20:30.000Z`                                                                        |
| updatedAt            | string  | no                                            | Modification time                                                                        | `2022-07-03T03:20:30.000Z`                                                                        |
| openDepartmentId     | string  | no                                            | Custom department ID, used to store custom IDs                                           | `ou_7dab8a3d3cdccxxxxxx777c7ad535d62`                                                             |
| name                 | string  | yes                                           | Department name                                                                          | `Development Department`                                                                          |
| leaderUserIds        | array   | no                                            | Department leader ID                                                                     | `["60b49eb83fd80adb96f26e68"]`                                                                    |
| description          | string  | no                                            | Department description                                                                   | `Technical R&D Department`                                                                        |
| parentDepartmentId   | string  | yes                                           | Parent department ID, if it is a root department, pass root                              | `6229c4deb3e4d8a20b6021ff`                                                                        |
| code                 | string  | no                                            | Department identification code                                                           | `6229c4deb3e4d8a20b6021ff`                                                                        |
| parentDepartmentCode | string  | yes                                           | Parent department code                                                                   | `test`                                                                                            |
| membersCount         | number  | yes                                           | Number of department members (only direct members)                                       | `11`                                                                                              |
| hasChildren          | boolean | yes                                           | Whether to include child departments                                                     | `true`                                                                                            |
| isVirtualNode        | boolean | no                                            | Whether to be a virtual department                                                       |                                                                                                   |
| i18n                 |         | no                                            | Multi-language settings Nested type: <a href="#DepartmentI18nDto">DepartmentI18nDto</a>. | `{"name":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}}` |
| customData           | object  | No                                            | Extended field data of department                                                        | `{"icon":"https://example.com/logo"}`                                                             |
| posts                | array   | No                                            | Positions associated with department                                                     |                                                                                                   |
| postIdList           | array   | No                                            | Position id list                                                                         | `["xxx"]`                                                                                         |
| status               | boolean | no                                            | department status                                                                        | `false`                                                                                           |
| allow                | string  | no                                            | access restriction                                                                       | `["xxx"]`                                                                                         |

### <a id="DepartmentI18nDto"></a> DepartmentI18nDto

| name | type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                      | <div style="width:200px">Sample value</div>                                              |
| ---- | ---- | -------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| name |      | yes                                          | Multi-language support field Nested type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}` |

### <a id="LangObject"></a> LangObject

| Name  | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                               | <div style="width:200px">Sample value</div> |
| ----- | ---- | --------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------- |
| zh-CN |      | Yes                                           | Multilingual Chinese content Nested type: <a href="#LangUnit">LangUnit</a>.              | `{"enabled":false,"value":"中文"}`          |
| en-US |      | Yes                                           | Multilingual English content Nested type: <a href="#LangUnit">LangUnit</a>.              | `{"enabled":false,"value":"English"}`       |
| zh-TW |      | Yes                                           | Multilingual Traditional Chinese content Nesting type: <a href="#LangUnit">LangUnit</a>. | `{"enabled":false,"value":"繁體中文"}`      |
| ja-JP |      | Yes                                           | Multilingual Japanese content Nesting type: <a href="#LangUnit">LangUnit</a>.            | `{"enabled":false,"value":"日本語"}`        |

### <a id="LangUnit"></a> LangUnit

| Name    | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                | <div style="width:200px">Sample value</div> |
| ------- | ------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| enabled | boolean | yes                                           | Whether it is enabled. If enabled, and the console selects this language, the content will be displayed. (Default is off) |                                             |
| value   | string  | yes                                           | Multilingual content                                                                                                      |                                             |
