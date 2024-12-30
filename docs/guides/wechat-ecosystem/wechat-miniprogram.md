# Login with WeChat in the mini program

<LastUpdated/>

{{$localeConfig.brandName}} provides developers with a way to quickly obtain user information and complete login in the mini program through the SDK. The {{$localeConfig.brandName}} SDK can easily obtain the user identity provided by WeChat and quickly establish an account system based on mobile phone numbers.

- Application scenario: Mini Program;
- Overview: Used in WeChat Mini Program, the WeChat authorization box pops up, and the user can obtain the current user's information after authorization;
- View [WeChat official document](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)

<img src="./images/wechat-mini-program-login.png" height="400px" style="display:block;margin: 0 auto;"/>

## Step 1: Create a Mini Program in WeChat Public Platform

Please go to [WeChat Public Platform](https://mp.weixin.qq.com/wxopen/waregister?action=step1&token=&lang=zh_CN) to create a WeChat Mini Program. You need to record the application's **App ID** and **App Secret**, which will be used later. **If you need to obtain the user's mobile phone number, you need to pass WeChat authentication. ** And add `core.genauth.ai` to WeChat's `request` legal domain name.

<img src="~@imagesZhCn/reference/config-request-valid-domain.png" height="400px" style="display:block;margin: 0 auto;">

## Step 2: Configure WeChat Mini Program application in {{$localeConfig.brandName}} console

On the social login configuration page of the console, find the **WeChat Mini Program** application and fill in the following configuration:

- App ID: Mini Program application ID;
- App Secret: Mini Program application key.

After the configuration is completed, please click "OK" to save the information.

## Step 3: Start development and access

Starting from Mini Program Basic Library version 2.2.1 or above, and Developer Tools 1.02.1808300 or above, Mini Program supports the use of npm to install third-party packages. For details, please see: [npm support | WeChat open document](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html).

### Install npm package

Use npm:

```
npm install authing-wxapp-sdk
```

Or use yarn:

```
yarn add authing-wxapp-sdk
```

Click the menu bar in the developer tools: Tools --> Build npm:

<img src="~@imagesZhCn/reference/wxmp-npm.png" height="400px">

Check the Use npm module option:

![](~@imagesZhCn/reference/wxmp-npm2.png)

### Initialize SDK

`AuthenticationClient` initialization requires the `AppId` (application ID):

> You can view your application list in **Application** in the console.

```js
const { AuthenticationClient } = require("authing-wxapp-sdk");

const authing = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
});
```

### Call login method

`AuthenticationClient` provides the `loginByCode` method, which can complete silent login through WeChat authorization:

```javascript
const { code } = await wx.login();
// No user authorization required
const user = await authing.loginByCode(code); // Successful login, write token to WeChat Storage

// You can do this after login
await authing.updateProfile({
  nickname: "Bob",
});
```

After the user completes the login, the SDK will write the user's token to WeChat Storage, and subsequent requests will automatically carry the token for access.

![](~@imagesZhCn/reference/20201112165637.png)

When the user opens the mini program again, if the user's token is saved in the mini program's Storage, the request to access authing will automatically carry the token.

```javascript
// The request can succeed because the user is logged in.
await authing.updateProfile(
  nickname: 'Mick'
)
```

For details, please refer to the document: [Mini Program SDK](/reference/sdk-for-wxapp.md).

## Next

!!!include(common/what-to-do-when-you-get-userinfo.md)!!!
