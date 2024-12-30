# 发起忘记密码请求

<LastUpdated />

当用户忘记密码时，可以通过此端点找回密码。用户需要使用相关验证手段进行验证，目前支持**邮箱验证码**和**手机号验证码**两种验证手段。

## 请求参数

| 名称                 | 类型                                                               | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div>                                                                                        | <div style="width:200px"></div>示例值</div> |
| -------------------- | ------------------------------------------------------------------ | -------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| verifyMethod         | <a href="#ResetPasswordVerifyMethod">ResetPasswordVerifyMethod</a> | 是                                     | -      | 忘记密码请求使用的验证手段：<br>- `EMAIL_PASSCODE`: 通过邮箱验证码进行验证。<br>- `PHONE_PASSCODE`: 通过手机号证码进行验证 | `EMAIL_PASSCODE`                            |
| resetPasswordPayload | <a href="#ResetPasswordPayload">ResetPasswordPayload</a>           | 是                                     | -      | 使用手机号验证码验证的数据、使用邮箱验证码验证的数据                                                                       |                                             |

## 示例代码

```java
//使用手机号验证码方式
AuthClient authClient = new AuthClient();
ResetPasswordPayload resetPasswordPayload = new ResetPasswordPayload();
resetPasswordPayload.setPhoneCountryCode("+86");
resetPasswordPayload.setPhoneNumber("188xxxx8888");
resetPasswordPayload.setPassCode("1234");
authClient.resetPasswordRequest(ResetPasswordVerifyMethod.PHONE_PASSCODE, resetPasswordPayload, new AuthCallback() {
    @Override
    public void call(AuthResponse response) {
				if (response.getStatusCode() == 200) {
        		// 请求成功
    		}
    }
});

//使用邮箱验证码方式
AuthClient authClient = new AuthClient();
ResetPasswordPayload resetPasswordPayload = new ResetPasswordPayload();
resetPasswordPayload.setEmail("test@example.com");
resetPasswordPayload.setPassCode("1234");
authClient.resetPasswordRequest(ResetPasswordVerifyMethod.EMAIL_PASSCODE, resetPasswordPayload, new AuthCallback() {
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
  "apiCode": 0,
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "passwordResetToken": "string",
    "tokenExpiresIn": 0
  }
}
```

## 数据结构

### <a id="ResetPasswordVerifyMethod"></a> ResetPasswordVerifyMethod

| 名称           | 类型 | 描述                     |
| :------------- | :--- | ------------------------ |
| EMAIL_PASSCODE | enum | 通过邮箱验证码进行验证   |
| PHONE_PASSCODE | enum | 通过手机号验证码进行验证 |

### <a id="ResetPasswordPayload"></a> ResetPasswordPayload

| 名称             | 类型   | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                                                                                                                                                                           | <div style="width:200px">示例值</div> |
| ---------------- | ------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| phoneNumber      | string | 是                                     | 此账号绑定的手机号，不带区号。如果是国外手机号，请在 `phoneCountryCode` 参数中指定区号。                                                                                                                      | `188xxxx8888`                         |
| passCode         | string | 是                                     | 验证码<br>使用电话号码时是短信验证码<br/>使用邮箱时是邮箱验证码                                                                                                                                               | `1234`                                |
| phoneCountryCode | string | 否                                     | 手机区号，中国大陆手机号可不填。GenAuth 短信服务暂不内置支持国际手机号，你需要在 GenAuth 控制台配置对应的国际短信服务。完整的手机区号列表可参阅 https://en.wikipedia.org/wiki/List_of_country_calling_codes。 | `+86`                                 |
| email            | string | 是                                     | 此账号绑定的邮箱，不区分大小写。                                                                                                                                                                              | `test@example.com`                    |

### <a id="data"></a> data

| 名称               | 类型   | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ------------------ | ------ | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| passwordResetToken | string | 是                                     | 用于重置密码 token                  |                                       |
| tokenExpiresIn     | number | 是                                     | 过期时间，单位为秒                  |                                       |
