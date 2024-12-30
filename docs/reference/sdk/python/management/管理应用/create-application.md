# Create an application

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Create an application

## Method name

`ManagementClient.create_application`

## Request parameters

| Name                 | Type                                                                               | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                           | <div style="width:200px">Sample value</div>                                                                                                                                                                           |
| -------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appName              | string                                                                             | yes                                           | -                                           | Application name                                                                                                                                                                                                                     | `Sample application`                                                                                                                                                                                                  |
| template             | string                                                                             | no                                            | -                                           | Integrated application template type, **required for integrated applications**. Integrated applications only need to fill in the `template` and `templateData` fields, and other fields will be ignored.                             | `github`                                                                                                                                                                                                              |
| templateData         | string                                                                             | no                                            | -                                           | Integrated application configuration information, **required for integrated applications**.                                                                                                                                          | `github`                                                                                                                                                                                                              |
| appIdentifier        | string                                                                             | no                                            | -                                           | Application unique identifier, **required for self-built applications**.                                                                                                                                                             | `example`                                                                                                                                                                                                             |
| appLogo              | string                                                                             | No                                            | -                                           | App Logo URL                                                                                                                                                                                                                         | `Example App`                                                                                                                                                                                                         |
| appDescription       | string                                                                             | No                                            | -                                           | App Description                                                                                                                                                                                                                      | `Example Description`                                                                                                                                                                                                 |
| appType              | string                                                                             | No                                            | web                                         | App Type                                                                                                                                                                                                                             | `web`                                                                                                                                                                                                                 |
| defaultProtocol      | string                                                                             | No                                            | -                                           | Default App Protocol Type                                                                                                                                                                                                            | `oidc`                                                                                                                                                                                                                |
| redirectUris         | string[]                                                                           | No                                            | -                                           | App Login Callback URL                                                                                                                                                                                                               | `["https://example.com/callback"]`                                                                                                                                                                                    |
| logoutRedirectUris   | string[]                                                                           | No                                            | -                                           | Application logout callback address                                                                                                                                                                                                  | `["https://example.com/logout-callback"]`                                                                                                                                                                             |
| initLoginUri         | string                                                                             | No                                            | -                                           | Initiate login address: When you click "Experience Login" in the GenAuth application details or click the application icon in the application panel, you will be redirected to this URL, which is the GenAuth login page by default. | `["https://example.com/login"]`                                                                                                                                                                                       |
| ssoEnabled           | boolean                                                                            | No                                            | -                                           | Whether to enable SSO single sign-on                                                                                                                                                                                                 |                                                                                                                                                                                                                       |
| oidcConfig           | <a href="#OIDCConfig">OIDCConfig</a>                                               | No                                            | [object Object]                             | OIDC protocol configuration                                                                                                                                                                                                          |                                                                                                                                                                                                                       |
| samlProviderEnabled  | boolean                                                                            | No                                            | -                                           | Whether to enable SAML identity provider                                                                                                                                                                                             |                                                                                                                                                                                                                       |
| samlConfig           | <a href="#SamlIdpConfig">SamlIdpConfig</a>                                         | No                                            | [object Object]                             | SAML protocol configuration                                                                                                                                                                                                          |                                                                                                                                                                                                                       |
| oauthProviderEnabled | boolean                                                                            | No                                            | -                                           | Whether to enable OAuth identity provider                                                                                                                                                                                            |                                                                                                                                                                                                                       |
| oauthConfig          | <a href="#OauthIdpConfig">OauthIdpConfig</a>                                       | No                                            | -                                           | OAuth2.0 protocol configuration. [Important] OAuth2.0 is no longer recommended. It is recommended to switch to OIDC.                                                                                                                 | `{"grants":["authorization_code"],"access_token_lifetime":1209600,"refresh_token_lifetime":2592000,"introspection_endpoint_auth_method":"client_secret_post","revocation_endpoint_auth_method":"client_secret_post"}` |
| casProviderEnabled   | boolean                                                                            | No                                            | -                                           | Whether to enable CAS identity provider                                                                                                                                                                                              |                                                                                                                                                                                                                       |
| casConfig            | <a href="#CasIdPConfig">CasIdPConfig</a>                                           | No                                            | -                                           | CAS protocol configuration                                                                                                                                                                                                           | `{"casUserIdentifier":"${user.username}","customAttributes":{"customAttr1":"123"},"stLifetime":300}`                                                                                                                  |
| loginConfig          | <a href="#ApplicationLoginConfigInputDto">ApplicationLoginConfigInputDto</a>       | No                                            | -                                           | RegisterConfig                                                                                                                                                                                                                       |                                                                                                                                                                                                                       |
| registerConfig       | <a href="#ApplicationRegisterConfigInputDto">ApplicationRegisterConfigInputDto</a> | No                                            | -                                           | RegisterConfig                                                                                                                                                                                                                       |                                                                                                                                                                                                                       |
| brandingConfig       | <a href="#ApplicationBrandingConfigInputDto">ApplicationBrandingConfigInputDto</a> | No                                            | -                                           | BrandingConfig                                                                                                                                                                                                                       |                                                                                                                                                                                                                       |

## Request Response

Type: `CreateApplicationRespDto`

| Name       | Type                                                                     | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                                                   | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                                                   | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#CreateApplicationRespDataDto">CreateApplicationRespDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "appId": "62eaa95fe0xxxx9a5295bf7c",
    "appIdentifier": "example",
    "appName": "Sample application",
    "appLogo": "Sample application",
    "appDescription": "Sample description information",
    "appType": "web",
    "defaultProtocol": "oidc",
    "redirectUris": "[\"https://example.com/callback\"]",
    "logoutRedirectUris": "[\"https://example.com/logout-callback\"]",
    "initLoginUri": "[\"https://example.com/login\"]",
    "ssoEnabled": true,
    "ssoEnabledAt": "2022-07-03T03:20:30.000Z",
    "loginConfig": {
      "enabledBasicLoginMethods": "[\"EMAIL_CODE\",\"EMAIL_PASSWORD\"]",
      "defaultLoginMethod": {
        "connectionType": "QRCODE",
        "qrcodeExtIdpConnId": "6303a2bf2xxxxx7f665f01bf1"
      },
      "enabledExtIdpConns": "[\"6303a2bf2xxxx7f665f01bf1\",\"6321397b6xxxx1b8481ccfc0\"]"
    },
    "registerConfig": {
      "enabledBasicRegisterMethods": "[\"EMAIL_CODE\",\"PHONE_CODE\"]",
      "defaultRegisterMethod": { "connectionType": "PASSWORD" }
    },
    "brandingConfig": {
      "customCSS": "/* \nEdit login page css\neg：\n.authing-guard-layout {\n background: black !important;\n}\nChange the background color\n*/",
      "guardVersion": "Advanced",
      "customLoadingImage": "https://files.authing.co/user-contents/photos/cbd51df7-efb1-4b50-b38c-d8e5a04b1830.png",
      "customBackground": "https://files.authing.co/user-contents/photos/cbd51df7-efb1-4b50-b38c-d8e5a04b1830.png",
      "defaultLanguage": "zh-CN",
      "showForgetPasswordButton": true,
      "showEnterpriseConnections": true,
      "showSocialConnections": true,
      "agreements": {
        "displayAt": "[\"LoginPage\",\"RegisterPage\"]",
        "isRequired": true,
        "lang": "zh-CN",
        "content": "I have read and agreed to the Privacy Agreement and Terms of Service"
      }
    },
    "oidcConfig": {},
    "samlConfig": {},
    "oauthConfig": {},
    "casConfig": {},
    "template": "github"
  }
}
```

## Data Structure

### <a id="OIDCConfig"></a> OIDCConfig

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

### <a id="SamlIdpConfig"></a> SamlIdpConfig

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

### <a id="OauthIdpConfig"></a> OauthIdpConfig

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

### <a id="CasIdPConfig"></a> CasIdPConfig

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

### <a id="ApplicationLoginConfigInputDto"></a> ApplicationLoginConfigInputDto

| Name                      | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                        | <div style="width:200px">Example value</div>                                   |
| ------------------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| mergeLoginAndRegisterPage | boolean | No                                           | Whether to enable login and registration merge                                                                                                                                                    |                                                                                |
| enabledBasicLoginMethods  | array   | No                                           | Basic login method enabled                                                                                                                                                                        |                                                                                |
| defaultLoginMethod        |         | No                                           | Application default login method (excluding social login and enterprise identity source login) Nested type: <a href="#ApplicationDefaultLoginMethodInput">ApplicationDefaultLoginMethodInput</a>. | `{"connectionType":"QRCODE","qrcodeExtIdpConnId":"6303a2bf2xxxxx7f665f01bf1"}` |
| enabledExtIdpConnIds      | array   | No                                           | Enabled external identity source connections Nested type: <a href="#ApplicationEnabledExtIdpConnInputDto">ApplicationEnabledExtIdpConnInputDto</a>.                                               | `[{"extIdpConnId":"xxx"}]`                                                     |
| enabledAllExtIdpConns     | boolean | No                                           | Enable all external identity source connections                                                                                                                                                   |                                                                                |
| showAuthorizationPage     | boolean | Yes                                          | Whether to display the user authorization page                                                                                                                                                    |                                                                                |

### <a id="ApplicationDefaultLoginMethodInput"></a> ApplicationDefaultLoginMethodInput

| Name               | Type   | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | <div style="width:200px">Sample value</div> |
| ------------------ | ------ | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| connectionType     | string | yes                                                   | Default login type<br> - `PASSWORD`: Password type, depends on the basic login method you enable, supports mobile phone number/email/user name + password for login<br> - `PASSCODE`: Verification code type, depends on the basic login method you enable, supports mobile phone number/email + verification code for login<br> - `QRCODE`: Scan code login type, currently includes three types: scan code login for self-built APP, scan code login for WeChat public account, and scan code login for WeChat mini program<br> | PASSCODE                                    |
| qrcodeType         | string | no                                                    | When `connectionType` is `QRCODE`, this parameter indicates the QR code type. <br>- `SELF_BUILT_APP`: Scan the QR code of self-built APP<br>- `WECHAT_OFFICIAL_ACCOUNT`: Scan the QR code to follow the WeChat official account to log in<br>- `WECHAT_MINI_PROGRAM`: Scan the QR code to log in through the WeChat mini program<br>                                                                                                                                                                                              | SELF_BUILT_APP                              |
| qrcodeExtIdpConnId | string | No                                                    | When `connectionType` is `QRCODE`, you need to specify the ID of the specific identity source connection for scanning the QR code to log in through this parameter.                                                                                                                                                                                                                                                                                                                                                               | `6303a2bf2xxxxx7f665f01bf1`                 |
| adExtIdpConnId     | string | No                                                    | When `connectionType` is `AD`, you need to specify the ID of the specific AD identity source connection through this parameter.                                                                                                                                                                                                                                                                                                                                                                                                   | `6303a2bf2xxxxx7f665f01bf1`                 |
| ldapExtIdpConnId   | string | No                                                    | When `connectionType` is `LDAP`, you need to specify the ID of the specific LDAP identity source connection through this parameter.                                                                                                                                                                                                                                                                                                                                                                                               | `6303a2bf2xxxxx7f665f01bf1`                 |

### <a id="ApplicationEnabledExtIdpConnInputDto"></a> ApplicationEnabledExtIdpConnInputDto

| Name         | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------ | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| extIdpConnId | string | Yes                                           | Identity source connection ID              | `6303a2bf2xxxxx7f665f01bf1`                 |

### <a id="ApplicationRegisterConfigInputDto"></a> ApplicationRegisterConfigInputDto

| Name                        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                 | <div style="width:200px">Sample value</div> |
| --------------------------- | ------ | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| enabledBasicRegisterMethods | array  | yes                                           | Enabled registration method                                                                                                                                                                                                                                | `["EMAIL_CODE","PHONE_CODE"]`               |
| defaultRegisterMethod       | string | yes                                           | Default registration type<br>- `PASSWORD`: Password type, supports email + password for login<br>- `PASSCODE`: Verification code type, depends on the registration method you enable, supports mobile phone number/email + verification code for login<br> | PASSCODE                                    |

### <a id="ApplicationBrandingConfigInputDto"></a> ApplicationBrandingConfigInputDto

| Name             | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------------- | ------- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| customCSSEnabled | boolean | No                                            | Whether to enable custom CSS               |                                             |
| customCSS        | string  | No                                            | Custom CSS content                         | `/\*                                        |

Edit login page css
eg:
.authing-guard-layout {
background: black !important;
}
Change the background color
\*/`| | guardVersion | string | No | Guard version: <br>-`Advanced`: Advanced version <br>- `Classical`: Classic version <br> | Advanced | | customLoadingImage | string | No | Custom loading icon, displayed when the login box is loading | `https://files.authing.co/user-contents/photos/cbd51df7-efb1-4b50-b38c-d8e5a04b1830.png` |
| customBackground | string | No | Customize the login page background, example: <br>- Image background: `url(https://files.authing.co/user-contents/photos/6c6b3726-4a04-4ba7-b686-1a275f81a47a.png) center/cover`<br>- Solid color background: `rgba(37,49,122,1)`<br> | `https://files.authing.co/user-contents/photos/cbd51df7-efb1-4b50-b38c-d8e5a04b1830.png` |
| showChangeLanguageButton | boolean | no | Whether to display the language switch button | |
| defaultLanguage | string | no | Default language for display:<br>- `zh-CN`: Simplified Chinese<br>- `zh-TW`: Traditional Chinese<br>- `en-US`: English<br>- `ja-JP`: Japanese<br><br>By default, the GenAuth login page will be automatically rendered based on the user's browser language. <br> | zh-CN |
| showForgetPasswordButton | boolean | no | Whether to display the Forgot Password button | `true` |
| showEnterpriseConnections | boolean | no | Whether to display the enterprise identity source login method | `true` |
| showSocialConnections | boolean | no | Whether to display the social login method | `true` |

### <a id="CreateApplicationRespDataDto"></a> CreateApplicationRespDataDto

| Name                  | Type    | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                  | <div style="width:200px">Sample value</div> |
| --------------------- | ------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| appId                 | string  | yes                                                   | Application ID                                                                                                                                                                                                              | `62eaa95fe0xxxx9a5295bf7c`                  |
| appIdentifier         | string  | yes                                                   | Application unique identifier                                                                                                                                                                                               | `example`                                   |
| appName               | string  | yes                                                   | Application name                                                                                                                                                                                                            | `Example App`                               |
| appLogo               | string  | yes                                                   | Application Logo link                                                                                                                                                                                                       | `Example App`                               |
| appDescription        | string  | no                                                    | Application description                                                                                                                                                                                                     | `Example Description`                       |
| appType               | string  | yes                                                   | Application type                                                                                                                                                                                                            | web                                         |
| userPoolId            | string  | yes                                                   | User pool ID                                                                                                                                                                                                                |                                             |
| isIntegrateApp        | boolean | yes                                                   | Whether it is an integrated application                                                                                                                                                                                     |                                             |
| defaultProtocol       | string  | yes                                                   | Default application protocol type                                                                                                                                                                                           | oidc                                        |
| redirectUris          | array   | yes                                                   | Application login callback URL                                                                                                                                                                                              | `["https://example.com/callback"]`          |
| logoutRedirectUris    | array   | yes                                                   | Application logout callback address                                                                                                                                                                                         | `["https://example.com/logout-callback"]`   |
| initLoginUri          | string  | yes                                                   | Initiate login address: When you click "Experience Login" in the GenAuth application details or click the application icon in the application panel, you will jump to this URL, which is the GenAuth login page by default. | `["https://example.com/login"]`             |
| ssoEnabled            | boolean | yes                                                   | Whether to enable SSO single sign-on                                                                                                                                                                                        | `true`                                      |
| ssoEnabledAt          | string  | No                                                    | Time to enable SSO single sign-on                                                                                                                                                                                           | `2022-07-03T03:20:30.000Z`                  |
| loginConfig           |         | Yes                                                   | Login configuration Nested type: <a href="#ApplicationLoginConfigDto">ApplicationLoginConfigDto</a>.                                                                                                                        |                                             |
| registerConfig        |         | Yes                                                   | Registration configuration Nested type: <a href="#ApplicationRegisterConfig">ApplicationRegisterConfig</a>.                                                                                                                 |                                             |
| brandingConfig        |         | Yes                                                   | Branding configuration Nested type: <a href="#ApplicationBrandingConfig">ApplicationBrandingConfig</a>.                                                                                                                     |                                             |
| oidcConfig            |         | Yes                                                   | OIDC protocol configuration Nested type: <a href="#OIDCConfig">OIDCConfig</a>.                                                                                                                                              |                                             |
| samlProviderEnabled   | boolean | yes                                                   | Whether to enable SAML identity provider                                                                                                                                                                                    |                                             |
| samlConfig            |         | no                                                    | SAML protocol configuration Nested type: <a href="#SamlIdpConfig">SamlIdpConfig</a>.                                                                                                                                        |                                             |
| oauthProviderEnabled  | boolean | yes                                                   | Whether to enable OAuth identity provider                                                                                                                                                                                   |                                             |
| oauthConfig           |         | no                                                    | OAuth2.0 protocol configuration Nested type: <a href="#OauthIdpConfig">OauthIdpConfig</a>.                                                                                                                                  |                                             |
| casProviderEnabled    | boolean | yes                                                   | Whether to enable CAS identity provider                                                                                                                                                                                     |                                             |
| casConfig             |         | no                                                    | CAS protocol configuration Nested type: <a href="#CasIdPConfig">CasIdPConfig</a>.                                                                                                                                           |                                             |
| customBrandingEnabled | boolean | yes                                                   | Whether to customize the login box of this application. The default is to use the global login box configuration.                                                                                                           |                                             |
| customSecurityEnabled | boolean | yes                                                   | Whether to customize the security rules of this application. The default is to use the global security configuration.                                                                                                       |                                             |
| template              | string  | no                                                    | Template type of integrated application                                                                                                                                                                                     | `github`                                    |

### <a id="ApplicationLoginConfigDto"></a> ApplicationLoginConfigDto

| Name                      | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                              | <div style="width:200px">Sample value</div>                                    |
| ------------------------- | ------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| mergeLoginAndRegisterPage | boolean | yes                                           | Whether to enable login and registration merge                                                                                                                                          |                                                                                |
| enabledBasicLoginMethods  | array   | yes                                           | Basic login method enabled                                                                                                                                                              | `["EMAIL_CODE","EMAIL_PASSWORD"]`                                              |
| defaultLoginMethod        |         | yes                                           | Application default login method (excluding social login and enterprise identity source login) Nested type: <a href="#ApplicationDefaultLoginMethod">ApplicationDefaultLoginMethod</a>. | `{"connectionType":"QRCODE","qrcodeExtIdpConnId":"6303a2bf2xxxxx7f665f01bf1"}` |
| enabledExtIdpConns        | array   | yes                                           | Enabled external identity source connection Nested type: <a href="#ApplicationEnabledExtIdpConnDto">ApplicationEnabledExtIdpConnDto</a>.                                                | `["6303a2bf2xxxx7f665f01bf1","6321397b6xxxx1b8481ccfc0"]`                      |
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

### <a id="ApplicationRegisterConfig"></a> ApplicationRegisterConfig

| Name                        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                           | <div style="width:200px">Sample value</div> |
| --------------------------- | ------ | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| enabledBasicRegisterMethods | array  | yes                                           | Enabled registration method                                                                                                                                                                                                                          | `["EMAIL_CODE","PHONE_CODE"]`               |
| defaultRegisterMethod       | string | yes                                           | Default registration type<br> - `PASSWORD`: Password type, supports email + password login<br> - `PASSCODE`: Verification code type, depends on the registration method you enable, supports mobile phone number/email + verification code login<br> | PASSCODE                                    |

### <a id="ApplicationBrandingConfig"></a> ApplicationBrandingConfig

| Name             | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------------- | ------- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| customCSSEnabled | boolean | yes                                           | Whether to enable custom CSS               |                                             |
| customCSS        | string  | no                                            | Custom CSS content                         | `/\*                                        |

Edit login page css
eg:
.authing-guard-layout {
background: black !important;
}
Change the background color
\*/`| | guardVersion | string | yes | Guard version: <br>-`Advanced`: Advanced version <br>- `Classical`: Classic version <br> | Advanced | | customLoadingImage | string | no | Custom loading icon, displayed when the login box is loading | `https://files.authing.co/user-contents/photos/cbd51df7-efb1-4b50-b38c-d8e5a04b1830.png` |
| customBackground | string | No | Customize the login page background, example: <br>- Image background: `url(https://files.authing.co/user-contents/photos/6c6b3726-4a04-4ba7-b686-1a275f81a47a.png) center/cover`<br>- Solid color background: `rgba(37,49,122,1)`<br> | `https://files.authing.co/user-contents/photos/cbd51df7-efb1-4b50-b38c-d8e5a04b1830.png` |
| showChangeLanguageButton | boolean | yes | Whether to display the language switch button | |
| defaultLanguage | string | yes | Default language:<br>- `zh-CN`: Simplified Chinese<br>- `zh-TW`: Traditional Chinese<br>- `en-US`: English<br>- `ja-JP`: Japanese<br> | zh-CN |
| showForgetPasswordButton | boolean | yes | Whether to display the Forgot Password button | `true` |
| showEnterpriseConnections | boolean | yes | Whether to display the enterprise identity source login method | `true` |
| showSocialConnections | boolean | yes | Whether to display the social login method | `true` |
| showAgreement | boolean | yes | Whether to display the login and registration agreement | |
| agreements | array | yes | The displayed login and registration agreement list Nested type: <a href="#ApplicationAgreementDto">ApplicationAgreementDto</a>. | |

### <a id="ApplicationAgreementDto"></a> ApplicationAgreementDto

| Name       | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                        | <div style="width:200px">Sample value</div>                            |
| ---------- | ------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| displayAt  | array   | yes                                           | Pages to display (multiple selections are allowed):<br>- `LoginPage`: Login page<br>- `RegisterPage`: Registration page<br>                                       | `["LoginPage","RegisterPage"]`                                         |
| isRequired | boolean | yes                                           | Is it required to be checked?                                                                                                                                     | `true`                                                                 |
| lang       | string  | yes                                           | For which languages ​​is this protocol valid:<br>- `zh-CN`: Simplified Chinese<br>- `zh-TW`: Traditional Chinese<br>- `en-US`: English<br>- `ja-JP`: Japanese<br> | zh-CN                                                                  |
| content    | string  | yes                                           | What language is this agreement valid for                                                                                                                         | `I have read and agreed to the Privacy Agreement and Terms of Service` |

### <a id="OIDCConfig"></a> OIDCConfig

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

### <a id="SamlIdpConfig"></a> SamlIdpConfig

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

### <a id="OauthIdpConfig"></a> OauthIdpConfig

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

### <a id="CasIdPConfig"></a> CasIdPConfig

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
