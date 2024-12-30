# Use account (mobile phone number/email/user name) + password to log in

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Use account (mobile phone number/email/user name) + password to log in, mobile phone number, email address, and username can be matched at will.

## Request parameters

| Name     | Type                                             | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                      | <div style="width:200px"></div>Sample value</div> |
| -------- | ------------------------------------------------ | -------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| account  | str                                              | Yes                                    | -             | Phone number or username or email                                                                                                                                                                                                                                                                                                                               | `test`                                            |
| password | str                                              | Yes                                    | -             | User password, not encrypted by default. All GenAuth APIs transmit passwords securely via the HTTPS protocol, which can ensure security to a certain extent. If you need a higher level of security, we also support `RSA256` and the national secret `SM2` password encryption methods. For details, see the optional parameter `options.passwordEncryptType`. | `passw0rd`                                        |
| options  | <a href="#SignInOptionsDto">SignInOptionsDto</a> | No                                     | -             | Optional parameters                                                                                                                                                                                                                                                                                                                                             | `{"passwordEncryptType":"none"}`                  |

## Example code

```python
from authing import AuthenticationClient

# Initialize AuthenticationClient
authentication_client = AuthenticationClient(
# GenAuth application ID
app_id='GEN_AUTH_APP_ID',

# GenAuth application secret
app_secret='GEN_AUTH_APP_SECRET',

# GenAuth application address, such as https://example.genauth.ai
app_host='GEN_AUTH_APP_HOST',

# Login callback address configured by GenAuth application
redirect_uri='GEN_AUTH_APP_REDIRECT_URI',
)

sign_in_resp = authentication_client.sign_in_by_account_password(
account="test",
password="passw0rd",
)
print(sign_in_resp)
```

## Request response

Type: `LoginTokenRespDto`

| Name       | Type                                                               | Description                                                                                                  |
| ---------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                             | Description                                                                                                  |
| apiCode    | number                                                             | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                             | Request ID. It will be returned when the request fails.                                                      |
| data       | <a href="#LoginTokenResponseDataDto">LoginTokenResponseDataDto</a> | Response data                                                                                                |

Sample result:

!!!include(reference/sdk/common/token_response_json.md)!!!

## Data structure

### <a id="SignInOptionsDto"></a> SignInOptionsDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
