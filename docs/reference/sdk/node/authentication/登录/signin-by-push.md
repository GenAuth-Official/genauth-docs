# Push login

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Push login.

## Method name

`AuthenticationClient.signInByPush`

## Request parameters

| Name    | Type                                                         | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>   | <div style="width:200px"></div>Sample value</div> |
| ------- | ------------------------------------------------------------ | -------------------------------------- | ------------- | -------------------------------------------- | ------------------------------------------------- |
| account | string                                                       | Yes                                    | -             | User account (user name/mobile number/email) | `test`                                            |
| options | <a href="#SignInByPushOptionsDto">SignInByPushOptionsDto</a> | No                                     | -             | Optional parameters                          |                                                   |

## Request response

Type: `GenePushCodeRespDto`

| Name       | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                 | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                 | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                 | Request ID. This is returned when the request fails.                                                                                                                                                                                                                                                                                           |
| data       | <a href="#GenePushCodeDataDto">GenePushCodeDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "pushCodeId": "gQE-8TwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyMGJjX",
    "expireTime": 120
  }
}
```

## Data structure

### <a id="SignInByPushOptionsDto"></a> SignInByPushOptionsDto

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | <div style="width:200px">Sample value</div> |
| ---------- | ------ | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| scope      | string | No                                            | The permissions that need to be requested, must include openid. If you need to obtain the phone number and email, you need to include phone email; if you need refresh_token, you need to include offline_access. Multiple scopes should be separated by spaces. The decoded content of id_token will contain the user information related fields corresponding to these scopes. <br>- `openid`: Must be included. <br>- `profile`: Returns birthdate, family_name, gender, given_name, locale, middle_name, name, nickname, picture, preferred_username, profile, updated_at, website, zoneinfo fields. <br>- `username`: Returns username. <br>- `email`: Returns email, email_verified. <br>- `phone`: returns phone_number, phone_number_verified. <br>- `offline_access`: if this parameter exists, the token interface will return the refresh_token field. <br>- `roles`: returns the user's role list. <br>- `external_id`: the user's user ID in the original system. <br>- `extended_fields`: returns the user's extended field information, the content is an object, the key is the extended field name, the value is the extended field value. <br>- `tenant_id`: returns the user's tenant ID. <br> | `openid profile`                            |
| context    | string | No                                            | Additional request context, which will be passed to the `context` object of the [Pipeline](https://docs.genauth.ai/guides/pipeline/) before and after authentication. Learn [how to get additional context passed in the `context` parameter of Pipeline](https://docs.genauth.ai/guides/pipeline/context-object.html).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `{"source":"utm"}`                          |
| customData | object | No                                            | To set additional user custom data, you need to [configure custom data](https://docs.genauth.ai/guides/users/user-defined-field/) in the GenAuth console first.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `{"school":"pku","age":"20"}`               |

### <a id="GenePushCodeDataDto"></a> GenePushCodeDataDto

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                       | <div style="width:200px">Sample value</div>                 |
| ---------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| pushCodeId | string | Yes                                           | Push code (unique ID for push login). You can query the push code status through this unique ID. | `gQE-8TwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyMGJjX` |
| expireTime | number | yes                                           | The push code expires in `${expireTime}` seconds, such as 120 seconds.                           | `120`                                                       |
