# Get password strength and account security rating

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

To obtain the user's password strength and account security rating, you need to bring the user's `access_token` in the request header.

## Method name

`AuthenticationClient.getSecurityLevel`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |

## Sample code

```ts
import { AuthenticationClient, Models } from "authing-node-sdk";

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

| Name       | Type                                                 | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                               | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                               | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                               | Segmented error code, which can be used to get the specific error type (successful request is not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#GetSecurityInfoDto">GetSecurityInfoDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

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
