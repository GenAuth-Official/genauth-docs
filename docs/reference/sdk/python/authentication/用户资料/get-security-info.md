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

`AuthenticationClient.get_security_level`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |

## Request response

Type: `GetSecurityInfoRespDto`

| Name       | Type                                                 | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                               | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                               | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                               | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
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
| passwordSecurityLevel | number  | Yes                                          | Password strength level                    |                                             |
| mfaEnrolled           | boolean | yes                                          | Is MFA bound                               |                                             |
| passwordSet           | boolean | yes                                          | Is a password set                          |                                             |
| emailBinded           | boolean | yes                                          | Is an email bound                          |                                             |
| phoneBinded           | boolean | yes                                          | Is a mobile phone number bound             |                                             |
| securityScore         | number  | yes                                          | Account level score                        |                                             |
