## Subscribe to events

- authenticationClient.sub(eventCode,callback,errCallback)

### Parameters

- eventCode `<String>` event code
- callback `<Function>` custom receiver
- errCallback `<Function>` custom error receiver

### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appSecret: "APP_SECRET",
  appHost: "YOUR_APP_HOST",
  accessToken: "TOKEN",
  retryTimes: 0, // socket connection failure retry times
});

authenticationClient.sub(
  "authing.user.created",
  (msg: string) => {
    console.log(msg);
  },
  (err) => {
    console.log(err);
  }
);
```

## Publish events

- authenticationClient.pub(eventCode, data)

### Parameters

- eventCode `<String>` Event code
- data `<String>` Event body

### Example

```javascript
authenticationClient.pub(
  "CUSTOM_EVENT",
  JSON.stringify({
    email: "test@example.com",
    phone: "188xxxx8888",
    name: "xxxx",
    customData: {
      school: "pku",
      age: 22,
    },
  })
);
```
