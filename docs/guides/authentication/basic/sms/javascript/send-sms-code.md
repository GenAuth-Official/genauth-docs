!!!include(common/init-js-auth-sdk.md)!!!

Use the sendSmsCode method:

```javascript
authenticationClient.sendSmsCode("188xxxx8888");

// Send international SMS
authenticationClient.sendSmsCode("788xxxx637", "+44");
```
