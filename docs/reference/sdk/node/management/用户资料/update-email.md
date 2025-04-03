# Modify email

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

When the end user modifies the email on his own, he needs to provide the corresponding verification method, see [Initiate verification request for modifying email](#tag/user profile/modify email/operation/ProfileV3Controller_updateEmailVerification).
This parameter needs to provide a one-time temporary credential `updateEmailToken`, which needs to be obtained from the **Initiate verification request for modifying email** interface.

## Method name

`ManagementClient.updateEmail`

## Request parameters

| Name             | Type   | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                      | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | --------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| updateEmailToken | string | Yes                                           | -                                           | Token used to temporarily modify the mailbox, which can be obtained from the **Initiate verification request to modify the mailbox** interface. | `xxxx`                                      |

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

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segment error code, which can be used to get the specific error type.                                        |
| requestId  | string | Request ID. Returned when the request fails.                                                                 |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## Data structure
