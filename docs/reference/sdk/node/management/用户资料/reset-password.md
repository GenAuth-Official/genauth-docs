# Forgot password

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This endpoint is used to reset the password by **mobile phone verification code** or **email verification code** after the user forgets the password. This interface requires the temporary credential `passwordResetToken` for resetting the password, which needs to be obtained through the **Initiate a Forgot Password Request** interface.

## Method name

`ManagementClient.resetPassword`

## Request parameters

| Name                | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | <div style="width:200px">Sample value</div> |
| ------------------- | ------ | -------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| password            | string | yes                                    | -                                           | Password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                             |
| passwordResetToken  | string | yes                                    | -                                           | Token for resetting password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                             |
| passwordEncryptType | string | no                                     | none                                        | Password encryption type, supports encryption using RSA256 and SM2 algorithms. The default is `none`, no encryption. <br>- `none`: Do not encrypt the password and transmit it in plain text. <br>- `rsa`: Use the RSA256 algorithm to encrypt the password. You need to use the RSA public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the GenAuth service. <br>- `sm2`: Use the [National Secret SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the SM2 public key of the GenAuth service. <br> | `none`                                      |

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
  const result = await authenticationClient.resetPassword({
    // Reset password token
    passwordResetToken: "xxxxx",
    password: "passw0rd",
    passwordEncryptType: Models.ResetPasswordDto.passwordEncryptType.NONE,
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                  |
| ---------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                   | Description                                                                                                  |
| apiCode    | number                                   | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                          |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "success": true
  }
}
```

## Data structure

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| success | boolean | yes                                          | Whether the operation was successful       | `true`                                      |
