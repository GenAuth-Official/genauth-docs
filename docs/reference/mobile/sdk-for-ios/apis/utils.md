# 其他

<LastUpdated/>

## 获取服务器公开信息

```swift
func getSystemConfig(completion: @escaping (Response) -> Void)
```

**示例代码**

```swift
AuthClient().getSystemConfig() { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

## 获取安全等级

```swift
func getSecurityInfo(completion: @escaping (Response) -> Void)
```

**示例代码**

```swift
AuthClient().getSecurityInfo() { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```


