# Change password

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This endpoint is used for users to change their passwords on their own. If the user has set a password before, the user's original password needs to be provided as a credential. If the user forgets the current password, please use the **Forgot Password** interface.

## Method name

`ManagementClient.updatePassword`

## Request parameters

| Name                | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | <div style="width:200px">Sample value</div> |
| ------------------- | ------ | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| newPassword         | string | Yes                                    | -                                           | New password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                             |
| oldPassword         | string | No                                     | -                                           | Original password. If the user currently has a password set, this parameter is required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                             |
| passwordEncryptType | string | No                                     | none                                        | Password encryption type. Supports encryption using RSA256 and SM2 algorithms. The default is `none`, no encryption. <br>- `none`: Do not encrypt the password, use plain text for transmission. <br>- `rsa`: Use the RSA256 algorithm to encrypt the password. You need to use the RSA public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the GenAuth service. <br>- `sm2`: Use the [National Secret SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the SM2 public key of the GenAuth service. <br> | `none`                                      |

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
  // Please call the login interface to get access_token first, and call the setAccessToken method to set access_token
  authenticationClient.setAccessToken("REPLACE_ME_WITH_REAL_ACCESS_TOKEN");

  const result = await authenticationClient.updatePassword({
    newPassword: "new-pass",
    oldPassword: "old-pass",
    passwordEncryptType: Models.UpdatePasswordDto.passwordEncryptType.NONE,
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `CommonResponseDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string | Request ID. It will be returned when the request fails.                                                      |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## Data structure
