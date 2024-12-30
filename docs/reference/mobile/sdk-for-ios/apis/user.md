# 用户资料

<LastUpdated/>

## 获取用户资料

```swift
func getProfile(customData: Bool? = false, identities: Bool? = false, departmentIds: Bool? = false, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| customData | 是否获取自定义数据 |
| identities | 是否获取 identities |
| departmentIds | 是否获取部门 ID 列表 |

**示例代码**

```swift
AuthClient().getProfile() { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

## 修改用户资料

```swift
func updateProfile(object: NSDictionary, completion: @escaping(Response) -> Void)
```

**请求参数**

`object` 字典类型用户资料
 
**示例代码**

```swift
AuthClient().updateProfile() { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

## 绑定邮箱

```swift
func bindEmail(email: String, passCode: String, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| email | 邮箱 |
| passCode | 验证码 |
 
**示例代码**

```swift
AuthClient().bindEmail(email: "test@example.com", passCode: "passCode") { code, message, userInfo in
    if (res.statusCode == 200) {
        // res.data
    }
}
```


## 解绑邮箱

```swift
func unbindEmail(completion: @escaping(Response) -> Void)
```
 
**示例代码**

```swift
AuthClient().unbindEmail() { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

## 修改邮箱

```swift
func updateEmail(newEmail: String, newEmailPassCode: String, oldEmail: String? = nil, oldEmailPassCode: String? = nil, completion: @escaping(Response) -> Void)
```

**请求参数**
  
| 名称  | 说明 |
| :---- | :---- |
| newEmail | 新邮箱 |
| newEmailPassCode | 新邮箱验证码 |
| oldEmail | 旧邮箱 |
| oldEmailPassCode | 旧邮箱验证码 |

**示例代码**

```swift
AuthClient().updateEmail(newEmail: "test@example.com", newEmailPassCode: "passCode", oldEmail: "test@example.com", oldEmailPassCode: "passCode") { code, message, userInfo in
    if (res.statusCode == 200) {
        // res.data
    }
}
```

## 绑定手机号

```swift
func bindPhone(phoneCountryCode: String? = nil, phoneNumber: String, passCode: String, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| phoneNumber | 手机号 |
| passCode | 短信验证码 |

 
**示例代码**

```swift
AuthClient().bindPhone(phoneNumber: "188xxxx8888", passCode: "passCode") { code, message, userInfo in
    if (res.statusCode == 200) {
        // res.data
    }
}
```


## 解绑手机号

```swift
func unbindPhone(completion: @escaping(Response) -> Void)
```
 
**示例代码**

```swift
AuthClient().unbindPhone() { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

## 修改手机号

```swift
func updatePhone(newPhoneCountryCode: String? = nil, newPhoneNumber: String, newPhonePassCode: String, oldPhoneCountryCode: String? = nil, oldPhoneNumber: String? = nil, oldPhonePassCode: String? = nil, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| newPhoneNumber | 新手机号 |
| newPhonePassCode | 新手机短信验证码 |
| oldPhoneNumber | 旧手机号 |
| oldPhonePassCode | 旧手机短信验证码 |
 
**示例代码**

```swift
AuthClient().updatePhone(newPhoneNumber: "188xxxx8888", newPhonePassCode: "passCode", oldPhoneNumber: "188xxxx8888", oldPhonePassCode: "passCode") { code, message, userInfo in
    if (res.statusCode == 200) {
        // res.data
    }
}
```

## 修改密码

```swift
func updatePassword(newPassword: String, oldPassword: String? = nil, passwordEncryptType: EncryptType? = .NONE, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| newPassword | 新密码 |
| oldPassword | 原始密码，如果用户当前设置了密码，此参数必填。 |
| [passwordEncryptType](./enum.md#-EncryptType) | [密码加密类型](./enum.md#-EncryptType) |

**示例代码**

```swift
AuthClient().updatePassword(newPassword: "password") { code, message, userInfo in
    if (res.statusCode == 200) {
        // res.data
    }
}
```

## 手机号验证码修改密码

```swift
func resetPasswordByPhone(phoneCountryCode: String? = nil, phoneNumber: String, passCode: String, password: String, _ passwordEncryptType: EncryptType? = nil, completion: @escaping(Response)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| phoneNumber | 手机号 |
| passCode | 手机短信验证码 |
| password | 新密码 |
| [passwordEncryptType](./enum.md#-EncryptType) | [密码加密类型](./enum.md#-EncryptType) |

**示例代码**

```swift
AuthClient().resetPasswordByPhone(phoneNumber: "188xxxx8888", passCode: "code", password: "password") { code, message, userInfo in
    if (res.statusCode == 200) {
        // res.data
    }
}
```

## 邮箱验证码修改密码

```swift
func resetPasswordByEmail(email: String, passCode: String, password: String, _ passwordEncryptType: EncryptType? = nil, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| email | 邮箱 |
| passCode | 手机短信验证码 |
| password | 新密码 |
| [passwordEncryptType](./enum.md#-EncryptType) | [密码加密类型](./enum.md#-EncryptType) |

**示例代码**

```swift
AuthClient().resetPasswordByEmail(email: "test@example.com", passCode: "code", password: "password") { code, message, userInfo in
    if (res.statusCode == 200) {
        // res.data
    }
}
```

## 手机号验证码删除账号

```swift
func deleteAccountByPhone(phoneCountryCode: String? = nil, phoneNumber: String, passCode: String, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| phoneNumber | 邮手机号箱 |
| passCode | 手机短信验证码 |

**示例代码**

```swift
AuthClient().deleteAccountByPhone(phoneNumber: "188xxxx8888", passCode: "code") { code, message, userInfo in
    if (res.statusCode == 200) {
        // res.data
    }
}
```

## 邮箱验证码删除账号

```swift
func deleteAccountByEmail(email: String, passCode: String, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| email | 邮箱 |
| passCode | 验证码 |

**示例代码**

```swift
AuthClient().deleteAccountByEmail(email: "test@example.com", passCode: "code") { code, message, userInfo in
    if (res.statusCode == 200) {
        // res.data
    }
}
```


## 密码删除账号

```swift
func deleteAccountByPassword(password: String, _ passwordEncryptType: EncryptType?, completion: @escaping(Response) -> Void)
```

**请求参数**
 
| 名称  | 说明 |
| :---- | :---- |
| password | 密码 |
| [passwordEncryptType](./enum.md#-EncryptType) | [密码加密类型](./enum.md#-EncryptType) |

**示例代码**

```swift
AuthClient().deleteAccountByPassword(password: "password") { code, message, userInfo in
    if (res.statusCode == 200) {
        // res.data
    }
}
```


## 退出登录

```swift
func logout(completion: @escaping(Response) -> Void)
```

**示例代码**

```swift
AuthClient().logout() { code, message, userInfo in
    if (res.statusCode == 200) {
        // res.data
    }
}
```