# Initiate verification request for changing mobile phone number

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

When the terminal user changes the mobile phone number on his own, he needs to provide the corresponding verification method. This interface is used to verify the user's request to change the mobile phone number. Yes No Legal. Currently, verification is supported by **SMS verification code**. You need to call the SMS interface to send the corresponding SMS verification code first.

## Method Name

`ManagementClient.verifyUpdatePhoneRequest`

## Request Parameters

| Name                 | Type                                                                       | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                    | <div style="width:200px">Example Value</div> |
| -------------------- | -------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| phonePassCodePayload | <a href="#UpdatePhoneByPhonePassCodeDto">UpdatePhoneByPhonePassCodeDto</a> | Yes                                          | -                                           | Data verified using the phone number verification code                                                                                                        |                                              |
| verifyMethod         | string                                                                     | Yes                                          | -                                           | Modify the phone number verification method:<br>- `PHONE_PASSCODE`: Use SMS verification code for verification. Currently, only this method is supported.<br> |                                              |

## Request Response

Type： `VerifyUpdatePhoneRequestRespDto`

| Name       | Type                                                                     | Description                                                                                                             |
| ---------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                   | Business status code. You can use this status code to determine whether the operation is successful. 200 means success. |
| message    | string                                                                   | Description                                                                                                             |
| apiCode    | number                                                                   | This error code is used to get the specific error type.                                                                 |
| requestId  | string                                                                   | Request ID. Returned when the request fails.                                                                            |
| data       | <a href="#VerifyUpdatePhoneRequestData">VerifyUpdatePhoneRequestData</a> | Response data                                                                                                           |

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
| tokenExpiresIn   | number | Yes                                          | Expiration time, in seconds                                                                                                               |                                              |
