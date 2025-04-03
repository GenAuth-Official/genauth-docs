# Bind an email address

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

If the user has not yet **bound an email address**, this interface can be used for the user to **self-bind an email address**. If the user has already bound an email address and wants to modify the email address, please use the **Modify Email** interface. You need to call the **Send Email** interface to send the email verification code first.

## Method name

`ManagementClient.bindEmail`

## Request parameters

| Name     | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                   | <div style="width:200px">Sample value</div> |
| -------- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| passCode | string | Yes                                    | -                                           | Email verification code. An email verification code can only be used once and has a certain validity period. | `123456`                                    |
| email    | string | Yes                                    | -                                           | Email, case insensitive.                                                                                     | `test@example.com`                          |

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

  const result = await authenticationClient.bindEmail({
    email: "test@qq.com",
    passCode: "123456",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `CommonResponseDto`

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
