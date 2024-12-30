!!!include(common/init-csharp-auth-sdk.md)!!!

Reset password using mobile phone verification code:

```csharp
var phone = "phone number";
var code = "1234";
var password = "123456";
var message = await authenticationClient.ResetPasswordByPhoneCode(phone, code, password);
```

Reset your password using the verification code sent via email:

```csharp
var email = "test@example.com";
var code = "1234";
var password = "123456";
var message = await authenticationClient.ResetPasswordByEmailCode(email, code, password);
```
