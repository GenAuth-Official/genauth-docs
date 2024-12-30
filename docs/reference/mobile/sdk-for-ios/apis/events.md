# 事件

## 订阅事件

```swift
func subEvent(eventCode: String, completion: @escaping (Int, String?) -> Void)
```

### 参数

- eventCode `<String>` 事件编码
- completion `<Void>` 事件回调

### 示例

```swift
GenAuth.start(APP_ID)
GenAuth.setWebsocketHost(websocketHost: "yourapp.websocketHost")
AuthClient().subEvent(eventCode: "yourapp.event.code") { code, message in
    print(message)
}
```

## 发布事件

```swift
func pubEvent(eventType: String, eventData: NSDictionary, completion: @escaping(Int, String?, NSDictionary?) -> Void)
```

### 参数

- eventType `<String>` 事件编码
- eventData `<NSDictionary>` 事件体

### 示例

```swift
GenAuth.start(APP_ID)
let eventData: NSDictionary = ["id": "myid", "createdAt": 1675579686427, "updatedAt": 1675579686427]
AuthClient().pubEvent(eventType: "yourapp.event.code", eventData: eventData) { code, message, data in
    print(message)
}
```
