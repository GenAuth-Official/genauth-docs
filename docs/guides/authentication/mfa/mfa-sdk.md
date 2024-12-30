# Access MFA through SDK

<LastUpdated/>

## Overview

{{$localeConfig.brandName}} can not only configure the MFA authentication process through the console, but also customize the MFA authentication process of {{$localeConfig.brandName}} through the SDK.

This article will take [{{$localeConfig.brandName}} - Node/JavaScript SDK](/reference/sdk-for-node/) as an example to guide users to complete the SDK-based MFA custom development.

It includes: binding MFA authenticator, unbinding MFA authenticator, user secondary authentication, etc.

## Preparation

1. <a :href="`${$themeConfig.consoleDomain}`">Register a {{$localeConfig.brandName}} account</a>.
2. [Create a user pool and application](/guides/basics/authenticate-first-user/use-hosted-login-page.md).

## Multi-factor authentication (MFA) API

### Query the MFA information enabled by the user

<ApiMethodSpec method="get" :host="$themeConfig.apiDomain" path="/api/mfa/authenticator" summary="Query the MFA information enabled by the user" description="Return the MFA information enabled by the user">
<template slot="headers">
<ApiMethodParam name="x-authing-userpool-id" type="string" required description="User Pool ID" />
<ApiMethodParam name="Authorization" type="string" required description="Bearer <User Token>" />
</template>
<template slot="queryParams">
<ApiMethodParam name="authenticator_type" type="string" required>

Fill in `totp`:

</ApiMethodParam>
</template>
<template slot="response">
<ApiMethodResponse>

```json
{
  "code": 200,
  "message": "Get MFA Authenticator successfully",
  "data": [
    {
      "id": "5f8eea9b018e1407d2ce7975",
      "createdAt": "2020-10-20T13:48:11.288Z",
      "updatedAt": "2020-10-20T13:48:11.288Z",
      "userId": "5cce4a373ed9f9c9c0fd9596",
      "enable": false,
      "secret": "DMDCO7SNNVGU2VKJ",
      "authenticatorType": "totp",
      "recoveryCode": "10af-4f2f-f34f-f224-d21c-bd16"
    }
  ]
}

Return when MFA is not enabled：
{
  "code": 200,
  "message": "Get MFA Authenticator successfully",
  "data": []
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

### Request to bind MFA token

<ApiMethodSpec method="post" :host="$themeConfig.apiDomain" path="/api/mfa/totp/associate" summary="Get the MFA QR code and Secret information for display, waiting for the user to confirm the binding." description="After requesting this interface, the MFA secondary authentication will not take effect before the user confirms the binding. The interface returns MFA Secret, MFA Uri, MFA QR code Data Url, and recovery code.">
<template slot="headers">
<ApiMethodParam name="x-authing-userpool-id" type="string" required description="User Pool ID" />
<ApiMethodParam name="Authorization" type="string" required description="Bearer <User Token>" />
</template>
<template slot="bodyParams">
<ApiMethodParam name="authenticator_type" type="string" required>

Fill in `totp`:

</ApiMethodParam>
</template>
<template slot="response">
<ApiMethodResponse>

```json
{
  "code": 200,
  "message": "Successfully obtained MFA key",
  "data": {
    "authenticator_type": "totp",
    "secret": "JAPDSOAZLV4BG3RA", // MFA Secret can be used to manually add MFA
    "qrcode_uri": "otpauth://totp/playground:getstarted%40{{$themeConfig.officeSiteDomain}}?secret=JAPDSOAZLV4BG3RA&period=30&digits=6&algorithm=SHA1&issuer=playground", // MFA Uri，可用于手动添加 MFA
    // MFA QR code Data Url, used to display the QR code in <img> src
    "qrcode_data_url": "data:image/png;base64,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",
    // Recovery Code
    "recovery_code": "8477-a1a6-662c-a750-bbb4-72a9"
  }
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

### Confirm binding MFA password

<ApiMethodSpec method="post" :host="$themeConfig.apiDomain" path="/api/mfa/totp/associate/confirm" summary="Confirm MFA binding." description="After requesting this interface, the user confirms the MFA binding, and then logs in to enter the secondary verification MFA password.">
<template slot="headers">
<ApiMethodParam name="x-authing-userpool-id" type="string" required description="User Pool ID" />
<ApiMethodParam name="Authorization" type="string" required description="Bearer <User Token>" />
</template>
<template slot="bodyParams">
<ApiMethodParam name="authenticator_type" type="string" required>

Fill in `totp`:

</ApiMethodParam>
<ApiMethodParam name="totp" type="string" required>

MFA Token:

</ApiMethodParam>
</template>
<template slot="response">
<ApiMethodResponse description="绑定成功">

```json
{ "code": 200, "message": "TOTP MFA binding successful" }
```

</ApiMethodResponse>

<ApiMethodResponse httpCode="400" description="Bind failed">

```json
{ "code": 400, "message": "Security code error, please re-enter" }
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

### Return MFA Token after one authentication

Call the login method in authing-js-sdk, refer to [Login](/sdk/sdk-for-javascript/README.md#Login). Or directly call the [GraphQL interface](/sdk/open-graphql.md#Login). You need to store the mfaToken for later use.

How to call the SDK:

```js
try {
  window.user = await window.authing.login({ email, password });
  alert(`Login successful, information: ${JSON.stringify(window.user)}`);
} catch (err) {
  if (err.message.code === 1635) {
    console.log(err.message.data.email);
    console.log(err.message.data.nickname);
    console.log(err.message.data.username);
    console.log(err.message.data.avatar);
    console.log(err.message.data.mfaToken);
    window.mfaToken = err.message.data.mfaToken;
  }
  alert(err.message.message);
}
```

直接调用 GraphQL 接口的返回信息：

```json
{
  "errors": [
    {
      "message": {
        "code": 1635,
        "message": "Please enter the secondary authentication security code",
        "data": {
          "mfaToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJQb29sSWQiOiI1Y2NlNGFhODNlZDlmOTdiNGRmZDk1ZjAiLCJ1c2VySWQiOiI1ZjhlZTYyY2FmYzJmZmFkMzY0MzQ1YjciLCJhcm4iOiJhcm46Y246YXV0aGluZzo1Y2NlNGFhODNlZDlmOTdiNGRmZDk1ZjA6dXNlcjo1ZjhlZTYyY2FmYzJmZmFkMzY0MzQ1YjciLCJzdGFnZSI6MX0sImlhdCI6MTYwMzIwNjcwOCwiZXhwIjoxNjAzMjA3MDY4fQ.PR7LXqpyH--6sF4eAcOcK1yZBi14lRv_lr9qUtbTQM4",
          "nickname": null,
          "email": "q3@123.com",
          "username": null,
          "avatar": "https://usercontents.{{$themeConfig.officeSiteDomain}}/authing-avatar.png"
        }
      },
      "locations": [{ "line": 2, "column": 9 }],
      "path": ["login"],
      "extensions": { "code": "INTERNAL_SERVER_ERROR" }
    }
  ],
  "data": { "login": null }
}
```

### Login verification MFA password

<ApiMethodSpec method="post" :host="$themeConfig.apiDomain" path="/api/mfa/totp/verify" summary="Used to verify whether the secondary authentication password is correct after the first authentication is successful during login.">
<template slot="description">

For users who enable secondary authentication, an **mfaToken** will be returned after the first authentication is successful. You need to carry the **mfaToken** to request this interface to complete the secondary authentication.

</template>
<template slot="headers">
<ApiMethodParam name="x-authing-userpool-id" type="string" required description="User Pool ID" />
<ApiMethodParam name="Authorization" type="string" required description="Bearer <mfaToken>" />
</template>
<template slot="bodyParams">
<ApiMethodParam name="totp" type="string" required>

MFA 口令

</ApiMethodParam>
</template>
<template slot="response">
<ApiMethodResponse description="登录成功">

```json
{
  "code": 200,
  "message": "Second verification successful",
  "data": {
    "id": "5f8ee62cafc2ffad364345b7",
    "createdAt": "2020-10-20T13:29:16.896Z",
    "updatedAt": "2020-10-20T14:54:07.301Z",
    "userPoolId": "5cce4aa83ed9f97b4dfd95f0",
    "isRoot": false,
    "oauth": null,
    "email": "q3@123.com",
    "phone": null,
    "username": null,
    "unionid": null,
    "openid": null,
    "nickname": null,
    "company": null,
    "photo": "https://usercontents.{{$themeConfig.officeSiteDomain}}/authing-avatar.png",
    "browser": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36",
    "device": null,
    "password": "76847018c664261747924735403ee0a5",
    "salt": "20k8b1318gie",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJQb29sSWQiOiI1Y2NlNGFhODNlZDlmOTdiNGRmZDk1ZjAiLCJhcHBJZCI6bnVsbCwidXNlcklkIjoiNWY4ZWU2MmNhZmMyZmZhZDM2NDM0NWI3IiwiYXJuIjoiYXJuOmNuOmF1dGhpbmc6NWNjZTRhYTgzZWQ5Zjk3YjRkZmQ5NWYwOnVzZXI6NWY4ZWU2MmNhZmMyZmZhZDM2NDM0NWI3IiwiaWQiOiI1ZjhlZTYyY2FmYzJmZmFkMzY0MzQ1YjciLCJfaWQiOiI1ZjhlZTYyY2FmYzJmZmFkMzY0MzQ1YjciLCJwaG9uZSI6bnVsbCwiZW1haWwiOiJxM0AxMjMuY29tIiwidXNlcm5hbWUiOm51bGwsInVuaW9uaWQiOm51bGwsIm9wZW5pZCI6bnVsbH0sImlhdCI6MTYwMzIwNTY0NywiZXhwIjoxNjA0NTAxNjQ3fQ.U1NmmdOydZ-D_yzhQizpZ--Z5hgzSlZbWxKn3e7BYDQ",
    "tokenExpiredAt": "2020-11-04T14:54:07.287Z",
    "loginsCount": 24,
    "lastIp": "124.204.56.98",
    "name": null,
    "givenName": null,
    "familyName": null,
    "middleName": null,
    "profile": null,
    "preferredUsername": null,
    "website": null,
    "gender": "U",
    "birthdate": null,
    "zoneinfo": null,
    "locale": null,
    "address": null,
    "formatted": null,
    "streetAddress": null,
    "locality": null,
    "region": null,
    "postalCode": null,
    "city": null,
    "province": null,
    "country": null,
    "registerSource": ["basic:email"],
    "emailVerified": false,
    "phoneVerified": false,
    "lastLogin": "2020-10-20T14:54:07.298Z",
    "blocked": false,
    "isDeleted": false,
    "sendSmsCount": 0,
    "sendSmsLimitCount": 1000,
    "identities": []
  }
}
```

<ApiMethodResponse httpCode="200" description="Wrong password">

```json
{ "code": 6001, "message": "Security code error, please re-enter" }
```

</ApiMethodResponse>
</ApiMethodResponse>
</template>
</ApiMethodSpec>

### Use recovery code

<ApiMethodSpec method="post" :host="$themeConfig.apiDomain" path="/api/mfa/totp/recovery" summary="Used to restore account access when the user loses the MFA password after logging in successfully once.">
<template slot="description">

If the user has enabled secondary authentication and loses the MFA password, a **recovery code** is needed to restore account access. Using a recovery code is equivalent to using an MFA password, and a new recovery code\*\* will be generated for the user after use. The user can unbind the MFA after logging in and rebind a new MFA.

</template>
<template slot="headers">
<ApiMethodParam name="x-authing-userpool-id" type="string" required description="User Pool ID" />
<ApiMethodParam name="Authorization" type="string" required description="Bearer <User Token>" />
</template>
<template slot="bodyParams">
<ApiMethodParam name="recoveryCode" type="string" required>

Recovery code, which is returned when binding the MFA token

</ApiMethodParam>
</template>
<template slot="response">
<ApiMethodResponse>

```json
Login successful
{
    "code": 200,
    "message": "Second verification successful",
    "data": {
        "id": "5f8ee62cafc2ffad364345b7",
        "createdAt": "2020-10-20T13:29:16.896Z",
        "updatedAt": "2020-10-20T14:54:07.301Z",
        "userPoolId": "5cce4aa83ed9f97b4dfd95f0",
        "isRoot": false,
        "oauth": null,
        "email": "q3@123.com",
        "phone": null,
        "username": null,
        "unionid": null,
        "openid": null,
        "nickname": null,
        "company": null,
        "photo": "https://usercontents.{{$themeConfig.officeSiteDomain}}/authing-avatar.png",
        "browser": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36",
        "device": null,
        "password": "76847018c664261747924735403ee0a5",
        "salt": "20k8b1318gie",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJQb29sSWQiOiI1Y2NlNGFhODNlZDlmOTdiNGRmZDk1ZjAiLCJhcHBJZCI6bnVsbCwidXNlcklkIjoiNWY4ZWU2MmNhZmMyZmZhZDM2NDM0NWI3IiwiYXJuIjoiYXJuOmNuOmF1dGhpbmc6NWNjZTRhYTgzZWQ5Zjk3YjRkZmQ5NWYwOnVzZXI6NWY4ZWU2MmNhZmMyZmZhZDM2NDM0NWI3IiwiaWQiOiI1ZjhlZTYyY2FmYzJmZmFkMzY0MzQ1YjciLCJfaWQiOiI1ZjhlZTYyY2FmYzJmZmFkMzY0MzQ1YjciLCJwaG9uZSI6bnVsbCwiZW1haWwiOiJxM0AxMjMuY29tIiwidXNlcm5hbWUiOm51bGwsInVuaW9uaWQiOm51bGwsIm9wZW5pZCI6bnVsbH0sImlhdCI6MTYwMzIwNTY0NywiZXhwIjoxNjA0NTAxNjQ3fQ.U1NmmdOydZ-D_yzhQizpZ--Z5hgzSlZbWxKn3e7BYDQ",
        "tokenExpiredAt": "2020-11-04T14:54:07.287Z",
        "loginsCount": 24,
        "lastIp": "124.204.56.98",
        "name": null,
        "givenName": null,
        "familyName": null,
        "middleName": null,
        "profile": null,
        "preferredUsername": null,
        "website": null,
        "gender": "U",
        "birthdate": null,
        "zoneinfo": null,
        "locale": null,
        "address": null,
        "formatted": null,
        "streetAddress": null,
        "locality": null,
        "region": null,
        "postalCode": null,
        "city": null,
        "province": null,
        "country": null,
        "registerSource": [
            "basic:email"
        ],
        "emailVerified": false,
        "phoneVerified": false,
        "lastLogin": "2020-10-20T14:54:07.298Z",
        "blocked": false,
        "isDeleted": false,
        "sendSmsCount": 0,
        "sendSmsLimitCount": 1000,
        "identities": []
    },
    "recoveryCode": "9225-be3f-4646-fa3a-7a32-a098"
}

Wrong password
{"code":6002,"message":"Wrong recovery code, please re-enter"}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

### Unbind MFA

<ApiMethodSpec method="delete" :host="$themeConfig.apiDomain" path="/api/mfa/totp/associate" summary="Unbind MFA authenticator">
<template slot="description">

After requesting this interface, MFA will be unbound, and TOTP MFA secondary authentication will not be required for subsequent logins.

</template>
<template slot="headers">
<ApiMethodParam name="x-authing-userpool-id" type="string" required description="User Pool ID" />
<ApiMethodParam name="Authorization" type="string" required description="Bearer <User Token>" />
</template>

<template slot="response">
<ApiMethodResponse>

```json
{ "code": 200, "message": "TOTP MFA unbinding successful" }
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

## How to run

1. Double-click to open the ‘index.html’ file, or start an http server in the project directory.

```bash
$ npm install -g http-server
$ http-server
```

2. Then visit 127.0.0.1:8080.

::: hint-info
You can refer to the [MFA Demo](https://github.com/authing/mfa-demo) provided by {{$localeConfig.brandName}}.
:::

## Multi-factor authentication (MFA) SDK

### Request to bind MFA authenticator

```javascript
import { AuthenticationClient } from "authing-js-sdk";

const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "https://xxx.genauth.ai",
});

await authenticationClient.mfa.assosicateMfaAuthenticator({
  authenticatorType: "totp",
});
```

### Verify MFA secondary password

```javascript
import { AuthenticationClient } from "authing-js-sdk";

const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "https://xxx.genauth.ai",
});

await authenticationClient.mfa.verifyTotpMfa({
  totp: "112233",
  mfaToken: "xxx",
});
```

### Get MFA authenticator

MfaAuthenticationClient().getMfaAuthenticators()

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "https://xxx.genauth.ai",
});

const authenticators = await authenticationClient.mfa.getMfaAuthenticators({
  type: "totp",
});
```

#### Return value

- `Promise<IMfaAuthenticators>`

### Request MFA QR code and key information

MfaAuthenticationClient().assosicateMfaAuthenticator()

> Request MFA QR code and key information

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "https://xxx.genauth.ai",
});

const authenticators =
  await authenticationClient.mfa.assosicateMfaAuthenticator({
    authenticatorType: "totp",
  });
```

#### Return value

- `Promise<IMfaAssociation>`

### Unbind MFA

MfaAuthenticationClient().deleteMfaAuthenticator()

> Unbind MFA

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "https://xxx.genauth.ai",
});

const authenticators = await authenticationClient.mfa.deleteMfaAuthenticator();
```

#### Return value

- `Promise<IMfaDeleteAssociation>`

### Confirm binding MFA

MfaAuthenticationClient().confirmAssosicateMfaAuthenticator()

> Confirm binding MFA

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "https://xxx.genauth.ai",
});

const authenticators =
  await authenticationClient.mfa.confirmAssosicateMfaAuthenticator({
    authenticatorType: "totp",
    totp: "112233",
  });
```

#### Return value

- `Promise<IMfaConfirmAssociation>`

### Verify the secondary verification MFA password

MfaAuthenticationClient().verifyTotpMfa()

> Verify the secondary verification MFA password

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "https://xxx.genauth.ai",
});

const authenticators = await authenticationClient.mfa.verifyTotpMfa({
  authenticatorType: "totp",
  totp: "112233",
});
```

#### Return value

- [Promise\<User\>](/guides/user/user-profile.md)

### Verify the secondary verification MFA SMS verification code

MfaAuthenticationClient().verifyAppSmsMfa()

#### Parameters

- `options` \<Object\>
- `options.phone` \<string\> User's phone number.
- `options.code` \<string\> Phone verification code.
- `options.mfaToken` \<string\> mfaToken returned by the login interface.

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "https://xxx.genauth.ai",
});

const authenticators = await authenticationClient.mfa.verifySmsMfa({
  mfaToken: "xxxxxx",
  phone: "188xxxx8888",
  code: "xxxx",
});
```

#### Return value

- [Promise\<User\>](/guides/user/user-profile.md)

### Verify the secondary verification MFA email verification code

MfaAuthenticationClient().verifyAppEmailMfa()

#### Parameters

- `options` \<Object\>
- `options.email` \<string\> User email.
- `options.code` \<string\> Mobile phone verification code.
- `options.mfaToken` \<string\> mfaToken returned by the login interface.

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "https://xxx.genauth.ai",
});

const authenticators = await authenticationClient.mfa.verifyAppEmailMfa({
  mfaToken: "xxxxxx",
  email: "example@{{$themeConfig.officeSiteDomain}}",
  code: "xxxx",
});
```

#### Return value

- [Promise\<User\>](/guides/user/user-profile.md)

### Check if the phone number or email address has been bound

MfaAuthenticationClient().phoneOrEmailBindable()

> When MFA login is required by phone or email address, and the user has not bound the phone or email address, you can first ask the user to enter the phone number or email address, use this interface to first check if the phone or email address can be bound, and then perform MFA verification

#### Parameters

- `options` \<Object\>
- `[options.email]` \<string\> The email address to be checked.
- `[options.phone]` \<string\> The phone number to be checked.
- `options.mfaToken` \<string\> The mfaToken returned by the login interface.

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "https://xxx.genauth.ai",
});

const authenticators = await authenticationClient.mfa.phoneOrEmailBindable({
  mfaToken: "xxxxxx",
  email: "example@{{$themeConfig.officeSiteDomain}}",
});
```

#### Return value

- `Promise<boolean>`

### Verify the secondary verification MFA recovery code

MfaAuthenticationClient().verifyTotpRecoveryCode()

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "https://xxx.genauth.ai",
});

const authenticators = await authenticationClient.mfa.verifyTotpRecoveryCode({
  authenticatorType: "totp",
  totp: "112233",
});
```

#### Return value

- [Promise\<User\>](/guides/user/user-profile.md)
