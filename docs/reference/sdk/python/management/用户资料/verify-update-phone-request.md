# Initiate a verification request to modify the mobile phone number

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

When the end user changes the mobile phone number on his own, he needs to provide the corresponding verification method. This interface is used to verify whether the user's request to modify the mobile phone number is legal. Currently, verification is supported by **SMS verification code**. You need to call the SMS interface to send the corresponding SMS verification code first.

## Method name

`ManagementClient.verify_update_phone_request`

## Request parameters

| Name                 | Type                                                                       | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                     | <div style="width:200px">Sample value</div> |
| -------------------- | -------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| phonePassCodePayload | <a href="#UpdatePhoneByPhonePassCodeDto">UpdatePhoneByPhonePassCodeDto</a> | Yes                                           | -                                           | Data verified using the phone number verification code method                                                                                                  |                                             |
| verifyMethod         | string                                                                     | Yes                                           | -                                           | Modify the verification method for the phone number:<br>- `PHONE_PASSCODE`: Use SMS verification code to verify, currently only this method is supported. <br> |                                             |

## Request response

Type: `VerifyUpdatePhoneRequestRespDto`

| Name       | Type                                                                     | Description                                                                                                  |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                                   | Description                                                                                                  |
| apiCode    | number                                                                   | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                                   | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#VerifyUpdatePhoneRequestData">VerifyUpdatePhoneRequestData</a> | Response data                                                                                                |

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

### <a id="UpdatePhoneByPhonePassCodeDto"></a> UpdatePhoneByPhonePassCodeDto

| Name                | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                     | <div style="width:200px">Sample value</div> |
| ------------------- | ------ | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| newPhoneNumber      | string | Yes                                           | New phone number, without area code. If it is an international phone number, please specify the area code in the newPhoneCountryCode parameter.                                                                                                                                                                                                                | `188xxxx8888`                               |
| newPhonePassCode    | string | Yes                                           | Verification code                                                                                                                                                                                                                                                                                                                                              | `123456`                                    |
| newPhoneCountryCode | string | No                                            | Phone area code. Mainland China phone numbers can be left blank. GenAuth SMS service does not currently support international phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. A complete list of mobile phone area codes can be found at https://en.wikipedia.org/wiki/List_of_country_calling_codes. | `+86`                                       |
| oldPhoneNumber      | string | No                                            | Old phone number, without area code. If it is an international phone number, please specify the area code in the oldPhoneCountryCode parameter. If the user pool enables verification of the previous phone number when modifying the phone number, this parameter is required.                                                                                | `188xxxx8888`                               |
| oldPhonePassCode    | string | No                                            | Verification code for the old phone number. If the user pool enables verification of the previous phone number when modifying the phone number, this parameter is required.                                                                                                                                                                                    | `123456`                                    |
| oldPhoneCountryCode | string | No                                            | Phone area code. Mainland China phone numbers can be left blank. GenAuth SMS service does not currently support international phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. A complete list of mobile phone area codes can be found at https://en.wikipedia.org/wiki/List_of_country_calling_codes. | `+86`                                       |

### <a id="VerifyUpdatePhoneRequestData"></a> VerifyUpdatePhoneRequestData

| Name             | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                 | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| updatePhoneToken | string | Yes                                           | Token for modifying the current phone number. You need to use this token to request the **Modify Phone Number** interface. |                                             |
| tokenExpiresIn   | number | Yes                                           | Expiration time, in seconds.                                                                                               |                                             |
