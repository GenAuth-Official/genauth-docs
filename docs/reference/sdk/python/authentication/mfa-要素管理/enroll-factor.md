# Bind MFA authentication elements

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Bind MFA elements.

## Method name

`AuthenticationClient.enroll_factor`

## Request parameters

| Name            | Type                                                                       | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                   | <div style="width:200px"></div>Sample value</div>                                                                                                                              |
| --------------- | -------------------------------------------------------------------------- | -------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| enrollmentData  | <a href="#EnrollFactorEnrollmentDataDto">EnrollFactorEnrollmentDataDto</a> | Yes                                    | -             | Verification information required by the corresponding authentication factor when binding the MFA authentication factor.                     |                                                                                                                                                                                |
| enrollmentToken | string                                                                     | Yes                                    | -             | The enrollmentToken returned by the "Initiate a request to bind an MFA authentication factor" interface. This token is valid for one minute. | `TQoCISidM0kBji0dxRi3afSDtkvvMiUphenIgLF87y+JOw4T8fDWOsHHXIcvZ2EVESXhTrfGyh1iGf52Cg9e9byeFQvm1VZ0QWrwmzwpntFAVtf1IP9LqVhmzXhBMFvLOcU/z1Eh/n0CrwX0uHNpJoMW9lp9AqHd9HvauaGKX+Y=` |
| factorType      | string                                                                     | yes                                    | -             | MFA authentication factor type: <br>- `OTP`: OTP<br>- `SMS`: SMS<br>- `EMAIL`: Email<br>- `FACE`: Face<br>                                   | `SMS`                                                                                                                                                                          |

## Request response

Type: `EnrollFactorRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. It will be returned when the request fails.                                                                                                                                                                                                                                                                                        |

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

| Name            | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                             | <div style="width:200px">Sample value</div> |
| --------------- | ------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| passCode        | string  | No                                            | This parameter is required when binding SMS, email verification code, or OTP authentication factors. The value is the SMS/email/OTP verification code. | `123456`                                    |
| photo           | string  | No                                            | This parameter is required when binding a FACE-type authentication element. The value is the bound face image link.                                    | `132434235ad244`                            |
| isExternalPhoto | boolean | No                                            | This parameter is required when binding a FACE-type authentication element. Whether it is an external link image.                                      | `true`                                      |
