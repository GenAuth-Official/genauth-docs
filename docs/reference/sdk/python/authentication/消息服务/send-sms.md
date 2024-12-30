# Send SMS

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

When sending SMS, you must specify the SMS Channel. Each mobile phone number can only send once in the same channel within one minute.

## Method name

`AuthenticationClient.send_sms`

## Request parameters

| Name             | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | <div style="width:200px"></div>Sample value</div> |
| ---------------- | ------ | -------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| channel          | string | Yes                                    | -             | SMS channel, specify the purpose of sending this SMS:<br>- `CHANNEL_LOGIN`: for user login<br>- `CHANNEL_REGISTER`: for user registration<br>- `CHANNEL_RESET_PASSWORD`: for resetting password<br>- `CHANNEL_BIND_PHONE`: Used to bind a phone number<br>- `CHANNEL_UNBIND_PHONE`: Used to unbind a phone number<br>- `CHANNEL_BIND_MFA`: Used to bind MFA<br>- `CHANNEL_VERIFY_MFA`: Used to verify MFA<br>- `CHANNEL_UNBIND_MFA`: Used to unbind MFA<br>- `CHANNEL_COMPLETE_PHONE`: Used to complete the phone number information when registering/login<br>- `CHANNEL_IDENTITY_VERIFICATION`: Used for user real-name authentication<br>- `CHANNEL_DELETE_ACCOUNT`: Used to cancel an account<br> | `CHANNEL_LOGIN`                                   |
| phoneNumber      | string | Yes                                    | -             | Phone number without area code. If it is a foreign phone number, please specify the area code in the phoneCountryCode parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `188xxxx8888`                                     |
| phoneCountryCode | string | No                                     | -             | Mobile phone area code. This field is optional for mainland China mobile phone numbers. The GenAuth SMS service does not yet support international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of mobile phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes.                                                                                                                                                                                                                                                                                                       | `+86`                                             |

## Request response

Type: `SendSMSRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## Data structure
