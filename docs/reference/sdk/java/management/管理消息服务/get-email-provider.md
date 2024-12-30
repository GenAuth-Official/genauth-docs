# Get third-party email service configuration

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get third-party email service configuration

## Method Name

`ManagementClient.getEmailProvider`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.EmailProviderRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetEmailProviderTest {
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

        EmailProviderRespDto response = client.getEmailProvider();
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `EmailProviderRespDto`

| Name       | Type                                             | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                           | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                           | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                           | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#EmailProviderDto">EmailProviderDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

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

### <a id="EmailProviderDto"></a> EmailProviderDto

| Name                | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                          | <div style="width:200px">Example Value</div> |
| ------------------- | ------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| enabled             | boolean | yes                                          | Whether to enable. If not enabled, the built-in mail service of GenAuth will be used by default                                                                                                                                                                                                     | `true`                                       |
| type                | string  | no                                           | Third-party mail service provider type:<br>- `custom`: Custom SMTP mail service<br>- `ali`: [Ali Enterprise Mailbox](https://www.ali-exmail.cn/Land/)<br>- `qq`: [Tencent Enterprise Mailbox](https://work.weixin.qq.com/mail/)<br>- `sendgrid`: [SendGrid Mail Service](https://sendgrid.com/)<br> | ali                                          |
| smtpConfig          |         | no                                           | SMTP mail service configuration Nested Type: <a href="#SMTPEmailProviderConfig">SMTPEmailProviderConfig</a>.                                                                                                                                                                                        |                                              |
| sendGridConfig      |         | No                                           | SendGrid email service configuration Nested Type: <a href="#SendGridEmailProviderConfig">SendGridEmailProviderConfig</a>.                                                                                                                                                                           |                                              |
| aliExmailConfig     |         | No                                           | Ali enterprise email service configuration Nested Type: <a href="#AliExmailEmailProviderConfig">AliExmailEmailProviderConfig</a>.                                                                                                                                                                   |                                              |
| tencentExmailConfig |         | No                                           | Tencent enterprise email service configuration Nested Type：<a href="#TencentExmailEmailProviderConfig">TencentExmailEmailProviderConfig</a>。                                                                                                                                                      |                                              |

### <a id="SMTPEmailProviderConfig"></a> SMTPEmailProviderConfig

| Name       | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| smtp_host  | string  | yes                                          | SMTP address                               | `smtp.example.com`                           |
| smtp_port  | number  | yes                                          | SMTP port                                  | `465`                                        |
| sender     | string  | yes                                          | Username                                   | `test`                                       |
| senderPass | string  | yes                                          | Password                                   | `passw0rd`                                   |
| secure     | boolean | yes                                          | Whether to enable SSL                      | `true`                                       |

### <a id="SendGridEmailProviderConfig"></a> SendGridEmailProviderConfig

| Name   | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                               | <div style="width:200px">Example Value</div> |
| ------ | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| sender | string | yes                                          | username                                                                                                                 | `test`                                       |
| apikey | string | yes                                          | SendGrid API Key, see [SendGrid documentation] for details(https://docs.sendgrid.com/ui/account-and-settings/api-keys)。 | `xxxxxxxxxx`                                 |

### <a id="AliExmailEmailProviderConfig"></a> AliExmailEmailProviderConfig

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| sender     | string | yes                                          | username                                   | `test`                                       |
| senderPass | string | yes                                          | password                                   | `passw0rd`                                   |

### <a id="TencentExmailEmailProviderConfig"></a> TencentExmailEmailProviderConfig

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| sender     | string | yes                                          | username                                   | `test`                                       |
| senderPass | string | yes                                          | password                                   | `passw0rd`                                   |
