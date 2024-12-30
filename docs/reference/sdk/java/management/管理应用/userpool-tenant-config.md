# Get user pool tenant configuration information

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get user pool multi-tenant configuration information based on user pool ID

## Method Name

`ManagementClient.userpollTenantConfig`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

## Request Response

Type： `UserPoolTenantConfigDtoRespDto`

| Name       | Type                                                           | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                         | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                         | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| data       | <a href="#UserPoolTenantConfigDto">UserPoolTenantConfigDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {
    "userPoolId": "62b40xxxxxxxxxxxd16f57c7",
    "isUserPoolAsTenant": true,
    "enableSwitchType": "[\"tenant-app\",\"tenant-console\",\"tenant-launpad\"]",
    "guardVersion": "v2",
    "ssoPageCustomizationSettings": {
      "hideIdp": true,
      "hideForgetPassword": true,
      "autoRegisterThenLogin": true,
      "hideSocialLogin": true,
      "hideLoginByPhoneCode": true,
      "hideRegister": true,
      "hideUserPasswordLogin": true,
      "hideWxMpScanLogin": true,
      "hideRegisterByPhone": true,
      "hideRegisterByEmail": true
    },
    "loginConfig": {
      "enabledBasicLoginMethods": "[\"EMAIL_CODE\",\"EMAIL_PASSWORD\"]",
      "defaultLoginMethod": {
        "connectionType": "QRCODE",
        "qrcodeExtIdpConnId": "6303a2bf2xxxxx7f665f01bf1"
      },
      "enabledExtIdpConns": "[\"6303a2bf2xxxx7f665f01bf1\",\"6321397b6xxxx1b8481ccfc0\"]"
    }
  }
}
```

## Data Structure

### <a id="UserPoolTenantConfigDto"></a> UserPoolTenantConfigDto

| Name                         | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                      | <div style="width:200px">Example Value</div>                                                                                                                                                                                                                 |
| ---------------------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userPoolId                   | string  | Yes                                          | UserPool ID                                                                                                                     | `62b40xxxxxxxxxxxd16f57c7`                                                                                                                                                                                                                                   |
| isUserPoolAsTenant           | boolean | Yes                                          | User pool Yes No As tenant                                                                                                      | `true`                                                                                                                                                                                                                                                       |
| enableSwitchType             | string  | Yes                                          | Type of allowed switching                                                                                                       | tenant-console                                                                                                                                                                                                                                               |
| css                          | string  | Yes                                          | Custom CSS                                                                                                                      |                                                                                                                                                                                                                                                              |
| cssEnabled                   | boolean | Yes                                          | Yes No Enable custom CSS                                                                                                        |                                                                                                                                                                                                                                                              |
| customLoading                | string  | Yes                                          | Custom Loading                                                                                                                  |                                                                                                                                                                                                                                                              |
| enableGuardVersionSwitch     | boolean | Yes                                          | Yes No Enable Guard switching                                                                                                   |                                                                                                                                                                                                                                                              |
| guardVersion                 | string  | Yes                                          | Guard version                                                                                                                   | `v2`                                                                                                                                                                                                                                                         |
| loadingBackground            | string  | Yes                                          | Custom loading background                                                                                                       |                                                                                                                                                                                                                                                              |
| enableCreateTenant           | boolean | Yes                                          | Yes No Allow tenant creation                                                                                                    |                                                                                                                                                                                                                                                              |
| createTenantScenes           | array   | Yes                                          | Allow tenant creation scenes                                                                                                    |                                                                                                                                                                                                                                                              |
| enableJoinTenant             | boolean | Yes                                          | Yes No Allow tenant joining                                                                                                     |                                                                                                                                                                                                                                                              |
| joinTenantScenes             | array   | Yes                                          | Allow tenant creation scenes                                                                                                    |                                                                                                                                                                                                                                                              |
| enableVerifyDomain           | boolean | Yes                                          | Yes No Verify enterprise domain name                                                                                            |                                                                                                                                                                                                                                                              |
| verifyDomainScenes           | array   | Yes                                          | Verify the scenario of the enterprise domain name                                                                               |                                                                                                                                                                                                                                                              |
| ssoPageCustomizationSettings |         | Yes                                          | Page customization configuration Nested Type: <a href="#ISsoPageCustomizationSettingsDto">ISsoPageCustomizationSettingsDto</a>. | `{"hideIdp":true,"hideForgetPassword":true,"autoRegisterThenLogin":true,"hideSocialLogin":true,"hideLoginByPhoneCode":true,"hideRegister":true,"hideUserPasswordLogin":true,"hideWxMpScanLogin":true,"hideRegisterByPhone":true,"hideRegisterByEmail":true}` |
| enableMultipleTenantPortal   | boolean | Yes                                          | Yes No Allow selection of portal login                                                                                          |                                                                                                                                                                                                                                                              |
| loginConfig                  |         | Yes                                          | Login configuration Nested Type: <a href="#ApplicationLoginConfigDto">ApplicationLoginConfigDto</a>.                            |                                                                                                                                                                                                                                                              |

### <a id="ISsoPageCustomizationSettingsDto"></a> ISsoPageCustomizationSettingsDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

### <a id="ApplicationLoginConfigDto"></a> ApplicationLoginConfigDto

| Name                      | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                              | <div style="width:200px">Example Value</div>                                   |
| ------------------------- | ------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| mergeLoginAndRegisterPage | boolean | Yes                                          | Yes No Enable login and registration merge                                                                                                                                              |                                                                                |
| enabledBasicLoginMethods  | array   | Yes                                          | Enabled basic login method                                                                                                                                                              | `["EMAIL_CODE","EMAIL_PASSWORD"]`                                              |
| defaultLoginMethod        |         | Yes                                          | Application default login method (excluding social login and enterprise identity source login) Nested Type: <a href="#ApplicationDefaultLoginMethod">ApplicationDefaultLoginMethod</a>. | `{"connectionType":"QRCODE","qrcodeExtIdpConnId":"6303a2bf2xxxxx7f665f01bf1"}` |
| enabledExtIdpConns        | array   | Yes                                          | Enabled external identity source connection Nested Type: <a href="#ApplicationEnabledExtIdpConnDto">ApplicationEnabledExtIdpConnDto</a>.                                                | `["6303a2bf2xxxx7f665f01bf1","6321397b6xxxx1b8481ccfc0"]`                      |
| showAuthorizationPage     | boolean | Yes                                          | Yes No Display user authorization page                                                                                                                                                  |                                                                                |

### <a id="ApplicationDefaultLoginMethod"></a> ApplicationDefaultLoginMethod

| Name               | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | <div style="width:200px">Example Value</div> |
| ------------------ | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| connectionType     | string | Yes                                          | Default login type<br> - `PASSWORD`: Password type, depends on the basic login method you enable, supports mobile phone number/email/user name + password for login<br> - `PASSCODE`: Verification code type, depends on the basic login method you enable, supports mobile phone number/email + verification code for login<br> - `QRCODE`: Scan code login type, currently includes three types: scan code login for self-built APP, scan code login for WeChat public account, and scan code login for WeChat mini program<br> | PASSCODE                                     |
| qrcodeType         | string | Yes                                          | When `connectionType` is `QRCODE`, this parameter indicates the QR code type. <br>- `SELF_BUILT_APP`: Scan the QR code of self-built APP<br>- `WECHAT_OFFICIAL_ACCOUNT`: Scan the QR code to follow the WeChat official account to log in<br>- `WECHAT_MINI_PROGRAM`: Scan the QR code to log in to the WeChat mini program<br>                                                                                                                                                                                                   | SELF_BUILT_APP                               |
| qrcodeExtIdpConnId | string | Yes                                          | When `connectionType` is `QRCODE`, you need to specify the ID of the specific scan code login identity source connection through this parameter.                                                                                                                                                                                                                                                                                                                                                                                  | `6303a2bf2xxxxx7f665f01bf1`                  |
| adExtIdpConnId     | string | Yes                                          | When `connectionType` is `AD`, you need to specify the ID of the specific AD identity source connection through this parameter.                                                                                                                                                                                                                                                                                                                                                                                                   | `6303a2bf2xxxxx7f665f01bf1`                  |
| ldapExtIdpConnId   | string | Yes                                          | When `connectionType` is `LDAP`, you need to specify the ID of the specific LDAP identity source connection through this parameter.                                                                                                                                                                                                                                                                                                                                                                                               | `6303a2bf2xxxxx7f665f01bf1`                  |

### <a id="ApplicationEnabledExtIdpConnDto"></a> ApplicationEnabledExtIdpConnDto

| Name                  | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>      | <div style="width:200px">Example Value</div>                                    |
| --------------------- | ------- | -------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------- |
| isSocial              | boolean | Yes                                          | Yes No Social login identity source connection  | `true`                                                                          |
| extIdpId              | string  | Yes                                          | Identity source ID                              | `6303a2bf2xxxxx7f665f01bf1`                                                     |
| extIdpType            | string  | Yes                                          | Identity source type                            | oidc                                                                            |
| extIdpConnId          | string  | Yes                                          | Identity source connection ID                   | `6303a2bf2xxxxx7f665f01bf1`                                                     |
| extIdpConnType        | string  | Yes                                          | Identity source connection type                 | oidc                                                                            |
| extIdpConnIdentifier  | string  | Yes                                          | Identity source connection readable unique flag | `6303a2bf2xxxxx7f665f01bf1`                                                     |
| extIdpConnDisplayName | string  | Yes                                          | WeChat                                          | `6303a2bf2xxxxx7f665f01bf1`                                                     |
| extIdpConnLogo        | string  | Yes                                          | Identity source connection Logo                 | `https://files.authing.co/authing-console/social-connections/wechatBrowser.svg` |
| enabled               | boolean | No                                           | Yes No Allow identity source connection         |                                                                                 |
