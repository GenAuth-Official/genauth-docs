# Get the list of email templates

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the list of email templates

## Method Name

`ManagementClient.getEmailTemplates`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.GetEmailTemplatesRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetEmailTemplatesTest {
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

        GetEmailTemplatesRespDto response = client.getEmailTemplates();
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `GetEmailTemplatesRespDto`

| Name       | Type                                                             | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                           | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                           | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                           | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#GetEmailTemplatesDataDto">GetEmailTemplatesDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "templates": {
      "customizeEnabled": true,
      "type": "WELCOME_EMAIL",
      "name": "Welcome Email",
      "subject": "Welcome to {{app_name}}",
      "sender": "{{client_name}}",
      "content": "xxx",
      "expiresIn": 300,
      "redirectTo": "https://example.com",
      "tplEngine": "handlebar"
    },
    "categories": {
      "title": "Notification Template",
      "titleEn": "Notification Template",
      "desc": "Support the content of the Welcome Email and First-Created Account Notification",
      "descEn": "We support the content of the Welcome Email and First-Created Account Notification"
    }
  }
}
```

## Data Structure

### <a id="GetEmailTemplatesDataDto"></a> GetEmailTemplatesDataDto

| Name       | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                        | <div style="width:200px">Example Value</div> |
| ---------- | ----- | -------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| templates  | array | yes                                          | Template list Nested Type: <a href="#EmailTemplateDto">EmailTemplateDto</a>.                      |                                              |
| categories | array | yes                                          | Template type list Nested Type: <a href="#EmailTemplateCategoryDto">EmailTemplateCategoryDto</a>. |                                              |

### <a id="EmailTemplateDto"></a> EmailTemplateDto

| Name             | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | <div style="width:200px">Example Value</div> |
| ---------------- | ------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| customizeEnabled | boolean | yes                                          | Enable custom templates                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `true`                                       |
| type             | string  | yes                                          | Template type:<br>- `WELCOME_EMAIL`: Welcome email<br>- `FIRST_CREATED_USER`: First user creation notification<br>- `REGISTER_VERIFY_CODE`: Registration verification code<br>- `LOGIN_VERIFY_CODE`: Login verification code<br>- `MFA_VERIFY_CODE`: MFA verification code<br>- `INFORMATION_COMPLETION_VERIFY_CODE`: Registration information completion verification code<br>- `FIRST_EMAIL_LOGIN_VERIFY`: First email login verification<br>- `CONSOLE_CONDUCTED_VERIFY`: Initiate email verification in the console<br>- `USER_PASSWORD_UPDATE_REMIND`: User expiration reminder<br>- `ADMIN_RESET_USER_PASSWORD_NOTIFICATION`: Administrator successfully resets user password notification<br>- `USER_PASSWORD_RESET_NOTIFICATION`: User password successfully reset notification<br>- `RESET_PASSWORD_VERIFY_CODE`: Reset password verification code<br>- `SELF_UNLOCKING_VERIFY_CODE`: Self-service unlocking verification code<br>- `EMAIL_BIND_VERIFY_CODE`: Binding email verification code<br>- `EMAIL_UNBIND_VERIFY_CODE`: Unbinding email verification code<br> | WELCOME_EMAIL                                |
| name             | string  | Yes                                          | Email templateName                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `Welcome email`                              |
| subject          | string  | Yes                                          | Email subject                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `Welcome to {{app_name}}`                    |
| sender           | string  | Yes                                          | Email senderName                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `{{client_name}}`                            |
| content          | string  | yes                                          | Email content template                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `xxx`                                        |
| expiresIn        | number  | No                                           | Validity period of verification code/email. Only verification emails have validity period.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `300`                                        |
| redirectTo       | string  | No                                           | The address to jump to after completing email verification. Only valid for templates of type `FIRST_EMAIL_LOGIN_VERIFY` and `CONSOLE_CONDUCTED_VERIFY`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `https://example.com`                        |
| tplEngine        | string  | No                                           | Template rendering engine. GenAuth email template currently supports two rendering engines:<br>- `handlebar`: For detailed usage, please see: [handlebars official documentation](https://handlebarsjs.com/)<br>- `ejs`: For detailed usage, please see: [ejs official documentation](https://ejs.co/)<br><br>By default, `handlerbar` will be used as the template rendering engine. <br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | handlebar                                    |

### <a id="EmailTemplateCategoryDto"></a> EmailTemplateCategoryDto

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div>                                         |
| ------- | ------ | -------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------ |
| title   | string | Yes                                          | Category Name                              | `Notification Template`                                                              |
| titleEn | string | Yes                                          | Category English Name                      | `Notification Template`                                                              |
| desc    | string | Yes                                          | Description                                | `Supports the content of the welcome email and the first user creation notification` |
| descEn  | string | Yes                                          | English description                        | `We support the content of the Welcome Email and First-Created Account Notification` |
