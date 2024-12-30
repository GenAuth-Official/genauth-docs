# 消息服务

<LastUpdated/>

## 发送短信

```swift
func sendSms(phone: String, phoneCountryCode: String? = nil, channel: Channel, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| phone | 手机号 |
| [*channel* ](./enum.md#-Channel) | [枚举值 Channel](./enum.md#-Channel) |

**示例代码**

```swift
AuthClient().sendSms(phone: "188xxxx8888", channel: Channel.login) { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

## 发送邮件

```swift
func sendEmail(email: String, channel: Channel, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| email | 邮箱 |
| [*channel* ](./enum.md#-Channel) | [枚举值 Channel](./enum.md#-Channel) |

**示例代码**

```swift
AuthClient().sendEmail(email: "test@example.com", channel: Channel.login) { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

