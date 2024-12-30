# Get organization details

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get organization details

## Method name

`ManagementClient.get_organization`

## Request parameters

| Name             | Type    | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------------- | ------- | --------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| organizationCode | string  | yes                                           | -                                           | Organization Code (organizationCode)       | `steamory`                                  |
| withCustomData   | boolean | no                                            | -                                           | Whether to get custom data                 | `true`                                      |
| withPost         | boolean | no                                            | -                                           | Whether to get department information      | `true`                                      |
| tenantId         | string  | no                                            | -                                           | Tenant ID                                  | `623c20b2a062aaaaf41b17da`                  |

## Request Response

Type: `OrganizationSingleRespDto`

| Name       | Type                                           | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                         | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                         | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                         | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#OrganizationDto">OrganizationDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "organizationCode": "steamory",
    "organizationName": "test",
    "description": "test desc",
    "createdAt": "2022-07-03T03:20:30.000Z",
    "updatedAt": "2022-07-03T03:20:30.000Z",
    "departmentId": "60b49eb83fd80adb96f26e68",
    "openDepartmentId": "60b49eb83fd80adb96f26e68",
    "hasChildren": true,
    "leaderUserIds": "[\"60b49eb83fd80adb96f26e68\"]",
    "membersCount": 150,
    "i18n": {
      "organizationName": {
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
    "tenantId": "623c20b2a062aaaaf41b17da",
    "postIdList": "[\"xxx\"]",
    "status": "false",
    "allow": "[\"xxx\"]"
  }
}
```

## Data Structure

### <a id="OrganizationDto"></a> OrganizationDto

| Name             | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                           | <div style="width:200px">Sample value</div>                                                                   |
| ---------------- | ------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| organizationCode | string  | yes                                           | Organization code                                                                                    | `steamory`                                                                                                    |
| organizationName | string  | yes                                           | Organization name                                                                                    | `steam memory`                                                                                                |
| description      | string  | no                                            | Organization description                                                                             | `Organization description`                                                                                    |
| createdAt        | string  | no                                            | Creation time                                                                                        | `2022-07-03T03:20:30.000Z`                                                                                    |
| updatedAt        | string  | no                                            | Modification time                                                                                    | `2022-07-03T03:20:30.000Z`                                                                                    |
| departmentId     | string  | yes                                           | Root node ID                                                                                         | `60b49eb83fd80adb96f26e68`                                                                                    |
| openDepartmentId | string  | no                                            | Custom ID of the root node                                                                           | `60b49eb83fd80adb96f26e68`                                                                                    |
| hasChildren      | boolean | yes                                           | Whether to include child nodes                                                                       | `true`                                                                                                        |
| leaderUserIds    | array   | no                                            | ID of department leader                                                                              | `["60b49eb83fd80adb96f26e68"]`                                                                                |
| membersCount     | number  | yes                                           | Number of people in the department                                                                   | `150`                                                                                                         |
| isVirtualNode    | boolean | yes                                           | Whether it is a virtual department                                                                   |                                                                                                               |
| i18n             |         | No                                            | Multi-language settings Nested type: <a href="#OrganizationNameI18nDto">OrganizationNameI18nDto</a>. | `{"organizationName":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}}` |
| customData       | object  | No                                            | Extended field data of department                                                                    | `{"icon":"https://example.com/logo"}`                                                                         |
| tenantId         | string  | No                                            | Tenant ID                                                                                            | `623c20b2a062aaaaf41b17da`                                                                                    |
| postIdList       | array   | No                                            | Post id list                                                                                         | `["xxx"]`                                                                                                     |
| status           | string  | No                                            | Status                                                                                               | `false`                                                                                                       |
| allow            | string  | No                                            | Access restriction                                                                                   | `["xxx"]`                                                                                                     |

### <a id="OrganizationNameI18nDto"></a> OrganizationNameI18nDto

| Name             | Type | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>                                         | <div style="width:200px">Sample value</div>                                              |
| ---------------- | ---- | ----------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| organizationName |      | Yes                                                   | Multi-language-supported fields Nested type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}` |

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
