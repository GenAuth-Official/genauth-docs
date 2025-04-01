# Send SMS

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

When sending SMS, you must specify the SMS Channel. Each mobile phone number can only send once in the same channel within one minute.

## Method name

`ManagementClient.sendSms`

## Request parameters

| Name             | Type   | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | --------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| channel          | string | Yes                                           | -                                           | SMS channel, specify the purpose of sending this SMS:<br>- `CHANNEL_LOGIN`: for user login<br>- `CHANNEL_REGISTER`: for user registration<br>- `CHANNEL_RESET_PASSWORD`: for resetting password<br>- `CHANNEL_BIND_PHONE`: used to bind a phone number<br>- `CHANNEL_UNBIND_PHONE`: used to unbind a phone number<br>- `CHANNEL_BIND_MFA`: used to bind MFA<br>- `CHANNEL_VERIFY_MFA`: used to verify MFA<br>- `CHANNEL_UNBIND_MFA`: used to unbind MFA<br>- `CHANNEL_COMPLETE_PHONE`: used to complete the phone number information when registering/logining <br>- `CHANNEL_IDENTITY_VERIFICATION`: used for user real-name authentication<br>- `CHANNEL_DELETE_ACCOUNT`: used to cancel an account<br> | `CHANNEL_LOGIN`                             |
| phoneNumber      | string | yes                                           | -                                           | Phone number without area code. If it is a foreign phone number, please specify the area code in the phoneCountryCode parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `188xxxx8888`                               |
| phoneCountryCode | string | No                                            | -                                           | Mobile phone area code. This field is optional for mainland China mobile phone numbers. The GenAuth SMS service does not yet support international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of mobile phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes.                                                                                                                                                                                                                                                                                                           | `+86`                                       |

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
  const result = await authenticationClient.sendSms({
    phoneNumber: "188xxxx8888",
    channel: Models.SendSMSDto.channel.CHANNEL_LOGIN,
    phoneCountryCode: "+86",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `SendSMSRespDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
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
