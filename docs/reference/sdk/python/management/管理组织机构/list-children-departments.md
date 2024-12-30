# Get the list of sub-departments

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the list of sub-departments through organization code and department ID. You can choose to obtain custom data, virtual organization, etc.

## Method name

`ManagementClient.list_children_departments`

## Request parameters

| Name               | Type    | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>         | <div style="width:200px">Sample value</div> |
| ------------------ | ------- | -------------------------------------- | ------------------------------------------- | -------------------------------------------------- | ------------------------------------------- |
| organizationCode   | string  | yes                                    | -                                           | Organization code                                  | `steamory`                                  |
| departmentId       | string  | yes                                    | -                                           | Department ID to be obtained                       | `60b49eb83fd80adb96f26e68`                  |
| status             | boolean | no                                     | -                                           | Department status                                  | `false`                                     |
| departmentIdType   | string  | no                                     | department_id                               | Type of department ID used in this call            | `department_id`                             |
| excludeVirtualNode | boolean | no                                     | -                                           | Do you want to exclude virtual organizations?      |                                             |
| onlyVirtualNode    | boolean | no                                     | -                                           | Do you want to include only virtual organizations? |                                             |
| withCustomData     | boolean | no                                     | -                                           | Do you want to get custom data?                    | `true`                                      |
| tenantId           | string  | no                                     | -                                           | Tenant ID                                          | `623c20b2a062aaaaf41b17da`                  |

## Request Response

Type: `DepartmentPaginatedRespDto`

| Name       | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                                 | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                                 | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#DepartmentPagingDto">DepartmentPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
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
      "description": "RD Desc",
      "parentDepartmentId": "6229c4deb3e4d8a20b6021ff",
      "code": "6229c4deb3e4d8a20b6021ff",
      "parentDepartmentCode": "test",
      "membersCount": 11,
      "hasChildren": true,
      "i18n": {
        "name": {
          "zh-CN": {
            "enabled": false,
            "value": "中文"
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

## Data Structure

### <a id="DepartmentPagingDto"></a> DepartmentPagingDto

| Name       | Type    | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                             | <div style="width:200px">Sample value</div> |
| ---------- | ------- | -------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | boolean | yes                                    | Total                                                                  | `10`                                        |
| list       | array   | yes                                    | Response data Nested type: <a href="#DepartmentDto">DepartmentDto</a>. |                                             |

### <a id="DepartmentDto"></a> DepartmentDto

| Name                 | Type    | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>                                               | <div style="width:200px">Sample value</div>                                                       |
| -------------------- | ------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| organizationCode     | string  | yes                                                   | Organization Code (organizationCode)                                                     | `steamory`                                                                                        |
| departmentId         | string  | yes                                                   | Department system ID (automatically generated by the GenAuth system, cannot be modified) | `60b49eb83fd80adb96f26e68`                                                                        |
| createdAt            | string  | yes                                                   | Department creation time                                                                 | `2022-07-03T03:20:30.000Z`                                                                        |
| updatedAt            | string  | no                                                    | Modification time                                                                        | `2022-07-03T03:20:30.000Z`                                                                        |
| openDepartmentId     | string  | no                                                    | Custom department ID, used to store custom IDs                                           | `ou_7dab8a3d3cdccxxxxxx777c7ad535d62`                                                             |
| name                 | string  | yes                                                   | Department name                                                                          | `Development Department`                                                                          |
| leaderUserIds        | array   | no                                                    | Department head ID                                                                       | `["60b49eb83fd80adb96f26e68"]`                                                                    |
| description          | string  | no                                                    | Department description                                                                   | `Technology R&D department`                                                                       |
| parentDepartmentId   | string  | yes                                                   | Parent department id, if it is the root department, pass root                            | `6229c4deb3e4d8a20b6021ff`                                                                        |
| code                 | string  | no                                                    | Department identification code                                                           | `6229c4deb3e4d8a20b6021ff`                                                                        |
| parentDepartmentCode | string  | yes                                                   | Parent department code                                                                   | `test`                                                                                            |
| membersCount         | number  | yes                                                   | Number of department members (only direct members)                                       | `11`                                                                                              |
| hasChildren          | boolean | yes                                                   | Whether to include child departments                                                     | `true`                                                                                            |
| isVirtualNode        | boolean | no                                                    | Whether to be a virtual department                                                       |                                                                                                   |
| i18n                 |         | No                                                    | Multi-language settings Nested type: <a href="#DepartmentI18nDto">DepartmentI18nDto</a>. | `{"name":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}}` |
| customData           | object  | No                                                    | Extended field data of department                                                        | `{"icon":"https://example.com/logo"}`                                                             |
| posts                | array   | No                                                    | Positions associated with department                                                     |                                                                                                   |
| postIdList           | array   | No                                                    | Position id list                                                                         | `["xxx"]`                                                                                         |
| status               | boolean | No                                                    | Department status                                                                        | `false`                                                                                           |
| allow                | string  | No                                                    | Access restriction                                                                       | `["xxx"]`                                                                                         |

### <a id="DepartmentI18nDto"></a> DepartmentI18nDto

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                         | <div style="width:200px">Sample value</div>                                              |
| ---- | ---- | --------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| name |      | Yes                                           | Multi-language-supported fields Nested type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}` |

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
