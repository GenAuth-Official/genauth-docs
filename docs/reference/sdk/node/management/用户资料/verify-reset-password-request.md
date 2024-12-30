# Initiate a request for forgetting password

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

When the user forgets the password, this endpoint can be used to retrieve the password. The user needs to use relevant verification methods for verification. Currently, **Email verification code** and **Mobile phone number verification code** are supported.

## Method name

`ManagementClient.verifyResetPasswordRequest`

## Request parameters

| Name                 | Type                                                                           | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                        | <div style="width:200px">Sample value</div> |
| -------------------- | ------------------------------------------------------------------------------ | --------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| verifyMethod         | string                                                                         | Yes                                           | -                                           | Verification method used for forgotten password request:<br>- `EMAIL_PASSCODE`: Verification by email verification code<br>- `PHONE_PASSCODE`: Verification by phone number verification code<br> | `EMAIL_PASSCODE`                            |
| phonePassCodePayload | <a href="#ResetPasswordByPhonePassCodeDto">ResetPasswordByPhonePassCodeDto</a> | No                                            | -                                           | Data verified by mobile phone verification code                                                                                                                                                   |                                             |
| emailPassCodePayload | <a href="#ResetPasswordByEmailPassCodeDto">ResetPasswordByEmailPassCodeDto</a> | No                                            | -                                           | Data verified by email verification code                                                                                                                                                          |                                             |

## Sample code

```ts
import { AuthenticationClient, Models } from "authing-node-sdk";

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

| Name       | Type                                                   | Description                                                                                                  |
| ---------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                 | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string                                                 | Description                                                                                                  |
| apiCode    | number                                                 | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                 | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#ResetPasswordVerify">ResetPasswordVerify</a> | Response data                                                                                                |

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

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                    | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| phoneNumber      | string | yes                                          | The phone number bound to this account, without the area code. If it is a foreign phone number, please specify the area code in the phoneCountryCode parameter.                                                                                                                                                                                               | `188xxxx8888`                               |
| passCode         | string | yes                                          | SMS verification code. An SMS verification code can only be used once and is valid for one minute. You need to obtain it through the **Send SMS** interface.                                                                                                                                                                                                  | `123456`                                    |
| phoneCountryCode | string | no                                           | Mobile phone area code. Mobile phone numbers in mainland China can be used.Leave blank. GenAuth SMS service does not support international phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of phone area codes, see https://en.wikipedia.org/wiki/List_of_country_calling_codes. | `+86`                                       |

### <a id="ResetPasswordByEmailPassCodeDto"></a> ResetPasswordByEmailPassCodeDto

| Name     | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                                                                    | <div style="width:200px">Sample value</div> |
| -------- | ------ | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| email    | string | No                                     | The email address bound to this account, not case sensitive.                                                                                                                  |                                             |
| passCode | string | yes                                    | Email verification code. A SMS verification code can only be used once. The default validity period is 5 minutes. You need to obtain it through the **Send Email** interface. |                                             |

### <a id="ResetPasswordVerify"></a> ResetPasswordVerify

| Name               | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------------ | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| passwordResetToken | string | yes                                           | Used to reset password token               |                                             |
| tokenExpiresIn     | number | yes                                           | Expiration time, in seconds                |                                             |
