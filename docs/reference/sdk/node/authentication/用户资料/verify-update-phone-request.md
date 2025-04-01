# Initiate a verification request to modify the mobile phone number

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the document description is incorrect, please refer to the V3 API.

When the end user changes the mobile phone number on his own, he needs to provide the corresponding verification method. This interface is used to verify whether the user's request to change the mobile phone number is legal. Currently, verification is supported by **SMS verification code**. You need to call the SMS interface to send the corresponding SMS verification code first.

## Method name

`AuthenticationClient.verifyUpdatePhoneRequest`

## Request parameters

| Name                 | Type                                                                       | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                                                        | <div style="width:200px"></div>Sample value</div> |
| -------------------- | -------------------------------------------------------------------------- | -------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| phonePassCodePayload | <a href="#UpdatePhoneByPhonePassCodeDto">UpdatePhoneByPhonePassCodeDto</a> | Yes                                    | -             | Data verified using the phone number verification code method                                                                                                                     |                                                   |
| verifyMethod         | string                                                                     | Yes                                    | -             | Modify the verification method for the phone number:<br>- `PHONE_PASSCODE`: Use the SMS verification code method for verification. Currently, only this method is supported. <br> |                                                   |

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
  // Please call the login interface to get access_token first, and call the setAccessToken method to set access_token
  authenticationClient.setAccessToken("REPLACE_ME_WITH_REAL_ACCESS_TOKEN");

  const result = await authenticationClient.verifyUpdatePhoneRequest({
    verifyMethod:
      Models.VerifyUpdatePhoneRequestDto.verifyMethod.PHONE_PASSCODE,
    phonePassCodePayload: {
      newPhoneNumber: "188xxxx9999",
      newPhonePassCode: "123456",
      newPhoneCountryCode: "+86",
      oldPhoneNumber: "188xxxx8888",
      oldPhonePassCode: "123456",
      oldPhoneCountryCode: "+86",
    },
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `VerifyUpdatePhoneRequestRespDto`

| Name       | Type                                                                     | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                                   | description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                                   | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#VerifyUpdatePhoneRequestData">VerifyUpdatePhoneRequestData</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

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

| Name                | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                   | <div style="width:200px">Sample value</div> |
| ------------------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| newPhoneNumber      | string | Yes                                           | New phone number without area code. If it is a foreign phone number, please specify the area code in the newPhoneCountryCode parameter.                                                                                                                                                                                                                                                                      | `188xxxx8888`                               |
| newPhonePassCode    | string | yes                                           | Verification code                                                                                                                                                                                                                                                                                                                                                                                            | `123456`                                    |
| newPhoneCountryCode | string | no                                            | Mobile phone area code. This parameter is optional for mobile phone numbers in mainland China. The GenAuth SMS service does not yet support international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of mobile phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes.       | `+86`                                       |
| oldPhoneNumber      | string | no                                            | Old mobile phone number without area code. If it is a foreign mobile phone number, please specify the area code in the oldPhoneCountryCode parameter. If the user pool has enabled the previous mobile phone number verification before changing the mobile phone number, this parameter is required.                                                                                                        | `188xxxx8888`                               |
| oldPhonePassCode    | string | No                                            | Verification code of the old mobile phone number. If the user pool has enabled the change of mobile phone number, the previous mobile phone number needs to be verified. This parameter is required.                                                                                                                                                                                                         | `123456`                                    |
| oldPhoneCountryCode | string | No                                            | Mobile phone area code. This parameter is optional for mobile phone numbers in mainland China. The GenAuth SMS service does not currently support international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of mobile phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes. | `+86`                                       |

### <a id="VerifyUpdatePhoneRequestData"></a> VerifyUpdatePhoneRequestData

| Name             | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                          | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| updatePhoneToken | string | Yes                                    | Used to modify the current mobile phone number token. You need to use this token to request the **Modify mobile phone number** API. |                                             |
| tokenExpiresIn   | number | Yes                                    | Expiration time, in seconds.                                                                                                        |                                             |
