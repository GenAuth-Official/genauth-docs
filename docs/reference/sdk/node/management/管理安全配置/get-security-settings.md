# Get security configuration

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

No need to pass parameters to get security configuration

## Method name

`ManagementClient.getSecuritySettings`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

## Sample code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

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
  const result = await managementClient.getSecuritySettings();

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `SecuritySettingsRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ---- | ------------------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful request is not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |     | data | <a href="#SecuritySettingsDto">SecuritySettingsDto</a> | response data | Example results: ```json { "statusCode": 200, "message": "Operation successful", "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c", "data": { "allowedOrigins": "https://example.com \n https://example.com", "authingTokenExpiresIn": 1296000, "verifyCodeLength": 6, "verifyCodeMaxAttempts": 1, "changeEmailStrategy": { "verifyOldEmail": true }, "changePhoneStrategy": { "verifyOldPhone": true }, "cookieSettings": { "cookieExpiresIn": 1209600 }, "registerAnomalyDetection": { "limit": 50, "timeInterval": 300 }, "loginAnomalyDetection": { "loginFailStrategy": "captcha", "robotVerify": "condition_set", "accountLock": "condition_set", "loginFailCheck": { "limit": 50, "timeInterval": 300, "unit": "Second" }, "loginPasswordFailCheck": { "limit": 50, "timeInterval": 300, "unit": "Second" }, "accountLockLoginPasswordFailCheck": { "limit": 50, "timeInterval": 300, "unit": "Second" }, "robotVerifyLoginPasswordFailCheck": { "limit": 50, "timeInterval": 300, "unit": "Second" }, "robotVerifyLoginIpWhitelistCheck": { "ipWhitelist": "132.133.123.144,255.255.255.255" } }, "selfUnlockAccount": { "strategy": "captcha" }, "qrcodeLoginStrategy": { "qrcodeExpiresIn": 120, "qrcodeExpiresInUni# Get security configuration |

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

No need to pass parameters to get security configuration

## Method name

`ManagementClient.getSecuritySettings`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

## Sample code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

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
  const result = await managementClient.getSecuritySettings();

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `SecuritySettingsRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ---- | ------------------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful request is not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |     | data | <a href="#SecuritySettingsDto">SecuritySettingsDto</a> | response data | Example results: ```json { "statusCode": 200, "message": "Operation successful", "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c", "data": { "allowedOrigins": "https://example.com \n https://example.com", "authingTokenExpiresIn": 1296000, "verifyCodeLength": 6, "verifyCodeMaxAttempts": 1, "changeEmailStrategy": { "verifyOldEmail": true }, "changePhoneStrategy": { "verifyOldPhone": true }, "cookieSettings": { "cookieExpiresIn": 1209600 }, "registerAnomalyDetection": { "limit": 50, "timeInterval": 300 }, "loginAnomalyDetection": { "loginFailStrategy": "captcha", "robotVerify": "condition_set", "accountLock": "condition_set", "loginFailCheck": { "limit": 50, "timeInterval": 300, "unit": "Second" }, "loginPasswordFailCheck": { "limit": 50, "timeInterval": 300, "unit": "Second" }, "accountLockLoginPasswordFailCheck": { "limit": 50, "timeInterval": 300, "unit": "Second" }, "robotVerifyLoginPasswordFailCheck": { "limit": 50, "timeInterval": 300, "unit": "Second" }, "robotVerifyLoginIpWhitelistCheck": { "ipWhitelist": "132.133.123.144,255.255.255.255" } }, "selfUnlockAccount": { "strategy": "captcha" }, "qrcodeLoginStrategy": { "qrcodeExpiresIn": 120, "qrcodeExpiresInUni# Get security configuration |

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

No need to pass parameters to get security configuration

## Method name

`ManagementClient.getSecuritySettings`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

## Sample code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

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
  const result = await managementClient.getSecuritySettings();

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `SecuritySettingsRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ---- | ------------------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful request is not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |     | data | <a href="#SecuritySettingsDto">SecuritySettingsDto</a> | response data | Example results: ```json { "statusCode": 200, "message": "Operation successful", "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c", "data": { "allowedOrigins": "https://example.com \n https://example.com", "authingTokenExpiresIn": 1296000, "verifyCodeLength": 6, "verifyCodeMaxAttempts": 1, "changeEmailStrategy": { "verifyOldEmail": true }, "changePhoneStrategy": { "verifyOldPhone": true }, "cookieSettings": { "cookieExpiresIn": 1209600 }, "registerAnomalyDetection": { "limit": 50, "timeInterval": 300 }, "loginAnomalyDetection": { "loginFailStrategy": "captcha", "robotVerify": "condition_set", "accountLock": "condition_set", "loginFailCheck": { "limit": 50, "timeInterval": 300, "unit": "Second" }, "loginPasswordFailCheck": { "limit": 50, "timeInterval": 300, "unit": "Second" }, "accountLockLoginPasswordFailCheck": { "limit": 50, "timeInterval": 300, "unit": "Second" }, "robotVerifyLoginPasswordFailCheck": { "limit": 50, "timeInterval": 300, "unit": "Second" }, "robotVerifyLoginIpWhitelistCheck": { "ipWhitelist": "132.133.123.144,255.255.255.255" } }, "selfUnlockAccount": { "strategy": "captcha" }, "qrcodeLoginStrategy": { "qrcodeExpiresIn": 120, "qrcodeExpiresInUni# Get security configuration |

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

No need to pass parameters to get security configuration

## Method name

`ManagementClient.getSecuritySettings`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

## Sample code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

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
  const result = await managementClient.getSecuritySettings();

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `SecuritySettingsRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ---- | ------------------------------------------------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful request is not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |     | data | <a href="#SecuritySettingsDto">SecuritySettingsDto</a> | response data | Example results: ```json { "statusCode": 200, "message": "Operation successful", "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c", "data": { "allowedOrigins": "https://example.com \n https://example.com", "authingTokenExpiresIn": 1296000, "verifyCodeLength": 6, "verifyCodeMaxAttempts": 1, "changeEmailStrategy": { "verifyOldEmail": true }, "changePhoneStrategy": { "verifyOldPhone": true }, "cookieSettings": { "cookieExpiresIn": 1209600 }, "registerAnomalyDetection": { "limit": 50, "timeInterval": 300 }, "loginAnomalyDetection": { "loginFailStrategy": "captcha", "robotVerify": "condition_set", "accountLock": "condition_set", "loginFailCheck": { "limit": 50, "timeInterval": 300, "unit": "Second" }, "loginPasswordFailCheck": { "limit": 50, "timeInterval": 300, "unit": "Second" }, "accountLockLoginPasswordFailCheck": { "limit": 50, "timeInterval": 300, "unit": "Second" }, "robotVerifyLoginPasswordFailCheck": { "limit": 50, "timeInterval": 300, "unit": "Second" }, "robotVerifyLoginIpWhitelistCheck": { "ipWhitelist": "132.133.123.144,255.255.255.255" } }, "selfUnlockAccount": { "strategy": "captcha" }, "qrcodeLoginStrategy": { "qrcodeExpiresIn": 120, "qrcodeExpiresInUnit": "Second", |

"ticketExpiresIn": 300,
"ticketExpiresInUnit": "Second",
"allowExchangeUserInfoFromBrowser": true,
"returnFullUserInfo": true
}
}
}

```

## Data Structure

### <a id="SecuritySettingsDto"></a> SecuritySettingsDto

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------------------------------- | ------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- |
| allowedOrigins | string | No | Security Domain (CORS) | `https://example.com |
| https://example.com` |
| authingTokenExpiresIn | number | Yes | GenAuth Token validity period (seconds) | `1296000` |
| verifyCodeLength | number | Yes | Verification code length. Includes SMS verification code, email verification code, and graphic verification code. | `6` |
| verifyCodeMaxAttempts | number | Yes | Verification code attempts. Within a verification code validity period (default is 60 s), if the number of incorrect verification code input by the user exceeds this threshold, the current verification code will become invalid and need to be resent. | `1` |
| changeEmailStrategy | | Yes | Security strategy for users to change their email addresses Nested type: <a href="#ChangeEmailStrategyDto">ChangeEmailStrategyDto</a>. | `{"verifyOldEmail":true}` |
| changePhoneStrategy | | Yes | Security strategy for users to change their phone numbers Nested type: <a href="#ChangePhoneStrategyDto">ChangePhoneStrategyDto</a>. | `{"verifyOldPhone":true}` |
| cookieSettings | | No | Cookie expiration time settings Nested type: <a href="#CookieSettingsDto">CookieSettingsDto</a>. | |
| registerDisabled | boolean | Yes | Whether to prohibit user registration. After turning it on, users will not be able to register on their own, and only administrators can create accounts for them. For B2B and B2E user pools, it is turned on by default. | |
| registerAnomalyDetection | | Yes | Frequent registration detection configuration Nested type: <a href="#RegisterAnomalyDetectionConfigDto">RegisterAnomalyDetectionConfigDto</a>. | |
| completePasswordAfterPassCodeLogin | boolean | Yes | Whether to require users to set a password after verification code registration (only valid for GenAuth login page and Guard, not for API calls). | |
| loginAnomalyDetection | | Yes | Login anti-riot configuration Nested type: <a href="#LoginAnomalyDetectionConfigDto">LoginAnomalyDetectionConfigDto</a>. | |
| loginRequireEmailVerified | boolean | Yes | When logging in with an email, whether to prohibit login and send a verification email when logging in with an unverified email. The user can only log in after receiving the email and completing the verification. | |
| selfUnlockAccount | | Yes | User self-service unlock configuration. Note: Only users who have bound their mobile phone number/email address can self-unlock Nested type: <a href="#SelfUnlockAccountConfigDto">SelfUnlockAccountConfigDto</a>. | |
| enableLoginAccountSwitch | boolean | yes | Whether to enable login account selection on the GenAuth login page | |
| qrcodeLoginStrategy | | yes | APP scan code login security configuration Nested type: <a href="#QrcodeLoginStrategyDto">QrcodeLoginStrategyDto</a>. | |

### <a id="ChangeEmailStrategyDto"></a> ChangeEmailStrategyDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------------- | ------- | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| verifyOldEmail | boolean | yes| Whether to verify the old email address when changing the email address | `true` |

### <a id="ChangePhoneStrategyDto"></a> ChangePhoneStrategyDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------------- | ------- | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| verifyOldPhone | boolean | yes | Whether to verify the old phone number when changing the phone number | `true` |

### <a id="CookieSettingsDto"></a> CookieSettingsDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------------------------- | ------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| cookieExpiresIn | number | yes | Cookie validity period: the validity period of the user's login status (default is 1209600 seconds/14 days). After expiration, the user needs to log in again. For the application panel and applications that have been added to the application panel, this cookie expiration time will be used. | `1209600` |
| cookieExpiresOnBrowserSession | boolean | yes | Cookie expiration time is based on the browser session: it expires immediately after the current browser is closed, and you need to log in again the next time you open it. | |

### <a id="RegisterAnomalyDetectionConfigDto"></a> RegisterAnomalyDetectionConfigDto

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------ | ------- | -------------------------------------- | ----------------------------------------------------- | ------------------------------------- |
| enabled | boolean | yes | Whether to enable frequent registration restriction | |
| limit | number | yes | Within a certain time period, for the same IP, the maximum number of registrations can be made. | `50` |
| timeInterval | number | yes | The length of the limited period, in seconds. | `300` |

### <a id="LoginAnomalyDetectionConfigDto"></a> LoginAnomalyDetectionConfigDto

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| --------------------------------- | ------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- |
| loginFailStrategy | string | Yes | Login security strategy. When a user triggers login failure frequency detection, what strategy is used? Currently, two strategies are supported: verification code and account lock. When the account lock strategy is selected, only "Login password error limit" can be enabled. This field is marked as obsolete, but this field is still required. If you use the new version logic, you can write one by default. The new version uses accountLock for account lock and robotVerify for verification code | captcha |
| robotVerify | string | Yes | Human-machine verification (verification code) strategy. Optional values: disable (not enabled)/condition_set (conditional enable)/always_enable (always enabled) | `condition_set` |
| accountLock | string | Yes | Account lock strategy. Optional values: disable (not enabled)/condition_set (conditional enable) | `condition_set` |
| loginFailCheck | | Yes | Limit of failed logins: When the user enters incorrect information during login, the corresponding strategy will be triggered according to the "Login Security Strategy" rule. Nested type: <a href="#LoginFailCheckConfigDto">LoginFailCheckConfigDto</a>. | |
| loginPasswordFailCheck | | Yes | Limit of incorrect login passwords: When the user enters incorrect password information during login, the corresponding strategy will be triggered according to the "Login Security Strategy" rule. This field is marked as deprecated, see accountLockLoginPasswordFailCheck/ robotVerifyLoginPasswordFailCheck Nested type: <a href="#LoginPasswordFailChecksowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>. | |
| accountLockLoginPasswordFailCheck | | No | Account lock-login password error restriction: When the user logs in and enters the wrong password information, the corresponding policy will be triggered according to the "Login Security Policy" rule. Nested type: <a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>. | |
| robotVerifyLoginPasswordFailCheck | | Yes | Human-machine verification (verification code)-login password error restriction: When the user logs in and enters the wrong password information, the corresponding policy will be triggered according to the "Login Security Policy" rule. Nested type: <a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>. | |
| robotVerifyLoginIpWhitelistCheck | | Yes | Human-machine verification (verification code) - ip whitelist: When the login IP is not in the whitelist, human-machine verification will be triggered. Nested type: <a href="#LoginIpWhitelistCheckConfigDto">LoginIpWhitelistCheckConfigDto</a>. | |
| robotVerifyLoginTimeCheckEnable | boolean | yes | Whether to enable login time limit | |
| robotVerifyloginWeekStartEndTime | array | yes | Login time limit days of the week + start time array | |

### <a id="LoginFailCheckConfigDto"></a> LoginFailCheckConfigDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------ | ------- | -------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------- |
| enabled | boolean | yes | Whether to enable login failure limit. | |
| limit | number | yes | Within a certain period of time, for the same IP, the maximum number of login failures before the security policy is triggered. | `50` |
| timeInterval | number | yes | Limits the periodic time length in seconds. | `300` |
| unit | string | no | The time length unit. Second/Minute/Hour/Day, only for display, the unit of timeInterval is still seconds | `Second` |

### <a id="LoginPassowrdFailCheckConfigDto"></a> LoginPassowrdFailCheckConfigDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------ | ------- | -------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------- |
| enabled | boolean | yes | Whether to enable login password error limit | |
| limit | number | yes | Maximum limit on the number of password errors | `50` |
| timeInterval | number | yes | Limit the period time length, in seconds. | `300` |
| unit | string | no | Time length unit. Second/Minute/Hour/Day, only for display, the unit of timeInterval is still seconds | `Second` |

### <a id="LoginIpWhitelistCheckConfigDto"></a> LoginIpWhitelistCheckConfigDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------- | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| enabled | boolean | yes | Whether to enable login ip whitelist verification | |
| ipWhitelist | string | yes | Human-machine verification ip whitelist | `132.133.123.144,255.255.255.255` |

### <a id="SelfUnlockAccountConfigDto"></a> SelfUnlockAccountConfigDto

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------- | ------- | -------------------------------------- | ------------------------------------------------------- | ------------------------------------- |
| enabled | boolean | yes | Whether to allow users to unlock their accounts by themselves. | |
| strategy | string | yes | Self-service unlocking method, currently supports original password + verification code and verification code. | captcha |

### <a id="QrcodeLoginStrategyDto"></a> QrcodeLoginStrategyDto

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------------------------------- | ------- | -------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------- |
| qrcodeExpiresIn | number | Yes | QR code validity period, in seconds | `120` |
| qrcodeExpiresInUnit | string | No | Time unit, Second/Minute/Hour/Day, for display only | `Second` |
| ticketExpiresIn | number | Yes | Ticket validity period, in seconds | `300` |
| ticketExpiresInUnit | string | No | Time unit, Second/Minute/Hour/Day, for display only | `Second` |
| allowExchangeUserInfoFromBrowser | boolean | yes | The Web polling interface returns complete user information, see this document for details: Web polling interface returns complete user information | `true` |
| returnFullUserInfo | boolean | yes | Allow using ticket to exchange user information in the browser, see this document for details: Web polling interface returns complete user information | `true` |
```
