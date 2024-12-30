# 注册

<LastUpdated/>

## 邮箱密码注册

```dart
static Future<AuthResult> registerByEmail(String email, String password, [RegisterOptions? options]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| email | 邮箱 |
| password | 明文密码 |
| [*options* ](./options.md#RegisterOptions) | [注册可选参数]((./options.md#RegisterOptions)) |

**示例代码**

```dart
AuthResult result = await AuthClient.registerByEmail("test@example.com", "password");
```

<br>

## 邮箱验证码注册

使用邮箱验证码，邮箱不区分大小写且用户池内唯一。调用此接口之前，需要先调用 [发送邮件](./message.md##-发送邮件) 接口以获取邮箱验证码。

```dart
static Future<AuthResult> registerByEmailCode(String email, String passCode, [RegisterOptions? options]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| email | 邮箱 |
| passCode | 邮箱验证码 |
| [*options* ](./options.md#RegisterOptions) | [注册可选参数]((./options.md#RegisterOptions)) |

**示例代码**

```dart
AuthResult result = await AuthClient.registerByEmailCode("test@example.com", "code");
```

<br>

## 用户名注册

通过用户名注册帐号。用户名区分大小写且用户池内唯一。

```dart
static Future<AuthResult> registerByUsername(String username, String password, [RegisterOptions? options]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| username | 用户名 |
| password | 明文密码 |
| [*options* ](./options.md#RegisterOptions) | [注册可选参数]((./options.md#RegisterOptions)) |

**示例代码**

```dart
AuthResult result = await AuthClient.registerByUsername("test", "password");
```

<br>

## 短信验证码注册

通过手机号和短信验证码注册帐号。手机号需要在用户池内唯一。调用此接口之前，需要先调用 [发送短信验证码](./message.md##-发送短信) 接口以获取短信验证码。

```dart
static Future<AuthResult> registerByPhoneCode(String phone, String passCode, [String? phoneCountryCode, RegisterOptions? options]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| phone | 手机号 |
| code | 短信验证码 |
| [*options* ](./options.md#RegisterOptions) | [注册可选参数]((./options.md#RegisterOptions)) |

**示例代码**

```dart
AuthResult result = await AuthClient.registerByPhoneCode("188xxxx8888", "code");
```
<br>
