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

`ManagementClient.get_security_level`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

## Request response

Type: `GetSecurityInfoRespDto`

| Name       | Type                                                 | Description                                                                                                  |
| ---------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                               | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string                                               | Description                                                                                                  |
| apiCode    | number                                               | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                               | Request ID. It will be returned when the request fails.                                                      |
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
| passwordSecurityLevel | number  | Yes                                          | Password strength level                    |                                             |
| mfaEnrolled           | boolean | yes                                          | Is MFA bound                               |                                             |
| passwordSet           | boolean | yes                                          | Is a password set                          |                                             |
| emailBinded           | boolean | yes                                          | Is an email bound                          |                                             |
| phoneBinded           | boolean | yes                                          | Is a mobile phone number bound             |                                             |
| securityScore         | number  | yes                                          | Account level score                        |                                             |
