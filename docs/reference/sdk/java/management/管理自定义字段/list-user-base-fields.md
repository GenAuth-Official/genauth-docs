# Get the user's built-in field list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get the user's built-in field list

## Method Name

`ManagementClient.listUserBaseFields`

## Request Parameters

| Name          | Type    | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                        | <div style="width:200px">Example Value</div> |
| ------------- | ------- | -------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| dataType      | string  | Yes                                          | -                                           | Field type                                                                                                                                                        | `STRING`                                     |
| targetType    | string  | Yes                                          | -                                           | Target object Type: <br>- `USER`: User<br>- `ROLE`: Role<br>- `GROUP`: Group<br>- `DEPARTMENT`: Department<br> ; This interface does not support grouping (GROUP) | `USER`                                       |
| tenantId      | string  | No                                           | -                                           | Tenant ID                                                                                                                                                         | `xxxx`                                       |
| page          | number  | No                                           | 1                                           | Current page number, starting from 1                                                                                                                              | `1`                                          |
| limit         | number  | No                                           | 10                                          | The maximum number of pages per page cannot exceed 50, and the default value is 10                                                                                | `10`                                         |
| userVisible   | boolean | No                                           | -                                           | User Yes No Visible                                                                                                                                               |                                              |
| adminVisible  | boolean | No                                           | -                                           | Administrator Yes No Visible                                                                                                                                      |                                              |
| accessControl | boolean | No                                           | -                                           | Access control                                                                                                                                                    |                                              |
| keyword       | string  | No                                           | -                                           | Search keyword                                                                                                                                                    |                                              |
| lang          | string  | No                                           | -                                           | Search language                                                                                                                                                   |                                              |

## Request Response

Type： `ListCistomFieldsResDto`

| Name       | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                 | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                 | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#ListCustomFieldsDto">ListCustomFieldsDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "count": {
      "all": 18,
      "userVisible": 1,
      "adminVisible": 1
    },
    "list": {
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
      "options": "[{\"value\":\"pku\",\"label\":\"xxx\"}]"
    }
  }
}
```

## Data Structure

### <a id="ListCustomFieldsDto"></a> ListCustomFieldsDto

| Name  | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                          | <div style="width:200px">Example Value</div>  |
| ----- | ---- | -------------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------- | --- | ---- | ----- | --- | ------------------------------------------------------------------------ | --- |
| count |      | Yes                                          | Paging count Nested Type: <a href="#CountCustomFieldsDto">CountCustomFieldsDto</a>. | `{"all":18,"userVisible":1,"adminVisible":1}` |     | list | array | Yes | Response data nested type: <a href="#CustomFieldDto">CustomFieldDto</a>. |     |

### <a id="CountCustomFieldsDto"></a> CountCustomFieldsDto

| Name | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- | --- | ----------- | ------ | --- | ----- | --- | --- | ------------ | ------ | --- | ----- | --- |
| all  | number | Yes                                          | Total number of records                    | `100`                                        |     | userVisible | number | Yes | count |     |     | adminVisible | number | Yes | count |     |

### <a id="CustomFieldDto"></a> CustomFieldDto

| Name                  | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                            | <div style="width:200px">Example Value</div>                                                                                                    |
| --------------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| targetType            | string  | Yes                                          | Target object Type: <br>- `USER`: User<br>- `ROLE`: Role<br>- `GROUP`: Group<br>- `DEPARTMENT`: Department<br>                                                                                                                                                                                                                        | USER                                                                                                                                            |
| createdAt             | string  | No                                           | Creation time, only valid for custom fields, built-in fields do not have creation time.                                                                                                                                                                                                                                               | `2022-03-17T05:23:01.567Z`                                                                                                                      |
| dataType              | string  | Yes                                          | Data type, **cannot be modified after setting**. <br>- `STRING`: String type<br>- `NUMBER`: Number type<br>- `DATETIME`: Date type<br>- `BOOLEAN`: Boolean type<br>- `ENUM`: Enumeration value type<br>                                                                                                                               | STRING                                                                                                                                          |
| key                   | string  | Yes                                          | Field key, cannot conflict with the key of built-in fields, **cannot be modified after setting**.                                                                                                                                                                                                                                     | `school`                                                                                                                                        |
| label                 | string  | Yes                                          | Display Name                                                                                                                                                                                                                                                                                                                          | `school`                                                                                                                                        |
| description           | string  | No                                           | Detailed description                                                                                                                                                                                                                                                                                                                  | `school`                                                                                                                                        |
| encrypted             | boolean | No                                           | Yes No Encrypted storage. When enabled, the **newly added data** of this field will be encrypted. Once this parameter is set, it cannot be changed.                                                                                                                                                                                   |                                                                                                                                                 |
| isUnique              | boolean | Yes                                          | Yes No It is a unique field. When enabled, the value reported by the current field will be uniquely verified. This parameter is only valid for fields with data types of strings and numbers.                                                                                                                                         |                                                                                                                                                 |
| userEditable          | boolean | No                                           | User Yes No Editable. If Yes is a special field such as mobile phone number and email address, the user cannot modify it directly and needs to verify it first through verification code or other methods.                                                                                                                            |                                                                                                                                                 |
| visibleInAdminConsole | boolean | Yes                                          | Yes No Need to be displayed in the GenAuth console: <br>- If Yes is a user-defined field, control Yes No to be displayed in user detail; <br>- If Yes is a department-defined field, control Yes No to be displayed in department detail; <br>- If Yes is a role-extension field, control Yes No to be displayed in role detail. <br> | `true`                                                                                                                                          |
| visibleInUserCenter   | boolean | No                                           | Yes No Displayed in the user's personal center (this parameter does not control the API interface Yes No return).                                                                                                                                                                                                                     | `true`                                                                                                                                          |
| i18n                  |         | No                                           | Multi-language display Name Nested Type: <a href="#CustomFieldI18n">CustomFieldI18n</a>.                                                                                                                                                                                                                                              | `{"label":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"},"zh-TW":{"enabled":false,"value":"繁體中文"}}}` |
| options               | array   | No                                           | Enumeration value type selection Nested Type: <a href="#CustomFieldSelectOption">CustomFieldSelectOption</a>.                                                                                                                                                                                                                         | `[{"value":"pku","label":"Beijing University"}]`                                                                                                |

### <a id="CustomFieldI18n"></a> CustomFieldI18n

| Name  | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                       | <div style="width:200px">Example Value</div>                                                                                                                                     |
| ----- | ---- | -------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label |      | Yes                                          | Support multi-language fields Nested Type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"},"zh-TW":{"enabled":false,"value":"繁體中文"},"ja-JP":{"enabled":false,"value":"日本語"}}` |

### <a id="LangObject"></a> LangObject

| Name  | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                              | <div style="width:200px">Example Value</div> |
| ----- | ---- | -------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------- |
| zh-CN |      | Yes                                          | Multilingual Chinese content Nested Type: <a href="#LangUnit">LangUnit</a>.             | `{"enabled":false,"value":"中文"}`           |
| en-US |      | Yes                                          | Multilingual English content Nested Type: <a href="#LangUnit">LangUnit</a>.             | `{"enabled":false,"value":"English"}`        |
| zh-TW |      | Yes                                          | Multilingual Traditional Chinese content Nested Type: <a href="#LangUnit">LangUnit</a>. | `{"enabled":false,"value":"繁體中文"}`       |
| ja-JP |      | Yes                                          | Multilingual Japanese content Nested Type: <a href="#LangUnit">LangUnit</a>.            | `{"enabled":false,"value":"日本語"}`         |

### <a id="LangUnit"></a> LangUnit

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                          | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| enabled | boolean | Yes                                          | Yes No Enabled. If enabled, and the console selects this language, this content will be displayed. (Off by default) |                                              |
| value   | string  | Yes                                          | Multilingual content                                                                                                |                                              |

### <a id="CustomFieldSelectOption"></a> CustomFieldSelectOption

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div>    |
| ----- | ------ | -------------------------------------------- | ------------------------------------------ | ----------------------------------------------- |
| value | string | Yes                                          | enumeration value value                    | `hust`                                          |
| label | string | Yes                                          | enumeration value label                    | `Huazhong University of Science and Technology` |
