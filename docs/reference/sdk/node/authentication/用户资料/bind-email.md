# Bind Email

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to V3 API.

If the user has not **bound an email yet**, this interface can be used for the user to **self-bind** an email. If the user has already bound an email and wants to modify the email, please use the **Modify Email** interface. You need to call the **Send Email** interface to send the email verification code first.

## Method name

`AuthenticationClient.bindEmail`

## Request parameters

| Name     | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                   | <div style="width:200px"></div>Sample value</div> |
| -------- | ------ | -------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| passCode | string | Yes                                    | -             | Email verification code. An email verification code can only be used once and has a certain validity period. | `123456`                                          |
| email    | string | Yes                                    | -             | Email, case insensitive.                                                                                     | `test@example.com`                                |

## Sample code

```ts
import { AuthenticationClient, Models } from "authing-node-sdk";

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
