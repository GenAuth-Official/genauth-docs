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

`ManagementClient.set_user_base_fields`

## Request parameters

| Name | Type                                                     | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | -------------------------------------------------------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| list | <a href="#SetUserBaseFieldDto">SetUserBaseFieldDto[]</a> | Yes                                    | -                                           | Custom field list Array length limit: 50.  |                                             |

## Request Response

Type: `CustomFieldListRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | array  | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
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
          "value": "中文"
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
    "options": "[{\"value\":\"pku\",\"label\":\"xxxxx\"}]"
  }
}
```

## Data Structure

### <a id="SetUserBaseFieldDto"></a> SetUserBaseFieldDto

| Name                  | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                       | <div style="width:200px">Sample value</div>                                                                                                     |
| --------------------- | ------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| key                   | string  | Yes                                           | Field key. Cannot conflict with the key of built-in fields. **Cannot be modified after setting**.                                                                                                                                                                                                                | `school`                                                                                                                                        |
| label                 | string  | no                                            | Display name                                                                                                                                                                                                                                                                                                     | `school`                                                                                                                                        |
| description           | string  | no                                            | Detailed description                                                                                                                                                                                                                                                                                             | `school`                                                                                                                                        |
| userEditable          | boolean | no                                            | Editable by user                                                                                                                                                                                                                                                                                                 |                                                                                                                                                 |
| visibleInAdminConsole | boolean | no                                            | Whether to display in the GenAuth console: <br>- If it is a user-defined field, control whether to display in user details; <br>- If it is a department-defined field, control whether to display in department details; <br>- If it is a role extension field, control whether to display in role details. <br> | `true`                                                                                                                                          |
| visibleInUserCenter   | boolean | no                                            | Whether to display in the user's personal center (this parameter does not control whether the API interface is returned).                                                                                                                                                                                        | `true`                                                                                                                                          |
| i18n                  |         | no                                            | Multi-language display name Nested type: <a href="#CustomFieldI18n">CustomFieldI18n</a>.                                                                                                                                                                                                                         | `{"label":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"},"zh-TW":{"enabled":false,"value":"繁體中文"}}}` |

### <a id="CustomFieldI18n"></a> CustomFieldI18n

| Name  | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                      | <div style="width:200px">Sample value</div>                                                                                                                                      |
| ----- | ---- | --------------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label |      | Yes                                           | Multi-language support field Nested type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"},"zh-TW":{"enabled":false,"value":"繁體中文"},"ja-JP":{"enabled":false,"value":"日本語"}}` |

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
| value   | string  | Yes                                           | Multilingual content                                                                                                 |                                             |

### <a id="CustomFieldDto"></a> CustomFieldDto

| Name                  | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                | <div style="width:200px">Sample value</div>                                                                                                     |
| --------------------- | ------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| targetType            | string  | Yes                                           | Target object type: <br>- `USER`: User<br>- `ROLE`: Role<br>- `GROUP`: Group<br>- `DEPARTMENT`: Department<br>                                                                                                                                                                                                                                            | USER                                                                                                                                            |
| createdAt             | string  | No                                            | Creation time, only valid for custom fields, built-in fields do not have creation time.                                                                                                                                                                                                                                                                   | `2022-03-17T05:23:01.567Z`                                                                                                                      |
| dataType              | string  | Yes                                           | Data type, **cannot be modified after setting**. <br>- `STRING`: string type<br>- `NUMBER`: number type<br>- `DATETIME`: date type<br>- `BOOLEAN`: Boolean type<br>- `ENUM`: enumeration value type<br>                                                                                                                                                   | STRING                                                                                                                                          |
| key                   | string  | Yes                                           | Field key, cannot conflict with the key of built-in fields, **cannot be modified after setting**.                                                                                                                                                                                                                                                         | `school`                                                                                                                                        |
| label                 | string  | yes                                           | Display name                                                                                                                                                                                                                                                                                                                                              | `school`                                                                                                                                        |
| description           | string  | no                                            | Detailed description                                                                                                                                                                                                                                                                                                                                      | `school`                                                                                                                                        |
| encrypted             | boolean | no                                            | Whether to store encrypted data. When enabled, the **newly added data** of this field will be encrypted. Once this parameter is set, it cannot be changed.                                                                                                                                                                                                |                                                                                                                                                 |
| isUnique              | boolean | yes                                           | Whether it is a unique field. When enabled, the value reported by the current field will be uniquely verified. This parameter is only valid for fields with data types of strings and numbers.                                                                                                                                                            |                                                                                                                                                 |
| userEditable          | boolean | no                                            | Whether the user can edit it. If it is a special field such as mobile phone number or email address, the user cannot modify it directly and needs to verify it first through verification code or other methods.                                                                                                                                          |                                                                                                                                                 |
| visibleInAdminConsole | boolean | yes                                           | Whether it needs to be displayed in the GenAuth console: <br>- If it is a user-defined field, control whether it is displayed in the user details; <br>- If it is a department-defined field, control whether it is displayed in the department details; <br>- If it is a role extension field, control whether it is displayed in the role details. <br> | `true`                                                                                                                                          |
| visibleInUserCenter   | boolean | No                                            | Whether to display in the user's personal center (this parameter does not control whether the API interface is returned).                                                                                                                                                                                                                                 | `true`                                                                                                                                          |
| i18n                  |         | No                                            | Multi-language display name Nested type: <a href="#CustomFieldI18n">CustomFieldI18n</a>.                                                                                                                                                                                                                                                                  | `{"label":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"},"zh-TW":{"enabled":false,"value":"繁體中文"}}}` |
| options               | array   | No                                            | Enumeration value type selection Nested type: <a href="#CustomFieldSelectOption">CustomFieldSelectOption</a>.                                                                                                                                                                                                                                             | `[{"value":"pku","label":"xxxxx"}]`                                                                                                             |

### <a id="CustomFieldI18n"></a> CustomFieldI18n

| Name  | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                  | <div style="width:200px">Sample value</div>                                                                                                                                      |
| ----- | ---- | --------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label |      | yes                                           | Field that supports multiple languages ​​Nested type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"},"zh-TW":{"enabled":false,"value":"繁體中文"},"ja-JP":{"enabled":false,"value":"日本語"}}` |

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
| value   | string  | Yes                                           | Multilingual content                                                                                                 |                                             |

### <a id="CustomFieldSelectOption"></a> CustomFieldSelectOption

| Name  | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div>     |
| ----- | ------ | --------------------------------------------- | ------------------------------------------ | ----------------------------------------------- |
| value | string | Yes                                           | Enumeration value value                    | `hust`                                          |
| label | string | Yes                                           | Enumeration value label                    | `Huazhong University of Science and Technology` |
