# Get all bound MFA authentication factors

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

GenAuth currently supports four types of MFA authentication factors: SMS, email verification code, OTP, and face.

## Method name

`AuthenticationClient.listEnrolledFactors`

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
  // Please call the login interface to obtain access_token first, and call the setAccessToken method to set access_token
  authenticationClient.setAccessToken("REPLACE_ME_WITH_REAL_ACCESS_TOKEN");

  const result = await authenticationClient.listEnrolledFactors();

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `ListEnrolledFactorsRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful request is not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | array  | MFA Factor list                                                                                                                                                                                                                                                                                                                              |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "factorId": "6229ffaxxxxxxxxcade3e3d9",
    "factorType": "SMS",
    "profile": {
      "phoneNumber": "188xxxx8888",
      "phoneCountryCode": "+86"
    }
  }
}
```

## Data structure

### <a id="FactorDto"></a> FactorDto

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div>             |
| ---------- | ------ | --------------------------------------------- | ------------------------------------------ | -------------------------------------------------------- |
| factorId   | string | yes                                           | MFA authentication factor ID               | `6229ffaxxxxxxxxcade3e3d9`                               |
| factorType | string | yes                                           | MFA authentication factor type             | OTP                                                      |
| profile    | object | yes                                           | MFA authentication factor information      | `{"phoneNumber":"188xxxx8888","phoneCountryCode":"+86"}` |
