!!!include(common/init-js-auth-sdk.md)!!!

Reset password using mobile phone verification code:

```javascript
authenticationClient.resetPasswordByPhoneCode(
  "188xxxx8888",
  "1234",
  "passw0rd"
);
```

Reset your password using the verification code sent via email:

```javascript
authenticationClient.resetPasswordByEmailCode(
  "test@example.com",
  "1234",
  "passw0rd"
);
```
