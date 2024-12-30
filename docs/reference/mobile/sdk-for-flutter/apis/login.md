# 登录

<LastUpdated/>

## 手机验证码登录

通过短信验证码登录，需要先调用 [发送短信验证码](./message.md##-发送短信) 接口。

```dart
static Future<AuthResult> loginByPhoneCode(String phone, String code, LoginOptions? options]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| phone | 手机号 |
| code | 短信验证码 |
| [*options* ](./options.md#LoginOptions) | [登录可选参数]((./options.md#LoginOptions)) |

**示例代码**

```dart
AuthResult result = await AuthClient.loginByPhoneCode("188xxxx8888", "code");
User user = result.user; // get user info
```


<br>

## 邮箱验证码登录

通过邮箱验证码登录，需要先调用 [发送邮件](./message.md##-发送邮件) 接口。

```dart
static Future<AuthResult> loginByEmailCode(String email, String passCode, [LoginOptions? options]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| email | 邮箱 |
| code | 短信验邮箱验证码证码 |
| [*options* ](./options.md#LoginOptions) | [登录可选参数]((./options.md#LoginOptions)) |
  
**示例代码**

```dart
AuthResult result = await AuthClient.loginByEmailCode("test@example.com", "passCode");
User user = result.user; // user info
```

<br>

## 用户名密码登录

```dart
static Future<AuthResult> loginByUsername(String username, String password, [LoginOptions? options]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| account | 可以是手机号 / 邮箱 / 用户名 |
| password | 明文密码 |
| [*options* ](./options.md#LoginOptions) | [登录可选参数]((./options.md#LoginOptions)) |

**示例代码**

```dart
AuthResult result = await AuthClient.loginByUsername("test", "password");
User user = result.user; // user info
```

<br>

## 帐号密码登录

```dart
static Future<AuthResult> loginByAccount(String account, String password, [LoginOptions? options]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| account | 可以是手机号 / 邮箱 / 用户名 |
| password | 明文密码 |
| [*options* ](./options.md#LoginOptions) | [登录可选参数]((./options.md#LoginOptions)) |

**示例代码**

```dart
AuthResult result = await AuthClient.loginByAccount("test", "password");
User user = result.user; // user info
```


<br>


## 社会化登录

```dart
static Future<AuthResult> loginByThirdPart(String code, String connection, String extIdpConnidentifier, [LoginOptions? options]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| code | 社会化登录获取到的 Auth Code |
| [connection](enum.md#Connection) | [社会化登录类型](enum.md#Connection) |
| extIdpConnidentifier | 外部身份源连接标志符 |
| [*options* ](./options.md#LoginOptions) | [登录可选参数]((./options.md#LoginOptions)) |

**示例代码**

```dart
AuthResult result = await AuthClient.loginByThirdPart("code", "connection", "extIdpConnidentifier");
User user = result.user; // user info
```

<br>

## 易盾社会化登录

```dart
static Future<AuthResult> loginByOneAuth(String token, String accessToken, String extIdpConnidentifier, [LoginOptions? options]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| token | 易盾授权后返回的 token |
| accessToken | 易盾授权后返回的 accessToken |
| [*options* ](./options.md#LoginOptions) | [登录可选参数]((./options.md#LoginOptions)) |

**示例代码**

```dart
AuthResult result = await AuthClient.loginByOneAuth("token", "accessToken", "extIdpConnidentifier");
User user = result.user; // user info
```

<br>

