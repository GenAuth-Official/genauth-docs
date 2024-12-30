# Verify Token

<LastUpdated />

This document describes how to verify the validity of `access_token` and `refresh_token`. For an introduction to `access_token` and `refresh_token`, see [Get Token](./get-access-token.md).

The GenAuth Java SDK provides two ways to verify Tokens, online verification and local verification. Here is a comparison of the two methods:

| <div style="width:80px">Verification method</div> | <div style="width:80px">Advantages</div>                                             | <div style="width:80px">Disadvantages</div>                                                                                                                                                                                                                                                                      |
| ------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Online verification                               | Use a central server to verify the Token to ensure that the final result is correct. | - Network requests will be generated. <br>- There is a risk of single point of failure.                                                                                                                                                                                                                          |
| Local verification                                | No network request is required, and the performance is faster.                       | After `access_token` and `refresh_token` are manually revoked, the application server does not clear the cached `access_token`, and the local verification will still pass, so the application server must clear the locally cached `access_token` and `refresh_token` after `access_token` and `refresh_token`. |

## Online Verification

This interface is used to verify `access_token` and `refresh_token` online.

### Request Parameters

| Name  | Type   | <div style="width:80px">Is it required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Example Value</div> |
| ----- | ------ | -------------------------------------------- | ------------- | ------------------------------------------ | -------------------------------------------------- |
| token | string | Yes                                          | -             | Access Token or Refresh Token              | `some-randon-string`                               |

### Sample Code

```java
public class IntrospectTokenTest {
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

        IntrospectTokenRespDto response = client.introspectToken("REPLACE_ME_WITH_REAL_TOKEN");
        System.out.println(JsonUtils.serialize(response));
    }
}
```

### Request Response

Type: `IntrospectTokenRespDto`

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                          | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------- |
| active   | bool   | yes                                          | Valid or not.                                                                       | `true`                                       |
| sub      | string | no                                           | User ID corresponding to this Token, returned when the token is valid.              | `xxxxxx`                                     |
| clientId | string | no                                           | Application ID that issued this Token, returned when the token is valid.            | `xxxxxx`                                     |
| exp      | string | no                                           | Token expiration time, as a timestamp in seconds. Returned when the token is valid. | `1601460494`                                 |
| iat      | string | no                                           | Token issuance time, as a timestamp in seconds. Returned when the token is valid.   | `1601456894`                                 |
| iss      | string | no                                           | Issuer, returned when the token is valid.                                           | `https://example.genauth.ai/oidc`            |
| jti      | string | no                                           | Unique ID of this Token, returned when the token is valid.                          | `K5TYewNhvdGBdHiRifMyW`                      |
| scope    | string | No                                           | A comma-separated array of `scope`s to return when the token is valid.              | `openid profile`                             |

Example Results：

```json
{
  "active": true,
  "sub": "xxxx",
  "client_id": "xxxxx",
  "exp": 1601460494,
  "iat": 1601456894,
  "iss": "https://example.genauth.ai/oidc",
  "jti": "K5TYewNhvdGBdHiRifMyW",
  "scope": "openid profile email phone"
}
```

## Local validation

### Request Parameters

| Name  | Type   | <div style="width:80px">Is it required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Example Value</div> |
| ----- | ------ | -------------------------------------------- | ------------- | ------------------------------------------ | -------------------------------------------------- |
| token | string | Yes                                          | -             | Access Token or Refresh Token              | `some-randon-string`                               |

### Sample Code

```java
public class IntrospectAccessTokenOfflineTest {
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

        AccessToken response = client.introspectAccessTokenOffline("REPLACE_ME_WITH_REAL_TOKEN");
        System.out.println(JsonUtils.serialize(response));
    }
}
```

### Request Response

Type: `AccessToken`

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                   | <div style="width:200px">Example Value</div> |
| ----- | ------ | -------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------- |
| jti   | string | Yes                                          | the unique ID of this token.                                 | `K5TYewNhvdGBdHiRifMyW`                      |
| sub   | string | Yes                                          | the user ID corresponding to this token.                     | `xxxxxx`                                     |
| iat   | string | Yes                                          | the issuance time of the token, as a timestamp in seconds.   | `1601456894`                                 |
| exp   | string | Yes                                          | the expiration time of the token, as a timestamp in seconds. | `1601460494`                                 |
| scope | string | Yes                                          | a comma-separated array of `scope`.                          | `openid profile`                             |
| iss   | string | Yes                                          | the OIDC Issuer.                                             | `https://example.genauth.ai/oidc`            |
| aud   | string | Yes                                          | the application ID that issued this token                    | `xxxxxx`                                     |

Example Results：

```json
{
  "jti": "K5TYewNhvdGBdHiRifMyW",
  "aud": "xxxxxxx",
  "sub": "xxxxxxx",
  "exp": 1601460494,
  "iat": 1601456894,
  "iss": "https://example.genauth.ai/oidc",
  "scope": "openid profile offline_access"
}
```
