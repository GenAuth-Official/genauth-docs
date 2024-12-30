# Modify security configuration

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Optional security domain, GenAuth Token validity period (seconds), verification code length, verification code attempts, user mailbox modification security policy, user mobile phone number modification security policy, cookie expiration time setting, whether to prohibit user registration, frequent registration detection configuration, whether to require users to set passwords after verification code registration, whether to prohibit login and send authentication emails when logging in with unverified mailboxes, user self-service unlock configuration, whether to enable login account selection on the GenAuth login page, and APP scan code login security configuration to modify security configuration

## Method Name

`ManagementClient.updateSecuritySettings`

## Request Parameters

| Name                               | Type                                                                               | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                          | <div style="width:200px">Example Value</div> |
| ---------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| allowedOrigins                     | string[]                                                                           | No                                           | -                                           | Security domain (CORS)                                                                                                                                                                                                                                              | `["https://example.com"]`                    |
| authingTokenExpiresIn              | number                                                                             | No                                           | 129600                                      | GenAuth Token validity period (seconds)                                                                                                                                                                                                                             | `1296000`                                    |
| verifyCodeLength                   | number                                                                             | No                                           | 6                                           | Verification code length. Includes SMS verification code, email verification code, and graphic verification code.                                                                                                                                                   | `6`                                          |
| verifyCodeMaxAttempts              | number                                                                             | No                                           | 1                                           | Number of verification code attempts. Within a verification code validity period (default is 60 s), if the number of incorrect verification code input by the user exceeds this threshold, the current verification code will become invalid and need to be resent. | `1`                                          |
| changeEmailStrategy                | <a href="#ChangeEmailStrategyDto">ChangeEmailStrategyDto</a>                       | No                                           | -                                           | Security strategy for users to change their email addresses                                                                                                                                                                                                         | `{"verifyOldEmail":true}`                    |
| changePhoneStrategy                | <a href="#ChangePhoneStrategyDto">ChangePhoneStrategyDto</a>                       | No                                           | -                                           | Security strategy for users to change their phone numbers                                                                                                                                                                                                           | `{"verifyOldPhone":true}`                    |
| cookieSettings                     | <a href="#CookieSettingsDto">CookieSettingsDto</a>                                 | No                                           | -                                           | Cookie expiration time settings                                                                                                                                                                                                                                     |                                              |
| registerDisabled                   | boolean                                                                            | No                                           | -                                           | Whether to prohibit user registration. After enabling, users will not be able to register on their own and only administrators can create accounts for them. For B2B and B2E user pools, it is enabled by default.                                                  |                                              |
| registerAnomalyDetection           | <a href="#RegisterAnomalyDetectionConfigDto">RegisterAnomalyDetectionConfigDto</a> | No                                           | -                                           | Frequent registration detection configuration                                                                                                                                                                                                                       |                                              |
| completePasswordAfterPassCodeLogin | boolean                                                                            | No                                           | -                                           | Whether to require users to set a password after verification code registration (only valid for GenAuth login page and Guard, not for API calls).                                                                                                                   |                                              |
| loginAnomalyDetection              | <a href="#LoginAnomalyDetectionConfigDto">LoginAnomalyDetectionConfigDto</a>       | No                                           | -                                           | Login anti-riot configuration                                                                                                                                                                                                                                       |                                              |
| loginRequireEmailVerified          | boolean                                                                            | No                                           | -                                           | When logging in with an email, whether to prohibit login and send a verification email when logging in with an unverified email. The user can log in only after receiving the email and completing the verification.                                                |                                              |
| selfUnlockAccount                  | <a href="#SelfUnlockAccountConfigDto">SelfUnlockAccountConfigDto</a>               | No                                           | -                                           | User self-service unlock configuration. Note: Only users who have bound their mobile phone number/email can self-unlock                                                                                                                                             |                                              |
| enableLoginAccountSwitch           | boolean                                                                            | No                                           | -                                           | Whether to enable login account selection on the GenAuth login page                                                                                                                                                                                                 |                                              |
| qrcodeLoginStrategy                | <a href="#QrcodeLoginStrategyDto">QrcodeLoginStrategyDto</a>                       | No                                           | -                                           | APP scan code login security configuration                                                                                                                                                                                                                          |                                              |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.SecuritySettingsRespDto;
import cn.authing.sdk.java.dto.UpdateSecuritySettingsDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class UpdateSecuritySettingsTest {
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

        SecuritySettingsRespDto response = client.updateSecuritySettings(new UpdateSecuritySettingsDto());
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `SecuritySettingsRespDto`

| Name       | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                 | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                 | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#SecuritySettingsDto">SecuritySettingsDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
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

| Name           | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                              | <div style="width:200px">Example Value</div> |
| -------------- | ------- | -------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------- |
| verifyOldEmail | boolean | yes                                          | Whether to verify the old email address when changing the email address | `true`                                       |

### <a id="ChangePhoneStrategyDto"></a> ChangePhoneStrategyDto

| Name           | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                            | <div style="width:200px">Example Value</div> |
| -------------- | ------- | -------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------- |
| verifyOldPhone | boolean | yes                                          | Whether to verify the old phone number when changing the phone number | `true`                                       |

### <a id="CookieSettingsDto"></a> CookieSettingsDto

| Name                          | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                         | <div style="width:200px">Example Value</div> |
| ----------------------------- | ------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| cookieExpiresIn               | number  | yes                                          | Cookie validity period: the validity period of the user's login status (default is 1209600 seconds/14 days). After expiration, the user needs to log in again. For the application panel and applications that have been added to the application panel, this cookie expiration time will be used. | `1209600`                                    |
| cookieExpiresOnBrowserSession | boolean | yes                                          | Cookie expiration time is based on the browser session: it expires immediately after the current browser is closed, and you need to log in again the next time you open it.                                                                                                                        |                                              |

### <a id="RegisterAnomalyDetectionConfigDto"></a> RegisterAnomalyDetectionConfigDto

| Name         | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                      | <div style="width:200px">Example Value</div> |
| ------------ | ------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------- |
| enabled      | boolean | yes                                          | Whether to enable frequent registration restriction                                             |                                              |
| limit        | number  | yes                                          | Within a certain time period, for the same IP, the maximum number of registrations can be made. | `50`                                         |
| timeInterval | number  | yes                                          | The length of the limited period, in seconds.                                                   | `300`                                        |

### <a id="LoginAnomalyDetectionConfigDto"></a> LoginAnomalyDetectionConfigDto

| Name                              | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                          | <div style="width:200px">Example Value</div> |
| --------------------------------- | ------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| loginFailStrategy                 | string  | Yes                                          | Login security strategy. When a user triggers login failure frequency detection, what strategy to use. Currently supports verification code and account lock strategies. When selecting the account lock strategy, only "Login password error limit" can be enabled. This field is marked as obsolete, but this field is still required. If you use the new version logic, you can write one by default. The new version uses accountLock for account locking and robotVerify for verification code | captcha                                      |
| robotVerify                       | string  | yes                                          | Human-machine verification (verification code) strategy. Optional values: disable (not enabled)/condition_set (conditional enable)/always_enable (always enabled)                                                                                                                                                                                                                                                                                                                                   | `condition_set`                              |
| accountLock                       | string  | Yes                                          | Account lockout policy. Optional values: disable (disabled)/condition_set (conditional enabled)                                                                                                                                                                                                                                                                                                                                                                                                     | `condition_set`                              |
| loginFailCheck                    |         | Yes                                          | Limit of failed logins: When the user inputs incorrect login information, the corresponding policy will be triggered according to the "Login Security Policy" rule. Nested Type: <a href="#LoginFailCheckConfigDto">LoginFailCheckConfigDto</a>.                                                                                                                                                                                                                                                    |                                              |
| loginPasswordFailCheck            |         | Yes                                          | Limit of incorrect login passwords: When the user inputs incorrect login password information, the corresponding policy will be triggered according to the "Login Security Policy" rule. This field is marked as obsolete, see accountLockLoginPasswordFailCheck/ robotVerifyLoginPasswordFailCheck Nested Type: <a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>.                                                                                                    |                                              |
| accountLockLoginPasswordFailCheck |         | No                                           | Account lock-login password error restriction: When the user logs in and enters the wrong password information, the corresponding policy will be triggered according to the "Login Security Policy" rule. Nested Type: <a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>.                                                                                                                                                                                              |                                              |
| robotVerifyLoginPasswordFailCheck |         | Yes                                          | Human-machine verification (verification code)-login password error restriction: When the user logs in and enters the wrong password information, the corresponding policy will be triggered according to the "Login Security Policy" rule. Nested Type: <a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>.                                                                                                                                                            |                                              |
| robotVerifyLoginIpWhitelistCheck  |         | Yes                                          | Human-machine verification (verification code)-ip whitelist: When the login IP is not in the whitelist, human-machine verification will be triggered. Nested Type: <a href="#LoginIpWhitelistCheckConfigDto">LoginIpWhitelistCheckConfigDto</a>.                                                                                                                                                                                                                                                    |                                              |
| robotVerifyLoginTimeCheckEnable   | boolean | yes                                          | Whether to enable login time limit                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                              |
| robotVerifyloginWeekStartEndTime  | array   | yes                                          | Login time limit weekday + start time array                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                              |

### <a id="LoginFailCheckConfigDto"></a> LoginFailCheckConfigDto

| Name         | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                  | <div style="width:200px">Example Value</div> |
| ------------ | ------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| enabled      | boolean | yes                                          | Whether to enable login failure limit.                                                                                      |                                              |
| limit        | number  | yes                                          | Within a certain time period, for the same IP, the maximum number of failed logins before the security policy is triggered. | `50`                                         |
| timeInterval | number  | yes                                          | Limit the period time length, in seconds.                                                                                   | `300`                                        |
| unit         | string  | no                                           | Time length unit. Second/Minute/Hour/Day, only for display, the unit of timeInterval is still seconds                       | `Second`                                     |

### <a id="LoginPassowrdFailCheckConfigDto"></a> LoginPassowrdFailCheckConfigDto

| Name         | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                | <div style="width:200px">Example Value</div> |
| ------------ | ------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| enabled      | boolean | yes                                          | Whether to enable login password error limit                                                              |                                              |
| limit        | number  | yes                                          | Maximum limit on the number of password errors                                                            | `50`                                         |
| timeInterval | number  | yes                                          | Limits the duration of the period in seconds.                                                             | `300`                                        |
| unit         | string  | no                                           | The unit of duration. Second/Minute/Hour/Day, only for display, the unit of timeInterval is still seconds | `Second`                                     |

### <a id="LoginIpWhitelistCheckConfigDto"></a> LoginIpWhitelistCheckConfigDto

| Name        | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>        | <div style="width:200px">Example Value</div> |
| ----------- | ------- | -------------------------------------------- | ------------------------------------------------- | -------------------------------------------- |
| enabled     | boolean | yes                                          | Whether to enable login ip whitelist verification |                                              |
| ipWhitelist | string  | yes                                          | Human-machine verification ip whitelist           | `132.133.123.144,255.255.255.255`            |

### <a id="SelfUnlockAccountConfigDto"></a> SelfUnlockAccountConfigDto

| Name     | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                     | <div style="width:200px">Example Value</div> |
| -------- | ------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| enabled  | boolean | yes                                          | Whether to allow users to unlock their accounts by themselves.                                                 |                                              |
| strategy | string  | yes                                          | Self-service unlocking method. Currently supports original password + verification code and verification code. | captcha                                      |

### <a id="QrcodeLoginStrategyDto"></a> QrcodeLoginStrategyDto

| Name                             | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                             | <div style="width:200px">Example Value</div> |
| -------------------------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| qrcodeExpiresIn                  | number  | Yes                                          | QR code validity period, in seconds                                                                                                                    | `120`                                        |
| qrcodeExpiresInUnit              | string  | No                                           | Time unit, Second/Minute/Hour/Day, for display only                                                                                                    | `Second`                                     |
| ticketExpiresIn                  | number  | Yes                                          | Ticket validity period, in seconds                                                                                                                     | `300`                                        |
| ticketExpiresInUnit              | string  | No                                           | Time unit, Second/Minute/Hour/Day, for display only                                                                                                    | `Second`                                     |
| allowExchangeUserInfoFromBrowser | boolean | yes                                          | The Web polling interface returns complete user information, see this document for details: Web polling interface returns complete user information    | `true`                                       |
| returnFullUserInfo               | boolean | yes                                          | Allow using ticket to exchange user information in the browser, see this document for details: Web polling interface returns complete user information | `true`                                       |

### <a id="SecuritySettingsDto"></a> SecuritySettingsDto

| Name                               | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                          | <div style="width:200px">Example Value</div> |
| ---------------------------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------- | ---- | ---- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- | --- | -------------- | ------- | ------------------------------------------------ | ----------------------------------- | ----------------------------------- | --- | -------------- | ------- | --- | -------------------------------------------------------- | ------ | -------------------------------------------------------------- | ---- | ---- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- | --- | ---------------- | ------- | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| allowedOrigins                     | string  | No                                           | Security domain (CORS)                                                                                                                                                                                                                                              | `https://example.com                         |
| https://example.com`               |
| authingTokenExpiresIn              | number  | Yes                                          | GenAuth Token validity period (seconds)                                                                                                                                                                                                                             | `1296000`                                    |
| verifyCodeLength                   | number  | Yes                                          | Verification code length. Includes SMS verification code, email verification code, and graphic verification code.                                                                                                                                                   | `6`                                          |
| verifyCodeMaxAttempts              | number  | Yes                                          | Number of verification code attempts. Within a verification code validity period (default is 60 s), if the number of incorrect verification code input by the user exceeds this threshold, the current verification code will become invalid and need to be resent. | `1`                                          |
| changeEmailStrategy                |         | Yes                                          | User changes the security strategy of the mailbox Nested Type: <a href="#ChangeEmailStrategyDto">ChangeEmailStrategyDto</a>.                                                                                                                                        | `{"verifyOldEmail":true}`                    |
| changePhoneStrategy                |         | Yes                                          | Security strategy for users to change their phone numbers Nested Type: <a href="#ChangePhoneStrategyDto">ChangePhoneStrategyDto</a>.                                                                                                                                | `{"verifyOldPhone":true}`                    |
| cookieSettings                     |         | No                                           | Cookie expiration time settings Nested Type: <a href="#CookieSettingsDto">CookieSettingsDto</a>.                                                                                                                                                                    |                                              |
| registerDisabled                   | boolean | Yes                                          | Whether to prohibit user registration. After enabling, users will not be able to register on their own, and only administrators can create accounts for them. For B2B and B2E user pools, it is enabled by default.                                                 |                                              |
| registerAnomalyDetection           |         | Yes                                          | Frequent registration detection configuration Nested Type: <a href="#RegisterAnomalyDetectionConfigDto">RegisterAnomalyDetectionConfigDto</a>.                                                                                                                      |                                              |
| completePasswordAfterPassCodeLogin | boolean | yes                                          | Whether to require users to set a password after verification code registration (valid only for GenAuth login page and Guard, not for API calls).                                                                                                                   |                                              |
| loginAnomalyDetection              |         | yes                                          | Login anti-violent configuration Nested Type: <a href="#LoginAnomalyDetectionConfigDto">LoginAnomalyDetectionConfigDto</a>.                                                                                                                                         |                                              |
| loginRequireEmailVerified          | boolean | yes                                          | When logging in with an email, whether to prohibit login and send a verification email when logging in with an unverified email. The user can only log in after receiving the email and completing the verification.                                                |                                              |
| selfUnlockAccount                  |         | yes                                          | User self-service unlock configuration. Note: Only users who have bound their mobile phone number/email address can self-unlock Nested Type: <a href="#SelfUnlockAccountConfigDto">SelfUnlockAccountConfigDto</a>.                                                  |                                              |
| enableLoginAccountSwitch           | boolean | Yes                                          | GenAuth Whether to enable login account selection on the login page                                                                                                                                                                                                 |                                              |
| qrcodeLoginStrategy                |         | Yes                                          | APP scan code login security configuration Nested Type: <a href="#QrcodeLoginStrategyDto">QrcodeLoginStrategyDto</a>.                                                                                                                                               |                                              | ### <a id="ChangeEmailStrategyDto"></a> ChangeEmailStrategyDto | Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |     | -------------- | ------- | ------------------------------------------------ | ----------------------------------- | ----------------------------------- |     | verifyOldEmail | boolean | Yes | Whether to verify the old email when modifying the email | `true` | ### <a id="ChangePhoneStrategyDto"></a> ChangePhoneStrategyDto | Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |     | ---------------- | ------- | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| verifyOldPhone                     | boolean | yes                                          | Whether to verify the old phone number when changing the phone number                                                                                                                                                                                               | `true`                                       |

### <a id="CookieSettingsDto"></a> CookieSettingsDto

| Name                          | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                         | <div style="width:200px">Example Value</div> |
| ----------------------------- | ------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| cookieExpiresIn               | number  | yes                                          | Cookie validity period: the validity period of the user's login status (default is 1209600 seconds/14 days). After expiration, the user needs to log in again. For the application panel and applications that have been added to the application panel, this cookie expiration time will be used. | `1209600`                                    |
| cookieExpiresOnBrowserSession | boolean | yes                                          | Cookie expiration time is based on browser session: it expires immediately after the current browser is closed, and you need to log in again the next time you open it.                                                                                                                            |                                              |

### <a id="RegisterAnomalyDetectionConfigDto"></a> RegisterAnomalyDetectionConfigDto

| Name         | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                            | <div style="width:200px">Example Value</div> |
| ------------ | ------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| enabled      | boolean | yes                                          | Whether to enable frequent registration limit                                                         |                                              |
| limit        | number  | yes                                          | Within a certain period of time, for the same IP, the maximum number of registrations can be limited. | `50`                                         |
| timeInterval | number  | yes                                          | specifies the duration of the period in seconds.                                                      | `300`                                        |

### <a id="LoginAnomalyDetectionConfigDto"></a> LoginAnomalyDetectionConfigDto

| Name                              | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | <div style="width:200px">Example Value</div> |
| --------------------------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| loginFailStrategy                 | string  | Yes                                          | Login security strategy. When a user triggers login failure frequency detection, what strategy is used? Currently, two strategies are supported: verification code and account lock. When selecting the account lock strategy, only "Login password error limit" can be enabled. This field is marked as obsolete, but this field is still required. If you use the new version logic, you can write one by default. The new version uses accountLock for account lock and robotVerify for verification code | captcha                                      |
| robotVerify                       | string  | Yes                                          | Human-machine verification (verification code) strategy. Optional values, disable (not enabled)/condition_set (conditional enable)/always_enable (always enabled)                                                                                                                                                                                                                                                                                                                                            | `condition_set`                              |
| accountLock                       | string  | Yes                                          | Account lock strategy. Optional values, disable (not enabled)/condition_set (conditional enable)                                                                                                                                                                                                                                                                                                                                                                                                             | `condition_set`                              |
| loginFailCheck                    |         | Yes                                          | Login failure limit: When the user enters incorrect information during login, the corresponding strategy will be triggered according to the "Login Security Strategy" rules. Nested Type: <a href="#LoginFailCheckConfigDto">LoginFailCheckConfigDto</a>.                                                                                                                                                                                                                                                    |                                              |
| loginPasswordFailCheck            |         | Yes                                          | Login password error restriction: When the user logs in and enters the wrong password information, the corresponding policy will be triggered according to the "Login Security Policy" rule. This field is marked as obsolete, see accountLockLoginPasswordFailCheck/ robotVerifyLoginPasswordFailCheck Nested Type: <a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>.                                                                                                         |                                              |
| accountLockLoginPasswordFailCheck |         | No                                           | Account lock-login password error restriction: When the user logs in and enters the wrong password information, the corresponding policy will be triggered according to the "Login Security Policy" rule. Nested Type: <a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>.                                                                                                                                                                                                       |                                              |
| robotVerifyLoginPasswordFailCheck |         | Yes                                          | Human-machine verification (verification code) - Login password error restriction: When the user logs in and enters the wrong password information, the corresponding policy will be triggered according to the "Login Security Policy" rule. Nested Type: <a href="#LoginPassowrdFailCheckConfigDto">LoginPassowrdFailCheckConfigDto</a>.                                                                                                                                                                   |                                              |
| robotVerifyLoginIpWhitelistCheck  |         | Yes                                          | Human-machine verification (verification code) - IP whitelist: When the login IP is not in the whitelist, human-machine verification will be triggered. Nested Type: <a href="#LoginIpWhitelistCheckConfigDto">LoginIpWhitelistCheckConfigDto</a>.                                                                                                                                                                                                                                                           |                                              |
| robotVerifyLoginTimeCheckEnable   | boolean | yes                                          | Whether to enable login time limit                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                              |
| robotVerifyloginWeekStartEndTime  | array   | yes                                          | Login time limit weekday + start time array                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                              |

### <a id="LoginFailCheckConfigDto"></a> LoginFailCheckConfigDto

| Name         | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                      | <div style="width:200px">Example Value</div> |
| ------------ | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| enabled      | boolean | yes                                          | Whether to enable login failure limit.                                                                                          |                                              |
| limit        | number  | yes                                          | Within a certain period of time, for the same IP, the maximum number of login failures before the security policy is triggered. | `50`                                         |
| timeInterval | number  | yes                                          | specifies the duration of the period in seconds.                                                                                | `300`                                        |
| unit         | string  | No                                           | Time unit. Second/Minute/Hour/Day, for display only, the unit of timeInterval is still second                                   | `Second`                                     |

### <a id="LoginPassowrdFailCheckConfigDto"></a> LoginPassowrdFailCheckConfigDto

| Name         | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                   | <div style="width:200px">Example Value</div> |
| ------------ | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| enabled      | boolean | Yes                                          | Whether to enable login password error limit                                                                 |                                              |
| limit        | number  | Yes                                          | Maximum number of password errors                                                                            | `50`                                         |
| timeInterval | number  | Yes                                          | Limit the period time length, in seconds.                                                                    | `300`                                        |
| unit         | string  | No                                           | The unit of time length. Second/Minute/Hour/Day, only for display, the unit of timeInterval is still seconds | `Second`                                     |

### <a id="LoginIpWhitelistCheckConfigDto"></a> LoginIpWhitelistCheckConfigDto

| Name        | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>        | <div style="width:200px">Example Value</div> |
| ----------- | ------- | -------------------------------------------- | ------------------------------------------------- | -------------------------------------------- |
| enabled     | boolean | yes                                          | Whether to enable login ip whitelist verification |                                              |
| ipWhitelist | string  | yes                                          | Human-machine verification ip whitelist           | `132.133.123.144,255.255.255.255`            |

### <a id="SelfUnlockAccountConfigDto"></a> SelfUnlockAccountConfigDto

| Name     | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                     | <div style="width:200px">Example Value</div> |
| -------- | ------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| enabled  | boolean | yes                                          | Whether to allow users to unlock their accounts by themselves.                                                 |                                              |
| strategy | string  | yes                                          | Self-service unlocking method. Currently supports original password + verification code and verification code. | captcha                                      |

### <a id="QrcodeLoginStrategyDto"></a> QrcodeLoginStrategyDto

| Name                             | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                             | <div style="width:200px">Example Value</div> |
| -------------------------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| qrcodeExpiresIn                  | number  | Yes                                          | QR code validity period, in seconds                                                                                                                    | `120`                                        |
| qrcodeExpiresInUnit              | string  | No                                           | Time unit, Second/Minute/Hour/Day, for display only                                                                                                    | `Second`                                     |
| ticketExpiresIn                  | number  | Yes                                          | Ticket validity period, in seconds                                                                                                                     | `300`                                        |
| ticketExpiresInUnit              | string  | No                                           | Time unit, Second/Minute/Hour/Day, for display only                                                                                                    | `Second`                                     |
| allowExchangeUserInfoFromBrowser | boolean | yes                                          | The Web polling interface returns complete user information, see this document for details: Web polling interface returns complete user information    | `true`                                       |
| returnFullUserInfo               | boolean | yes                                          | Allow using ticket to exchange user information in the browser, see this document for details: Web polling interface returns complete user information | `true`                                       |
