# iOS

This guide will start with the installation of the GenAuth iOS SDK and step by step guide you on how to quickly add user authentication capabilities to your existing or newly developed applications.

<AppDetailSiderBar />

## Installation

### Code address

| Item              | Description                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| Supported version | iOS 11.0 +                                                                   |
| Warehouse address | [https://github.com/Authing/guard-ios](https://github.com/Authing/guard-ios) |

### Add dependency

1. Enter: https://github.com/Authing/guard-ios in the swift package search bar

2. Select Up to Next Major Version 1.0.0 for dependency rule

3. Check Guard and click Add Package

### Initialization

```swift
//When App starts, initialize GenAuth iOS SDK
import Guard
class AppDelegate: UIResponder, UIApplicationDelegate {
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
GenAuth.start(<#Authing_APPID#>);
}
}
```

## Authenticate your user

### Register

```swift
//Use OIDC email to register an account. Emails are case-insensitive and unique in the user pool.
OIDCClient().registerByEmail(email: <#Email#>, password: <#Plain text password#>) { code, message, userInfo in
if (code == 200) {
// userInfo: User information
}
}
```

### Login

```swift
OIDCClient().loginByAccount(account: <#Account#>, password: <#Password#>) { code, message, userInfo in
print("\(userInfo?.accessToken ?? "")")
print("\(userInfo?.idToken ?? "")")
print("\(userInfo?.refreshToken ?? "")")
}
```

## Error handling

```swift
OIDCClient().loginByAccount(account: "account", password: "password") { code, message, userInfo in
if (code == 200) {
//When code is not 200, the error message will be returned via message
} else {
// error
print(code)
print(message)
}
}
```
