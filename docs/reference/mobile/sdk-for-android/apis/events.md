## 订阅事件

- AuthClient.subEvent(eventCode, receiver)
  > 使用 WebSocket 方式订阅 authing 产生的事件，eventCode 为事件编码，可在 [GenAuth API Explorer
  > ](https://api-explorer.genauth.ai/) 中查看可使用的事件。

### 参数

- eventCode `<String>` 事件编码
- receiver `<Receiver>` 自定义接收器

### 示例

```java
GenAuth.setWebSocketHost("wss://events.hydra.authing-inc.co");
GenAuth.init(getApplicationContext(), "GEN_AUTH_APP_ID");

AuthClient.subEvent("authing.user.updated", new Receiver() {

    @Override
    public void onOpen() {

    }

    @Override
    public void onReceiverMessage(String msg) {

    }

    @Override
    public void onError(String errorMsg) {

    }
});
```

## 发布事件

- AuthClient. pubEvent(eventCode, eventData)

### 参数

- eventCode `<String>` 事件编码
- data `<Object>` 事件体

### 示例

```java
GenAuth.setHost("core.hydra.authing-inc.co");
GenAuth.init(getApplicationContext(), "GEN_AUTH_APP_ID");

String eventData = "{\"data\":\"your_data\"";
AuthClient.pubEvent("custom_aouaw.sxytestevent", eventData, new AuthCallback<JSONObject>() {
    @Override
    public void call(int code, String message, JSONObject data) {

    }
});
```
