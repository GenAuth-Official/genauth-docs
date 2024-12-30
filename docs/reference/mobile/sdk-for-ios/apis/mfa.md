# MFA 要素管理

<LastUpdated/>

## 邮箱绑定 MFA 认证要素

调用此接口前，需要先调用 [发送邮件](./message.md##-发送邮件) 接口。

```swift
func mfaBindEmail(email: String, passCode: String, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| email | 邮箱 |
| passCode | 邮箱验证码 |

**示例代码**

```swift
AuthClient().mfaBindEmail(email: "test@example.com", passCode: "passCode") { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

<br>

## 手机号绑定 MFA 认证要素

调用此接口前，需要先调用 [发送短信验证码](./message.md##-发送短信) 接口。

```swift
func mfaBindPhone(phoneCountryCode: String? = nil, phoneNumber: String, passCode: String, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| phoneNumber | 手机号 |
| passCode | 短信验证码 |

**示例代码**

```swift
AuthClient().mfaBindPhone(phoneNumber: "188xxxx8888", passCode: "1234") { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

<br>

## OTP 绑定 MFA 认证要素

```swift
func mfaBindOTP(passCode: String, completion: @escaping(Response) -> Void)
```

**请求参数**

`passCode`: OTP 验证码

**示例代码**

```swift
AuthClient().mfaBindOTP(passCode: "1234") { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

<br>


## 解绑 MFA 认证要素

```swift
func mfaUnbindFactor(factorId: String, completion: @escaping(Response) -> Void)
```

**请求参数**

`factorId`: MFA 认证要素 ID

**示例代码**

```swift
AuthClient().mfaUnbindFactor(factorId: "factorId") { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

<br>

## 获取绑定的所有 MFA 认证要素

```swift
func mfaGetEnrolledFactorsList(completion: @escaping(Response) -> Void)
```

**示例代码**

```swift
AuthClient().mfaGetEnrolledFactorsList() { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

<br>

## 获取绑定的某个 MFA 认证要素

```swift
func mfaGetEnrolledBindFactor(factorId: String, completion: @escaping(Response) -> Void)
```

**请求参数**

`factorId`: MFA 认证要素 ID

**示例代码**

```swift
AuthClient().mfaGetEnrolledBindFactor(factorId: "factorId") { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

<br>

## 获取可绑定的 MFA 认证要素

```swift
func mfaGetFactorsListToEnroll(completion: @escaping(Response) -> Void)
```

**示例代码**

```swift
AuthClient().mfaGetFactorsListToEnroll() { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

<br>