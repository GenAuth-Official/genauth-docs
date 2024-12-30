# Revoke Token

<LastUpdated />

This document describes how to revoke `access_token` and `refresh_token`.

:::hint-danger
**Note**: If you use the method of verifying `access_token` and `refresh_token` locally, when revoking `access_token` and `refresh_token`, be sure to clear the cache of `access_token` and `refresh_token` locally, otherwise the local verification result will still be valid. For details, please see [Verify access_token](./introspect-token.md).
:::

## Revoke Token

This interface is used to revoke the issued `access_token` and `refresh_token`.

## Request Parameters

| Name  | Type   | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Example Value</div> |
| ----- | ------ | -------------------------------------- | ------ | ----------------------------------- | ------------------------------------------- |
| token | string | Yes                                     | -      | Access Token or Refresh Token。   | `some-randon-string`                        |

## Sample Code

```java
public class RevokeTokenTest {
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

        boolean response = client.revokeToken("REPLACE_ME_WITH_REAL_TOKEN");
        System.out.println(response);
    }
}
```

## Request Response

Type:  `IntrospectTokenResult`

| Name    | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ---- | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| Success | bool | Yes                                     | Whether the withdrawal is successful.                      | `true`                                |

Example Results：

```json
true
```
