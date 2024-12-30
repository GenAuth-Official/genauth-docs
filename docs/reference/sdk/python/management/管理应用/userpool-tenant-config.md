# Get user pool tenant configuration information

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Get user pool multi-tenant configuration information based on user pool ID

## Method name

`ManagementClient.userpoll_tenant_config`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

## Request Response

Type: `UserPoolTenantConfigDtoRespDto`

| Name       | Type                                                           | Description                                                                                                                                                                                                                                                                                                                                        |
| ---------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                         | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                       |
| message    | string                                                         | Description                                                                                                                                                                                                                                                                                                                                        |
| apiCode    | number                                                         | Segmented error code, which can be used to get the specific error type (no return for successful requests). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| data       | <a href="#UserPoolTenantConfigDto">UserPoolTenantConfigDto</a> | Response data                                                                                                                                                                                                                                                                                                                                      |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
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

| Name                         | Type    | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>                                                                                      | <div style="width:200px">Sample value</div>                                                                                                                                                                                                                  |
| ---------------------------- | ------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userPoolId                   | string  | yes                                                   | UserPool ID                                                                                                                     | `62b40xxxxxxxxxxxd16f57c7`                                                                                                                                                                                                                                   |
| isUserPoolAsTenant           | boolean | yes                                                   | Whether the user pool is a tenant                                                                                               | `true`                                                                                                                                                                                                                                                       |
| enableSwitchType             | string  | yes                                                   | The type of switch allowed                                                                                                      | tenant-console                                                                                                                                                                                                                                               |
| css                          | string  | yes                                                   | Custom CSS                                                                                                                      |                                                                                                                                                                                                                                                              |
| cssEnabled                   | boolean | yes                                                   | Whether to enable custom CSS                                                                                                    |                                                                                                                                                                                                                                                              |
| customLoading                | string  | yes                                                   | Custom Loading                                                                                                                  |                                                                                                                                                                                                                                                              |
| enableGuardVersionSwitch     | boolean | yes                                                   | Whether to enable Guard switching                                                                                               |                                                                                                                                                                                                                                                              |
| guardVersion                 | string  | yes                                                   | Guard version to use                                                                                                            | `v2`                                                                                                                                                                                                                                                         |
| loadingBackground            | string  | yes                                                   | Custom Loading background                                                                                                       |                                                                                                                                                                                                                                                              |
| enableCreateTenant           | boolean | yes                                                   | Whether to allow tenant creation                                                                                                |                                                                                                                                                                                                                                                              |
| createTenantScenes           | array   | yes                                                   | Allows creation of tenant scenes                                                                                                |                                                                                                                                                                                                                                                              |
| enableJoinTenant             | boolean | yes                                                   | Whether to allow joining tenants                                                                                                |                                                                                                                                                                                                                                                              |
| joinTenantScenes             | array   | yes                                                   | Allows creation of joining scenes                                                                                               |                                                                                                                                                                                                                                                              |
| enableVerifyDomain           | boolean | yes                                                   | Whether to verify the enterprise domain name                                                                                    |                                                                                                                                                                                                                                                              |
| verifyDomainScenes           | array   | yes                                                   | Verify the enterprise domain name scenes                                                                                        |                                                                                                                                                                                                                                                              |
| ssoPageCustomizationSettings |         | yes                                                   | Page customization configuration Nested type: <a href="#ISsoPageCustomizationSettingsDto">ISsoPageCustomizationSettingsDto</a>. | `{"hideIdp":true,"hideForgetPassword":true,"autoRegisterThenLogin":true,"hideSocialLogin":true,"hideLoginByPhoneCode":true,"hideRegister":true,"hideUserPasswordLogin":true,"hideWxMpScanLogin":true,"hideRegisterByPhone":true,"hideRegisterByEmail":true}` |
| enableMultipleTenantPortal   | boolean | yes                                                   | Whether to allow selection of portal login                                                                                      |                                                                                                                                                                                                                                                              |
| loginConfig                  |         | yes                                                   | Login configuration Nested type: <a href="#ApplicationLoginConfigDto">ApplicationLoginConfigDto</a>.                            |                                                                                                                                                                                                                                                              |

### <a id="ISsoPageCustomizationSettingsDto"></a> ISsoPageCustomizationSettingsDto

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

### <a id="ApplicationLoginConfigDto"></a> ApplicationLoginConfigDto

| Name                      | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                              | <div style="width:200px">Sample value</div>                                    |
| ------------------------- | ------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| mergeLoginAndRegisterPage | boolean | yes                                           | Whether to enable login and registration merge                                                                                                                                          |                                                                                |
| enabledBasicLoginMethods  | array   | yes                                           | Enabled basic login method                                                                                                                                                              | `["EMAIL_CODE","EMAIL_PASSWORD"]`                                              |
| defaultLoginMethod        |         | Yes                                           | Application default login method (excluding social login and enterprise identity source login) Nested type: <a href="#ApplicationDefaultLoginMethod">ApplicationDefaultLoginMethod</a>. | `{"connectionType":"QRCODE","qrcodeExtIdpConnId":"6303a2bf2xxxxx7f665f01bf1"}` |
| enabledExtIdpConns        | array   | Yes                                           | Enabled external identity source connection Nested type: <a href="#ApplicationEnabledExtIdpConnDto">ApplicationEnabledExtIdpConnDto</a>.                                                | `["6303a2bf2xxxx7f665f01bf1","6321397b6xxxx1b8481ccfc0"]`                      |
| showAuthorizationPage     | boolean | yes                                           | Whether to display the user authorization page                                                                                                                                          |                                                                                |

### <a id="ApplicationDefaultLoginMethod"></a> ApplicationDefaultLoginMethod

| Name               | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | <div style="width:200px">Sample value</div> |
| ------------------ | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| connectionType     | string | Yes                                           | Default login type<br> - `PASSWORD`: Password type, depending on the basic login method you enable, supports mobile phone number/email/user name + password for login<br> - `PASSCODE`: Verification code type, depending on the basic login method you enable, supports mobile phone number/email + verification code for login<br> - `QRCODE`: Scan code login type, currently includes three types: scan code login for self-built APP, scan code login for WeChat public account, and scan code login for WeChat mini program<br> | PASSCODE                                    |
| qrcodeType         | string | Yes                                           | When `connectionType` is `QRCODE`, this parameter indicates the QR code type. <br>- `SELF_BUILT_APP`: Scan the QR code of self-built APP<br>- `WECHAT_OFFICIAL_ACCOUNT`: Scan the QR code to follow the WeChat official account to log in<br>- `WECHAT_MINI_PROGRAM`: Scan the QR code to log in the WeChat mini program<br>                                                                                                                                                                                                          | SELF_BUILT_APP                              |
| qrcodeExtIdpConnId | string | Yes                                           | When `connectionType` is `QRCODE`, you need to specify the ID of the specific identity source connection for scanning the QR code to log in through this parameter.                                                                                                                                                                                                                                                                                                                                                                   | `6303a2bf2xxxxx7f665f01bf1`                 |
| adExtIdpConnId     | string | Yes                                           | When `connectionType` is `AD`, you need to specify the ID of the specific AD identity source connection through this parameter.                                                                                                                                                                                                                                                                                                                                                                                                       | `6303a2bf2xxxxx7f665f01bf1`                 |
| ldapExtIdpConnId   | string | yes                                           | When `connectionType` is `LDAP`, you need to specify the ID of the specific LDAP identity source connection through this parameter.                                                                                                                                                                                                                                                                                                                                                                                                   | `6303a2bf2xxxxx7f665f01bf1`                 |

### <a id="ApplicationEnabledExtIdpConnDto"></a> ApplicationEnabledExtIdpConnDto

| Name                  | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>            | <div style="width:200px">Sample value</div>                                     |
| --------------------- | ------- | --------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------- |
| isSocial              | boolean | yes                                           | Is it a social login identity source connection?      | `true`                                                                          |
| extIdpId              | string  | yes                                           | Identity source ID                                    | `6303a2bf2xxxxx7f665f01bf1`                                                     |
| extIdpType            | string  | yes                                           | Identity source type                                  | oidc                                                                            |
| extIdpConnId          | string  | yes                                           | Identity source connection ID                         | `6303a2bf2xxxxx7f665f01bf1`                                                     |
| extIdpConnType        | string  | yes                                           | Identity source connection type                       | oidc                                                                            |
| extIdpConnIdentifier  | string  | yes                                           | Identity source connection readable unique identifier | `6303a2bf2xxxxx7f665f01bf1`                                                     |
| extIdpConnDisplayName | string  | yes                                           | WeChat                                                | `6303a2bf2xxxxx7f665f01bf1`                                                     |
| extIdpConnLogo        | string  | yes                                           | Identity source connection Logo                       | `https://files.authing.co/authing-console/social-connections/wechatBrowser.svg` |
| enabled               | boolean | no                                            | Whether to allow identity source connection           |                                                                                 |
