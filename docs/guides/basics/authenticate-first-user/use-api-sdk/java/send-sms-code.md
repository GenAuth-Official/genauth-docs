Use the `sendSmsCode` method to send the verification code:

```java
String phone = "phone number";
authenticationClient.sendSmsCode(phone).execute();
```