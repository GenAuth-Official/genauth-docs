# Modify security configuration

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Optional security domain, GenAuth Token validity period (seconds), verification code length, verification code attempts, user mailbox modification security policy, user mobile phone number modification security policy, cookie expiration time setting, whether to prohibit user registration, frequent registration detection configuration, whether to require users to set passwords after verification code registration, whether to prohibit login and send authentication emails when logging in with unverified mailboxes, user self-service unlock configuration, whether to enable login account selection on the GenAuth login page, and modify security configuration by scanning the code for APP login

## Method name

`ManagementClient.update_security_settings`

## Request parameters

| Name                               | Type                                                                               | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                          | <div style="width:200px">Sample value</div> |
| ---------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| allowedOrigins                     | string[]                                                                           | No                                     | -                                           | Security domain (CORS)                                                                                                                                                                                                                                              | `["https://example.com"]`                   |
| authingTokenExpiresIn              | number                                                                             | No                                     | 129600                                      | GenAuth Token validity period (seconds)                                                                                                                                                                                                                             | `1296000`                                   |
| verifyCodeLength                   | number                                                                             | No                                     | 6                                           | Verification code length. Includes SMS verification code, email verification code, and graphic verification code.                                                                                                                                                   | `6`                                         |
| verifyCodeMaxAttempts              | number                                                                             | No                                     | 1                                           | Number of verification code attempts. Within a verification code validity period (default is 60 s), if the number of incorrect verification code input by the user exceeds this threshold, the current verification code will become invalid and need to be resent. | `1`                                         |
| changeEmailStrategy                | <a href="#ChangeEmailStrategyDto">ChangeEmailStrategyDto</a>                       | No                                     | -                                           | Security strategy for users to change their email addresses                                                                                                                                                                                                         | `{"verifyOldEmail":true}`                   |
| changePhoneStrategy                | <a href="#ChangePhoneStrategyDto">ChangePhoneStrategyDto</a>                       | No                                     | -                                           | Security strategy for users to change their phone numbers                                                                                                                                                                                                           | `{"verifyOldPhone":true}`                   |
| cookieSettings                     | <a href="#CookieSettingsDto">CookieSettingsDto</a>                                 | No                                     | -                                           | Cookie expiration time settings                                                                                                                                                                                                                                     |                                             |
| registerDisabled                   | boolean                                                                            | No                                     | -                                           | Whether to prohibit user registration. After enabling, users will not be able to register on their own and only administrators can create accounts for them. For B2B and B2E user pools, it is enabled by default.                                                  |                                             |
| registerAnomalyDetection           | <a href="#RegisterAnomalyDetectionConfigDto">RegisterAnomalyDetectionConfigDto</a> | No                                     | -                                           | Frequent registration detection configuration                                                                                                                                                                                                                       |                                             |
| completePasswordAfterPassCodeLogin | boolean                                                                            | No                                     | -                                           | Whether to require users to set a password after verification code registration (only valid for GenAuth login page and Guard, not for API calls).                                                                                                                   |                                             |
| loginAnomalyDetection              | <a href="#LoginAnomalyDetectionConfigDto">LoginAnomalyDetectionConfigDto</a>       | No                                     | -                                           | Login anti-violent configuration                                                                                                                                                                                                                                    |                                             |
| loginRequireEmailVerified          | boolean                                                                            | No                                     | -                                           | When using email login, whether to prohibit login and send verification email when logging in with unverified email. Users can only log in after receiving the email and completing the verification.                                                               |                                             |
| selfUnlockAccount                  | <a href="#SelfUnlockAccountConfigDto">SelfUnlockAccountConfigDto</a>               | No                                     | -                                           | User self-service unlock configuration. Note: Only users who have bound their mobile phone number/email address can self-unlock                                                                                                                                     |                                             |
| enableLoginAccountSwitch           | boolean                                                                            | No                                     | -                                           | Whether to enable login account selection on the GenAuth login page                                                                                                                                                                                                 |                                             |
| qrcodeLoginStrategy                | <a href="#QrcodeLoginStrategyDto">QrcodeLoginStrategyDto</a>                       | No                                     | -                                           | APP scan code login security configuration                                                                                                                                                                                                                          |                                             |

## Request Response

Type: `SecuritySettingsRespDto`

| Name       | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                                 | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                                 | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#SecuritySettingsDto">SecuritySettingsDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "allowedOrigins": "https://example.com \n https://example.com",
    "authingTokenExpiresIn": 1296000,
    "verifyCodeLength": 6,
    "verifyCodeMaxAttempts": 1,
    "changeEmailStrategy": {
      "verifyOldEmail": true
    },
    "changePhoneStrategy": {
      "verifyOldPhone": true
    },
    "cookieSettings": {
      "cookieExpiresIn": 1209600
    },
    "registerAnomalyDetection": {
      "limit": 50,
      "timeInterval": 300
    },
    "loginAnomalyDetection": {
      "loginFailStrategy": "captcha",
      "robotVerify": "condition_set",
      "accountLock": "condition_set",
      "loginFailCheck": {
        "limit": 50,
        "timeInterval": 300,
        "unit": "Second"
      },
      "loginPasswordFailCheck": {
        "limit": 50,
        "timeInterval": 300,
        "unit": "Second"
      },
      "accountLockLoginPasswordFailCheck": {
        "limit": 50,
        "timeInterval": 300,
        "unit": "Second"
      },
      "robotVerifyLoginPasswordFailCheck": {
        "limit": 50,
        "timeInterval": 300,
        "unit": "Second"
      },
      "robotVerifyLoginIpWhitelistCheck": {
        "ipWhitelist": "132.133.123.144,255.255.255.255"
      }
    },
    "selfUnlockAccount": {
      "strategy": "captcha"
    },
    "qrcodeLoginStrategy": {
      "qrcodeExpiresIn": 120,
      "qrcodeExpiresInUnit": "Second",
      "ticketExpiresIn": 300,
      "ticketExpiresInUnit": "Second",
      "allowExchangeUserInfoFromBrowser": true,
      "returnFullUserInfo": true
    }
  }
}
```

## Data Structure

### <a id="ChangeEmailStrategyDto"></a> ChangeEmailStrategyDto

| Name           | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                               | <div style="width:200px">Sample value</div> |
| -------------- | ------- | --------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------- |
| verifyOldEmail | boolean | yes                                           | Whether to verify the old email address when modifying the email address | `true`                                      |

### <a id="ChangePhoneStrategyDto"></a> ChangePhoneStrategyDto

| Name           | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                            | <div style="width:200px">Sample value</div> |
| -------------- | ------- | --------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------- |
| verifyOldPhone | boolean | yes                                           | Whether to verify the old phone number when changing the phone number | `true`                                      |

### <a id="CookieSettingsDto"></a> CookieSettingsDto

| Name                          | Type    | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                         | <div style="width:200px">Sample value</div> |
| ----------------------------- | ------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| cookieExpiresIn               | number  | yes                                    | Cookie validity period: the validity period of the user's login status (default is 1209600 seconds/14 days). After expiration, the user needs to log in again. For the application panel and applications that have been added to the application panel, this cookie expiration time will be used. | `1209600`                                   |
| cookieExpiresOnBrowserSession | boolean | yes                                    | Cookie expiration time is based on the browser session: it expires immediately after the current browser is closed, and you need to log in again when you open it next time.                                                                                                                       |                                             |

### <a id="RegisterAnomalyDetectionConfigDto"></a> RegisterAnomalyDetectionConfigDto

| Name         | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                      | <div style="width:200px">Sample value</div> |
| ------------ | ------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------- |
| enabled      | boolean | yes                                           | Whether to enable frequent registration restriction                                             |                                             |
| limit        | number  | yes                                           | Within a certain time period, for the same IP, the maximum number of registrations can be made. | `50`                                        |
| timeInterval | number  | yes                                           | The length of the limited period, in seconds.                                                   | `300`                                       |

### <a id="LoginAnomalyDetectionConfigDto"></a> LoginAnomalyDetectionConfigDto

| Name                              | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | <div style="width:200px">Sample value</div> |
| --------------------------------- | ------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| loginFailStrategy                 | string  | Yes                                           | Login security strategy. When a user triggers login failure frequency detection, what strategy is used? Currently, two strategies, verification code and account lock, are supported. When the account lock strategy is selected, only "Login password error limit" can be enabled. This field is marked as obsolete, but this field is still required. If you use the new version logic, you can write one by default. The new version uses accountLock for account lock and robotVerify for verification code | captcha                                     |
| robotVerify                       | string  | Yes                                           | Human-machine verification (verification code) strategy. Optional value, disable (not enabled)/condition_set (conditional enable)/always_enable (always enabled)                                                                                                                                                                                                                                                                                                                                                | `condition_set`                             |
| accountLock                       | string  | Yes                                           | Account lockout policy. Optional value, disable (not enabled)/condition_set (conditional enable)                                                                                                                                                                                                                                                                                                                                                                                                                | `condition_set`                             |
| loginFailCheck                    |         | Yes                                           | Limit of failed login attempts: When the user inputs incorrect login information, the corresponding policy will be triggered according to the "Login Security Policy" rule. Nested type: <a href="#LoginFailCheckConfigDto">LoginFailCheckConfigDto</a>.                                                                                                                                                                                                                                                        |                                             |
| loginPasswordFailCheck            |         | Yes                                           | Limit of incorrect login password: When the user inputs incorrect login password information, the corresponding policy will be triggered according to the "Login Security Policy" rule. This field is marked as obsolete, see accountLockLoginPasswordFailCheck/ robotVerifyLoginPasswordFailCheck Nested type: <a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>.                                                                                                                 |                                             |
| accountLockLoginPasswordFailCheck |         | No                                            | Account lock-login password error restriction: When the user logs in and enters the wrong password information, the corresponding policy will be triggered according to the "Login Security Policy" rule. Nested type: <a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>.                                                                                                                                                                                                          |                                             |
| robotVerifyLoginPasswordFailCheck |         | Yes                                           | Human-machine verification (verification code)-login password error restriction: When the user logs in and enters the wrong password information, the corresponding policy will be triggered according to the "Login Security Policy" rule. Nested type: <a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>.                                                                                                                                                                        |                                             |
| robotVerifyLoginIpWhitelistCheck  |         | Yes                                           | Human-machine verification (verification code) - ip whitelist: When the login IP is not in the whitelist, human-machine verification will be triggered. Nested type: <a href="#LoginIpWhitelistCheckConfigDto">LoginIpWhitelistCheckConfigDto</a>.                                                                                                                                                                                                                                                              |                                             |
| robotVerifyLoginTimeCheckEnable   | boolean | Yes                                           | Whether to enable login time limit                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                             |
| robotVerifyloginWeekStartEndTime  | array   | Yes                                           | Login time limit day of the week + start time array                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                             |

### <a id="LoginFailCheckConfigDto"></a> LoginFailCheckConfigDto

| Name         | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                              | <div style="width:200px">Sample value</div> |
| ------------ | ------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| enabled      | boolean | yes                                           | Whether to enable the limit on the number of failed logins.                                                             |                                             |
| limit        | number  | yes                                           | Within a certain period of time, for the same IP, the maximum number of failed logins will trigger the security policy. | `50`                                        |
| timeInterval | number  | yes                                           | Limit the period of time in seconds.                                                                                    | `300`                                       |
| unit         | string  | no                                            | Time unit. Second/Minute/Hour/Day, for display only, the unit of timeInterval is still seconds                          | `Second`                                    |

### <a id="LoginPassowrdFailCheckConfigDto"></a> LoginPassowrdFailCheckConfigDto

| Name         | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                            | <div style="width:200px">Sample value</div> |
| ------------ | ------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| enabled      | boolean | yes                                           | Whether to enable login password error limit                                                          |                                             |
| limit        | number  | yes                                           | Maximum limit on the number of incorrect passwords                                                    | `50`                                        |
| timeInterval | number  | yes                                           | Limit the period time length in seconds.                                                              | `300`                                       |
| unit         | string  | no                                            | Time length unit. Second/Minute/Hour/Day, for display only, the unit of timeInterval is still seconds | `Second`                                    |

### <a id="LoginIpWhitelistCheckConfigDto"></a> LoginIpWhitelistCheckConfigDto

| Name        | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>        | <div style="width:200px">Sample value</div> |
| ----------- | ------- | --------------------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| enabled     | boolean | yes                                           | Whether to enable login ip whitelist verification |                                             |
| ipWhitelist | string  | yes                                           | Human-machine verification ip whitelist           | `132.133.123.144,255.255.255.255`           |

### <a id="SelfUnlockAccountConfigDto"></a> SelfUnlockAccountConfigDto

| Name     | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                     | <div style="width:200px">Sample value</div> |
| -------- | ------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| enabled  | boolean | yes                                           | Whether to allow users to unlock their accounts by themselves.                                                 |                                             |
| strategy | string  | yes                                           | Self-service unlocking method. Currently supports original password + verification code and verification code. | captcha                                     |

### <a id="QrcodeLoginStrategyDto"></a> QrcodeLoginStrategyDto

| Name                             | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                     | <div style="width:200px">Sample value</div> |
| -------------------------------- | ------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| qrcodeExpiresIn                  | number  | yes                                           | QR code validity period, in seconds                                                                                                                            | `120`                                       |
| qrcodeExpiresInUnit              | string  | no                                            | Time unit, Second/Minute/Hour/Day, for display only                                                                                                            | `Second`                                    |
| ticketExpiresIn                  | number  | yes                                           | Ticket validity period, in seconds                                                                                                                             | `300`                                       |
| ticketExpiresInUnit              | string  | no                                            | Time unit, Second/Minute/Hour/Day, for display only                                                                                                            | `Second`                                    |
| allowExchangeUserInfoFromBrowser | boolean | yes                                           | The Web polling interface returns full user information. For details, see this document: Web polling interface returns full user information                   | `true`                                      |
| returnFullUserInfo               | boolean | yes                                           | Allows the use of tickets in the browser to exchange for user information. For details, see this document: Web polling interface returns full user information | `true`                                      |

### <a id="SecuritySettingsDto"></a> SecuritySettingsDto

| Name                               | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                       | <div style="width:200px">Sample value</div> |
| ---------------------------------- | ------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| allowedOrigins                     | string  | No                                            | Security domain (CORS)                                                                                                                                                                                                                                                           | `https://example.com                        |
| https://example.com`               |
| authingTokenExpiresIn              | number  | Yes                                           | GenAuth Token validity period (seconds)                                                                                                                                                                                                                                          | `1296000`                                   |
| verifyCodeLength                   | number  | Yes                                           | Verification code length. Includes SMS verification code, email verification code, and graphic verification code.                                                                                                                                                                | `6`                                         |
| verifyCodeMaxAttempts              | number  | Yes                                           | Number of verification code attempts. Within the validity period of a verification code (60 seconds by default), if the number of incorrect verification code input by the user exceeds this threshold, the current verification code will become invalid and need to be resent. | `1`                                         |
| changeEmailStrategy                |         | Yes                                           | Security strategy for users to change their email addresses Nested type: <a href="#ChangeEmailStrategyDto">ChangeEmailStrategyDto</a>.                                                                                                                                           | `{"verifyOldEmail":true}`                   |
| changePhoneStrategy                |         | Yes                                           | Security strategy for users to change their mobile phone numbers Nested type: <a href="#ChangePhoneStrategyDto">ChangePhoneStrategyDto</a>.                                                                                                                                      | `{"verifyOldPhone":true}`                   |
| cookieSettings                     |         | No                                            | Cookie expiration time settings Nested type: <a href="#CookieSettingsDto">CookieSettingsDto</a>.                                                                                                                                                                                 |                                             |
| registerDisabled                   | boolean | yes                                           | Whether to prohibit user registration. After it is turned on, users will not be able to register on their own, and only administrators can create accounts for them. For B2B and B2E user pools, it is turned on by default.                                                     |                                             |
| registerAnomalyDetection           |         | yes                                           | Frequent registration detection configuration Nested type: <a href="#RegisterAnomalyDetectionConfigDto">RegisterAnomalyDetectionConfigDto</a>.                                                                                                                                   |                                             |
| completePasswordAfterPassCodeLogin | boolean | yes                                           | Whether to require users to set a password after verification code registration (only valid for GenAuth login page and Guard, not for API calls).                                                                                                                                |                                             |
| loginAnomalyDetection              |         | yes                                           | Login anti-violent configuration Nested type: <a href="#LoginAnomalyDetectionConfigDto">LoginAnomalyDetectionConfigDto</a>.                                                                                                                                                      |                                             |
| loginRequireEmailVerified          | boolean | yes                                           | When logging in with an email, whether to prohibit login and send a verification email when logging in with an unverified email. The user can log in only after receiving the email and completing the verification.                                                             |                                             |
| selfUnlockAccount                  |         | yes                                           | User self-service unlock configuration. Note: Only users who have bound their mobile phone number/email address can self-unlock Nested type: <a href="#SelfUnlockAccountConfigDto">SelfUnlockAccountConfigDto</a>.                                                               |                                             |
| enableLoginAccountSwitch           | boolean | yes                                           | Whether to enable login account selection on the GenAuth login page                                                                                                                                                                                                              |                                             |
| qrcodeLoginStrategy                |         | yes                                           | APP scan code login security configuration Nested type: <a href="#QrcodeLoginStrategyDto">QrcodeLoginStrategyDto</a>.                                                                                                                                                            |                                             |

### <a id="ChangeEmailStrategyDto"></a> ChangeEmailStrategyDto

| Name           | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                               | <div style="width:200px">Sample value</div> |
| -------------- | ------- | --------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------- |
| verifyOldEmail | boolean | yes                                           | Whether to verify the old email address when modifying the email address | `true`                                      |

### <a id="ChangePhoneStrategyDto"></a> ChangePhoneStrategyDto

| Name           | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                            | <div style="width:200px">Sample value</div> |
| -------------- | ------- | --------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------- |
| verifyOldPhone | boolean | yes                                           | Whether to verify the old phone number when changing the phone number | `true`                                      |

### <a id="CookieSettingsDto"></a> CookieSettingsDto

| Name                          | Type    | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                         | <div style="width:200px">Sample value</div> |
| ----------------------------- | ------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| cookieExpiresIn               | number  | yes                                    | Cookie validity period: the validity period of the user's login status (default is 1209600 seconds/14 days). After expiration, the user needs to log in again. For the application panel and applications that have been added to the application panel, this cookie expiration time will be used. | `1209600`                                   |
| cookieExpiresOnBrowserSession | boolean | yes                                    | Cookie expiration time is based on the browser session: it expires immediately after the current browser is closed, and you need to log in again the next time you open it.                                                                                                                        |                                             |

### <a id="RegisterAnomalyDetectionConfigDto"></a> RegisterAnomalyDetectionConfigDto

| Name         | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                      | <div style="width:200px">Sample value</div> |
| ------------ | ------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------- |
| enabled      | boolean | yes                                           | Whether to enable frequent registration restriction                                             |                                             |
| limit        | number  | yes                                           | Within a certain time period, for the same IP, the maximum number of registrations can be made. | `50`                                        |
| timeInterval | number  | yes                                           | Limit the period time length in seconds.                                                        | `300`                                       |

### <a id="LoginAnomalyDetectionConfigDto"></a> LoginAnomalyDetectionConfigDto

| Name                              | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | <div style="width:200px">Sample value</div> |
| --------------------------------- | ------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| loginFailStrategy                 | string  | Yes                                           | Login security strategy. When a user triggers login failure frequency detection, what strategy is used? Currently, two strategies, verification code and account lock, are supported. When the account lock strategy is selected, only "Login password error limit" can be enabled. This field is marked as obsolete, but this field is still required. If you use the new version logic, you can write one by default. The new version uses accountLock for account lock and robotVerify for verification code | captcha                                     |
| robotVerify                       | string  | Yes                                           | Human-machine verification (verification code) strategy. Optional value, disable (not enabled)/condition_set (conditional enable)/always_enable (always enabled)                                                                                                                                                                                                                                                                                                                                                | `condition_set`                             |
| accountLock                       | string  | Yes                                           | Account lockout policy. Optional value, disable (not enabled)/condition_set (conditional enable)                                                                                                                                                                                                                                                                                                                                                                                                                | `condition_set`                             |
| loginFailCheck                    |         | Yes                                           | Limit of failed login attempts: When the user inputs incorrect login information, the corresponding policy will be triggered according to the "Login Security Policy" rule. Nested type: <a href="#LoginFailCheckConfigDto">LoginFailCheckConfigDto</a>.                                                                                                                                                                                                                                                        |                                             |
| loginPasswordFailCheck            |         | Yes                                           | Limit of incorrect login password: When the user inputs incorrect login password information, the corresponding policy will be triggered according to the "Login Security Policy" rule. This field is marked as obsolete, see accountLockLoginPasswordFailCheck/ robotVerifyLoginPasswordFailCheck Nested type: <a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>.                                                                                                                 |                                             |
| accountLockLoginPasswordFailCheck |         | No                                            | Account lock-login password error restriction: When the user logs in and enters the wrong password information, the corresponding policy will be triggered according to the "Login Security Policy" rule. Nested type: <a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>.                                                                                                                                                                                                          |                                             |
| robotVerifyLoginPasswordFailCheck |         | Yes                                           | Human-machine verification (verification code)-login password error restriction: When the user logs in and enters the wrong password information, the corresponding policy will be triggered according to the "Login Security Policy" rule. Nested type: <a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>.                                                                                                                                                                        |                                             |
| robotVerifyLoginIpWhitelistCheck  |         | Yes                                           | Human-machine verification (verification code) - ip whitelist: When the login IP is not in the whitelist, human-machine verification will be triggered. Nested type: <a href="#LoginIpWhitelistCheckConfigDto">LoginIpWhitelistCheckConfigDto</a>.                                                                                                                                                                                                                                                              |                                             |
| robotVerifyLoginTimeCheckEnable   | boolean | Yes                                           | Whether to enable login time limit                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                             |
| robotVerifyloginWeekStartEndTime  | array   | Yes                                           | Login time limit day of the week + start time array                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                             |

### <a id="LoginFailCheckConfigDto"></a> LoginFailCheckConfigDto

| Name         | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                              | <div style="width:200px">Sample value</div> |
| ------------ | ------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| enabled      | boolean | yes                                           | Whether to enable the limit on the number of failed logins.                                                             |                                             |
| limit        | number  | yes                                           | Within a certain period of time, for the same IP, the maximum number of failed logins will trigger the security policy. | `50`                                        |
| timeInterval | number  | yes                                           | Limit the period of time in seconds.                                                                                    | `300`                                       |
| unit         | string  | no                                            | Time unit. Second/Minute/Hour/Day, for display only, the unit of timeInterval is still seconds                          | `Second`                                    |

### <a id="LoginPassowrdFailCheckConfigDto"></a> LoginPassowrdFailCheckConfigDto

| Name         | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                            | <div style="width:200px">Sample value</div> |
| ------------ | ------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| enabled      | boolean | yes                                           | Whether to enable login password error limit                                                          |                                             |
| limit        | number  | yes                                           | Maximum limit on the number of incorrect passwords                                                    | `50`                                        |
| timeInterval | number  | yes                                           | Limit the period time length in seconds.                                                              | `300`                                       |
| unit         | string  | no                                            | Time length unit. Second/Minute/Hour/Day, for display only, the unit of timeInterval is still seconds | `Second`                                    |

### <a id="LoginIpWhitelistCheckConfigDto"></a> LoginIpWhitelistCheckConfigDto

| Name        | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>        | <div style="width:200px">Sample value</div> |
| ----------- | ------- | --------------------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| enabled     | boolean | yes                                           | Whether to enable login ip whitelist verification |                                             |
| ipWhitelist | string  | yes                                           | Human-machine verification ip whitelist           | `132.133.123.144,255.255.255.255`           |

### <a id="SelfUnlockAccountConfigDto"></a> SelfUnlockAccountConfigDto

| Name     | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                     | <div style="width:200px">Sample value</div> |
| -------- | ------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| enabled  | boolean | yes                                           | Whether to allow users to unlock their accounts by themselves.                                                 |                                             |
| strategy | string  | yes                                           | Self-service unlocking method. Currently supports original password + verification code and verification code. | captcha                                     |

### <a id="QrcodeLoginStrategyDto"></a> QrcodeLoginStrategyDto

| Name                             | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                     | <div style="width:200px">Sample value</div> |
| -------------------------------- | ------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| qrcodeExpiresIn                  | number  | yes                                           | QR code validity period, in seconds                                                                                                                            | `120`                                       |
| qrcodeExpiresInUnit              | string  | no                                            | Time unit, Second/Minute/Hour/Day, for display only                                                                                                            | `Second`                                    |
| ticketExpiresIn                  | number  | yes                                           | Ticket validity period, in seconds                                                                                                                             | `300`                                       |
| ticketExpiresInUnit              | string  | no                                            | Time unit, Second/Minute/Hour/Day, for display only                                                                                                            | `Second`                                    |
| allowExchangeUserInfoFromBrowser | boolean | yes                                           | The Web polling interface returns full user information. For details, see this document: Web polling interface returns full user information                   | `true`                                      |
| returnFullUserInfo               | boolean | yes                                           | Allows the use of tickets in the browser to exchange for user information. For details, see this document: Web polling interface returns full user information | `true`                                      |
