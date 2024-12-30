# Android

This guide will start with the installation of the GenAuth Android SDK and step by step guide you on how to quickly add user authentication capabilities to your existing or newly developed Android applications.

<AppDetailSiderBar />

## Installation

Include mavenCentral in the build.gradle file in the project root directory:

```groovy
buildscript {
repositories {
mavenCentral()
// other repositories
}
}
```

Depend on guard in the project build.gradle file:

```groovy
implementation 'cn.authing:guard:+'
```

Initialize at application startup:

```java
// context is application or initial activity
// "GEN_AUTH_APP_ID" is obtained from the GenAuth console
GenAuth.init(context, "GEN_AUTH_APP_ID");
```

## Authenticate your user

Register

```java
String email = "test@example.com";
String password = "123456";
AuthClient.registerByEmail(email, password, (code, message, userInfo)->{
if (code == 200) {
// userInfo：user information
}
});
```

Login:

```java
String account = "test@example.com";
String password = "123456";
AuthClient.loginByAccount(account, password, (code, message, userInfo)->{
if (code == 200) {
// userInfo：user information
}
});
```

## Error handling

```java
//Error information is returned in the AuthCallback callback function. You can use the ErrorTextView component to display the error information. Place the ErrorTextView in the appropriate position of your layout page and call the following code in the function callback:
Util.setErrorText(view, message);
```
