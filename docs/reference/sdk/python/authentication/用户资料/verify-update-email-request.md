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

`AuthenticationClient.verify_update_email_request`

## Request parameters

| Name                 | Type                                                                       | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                                                     | <div style="width:200px"></div>Sample value</div> |
| -------------------- | -------------------------------------------------------------------------- | -------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| emailPassCodePayload | <a href="#UpdateEmailByEmailPassCodeDto">UpdateEmailByEmailPassCodeDto</a> | Yes                                    | -             | Data verified using email verification code                                                                                                                                    |                                                   |
| verifyMethod         | string                                                                     | Yes                                    | -             | Modify the verification method used by the current email:<br>- `EMAIL_PASSCODE`: Verify by email verification code, currently only this verification method is supported. <br> | `EMAIL_PASSCODE`                                  |

## Request response

Type: `VerifyUpdateEmailRequestRespDto`

| Name       | Type                                                                     | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                   | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
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

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                       | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| newEmail         | string | yes                                          | New email                                                                                                                                        | `new@example.com`                           |
| newEmailPassCode | string | yes                                          | New email verification code                                                                                                                      | `123456`                                    |
| oldEmail         | string | no                                           | Old email. If the user pool has enabled the previous email to be verified when changing the email, this parameter is required.                   | `old@example.com`                           |
| oldEmailPassCode | string | no                                           | Old email verification code. If the user pool has enabled the previous email to be verified when changing the email, this parameter is required. | `123456`                                    |

### <a id="VerifyUpdateEmailRequestData"></a> VerifyUpdateEmailRequestData

| Name             | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                         | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| updateEmailToken | string | Yes                                    | The token used to modify the current mailbox. You need to use this token to call the **Modify mailbox** interface. |                                             |
| tokenExpiresIn   | number | Yes                                    | The token validity period, which is 60 seconds.                                                                    | `60`                                        |
