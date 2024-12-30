# Modify user built-in field configuration

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Modify user built-in field configuration. Built-in fields are not allowed to modify data types and uniqueness.

## Method name

`ManagementClient.setUserBaseFields`

## Request parameters

| Name | Type                                                     | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | -------------------------------------------------------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| list | <a href="#SetUserBaseFieldDto">SetUserBaseFieldDto[]</a> | Yes                                    | -                                           | Custom field list Array length limit: 50.  |                                             |

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
const result = await managementClient.setUserBaseFields({
list: [
{
key: "school",
label: "学校",
description: "学校",
userEditable: false,
visibleInAdminConsole: true,
visibleInUserCenter: true,
i18n: {
label: {
"zh-CN": {
enabled: false,
value: "中文",
},
"en-US": {
enabled: false,
value: "英文",
},
"zh-TW": {
enabled: false,
value: "繁體",
},
"ja-JP": {
enabled: false,
value: "日本文",
},
},
},
],
});

console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `CustomFieldListRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string | description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | array  | response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "targetType": "USER",
    "createdAt": "2022-03-17T05:23:01.567Z",
    "dataType": "ENUM",
    "key": "school",
    "label": "School",
    "description": "School",
    "visibleInAdminConsole": true,
    "visibleInUserCenter": true,
    "i18n": {
      "label": {
        "zh-CN": {
          "enabled": false,
          "value": "Chinese"
        },
        "en-US": {
          "enabled": false,
          "value": "English"
        },
        "zh-TW": {
          "enabled": false,
          "value": "繁體中文"
        }
      }
    },
    "options": "[{\"value\":\"pku\",\"label\":\"Peking University\"}]"
  }
}
```

## Data structure

### <a id="SetUserBaseFieldDto"></a> SetUserBaseFieldDto

| Name                  | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                       | <div style="width:200px">Sample value</div>                                                                                                     |
| --------------------- | ------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| key                   | string  | Yes                                           | Field key, cannot conflict with the key of built-in fields, **cannot be modified after setting**.                                                                                                                                                                                                                | `school`                                                                                                                                        |
| label                 | string  | no                                            | Display name                                                                                                                                                                                                                                                                                                     | `school`                                                                                                                                        |
| description           | string  | no                                            | Detailed description                                                                                                                                                                                                                                                                                             | `school`                                                                                                                                        |
| userEditable          | boolean | no                                            | Editable by user                                                                                                                                                                                                                                                                                                 |                                                                                                                                                 |
| visibleInAdminConsole | boolean | no                                            | Whether to display in the GenAuth console: <br>- If it is a user-defined field, control whether to display in user details; <br>- If it is a department-defined field, control whether to display in department details; <br>- If it is a role extension field, control whether to display in role details. <br> | `true`                                                                                                                                          |
| visibleInUserCenter   | boolean | no                                            | Whether to display in the user's personal center (this parameter does not control whether the API interface is returned).                                                                                                                                                                                        | `true`                                                                                                                                          |
| i18n                  |         | no                                            | Multi-language display name Nested type: <a href="#CustomFieldI18n">CustomFieldI18n</a>.                                                                                                                                                                                                                         | `{"label":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"},"zh-TW":{"enabled":false,"value":"繁體中文"}}}` |

### <a id="CustomFieldI18n"></a> CustomFieldI18n

| Name  | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                  | <div style="width:200px">Sample value</div>                                                                                                                                      |
| ----- | ---- | --------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label |      | Yes                                           | Fields that support multiple languages ​​Nested type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"},"zh-TW":{"enabled":false,"value":"繁體中文"},"ja-JP":{"enabled":false,"value":"日本語"}}` |

### <a id="LangObject"></a> LangObject

| Name  | Type | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                               | <div style="width:200px">Sample value</div>       |
| ----- | ---- | -------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------- |
| zh-CN |      | Yes                                    | Multilingual Chinese content Nested type: <a href="#LangUnit">LangUnit</a>.              | `{"enabled":false,"value":"中文"}`                |
| en-US |      | Yes                                    | Multilingual English content Nested type: <a href="#LangUnit">LangUnit</a>.              | `{"enabled":false,"value":"English"}`             |
| zh-TW |      | Yes                                    | Multilingual Traditional Chinese content Nesting type: <a href="#LangUnit">LangUnit</a>. | `{"enabled":false,"value":"Traditional Chinese"}` |
| ja-JP |      | Yes                                    | Multilingual Japanese content Nested type: <a href="#LangUnit">LangUnit</a>.             | `{"enabled":false,"value":"日本语"}`              |

### <a id="LangUnit"></a> LangUnit

| Name    | Type    | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                     | <div style="width:200px">Example value</div> |
| ------- | ------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| enabled | boolean | Yes                                    | Whether it is enabled. If enabled and the language is selected in the console, the content will be displayed. (off by default) |                                              |
| value   | string  | yes                                    | multilingual content                                                                                                           |                                              |

### <a id="CustomFieldDto"></a> CustomFieldDto

| Name                  | Type    | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                | <div style="width:200px">Example value</div>                                                                                                    |
| --------------------- | ------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| targetType            | string  | yes                                    | Target object type:<br>- `USER`: user<br>- `ROLE`: role<br>- `GROUP`: group<br>- `DEPARTMENT`: department<br>                                                                                                                                                                                                                                             | USER                                                                                                                                            |
| createdAt             | string  | No                                     | Creation time, only valid for custom fields, built-in fields have no creation time.                                                                                                                                                                                                                                                                       | `2022-03-17T05:23:01.567Z`                                                                                                                      |
| dataType              | string  | Yes                                    | data type, **cannot be modified after setting**. <br>- `STRING`: string type<br>- `NUMBER`: numeric type<br>- `DATETIME`: date type<br>- `BOOLEAN`: boolean type<br>- `ENUM`: enum Value type<br>                                                                                                                                                         | STRING                                                                                                                                          |
| key                   | string  | is the                                 | field key and cannot conflict with the key of the built-in field. **It cannot be modified after it is set**.                                                                                                                                                                                                                                              | `school`                                                                                                                                        |
| label                 | string  | yes                                    | display name                                                                                                                                                                                                                                                                                                                                              | `school`                                                                                                                                        |
| description           | string  | No                                     | Detailed description information                                                                                                                                                                                                                                                                                                                          | `school`                                                                                                                                        |
| encrypted             | boolean | No                                     | Whether to encrypt storage. When turned on, the **new data** in this field will be encrypted. Once this parameter is set, it cannot be changed.                                                                                                                                                                                                           |                                                                                                                                                 |
| isUnique              | boolean | Yes                                    | Whether it is a unique field. After turning it on, the value reported by the current field will be uniquely verified. This parameter is only valid for fields whose data type is string and number.                                                                                                                                                       |                                                                                                                                                 |
| userEditable          | boolean | no                                     | Whether the user can edit it. If it is a special field such as mobile phone number or email address, the user cannot modify it directly and needs to verify it first through verification code or other methods.                                                                                                                                          |                                                                                                                                                 |
| visibleInAdminConsole | boolean | yes                                    | Whether it needs to be displayed in the GenAuth console: <br>- If it is a user-defined field, control whether it is displayed in the user details; <br>- If it is a department-defined field, control whether it is displayed in the department details; <br>- If it is a role extension field, control whether it is displayed in the role details. <br> | `true`                                                                                                                                          |
| visibleInUserCenter   | boolean | no                                     | Whether to display it in the user's personal center (this parameter does not control whether the API interface is returned).                                                                                                                                                                                                                              | `true`                                                                                                                                          |
| i18n                  |         | no                                     | Multilingual display name Nested type: <a href="#CustomFieldI18n">CustomFieldI18n</a>.                                                                                                                                                                                                                                                                    | `{"label":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"},"zh-TW":{"enabled":false,"value":"繁體中文"}}}` |
| options               | array   | No                                     | Enumeration value type selection Nested type: <a href="#CustomFieldSelectOption">CustomFieldSelectOption</a>.                                                                                                                                                                                                                                             | `[{"value":"pku","label":"Peking University"}]`                                                                                                 |

### <a id="CustomFieldI18n"></a> CustomFieldI18n

| Name  | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                  | <div style="width:200px">Sample value</div>                                                                                                                                      |
| ----- | ---- | --------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label |      | Yes                                           | Fields that support multiple languages ​​Nested type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"},"zh-TW":{"enabled":false,"value":"繁體中文"},"ja-JP":{"enabled":false,"value":"日本語"}}` |

### <a id="LangObject"></a> LangObject

| Name  | Type | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                               | <div style="width:200px">Sample value</div> |
| ----- | ---- | -------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------- |
| zh-CN |      | Yes                                    | Multilingual Chinese content Nested type: <a href="#LangUnit">LangUnit</a>.              | `{"enabled":false,"value":"中文"}`          |
| en-US |      | Yes                                    | Multilingual English content Nesting type: <a href="#LangUnit">LangUnit</a>.             | `{"enabled":false,"value":"English"}`       |
| zh-TW |      | Yes                                    | Multilingual Traditional Chinese content Nesting type: <a href="#LangUnit">LangUnit</a>. | `{"enabled":false,"value":"繁體中文"}`      |
| ja-JP |      | Yes                                    | Multilingual Japanese content Nesting type: <a href="#LangUnit">LangUnit</a>.            | `{"enabled":false,"value":"日本語"}`        |

### <a id="LangUnit"></a> LangUnit

| Name    | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                           | <div style="width:200px">Sample value</div> |
| ------- | ------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| enabled | boolean | yes                                           | Is it enabled? If enabled, and the console selects this language, the content will be displayed. (Closed by default) |                                             |
| value   | string  | yes                                           | Multilingual content                                                                                                 |                                             |

### <a id="CustomFieldSelectOption"></a> CustomFieldSelectOption

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div>     |
| ----- | ------ | -------------------------------------------- | ------------------------------------------ | ----------------------------------------------- |
| value | string | yes                                          | enumeration value value                    | `hust`                                          |
| label | string | yes                                          | enumeration value label                    | `Huazhong University of Science and Technology` |
