# Verify the OTP bound to the user's MFA

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Verify the OTP bound to the user's MFA.

## Method name

`AuthenticationClient.mfaOtpVerify`

## Request parameters

| Name | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ---- | ------ | -------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |
| totp | string | Yes                                    | -             | OTP password                               | `612311`                                          |

## Request response

Type: `MfaOtpVerityRespDto`

| Name       | Type                                             | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                           | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                           | description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                           | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#OtpVerityRespDto">OtpVerityRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "verified": true
  }
}
```

## Data structure

### <a id="OtpVerityRespDto"></a> OtpVerityRespDto

| Name     | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>      | <div style="width:200px">Sample value</div> |
| -------- | ------- | -------------------------------------------- | ----------------------------------------------- | ------------------------------------------- |
| verified | boolean | yes                                          | Whether the user OTP verification is successful | `true`                                      |
