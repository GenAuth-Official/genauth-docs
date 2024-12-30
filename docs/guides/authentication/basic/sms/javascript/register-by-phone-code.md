!!!include(common/init-js-auth-sdk.md)!!!

First, call the SMS verification code sending interface to send the SMS verification code, and then use the `registerByPhoneCode` method:


```javascript
authenticationClient.registerByPhoneCode("188xxxx8888", "1234");

// Overseas Number
authenticationClient.registerByPhoneCode(
  '788xxxx637',
  '1234',
  null,
  null,
  {
    phoneCountryCode: '+44'
  }
);
```

or:

```javascript
authenticationClient.registerByPhoneCode(
  "188xxxx8888",
  "1234",
  "passw0rd",
  {
    nickname: "Nick",
  },
  {
    generateToken: true,
  }
);
```
