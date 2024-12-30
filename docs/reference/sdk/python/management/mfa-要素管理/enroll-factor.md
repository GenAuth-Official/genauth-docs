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

`ManagementClient.enroll_factor`

## Request parameters

| Name            | Type                                                                       | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                   | <div style="width:200px">Sample value</div>                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| enrollmentData  | <a href="#EnrollFactorEnrollmentDataDto">EnrollFactorEnrollmentDataDto</a> | Yes                                           | -                                           | Verification information required for the corresponding authentication factor when binding the MFA authentication factor.                    |                                                                                                                                                                                |
| enrollmentToken | string                                                                     | Yes                                           | -                                           | The enrollmentToken returned by the "Initiate a request to bind an MFA authentication factor" interface. This token is valid for one minute. | `TQoCISidM0kBji0dxRi3afSDtkvvMiUphenIgLF87y+JOw4T8fDWOsHHXIcvZ2EVESXhTrfGyh1iGf52Cg9e9byeFQvm1VZ0QWrwmzwpntFAVtf1IP9LqVhmzXhBMFvLOcU/z1Eh/n0CrwX0uHNpJoMW9lp9AqHd9HvauaGKX+Y=` |
| factorType      | string                                                                     | yes                                           | -                                           | MFA authentication factor type: <br>- `OTP`: OTP<br>- `SMS`: SMS<br>- `EMAIL`: Email<br>- `FACE`: Face<br>                                   | `SMS`                                                                                                                                                                          |

## Request response

Type: `EnrollFactorRespDto`

| Name       | type   | description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segment error code, which can be used to get the specific error type.                                        |
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

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| passCode | string | No                                            | This parameter needs to be passed when binding SMS, email verification code, or OTP authentication factors. The value is SMS/email/OTP verification code. | `123456`                                    |
