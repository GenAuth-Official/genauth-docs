# Send email

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

When sending emails, you must specify the email channel. Each mailbox can only send once in the same channel within one minute.

## Method name

`AuthenticationClient.sendEmail`

## Request parameters

| Name    | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | <div style="width:200px"></div>Sample value</div> |
| ------- | ------ | -------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| channel | string | Yes                                    | -             | SMS channel, specify the purpose of sending this SMS:<br>- `CHANNEL_LOGIN`: for user login<br>- `CHANNEL_REGISTER`: for user registration<br>- `CHANNEL_RESET_PASSWORD`: for resetting password<br>- `CHANNEL_VERIFY_EMAIL_LINK`: Used to verify the email address<br>- `CHANNEL_UPDATE_EMAIL`: used to modify the email<br>- `CHANNEL_BIND_EMAIL`: used to bind the email<br>- `CHANNEL_UNBIND_EMAIL`: used to unbind the email<br>- `CHANNEL_VERIFY_MFA`: used to verify MFA<br>- `CHANNEL_UNLOCK_ACCOUNT`: used for self-service unlocking<br>- `CHANNEL_COMPLETE_EMAIL`: used to complete the email information when registering/logging in <br>- `CHANNEL_DELETE_ACCOUNT`: used to cancel the account<br> | `CHANNEL_LOGIN`                                   |
| email   | string | yes                                    | -             | email, case-insensitive                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `test@example.com`                                |

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
  const result = await authenticationClient.sendEmail({
    email: "test@example.com",
    channel: Models.SendEmailDto.channel.CHANNEL_LOGIN,
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `SendEmailRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 Indicates success.                                                                                                                                                                                                                             |
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
