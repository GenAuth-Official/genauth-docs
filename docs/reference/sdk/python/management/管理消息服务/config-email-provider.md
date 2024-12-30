# Configure third-party email service

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Configure third-party email service

## Method name

`ManagementClient.config_email_provider`

## Request parameters

| Name                | Type                                                                                       | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                            | <div style="width:200px">Sample value</div> |
| ------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| type                | string                                                                                     | Yes                                    | -                                           | Third-party email service provider type:<br>- `custom`: Custom SMTP email service<br>- `ali`: [Ali Enterprise Mailbox](https://www.ali-exmail.cn/Land/)<br>- `qq`: [Tencent Enterprise Mailbox](https://work.weixin.qq.com/mail/)<br>- `sendgrid`: [SendGrid Mail Service](https://sendgrid.com/)<br> | `custom`                                    |
| enabled             | boolean                                                                                    | yes                                    | -                                           | Whether to enable. If not enabled, the built-in mail service of GenAuth will be used by default                                                                                                                                                                                                       | `true`                                      |
| smtpConfig          | <a href="#SMTPEmailProviderConfigInput">SMTPEmailProviderConfigInput</a>                   | no                                     | -                                           | SMTP mail service configuration                                                                                                                                                                                                                                                                       |                                             |
| sendGridConfig      | <a href="#SendGridEmailProviderConfigInput">SendGridEmailProviderConfigInput</a>           | no                                     | -                                           | SendGrid mail service configuration                                                                                                                                                                                                                                                                   |                                             |
| aliExmailConfig     | <a href="#AliExmailEmailProviderConfigInput">AliExmailEmailProviderConfigInput</a>         | no                                     | -                                           | Ali Enterprise Mail Service Configuration                                                                                                                                                                                                                                                             |                                             |
| tencentExmailConfig | <a href="#TencentExmailEmailProviderConfigInput">TencentExmailEmailProviderConfigInput</a> | No                                     | -                                           | Tencent Enterprise Email Service Configuration                                                                                                                                                                                                                                                        |                                             |

## Request Response

Type: `EmailProviderRespDto`

| Name       | Type                                             | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                           | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                           | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                           | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#EmailProviderDto">EmailProviderDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "enabled": true,
    "type": "custom",
    "smtpConfig": {
      "smtp_host": "smtp.example.com",
      "smtp_port": 465,
      "sender": "test",
      "senderPass": "passw0rd",
      "secure": true
    },
    "sendGridConfig": {
      "sender": "test",
      "apikey": "xxxxxxxxxx"
    },
    "aliExmailConfig": {
      "sender": "test",
      "senderPass": "passw0rd"
    },
    "tencentExmailConfig": {
      "sender": "test",
      "senderPass": "passw0rd"
    }
  }
}
```

## Data Structure

### <a id="SMTPEmailProviderConfigInput"></a> SMTPEmailProviderConfigInput

| Name       | Type    | <div style="width:80px">Required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------- | -------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| smtp_host  | string  | yes                                    | SMTP address                               | `smtp.example.com`                          |
| smtp_port  | number  | yes                                    | SMTP port                                  | `465`                                       |
| sender     | string  | no                                     | Username                                   | `test`                                      |
| senderPass | string  | yes                                    | Password                                   | `passw0rd`                                  |
| secure     | boolean | no                                     | Enable SSL                                 | `true`                                      |

### <a id="SendGridEmailProviderConfigInput"></a> SendGridEmailProviderConfigInput

| Name   | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                  | <div style="width:200px">Sample value</div> |
| ------ | ------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| sender | string | yes                                    | Username                                                                                                                    | `test`                                      |
| apikey | string | yes                                    | SendGrid API Key, see the [SendGrid documentation](https://docs.sendgrid.com/ui/account-and-settings/api-keys) for details. | `xxxxxxxxxx`                                |

### <a id="AliExmailEmailProviderConfigInput"></a> AliExmailEmailProviderConfigInput

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| sender     | string | Yes                                          | Username                                   | `test`                                      |
| senderPass | string | Yes                                          | Password                                   | `passw0rd`                                  |

### <a id="TencentExmailEmailProviderConfigInput"></a> TencentExmailEmailProviderConfigInput

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| sender     | string | yes                                          | username                                   | `test`                                       |
| senderPass | string | yes                                          | password                                   | `passw0rd`                                   |

### <a id="EmailProviderDto"></a> EmailProviderDto

| Name                | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                          | <div style="width:200px">Sample value</div> |
| ------------------- | ------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| enabled             | boolean | yes                                           | Whether to enable. If not enabled, the built-in mail service of GenAuth will be used by default                                                                                                                                                                                                     | `true`                                      |
| type                | string  | no                                            | Third-party mail service provider type:<br>- `custom`: Custom SMTP mail service<br>- `ali`: [Ali Enterprise Mailbox](https://www.ali-exmail.cn/Land/)<br>- `qq`: [Tencent Enterprise Mailbox](https://work.weixin.qq.com/mail/)<br>- `sendgrid`: [SendGrid Mail Service](https://sendgrid.com/)<br> | ali                                         |
| smtpConfig          |         | No                                            | SMTP mail service configuration Nested type: <a href="#SMTPEmailProviderConfig">SMTPEmailProviderConfig</a>.                                                                                                                                                                                        |                                             |
| sendGridConfig      |         | No                                            | SendGrid mail service configuration Nested type: <a href="#SendGridEmailProviderConfig">SendGridEmailProviderConfig</a>.                                                                                                                                                                            |                                             |
| aliExmailConfig     |         | No                                            | Ali enterprise mail service configuration Nested type: <a href="#AliExmailEmailProviderConfig">AliExmailEmailProviderConfig</a>.                                                                                                                                                                    |                                             |
| tencentExmailConfig |         | No                                            | Tencent enterprise mail service configuration Nested type: <a href="#TencentExmailEmailProviderConfig">TencentExmailEmailProviderConfig</a>.                                                                                                                                                        |                                             |

### <a id="SMTPEmailProviderConfig"></a> SMTPEmailProviderConfig

| Name       | Type    | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------- | ----------------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| smtp_host  | string  | Yes                                                   | SMTP address                               | `smtp.example.com`                          |
| smtp_port  | number  | Yes                                                   | SMTP port                                  | `465`                                       |
| sender     | string  | Yes                                                   | Username                                   | `test`                                      |
| senderPass | string  | Yes                                                   | Password                                   | `passw0rd`                                  |
| secure     | boolean | Yes                                                   | Is SSL enabled?                            | `true`                                      |

### <a id="SendGridEmailProviderConfig"></a> SendGridEmailProviderConfig

| Name   | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                  | <div style="width:200px">Sample value</div> |
| ------ | ------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| sender | string | yes                                    | Username                                                                                                                    | `test`                                      |
| apikey | string | yes                                    | SendGrid API Key, see the [SendGrid documentation](https://docs.sendgrid.com/ui/account-and-settings/api-keys) for details. | `xxxxxxxxxx`                                |

### <a id="AliExmailEmailProviderConfig"></a> AliExmailEmailProviderConfig

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| sender     | string | Yes                                           | Username                                   | `test`                                      |
| senderPass | string | Yes                                           | Password                                   | `passw0rd`                                  |

### <a id="TencentExmailEmailProviderConfig"></a> TencentExmailEmailProviderConfig

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| sender     | string | yes                                           | username                                   | `test`                                      |
| senderPass | string | yes                                           | password                                   | `passw0rd`                                  |
