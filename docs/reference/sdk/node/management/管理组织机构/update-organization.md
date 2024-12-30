# Modify the organization

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Modify the organization through the organization code, you can select the department description, new organization code, organization name, etc.

## Method name

`ManagementClient.updateOrganization`

## Request parameters

| Name                | Type                                                           | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div>                                                                   |
| ------------------- | -------------------------------------------------------------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| organizationCode    | string                                                         | yes                                    | -                                           | Organization code                          | `steamory`                                                                                                    |
| description         | string                                                         | no                                     | -                                           | Department description                     | `Technical R&D department`                                                                                    |
| openDepartmentId    | string                                                         | no                                     | -                                           | Root node custom ID                        | `60b49eb83fd80adb96f26e68`                                                                                    |
| leaderUserIds       | string[]                                                       | no                                     | -                                           | Department Head ID                         | `["60b49eb83fd80adb96f26e68"]`                                                                                |
| i18n                | <a href="#OrganizationNameI18nDto">OrganizationNameI18nDto</a> | No                                     | -                                           | Multi-language settings                    | `{"organizationName":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}}` |
| tenantId            | string                                                         | No                                     | -                                           | Tenant ID                                  | `623c20b2a062aaaaf41b17da`                                                                                    |
| organizationNewCode | string                                                         | No                                     | -                                           | New organization code                      | `steamory2`                                                                                                   |
| organizationName    | string                                                         | No                                     | -                                           | Organization name                          | `steammemory`                                                                                                 |
| postIdList          | string[]                                                       | No                                     | -                                           | Post id list                               | `["xxx"]`                                                                                                     |

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
  const result = await managementClient.updateOrganization({
    // Replace organization Code
    organizationCode: "steamory",
    organizationName: "Steam Memory",
    description: "Organization Description Information",
    i18n: {
      organizationName: {
        "zh-CN": {
          enabled: false,
          value: "Chinese Name",
        },
        "en-US": {
          enabled: false,
          value: "English",
        },
        "zh-TW": {
          enabled: false,
          value: "zh-TW",
        },
        "ja-JP": {
          enabled: false,
          value: "ja-JP",
        },
      },
    },
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request Response

Type: `OrganizationSingleRespDto`

| Name       | Type                                           | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                         | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                         | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                         | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#OrganizationDto">OrganizationDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "organizationCode": "steamory",
    "organizationName": "Steam Memory",
    "description": "Organization description information",
    "createdAt": "2022-07-03T03:20:30.000Z",
    "updatedAt": "2022-07-03T03:20:30.000Z",
    "departmentId": "60b49eb83fd80adb96f26e68",
    "openDepartmentId": "60b49eb83fd80adb96f26e68",
    "hasChildren": true,
    "leaderUserIds": "[\"60b49eb83fd80adb96f26e68\"]",
    "membersCount": 150,
    "i18n": {
      "organizationName": {
        "zh-CN": { "enabled": false, "value": "Chinese" },
        "en-US": { "enabled": false, "value": "English" }
      }
    },
    "customData": { "icon": "https://example.com/logo" },
    "tenantId": "623c20b2a062aaaaf41b17da",
    "postIdList": "[\"xxx\"]",
    "status": "false",
    "allow": "[\"xxx\"]"
  }
}
```

## Data structure

### <a id="OrganizationNameI18nDto"></a> OrganizationNameI18nDto

| Name             | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                      | <div style="width:200px">Sample value</div>                                              |
| ---------------- | ---- | -------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| organizationName |      | Yes                                          | Multi-language support field Nested type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}` |

### <a id="LangObject"></a> LangObject

| Name  | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                          | <div style="width:200px">Sample value</div> |
| ----- | ---- | --------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| zh-CN |      | Yes                                           | Multilingual Chinese content Nested type: <a href="#LangUnit">LangUnit</a>.                         | `{"enabled":false,"value":"中文"}`          |
| en-US |      | Yes                                           | Multilingual English content Nested type: <a href="#LangUnit">LangUnit</a>.                         | `{"enabled":false,"value":"English"}`       |
| zh-TW |      | Yes                                           | Multilingual Traditional Chinese content Nested type: <a href="#LangUnit">Traditional Chinese"</a>` |
| ja-JP |      | Yes                                           | Multilingual Japanese content Nested type: <a href="#LangUnit">LangUnit</a>.                        | `{"enabled":false,"value":"日本語"}`        |

### <a id="LangUnit"></a> LangUnit

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                               | <div style="width:200px">Sample value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| enabled | boolean | yes                                          | Whether it is enabled. If enabled and the console selects this language, the content will be displayed. (default closed) |                                             |
| value   | string  | yes                                          | multilingual content                                                                                                     |                                             |

### <a id="OrganizationDto"></a> OrganizationDto

| name             | type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">description</div>                                                           | <div style="width:200px">example value</div>                                                                  |
| ---------------- | ------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| organizationCode | string  | yes                                           | organization code                                                                                    | `steamory`                                                                                                    |
| organizationName | string  | yes                                           | organization name                                                                                    | `steam memory`                                                                                                |
| description      | string  | no                                            | organization description                                                                             | `organization description`                                                                                    |
| createdAt        | string  | no                                            | creation time                                                                                        | `2022-07-03T03:20:30.000Z`                                                                                    |
| updatedAt        | string  | no                                            | Modification time                                                                                    | `2022-07-03T03:20:30.000Z`                                                                                    |
| departmentId     | string  | yes                                           | Root node ID                                                                                         | `60b49eb83fd80adb96f26e68`                                                                                    |
| openDepartmentId | string  | no                                            | Root node custom ID                                                                                  | `60b49eb83fd80adb96f26e68`                                                                                    |
| hasChildren      | boolean | yes                                           | Whether to include child nodes                                                                       | `true`                                                                                                        |
| leaderUserIds    | array   | no                                            | Department leader ID                                                                                 | `["60b49eb83fd80adb96f26e68"]`                                                                                |
| membersCount     | number  | yes                                           | Number of department members                                                                         | `150`                                                                                                         |
| isVirtualNode    | boolean | yes                                           | Whether it is a virtual department                                                                   |                                                                                                               |
| i18n             |         | no                                            | Multi-language settings Nested type: <a href="#OrganizationNameI18nDto">OrganizationNameI18nDto</a>. | `{"organizationName":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}}` |
| customData       | object  | No                                            | Extended field data of department                                                                    | `{"icon":"https://example.com/logo"}`                                                                         |
| tenantId         | string  | No                                            | Tenant ID                                                                                            | `623c20b2a062aaaaf41b17da`                                                                                    |
| postIdList       | array   | No                                            | Post id list                                                                                         | `["xxx"]`                                                                                                     |
| status           | stringg | No                                            | Status                                                                                               | `false`                                                                                                       |
| allow            | string  | No                                            | Access restrictions                                                                                  | `["xxx"]`                                                                                                     |

### <a id="OrganizationNameI18nDto"></a> OrganizationNameI18nDto

| Name             | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                         | <div style="width:200px">Sample value</div>                                              |
| ---------------- | ---- | -------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| organizationName |      | Yes                                          | Multi-language-supported fields Nested type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}` |

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
