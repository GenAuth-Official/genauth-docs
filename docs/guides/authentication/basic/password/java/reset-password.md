!!!include(common/init-java-auth-sdk.md)!!!

Reset password using mobile phone verification code:

```java
String phone = "phone number";
String code = "1234";
String password = "123456";
authenticationClient.resetPasswordByPhoneCode(phone, code, password).execute();
```

Reset your password using the verification code sent via email:

```java
String email = "test@example.com";
String code = "1234";
String password = "123456";
authenticationClient.resetPasswordByEmailCode(email, code, password).execute();
```
