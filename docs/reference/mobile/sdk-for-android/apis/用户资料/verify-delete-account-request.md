# 发起注销账号请求

<LastUpdated />

当用户希望注销账号时，需提供相应凭证，当前支持使用**邮箱验证码**、**手机号验证码**、**密码**三种验证方式。

## 请求参数

| 名称                 | 类型                                                               | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div>                                                                                                                                                                                    | <div style="width:200px"></div>示例值</div> |
| -------------------- | ------------------------------------------------------------------ | -------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| verifyMethod         | <a href="#DeleteAccountVerifyMethod">DeleteAccountVerifyMethod</a> | 是                                     | -      | 注销账号的验证手段：<br>- `PHONE_PASSCODE`: 使用手机号验证码方式进行验证。<br>- `EMAIL_PASSCODE`: 使用邮箱验证码方式进行验证。<br>- `PASSWORD`: 如果用户既没有绑定手机号又没有绑定邮箱，可以使用密码作为验证手段。<br> | `PHONE_PASSCODE`                            |
| deleteAccountPayload | <a href="#DeleteAccountPayload">DeleteAccountPayload</a>           | 是                                     | -      | 使用手机号验证码验证的数据/使用邮箱验证码验证的数据/使用密码验证的数据                                                                                                                                                 |                                             |

## 示例代码

```java
// 使用手机号验证码验证的方式
DeleteAccountPayload deleteAccountPayload = new DeleteAccountPayload();
deleteAccountPayload.setPhoneCountryCode("+86");
deleteAccountPayload.setPhoneNumber("188xxxx8888");
deleteAccountPayload.setPassCode("1234");
authClient.deleteAccountRequest(DeleteAccountVerifyMethod.PHONE_PASSCODE, deleteAccountPayload, new AuthCallback() {
    @Override
    public void call(AuthResponse response) {
        if (response.getStatusCode() == 200) {
              // 请求成功
        }
    }
});

// 使用邮箱验证码验证的方式
DeleteAccountPayload deleteAccountPayload = new DeleteAccountPayload();
deleteAccountPayload.setEmail("test@example.com");
deleteAccountPayload.setPassCode("1234")
authClient.deleteAccountRequest(DeleteAccountVerifyMethod.EMAIL_PASSCODE, deleteAccountPayload, new AuthCallback() {
    @Override
    public void call(AuthResponse response) {
        if (response.getStatusCode() == 200) {
              // 请求成功
        }
    }
});

// 使用密码验证的方式
DeleteAccountPayload deleteAccountPayload = new DeleteAccountPayload();
deleteAccountPayload.setPassword("password");
deleteAccountPayload.setPasswordEncryptType(PasswordEncryptType.none);
authClient.deleteAccountRequest(DeleteAccountVerifyMethod.PASSWORD, deleteAccountPayload, new AuthCallback() {
    @Override
    public void call(AuthResponse response) {
        if (response.getStatusCode() == 200) {
              // 请求成功
        }
    }
});
```

## 请求响应

类型： `AuthResponse`

| 名称       | 类型       | 描述                                                         |
| ---------- | ---------- | ------------------------------------------------------------ |
| statusCode | int        | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message    | String     | 描述信息                                                     |
| apiCode    | int        | 细分错误码，可通过此错误码得到具体的错误类型。               |
| requestId  | String     | 请求 ID，当请求失败时会返回。                                |
| data       | JSONObject | 响应数据<br/>参考：<a href="#data">data</a>。                |

示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "deleteAccountToken": "xxxx",
    "tokenExpiresIn": 60
  }
}
```

## 数据结构

### <a id="ResetPasswordVerifyMethod"></a> ResetPasswordVerifyMethod

| 名称           | 类型 | 描述                                                               |
| :------------- | :--- | ------------------------------------------------------------------ |
| EMAIL_PASSCODE | enum | 使用邮箱验证码方式进行验证。                                       |
| PHONE_PASSCODE | enum | 使用手机号验证码方式进行验证。                                     |
| PASSWORD       | enum | 如果用户既没有绑定手机号又没有绑定邮箱，可以使用密码作为验证手段。 |

### <a id="DeleteAccountByPhonePassCodeDto"></a> DeleteAccountByPhonePassCodeDto

| 名称                | 类型                                                   | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                                                                                                                                                                                                                                                                                                                                                                                                                    | <div style="width:200px">示例值</div> |
| ------------------- | ------------------------------------------------------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- |
| phoneNumber         | string                                                 | 是                                     | 此账号绑定的手机号，不带区号。如果是国外手机号，请在 phoneCountryCode 参数中指定区号。                                                                                                                                                                                                                                                                                                                                                                 | `188xxxx8888`                         |
| passCode            | string                                                 | 是                                     | 短信验证码，一个短信验证码只能使用一次，有效时间为一分钟。你需要通过**发送短信**接口获取。                                                                                                                                                                                                                                                                                                                                                             | `1234`                                |
| phoneCountryCode    | string                                                 | 否                                     | 手机区号                                                                                                                                                                                                                                                                                                                                                                                                                                               | `+86`                                 |
| email               | string                                                 | 是                                     | 此账号绑定的邮箱，不区分大小写。                                                                                                                                                                                                                                                                                                                                                                                                                       | `test@example.com`                    |
| password            | string                                                 | 是                                     | 用户密码                                                                                                                                                                                                                                                                                                                                                                                                                                               | `password`                            |
| passwordEncryptType | <a href="#PasswordEncryptType">PasswordEncryptType</a> | 否                                     | 密码加密类型，支持 sm2 和 rsa。默认可以不加密。<br>- `none`: 不对密码进行加密，使用明文进行传输。<br>- `rsa`: 使用 RSA256 算法对密码进行加密，需要使用 GenAuth 服务的 RSA 公钥进行加密，请阅读**介绍**部分了解如何获取 GenAuth 服务的 RSA256 公钥。<br>- `sm2`: 使用 [国密 SM2 算法](https://baike.baidu.com/item/SM2/15081831) 对密码进行加密，需要使用 GenAuth 服务的 SM2 公钥进行加密，请阅读**介绍**部分了解如何获取 GenAuth 服务的 SM2 公钥。<br> | `sm2`                                 |

### <a id="PasswordEncryptType"></a> PasswordEncryptType

| 名称 | 类型 | 描述                                                                                                                                                                               |
| :--- | :--- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| none | enum | 不对密码进行加密，使用明文进行传输。                                                                                                                                               |
| rsa  | enum | 使用 RSA256 算法对密码进行加密，需要使用 GenAuth 服务的 RSA 公钥进行加密，请阅读**介绍**部分了解如何获取 GenAuth 服务的 RSA256 公钥。                                              |
| sm2  | enum | 使用 [国密 SM2 算法](https://baike.baidu.com/item/SM2/15081831) 对密码进行加密，需要使用 GenAuth 服务的 SM2 公钥进行加密，请阅读**介绍**部分了解如何获取 GenAuth 服务的 SM2 公钥。 |

### <a id="data"></a> data

| 名称               | 类型   | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                                        | <div style="width:200px">示例值</div> |
| ------------------ | ------ | -------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------- |
| deleteAccountToken | string | 是                                     | 用于注销账号的临时 Token，你需要调用**注销账号**接口执行实际注销账号操作。 | `xxxx`                                |
| tokenExpiresIn     | number | 是                                     | Token 有效时间，默认为 60 秒。                                             | `60`                                  |
