# Initiate a request to cancel an account

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the document description is incorrect, please refer to the V3 API.

When a user wants to cancel an account, he needs to provide the corresponding credentials. Currently, three verification methods are supported: **Use email verification code**, **Use mobile verification code**, and **Use password**.

## Method name

`AuthenticationClient.verifyDeleteAccountRequest`

## Request parameters

| Name                 | Type                                                                           | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                        | <div style="width:200px"></div>Sample value</div> |
| -------------------- | ------------------------------------------------------------------------------ | -------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| verifyMethod         | string                                                                         | yes                                    | -             | Account cancellation verification method: <br>- `PHONE_PASSCODE`: Use phone number verification code method for verification. <br>- `EMAIL_PASSCODE`: Use email verification code method for verification. <br>- `PASSWORD`: If the user has neither a phone number nor an email bound, the password can be used as the verification method. <br> | `PHONE_PASSCODE`                                  |
| phonePassCodePayload | <a href="#DeleteAccountByPhonePassCodeDto">DeleteAccountByPhonePassCodeDto</a> | No                                     | -             | Data verified by phone number verification code                                                                                                                                                                                                                                                                                                   |                                                   |
| emailPassCodePayload | <a href="#DeleteAccountByEmailPassCodeDto">DeleteAccountByEmailPassCodeDto</a> | No                                     | -             | Data verified by email verification code                                                                                                                                                                                                                                                                                                          |                                                   |
| passwordPayload      | <a href="#DeleteAccountByPasswordDto">DeleteAccountByPasswordDto</a>           | No                                     | -             | Data verified by password                                                                                                                                                                                                                                                                                                                         |                                                   |

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
  // Please call the login interface to obtain access_token first, and call the setAccessToken method to set access_token
  authenticationClient.setAccessToken("REPLACE_ME_WITH_REAL_ACCESS_TOKEN");

  const result = await authenticationClient.verifyDeleteAccountRequest({
    verifyMethod:
      Models.VerifyDeleteAccountRequestDto.verifyMethod.PHONE_PASSCODE,
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

Type: `VerifyDeleteAccountRequestRespDto`

| Name       | Type                                                                               | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                                             | Description information                                                                                                                                                                                                                                                                                                                        |
| apiCode    | number                                                                             | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#VerifyDeleteAccountRequestDataDto">VerifyDeleteAccountRequestDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "deleteAccountToken": "xxxx",
    "tokenExpiresIn": 60
  }
}
```

## Data structure

### <a id="DeleteAccountByPhonePassCodeDto"></a> DeleteAccountByPhonePassCodeDto

| Name             | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                      | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| phoneNumber      | string | Yes                                           | The phone number bound to this account, without the area code. If it is a foreign phone number, please specify the area code in the phoneCountryCode parameter. | `188xxxx8888`                               |
| passCode         | string | Yes                                           | SMS verification code, which can only be used once and is valid for one minute. You need to obtain it through the **Send SMS** interface.                       | `123456`                                    |
| phoneCountryCode | string | No                                            | Mobile phone area code                                                                                                                                          | `+86`                                       |

### <a id="DeleteAccountByEmailPassCodeDto"></a> DeleteAccountByEmailPassCodeDto

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                     | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| email    | string | No                                            | Email address bound to this account, case insensitive.                                                                                                                         |                                             |
| passCode | string | Yes                                           | Email verification code. An SMS verification code can only be used once. The default validity period is 5 minutes. You need to obtain it through the **Send Email** interface. |                                             |

### <a id="DeleteAccountByPasswordDto"></a> DeleteAccountByPasswordDto

| Name                | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | <div style="width:200px">Sample value</div> |
| ------------------- | ------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| password            | string | Yes                                    | User password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                             |
| passwordEncryptType | string | No                                     | Password encryption type, supports encryption using RSA256 and the national secret SM2 algorithm. The default is `none`, no encryption. <br>- `none`: Do not encrypt the password, use plain text for transmission. <br>- `rsa`: Use the RSA256 algorithm to encrypt the password. You need to use the RSA public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the GenAuth service. <br>- `sm2`: Use the [national secret SM2 algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the SM2 public key of the GenAuth service. <br> | sm2                                         |

### <a id="VerifyDeleteAccountRequestDataDto"></a> VerifyDeleteAccountRequestDataDto

| Name               | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                                  | <div style="width:200px">Sample value</div> |
| ------------------ | ------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| deleteAccountToken | string | Yes                                    | Temporary Token used to cancel an account. You need to call the **CancelAccount** API to perform the actual account cancellation operation. | `xxxx`                                      |
| tokenExpiresIn     | number | Yes                                    | Token validity period. The default value is 60 seconds.                                                                                     | `60`                                        |
