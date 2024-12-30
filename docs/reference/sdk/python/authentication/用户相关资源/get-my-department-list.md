# Get the department list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

This interface is used to obtain the user's department list, which can be sorted according to certain sorting rules.

## Method name

`AuthenticationClient.get_department_list`

## Request parameters

| Name           | Type    | <div style="width:80px">Required</div> | Default value    | <div style="width:300px">Description</div>                                                                       | <div style="width:200px"></div>Sample value</div> |
| -------------- | ------- | -------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| page           | number  | No                                     | 1                | Current page number, starting from 1                                                                             | `1`                                               |
| limit          | number  | No                                     | 10               | Number per page, maximum cannot exceed 50, default is 10                                                         | `10`                                              |
| withCustomData | boolean | No                                     | -                | Whether to obtain custom data of the department                                                                  | `true`                                            |
| sortBy         | string  | No                                     | JoinDepartmentAt | Sorting basis, such as department creation time, department joining time, department name, department identifier | `JoinDepartmentAt`                                |
| orderBy        | string  | No                                     | Desc             | Ascending or descending                                                                                          | `Desc`                                            |

## Request response

Type: `UserDepartmentPaginatedRespDto`

| Name       | Type                                                           | Description                                                                                                                                                                                                                                                                                                                                |
| ---------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                         | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                               |
| message    | string                                                         | Description                                                                                                                                                                                                                                                                                                                                |
| apiCode    | number                                                         | Segment error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                               |
| data       | <a href="#UserDepartmentPagingDto">UserDepartmentPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                              |

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

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                             | <div style="width:200px">Sample value</div> |
| ---------- | ------ | --------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                           | Total number of records                                                                |                                             |
| list       | array  | Yes                                           | Response data Nested type: <a href="#UserDepartmentRespDto">UserDepartmentRespDto</a>. |                                             |

### <a id="UserDepartmentRespDto"></a> UserDepartmentRespDto

| Name               | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                    | <div style="width:200px">Sample value</div>                                                       |
| ------------------ | ------- | --------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| organizationCode   | string  | yes                                           | Organization Code (organizationCode)                                          | `steamory`                                                                                        |
| departmentId       | string  | yes                                           | Department ID                                                                 | `60b49eb83fd80adb96f26e68`                                                                        |
| isRoot             | boolean | yes                                           | Is it the root department?                                                    |                                                                                                   |
| createdAt          | string  | yes                                           | Department creation time                                                      | `2022-07-03T03:20:30.000Z`                                                                        |
| name               | string  | yes                                           | Department name                                                               | `dd8d7stf44`                                                                                      |
| description        | string  | yes                                           | Department description                                                        | `dd8d7stf44`                                                                                      |
| openDepartmentId   | string  | no                                            | Custom department ID, used to store custom IDs                                | `ou_7dab8a3d3cdccxxxxxx777c7ad535d62`                                                             |
| isLeader           | boolean | yes                                           | Is it a department leader?                                                    | `true`                                                                                            |
| code               | string  | yes                                           | Department identification code                                                | `6229c4deb3e4d8a20b6021ff`                                                                        |
| isMainDepartment   | boolean | yes                                           | Is it a main department?                                                      | `true`                                                                                            |
| joinedAt           | string  | yes                                           | Joined department time                                                        | `2022-07-03T03:20:30.000Z`                                                                        |
| isVirtualNode      | boolean | yes                                           | Is it a virtual department?                                                   |                                                                                                   |
| i18n               |         | no                                            | Multilingual Nested type: <a href="#DepartmentI18nDto">DepartmentI18nDto</a>. | `{"name":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}}` |
| customData         | object  | No                                            | Extended field data of department                                             | `{"icon":"https://example.com/logo"}`                                                             |
| departmentIdPath   | array   | No                                            | Department ID path                                                            | `["parentId1","parentId2"]`                                                                       |
| departmentCodePath | array   | No                                            | Department Code path                                                          | `["parentCode1","parentCode2"]`                                                                   |
| departmentNamePath | array   | No                                            | Department name path                                                          | `["parentName1","parentName2"]`                                                                   |

### <a id="DepartmentI18nDto"></a> DepartmentI18nDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                        | <div style="width:200px">Sample value</div>                                              |
| ---- | ---- | -------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| name |      | Yes                                          | Multi-language-supported field Nested type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}` |

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
