# Get the fast authentication QR code data

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

This endpoint is used to obtain fast authentication parameters to generate QR codes in the user's personal center. You can use the GenAuth token APP to scan the code to complete fast authentication. **This interface requires the user to be logged in**.

## Method name

`AuthenticationClient.gene_fastpass_qrcode_info`

## Request parameters

| Name    | Type                                                             | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ------- | ---------------------------------------------------------------- | -------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |
| options | <a href="#SignInFastpassOptionsDto">SignInFastpassOptionsDto</a> | No                                     | -             | Optional parameters                        |                                                   |

## Request response

Type: `GeneFastpassQRCodeRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ---- | ------------------------------------------------------------------ | ------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |     | data | <a href="#GeneFastpassQRCodeInfoDto">GeneFastpassQRCodeInfoDto</a> | response data |

Example result:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "qrcodeId": "gQE-8TwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyMGJjX",
    "apiHost": "https://example.genauth.ai",
    "user": {},
    "userpool": {}
  }
}
```

## Data structure

### <a id="SignInFastpassOptionsDto"></a> SignInFastpassOptionsDto

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | <div style="width:200px">Sample value</div> |
| ---------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| scope      | string | No                                            | The permissions that need to be requested. Openid must be included. If you need to obtain a phone number and email, phone email must be included; if refresh_token is needed, offline_access must be included. Multiple scopes must be separated by spaces. The decoded content of id_token will contain fields related to the user information corresponding to these scopes. <br>- `openid`: must be included. <br>- `profile`: Returns birthdate, family_name, gender, given_name, locale, middle_name, name, nickname, picture, preferred_username, profile, updated_at, website, zoneinfo fields. <br>- `username`: Returns username. <br>- `email`: Returns email, email_verified. <br>- `phone`: Returns phone_number, phone_number_verified. <br>- `offline_access`: If this parameter exists, the token interface will return the refresh_token field. <br>- `roles`: Returns the user's role list. <br>- `external_id`: The user's user ID in the original system. <br>- `extended_fields`: Returns the user's extended field information, the content is an object, the key is the extended field name, and the value is the extended field value. <br>- `tenant_id`: Returns the user's tenant ID. <br> | `openid profile`                            |
| context    | object | No                                            | Additional request context, which will be passed to the `context` object of the [Pipeline](https://docs.genauth.ai/guides/pipeline/) before and after authentication. Learn [how to get the additional context passed in the `context` parameter of Pipeline](https://docs.genauth.ai/guides/pipeline/context-object.html).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `{"source":"utm"}`                          |
| customData | object | No                                            | Set additional user custom data. You need to [configure custom data](https://docs.genauth.ai/guides/users/user-defined-field/) in the GenAuth console first.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `{"school":"pku","age":"20"}`               |

### <a id="GeneFastpassQRCodeInfoDto"></a> GeneFastpassQRCodeInfoDto

| Name     | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                 | <div style="width:200px">Sample value</div>                 |
| -------- | ------ | -------------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| scene    | string | Yes                                    | The usage scenario of the QR code.                                                         |                                                             |
| qrcodeId | string | Yes                                    | The unique ID of the QR code. You can use this unique ID to query the QR code status.      | `gQE-8TwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyMGJjX` |
| apiHost  | string | yes                                    | Service interface Host address                                                             | `https://example.genauth.ai`                                |
| user     |        | yes                                    | User information Nested type: <a href="#FastpassUserInfoDto">FastpassUserInfoDto</a>.      |                                                             |
| appId    | string | yes                                    | Application ID logged in by the current user when generating a QR code                     |                                                             |
| userpool |        | yes                                    | User pool information Nested type: <a href="#FastpassUserInfoDto">FastpassUserInfoDto</a>. |                                                             |

### <a id="FastpassUserInfoDto"></a> FastpassUserInfoDto

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| id          | string | Yes                                           | User ID                                    |                                             |
| displayName | string | Yes                                           | User name                                  |                                             |
| photo       | string | Yes                                           | User avatar address                        |                                             |
