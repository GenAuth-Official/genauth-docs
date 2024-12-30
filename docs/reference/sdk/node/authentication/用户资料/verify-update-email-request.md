# Initiate a verification request to modify the mailbox

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the document description is incorrect, please refer to the V3 API.

When the end user modifies the mailbox on his own, the corresponding verification method needs to be provided. This interface is used to verify whether the user's request to modify the mailbox is legal. Currently, verification is supported by **Mailbox Verification Code**. You need to call the Send Mail interface to send the corresponding email verification code first.

## Method name

`AuthenticationClient.verifyUpdateEmailRequest`

## Request parameters

| Name                 | Type                                                                       | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                                                      | <div style="width:200px"></div>Sample value</div> |
| -------------------- | -------------------------------------------------------------------------- | -------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| emailPassCodePayload | <a href="#UpdateEmailByEmailPassCodeDto">UpdateEmailByEmailPassCodeDto</a> | Yes                                    | -             | Data verified using email verification code                                                                                                                                     |                                                   |
| verifyMethod         | string                                                                     | Yes                                    | -             | Modify the verification method used by the current email:<br>- `EMAIL_PASSCODE`: Verify by email verification code. Currently, only this verification method is supported. <br> | `EMAIL_PASSCODE`                                  |

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

  const result = await authenticationClient.verifyUpdateEmailRequest({
    verifyMethod:
      Models.VerifyUpdateEmailRequestDto.verifyMethod.EMAIL_PASSCODE,
    emailPasscodePayload: {
      newEmail: "new@example.com",
      newEmailPassCode: "123456",
      oldEmail: "old@example.com",
      oldEmailPassCode: "123456",
    },
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `VerifyUpdateEmailRequestRespDto`

| Name       | Type                                                                     | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                                   | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                                   | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#VerifyUpdateEmailRequestData">VerifyUpdateEmailRequestData</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "tokenExpiresIn": 60
  }
}
```

## Data structure

### <a id="UpdateEmailByEmailPassCodeDto"></a> UpdateEmailByEmailPassCodeDto

| Name             | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                    | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| newEmail         | string | Yes                                           | New email                                                                                                                                                                                     | `new@example.com`                           |
| newEmailPassCode | string | Yes                                           | New email verification code                                                                                                                                                                   | `123456`                                    |
| oldEmail         | string | No                                            | Old email. If the user pool enables the modification of the email address and the previous email address needs to be verified, this parameter is required.                                    | `old@example.com`                           |
| oldEmailPassCode | string | No                                            | Verification code for the old email address. If the user pool has enabled the requirement to verify the previous email address before changing the email address, this parameter is required. | `123456`                                    |

### <a id="VerifyUpdateEmailRequestData"></a> VerifyUpdateEmailRequestData

| Name             | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                   | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| updateEmailToken | string | Yes                                           | Token used to modify the current email address. You need to use this token to call the **Modify Email** API. |                                             |
| tokenExpiresIn   | number | Yes                                           | Token validity period, which is 60 seconds.                                                                  | `60`                                        |
