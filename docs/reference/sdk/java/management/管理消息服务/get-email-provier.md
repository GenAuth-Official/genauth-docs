# Get third-party email service configuration

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get third-party email service configuration

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------- | ------------------------------------ | ----------------------------------- | ------------------------------------- |

## Request Response

Type： `EmailProviderDto`

| Name                | Type                                                                             | Description                                                                                                                                                                                                                                               |
| ------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| enabled | boolean | Whether to enable, if not enabled, the built-in mail service of GenAuth will be used by default |
| type | string | Third-party mail service provider type:<br>- `smtp`: Standard SMTP mail service<br>- `ali`: [Ali Enterprise Mailbox](https://www.ali-exmail.cn/Land/)<br>- `tencent`: [Tencent Enterprise Mailbox](https://work.weixin.qq.com/mail/)<br>- `sendgrid`: [SendGrid mail service](https://sendgrid.com/)<br> |
| smtpConfig | <a href="#SMTPEmailProviderConfig">SMTPEmailProviderConfig</a> | SMTP mail service configuration |
| sendGridConfig | <a href="#SendGridEmailProviderConfig">SendGridEmailProviderConfig</a> | SendGrid mail service configuration |
| aliExmailConfig | <a href="#AliExmailEmailProviderConfig">AliExmailEmailProviderConfig</a> | Ali Enterprise Email Service Configuration |
| tencentExmailConfig | <a href="#TencentExmailEmailProviderConfig">TencentExmailEmailProviderConfig</a> | Tencent Enterprise Email Service Configuration                                                                                                                                                                                                                               |

Example Results：

```json
{
  "enabled": true,
  "type": "smtp",
  "smtpConfig": {
    "smtpHost": "smtp.example.com",
    "smtpPort": 465,
    "sender": "test",
    "senderPass": "passw0rd",
    "enableSSL": true
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
```

## Data Structure

### <a id="SMTPEmailProviderConfig"></a> SMTPEmailProviderConfig

| Name       | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---------- | ------- | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| smtpHost | string | yes | SMTP address | `smtp.example.com` |
| smtpPort | number | yes | SMTP port | `465` |
| sender | string | yes | Username | `test` |
| senderPass | string | yes | Password | `passw0rd` |
| enableSSL | boolean | yes | Whether to enable SSL                        | `true`                                |

### <a id="SendGridEmailProviderConfig"></a> SendGridEmailProviderConfig

| Name   | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                      | <div style="width:200px">Example Value</div> |
| ------ | ------ | -------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| sender | string | yes | username | `test` |
| apikey | string | yes | SendGrid API Key, see [SendGrid documentation] for details(https://docs.sendgrid.com/ui/account-and-settings/api-keys)。 | `xxxxxxxxxx`                          |

### <a id="AliExmailEmailProviderConfig"></a> AliExmailEmailProviderConfig

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| sender | string | yes | username | `test` |
| senderPass | string | yes | password                               | `passw0rd`                            |

### <a id="TencentExmailEmailProviderConfig"></a> TencentExmailEmailProviderConfig

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| sender | string | yes | username | `test` |
| senderPass | string | yes | password                               | `passw0rd`                            |
