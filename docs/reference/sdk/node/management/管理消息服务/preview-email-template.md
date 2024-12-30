# Preview email template

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Preview email template

## Method name

`ManagementClient.previewEmailTemplate`

## Request parameters

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| --------- | ------ | -------------------------------------- | ------------------------------------ | ------------------------- ... `REGISTER_VERIFY_CODE`: Registration verification code<br>- `LOGIN_VERIFY_CODE`: Login verification code<br>- `MFA_VERIFY_CODE`: MFA verification code<br>- `INFORMATION_COMPLETION_VERIFY_CODE`: Registration information completion verification code<br>- `FIRST_EMAIL_LOGIN_VERIFY`: First email login verification<br>- `CONSOLE_CONDUCTED_VERIFY`: Initiate email verification in the console<br>- `USER_PASSWORD_UPDATE_REMIND`: User expiration reminder<br>- `ADMIN_RESET_USER_PASSWORD_NOTIFICATION`: Administrator successfully reset user password notification<br>- `USER_PASSWORD_RESET_NOTIFICATION`: User password reset successful notification<br>- `RESET_PASSWORD_VERIFY_CODE`: Reset password verification code<br>- `SELF_UNLOCKING_VERIFY_CODE`: Self-service unlocking verification code<br>- `EMAIL_BIND_VERIFY_CODE`: Binding email verification code<br>- `EMAIL_UNBIND_VERIFY_CODE`: Unbinding email verification code<br> | `WELCOME_EMAIL` |
| content | string | No | - | Email content template, optional, if not passed, the default email template configured in the user pool will be used for rendering. | `xxx` |
| subject | string | No | - | Email subject, optional, if not passed, the default email template configured in the user pool will be used for rendering. | `Welcome to {{app_name}}` |
| sender | string | No | - | Email sender name, optional, if not passed, the default email template configured in the user pool will be used for rendering.| `{{client_name}}` |
| expiresIn | number | No | - | Validity period of verification code/email. Only verification emails have validity period. Optional. If not passed, the email template configured in the user pool will be used for rendering by default. | `300` |
| tplEngine | string | No | handlebar | Template rendering engine. GenAuth email template currently supports two rendering engines:<br>- `handlebar`: For detailed usage, please see: [handlebars official documentation](https://handlebarsjs.com/)<br>- `ejs`: For detailed usage, please see: [ejs official documentation](https://ejs.co/)<br><br>By default, `handlerbar` will be used as the template rendering engine. <br> | `handlebar` |

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
  const result = await managementClient.previewEmailTemplate({
    type: Models.PreviewEmailTemplateDto.type.WELCOME_EMAIL,
    content: "xxx",
    subject: "Welcome to {{app_name}}",
    sender: "{{client_name}}",
    expiresIn: 300,
    tplEngine: Models.PreviewEmailTemplateDto.tplEngine.HANDLEBAR,
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `PreviewEmailTemplateRespDto`

| Name | Type                                                                   | Description   |
| ---- | ---------------------------------------------------------------------- | ------------- |
| data | <a href="#PreviewEmailTemplateDataDto">PreviewEmailTemplateDataDto</a> | Response data |

Sample result:

```json
{
  "data": {
    "content": "xxx",
    "subject": "Welcome to GenAuth",
    "sender": "test@example.com"
  }
}
```

## Data structure

### <a id="PreviewEmailTemplateDataDto"></a> PreviewEmailTemplateDataDto

| Name    | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>   | <div style="width:200px">Sample value</div> |
| ------- | ------ | --------------------------------------------- | -------------------------------------------- | ------------------------------------------- |
| content | string | Yes                                           | Previewed email body content, in html format | `xxx`                                       |
| subject | string | Yes                                           | Previewed email subject content              | `Welcome to GenAuth`                        |
| sender  | string | Yes                                           | Previewed email sender content               | `test@example.com`                          |
