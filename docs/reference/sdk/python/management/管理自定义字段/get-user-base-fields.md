# Get the user's built-in field list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Get the user's built-in field list

## Method name

`ManagementClient.get_user_base_fields`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

## Request Response

Type: `CustomFieldListRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string | description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | array  | Response data                                                                                                                                                                                                                                                                                                                                  |

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

### <a id="CustomFieldDto"></a> CustomFieldDto

| Name                  | Type    | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                | <div style="width:200px">Sample value</div>                                                                                                     |
| --------------------- | ------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| targetType            | string  | yes                                                   | Target object type:<br>- `USER`: user<br>- `ROLE`: role<br>- `GROUP`: group<br>- `DEPARTMENT`: department<br>                                                                                                                                                                                                                                             | USER                                                                                                                                            |
| createdAt             | string  | no                                                    | Creation time, only valid for custom fields, built-in fields do not have creation time.                                                                                                                                                                                                                                                                   | `2022-03-17T05:23:01.567Z`                                                                                                                      |
| dataType              | string  | yes                                                   | Data type, **cannot be modified after setting**. <br>- `STRING`: string type<br>- `NUMBER`: number type<br>- `DATETIME`: date type<br>- `BOOLEAN`: Boolean type<br>- `ENUM`: enumeration value type<br>                                                                                                                                                   | STRING                                                                                                                                          |
| key                   | string  | yes                                                   | field key, cannot conflict with the key of built-in fields, **cannot be modified after setting**.                                                                                                                                                                                                                                                         | `school`                                                                                                                                        |
| label                 | string  | yes                                                   | display name                                                                                                                                                                                                                                                                                                                                              | `school`                                                                                                                                        |
| description           | string  | no                                                    | detailed description information                                                                                                                                                                                                                                                                                                                          | `school`                                                                                                                                        |
| encrypted             | boolean | no                                                    | whether to store encrypted. After enabling, **newly added data** of this field will be encrypted, and this parameter cannot be changed once set.                                                                                                                                                                                                          |                                                                                                                                                 |
| isUnique              | boolean | yes                                                   | whether it is a unique field. After enabling, the value reported by the current field will be uniquely verified. This parameter is only valid for fields with data types of strings and numbers.                                                                                                                                                          |                                                                                                                                                 |
| userEditable          | boolean | no                                                    | Whether the user can edit it. If it is a special field such as mobile phone number or email address, the user cannot modify it directly and needs to verify it first through verification code or other methods.                                                                                                                                          |                                                                                                                                                 |
| visibleInAdminConsole | boolean | yes                                                   | Whether it needs to be displayed in the GenAuth console: <br>- If it is a user-defined field, control whether it is displayed in the user details; <br>- If it is a department-defined field, control whether it is displayed in the department details; <br>- If it is a role extension field, control whether it is displayed in the role details. <br> | `true`                                                                                                                                          |
| visibleInUserCenter   | boolean | no                                                    | Whether to display in the user's personal center (this parameter does not control whether the API interface is returned).                                                                                                                                                                                                                                 | `true`                                                                                                                                          |
| i18n                  |         | no                                                    | Multi-language display name Nested type: <a href="#CustomFieldI18n">CustomFieldI18n</a>.                                                                                                                                                                                                                                                                  | `{"label":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"},"zh-TW":{"enabled":false,"value":"繁體中文"}}}` |
| options               | array   | no                                                    | Enumeration value type selection Nested type: <a href="#CustomFieldSelectOption">CustomFieldSelectOption</a>.                                                                                                                                                                                                                                             | `[{"value":"pku","label":"xxxxx"}]`                                                                                                             |

### <a id="CustomFieldI18n"></a> CustomFieldI18n

| Name  | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                      | <div style="width:200px">Sample value</div>                                                                                                                                      |
| ----- | ---- | --------------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label |      | Yes                                           | Multi-language support field Nested type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"},"zh-TW":{"enabled":false,"value":"繁體中文"},"ja-JP":{"enabled":false,"value":"日本語"}}` |

### <a id="LangObject"></a> LangObject

| Name  | Type | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                              | <div style="width:200px">Sample value</div> |
| ----- | ---- | -------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------- |
| zh-CN |      | Yes                                    | Multilingual Chinese content Nested type: <a href="#LangUnit">LangUnit</a>.             | `{"enabled":false,"value":"中文"}`          |
| en-US |      | Yes                                    | Multilingual English content Nested type: <a href="#LangUnit">LangUnit</a>.             | `{"enabled":false,"value":"English"}`       |
| zh-TW |      | Yes                                    | Multilingual Traditional Chinese content Nested type: <a href="#LangUnit">LangUnit</a>. | `{"enabled":false,"value":"繁體中文"}`      |
| ja-JP |      | Yes                                    | Multilingual Japanese content Nested type: <a href="#LangUnit">LangUnit</a>.            | `{"enabled":false,"value":"日本語"}`        |

### <a id="LangUnit"></a> LangUnit

| Name    | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                   | <div style="width:200px">Sample value</div> |
| ------- | ------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| enabled | boolean | yes                                           | Whether it is enabled. If enabled, and the console selects this language, the content will be displayed. (Closed by default) |                                             |
| value   | string  | Yes                                           | Multilingual content                                                                                                         |                                             |

### <a id="CustomFieldSelectOption"></a> CustomFieldSelectOption

| Name  | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div>     |
| ----- | ------ | --------------------------------------------- | ------------------------------------------ | ----------------------------------------------- |
| value | string | Yes                                           | Enumeration value value                    | `hust`                                          |
| label | string | Yes                                           | Enumeration value label                    | `Huazhong University of Science and Technology` |
