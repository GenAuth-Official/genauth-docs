# 用户资料

<LastUpdated/>

## 获取用户资料

```dart
static Future<AuthResult> getCurrentUser([bool? customData, bool? identities]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| customData | 是否获取自定义数据 |
| identities | 是否获取 identities |
| departmentIds | 是否获取部门 ID 列表 |

**示例代码**

```dart
AuthResult result = await AuthClient.getCurrentUser();
```

## 修改用户资料

```dart
static Future<AuthResult> updateProfile(Map object) async
```

**请求参数**

`object` 字典类型用户资料
 
**示例代码**

```dart
var object = {'name': 'test'};
AuthResult result = await AuthClient.updateProfile(object);
```

## 绑定邮箱

```dart
static Future<AuthResult> bindEmail(String email, String passCode) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| email | 邮箱 |
| passCode | 验证码 |
 
**示例代码**

```dart
AuthResult result = await AuthClient.bindEmail("test@example.com", "code");
```


## 解绑邮箱

```dart
static Future<AuthResult> unbindEmail() async
```
 
**示例代码**

```dart
AuthResult result = await AuthClient.unbindEmail();
```

## 修改邮箱

```dart
static Future<AuthResult> updateEmail(String newEmail, String newEmailPassCode,
      [String? oldEmail, String? oldEmailPassCode]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| newEmail | 新邮箱 |
| newEmailPassCode | 新邮箱验证码 |
| oldEmail | 旧邮箱 |
| oldEmailPassCode | 旧邮箱验证码 |
 
**示例代码**

```dart
AuthClient().updateEmail(newEmail: "test@example.com", newEmailPassCode: "passCode", oldEmail: "test@example.com", oldEmailPassCode: "passCode") { code, message, userInfo in
    if (res.statusCode == 200) {
        // res.data
    }
}

AuthResult result = await AuthClient.updateEmail("test@example.com", "passCode", "oldEmail", "oldEmailPassCode");
```

## 绑定手机号

```dart
static Future<AuthResult> bindPhone(String phoneNumber, String passCode, [String? phoneCountryCode]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| phoneNumber | 手机号 |
| passCode | 短信验证码 |
 
**示例代码**

```dart
AuthResult result = await AuthClient.bindPhone("188xxxx8888", "passCode");
```


## 解绑手机号

```dart
static Future<AuthResult> unbindPhone() async
```
 
**示例代码**

```dart
AuthResult result = await AuthClient.unbindPhone();
```

## 修改手机号

```dart
static Future<AuthResult> updatePhone(String newPhoneNumber, String newPhonePassCode, [String? oldPhoneNumber, String? oldPhonePassCode, String? newPhoneCountryCode, String? oldPhoneCountryCode]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| newPhoneNumber | 新手机号 |
| newPhonePassCode | 新手机短信验证码 |
| oldPhoneNumber | 旧手机号 |
| oldPhonePassCode | 旧手机短信验证码 |
 
**示例代码**

```dart
AuthResult result = await AuthClient.updatePhone("188xxxx8888", "passCode", "oldPhoneNumber", "oldPhonePassCode");
```

## 修改密码

```dart
static Future<AuthResult> updatePassword(String newPassword, [String? oldPassword, String? passwordEncryptType]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| newPassword | 新密码 |
| oldPassword | 原始密码，如果用户当前设置了密码，此参数必填。 |
| [passwordEncryptType](./enum.md#-PasswordEncryptType) | [密码加密类型](./enum.md#-PasswordEncryptType) |

**示例代码**

```dart
AuthResult result = await AuthClient.updatePassword("password");
```

## 手机号验证码修改密码

```dart
static Future<AuthResult> resetPasswordByPhone(String phoneNumber, String passCode, String password, [String? phoneCountryCode, String? passwordEncryptType]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| phoneNumber | 手机号 |
| passCode | 手机短信验证码 |
| password | 新密码 |
| [passwordEncryptType](./enum.md#-PasswordEncryptType) | [密码加密类型](./enum.md#-PasswordEncryptType) |

**示例代码**

```dart
AuthResult result = await AuthClient.resetPasswordByPhone("188xxxx8888", "code", "password");
```

## 邮箱验证码修改密码

```dart
static Future<AuthResult> resetPasswordByEmailCode(String email, String passCode, String password, [String? passwordEncryptType]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| email | 邮箱 |
| passCode | 手机短信验证码 |
| password | 新密码 |
| [passwordEncryptType](./enum.md#-PasswordEncryptType) | [密码加密类型](./enum.md#-PasswordEncryptType) |

**示例代码**

```dart
AuthResult result = await AuthClient.resetPasswordByEmailCode("test@example.com", "code", "password");
```

## 手机号验证码删除账号

```dart
static Future<AuthResult> deleteAccountByPhone(String phoneNumber, String passCode, [String? phoneCountryCode]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| phoneNumber | 邮手机号箱 |
| passCode | 手机短信验证码 |

**示例代码**

```dart
AuthResult result = await AuthClient.deleteAccountByPhone("188xxxx8888", "code");
```

## 邮箱验证码删除账号

```dart
static Future<AuthResult> deleteAccountByEmail(String email, String passCode) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| email | 邮箱 |
| passCode | 验证码 |

**示例代码**

```dart
AuthResult result = await AuthClient.deleteAccountByEmail("test@example.com", "code");
```


## 密码删除账号

```dart
static Future<AuthResult> deleteAccountByPassword(String password, [String? passwordEncryptType]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| password | 密码 |
| [passwordEncryptType](./enum.md#-PasswordEncryptType) | [密码加密类型](./enum.md#-PasswordEncryptType) |


**示例代码**

```dart
AuthResult result = await AuthClient.deleteAccountByPassword("password");
```


## 退出登录

```dart
static Future<AuthResult> logout() async
```

**示例代码**

```dart
AuthResult result = await AuthClient.logout();
```