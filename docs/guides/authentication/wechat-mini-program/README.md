# Authentication in Mini Program

<LastUpdated/>

In Mini Program, in addition to basic operations such as obtaining and modifying user information, logging in with email and mobile phone numbers, and adding user-defined fields, you can also use methods unique to the Mini Program environment such as **Getting user mobile phone numbers through WeChat authorization**, **Login with WeChat authorization**, and **Login with WeChat-authorized mobile phone numbers**.

## Configure Mini Program login in {{$localeConfig.brandName}}

In order to use {{$localeConfig.brandName}} Mini Program SDK in Mini Program, you need to apply for a Mini Program in [WeChat Open Platform](https://mp.weixin.qq.com/) and fill in the configuration of the Mini Program in [{{$localeConfig.brandName}} console](https://console.genauth.ai/console/userpool).

For details, please see: [Configure applet login in {{$localeConfig.brandName}}](/reference/sdk-for-wxapp.md#Configure applet login in -localeConfig-brandName-).

## Import {{$localeConfig.brandName}} applet SDK

For detailed installation process, please see: [Install applet SDK](/reference/sdk-for-wxapp.md#Install).

The first step is to initialize `AuthenticationClient`, which requires passing in `AppId` (application ID):

> You can view your application list in **Application** in the console.

```js
const { AuthenticationClient } = require("authing-wxapp-sdk");

const authing = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
});
```

Next, you can use the `AuthenticationClient` method, such as [using WeChat authorization login](/reference/sdk-for-wxapp.md#loginbycode):

```javascript
const { code } = await wx.login();
const data = await authing.loginByCode(code);
```

- If the user logs in to the mini program for the first time, and the user has not logged in using the WeChat application bound to the same subject as the mini program, a new account will be created.
- If the user logs in to the mini program for the first time, but the user has logged in using the WeChat application bound to the same subject as the mini program, the corresponding WeChat account will be returned.

For more information, see: [Mini Program SDK](/reference/sdk-for-wxapp.md).
