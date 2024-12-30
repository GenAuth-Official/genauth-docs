# Get Token

<LastUpdated />

This document describes how to obtain `access_token`, `id_token` and `refresh_token` based on the OIDC standard, as well as the meaning and usage scenarios of these "tokens". If you need to build your own login page, please refer to the documentation in the login section.

<details>
<summary>1. What is "based on the OIDC standard protocol"? </summary>

!!!include(reference/sdk/common/hosted_page_signin.md)!!!

</details>

<br>

<details>
<summary>2. Click to expand the detailed introduction of access_token, id_token and refresh_token. </summary>

!!!include(reference/sdk/common/token_desc.md)!!!

</details>

<br>

<details>
<summary>3. The token issued by GenAuth follows the specifications of the OIDC standard protocol. Depending on the specific usage scenario, you need to first select the appropriate authorization mode. Different authorization modes have different methods for obtaining tokens. Click here to expand the details. </summary>

!!!include(reference/sdk/common/grant_type_desc.md)!!!

</details>

## Use code to exchange tokens

:::hint-info
Note: `refresh_token` will only be returned when `offline_access` is added to `scope` when an OIDC login request is initiated. For details, please see [Build login address](../login/build-authorize-url.md).
:::

### Request parameters

| Name | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                | <div style="width:200px"></div>Sample value</div> |
| ---- | ------ | -------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| code | string | Yes                                    | -             | The one-time authorization code obtained. A code can only be used once and will be invalid after use. The validity period is ten minutes. | `some-randon-string`                              |

### Sample code

```java
public class GetAccessTokenByCodeTest {
    // Need to be replaced with your GenAuth App ID
    private static final String APP_ID = "AUTHING_APP_ID";
    // Need to be replaced with your GenAuth App Secret
    private static final String APP_SECRET = "AUTHING_APP_SECRET";
    // Need to be replaced with your GenAuth App Host
    private static final String APP_HOST = "AUTHING_APP_HOST";
    // Need to be replaced with your GenAuth Redirect Uri
    private static final String REDIRECT_URI = "AUTHING_REDIRECT_URI";

    public static void main(String[] args) throws Throwable {
        AuthenticationClientOptions clientOptions = new AuthenticationClientOptions();
        clientOptions.setAppId(APP_ID);
        clientOptions.setAppSecret(APP_SECRET);
        clientOptions.setAppHost(APP_HOST);
        clientOptions.setRedirectUri(REDIRECT_URI);

        AuthenticationClient client = new AuthenticationClient(clientOptions);

        OIDCTokenResponse response = client.getAccessTokenByCode("REPLACE_ME_WITH_REAL_CODE");
        System.out.println(JsonUtils.serialize(response));
    }
}
```

## Use refresh_toke to exchange for a new token

:::hint-info
**Note**: `refresh_token` will only be returned if `offline_access` is added to `scope` when initiating an OIDC login request.
:::

When `access_token` expires, `refresh_token` can be used to exchange for a new `access_token`, so as to maintain the user login state for a long time without the user logging in again while ensuring security.

### Request parameters

| Name          | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>       | <div style="width:200px"></div>Sample value</div> |
| ------------- | ------ | -------------------------------------- | ------------- | ------------------------------------------------ | ------------------------------------------------- |
| refresh_token | string | Yes                                    | -             | `refresh_token` returned when obtaining a token. | `some-randon-string`                              |

### Example code

```java
public class GetNewAccessTokenByRefreshTokenTest {
    // Need to be replaced with your GenAuth App ID
    private static final String APP_ID = "AUTHING_APP_ID";
    // Need to be replaced with your GenAuth App Secret
    private static final String APP_SECRET = "AUTHING_APP_SECRET";
    // Need to be replaced with your GenAuth App Host
    private static final String APP_HOST = "AUTHING_APP_HOST";
    // Need to be replaced with your GenAuth Redirect Uri
    private static final String REDIRECT_URI = "AUTHING_REDIRECT_URI";

    public static void main(String[] args) throws Throwable {
        AuthenticationClientOptions clientOptions = new AuthenticationClientOptions();
        clientOptions.setAppId(APP_ID);
        clientOptions.setAppSecret(APP_SECRET);
        clientOptions.setAppHost(APP_HOST);
        clientOptions.setRedirectUri(REDIRECT_URI);

        AuthenticationClient client = new AuthenticationClient(clientOptions);

        GetNewAccessTokenByRefreshTokenRespDto response = client.getNewAccessTokenByRefreshToken("REPLACE_ME_WITH_REFRESH_TOKEN");
        System.out.println(JsonUtils.serialize(response));
    }
}
```

## Request response

Type: `GetNewAccessTokenByRefreshTokenRespDto`

| Name          | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                      | <div style="width:200px">Sample value</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------- | ------ | --------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| access_token  | string | no                                            | The interface call credentials are authorized to access the resource API within a limited time. | `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InIxTGtiQm8zOTI1UmIyWkZGckt5VTNNVmV4OVQyODE3S3gwdmJpNmlfS2MifQ.eyJqdGkiOiJ4R01uczd5cmNFckxiakNRVW9US1MiLCJzdWIiOiI1YzlmNzVjN2NjZjg3YjA1YTkyMWU5YjAiLCJpc3MiOiJodHRwczovL2F1dGhpbmcuY24iLCJpYXQiOjE1NTQ1Mzc4NjksImV4cCI6MTU1NDU0MTQ2OSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBvZmZsaW5lX2FjY2VzcyBwaG9uZSBlbWFpbCIsImF1ZCI6IjVjYTc2NWUzOTMxOTRkNTg5MWRiMTkyNyJ9.wX05OAgYuXeYM7zCxhrkvTO_taqxrCTG_L2ImDmQjMml6E3GXjYA9EFK0NfWquUI2mdSMAqohX-ndffN0fa5cChdcMJEm3XS9tt6-_zzhoOojK-q9MHF7huZg4O1587xhSofxs-KS7BeYxEHKn_10tAkjEIo9QtYUE7zD7JXwGUsvfMMjOqEVW6KuY3ZOmIq_ncKlB4jvbdrduxy1pbky_kvzHWlE9El_N5qveQXyuvNZVMSIEpw8_y5iSxPxKfrVwGY7hBaF40Oph-d2PO7AzKvxEVMamzLvMGBMaRAP_WttBPAUSqTU5uMXwMafryhGdIcQVsDPcGNgMX6E1jzLA`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| id_token      | string | no                                            | The user's identity credentials, which will contain user information after parsing.             | `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InIxTGtiQm8zOTI1UmIyWkZGckt5VTNNVmV4OVQyODE3S3gwdmJpNmlfS2MifQ.eyJzdWIiOiI1YzlmNzVjN2NjZjg3YjA1YTkyMWU5YjAiLCJub25jZSI6IjIyMTIxIiwiYXRfaGFzaCI6Ik5kbW9iZVBZOEFFaWQ2T216MzIyOXciLCJzaWQiOiI1ODM2NzllNC1lYWM5LTRjNDEtOGQxMS1jZWFkMmE5OWQzZWIiLCJhdWQiOiI1Y2E3NjVlMzkzMTk0ZDU4OTFkYjE5MjciLCJleHAiOjE1NTQ1NDE0NjksImlhdCI6MTU1NDUzNzg2OSwiaXNzIjoiaHR0cHM6Ly9hdXRoaW5nLmNuIn0.IQi5FRHO756e_eAmdAs3OnFMU7QuP-XtrbwCZC1gJntevYJTltEg1CLkG7eVhdi_g5MJV1c0pNZ_xHmwS0R-E4lAXcc1QveYKptnMroKpBWs5mXwoOiqbrjKEmLMaPgRzCOdLiSdoZuQNw_z-gVhFiMNxI055TyFJdXTNtExt1O3KmwqanPNUi6XyW43bUl29v_kAvKgiOB28f3I0fB4EsiZjxp1uxHQBaDeBMSPaRVWQJcIjAJ9JLgkaDt1j7HZ2a1daWZ4HPzifDuDfi6_Ob1ZL40tWEC7xdxHlCEWJ4pUIsDjvScdQsez9aV_xMwumw3X4tgUIxFOCNVEvr73Fg`                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| refresh_token | string | no                                            | `refresh_token` is used to obtain a new AccessToken.                                            | `WPsGJbvpBjqXz6IJIr1UHKyrdVF`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| token_type    | string | yes                                           | Token type.                                                                                     | `xxx`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| expire_in     | number | yes                                           | Expiration time, as a timestamp in seconds.                                                     | `7200`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| scope         | string | no                                            | `openid profile`                                                                                | The permissions that need to be requested, must include `openid`. If you need to obtain the phone number and email address, you must include `phone email`; if you need `refresh_token`, you must include `offline_access`. Please separate multiple `scope` with spaces. The decoded content of `id_token` will contain the fields related to the user information corresponding to these `scope`. <br>- `openid`: must be included. <br>- `profile`: returns birthdate, family_name, gender, given_name, locale, middle_name, name, nickname, picture, preferred_username, profile, updated_at, website, zoneinfo fields. <br>- `username`: returns username. <br>- `email`: returns email, email_verified. <br>- `phone`: returns phone_number, phone_number_verified. <br>- `offline_access`: if this parameter exists, the token interface will return the `refresh_token` field. <br>- `roles`: returns the user's role list. <br>- `external_id`: the user's user ID in the original system. <br>- `extended_fields`: returns the user's extended field information, the content is an object, `key` is the extended field name, `value` is the extended field value. <br>- `tenant_id`: returns the user's tenant ID. <br> | `openid profile` |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InIxTGtiQm8zOTI1UmIyWkZGckt5VTNNVmV4OVQyODE3S3gwdmJpNmlfS2MifQ.eyJqdGkiOiJ4R01uczd5cmNFckxiakNRVW9US1MiLCJzdWIiOiI1YzlmNzVjN2NjZjg3YjA1YTkyMWU5YjAiLCJpc3MiOiJodHRwczovL2F1dGhpbmcuY24iLCJpYXQiOjE1NTQ1Mzc4NjksImV4cCI6MTU1NDU0MTQ2OSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBvZmZsaW5lX2FjY2VzcyBwaG9uZSBlbWFpbCIsImF1ZCI6IjVjYTc2NWUzOTMxOTRkNTg5MWRiMTkyNyJ9.wX05OAgYuXeYM7zCxhrkvTO_taqxrCTG_L2ImDmQjMml6E3GXjYA9EFK0NfWquUI2mdSMAqohX-ndffN0fa5cChdcMJEm3XS9tt6-_zzhoOojK-q9MHF7huZg4O1587xhSofxs-KS7BeYxEHKn_10tAkjEIo9QtYUE7zD7JXwGUsvfMMjOqEVW6KuY3ZOmIq_ncKlB4jvbdrduxy1pbky_kvzHWlE9El_N5qveQXyuvNZVMSIEpw8_y5iSxPxKfrVwGY7hBaF40Oph-d2PO7AzKvxEVMamzLvMGBMaRAP_WttBPAUSqTU5uMXwMafryhGdIcQVsDPcGNgMX6E1jzLA",
    "id_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InIxTGtiQm8zOTI1UmIyWkZGckt5VTNNVmV4OVQyODE3S3gwdmJpNmlfS2MifQ.eyJzdWIiOiI1YzlmNzVjN2NjZjg3YjA1YTkyMWU5YjAiLCJub25jZSI6IjIyMTIxIiwiYXRfaGFzaCI6Ik5kbW9iZVBZOEFFaWQ2T216MzIyOXciLCJzaWQiOiI1ODM2NzllNC1lYWM5LTRjNDEtOGQxMS1jZWFkMmE5OWQzZWIiLCJhdWQiOiI1Y2E3NjVlMzkzMTk0ZDU4OTFkYjE5MjciLCJleHAiOjE1NTQ1NDE0NjksImlhdCI6MTU1NDUzNzg2OSwiaXNzIjoiaHR0cHM6Ly9hdXRoaW5nLmNuIn0.IQi5FRHO756e_eAmdAs3OnFMU7QuP-XtrbwCZC1gJntevYJTltEg1CLkG7eVhdi_g5MJV1c0pNZ_xHmwS0R-E4lAXcc1QveYKptnMroKpBWs5mXwoOiqbrjKEmLMaPgRzCOdLiSdoZuQNw_z-gVhFiMNxI055TyFJdXTNtExt1O3KmwqanPNUi6XyW43bUl29v_kAvKgiOB28f3I0fB4EsiZjxp1uxHQBaDeBMSPaRVWQJcIjAJ9JLgkaDt1j7HZ2a1daWZ4HPzifDuDfi6_Ob1ZL40tWEC7xdxHlCEWJ4pUIsDjvScdQsez9aV_xMwumw3X4tgUIxFOCNVEvr73Fg",
    "refresh_token": "WPsGJbvpBjqXz6IJIr1UHKyrdVF",
    "token_type": "xxx",
    "expire_in": 7200,
    "scope": "openid profile"
  }
}
```
