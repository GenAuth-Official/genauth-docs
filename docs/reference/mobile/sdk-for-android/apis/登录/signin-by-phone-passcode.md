# 手机号验证码登录

<LastUpdated />

使用手机号 + 验证码登录。

## 请求参数

| 名称             | 类型                                   | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div>                                                                        | <div style="width:200px"></div>示例值</div> |
| ---------------- | -------------------------------------- | -------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| phoneCountryCode | String                                 | 是                                     | -      | 手机号区号                                                                                                 | `+86`                                       |
| phone            | String                                 | 否                                     | -      | 手机号                                                                                                     | `188xxxx8888`                               |
| passCode         | String                                 | 是                                     | -      | 短信验证码<br>你需要先调用 [发送短信](../消息服务/send-sms.md)（场景值为 `CHANNEL_LOGIN`）接口获取验证码。 | `1234`                                      |
| options          | <a href="#AuthOptions">AuthOptions</a> | 否                                     | -      | 可选参数                                                                                                   | `{"passwordEncryptType":"none"}`            |

## 示例代码

```java
AuthClient authClient = new AuthClient();
AuthOptions options = new AuthOptions();
options.setAutoRegister(false);
options.setPasswordEncryptType(PasswordEncryptType.none);
authClient.signInByPhonePassCode("+86","188xxxx8888", "1234", options, (AuthCallback) response -> {
    if (response.getStatusCode() == 200) {
      	JSONObject data = response.getData();
        // data：登录成功返回的数据
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
| data       | JSONObject | 响应数据                                                     |

示例结果：

!!!include(reference/sdk/common/token_response_json.md)!!!

## 数据结构

### <a id="AuthOptions"></a> AuthOptions

| 名称                | 类型                                                   | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | <div style="width:200px">示例值</div> |
| ------------------- | ------------------------------------------------------ | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| scope               | String                                                 | 否                                     | 需要请求的权限，必须包含 openid。如果需要获取手机号和 email 需要包含 phone email；如果需要 refresh_token 需要包含 offline_access。多个 scope 请用空格分隔。id_token 解码后的内容中会包含这些 scope 对应的用户信息相关的字段。<br>- `openid`: 必须包含。<br>- `profile`: 返回 birthdate，family_name，gender，given_name，locale，middle_name，name，nickname，picture，preferred_username，profile，updated_at，website，zoneinfo 字段。<br>- `username`: 返回 username。<br>- `email`: 返回 email，email_verified。<br>- `phone`: 返回 phone_number, phone_number_verified。<br>- `offline_access`: 如果存在此参数，token 接口会返回 refresh_token 字段。<br>- `roles`: 返回用户的角色列表。<br>- `external_id`: 用户在原有系统的用户 ID。<br>- `extended_fields`: 返回用户的扩展字段信息，内容为一个对象，key 为扩展字段名，value 为扩展字段值。<br>- `tenant_id`: 返回用户的租户 ID。<br> | `openid profile`                      |
| clientIp            | String                                                 | 否                                     | 客户端真实 IP 地址。默认情况下，GenAuth 会将请求来源的 IP 识别为用户登录的 IP 地址，如果你在后端服务器中调用此接口，需要将此 IP 设置为用户的真实请求 IP。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `192.168.0.1`                         |
| context             | String                                                 | 否                                     | 额外请求上下文，将会传递到认证前和认证后的 [Pipeline](https://docs.genauth.ai/guides/pipeline/) 的 `context` 对象中。了解[如何在 Pipeline 的 `context` 参数中获取传入的额外 context](https://docs.genauth.ai/guides/pipeline/context-object.html)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `{"source":"utm"}`                    |
| tenantId            | String                                                 | 否                                     | 租户 ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `625783d629f2bd1f5ddddd98c`           |
| customData          | JSONObject                                             | 否                                     | 设置额外的用户自定义数据，你需要先在 GenAuth 控制台[配置自定义数据](https://docs.genauth.ai/guides/users/user-defined-field/)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `{"school":"pku","age":"20"}`         |
| autoRegister        | boolean                                                | 否                                     | 是否开启自动注册。如果设置为 true，当用户不存在的时候，会先自动为其创建一个账号。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                       |
| captchaCode         | String                                                 | 否                                     | Captcha 图形验证码，不区分大小写。当**安全策略**设置为**验证码**且触发**登录失败次数限制**时，下次登录需要填写图形验证码。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `a8nz`                                |
| passwordEncryptType | <a href="#PasswordEncryptType">PasswordEncryptType</a> | 否                                     | 密码加密类型，支持 sm2 和 rsa。默认可以不加密。<br>- `none`: 不对密码进行加密，使用明文进行传输。<br>- `rsa`: 使用 RSA256 算法对密码进行加密，需要使用 GenAuth 服务的 RSA 公钥进行加密，请阅读**介绍**部分了解如何获取 GenAuth 服务的 RSA256 公钥。<br>- `sm2`: 使用 [国密 SM2 算法](https://baike.baidu.com/item/SM2/15081831) 对密码进行加密，需要使用 GenAuth 服务的 SM2 公钥进行加密，请阅读**介绍**部分了解如何获取 GenAuth 服务的 SM2 公钥。<br>                                                                                                                                                                                                                                                                                                                                                                                                                                       | sm2                                   |

### <a id="PasswordEncryptType"></a> PasswordEncryptType

| 名称 | 类型 | 描述                                                                                                                                                                               |
| :--- | :--- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| none | enum | 不对密码进行加密，使用明文进行传输。                                                                                                                                               |
| rsa  | enum | 使用 RSA256 算法对密码进行加密，需要使用 GenAuth 服务的 RSA 公钥进行加密，请阅读**介绍**部分了解如何获取 GenAuth 服务的 RSA256 公钥。                                              |
| sm2  | enum | 使用 [国密 SM2 算法](https://baike.baidu.com/item/SM2/15081831) 对密码进行加密，需要使用 GenAuth 服务的 SM2 公钥进行加密，请阅读**介绍**部分了解如何获取 GenAuth 服务的 SM2 公钥。 |
