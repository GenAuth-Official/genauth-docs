# Flutter

This guide will start with the installation of the GenAuth Flutter SDK and step by step guide you on how to quickly add user authentication capabilities to your existing or newly developed applications.

<AppDetailSiderBar />

## Installation

### Code address

| Item                | Description                                                                  |
| ------------------- | ---------------------------------------------------------------------------- |
| Supported platforms | Android, iOS                                                                 |
| Warehouse address   | [https://pub.dev/packages/authing_sdk](https://pub.dev/packages/authing_sdk) |

### Add dependencies

```yaml
#In the project's pubspec.yaml, add the following dependencies:
authing_sdk: ^1.0.0
```

### Initialization

```dart
import 'package:authing_sdk/authing.dart';

GenAuth.init(String userPoolId, String appId)
```

## Authenticate your users

### Register

```dart
//Use OIDC Email registration account, email address is case-insensitive and unique in the user pool.
AuthResult result = await OIDCClient.registerByEmail("email", "password");
User user = result.user; // get user info
```

### Login

```dart
//Login via OIDC account and password
AuthResult result = await OIDCClient.loginByAccount("account", "password");
User user = result.user; // user info
```

## Error handling

```dart
AuthResult result = await OIDCClient.getNewAccessTokenByRefreshToken("refreshToken");
if (result.code == 200) {
//When code is not 200, the error message will be returned via result.message
} else {
//error
}
}
```
