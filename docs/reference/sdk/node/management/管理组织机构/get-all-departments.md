# Get a list of all departments

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get a list of all departments, which can be used to obtain a list of all departments under a certain organization.

## Method name

`ManagementClient.getAllDepartments`

## Request parameters

| Name             | Type    | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                 | <div style="width:200px">Sample value</div> |
| ---------------- | ------- | --------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------- |
| organizationCode | string  | yes                                           | -                                           | Organization code                                                          | `steamory`                                  |
| departmentId     | string  | no                                            | root                                        | Department ID. If not filled in, it defaults to `root`. Root department ID | `root`                                      |
| departmentIdType | string  | no                                            | department_id                               | Type of department ID used in this call                                    | `department_id`                             |
| withCustomData   | boolean | no                                            | -                                           | Whether to get custom data                                                 | `true`                                      |

## Request response

Type: `DepartmentPaginatedRespDto`

| Name       | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                |
| ---------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                               |
| message    | string                                                 | Description                                                                                                                                                                                                                                                                                                                                |
| apiCode    | number                                                 | Segment error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                               |
| data       | <a href="#DepartmentPagingDto">DepartmentPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                              |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 10,
    "list": {
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
}
```

## Data structure

### <a id="DepartmentPagingDto"></a> DepartmentPagingDto

| Name       | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                             | <div style="width:200px">Sample value</div> |
| ---------- | ------- | -------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | boolean | yes                                          | Total                                                                  | `10`                                        |
| list       | array   | yes                                          | Response data Nested type: <a href="#DepartmentDto">DepartmentDto</a>. |                                             |

### <a id="DepartmentDto"></a> DepartmentDto

| Name                 | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                               | <div style="width:200px">Sample value</div>                                                       |
| -------------------- | ------- | --------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| organizationCode     | string  | Yes                                           | Organization Code (organizationCode)                                                     | `steamory`                                                                                        |
| departmentId         | string  | Yes                                           | Department system ID (automatically generated by the GenAuth system, cannot be modified) | `60b49eb83fd80adb96f26e68`                                                                        |
| createdAt            | string  | Yes                                           | Department creation time                                                                 | `2022-07-03T03:20:30.000Z`                                                                        |
| updatedAt            | string  | No                                            | Modification time                                                                        | `2022-07-03T03:20:30.000Z`                                                                        |
| openDepartmentId     | string  | No                                            | Custom department ID, used to store custom IDs                                           | `ou_7dab8a3d3cdccxxxxxx777c7ad535d62`                                                             |
| name                 | string  | Yes                                           | Department name                                                                          | `Development Department`                                                                          |
| leaderUserIds        | array   | No                                            | Department head ID                                                                       | `["60b49eb83fd80adb96f26e68"]`                                                                    |
| description          | string  | No                                            | Department description                                                                   | `Technical R&D Department`                                                                        |
| parentDepartmentId   | string  | Yes                                           | Parent department ID, if it is the root department, pass root                            | `6229c4deb3e4d8a20b6021ff`                                                                        |
| code                 | string  | No                                            | Department identification code                                                           | `6229c4deb3e4d8a20b6021ff`                                                                        |
| parentDepartmentCode | string  | yes                                           | Parent department code                                                                   | `test`                                                                                            |
| membersCount         | number  | yes                                           | Number of department members (only direct members)                                       | `11`                                                                                              |
| hasChildren          | boolean | yes                                           | Whether to include child departments                                                     | `true`                                                                                            |
| isVirtualNode        | boolean | no                                            | Whether it is a virtual department                                                       |                                                                                                   |
| i18n                 |         | no                                            | Multi-language settings Nested type: <a href="#DepartmentI18nDto">DepartmentI18nDto</a>. | `{"name":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}}` |
| customData           | object  | No                                            | Extended field data of department                                                        | `{"icon":"https://example.com/logo"}`                                                             |
| posts                | array   | No                                            | Positions associated with a department                                                   |                                                                                                   |
| postIdList           | array   | No                                            | Position id list                                                                         | `["xxx"]`                                                                                         |
| status               | boolean | No                                            | Department status                                                                        | `false`                                                                                           |
| allow                | string  | No                                            | Access restriction                                                                       | `["xxx"]`                                                                                         |

### <a id="DepartmentI18nDto"></a> DepartmentI18nDto

| name | type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                  | <div style="width:200px">Sample value</div>                                              |
| ---- | ---- | -------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| name |      | Yes                                          | Fields that support multiple languages ​​Nested type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}` |

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
