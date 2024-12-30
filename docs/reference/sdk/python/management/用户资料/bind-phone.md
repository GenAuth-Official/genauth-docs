# Bind a mobile phone number

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

If the user has not yet **bound a mobile phone number**, this interface can be used for the user to **self-bind** a mobile phone number. If the user has already bound a mobile phone number and wants to change the mobile phone number, please use the **Change mobile phone number** interface. You need to call the **Send SMS** interface to send the SMS verification code first.

## Method name

`ManagementClient.bind_phone`

## Request parameters

| Name             | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                         | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| passCode         | string | Yes                                    | -                                           | SMS verification code. Note that a SMS verification code can only be used once and has an expiration date.                                                                                                                                                                                                                                                                                         | `123456`                                    |
| phoneNumber      | string | Yes                                    | -                                           | Phone number without area code. If it is a foreign phone number, please specify the area code in the phoneCountryCode parameter.                                                                                                                                                                                                                                                                   | `188xxxx8888`                               |
| phoneCountryCode | string | No                                     | -                                           | Mobile phone area code. This field is optional for mobile phone numbers in mainland China. The GenAuth SMS service does not yet support international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of mobile phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes. | `+86`                                       |

## Request response

Type: `CommonResponseDto`

| Name       | Type   | Description                                                                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code. This status code can be used to determine whether the operation is successful. 200 indicates success. |
| message    | string | Description                                                                                                                 |
| apiCode    | number | Segmented error code. This error code can be used to obtain the specific error type.                                        |
| requestId  | string | Request ID. This is returned when the request fails.                                                                        |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## Data structure
