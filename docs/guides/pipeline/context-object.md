---
meta:
  - name: description
    content: context object
---

# context object

<LastUpdated/>

The context object stores the context of the current authentication process, including authentication methods, identity provider, and request IP, address, etc.

## Attributes

| Attribute name    | Type                                | Description                                                                                                                                                                                                                                                               |
| :---------------- | :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| protocol          | string                              | Authentication protocol. See below for details.                                                                                                                                                                                                                           |
| connection        | string                              | Identity provider. See below for details.                                                                                                                                                                                                                                 |     |
| userPoolId        | string                              | User pool ID                                                                                                                                                                                                                                                              |
| userPoolName      | string                              | User pool name                                                                                                                                                                                                                                                            |
| userPoolMetadata  | object                              | User pool configuration                                                                                                                                                                                                                                                   |
| appId             | string                              | Current user ID                                                                                                                                                                                                                                                           |
| appName           | string                              | Current application name                                                                                                                                                                                                                                                  |
| appMetadata       | object                              | Current application configuration information                                                                                                                                                                                                                             |
| request           | object                              | Detailed information of the current request, including: <br> `ip`: Client IP <br> `geo`: Client geographic location resolved by IP <br> `body`: Request body <br> `query`: Query string object, you can get the corresponding query parameter through `request.query.xxx` |
| accessTokenTarget | Enum: `programmaticAccount`, `user` | Only has a value in the pipeline before issuing accessToken, indicating whether the current accessToken is issued for programmatic access account or user                                                                                                                 |

## protocol

Authentication protocol.

| Possible values ​​ | Description                                                                                                                                           |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| password           | Authentication method based on account and password                                                                                                   |
| sms                | Authentication method based on SMS verification code                                                                                                  |
| social             | Social login authentication by default, this value is used when logging in using the social login method integrated with {{$localeConfig.brandName}}. |
| ldap               | Use LDAP for authentication. For information about how to connect to LDAP, see [Configure LDAP Service](../../connections/ldap/).                     |
| saml               | Use SAML for authentication. For information about how to connect to SAML, see [Connect to SAML](../../connections/saml/).                            |
| oidc               | Use OIDC protocol for authentication. For information about how to connect to OIDC, see [Use OIDC Authorization](../../connections/oidc/).            |

## connection

Identity provider.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Possible values</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">ldap	</td>
      <td style="text-align:left">Login using the LDAP protocol. A {{$localeConfig.brandName}} LDAP service corresponds to a {{$localeConfig.brandName}} user directory or a third-party user directory. For details, see
        <a
        href="../../connections/ldap/">Configuring LDAP Services</a> and <a href="../../guides/users/ldap-user-directory"> Using an LDAP User Directory with {{$localeConfig.brandName}}</a>. </td>
    </tr>
    <tr>
      <td style="text-align:left">saml</td>
      <td style="text-align:left">Use SAML protocol to log in. For how to connect to SAML, see <a href="../../connections/saml/">Connect to SAML</a>. </td>
    </tr>
    <tr>
      <td style="text-align:left">oidc</td>
      <td style="text-align:left">Use OIDC protocol authentication. For how to connect to OIDC, see <a href="../../connections/oidc/">Use OIDC authorization</a>. </td>
    </tr>
    <tr>
      <td style="text-align:left">github</td>
      <td style="text-align:left">Log in with GitHub. For details, see
        <a
        href="../../connections/github/">Log in to GitHub</a>. </td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p></p>
        <p>wechat</p>
      </td>
      <td style="text-align:left">Log in by scanning the QR code on PC WeChat. For details, see
        <a
        href="../../connections/wechat-pc/">Log in by scanning the QR code on PC WeChat</a>. </td>
    </tr>
    <tr>
      <td style="text-align:left">wechat:miniprogram</td>
      <td style="text-align:left">Log in using WeChat Mini Program. For details, see
        <a
        href="../../connections/wechat-miniprogram-qrconnect/">Log in by scanning the QR code on PC WeChat</a>. </td>
    </tr>
    <tr>
      <td style="text-align:left">wechatwork</td>
      <td style="text-align:left">Log in with WeChat for Business. </td>
    </tr>
    <tr>
      <td style="text-align:left">qq</td>
      <td style="text-align:left">Log in with QQ web version. For details, see
        <a
        href="../../connections/qq/">Log in with QQ</a>. </td>
    </tr>
    <tr>
      <td style="text-align:left">weibo</td>
      <td style="text-align:left">Log in with Weibo web version. For details, see
        <a
        href="../../connections/weibo/">Log in with Weibo</a>. </td>
    </tr>
    <tr>
      <td style="text-align:left">dingtalk</td>
      <td style="text-align:left">Log in using the DingTalk web version. For details, see
        <a
        href="../../connections/dingtalk/">Log in using DingTalk</a>. </td>
    </tr>
    <tr>
      <td style="text-align:left">alipay</td>
      <td style="text-align:left">Log in using the Alipay APP. For details, see
        <a
        href="../../connections/alipay/">Log in using the mobile APP Alipay
      </a>. </td>
    </tr>
  </tbody>
</table>

## data object

### Before and after registration

Some request fields of the data object in the Pipeline before and after registration are as follows: For details, please see [{{$localeConfig.brandName}} GraphQL Debugger](https://www.genauth.ai/graphiql/) **User Authentication** - **Registration** interface.

::: hint-warning
Fields such as email, phone, unionid may not exist at the same time. Please check whether they exist before using them! Such as

```js
const email = context.request.body.email;
if (email) {
  // Indicates that the registration is done by email
  // Logic for whitelisting email registration

  if (!email.endsWith("example.com")) {
    return callback(new Error("Access Denied!"));
  }
}
```

:::

| Field name | Type    | Must exist | Description                                                                               |
| :--------- | :------ | ---------- | :---------------------------------------------------------------------------------------- |
| username   | string  | No         | Username, not empty when registering with username.                                       |
| email      | string  | No         | Email, not empty when registering with username.                                          |
| phone      | string  | No         | Mobile number, not empty when registering with mobile number.                             |
| forceLogin | boolean | no         | Whether to automatically perform the login process when registering, the default is false |
| profile    | object  | yes        | User information filled in by the user when registering                                   |

### Before authentication, after authentication

The request fields of the data object in the pipeline before and after authentication are as follows:

::: hint-warning
These fields may not all exist, please determine whether they exist before using them!
:::

| Field name | Type   | Must exist | Description                                                  |
| :--------- | :----- | ---------- | :----------------------------------------------------------- |
| username   | string | no         | Username, not empty when logging in with username.           |
| email      | string | no         | Email, not empty when logging in with email.                 |
| phone      | string | no         | Mobile number, not empty when logging in with mobile number. |

## userPool object

User pool related information
| Field name | Type | Description |
| :----- | :----- | :--------- |
| id | string | User pool ID |
| name | string | User pool name |

## geo attribute

Sample data:

```json
{
  "province": "Beijing",
  "city": "Beijing",
  "adcode": "110000",
  "rectangle": "116.0119343,39.66127144;116.7829835,40.2164962"
}
```
