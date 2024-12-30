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

`ManagementClient.userpollTenantConfig`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

## Request response

Type: `UserPoolTenantConfigDtoRespDto`

| Name       | Type                                                           | Description                                                                                                                                                                                                                                                                                                                                           |
| ---------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                         | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                          |
| message    | string                                                         | description                                                                                                                                                                                                                                                                                                                                           |
| apiCode    | number                                                         | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| data       | <a href="#UserPoolTenantConfigDto">UserPoolTenantConfigDto</a> | Response data                                                                                                                                                                                                                                                                                                                                         |

Sample result:

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

| Name                         | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                      | <div style="width:200px">Sample value</div>                                                                                                                                                                                                                  |
| ---------------------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userPoolId                   | string  | yes                                          | UserPool ID                                                                                                                     | `62b40xxxxxxxxxxxd16f57c7`                                                                                                                                                                                                                                   |
| isUserPoolAsTenant           | boolean | yes                                          | Whether the user pool is a tenant                                                                                               | `true`                                                                                                                                                                                                                                                       |
| enableSwitchType             | string  | yes                                          | Type of switch allowed                                                                                                          | tenant-console                                                                                                                                                                                                                                               |
| css                          | string  | yes                                          | Custom CSS                                                                                                                      |                                                                                                                                                                                                                                                              |
| cssEnabled                   | boolean | yes                                          | Whether to enable custom CSS                                                                                                    |                                                                                                                                                                                                                                                              |
| customLoading                | string  | yes                                          | Custom Loading                                                                                                                  |                                                                                                                                                                                                                                                              |
| enableGuardVersionSwitch     | boolean | yes                                          | Whether to enable Guard switch                                                                                                  |                                                                                                                                                                                                                                                              |
| guardVersion                 | string  | yes                                          | Version of Guard used                                                                                                           | `v2`                                                                                                                                                                                                                                                         |
| loadingBackground            | string  | yes                                          | Customize loading background                                                                                                    |                                                                                                                                                                                                                                                              |
| enableCreateTenant           | boolean | yes                                          | Whether to allow tenant creation                                                                                                |                                                                                                                                                                                                                                                              |
| createTenantScenes           | array   | yes                                          | Allow tenant creation scenes                                                                                                    |                                                                                                                                                                                                                                                              |
| enableJoinTenant             | boolean | yes                                          | Whether to allow tenant joining                                                                                                 |                                                                                                                                                                                                                                                              |
| joinTenantScenes             | array   | yes                                          | Allow joining scenes                                                                                                            |                                                                                                                                                                                                                                                              |
| enableVerifyDomain           | boolean | yes                                          | Whether to verify enterprise domain name                                                                                        |                                                                                                                                                                                                                                                              |
| verifyDomainScenes           | array   | yes                                          | Verify enterprise domain name scenes                                                                                            |                                                                                                                                                                                                                                                              |
| ssoPageCustomizationSettings |         | yes                                          | Page customization configuration Nested type: <a href="#ISsoPageCustomizationSettingsDto">ISsoPageCustomizationSettingsDto</a>. | `{"hideIdp":true,"hideForgetPassword":true,"autoRegisterThenLogin":true,"hideSocialLogin":true,"hideLoginByPhoneCode":true,"hideRegister":true,"hideUserPasswordLogin":true,"hideWxMpScanLogin":true,"hideRegisterByPhone":true,"hideRegisterByEmail":true}` |
| enableMultipleTenantPortal   | boolean | yes                                          | Whether to allow selection of portal login                                                                                      |                                                                                                                                                                                                                                                              |
| loginConfig                  |         | yes                                          | Login configuration Nested type: <a href="#ApplicationLoginConfigDto">ApplicationLoginConfigDto</a>.                            |                                                                                                                                                                                                                                                              |

### <a id="ISsoPageCustomizationSettingsDto"></a> ISsoPageCustomizationSettingsDto

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

### <a id="ApplicationLoginConfigDto"></a> ApplicationLoginConfigDto

| Name                      | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                              | <div style="width:200px">Sample value</div>                                    |
| ------------------------- | ------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| mergeLoginAndRegisterPage | boolean | yes                                           | Whether to enable login and registration merge                                                                                                                                          |                                                                                |
| enabledBasicLoginMethods  | array   | yes                                           | Enabled basic login methods                                                                                                                                                             | `["EMAIL_CODE","EMAIL_PASSWORD"]`                                              |
| defaultLoginMethod        |         | yes                                           | Application default login method (excluding social login and enterprise identity source login) Nested type: <a href="#ApplicationDefaultLoginMethod">ApplicationDefaultLoginMethod</a>. | `{"connectionType":"QRCODE","qrcodeExtIdpConnId":"6303a2bf2xxxxx7f665f01bf1"}` |
| enabledExtIdpConns        | array   | yes                                           | Enabled external identity source connection Nested type: <a href="#ApplicationEnabledExtIdpConnDto">ApplicationEnabledExtIdpConnDto</a>.                                                | `["6303a2bf2xxxx7f665f01bf1","6321397b6xxxx1b8481ccfc0"]`                      |
| showAuthorizationPage     | boolean | yes                                           | Whether to display the user authorization page                                                                                                                                          |                                                                                |

### <a id="ApplicationDefaultLoginMethod"></a> ApplicationDefaultLoginMethod

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
