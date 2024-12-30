# Create an application

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Create an application

## Method Name

`ManagementClient.createApplication`

## Request Parameters

| Name                 | Type                                                                               | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                     | <div style="width:200px">Example Value</div>                                                                                                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ------------------ | ------- | --- | --- | ----------------------------------- | --- |
| appName              | string                                                                             | Yes                                          | -                                           | Application Name                                                                                                                                                                                                               | `Demo`                                                                                                                                                                                                                |
| template             | string                                                                             | No                                           | -                                           | Integrated application template type, **required for integrated applications**. For integrated applications, only `template` and `templateData` fields need to be filled in, and other fields will be ignored.                 | `github`                                                                                                                                                                                                              |
| templateData         | string                                                                             | No                                           | -                                           | Integrated application configuration information, **required for integrated applications**.                                                                                                                                    | `github`                                                                                                                                                                                                              |
| appIdentifier        | string                                                                             | No                                           | -                                           | Application unique identifier, **required for self-built applications**.                                                                                                                                                       | `example`                                                                                                                                                                                                             |
| appLogo              | string                                                                             | No                                           | -                                           | Application Logo link                                                                                                                                                                                                          | `Demo`                                                                                                                                                                                                                |
| appDescription       | string                                                                             | No                                           | -                                           | Application description information                                                                                                                                                                                            | `Example description information`                                                                                                                                                                                     |
| appType              | string                                                                             | No                                           | web                                         | Application type                                                                                                                                                                                                               | `web`                                                                                                                                                                                                                 |
| defaultProtocol      | string                                                                             | No                                           | -                                           | Default application protocol type                                                                                                                                                                                              | `oidc`                                                                                                                                                                                                                |
| redirectUris         | string[]                                                                           | No                                           | -                                           | Application login callback address                                                                                                                                                                                             | `["https://example.com/callback"]`                                                                                                                                                                                    |
| logoutRedirectUris   | string[]                                                                           | No                                           | -                                           | Application logout callback address                                                                                                                                                                                            | `["https://example.com/logout-callback"]`                                                                                                                                                                             |
| initLoginUri         | string                                                                             | No                                           | -                                           | Initiate login address: When you click "Experience Login" in the GenAuth application detail or click the application icon in the application panel, you will be redirected to this URL. The default is the GenAuth login page. | `["https://example.com/login"]`                                                                                                                                                                                       |
| ssoEnabled           | boolean                                                                            | No                                           | -                                           | Yes No Enable SSO single sign-on                                                                                                                                                                                               |                                                                                                                                                                                                                       |
| oidcConfig           | <a href="#OIDCConfig">OIDCConfig</a>                                               | No                                           | [object Object]                             | OIDC protocol configuration                                                                                                                                                                                                    |                                                                                                                                                                                                                       |
| samlProviderEnabled  | boolean                                                                            | No                                           | -                                           | Yes No Enable SAML identity provider                                                                                                                                                                                           |                                                                                                                                                                                                                       |
| samlConfig           | <a href="#SamlIdpConfig">SamlIdpConfig</a>                                         | No                                           | [object Object]                             | SAML protocol configuration                                                                                                                                                                                                    |                                                                                                                                                                                                                       |
| oauthProviderEnabled | boolean                                                                            | No                                           | -                                           | Yes No Enable OAuth identity provider                                                                                                                                                                                          |                                                                                                                                                                                                                       |
| oauthConfig          | <a href="#OauthIdpConfig">OauthIdpConfig</a>                                       | No                                           | -                                           | OAuth2.0 protocol configuration. [Important] It is no longer recommended to use OAuth2.0. It is recommended to switch to OIDC.                                                                                                 | `{"grants":["authorization_code"],"access_token_lifetime":1209600,"refresh_token_lifetime":2592000,"introspection_endpoint_auth_method":"client_secret_post","revocation_endpoint_auth_method":"client_secret_post"}` |     | casProviderEnabled | boolean | No  | -   | Yes No Enable CAS identity provider |     |
| casConfig            | <a href="#CasIdPConfig">CasIdPConfig</a>                                           | No                                           | -                                           | CAS protocol configuration                                                                                                                                                                                                     | `{"casUserIdentifier":"${user.username}","customAttributes":{"customAttr1":"123"},"stLifetime":300}`                                                                                                                  |
| loginConfig          | <a href="#ApplicationLoginConfigInputDto">ApplicationLoginConfigInputDto</a>       | No                                           | -                                           | Login configuration                                                                                                                                                                                                            |                                                                                                                                                                                                                       |
| registerConfig       | <a href="#ApplicationRegisterConfigInputDto">ApplicationRegisterConfigInputDto</a> | No                                           | -                                           | Registration configuration                                                                                                                                                                                                     |                                                                                                                                                                                                                       |
| brandingConfig       | <a href="#ApplicationBrandingConfigInputDto">ApplicationBrandingConfigInputDto</a> | No                                           | -                                           | Branding configuration                                                                                                                                                                                                         |                                                                                                                                                                                                                       |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.ApplicationPaginatedRespDto;
import cn.authing.sdk.java.dto.CreateApplicationDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class CreateApplicationTest {
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

        CreateApplicationDto reqDto = new CreateApplicationDto();
        reqDto.setAppName("Demo");
        reqDto.setAppIdentifier("example");
        ApplicationPaginatedRespDto response = client.createApplication(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `CreateApplicationRespDto`

| Name       | Type                                                                     | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                   | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                   | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                   | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#CreateApplicationRespDataDto">CreateApplicationRespDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "appId": "62eaa95fe0xxxx9a5295bf7c",
    "appIdentifier": "example",
    "appName": "Demo",
    "appLogo": "Demo",
    "appDescription": "Example description",
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
      "defaultRegisterMethod": {
        "connectionType": "PASSWORD"
      }
    },
    "brandingConfig": {
      "customCSS": "/* \nEdit login page css\neg：\n.authing-guard-layout {\n  background: black !important;\n}\nChange the background color\n*/",
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
        "content": "I have read and agree to the Privacy Policy and Terms of Service"
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

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

### <a id="SamlIdpConfig"></a> SamlIdpConfig

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

### <a id="OauthIdpConfig"></a> OauthIdpConfig

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

### <a id="CasIdPConfig"></a> CasIdPConfig

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

### <a id="ApplicationLoginConfigInputDto"></a> ApplicationLoginConfigInputDto

| Name                      | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                        | <div style="width:200px">Example Value</div>                                   |
| ------------------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| mergeLoginAndRegisterPage | boolean | No                                           | Whether to enable login and registration merging                                                                                                                                                  |                                                                                |
| enabledBasicLoginMethods  | array   | No                                           | Basic login method enabled                                                                                                                                                                        |                                                                                |
| defaultLoginMethod        |         | No                                           | Application default login method (excluding social login and enterprise identity source login) Nested Type: <a href="#ApplicationDefaultLoginMethodInput">ApplicationDefaultLoginMethodInput</a>. | `{"connectionType":"QRCODE","qrcodeExtIdpConnId":"6303a2bf2xxxxx7f665f01bf1"}` |
| enabledExtIdpConnIds      | array   | No                                           | Enabled external identity source connection Nested Type: <a href="#ApplicationEnabledExtIdpConnInputDto">ApplicationEnabledExtIdpConnInputDto</a>.                                                | `[{"extIdpConnId":"xxx"}]`                                                     |
| enabledAllExtIdpConns     | boolean | No                                           | Enable all external identity source connections                                                                                                                                                   |                                                                                |
| showAuthorizationPage     | boolean | Yes                                          | Yes No Show user authorization page                                                                                                                                                               |                                                                                |

### <a id="ApplicationDefaultLoginMethodInput"></a> ApplicationDefaultLoginMethodInput

| Name               | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | <div style="width:200px">Example Value</div> |
| ------------------ | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| connectionType     | string | Yes                                          | Default login type<br> - `PASSWORD`: Password type, depends on the basic login method you enable, supports mobile phone number/email/user name + password for login<br> - `PASSCODE`: Verification code type, depends on the basic login method you enable, supports mobile phone number/email + verification code for login<br> - `QRCODE`: Scan code login type, currently includes three types: scan code login for self-built APP, scan code login for WeChat public account, and scan code login for WeChat mini program<br> | PASSCODE                                     |
| qrcodeType         | string | No                                           | When `connectionType` is `QRCODE`, this parameter indicates the QR code type. <br>- `SELF_BUILT_APP`: Scan the QR code of self-built APP<br>- `WECHAT_OFFICIAL_ACCOUNT`: Scan the QR code to follow the WeChat official account to log in<br>- `WECHAT_MINI_PROGRAM`: Scan the QR code to log in to the WeChat mini program<br>                                                                                                                                                                                                   | SELF_BUILT_APP                               |
| qrcodeExtIdpConnId | string | No                                           | When `connectionType` is `QRCODE`, you need to specify the ID of the specific scan code login identity source connection through this parameter.                                                                                                                                                                                                                                                                                                                                                                                  | `6303a2bf2xxxxx7f665f01bf1`                  |
| adExtIdpConnId     | string | No                                           | When `connectionType` is `AD`, you need to specify the ID of the specific AD identity source connection through this parameter.                                                                                                                                                                                                                                                                                                                                                                                                   | `6303a2bf2xxxxx7f665f01bf1`                  |
| ldapExtIdpConnId   | string | No                                           | When `connectionType` is `LDAP`, you need to specify the ID of the specific LDAP identity source connection through this parameter.                                                                                                                                                                                                                                                                                                                                                                                               | `6303a2bf2xxxxx7f665f01bf1`                  |

### <a id="ApplicationEnabledExtIdpConnInputDto"></a> ApplicationEnabledExtIdpConnInputDto

| Name         | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------------ | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| extIdpConnId | string | Yes                                          | Identity source connection ID              | `6303a2bf2xxxxx7f665f01bf1`                  |

### <a id="ApplicationRegisterConfigInputDto"></a> ApplicationRegisterConfigInputDto

| Name                        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                 | <div style="width:200px">Example Value</div> |
| --------------------------- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| enabledBasicRegisterMethods | array  | Yes                                          | Enabled registration method                                                                                                                                                                                                                                | `["EMAIL_CODE","PHONE_CODE"]`                |
| defaultRegisterMethod       | string | Yes                                          | Default registration type<br>- `PASSWORD`: Password type, supports email + password for login<br>- `PASSCODE`: Verification code type, depends on the registration method you enable, supports mobile phone number/email + verification code for login<br> | PASSCODE                                     |

### <a id="ApplicationBrandingConfigInputDto"></a> ApplicationBrandingConfigInputDto

| Name             | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---------------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| customCSSEnabled | boolean | No                                           | Yes No Enable custom CSS                   |                                              |
| customCSS        | string  | No                                           | Custom CSS content                         | `/\*                                         |

Edit login page css
eg:
.authing-guard-layout {
background: black !important;
}
Change the background color
\*/`| | guardVersion | string | No | Guard version: <br>-`Advanced`: Advanced version <br>- `Classical`: Classic version <br> | Advanced | | customLoadingImage | string | No | Custom loading icon, displayed when the login box is loading | `https://files.authing.co/user-contents/photos/cbd51df7-efb1-4b50-b38c-d8e5a04b1830.png` |
| customBackground | string | No | Custom login page background, example: <br>- Image background: `url(https://files.authing.co/user-contents/photos/6c6b3726-4a04-4ba7-b686-1a275f81a47a.png) center/cover`<br>- Solid color background: `rgba(37,49,122,1)`<br> | `https://files.authing.co/user-contents/photos/cbd51df7-efb1-4b50-b38c-d8e5a04b1830.png` |
| showChangeLanguageButton | boolean | No | Yes No Show language change button | |
| defaultLanguage | string | No | Default language displayed:<br>- `zh-CN`: Simplified Chinese<br>- `zh-TW`: Traditional Chinese<br>- `en-US`: English<br>- `ja-JP`: Japanese<br><br>By default, the GenAuth login page is automatically rendered based on the user's browser language. <br> | zh-CN |
| showForgetPasswordButton | boolean | No | Yes No Show the Forgot Password button | `true` |
| showEnterpriseConnections | boolean | No | Yes No Show enterprise identity source logins | `true` |
| showSocialConnections | boolean | No | Yes No Show social logins | `true` |

### <a id="CreateApplicationRespDataDto"></a> CreateApplicationRespDataDto

| Name                  | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                          | <div style="width:200px">Example Value</div> |
| --------------------- | ------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| appId                 | string  | Yes                                          | Application ID                                                                                                                                                                                                                      | `62eaa95fe0xxxx9a5295bf7c`                   |
| appIdentifier         | string  | Yes                                          | Application unique identifier                                                                                                                                                                                                       | `example`                                    |
| appName               | string  | Yes                                          | Application Name                                                                                                                                                                                                                    | `Demo`                                       |
| appLogo               | string  | Yes                                          | Application Logo link                                                                                                                                                                                                               | `Demo`                                       |
| appDescription        | string  | No                                           | Application description                                                                                                                                                                                                             | `Example description`                        |
| appType               | string  | Yes                                          | Application type                                                                                                                                                                                                                    | web                                          |
| userPoolId            | string  | Yes                                          | User pool ID                                                                                                                                                                                                                        |                                              |
| isIntegrateApp        | boolean | Yes                                          | Yes No is an integrated application                                                                                                                                                                                                 |                                              |
| defaultProtocol       | string  | Yes                                          | Default application protocol type                                                                                                                                                                                                   | oidc                                         |
| redirectUris          | array   | Yes                                          | Application login callback address                                                                                                                                                                                                  | `["https://example.com/callback"]`           |
| logoutRedirectUris    | array   | Yes                                          | Application logout callback address                                                                                                                                                                                                 | `["https://example.com/logout-callback"]`    |
| initLoginUri          | string  | Yes                                          | Initiate login address: When you click "Experience Login" in the GenAuth application detail or click the application icon in the application panel, you will be redirected to this URL, which is the GenAuth login page by default. | `["https://example.com/login"]`              |
| ssoEnabled            | boolean | Yes                                          | Yes No Enable SSO single sign-on                                                                                                                                                                                                    | `true`                                       |
| ssoEnabledAt          | string  | No                                           | Time to enable SSO single sign-on                                                                                                                                                                                                   | `2022-07-03T03:20:30.000Z`                   |
| loginConfig           |         | Yes                                          | Login configuration Nested Type: <a href="#ApplicationLoginConfigDto">ApplicationLoginConfigDto</a>.                                                                                                                                |                                              |
| registerConfig        |         | Yes                                          | Registration configuration Nested Type: <a href="#ApplicationRegisterConfig">ApplicationRegisterConfig</a>.                                                                                                                         |                                              |
| brandingConfig        |         | Yes                                          | Branding configuration Nested Type: <a href="#ApplicationBrandingConfig">ApplicationBrandingConfig</a>.                                                                                                                             |                                              |
| oidcConfig            |         | Yes                                          | OIDC protocol configuration Nested Type: <a href="#OIDCConfig">OIDCConfig</a>.                                                                                                                                                      |                                              |
| samlProviderEnabled   | boolean | Yes                                          | Yes No Enable SAML identity provider                                                                                                                                                                                                |                                              |
| samlConfig            |         | No                                           | SAML protocol configuration Nested Type: <a href="#SamlIdpConfig">SamlIdpConfig</a>.                                                                                                                                                |                                              |
| oauthProviderEnabled  | boolean | Yes                                          | Yes No Enable OAuth identity provider                                                                                                                                                                                               |                                              |
| oauthConfig           |         | No                                           | OAuth2.0 protocol configuration Nested Type: <a href="#OauthIdpConfig">OauthIdpConfig</a>.                                                                                                                                          |                                              |
| casProviderEnabled    | boolean | Yes                                          | Yes No Enable CAS identity provider                                                                                                                                                                                                 |                                              |
| casConfig             |         | No                                           | CAS protocol configuration Nested Type: <a href="#CasIdPConfig">CasIdPConfig</a>.                                                                                                                                                   |                                              |
| customBrandingEnabled | boolean | Yes                                          | Yes No Customize the login box of this application. The global login box configuration is used by default.                                                                                                                          |                                              |
| customSecurityEnabled | boolean | Yes                                          | Yes No Customize the security rules of this application. The global security configuration is used by default.                                                                                                                      |                                              |
| template              | string  | No                                           | Template type for integrated applications                                                                                                                                                                                           | `github`                                     |

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

### <a id="ApplicationRegisterConfig"></a> ApplicationRegisterConfig

| Name                        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                           | <div style="width:200px">Example Value</div> |
| --------------------------- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| enabledBasicRegisterMethods | array  | Yes                                          | Enabled registration method                                                                                                                                                                                                                          | `["EMAIL_CODE","PHONE_CODE"]`                |
| defaultRegisterMethod       | string | Yes                                          | Default registration type<br> - `PASSWORD`: Password type, supports email + password login<br> - `PASSCODE`: Verification code type, depends on the registration method you enable, supports mobile phone number/email + verification code login<br> | PASSCODE                                     |

### <a id="ApplicationBrandingConfig"></a> ApplicationBrandingConfig

| Name             | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---------------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| customCSSEnabled | boolean | Yes                                          | Yes No Enable custom CSS                   |                                              |
| customCSS        | string  | No                                           | Custom CSS content                         | `/\*                                         |

Edit login page css
eg:
.authing-guard-layout {
background: black !important;
}
Change the background color
\*/`| | guardVersion | string | Yes | Guard version: <br>-`Advanced`: Advanced version <br>- `Classical`: Classic version <br> | Advanced | | customLoadingImage | string | No | Custom loading icon, displayed when the login box is loading | `https://files.authing.co/user-contents/photos/cbd51df7-efb1-4b50-b38c-d8e5a04b1830.png` |
| customBackground | string | No | Custom login page background, example: <br>- Image background: `url(https://files.authing.co/user-contents/photos/6c6b3726-4a04-4ba7-b686-1a275f81a47a.png) center/cover`<br>- Solid color background: `rgba(37,49,122,1)`<br> | `https://files.authing.co/user-contents/photos/cbd51df7-efb1-4b50-b38c-d8e5a04b1830.png` |
| showChangeLanguageButton | boolean | Yes | Yes No Show language change button | |
| defaultLanguage | string | Yes | Default language:<br>- `zh-CN`: Simplified Chinese<br>- `zh-TW`: Traditional Chinese<br>- `en-US`: English<br>- `ja-JP`: Japanese<br> | zh-CN |
| showForgetPasswordButton | boolean | Yes | Yes No Show the Forgot Password button | `true` |
| showEnterpriseConnections | boolean | Yes | Yes No Display enterprise identity source login method | `true` |
| showSocialConnections | boolean | Yes | Yes No Display social login method | `true` |
| showAgreement | boolean | Yes | Yes No Display login and registration agreements | |
| agreements | array | Yes | Display login and registration agreement list Nested Type: <a href="#ApplicationAgreementDto">ApplicationAgreementDto</a>. | |

### <a id="ApplicationAgreementDto"></a> ApplicationAgreementDto

| Name       | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                         | <div style="width:200px">Example Value</div>                           |
| ---------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| displayAt  | array   | Yes                                          | Pages to display (multiple selections possible):<br>- `LoginPage`: Login page<br>- `RegisterPage`: Registration page<br>                                           | `["LoginPage","RegisterPage"]`                                         |
| isRequired | boolean | Yes                                          | Yes No Required to be checked                                                                                                                                      | `true`                                                                 |
| lang       | string  | Yes                                          | For which languages ​​is this agreement valid:<br>- `zh-CN`: Simplified Chinese<br>- `zh-TW`: Traditional Chinese<br>- `en-US`: English<br>- `ja-JP`: Japanese<br> | zh-CN                                                                  |
| content    | string  | Yes                                          | For which languages ​​is this agreement valid                                                                                                                      | `I have read and agreed to the Privacy Agreement and Terms of Service` |

### <a id="OIDCConfig"></a> OIDCConfig

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

### <a id="SamlIdpConfig"></a> SamlIdpConfig

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

### <a id="OauthIdpConfig"></a> OauthIdpConfig

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

### <a id="CasIdPConfig"></a> CasIdPConfig

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
