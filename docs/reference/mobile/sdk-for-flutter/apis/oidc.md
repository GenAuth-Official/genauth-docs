# OIDC 模块

<LastUpdated/>

[OpenID Connect (OIDC)](https://docs.genauth.ai/apn/#关于-oidc)，是 OAuth 2.0 的一个扩展，主要增加了语义化的用户信息字段。

## 获取用户信息

通过 access token 获取用户信息。此接口只返回协议相关用户信息字段。

```dart
static Future<Result> getUserByAccessToken(String accessToken, [Map? data]) async
```

**参数**

`accessToken`: accessToken

**示例**

```dart
Result result = await OIDCClient.getUserByAccessToken("accessToken");
```

<br>

## 通过 refresh token 获取新的 access token 和 id token

通常来说 access token 的有效期较短，比如几个小时或者 1 天。当 access token 过期后，App 不能频繁地弹出登录界面让用户认证，那样体验比较糟糕。所以通常的做法是通过代码，用一个有效期比较长的 refresh token 去刷新 access token，从而保持登录状态。只有当 refresh token 过期才弹出登录界面。

```dart
static Future<AuthResult> getNewAccessTokenByRefreshToken(String refreshToken) async
```

**参数**

`refreshToken`: 刷新凭证

**示例**

```dart
AuthResult result = await OIDCClient.getNewAccessTokenByRefreshToken("refreshToken");
User user = result.user; // get user info
```

::: hint-info
注意，每次调用会得到新的 refresh token
:::

<br>

## 生成 OIDC 协议的登录链接

生成登录 URL，传给 `WebView` 加载：

```dart
static Future<AuthResult> buildAuthorizeUrl(AuthRequest authRequest) async
```

**参数**

`authRequest`: 请求参数

**示例**

```dart
AuthRequest authRequest = AuthRequest();
authRequest.createAuthRequest();
String url = await OIDCClient.buildAuthorizeUrl(authRequest);
```

**设置 scope 参数**

默认值为 'openid profile email phone username address offline_access role extended_fields'。

```dart
authRequest.scope = "openid"
```

**设置回调参数**

SDK 会自动获取控制台默认回调。如果在控制台修改了回调，则需要设置 `authRequest` 回调地址。

```dart
authRequest.redirectUrl = "your_uri"
```

<br>

## code 换 token

通过 OIDC 授权码认证。

```dart
static Future<AuthResult> authByCode(String code, String codeVerifier, String redirectUrl) async
```

**参数**

| 名称         | 说明        |
| :----------- | :---------- |
| code         | OIDC 授权码 |
| codeVerifier | PKCE 验证码 |
| redirectUrl  | 回调 Url    |

**示例**

```dart
AuthResult result = await AuthClient.authByCode("P6FENDfGSH72PxgJQk17FoGMWY3oL1G0D2PQ1AfyDeo",
        "fu6IivbcEb7DFCytjLmoAICRtFLbG9zkk5QdDbNd0gG",
        "https://guard.authing/redirect");
String ak = result.user?.accessToken;
String idToken = result.user?.token;
```

<br>
