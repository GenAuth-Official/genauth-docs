# Get password strength and account security rating

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

To get the user's password strength and account security rating, you need to bring the user's `access_token` in the request header.

## Method name

`ManagementClient.getSecurityLevel`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

## Sample code

```ts
import { AuthenticationClient, Models } from "@genauth/nodejs";

const authenticationClient = new AuthenticationClient({
  // Need to replace with your GenAuth AppId, Secret and Host
  appId: "GEN_AUTH_APP_ID",
  appSecret: "GEN_AUTH_APP_SECRET",
  appHost: "GEN_AUTH_APP_HOST",
});

(async () => {
  // Please call the login interface to get access_token first, and call the setAccessToken method to set access_token
  authenticationClient.setAccessToken("REPLACE_ME_WITH_REAL_ACCESS_TOKEN");

  const result = await authenticationClient.getSecurityLevel();

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `GetSecurityInfoRespDto`

| Name       | Type                                                 | Description                                                                                                  |
| ---------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                               | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string                                               | Description                                                                                                  |
| apiCode    | number                                               | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                               | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#GetSecurityInfoDto">GetSecurityInfoDto</a> | Response data                                                                                                |

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

### <a id="GetSecurityInfoDto"></a> GetSecurityInfoDto

| Name                  | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| --------------------- | ------- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| passwordSecurityLevel | number  | yes                                          | Password strength level                    |                                             |
| mfaEnrolled           | boolean | yes                                          | Whether MFA is bound                       |                                             |
| passwordSet           | boolean | yes                                          | Whether a password is set                  |                                             |
| emailBinded           | boolean | yes                                          | Whether an email address is bound          |                                             |
| phoneBinded           | boolean | yes                                          | Whether a mobile phone number is bound     |                                             |
| securityScore         | number  | yes                                          | Account level score                        |                                             |
