# Modify the user's built-in field configuration

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the document description is incorrect, please refer to the V3 API.

Modify the user's built-in field configuration. The built-in field does not allow modification of data type and uniqueness.

## Method Name

`ManagementClient.setUserBaseFields`

## Request Parameters

| Name | Type                                                     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | -------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| list | <a href="#SetUserBaseFieldDto">SetUserBaseFieldDto[]</a> | Yes                                          | -                                           | Custom field list array length limit: 50.  |                                              |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CustomFieldListRespDto;
import cn.authing.sdk.java.dto.SetUserBaseFieldDto;
import cn.authing.sdk.java.dto.SetUserBaseFieldsReqDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

import java.util.ArrayList;
import java.util.List;

public class SetUserBaseFieldsTest {
    // Need to be replaced with your GenAuth Access Key ID
    private static final String ACCESS_KEY_ID = "AUTHING_ACCESS_KEY_ID";
    // Need to be replaced with your GenAuth Access Key Secret
    private static final String ACCESS_KEY_SECRET = "AUTHING_ACCESS_KEY_SECRET";

    public static void main(String[] args) throws Throwable {
        ManagementClientOptions clientOptions = new ManagementClientOptions();
        clientOptions.setAccessKeyId(ACCESS_KEY_ID);
        clientOptions.setAccessKeySecret(ACCESS_KEY_SECRET);
        // If you are a private deployment customer, you need to set the GenAuth service domain name
        // clientOptions.setHost("https://api.your-authing-service.com");

        ManagementClient client = new ManagementClient(clientOptions);

        SetUserBaseFieldsReqDto reqDto = new SetUserBaseFieldsReqDto();
        List<SetUserBaseFieldDto> list = new ArrayList<>();
        SetUserBaseFieldDto fieldDto = new SetUserBaseFieldDto();
        fieldDto.setKey("key");
        list.add(fieldDto);
        reqDto.setList(list);
        CustomFieldListRespDto response = client.setUserBaseFields(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `CustomFieldListRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | array  | Response data                                                                                                                                                                                                                                                                                                                                  |

Example Results：

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
```

## Data Structure

### <a id="SetUserBaseFieldDto"></a> SetUserBaseFieldDto

| Name                  | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                           | <div style="width:200px">Example Value</div>                                                                                                    |
| --------------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| key                   | string  | Yes                                          | Field key, cannot conflict with the key of built-in fields, **cannot be modified after setting**.                                                                                                                                                                                                                                    | `school`                                                                                                                                        |
| label                 | string  | No                                           | Display Name                                                                                                                                                                                                                                                                                                                         | `school`                                                                                                                                        |
| description           | string  | No                                           | Detailed description                                                                                                                                                                                                                                                                                                                 | `school`                                                                                                                                        |
| userEditable          | boolean | No                                           | User Yes No Editable                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                 |
| visibleInAdminConsole | boolean | No                                           | Yes No Need to be displayed in the GenAuth console: <br>- If Yes is a user-defined field, control Yes No to be displayed in user detail; <br>- If Yes is a department-defined field, control Yes No to be displayed in department detail; <br>- If Yes is a role-extended field, control Yes No to be displayed in role detail. <br> | `true`                                                                                                                                          |
| visibleInUserCenter   | boolean | No                                           | Yes No Displayed in the user's personal center (this parameter does not control the API interface Yes No return).                                                                                                                                                                                                                    | `true`                                                                                                                                          |
| i18n                  |         | No                                           | Multi-language display Name nested Type: <a href="#CustomFieldI18n">CustomFieldI18n</a>.                                                                                                                                                                                                                                             | `{"label":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"},"zh-TW":{"enabled":false,"value":"繁體中文"}}}` |

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

### <a id="CustomFieldDto"></a> CustomFieldDto

| Name                  | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                            | <div style="width:200px">Example Value</div>                                                                                                    |
| --------------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| targetType            | string  | Yes                                          | Target object Type:<br>- `USER`: user<br>- `ROLE`: role<br>- `GROUP`: group<br>- `DEPARTMENT`: department<br>                                                                                                                                                                                                                         | USER                                                                                                                                            |
| createdAt             | string  | No                                           | Creation time, only valid for custom fields, built-in fields do not have creation time.                                                                                                                                                                                                                                               | `2022-03-17T05:23:01.567Z`                                                                                                                      |
| dataType              | string  | Yes                                          | Data type, **cannot be modified after setting**. <br>- `STRING`: string type<br>- `NUMBER`: number type<br>- `DATETIME`: date type<br>- `BOOLEAN`: Boolean type<br>- `ENUM`: enumeration value type<br>                                                                                                                               | STRING                                                                                                                                          |
| key                   | string  | Yes                                          | Field key, cannot conflict with the key of built-in fields, **cannot be modified after setting**.                                                                                                                                                                                                                                     | `school`                                                                                                                                        |
| label                 | string  | Yes                                          | Display Name                                                                                                                                                                                                                                                                                                                          | `school`                                                                                                                                        |
| description           | string  | No                                           | Detailed description                                                                                                                                                                                                                                                                                                                  | `school`                                                                                                                                        |
| encrypted             | boolean | No                                           | Yes No Encrypted storage. After turning it on, the **newly added data** in this field will be encrypted. Once this parameter is set, it cannot be changed.                                                                                                                                                                            |                                                                                                                                                 |
| isUnique              | boolean | Yes                                          | Yes No It is a unique field. After it is turned on, the value reported by the current field will be uniquely verified. This parameter is only valid for fields with data types of strings and numbers.                                                                                                                                |                                                                                                                                                 |
| userEditable          | boolean | No                                           | User Yes No Editable. If Yes is a special field such as mobile phone number and email address, the user cannot modify it directly and needs to verify it through verification code or other methods first.                                                                                                                            |                                                                                                                                                 |
| visibleInAdminConsole | boolean | Yes                                          | Yes No Need to be displayed in the GenAuth console: <br>- If Yes is a user-defined field, control Yes No to be displayed in user detail; <br>- If Yes is a department-defined field, control Yes No to be displayed in department detail; <br>- If Yes is a role extension field, control Yes No to be displayed in role detail. <br> | `true`                                                                                                                                          |
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

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                        | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| enabled | boolean | Yes                                          | Yes No Enabled. If enabled and the console selects this language, the content will be displayed. (Off by default) |                                              |
| value   | string  | Yes                                          | Multilingual content                                                                                              |                                              |

### <a id="CustomFieldSelectOption"></a> CustomFieldSelectOption

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div>    |
| ----- | ------ | -------------------------------------------- | ------------------------------------------ | ----------------------------------------------- |
| value | string | Yes                                          | enumeration value value                    | `hust`                                          |
| label | string | Yes                                          | enumeration value label                    | `Huazhong University of Science and Technology` |
