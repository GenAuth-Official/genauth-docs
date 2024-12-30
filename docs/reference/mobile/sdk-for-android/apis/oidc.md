# {{$localeConfig.brandName}} - Android SDK OIDC 模块

<LastUpdated/>

## OIDC

OpenID Connect 简称 [OIDC](https://docs.genauth.ai/apn/#关于-oidc)，是 OAuth 2.0 的一个扩展，主要增加了语义化的用户信息字段。

### 初始化

`AuthClient` 会自动获取控制台默认回调，如需要自定义 `scope`、`redirect_uri` 等参数，可创建 `AuthRequest` 对象，重新给 `scope` 或 `redirect_uri` 属性赋值。

**示例**

```java
AuthRequest authRequest = new AuthRequest();
authRequest.setScope("openid");
```

## 生成 OIDC 协议的用户登录链接

生成登录 URL，传给 `WebView` 加载。

```java
public String buildAuthorizeUrl(@NotNull AuthRequest authRequest, @NotNull Callback<String> callback)
```

**参数**

- `callback` 回调

**示例**

```java
AuthRequest authRequest = new AuthRequest();
new AuthClient().buildAuthorizeUrl(authRequest, new Callback<String>() {
  	@Override
  	public void call(boolean ok, String data) {
    	myWebView.loadUrl(data);
  	}
});
```

**设置 scope 参数**

默认值为 `openid profile email phone username address offline_access roles extended_fields`。

```java
authRequest.setScope(String scope)
```

**设置回调参数**

SDK 会自动获取控制台默认回调。如果在控制台修改了回调，则需要设置 `authRequest` 回调地址。

```java
authRequest.setRedirectURL(String redirectURL)
```

<br>

## Code 换 Token

通过 OIDC 授权码认证，返回的数据里面包含 `access token` `和 id token`。如果登录 url 的 `scope` 里面包含 `offline_access`，则该接口也会返回 `refresh token`。

```java
public void getAccessTokenByCode(String code, @NotNull AuthRequest authRequest, @NotNull AuthCallback callback)
```

**参数**

- `code` OIDC 授权码。通过 `webview` 的回调获取，每个 Code 只能使用一次。
- `authRequest` 请求参数。

**示例**

```java
myWebView.setWebViewClient(new WebViewClient() {
    @Override
    public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
        String url = request.getUrl().toString();
        if (url.startsWith(authRequest.getRedirectURL())) {
            try {
                String authCode = Util.getAuthCode(url);
                if (authCode != null) {
                    new AuthClient().getAccessTokenByCode(authCode, authRequest, (AuthCallback) response -> {
                        	if (response.getStatusCode() == 200) {
       											 // 请求成功
   												}
                    });
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            return true;
        }
        return false;
    }
});
```

<br>

## 获取用户信息

通过 `access token` 获取用户信息，此接口只返回协议相关用户信息字段。

```java
public void getUserInfoByAccessToken(String accessToken, @NotNull AuthCallback callback)
```

**参数**

- `accessToken` accessToken。
- `callback` 函数回调。

**示例**

```java
new AuthClient().getUserInfoByAccessToken(accessToken, (AuthCallback) response -> {
    if (response.getStatusCode() == 200) {
        // 请求成功
    }
});
```

<br>

## 通过 Refresh Token 获取新的 Access Token 和 ID Token

`access token` 的有效期通常较短，比如几个小时或者 1 天。当 `access token` 过期后，App 不能频繁的弹出登录界面让用户认证，那样体验比较糟糕。所以通常的做法是通过代码，用一个有效期比较长的 `refresh token` 去刷新 `access token`，从而保持登录状态。只有当 `refresh token` 过期才弹出登录界面。

```java
public void getNewAccessTokenByRefreshToken(String refreshToken, AuthRequest authRequest, @NotNull AuthCallback callback)
```

**参数**

- `refreshToken` 刷新凭证。注意登录 URL 里面的参数配置，请参考 “生成 OIDC 协议的用户登录链接”。
- `authRequest` 请求参数。
- `callback` 函数回调，通过此回调获取用户信息。

**示例**

```java
AuthRequest authRequest = new AuthRequest();
new AuthClient().getNewAccessTokenByRefreshToken(rt, (AuthCallback) response -> {
    if (response.getStatusCode() == 200) {
        // 请求成功
    }
});
```

::: hint-info
注意：每次调用会得到新的 refresh token。
:::
