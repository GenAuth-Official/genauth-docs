# Get application details

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get application details through application ID.

## Method name

`ManagementClient.getApplication`

## Request parameters

| Name  | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| appId | string | Yes                                    | -                                           | Application ID                             | `6229ffaxxxxxxxxcade3e3d9`                  |

## Sample code

```ts
import { ManagementClient, Models } from "@genauth/nodejs";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If you are a privately deployed customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.getApplication({
    appId: "6229ffaxxxxxxxxcade3e3d9",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request Response

Type: `ApplicationSingleRespDto`

| Name       | Type                                         | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                       | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                       | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#ApplicationDto">ApplicationDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

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

## Data structure

### <a id="ApplicationDto"></a> ApplicationDto

| Name                  | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                      | <div style="width:200px">Example value</div> |
| --------------------- | ------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| appId                 | string  | Yes                                           | Application ID                                                                                                                                                                                  | `62eaa95fe0xxxx9a5295bf7c`                   |
| appIdentifier         | string  | Yes                                           | Application unique identifier                                                                                                                                                                   | `example`                                    |
| appName               | string  | Yes                                           | Application name                                                                                                                                                                                | `Example application`                        |
| appLogo               | string  | yes                                           | App Logo link                                                                                                                                                                                   | `Sample App`                                 |
| appDescription        | string  | no                                            | App description                                                                                                                                                                                 | `Sample description`                         |
| appType               | string  | yes                                           | App type                                                                                                                                                                                        | web                                          |
| userPoolId            | string  | yes                                           | User pool ID                                                                                                                                                                                    |                                              |
| isIntegrateApp        | boolean | yes                                           | Is it an integrated app?                                                                                                                                                                        |                                              |
| defaultProtocol       | string  | yes                                           | Default application protocol type                                                                                                                                                               | oidc                                         |
| redirectUris          | array   | yes                                           | App login callback URL                                                                                                                                                                          | `["https://example.com/callback"]`           |
| logoutRedirectUris    | array   | yes                                           | App logout callback URL                                                                                                                                                                         | `["https://example.com/logout-callback"]`    |
| initLoginUri          | string  | yes                                           | Initiate login URL: When you click "Experience Login" in the GenAuth app details or click the app icon in the app panel, you will be redirected to this URL. The default is GenAuth Login page. | `["https://example.com/login"]`              |
| ssoEnabled            | boolean | yes                                           | Whether to enable SSO single sign-on                                                                                                                                                            | `true`                                       |
| ssoEnabledAt          | string  | no                                            | Time to enable SSO single sign-on                                                                                                                                                               | `2022-07-03T03:20:30.000Z`                   |
| loginConfig           |         | yes                                           | Login configuration Nested type: <a href="#ApplicationLoginConfigDto">ApplicationLoginConfigDto</a>.                                                                                            |                                              |
| registerConfig        |         | yes                                           | Registration configuration Nested type: <a href="#ApplicationRegisterConfig">ApplicationRegisterConfig</a>.                                                                                     |                                              |
| brandingConfig        |         | yes                                           | Branding configuration Nested type: <a href="#ApplicationBrandingConfig">ApplicationBrandingConfig</a>.                                                                                         |                                              |
| oidcConfig            |         | Yes                                           | OIDC protocol configuration Nested type: <a href="#OIDCConfig">OIDCConfig</a>.                                                                                                                  |                                              |
| samlProviderEnabled   | boolean | Yes                                           | Whether to enable SAML identity provider                                                                                                                                                        |                                              |
| samlConfig            |         | No                                            | SAML protocol configuration Nested type: <a href="#SamlIdpConfig">SamlIdpConfig</a>.                                                                                                            |                                              |
| oauthProviderEnabled  | boolean | Yes                                           | Whether to enable OAuth identity provider                                                                                                                                                       |                                              |
| oauthConfig           |         | No                                            | OAuth2.0 protocol configuration Nested type: <a href="#OauthIdpConfig">OauthIdpConfig</a>.                                                                                                      |                                              |
| casProviderEnabled    | boolean | yes                                           | Whether to enable CAS identity provider                                                                                                                                                         |                                              |
| casConfig             |         | no                                            | CAS protocol configuration Nested type: <a href="#CasIdPConfig">CasIdPConfig</a>.                                                                                                               |                                              |
| customBrandingEnabled | boolean | yes                                           | Whether to customize the login box of this application. The global login box configuration is used by default.                                                                                  |                                              |
| customSecurityEnabled | boolean | yes                                           | Whether to customize the security rules of this application. The global security configuration is used by default.                                                                              |                                              |
| template              | string  | No                                            | Template type for integrated applications                                                                                                                                                       | `github`                                     |

### <a id="ApplicationLoginConfigDto"></a> ApplicationLoginConfigDto

| Name                      | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                              | <div style="width:200px">Sample value</div>                                    |
| ------------------------- | ------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| mergeLoginAndRegisterPage | boolean | Yes                                           | Whether to enable login and registration merge                                                                                                                                          |                                                                                |
| enabledBasicLoginMethods  | array   | Yes                                           | Basic login method enabled                                                                                                                                                              | `["EMAIL_CODE","EMAIL_PASSWORD"]`                                              |
| defaultLoginMethod        |         | Yes                                           | Application default login method (excluding social login and enterprise identity source login) Nested type: <a href="#ApplicationDefaultLoginMethod">ApplicationDefaultLoginMethod</a>. | `{"connectionType":"QRCODE","qrcodeExtIdpConnId":"6303a2bf2xxxxx7f665f01bf1"}` |
| enabledExtIdpConns        | array   | Yes                                           | Enabled external identity source connections Nested type: <a href="#ApplicationEnabledExtIdpConnDto">ApplicationEnabledExtIdpConnDto</a>.                                               | `["6303a2bf2xxxx7f665f01bf1","6321397b6xxxx1b8481ccfc0"]`                      |
| showAuthorizationPage     | boolean | yes                                           | Whether to display the user authorization page                                                                                                                                          |                                                                                |

### <a id="ApplicationDefaultLoginMethod"></a> ApplicationDefaultLoginMethod

| Name               | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | <div style="width:200px">Examplevalue</div> |
| ------------------ | ------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| connectionType     | string | yes                                          | Default login type<br> - `PASSWORD`: Password type, depends on the basic login method you enable, supports mobile phone number/email/user name + password for login<br> - `PASSCODE`: Verification code type, depends on the basic login method you enable, supports mobile phone number/email + verification code for login<br> - `QRCODE`: Scan code login type, currently includes self-built APP scan code login, WeChat public account scan code login, WeChat mini program scan code login three types<br> | PASSCODE                                    |
| qrcodeType         | string | yes                                          | When `connectionType` is `QRCODE`, this parameter indicates the QR code type. <br>- `SELF_BUILT_APP`: Scan the QR code of self-built APP<br>- `WECHAT_OFFICIAL_ACCOUNT`: Scan the QR code to follow the WeChat official account to log in<br>- `WECHAT_MINI_PROGRAM`: Scan the QR code to log in the WeChat mini program<br>                                                                                                                                                                                     | SELF_BUILT_APP                              |
| qrcodeExtIdpConnId | string | yes                                          | When `connectionType` is `QRCODE`, you need to specify the ID of the specific identity source connection for scanning the QR code to log in through this parameter.                                                                                                                                                                                                                                                                                                                                              | `6303a2bf2xxxxx7f665f01bf1`                 |
| adExtIdpConnId     | string | yes                                          | When `connectionType` is `AD`, you need to specify the ID of the specific AD identity source connection through this parameter.                                                                                                                                                                                                                                                                                                                                                                                  | `6303a2bf2xxxxx7f665f01bf1`                 |
| ldapExtIdpConnId   | string | yes                                          | When `connectionType` is `LDAP`, you need to specify the ID of the specific LDAP identity source connection through this parameter.                                                                                                                                                                                                                                                                                                                                                                              | `6303a2bf2xxxxx7f665f01bf1`                 |

### <a id="ApplicationEnabledExtIdpConnDto"></a> ApplicationEnabledExtIdpConnDto

| Name                  | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>       | <div style="width:200px">Sample value</div>                                     |
| --------------------- | ------- | --------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------- |
| isSocial              | boolean | Yes                                           | Is it a social login identity source connection? | `true`                                                                          |
| extIdpId              | string  | Yes                                           | Identity source ID                               | `6303a2bf2xxxxx7f665f01bf1`                                                     |
| extIdpType            | string  | Yes                                           | Identity source type                             | oidc                                                                            |
| extIdpConnId          | string  | yes                                           | Identity source connection ID                    | `6303a2bf2xxxxx7f665f01bf1`                                                     |
| extIdpConnType        | string  | yes                                           | Identity source connection type                  | oidc                                                                            |
| extIdpConnIdentifier  | string  | yes                                           | Identity source connection readable unique flag  | `6303a2bf2xxxxx7f665f01bf1`                                                     |
| extIdpConnDisplayName | string  | yes                                           | WeChat                                           | `6303a2bf2xxxxx7f665f01bf1`                                                     |
| extIdpConnLogo        | string  | yes                                           | Identity source connection Logo                  | `https://files.authing.co/authing-console/social-connections/wechatBrowser.svg` |
| enabled               | boolean | no                                            | Whether to allow identity source connection      |                                                                                 |

### <a id="ApplicationRegisterConfig"></a> ApplicationRegisterConfig

| Name                        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                           | <div style="width:200px">Sample value</div> |
| --------------------------- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| enabledBasicRegisterMethods | array  | yes                                          | Enabled registration method                                                                                                                                                                                                                          | `["EMAIL_CODE","PHONE_CODE"]`               |
| defaultRegisterMethod       | string | yes                                          | Default registration type<br> - `PASSWORD`: Password type, supports email + password login<br> - `PASSCODE`: Verification code type, depends on the registration method you enable, supports mobile phone number/email + verification code login<br> | PASSCODE                                    |

### <a id="ApplicationBrandingConfig"></a> ApplicationBrandingConfig

| Name             | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------------- | ------- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| customCSSEnabled | boolean | yes                                          | Whether to enable custom CSS               |                                             |
| customCSS        | string  | no                                           | Custom CSS content                         | `/\*                                        |

Edit login page css
eg:
.authing-guard-layout {
background: black !important;
}
Change the background color
\*/`| | guardVersion | string | yes | Guard version: <br>-`Advanced`: Advanced version <br>- `Classical`: Classic version <br> | Advanced | | customLoadingImage | string | no | Custom loading icon, displayed when the login box is loading | `https://files.authing.co/user-contents/photos/cbd51df7-efb1-4b50-b38c-d8e5a04b1830.png` |
| customBackground | string | no | Custom login page background, example: <br>- Image background: `url(https://files.authing.co/user-contents/photos/6c6b3726-4a04-4ba7-b686-1a275f81a47a.png) center/cover`<br>- Solid color background: `rgba(37,49,122,1)`<br> | `https://files.authing.co/user-contents/photos/cbd51df7-efb1-4b50-b38c-d8e5a04b1830.png` |
| showChangeLanguageButton | boolean | yes | Whether to display the switch language button | |
| defaultLanguage | string | yes | Default language:<br>- `zh-CN`: Simplified Chinese<br>- `zh-TW`: Traditional Chinese<br>- `en-US`: English<br>- `ja-JP`: Japanese<br> | zh-CN |
| showForgetPasswordButton | boolean | yes | Whether to show the Forget Password button | `true` |
| showEnterpriseConnections | boolean | yes | Whether to show the enterprise identity source login method | `true` |
| showSocialConnections | boolean | yes | Whether to show the social login method | `true` |
| showAgreement | boolean | yes | Whether to display the login registration agreement | |
| agreements | array | yes | The displayed login registration agreement list Nested type: <a href="#ApplicationAgreementDto">ApplicationAgreementDto</a>. | |

### <a id="ApplicationAgreementDto"></a> ApplicationAgreementDto

| Name       | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                     | <div style="width:200px">Sample value</div>                            |
| ---------- | ------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| displayAt  | array   | Yes                                           | Pages to display (multiple selections are allowed):<br>- `LoginPage`: Login page<br>- `RegisterPage`: Registration page<br>                                    | `["LoginPage","RegisterPage"]`                                         |
| isRequired | boolean | Yes                                           | Is it required to be checked?                                                                                                                                  | `true`                                                                 |
| lang       | string  | Yes                                           | What language is this agreement valid for:<br>- `zh-CN`: Simplified Chinese<br>- `zh-TW`: Traditional Chinese<br>- `en-US`: English<br>- `ja-JP`: Japanese<br> | zh-CN                                                                  |
| content    | string  | yes                                           | What language is this agreement valid for                                                                                                                      | `I have read and agreed to the Privacy Agreement and Terms of Service` |

### <a id="OIDCConfig"></a> OIDCConfig

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

### <a id="SamlIdpConfig"></a> SamlIdpConfig

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

### <a id="OauthIdpConfig"></a> OauthIdpConfig

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

### <a id="CasIdPConfig"></a> CasIdPConfig

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
