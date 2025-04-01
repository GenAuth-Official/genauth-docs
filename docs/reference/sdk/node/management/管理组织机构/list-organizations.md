# Get the list of organizations

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get the list of organizations, support paging.

## Method name

`ManagementClient.listOrganizations`

## Request parameters

| Name           | Type    | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| -------------- | ------- | --------------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| page           | number  | No                                            | 1                                           | Current page number, starting from 1                     | `1`                                         |
| limit          | number  | No                                            | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |
| fetchAll       | boolean | No                                            | -                                           | Fetch all                                                |                                             |
| withCustomData | boolean | No                                            | -                                           | Whether to obtain custom data                            | `true`                                      |
| withPost       | boolean | No                                            | -                                           | Whether to obtain department information                 | `true`                                      |
| tenantId       | string  | No                                            | -                                           | tenant ID                                                | `623c20b2a062aaaaf41b17da`                  |
| status         | boolean | No                                            | -                                           | organization status                                      | `fasle`                                     |

## Sample code

```ts
import { ManagementClient, Models } from "@genauth/nodejs";

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
  const result = await managementClient.listOrganizations({
    page: 1,
    limit: 10,
    withCustomData: true,
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `OrganizationPaginatedRespDto`

| Name       | Type                                                       | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                     | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                     | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                     | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#OrganizationPagingDto">OrganizationPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

````json
{
"statusCode": 200,
"message": "Operation successful",
"requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
"data": {
"list": {
"organizationCode": "steamory",
"organizationName": "Steam Memory",
"description": "Organization Description Information",
"createdAt": "2022-07-03T03:20:30.000Z",
"updatedAt": "2022-07-03T03:20:30.000Z",
"departmentId": "60b49eb83fd80adb96f26e68",
"openDepartmentId": "60b49eb83fd80adb96f26e68",
"hasChildren": true,
"leaderUserIds": "[\"60b49eb83fd80adb96f26e68\"]", "membersCount": 150, "i18n": { "organizationName": { "zh-CN": { "enabled": false, "value": "Chinese" }, "en-US": { "enabled": false, "value": "English" } } }, "customData": { "icon": "https://example.com/logo" }, "tenantId": "623c20b2a062aaaaf41b17da", "postIdList": "[\"xxx\"]", "status": "false", "allow": "[\"xxx\"]" } } } ``` ## Data structure ### <a id="OrganizationPagingDto"></a> OrganizationPagingDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ------------------------------------------------------------------- | ------------------------------------- |
| totalCount | number | Yes | Total number of records | |
| list | array | Yes | Response data Nested type: <a href="#OrganizationDto">OrganizationDto</a>. | |

### <a id="OrganizationDto"></a> OrganizationDto

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------------- | ------- | -------------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| organizationCode | string | yes | organization code | `steamory` |
| organizationName | string | yes | organization name | `steam memory` |
| description | string | no | organization description | `organization description` |
| createdAt | string | no | creation time | `2022-07-03T03:20:30.000Z` |
| updatedAt | string | no | modification time | `2022-07-03T03:20:30.000Z` |
| departmentId | string | yes | root node ID | `60b49eb83fd80adb96f26e68` |
| openDepartmentId | string | no | root node custom ID | `60b49eb83fd80adb96f26e68` |
| hasChildren | boolean | yes | contains child nodes | `true` |
| leaderUserIds | array | no | department leader ID | `["60b49eb83fd80adb96f26e68"]` |
| membersCount | number | yes | number of department members | `150` |
| isVirtualNode | boolean | yes | whether it is a virtual department| |
| i18n | | No | Multilingual settings Nesting type: <a href="#OrganizationNameI18nDto">OrganizationNameI18nDto</a>. | `{"organizationName":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}}` |
| customData | object | No | Extended field data of department | `{"icon":"https://example.com/logo"}` |
| tenantId | string | No | Tenant ID | `623c20b2a062aaaaf41b17da` |
| postIdList | array | No | Post id list | `["xxx"]` |
| status | string | No | Status | `false` |
| allow | string | No | Access restriction | `["xxx"]` |
### <a id="OrganizationNameI18nDto"></a> OrganizationNameI18nDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------------- | ---- | -------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| organizationName | | Yes | Multi-language-supported field Nested type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}` |

### <a id="LangObject"></a> LangObject

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----- | ---- | -------------------------------------- | ----------------------------------------------------------------- | -------------------------------------- |
| zh-CN | | Yes | Multilingual Chinese content Nested type: <a href="#LangUnit">LangUnit</a>. | `{"enabled":false,"value":"中文"}` |
| en-US | | Yes | Multilingual English content Nested type: <a href="#LangUnit">LangUnit</a>. | `{"enabled":false,"value":"English"}` |
| zh-TW | | Yes | Multilingual Traditional Chinese content Nesting type: <a href="#LangUnit">LangUnit</a>. | `{"enabled":false,"value":"繁體中文"}` |
| ja-JP | | Yes | Multilingual Japanese content Nesting type: <a href="#LangUnit">LangUnit</a>. | `{"enabled":false,"value":"日本語"}` |

### <a id="LangUnit"></a> LangUnit

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------- | -------------------------------------- | ------------------------------------------------------------------ | ------------------------------------- |
| enabled | boolean | yes | Whether it is enabled. If enabled, and the console selects this language, the content will be displayed. (Default is off) | |
| value | string | yes | Multilingual content | |
````
