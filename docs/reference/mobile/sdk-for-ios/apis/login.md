# 登录

<LastUpdated/>

## 手机验证码登录

通过短信验证码登录，需要先调用 [发送短信验证码](./message.md##-发送短信) 接口。

```swift
func loginByPhoneCode(phone: String, code: String, _ options: LoginOptions? = nil, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| phone | 手机号 |
| code | 短信验证码 |
| [*options* ](./options.md#LoginOptions) | [登录可选参数]((./options.md#LoginOptions)) |

**示例代码**

```swift
AuthClient().loginByPhoneCode(phone: "188xxxx8888", code: "1234") { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```


<br>

## 邮箱验证码登录

通过邮箱验证码登录，需要先调用 [发送邮件](./message.md##-发送邮件) 接口。

```swift
func loginByEmailCode(email: String, code: String, _ options: LoginOptions? = nil, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| email | 邮箱 |
| code | 短信验邮箱验证码证码 |
| [*options* ](./options.md#LoginOptions) | [登录可选参数]((./options.md#LoginOptions)) |
  
**示例代码**

```swift
AuthClient().loginByEmailCode(email: "test@example.com", code: "1234") { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

<br>

## 用户名密码登录

```swift
func loginByUsername(username: String, password: String, _ options: LoginOptions? = nil, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| account | 可以是手机号 / 邮箱 / 用户名 |
| password | 明文密码 |
| [*options* ](./options.md#LoginOptions) | [登录可选参数]((./options.md#LoginOptions)) |

**示例代码**

```swift
AuthClient().loginByUsername(username: "test", password: "password") { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

<br>

## 帐号密码登录

```swift
func loginByAccount(account: String, password: String, _ options: LoginOptions? = nil, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| account | 可以是手机号 / 邮箱 / 用户名 |
| password | 明文密码 |
| [*options* ](./options.md#LoginOptions) | [登录可选参数]((./options.md#LoginOptions)) |

**示例代码**

```swift
AuthClient().loginByAccount(account: "account", password: "strong") { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```


<br>


## 社会化登录

```swift
func loginByThirdPart(code: String, connection: SocialConnection, _ options: LoginOptions? = nil, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| code | 社会化登录获取到的 Auth Code |
| [connection](enum.md#SocialConnection) | [社会化登录类型](enum.md#SocialConnection) |
| [*options* ](./options.md#LoginOptions) | [登录可选参数]((./options.md#LoginOptions)) |

**示例代码**

```swift
AuthClient().loginByThirdPart(code: "code", connection: SocialConnection.wechat) { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

<br>

## 易盾社会化登录

```swift
func loginByOneAuth(token: String, accessToken: String, _ options: LoginOptions? = nil, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| token | 易盾授权后返回的 token |
| accessToken | 易盾授权后返回的 accessToken |
| [*options* ](./options.md#LoginOptions) | [登录可选参数]((./options.md#LoginOptions)) |

**示例代码**

```swift
AuthClient().loginByOneAuth(token: "TOKEN", accessToken: "ACCESS_TOKEN") { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

<br>

