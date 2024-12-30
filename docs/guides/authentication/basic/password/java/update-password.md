!!!include(common/init-java-auth-sdk.md)!!!

If the user has not set a password before (for example, by registering by mobile phone number, social login, etc.), there is no need to enter the original password.

```java
String newPassword = "123456";
User user = authenticationClient.updatePassword(newPassword).execute();
```

or:

```java
String oldPassword = "111111";
String newPassword = "123456";
User user = authenticationClient.updatePassword(newPassword, oldPassword).execute();
```
