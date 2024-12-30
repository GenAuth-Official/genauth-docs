# Preview email template

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Preview email template

## Method Name

`ManagementClient.previewEmailTemplate`

## Request Parameters

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | <div style="width:200px">Example Value</div> |
| --------- | ------ | -------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| type      | string | yes                                          | -                                           | Template type:<br>- `WELCOME_EMAIL`: Welcome email<br>- `FIRST_CREATED_USER`: First created user notification<br>- `REGISTER_VERIFY_CODE`: Registration verification code<br>- `LOGIN_VERIFY_CODE`: Login verification code<br>- `MFA_VERIFY_CODE`: MFA verification code<br>- `INFORMATION_COMPLETION_VERIFY_CODE`: Registration information completion verification code<br>- `FIRST_EMAIL_LOGIN_VERIFY`: First email login verification<br>- `CONSOLE_CONDUCTED_VERIFY`: Initiate email verification in the console<br>- `USER_PASSWORD_UPDATE_REMIND`: User expiration reminder<br>- `ADMIN_RESET_USER_PASSWORD_NOTIFICATION`: Notification of successful password reset by administrator<br>- `USER_PASSWORD_RESET_NOTIFICATION`: Notification of successful password reset by user<br>- `RESET_PASSWORD_VERIFY_CODE`: Verification code for password reset<br>- `SELF_UNLOCKING_VERIFY_CODE`: Verification code for self-unlocking<br>- `EMAIL_BIND_VERIFY_CODE`: Verification code for binding email<br>- `EMAIL_UNBIND_VERIFY_CODE`: Verification code for unbinding email<br> | `WELCOME_EMAIL`                              |
| content   | string | No                                           | -                                           | Email content template, optional. If not passed, the default email template configured in the user pool will be used for rendering.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `xxx`                                        |
| subject   | string | No                                           | -                                           | Email subject, optional. If not passed, the default email template configured in the user pool will be used for rendering.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `Welcome to {{app_name}}`                    |
| sender    | string | No                                           | -                                           | Email sender Name, optional. If not passed, the email template configured in the user pool will be used for rendering by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `{{client_name}}`                            |
| expiresIn | number | No                                           | -                                           | Verification code/email validity period. Only verification emails have validity period. Optional. If not passed, the email template configured in the user pool will be used for rendering by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `300`                                        |
| tplEngine | string | No                                           | handlebar                                   | Template rendering engine. GenAuth email template currently supports two rendering engines:<br>- `handlebar`: For detailed usage, please see: [handlebars official documentation](https://handlebarsjs.com/)<br>- `ejs`: For detailed usage, please see: [ejs official documentation](https://ejs.co/)<br><br>By default, `handlerbar` will be used as the template rendering engine. <br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `handlebar`                                  |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.PreviewEmailTemplateDto;
import cn.authing.sdk.java.dto.PreviewEmailTemplateRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class PreviewEmailTemplateTest {
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

        PreviewEmailTemplateDto reqDto = new PreviewEmailTemplateDto();
        reqDto.setSender("sender");
        reqDto.setType(PreviewEmailTemplateDto.Type.WELCOME_EMAIL);

        PreviewEmailTemplateRespDto response = client.previewEmailTemplate(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `PreviewEmailTemplateRespDto`

| Name | Type                                                                   | Description   |
| ---- | ---------------------------------------------------------------------- | ------------- |
| data | <a href="#PreviewEmailTemplateDataDto">PreviewEmailTemplateDataDto</a> | Response data |

Example Results：

```json
{
  "data": {
    "content": "xxx",
    "subject": "Welcome to GenAuth",
    "sender": "test@example.com"
  }
}
```

## Data Structure

### <a id="PreviewEmailTemplateDataDto"></a> PreviewEmailTemplateDataDto

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>   | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| content | string | yes                                          | Previewed email body content, in html format | `xxx`                                        |
| subject | string | yes                                          | Previewed email subject content              | `Welcome to GenAuth`                         |
| sender  | string | yes                                          | Previewed email sender content               | `test@example.com`                           |
