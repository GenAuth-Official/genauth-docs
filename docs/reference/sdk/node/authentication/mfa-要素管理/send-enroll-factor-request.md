# Initiate a request to bind an MFA authentication factor

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

When the user has not bound an MFA authentication factor, you can initiate a request to bind an MFA authentication factor. Different types of MFA authentication factor binding requests require different parameters, see profile parameters for details. After initiating the verification request, the GenAuth server will use different means to request verification based on the corresponding authentication factor type and the passed parameters. This interface will return the enrollmentToken, you need to bring this enrollmentToken when requesting the "Bind MFA Authentication Factor" interface and provide the corresponding credentials.

## Method name

`AuthenticationClient.sendEnrollFactorRequest`

## Request parameters

| Name       | Type                                       | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                | <div style="width:200px"></div>Sample value</div>        |
| ---------- | ------------------------------------------ | -------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| profile    | <a href="#FactorProfile">FactorProfile</a> | Yes                                    | -             | MFA authentication factor details                                                                         | `{"phoneNumber":"188xxxx8888","phoneCountryCode":"+86"}` |
| factorType | string                                     | Yes                                    | -             | MFA authentication factor type:<br>- `OTP`: OTP<br>- `SMS`: SMS<br>- `EMAIL`: Email<br>- `FACE`: Face<br> | `SMS`                                                    |

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

  const result = await authenticationClient.sendEnrollFactorRequest({
    factorType: Models.SendEnrollFactorRequestDto.factorType.SMS,
    profile: {
      phoneNumber: "188xxxx8888",
      phoneCountryCode: "+86",
      email: "test@example.com",
    },
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `SendEnrollFactorRequestRespDto`

| Name       | Type                                                                         | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                                       | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                                       | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#SendEnrollFactorRequestDataDto">SendEnrollFactorRequestDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
"statusCode": 200,
"message": "Operation successful",
"requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
"data": {
"enrollmentToken": "TQoCISidM0kBji0dxRi3afSDtkvvMiUphenIgL
```
