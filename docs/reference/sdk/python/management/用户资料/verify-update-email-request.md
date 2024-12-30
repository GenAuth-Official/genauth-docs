# Initiate a verification request to modify the mailbox

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

When the end user modifies the mailbox on his own, he needs to provide the corresponding verification method. This interface is used to verify whether the user's request to modify the mailbox is legal. Currently, it supports verification through **Mailbox Verification Code**. You need to call the Send Mail interface to send the corresponding email verification code first.

## Method name

`ManagementClient.verify_update_email_request`

## Request parameters

| Name                 | Type                                                                       | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                      | <div style="width:200px">Sample value</div> |
| -------------------- | -------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| emailPassCodePayload | <a href="#UpdateEmailByEmailPassCodeDto">UpdateEmailByEmailPassCodeDto</a> | Yes                                    | -                                           | Data verified using email verification code                                                                                                                                     |                                             |
| verifyMethod         | string                                                                     | Yes                                    | -                                           | Modify the verification method used by the current email:<br>- `EMAIL_PASSCODE`: Verify by email verification code. Currently, only this verification method is supported. <br> | `EMAIL_PASSCODE`                            |

## Request response

Type: `VerifyUpdateEmailRequestRespDto`

| Name       | Type                                                                     | Description                                                                                                  |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                   | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string                                                                   | Description                                                                                                  |
| apiCode    | number                                                                   | Segment error code, which can be used to get the specific error type.                                        |
| requestId  | string                                                                   | Request ID. It will be returned when the request fails.                                                      |
| data       | <a href="#VerifyUpdateEmailRequestData">VerifyUpdateEmailRequestData</a> | Response data                                                                                                |

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
| updateEmailToken | string | Yes                                    | The token used to modify the current mailbox. You need to use this token to call the **Modify Mailbox** interface. |                                             |
| tokenExpiresIn   | number | Yes                                    | The token validity period, which is 60 seconds.                                                                    | `60`                                        |
