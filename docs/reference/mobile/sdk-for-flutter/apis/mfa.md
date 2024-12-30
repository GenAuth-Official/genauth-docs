# MFA 要素管理

<LastUpdated/>

## 邮箱绑定 MFA 认证要素

调用此接口前，需要先调用 [发送邮件](./message.md##-发送邮件) 接口。

```dart
static Future<AuthResult> mfaBindEmail(String email, String passCode) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| email | 邮箱 |
| passCode | 邮箱验证码 |

**示例代码**

```dart
AuthResult result = await AuthClient.mfaBindEmail("test@example.com", "1234");
```

<br>

## 手机号绑定 MFA 认证要素

调用此接口前，需要先调用 [发送短信验证码](./message.md##-发送短信) 接口。

```dart
static Future<AuthResult> mfaBindPhone(String phoneNumber, String passCode, [String? phoneCountryCode]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| phoneNumber | 手机号 |
| passCode | 短信验证码 |

**示例代码**

```dart
AuthResult result = await AuthClient.mfaBindPhone("188xxxx8888", "1234");
```

<br>

## OTP 绑定 MFA 认证要素

```dart
static Future<AuthResult> mfaBindOTP(String passCode) async
```

**请求参数**

`passCode`: OTP 验证码

**示例代码**

```dart
AuthResult result = await AuthClient.mfaBindOTP("1234");
```

<br>


## 解绑 MFA 认证要素

```dart
static Future<Result> mfaUnbindFactor(String factorId) async
```

**请求参数**

`factorId`: MFA 认证要素 ID

**示例代码**

```dart
AuthResult result = await AuthClient.mfaUnbindFactor("factorId");
```

<br>

## 获取绑定的所有 MFA 认证要素

```dart
static Future<Result> mfaGetEnrolledFactorsList() async
```

**示例代码**

```dart
AuthResult result = await AuthClient.mfaGetEnrolledFactorsList();
```

<br>

## 获取绑定的某个 MFA 认证要素

```dart
static Future<Result> mfaGetEnrolledBindFactor(String factorId) async
```

**请求参数**

`factorId`: MFA 认证要素 ID

**示例代码**

```dart
AuthResult result = await AuthClient.mfaGetEnrolledBindFactor("factorId");
```

<br>

## 获取可绑定的 MFA 认证要素

```dart
static Future<Result> mfaGetFactorsListToEnroll(String factorId) async
```

**示例代码**

```dart
static Future<Result> mfaGetFactorsListToEnroll() async
```

<br>