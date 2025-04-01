# Initiate a forgotten password request

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the document description is incorrect, please refer to the V3 API.

When the user forgets the password, the password can be retrieved through this endpoint. The user needs to use relevant verification methods for verification. Currently, **Email verification code** and **Mobile phone number verification code** are supported.

## Method name

`AuthenticationClient.verifyResetPasswordRequest`

## Request parameters

| Name                 | Type                                                                           | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                                                                        | <div style="width:200px"></div>Sample value</div> |
| -------------------- | ------------------------------------------------------------------------------ | -------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| verifyMethod         | string                                                                         | Yes                                    | -             | Verification method used for forgotten password request:<br>- `EMAIL_PASSCODE`: Verification by email verification code<br>- `PHONE_PASSCODE`: Verification by phone number verification code<br> | `EMAIL_PASSCODE`                                  |
| phonePassCodePayload | <a href="#ResetPasswordByPhonePassCodeDto">ResetPasswordByPhonePassCodeDto</a> | No                                     | -             | Data verified by mobile phone verification code                                                                                                                                                   |                                                   |
| emailPassCodePayload | <a href="#ResetPasswordByEmailPassCodeDto">ResetPasswordByEmailPassCodeDto</a> | No                                     | -             | Data verified by email verification code                                                                                                                                                          |                                                   |

## Sample code

```ts
import { AuthenticationClient, Models } from "@genauth/nodejs";

const authenticationClient = new AuthenticationClient({
  // Need to be replaced with your GenAuth AppId, Secret and Host
  appId: "GEN_AUTH_APP_ID",
  appSecret: "GEN_AUTH_APP_SECRET",
  appHost: "GEN_AUTH_APP_HOST",
});

(async () => {
  const result = await authenticationClient.verifyResetPasswordRequest({
    verifyMethod:
      Models.VerifyResetPasswordRequestDto.verifyMethod.PHONE_PASSCODE,
    phonePassCodePayload: {
      phoneNumber: "188xxxx8888",
      passCode: "123456",
      phoneCountryCode: "+86",
    },
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `PasswordResetVerifyResp`

| Name       | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                 | description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                 | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#ResetPasswordVerify">ResetPasswordVerify</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {}
}
```

## Data structure

### <a id="ResetPasswordByPhonePassCodeDto"></a> ResetPasswordByPhonePassCodeDto

| Name             | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                       | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| phoneNumber      | string | Yes                                           | The phone number bound to this account, without the area code. If it is a foreign phone number, please enter it in phoneCountryCode Specify the area code in the parameter.                                                                                                                                                                                                                      | `188xxxx8888`                               |
| passCode         | string | yes                                           | SMS verification code. An SMS verification code can only be used once and is valid for one minute. You need to obtain it through the **Send SMS** interface.                                                                                                                                                                                                                                     | `123456`                                    |
| phoneCountryCode | string | no                                            | Mobile phone area code. It is optional for mobile phone numbers in mainland China. The GenAuth SMS service does not currently support international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of mobile phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes. | `+86`                                       |

### <a id="ResetPasswordByEmailPassCodeDto"></a> ResetPasswordByEmailPassCodeDto

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                         | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| email    | string | No                                            | The email address bound to this account, not case sensitive.                                                                                                                       |                                             |
| passCode | string | Yes                                           | Email verification code. An SMS verification code can only be used once, and the default validity period is 5 minutes. You need to obtain it through the **Send Email** interface. |                                             |

### <a id="ResetPasswordVerify"></a> ResetPasswordVerify

| Name               | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------------ | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| passwordResetToken | string | Yes                                           | Token used to reset password               |                                             |
| tokenExpiresIn     | number | Yes                                           | Expiration time, in seconds.               |                                             |
