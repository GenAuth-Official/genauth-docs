# Initiate a request to cancel an account

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

When a user wants to cancel an account, he needs to provide the corresponding credentials. Currently, three verification methods are supported: **Use email verification code**, **Use mobile verification code**, and **Use password**.

## Method name

`ManagementClient.verify_delete_account_request`

## Request parameters

| Name                 | Type                                                                           | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                  | <div style="width:200px">Sample value</div> |
| -------------------- | ------------------------------------------------------------------------------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| verifyMethod         | string                                                                         | yes                                    | -                                           | Account deregistration verification method:<br>- `PHONE_PASSCODE`: Use phone number verification code for verification. <br>- `EMAIL_PASSCODE`: Use email verification code for verification. <br>- `PASSWORD`: If the user has neither a mobile phone number nor an email address, a password can be used as a means of verification. <br> | `PHONE_PASSCODE`                            |
| phonePassCodePayload | <a href="#DeleteAccountByPhonePassCodeDto">DeleteAccountByPhonePassCodeDto</a> | No                                     | -                                           | Data verified using a mobile phone number verification code                                                                                                                                                                                                                                                                                 |                                             |
| emailPassCodePayload | <a href="#DeleteAccountByEmailPassCodeDto">DeleteAccountByEmailPassCodeDto</a> | No                                     | -                                           | Data verified using an email verification code                                                                                                                                                                                                                                                                                              |                                             |
| passwordPayload      | <a href="#DeleteAccountByPasswordDto">DeleteAccountByPasswordDto</a>           | No                                     | -                                           | Data verified using a password                                                                                                                                                                                                                                                                                                              |                                             |

## Request response

Type: `VerifyDeleteAccountRequestRespDto`

| Name       | Type                                                                               | Description                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                                             | Description                                                                                                  |
| apiCode    | number                                                                             | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                                             | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#VerifyDeleteAccountRequestDataDto">VerifyDeleteAccountRequestDataDto</a> | Response data                                                                                                |

Sample results：

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
| phoneCountryCode | string | No                                            | Mobile area code                                                                                                                                                | `+86`                                       |

### <a id="DeleteAccountByEmailPassCodeDto"></a> DeleteAccountByEmailPassCodeDto

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                        | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| email    | string | No                                            | The email address bound to this account, case insensitive.                                                                                                                        |                                             |
| passCode | string | Yes                                           | Email verification code. A SMS verification code can only be used once, and the default validity period is 5 minutes. You need to obtain it through the **Send Email** interface. |                                             |

### <a id="DeleteAccountByPasswordDto"></a> DeleteAccountByPasswordDto

| Name                | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | <div style="width:200px">Sample value</div> |
| ------------------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| password            | string | yes                                           | User password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                             |
| passwordEncryptType | string | no                                            | Password encryption type. Supports RSA256 and SM2 algorithms for encryption. The default is `none`. <br>- `none`: Do not encrypt the password. Use plain text for transmission. <br>- `rsa`: Use RSA256 algorithm to encrypt the password. The RSA public key of the GenAuth service is required for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the GenAuth service. <br>- `sm2`: Use [National Encryption SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the SM2 public key of the GenAuth service. <br> | sm2                                         |

### <a id="VerifyDeleteAccountRequestDataDto"></a> VerifyDeleteAccountRequestDataDto

| Name               | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                          | <div style="width:200px">Sample value</div> |
| ------------------ | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| deleteAccountToken | string | Yes                                          | Temporary Token used to cancel the account. You need to call the **Cancel Account** interface to perform the actual account cancellation operation. | `xxxx`                                      |
| tokenExpiresIn     | number | Yes                                          | Token validity period, default is 60 seconds.                                                                                                       | `60`                                        |
