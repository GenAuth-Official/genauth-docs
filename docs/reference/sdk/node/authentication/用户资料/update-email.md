# Modify email

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to V3 API.

The end user needs to provide corresponding verification means to modify the email address on his own, see [Initiate verification request for modifying email address](#tag/user information/API%20list/operation/ProfileV3Controller_verifyUpdateEmailRequest).
This parameter requires a one-time temporary credential `updateEmailToken`, which needs to be obtained from the **Initiate verification request for modifying email address** interface.

## Method name

`AuthenticationClient.updateEmail`

## Request parameters

| Name             | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                      | <div style="width:200px"></div>Sample value</div> |
| ---------------- | ------ | -------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| updateEmailToken | string | Yes                                    | -             | Token used to temporarily modify the mailbox, which can be obtained from the **Initiate verification request to modify the mailbox** interface. | `xxxx`                                            |

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
  // Please call the login interface to obtain access_token first, and call the setAccessToken method to set access_token
  authenticationClient.setAccessToken("REPLACE_ME_WITH_REAL_ACCESS_TOKEN");

  const result = await authenticationClient.updateEmail({
    // Token used to temporarily modify the mailbox, which can be obtained from the verification request interface for initiating mailbox modification.
    updateEmailToken: "xxxx",
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
