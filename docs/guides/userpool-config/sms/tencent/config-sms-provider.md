You can configure [Tencent Cloud SMS Service](https://cloud.tencent.com/login?s_url=https%3A%2F%2Fconsole.cloud.tencent.com%2Fsmsv2) in the console's **Settings->Message Service**:

> For the official documentation of Tencent Cloud SMS Service, please see [Tencent Cloud SMS Service: API Reference](https://cloud.tencent.com/login?s_url=https%3A%2F%2Fconsole.cloud.tencent.com%2Fsmsv2).

- **SecretId**, **SecretKey**: query "https://console.cloud.tencent.com/cam/capi".

- **SecretID**: used to identify the API caller. ​

- **SecretKey**: This key is used to encrypt the signature string and verify the signature string on the server side.

- **SmsSdkAppId**: SMS application ID, which is the actual **SmsSdkAppId** generated after adding the application in the "SMS Console", such as "1400006666". </br>You can go to the [SMS Console](https://console.cloud.tencent.com/smsv2/app-manage) to view the **Application ID**​.

- **SMS Signature Content**: Use UTF-8 encoding, and must fill in the approved signature. </br>You can go to the **Signature Management** of [Domestic SMS](https://console.cloud.tencent.com/smsv2/csms-sign) or [International / Hong Kong, Macao and Taiwan SMS](https://console.cloud.tencent.com/smsv2/isms-sign) to view the signature information.

- **Template ID**: Must fill in the approved template ID. </br>You can go to **Text Template Management** of [Domestic SMS](https://console.cloud.tencent.com/smsv2/csms-template) or [International/Hong Kong, Macao and Taiwan SMS](https://console.cloud.tencent.com/smsv2/isms-template) to view the template ID.