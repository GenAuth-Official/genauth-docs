---
meta:
  - name: description
    content: How to identify the user's source
---

# How to identify the user's source

<LastUpdated/>

If you use [hosted login page](/guides/basics/authenticate-first-user/use-hosted-login-page.md) or [embedded login component](/reference/guard/), {{$localeConfig.brandName}} supports automatic identification of request parameters to write the user's source to the user's custom field. At the same time, the SDK provided by {{$localeConfig.brandName}} can also write the registration source information to the user's custom field during login registration, thereby achieving the purpose of identifying the user's source.

## Use hosted login page

The [GenAuth hosted login page](/guides/basics/authenticate-first-user/use-hosted-login-page.md) mode is considered the simplest and most secure way to integrate. This is because the login process is maintained by GenAuth and is kept secure by GenAuth. For most integrations, it is recommended to use the login process hosted by GenAuth. Your business system redirects the user to GenAuth, where the user authenticates and then redirects back to the application callback connection configured in the console.

Identifying the user source in the hosted login page can be divided into the following steps.

1. Define a user custom field (such as `source`) in the GenAuth console to store the user's source data. For details, see [Add custom user fields](/guides/users/user-defined-field/).
2. When accessing the application domain name, bring the specified `query` parameter, such as `https://your-app.genauth.ai?source=someWhere`.
3. When the user logs in or registers, {{$localeConfig.brandName}} will write this data to the user's custom field.
4. You can then use the SDK provided by GenAuth to manage the user's custom fields. For details, see [SDK - Manage custom data](/reference/sdk-for-node/management/UsersManagementClient.md#Get custom data).

## Using the Embedded Login Component

The [GenAuth Login Component (Guard)](/reference/guard/) is an embeddable login form that can be configured according to your needs and is recommended for single-page applications. Guard can be integrated into your React, Vue.js, Angular, and native JavaScript projects, and you can use this component to quickly implement the login authentication process.

Identifying the user source in the embedded login component can be divided into the following steps:

1. Define a user custom field (such as `source`) in the GenAuth console to store the user's source data. For details, see [Adding a custom user field](/guides/users/user-defined-field/).
2. Add the same query parameter to the URL of the page where the Guard component is located, such as `?source=someWhere`. When the user registers using the Guard component, this parameter will be written to the user's custom field.
3. You can then use the SDK provided by GenAuth to manage the user's custom fields. For details, see [SDK - Manage Custom Data](/reference/sdk-for-node/management/UsersManagementClient.md#Get Custom Data).

## Use SDK

1. Define a user-defined field (such as `source`) in the GenAuth console to store the user's source data. For details, see [Add Custom User Fields](/guides/users/user-defined-field/).
2. Pass custom data when calling the login function, such as:

- Register with email and password:

```javascript
const { AuthenticationClient } = require("authing-js-sdk");

const authing = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "YOUR_APP_HOST",
});
const email = "test@example.com";
const password = "passw0rd";
const user = await authing.registerByEmail(email, password, null, {
  customData: {
    source: "google",
  },
});
```

- Use social login:

```javascript
const { AuthenticationClient } = require("authing-js-sdk");

const authing = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "YOUR_APP_HOST",
});
authing.wxqrcode.startScanning("domId", {
  onSuccess: (userinfo) => {
    console.log(userinfo);
  },
  customData: {
    source: "someWhere",
  },
});
```

3. After the user completes the login registration, {{$localeConfig.brandName}} will write this data to the user's custom field.
4. You can then use the SDK provided by GenAuth to manage the user's custom fields. For details, see [SDK - Manage Custom Data](/reference/sdk-for-node/management/UsersManagementClient.md#Get Custom Data).
