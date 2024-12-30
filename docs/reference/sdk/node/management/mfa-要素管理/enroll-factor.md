# Bind MFA authentication factors

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Bind MFA factors.

## Method name

`ManagementClient.enrollFactor`

## Request parameters

| Name            | Type                                                                       | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                              | <div style="width:200px">Sample value</div>                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| enrollmentData  | <a href="#EnrollFactorEnrollmentDataDto">EnrollFactorEnrollmentDataDto</a> | Yes                                           | -                                           | Verification information required for the corresponding authentication factor when binding an MFA authentication factor.                |                                                                                                                                                                                |
| enrollmentToken | string                                                                     | Yes                                           | -                                           | The enrollmentToken returned by the "Initiate MFA authentication factor binding request" interface. This token is valid for one minute. | `TQoCISidM0kBji0dxRi3afSDtkvvMiUphenIgLF87y+JOw4T8fDWOsHHXIcvZ2EVESXhTrfGyh1iGf52Cg9e9byeFQvm1VZ0QWrwmzwpntFAVtf1IP9LqVhmzXhBMFvLOcU/z1Eh/n0CrwX0uHNpJoMW9lp9AqHd9HvauaGKX+Y=` |
| factorType      | string                                                                     | yes                                           | -                                           | MFA authentication factor type: <br>- `OTP`: OTP<br>- `SMS`: SMS<br>- `EMAIL`: Email<br>- `FACE`: Face<br>                              | `SMS`                                                                                                                                                                          |

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

  const result = await authenticationClient.enrollFactor({
    factorType: Models.EnrollFactorDto.factorType.SMS,
    enrollmentToken:
      "TQoCISidM0kBji0dxRi3afSDtkvvMiUphenIgLF87y+JOw4T8fDWOsHHXIcvZ2EVESXhTrfGyh1iGf52Cg9e9byeFQvm1VZ0QWrwmzwpntFAVtf1IP9LqVhmzXhBMFvLOcU/z1Eh/n0CrwX0uHNpJoMW9lp9AqHd9HvauaGKX+Y=",
    enrollmentData: {
      passCode: "123456",
    },
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `EnrollFactorRespDto`

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

### <a id="EnrollFactorEnrollmentDataDto"></a> EnrollFactorEnrollmentDataDto

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                             | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| passCode | string | No                                            | This parameter is required when binding SMS, email verification code, or OTP authentication factors. The value is the SMS/email/OTP verification code. | `123456`                                    |
