# Initiate a verification request to modify the mobile phone number

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the document description is incorrect, please refer to the V3 API.

When the end user modifies the mobile phone number on his own, the corresponding verification method needs to be provided. This interface is used to verify that the user's request to modify the mobile phone number is legal. Currently, verification is supported by **SMS verification code**. You need to call the SMS interface to send the corresponding SMS verification code first.

## Method Name

`AuthenticationClient.verifyUpdatePhoneRequest`

## Request Parameters

| Name                 | Type                                                                       | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div>                                                                                                                    | <div style="width:200px"></div>Example Value</div> |
| -------------------- | -------------------------------------------------------------------------- | -------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| phonePassCodePayload | <a href="#UpdatePhoneByPhonePassCodeDto">UpdatePhoneByPhonePassCodeDto</a> | Yes                                          | -             | Data verified using the phone number verification code                                                                                                        |                                                    |
| verifyMethod         | string                                                                     | Yes                                          | -             | Modify the phone number verification method:<br>- `PHONE_PASSCODE`: Use SMS verification code for verification. Currently, only this method is supported.<br> |                                                    |

## Request Response

Type: `VerifyUpdatePhoneRequestRespDto`

| Name       | Type                                                                     | Description                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                   | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                     |
| message    | string                                                                   | Description                                                                                                                                                                                                                                                                                                                                 |
| apiCode    | number                                                                   | Segment error code, through which you can get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                |
| data       | <a href="#VerifyUpdatePhoneRequestData">VerifyUpdatePhoneRequestData</a> | Response Data                                                                                                                                                                                                                                                                                                                               |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {}
}
```

## Data Structure

### <a id="UpdatePhoneByPhonePassCodeDto"></a> UpdatePhoneByPhonePassCodeDto

| Name                | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                       | <div style="width:200px">Example Value</div> |
| ------------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| newPhoneNumber      | string | Yes                                          | New phone number without area code. If Yes, it is a foreign phone number, please specify the area code in the newPhoneCountryCode parameter.                                                                                                                                                                                                                                                     | `188xxxx8888`                                |
| newPhonePassCode    | string | Yes                                          | Verification code                                                                                                                                                                                                                                                                                                                                                                                | `123456`                                     |
| newPhoneCountryCode | string | No                                           | Phone area code. This parameter is optional for phone numbers in mainland China. The GenAuth SMS service does not currently support international phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes.                 | `+86`                                        |
| oldPhoneNumber      | string | No                                           | Old phone number without area code. If Yes, it is a foreign phone number, please specify the area code in the oldPhoneCountryCode parameter. This parameter is required if the user pool has enabled the previous phone number verification when changing the phone number.                                                                                                                      | `188xxxx8888`                                |
| oldPhonePassCode    | string | No                                           | Verification code of the old mobile phone number. If the user pool has enabled the change of mobile phone number, the previous mobile phone number needs to be verified. This parameter is required.                                                                                                                                                                                             | `123456`                                     |
| oldPhoneCountryCode | string | No                                           | Mobile phone area code. It is optional for mobile phone numbers in mainland China. The GenAuth SMS service does not currently support international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of mobile phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes. | `+86`                                        |

### <a id="VerifyUpdatePhoneRequestData"></a> VerifyUpdatePhoneRequestData

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                | <div style="width:200px">Example Value</div> |
| ---------------- | ------ | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| updatePhoneToken | string | Yes                                          | Used to modify the current mobile phone number token. You need to use this token to request the **Modify mobile phone number** interface. |                                              |
| tokenExpiresIn   | number | Yes                                          | Expiration time, in seconds.                                                                                                              |                                              |
