# Configure third-party email service

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Configure third-party email service

## Method name

`AuthenticationClient.configEmailProvider`

## Request parameters

| Name                | Type                                                                                       | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                           | <div style="width:200px">Sample value</div> |
| ------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| type                | string                                                                                     | Yes                                          | -                                           | Third-party email service provider type:<br>- `custom`: Custom SMTP Mail service<br>- `ali`: [Ali Enterprise Mailbox](https://www.ali-exmail.cn/Land/)<br>- `qq`: [Tencent Enterprise Mailbox](https://work.weixin.qq.com/mail/)<br>- `sendgrid`: [SendGrid Mail Service](https://sendgrid.com/)<br> | `custom`                                    |
| enabled             | boolean                                                                                    | yes                                          | -                                           | Whether to enable. If not enabled, the built-in mail service of GenAuth will be used by default                                                                                                                                                                                                      | `true`                                      |
| smtpConfig          | <a href="#SMTPEmailProviderConfigInput">SMTPEmailProviderConfigInput</a>                   | no                                           | -                                           | SMTP mail service configuration                                                                                                                                                                                                                                                                      |                                             |
| sendGridConfig      | <a href="#SendGridEmailProviderConfigInput">SendGridEmailProviderConfigInput</a>           | no                                           | -                                           | SendGrid mail service configuration                                                                                                                                                                                                                                                                  |                                             |
| aliExmailConfig     | <a href="#AliExmailEmailProviderConfigInput">AliExmailEmailProviderConfigInput</a>         | No                                           | -                                           | Ali Enterprise Email Service Configuration                                                                                                                                                                                                                                                           |                                             |
| tencentExmailConfig | <a href="#TencentExmailEmailProviderConfigInput">TencentExmailEmailProviderConfigInput</a> | No                                           | -                                           | Tencent Enterprise Email Service Configuration                                                                                                                                                                                                                                                       |                                             |

## Sample Code

```ts
import { ManagementClient, Models } from "@genauth/nodejs";

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
  const result = await managementClient.configEmailProvider({
    enabled: true,
    type: Models.ConfigEmailProviderDto.type.CUSTOM,
    smtpConfig: {
      smtpHost: "smtp.example.com",
      smtpPort: 465,
      sender: "test",
      senderPass: "passw0rd",
      secure: true,
    },
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request Response

Type: `EmailProviderRespDto`

| Name       | Type                                             | Description                                                                                                  |
| ---------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                           | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                           | Description                                                                                                  |
| apiCode    | number                                           | Segment error code, which can be used to get the specific error type.                                        |
| requestId  | string                                           | Request ID. It will be returned when the request fails.                                                      |
| data       | <a href="#EmailProviderDto">EmailProviderDto</a> | Response data                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
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

| Name       | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| smtp_host  | string  | Yes                                           | SMTP address                               | `smtp.example.com`                          |
| smtp_port  | number  | Yes                                           | SMTP port                                  | `465`                                       |
| sender     | string  | No                                            | Username                                   | `test`                                      |
| senderPass | string  | yes                                           | password                                   | `passw0rd`                                  |
| secure     | boolean | no                                            | whether to enable SSL                      | `true`                                      |

### <a id="SendGridEmailProviderConfigInput"></a> SendGridEmailProviderConfigInput

| name   | type   | <div style="width:80px">is it required</div> | <div style="width:300px">description</div>                                                                                  | <div style="width:200px">example value</div> |
| ------ | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| sender | string | yes                                          | username                                                                                                                    | `test`                                       |
| apikey | string | yes                                          | SendGrid API Key, see the [SendGrid documentation](https://docs.sendgrid.com/ui/account-and-settings/api-keys) for details. | `xxxxxxxxxx`                                 |

### <a id="AliExmailEmailProviderConfigInput"></a> AliExmailEmailProviderConfigInput

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| sender     | string | Yes                                          | Username                                   | `test`                                      |
| senderPass | string | Yes                                          | Password                                   | `passw0rd`                                  |

### <a id="TencentExmailEmailProviderConfigInput"></a> TencentExmailEmailProviderConfigInput

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| sender     | string | yes                                          | Username                                   | `test`                                      |
| senderPass | string | yes                                          | Password                                   | `passw0rd`                                  |

### <a id="EmailProviderDto"></a> EmailProviderDto

| Name                | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                          | <div style="width:200px">Sample value</div> |
| ------------------- | ------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| enabled             | boolean | yes                                          | Whether to enable. If not enabled, the built-in mail service of GenAuth will be used by default                                                                                                                                                                                                     | `true`                                      |
| type                | string  | no                                           | Third-party mail service provider type:<br>- `custom`: Custom SMTP mail service<br>- `ali`: [Ali Enterprise Mailbox](https://www.ali-exmail.cn/Land/)<br>- `qq`: [Tencent Enterprise Mailbox](https://work.weixin.qq.com/mail/)<br>- `sendgrid`: [SendGrid Mail Service](https://sendgrid.com/)<br> | ali                                         |
| smtpConfig          |         | no                                           | SMTP mail service configuration Nested type: <a href="#SMTPEmailProviderConfig">SMTPEmailProviderConfig</a>.                                                                                                                                                                                        |                                             |
| sendGridConfig      |         | No                                           | SendGrid email service configuration Nested type: <a href="#SendGridEmailProviderConfig">SendGridEmailProviderConfig</a>.                                                                                                                                                                           |                                             |
| aliExmailConfig     |         | No                                           | Ali enterprise email service configuration Nested type: <a href="#AliExmailEmailProviderConfig">AliExmailEmailProviderConfig</a>.                                                                                                                                                                   |                                             |
| tencentExmailConfig |         | No                                           | Tencent enterprise email service configuration Nested type: <a href="#TencentExmailEmailProviderConfig">TencentExmailEmailProviderConfig</a>.                                                                                                                                                       |                                             |

### <a id="SMTPEmailProviderConfig"></a> SMTPEmailProviderConfig

| Name       | Type    | <div style="width:80px">Required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------- | -------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| smtp_host  | string  | yes                                    | SMTP address                               | `smtp.example.com`                          |
| smtp_port  | number  | yes                                    | SMTP port                                  | `465`                                       |
| sender     | string  | yes                                    | Username                                   | `test`                                      |
| senderPass | string  | yes                                    | Password                                   | `passw0rd`                                  |
| secure     | boolean | yes                                    | Enable SSL                                 | `true`                                      |

### <a id="SendGridEmailProviderConfig"></a> SendGridEmailProviderConfig

| Name   | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                  | <div style="width:200px">Sample value</div> |
| ------ | ------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| sender | string | Yes                                    | Username                                                                                                                    | `test`                                      |
| apikey | string | Yes                                    | SendGrid API Key, see the [SendGrid documentation](https://docs.sendgrid.com/ui/account-and-settings/api-keys) for details. | `xxxxxxxxxx`                                |

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
