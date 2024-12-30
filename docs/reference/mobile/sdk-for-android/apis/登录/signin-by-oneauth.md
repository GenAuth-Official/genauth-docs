# 使用手机号一键登录

<LastUpdated />

此端点为移动端社会化登录接口，使用第三方移动社会化登录返回的临时凭证登录，并换取用户的 `id_token` 和 `access_token`。请先阅读相应社会化登录的接入流程。

注意事项：取决于你在 GenAuth 创建应用时选择的**应用类型**和应用配置的**换取 token 身份验证方式**，在调用此接口时需要对客户端的身份进行不同形式的验证。

<details>
<summary>点击展开详情</summary>
<br>

你可以在 [GenAuth 控制台](https://console.genauth.ai) 的**应用** - **自建应用** - **应用详情** - **应用配置** - **其他设置** - **授权配置**
中找到**换取 token 身份验证方式** 配置项：

> 单页 Web 应用和客户端应用隐藏，默认为 `none`，不允许修改；后端应用和标准 Web 应用可以修改此配置项。

![](https://files.authing.co/api-explorer/tokenAuthMethod.jpg)

#### 换取 token 身份验证方式为 none 时

调用此接口不需要进行额外操作。

#### 换取 token 身份验证方式为 client_secret_post 时

调用此接口时必须在 body 中传递 `client_id` 和 `client_secret` 参数，作为验证客户端身份的条件。其中 `client_id` 为应用 ID、`client_secret` 为应用密钥。

#### 换取 token 身份验证方式为 client_secret_basic 时

调用此接口时必须在 HTTP 请求头中携带 `authorization` 请求头，作为验证客户端身份的条件。`authorization` 请求头的格式如下（其中 `client_id` 为应用 ID、`client_secret` 为应用密钥。）：

```
Basic base64(<client_id>:<client_secret>)
```

结果示例：

```
Basic NjA2M2ZiMmYzY3h4eHg2ZGY1NWYzOWViOjJmZTdjODdhODFmODY3eHh4eDAzMjRkZjEyZGFlZGM3
```

JS 代码示例：

```js
"Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64");
```

</details>

## 请求参数

| 名称        | 类型                                   | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ----------- | -------------------------------------- | -------------------------------------- | ------ | ----------------------------------- | ------------------------------------------- |
| token       | String                                 | 是                                     | -      | 网易易盾 token                      | `1660291866076`                             |
| accessToken | String                                 | 是                                     | -      | 网易易盾运营商授权码                | `1660291866076`                             |
| options     | <a href="#AuthOptions">AuthOptions</a> | 否                                     | -      | 可选参数                            | `{"passwordEncryptType":"none"}`            |

## 示例代码

```java
AuthClient authClient = new AuthClient();
AuthOptions options = new AuthOptions();
options.setAutoRegister(false);
options.setPasswordEncryptType(PasswordEncryptType.none);
authClient.signInByOneAuth("1660291866076", "1660291866076", (AuthCallback) response -> {
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

| 名称       | 类型       | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | <div style="width:200px">示例值</div> |
| ---------- | ---------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| scope      | String     | 否                                     | 需要请求的权限，必须包含 openid。如果需要获取手机号和 email 需要包含 phone email；如果需要 refresh_token 需要包含 offline_access。多个 scope 请用空格分隔。id_token 解码后的内容中会包含这些 scope 对应的用户信息相关的字段。<br>- `openid`: 必须包含。<br>- `profile`: 返回 birthdate，family_name，gender，given_name，locale，middle_name，name，nickname，picture，preferred_username，profile，updated_at，website，zoneinfo 字段。<br>- `username`: 返回 username。<br>- `email`: 返回 email，email_verified。<br>- `phone`: 返回 phone_number, phone_number_verified。<br>- `offline_access`: 如果存在此参数，token 接口会返回 refresh_token 字段。<br>- `roles`: 返回用户的角色列表。<br>- `external_id`: 用户在原有系统的用户 ID。<br>- `extended_fields`: 返回用户的扩展字段信息，内容为一个对象，key 为扩展字段名，value 为扩展字段值。<br>- `tenant_id`: 返回用户的租户 ID。<br> | `openid profile`                      |
| context    | String     | 否                                     | 额外请求上下文，将会传递到认证前和认证后的 [Pipeline](https://docs.genauth.ai/guides/pipeline/) 的 `context` 对象中。了解[如何在 Pipeline 的 `context` 参数中获取传入的额外 context](https://docs.genauth.ai/guides/pipeline/context-object.html)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `{"source":"utm"}`                    |
| tenantId   | String     | 否                                     | 租户 ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `625783d629f2bd1f5ddddd98c`           |
| customData | JSONObject | 否                                     | 设置额外的用户自定义数据，你需要先在 GenAuth 控制台[配置自定义数据](https://docs.genauth.ai/guides/users/user-defined-field/)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `{"school":"pku","age":"20"}`         |
