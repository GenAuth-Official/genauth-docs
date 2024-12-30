# Modify the email template

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Modify email template

## Method name

`ManagementClient.updateEmailTemplate`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------------- | ------- | -------------------------------------- | ------------------------------------ | ------------------------- ... Email subject | `Welcome to {{app_name}}` |
| name | string | yes | - | Email template name| `Welcome email` |
| customizeEnabled | boolean | yes | - | Whether to enable custom templates | `true` |
| type | string | yes | - | Template type:<br>- `WELCOME_EMAIL`: Welcome email<br>- `FIRST_CREATED_USER`: First created user notification<br>- `REGISTER_VERIFY_CODE`: Registration verification code<br>- `LOGIN_VERIFY_CODE`: Login verification code<br>- `MFA_VERIFY_CODE`: MFA verification code<br>- `INFORMATION_COMPLETION_VERIFY_CODE`: Registration information completion verification code<br>- `FIRST_EMAIL_LOGIN_VERIFY`: First email login verification<br>- `CONSOLE_CONDUCTED_VERIFY`: Initiate email verification in the console<br>- `USER_PASSWORD_UPDATE_REMIND`: User expiration reminder<br>- `ADMIN_RESET_USER_PASSWORD_NOTIFICATION`: Administrator reset user password success notification<br>- `USER_PASSWORD_RESET_NOTIFICATION`: User password reset success notification<br>- `RESET_PASSWORD_VERIFY_CODE`: Reset password verification code<br>- `SELF_UNLOCKING_VERIFY_CODE`: Self-service unlocking verification code<br>- `EMAIL_BIND_VERIFY_CODE`: Binding email verification code<br>- `EMAIL_UNBIND_VERIFY_CODE`: Unbinding email verification code<br> | `WELCOME_EMAIL` |
| expiresIn | number | No | - | Verification code/email validity period, only verification emails have validity period. | `300` |
| redirectTo | string | No | - | The address to jump to after completing email verification. Only valid for templates of type `FIRST_EMAIL_LOGIN_VERIFY` and `CONSOLE_CONDUCTED_VERIFY`. | `https://example.com` |
| tplEngine | string | No | handlebar | Template rendering engine. GenAuth email template currently supports two rendering engines:<br>- `handlebar`: For detailed usage, please refer to: [handlebars official documentation](https://handlebarsjs.com/)<br>- `ejs`: For detailed usage, please refer to: [ejs official documentation](https://ejs.co/)<br><br>By default, `handlerbar` will be used as the template rendering engine. <br> | `handlebar` |

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
  const result = await managementClient.updateEmailTemplate({
    type: Models.UpdateEmailTemplateDto.type.WELCOME_EMAIL,
    customizeEnabled: true,
    name: "Welcome Email",
    subject: "Welcome to {{app_name}}",
    sender: "{{client_name}}",
    content: "xxx",
    expiresIn: 300,
    redirectTo: "https://example.com",
    tplEngine: Models.UpdateEmailTemplateDto.tplEngine.HANDLEBAR,
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `EmailTemplateSingleItemRespDto`

| Name       | Type                                             | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                           | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                           | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                           | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#EmailTemplateDto">EmailTemplateDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "customizeEnabled": true,
    "type": "WELCOME_EMAIL",
    "name": "Welcome email",
    "subject": "Welcome to {{app_name}}",
    "sender": "{{client_name}}",
    "content": "xxx",
    "expiresIn": 300,
    "redirectTo": "https://example.com",
    "tplEngine": "handlebar"
  }
}
```

## Data structure

### <a id="EmailTemplateDto"></a> EmailTemplateDto

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------------- | ------- | -------------------------------------- | ------------------------- ...---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| customizeEnabled | boolean | yes | Whether to enable custom templates | `true` |
| type | string | yes | Template type:<br>- `WELCOME_EMAIL`: Welcome email<br>- `FIRST_CREATED_USER`: First created user notification<br>- `REGISTER_VERIFY_CODE`: Registration verification code<br>- `LOGIN_VERIFY_CODE`: Login verification code<br>- `MFA_VERIFY_CODE`: MFA verification code<br>- `INFORMATION_COMPLETION_VERIFY_CODE`: Registration information completion verification code<br>- `FIRST_EMAIL_LOGIN_VERIFY`: First email login verification<br>- `CONSOLE_CONDUCTED_VERIFY`: Initiate email verification in the console<br>- `USER_PASSWORD_UPDATE_REMIND`: User expiration reminder<br>- `ADMIN_RESET_USER_PASSWORD_NOTIFICATION`: Administrator reset user password success notification<br>- `USER_PASSWORD_RESET_NOTIFICATION`: User password reset success notification<br>- `RESET_PASSWORD_VERIFY_CODE`: Reset password verification code<br>- `SELF_UNLOCKING_VERIFY_CODE`: Self-service unlocking verification code<br>- `EMAIL_BIND_VERIFY_CODE`: Binding email verification code<br>- `EMAIL_UNBIND_VERIFY_CODE`: Unbinding email verification code<br> | WELCOME_EMAIL |
| name | string | Yes | Email template name | `Welcome email` |
| subject | string | Yes | Email subject | `Welcome to {{app_name}}` |
| sender | string | yes | Email sender name | `{{client_name}}` |
| content | string | yes | Email content template| `xxx` |
| expiresIn | number | No | Validity period of verification code/email. Only verification emails have validity period. | `300` |
| redirectTo | string | No | The address to jump to after completing email verification. Only valid for templates of type `FIRST_EMAIL_LOGIN_VERIFY` and `CONSOLE_CONDUCTED_VERIFY`. | `https://example.com` |
| tplEngine | string | No | Template rendering engine. GenAuth email template currently supports two rendering engines:<br>- `handlebar`: For detailed usage, please see: [handlebars official documentation](https://handlebarsjs.com/)<br>- `ejs`: For detailed usage, please see: [ejs official documentation](https://ejs.co/)<br><br>By default, `handlerbar` will be used as the template rendering engine. <br> | handlebar |
