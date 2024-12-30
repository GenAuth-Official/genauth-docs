!!!include(common/init-js-auth-sdk.md)!!!

First, call the Send SMS Verification Code API to send the SMS verification code, and then use the `loginByPhoneCode` method:

```javascript
authenticationClient.loginByPhoneCode("188xxxx8888", "1234");

// Overseas Number
authenticationClient.loginByPhoneCode("788xxxx637", "1234", { phoneCountryCode: '+44' });
```