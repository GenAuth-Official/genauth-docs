## Subscribe to events

### Method Name

- authenticationClient.subEvent(eventCode,receiver)

### Request Parameters

- eventCode `<String>` event code

- receiver `<Receiver>` custom receiver

### Sample Code

```java
AuthenticationClientOptions authenOptions = new AuthenticationClientOptions();
authenOptions.setAppId(APP_ID); // GenAuth App ID
authenOptions.setAppSecret(APP_SECRET); // GenAuth Application Key

AuthenticationClient authenticationClient = new AuthenticationClient(authenOptions);
authenticationClient.subEvent("yourapp.event.code", new Receiver() {
    @Override
    public void onReceiverMessage(String msg) {
        System.out.println(msg);
    }
});
```

## Publish event

- authenticationClient.pubtEvent(eventCode, data)

### Request Parameters

- eventCode `<String>` event code
- data `<Object>` event body

### Sample Code

```java
AuthenticationClientOptions authenOptions = new AuthenticationClientOptions();
authenOptions.setAppId(APP_ID); // GenAuth App ID
authenOptions.setAppSecret(APP_SECRET); // GenAuth Application Key

AuthenticationClient authenticationClient = new AuthenticationClient(authenOptions);
String eventData = "{\"id\":\"myid\",\"createdAt\":1675579686427,\"updatedAt\":1675579686427}";
CommonResponseDto result = authenticationClient.pubtEvent("yourapp.event.code", eventData);
System.out.println(result);
```
