
!!!include(common/init-java-auth-sdk.md)!!!

First, call the Send SMS Verification Code API to send the SMS verification code, and then use the `loginByPhoneCode` method:

```java
String phone = "phone number";
String code = "1234";
User user = authenticationClient.loginByPhoneCode(new LoginByPhoneCodeInput(phone, code)).execute();
```
