!!!include(common/init-java-auth-sdk.md)!!!

Use the `sendSmsCode` method:

```java
String phone = "phone number";
authenticationClient.sendSmsCode(phone).execute();
```