# Integrate {{$localeConfig.brandName}} in mobile (iOS, Android)

<LastUpdated/>

{{$localeConfig.brandName}} provides [Android SDK](/reference/sdk-for-android/) and [iOS SDK](/reference/sdk-for-ios/) to help developers quickly integrate {{$localeConfig.brandName}} in mobile apps.

The following takes the integration method of Android apps as an example.

## Installation

1. Download the jar package and import the jar package into lib

Jar package download address:

- [https://download.genauth.ai/packages/jar/commons-codec-1.15-rep.jar](https://download.genauth.ai/packages/jar/commons-codec-1.15-rep.jar)
- [https://download.genauth.ai/packages/jar/core.jar](https://download.genauth.ai/packages/jar/core.jar)

Import the Jar package into lib, as shown below:

![](https://cdn.genauth.ai/blog/20201218134537.png)

2. Configure `build.gradle`

```
implementation "com.google.code.gson:gson:2.8.6"
implementation "com.squareup.okhttp3:okhttp:4.8.0"
implementation files('libs/core.jar')
implementation files('libs/commons-codec-1.15-rep.jar')
```

3. Install {{$localeConfig.brandName}} Java/Kotlin SDK

For detailed installation instructions, please see: [{{$localeConfig.brandName}} Java/Kotlin SDK](/reference/sdk-for-java/README.md) .

## Example

### Java

- Initialize `AuthenticationClient` with the user pool ID.
- Call `AuthenticationClient` methods.

```java
// Initialize with AppId and appHost
AuthenticationClient authentication = new AuthenticationClient(APP_ID, APP_HOST);

client.registerByEmail(new RegisterByEmailInput("xxx@qq.com", "123456")).enqueue(new cn.authing.core.http.Callback<cn.authing.core.types.User>() {
    @Override
    public void onSuccess(cn.authing.core.types.User user) {

    }

    @Override
    public void onFailure(@Nullable GraphQLResponse.ErrorInfo errorInfo) {

    }
});
```

### Kotlin

- Initialize `AuthenticationClient` with user pool ID.
- Call `AuthenticationClient` method.

```kotlin
val authenticationClient = AuthenticationClient("YOUR_USERPOOL_ID")

authenticationClient.registerByEmail(
    RegisterByEmailInput(
        "xxx@.qq.com",
        "123456"
    )
).enqueue(object : cn.authing.core.http.Callback<User> {
    override fun onFailure(error: ErrorInfo?) {

    }

    override fun onSuccess(result: User) {

    }
})
```

## User registration and login

{{$localeConfig.brandName}} Java SDK supports multiple registration and login methods such as mobile phone number verification code, email, and user name. Take mobile phone number verification code login as an example:

1. Send verification code

```java
String phone = "phone number";
authenticationClient.sendSmsCode(phone).execute();
```

2. Login using verification code

```java
String phone = "phone number";
String code = "1234";
User user = authenticationClient.loginByPhoneCode(new LoginByPhoneCodeInput(phone, code)).execute();
```

For detailed documentation, please see: [User Registration and Login API](/reference/sdk-for-java/authentication/README.md) .

## Integrate WeChat login

You can use the `loginByWechat` method of `AuthenticationClient`. The four required parameters are all parameters returned by WeChat:

| Field name | Required | Type   | Description                           |
| ---------- | -------- | ------ | ------------------------------------- |
| code       | REQUIRED | string | The code returned by WeChat to APP    |
| country    | OPTIONAL | string | The country returned by WeChat to APP |
| lang       | OPTIONAL | string | The lang returned by WeChat to APP    |
| state      | OPTIONAL | string | The state returned by WeChat to APP   |

```kotlin
val authenticationClient = AuthenticationClient("YOUR_USERPOOL_ID")

val code = "#returned code from wechat#";

authenticationClient.loginByWechat(code).enqueue(object: cn.authing.core.http.Callback<User> {
    override fun onFailure(error: ErrorInfo?) {

    }

    override fun onSuccess(result: User) {
        val user = result
    }
})
```

## Get help

Please visit the [GenAuth forum](https://forum.genauth.ai/).
