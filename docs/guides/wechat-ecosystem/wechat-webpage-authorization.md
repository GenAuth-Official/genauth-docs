# Use WeChat authorization to log in to a web page in WeChat

<LastUpdated/>

{{$localeConfig.brandName}} provides developers with a method to quickly obtain user information and complete login in a WeChat web page through the SDK. If a user accesses a third-party web page or public account in the WeChat client, the WeChat web page authorization mechanism can be used to obtain basic user information and implement business logic.

- Application scenarios: WeChat web pages, public accounts;
- Overview: The WeChat authorization box pops up in the web page in the WeChat APP, and the user can obtain the current user's information after authorization;
- See [WeChat official documentation](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html).

<img src="./images/wechat-web-authorize.png" height="400px" style="display:block;margin: 0 auto;"/>

## Sample code

You can get the sample code here: [https://github.com/authing/wechat-eco-solution](https://github.com/authing/wechat-eco-solution), visit the [online sample application](https://www.genauth.ai/sample-wx.html).

## Step 1: Create a WeChat service account on WeChat public platform

Please go to [WeChat public platform](https://mp.weixin.qq.com/cgi-bin/readtemplate?t=register/step1_tmpl&lang=zh_CN&token=) to create a WeChat service account.

You need to record the **Developer ID (App ID)** and **Developer Key (App Secret)** of the application, which will be needed later. In the WeChat public platform backend, go to **Settings** -> **Public Account Settings** -> **Function Settings** page and set **Web Authorization Scope Name** to `core.genauth.ai`. In this process, you need to verify the legitimacy of the domain name. For details, see the next step.

## Step 2: Configure the WeChat web authorization application in the {{$localeConfig.brandName}} console

On the social login configuration page of the console, find the **WeChat web authorization login** application and fill in the following configuration:

- App ID: Developer ID;
- App Secret: Developer Key;
- Callback URL: This is your business callback domain name, which is not the same as the callback link configured for self-built applications, and has nothing to do with the callback address configuration of the third-party social login console. For example, if your website domain name is https://example.com, and the url for processing the {{$localeConfig.brandName}} callback request is /auth/callback, then you should fill in https://example.com/auth/callback. This parameter is no longer recommended. It is recommended to configure the callback link separately in the application. The address here can be filled in `#`.
- Txt Filename: The txt file name used to verify the domain name.
- Txt Content: The txt file content used to verify the domain name.

After the configuration is completed, please click "OK" to save the information.

## Step 3: Start development access

### Access using SDK

First, use CDN to introduce `authing-wxmp-sdk`:

```html
<script src="https://cdn.authing.co/packages/authing-wxmp-sdk/1.2.0/authing-wxmp-sdk.min.js"></script>
```

> For detailed documentation of `authing-wxmp-sdk`, please see: [WeChat Web Authorization Login SDK](/reference/sdk-for-wxmp.md).

#### Initialize SDK

Use user pool ID to initialize SDK:

```javascript
const authingWx = new AuthingWxmp({
  userPoolId: "YOUR_USERPOOLID",
});
```

#### Initiate WeChat authorization

Call `getAuthorizationUrl` method to obtain WeChat authorization login link, modify `window.location` to jump to WeChat login authorization page:

```javascript
// Jump to WeChat authorization page
window.location = authingWx.getAuthorizationUrl();
```

#### Get user information

After jumping back to the business callback link, get user information through the `getUserInfo` method:

```javascript
// If authingWx is not initialized on the callback page, it needs to be initialized first. For specific initialization methods, refer to the above

const { ok, userinfo, message } = authingWx.getUserInfo();
if (ok) {
  // do with userinfo
  console.log(userinfo);
} else if (message) {
  // message contains error message
  alert(message);
}
```

#### Next

!!!include(common/what-to-do-when-you-get-userinfo.md)!!!

### Use embedded login component to access

Take `React` as an example.

#### Install `@authing/react-ui-components`

```bash

$ yarn add @authing/react-ui-components

# OR

$ npm install @authing/react-ui-components --save

```

#### Initialization

```js
import React from "react";
import ReactDOM from "react-dom";
import { AuthingGuard } from "@authing/react-ui-components";
//Introduce css file
import "@authing/react-ui-components/lib/index.min.css";

const App = () => {
  const appId = "GEN_AUTH_APP_ID";
  const onLogin = (userInfo) => {
    console.log(userInfo);
  };
  return <AuthingGuard appId={appId} onLogin={onLogin} />;
};

ReactDOM.render(<App />, root);
```

#### Usage

After initialization, open the page in WeChat and you will see the following button. Click it to authorize. After authorization, you will be redirected to the application callback link, and you can use [AuthenticationClient](/reference/sdk-for-node/authentication/AuthenticationClient) to obtain user information.

<img src="~@imagesZhCn/guides/wechat-ecosystem/wechat-webpage-authorization/1.jpeg" style="width: 400px;display: block;margin: 0 auto" class="md-img-padding" />

</IntegrationDetailCard>
