---
noToc: true
lastUpdated: true
sidebarType: page
noPageNav: true
noSidebar: true
downloadDemo:
title: Resources on this page
description: Download a Vue quick start demo or view it on GitHub.
downloadUrl: https://github.com/Authing/spa-demo-vue/archive/refs/heads/main.zip
jumpUrl: https://github.com/Authing/spa-demo-vue
---

# Vue Quick Start

You can use GenAuth to quickly integrate **authentication** into new or existing Vue applications. This tutorial shows you how to use the GenAuth SDK to add authentication to your Vue application.

System requirements: Vue 2.x

> If you only need the login component, please refer to [**Login component documentation**](https://docs.genauth.ai/reference/guard/vue.html)

## Configure GenAuth

You need to create an application in GenAuth first. Go to [**Console**](https://console.genauth.ai) > **Application** and click "Add Application".

![](~@imagesZhCn/quickstarts/create-app.png)

**Authentication address** Fill in a domain name as the unique identifier of this application in GenAuth, **Callback link** Fill in: `http://localhost:4000/callback`

![](~@imagesZhCn/quickstarts/spa/create-app-2.png)

Find your application in the application list and enter **Application details**. In the Security card of the Advanced Configuration tab, select RS256 for the id_token signature algorithm, and then click Save.

![](~@imagesZhCn/quickstarts/spa/set-app.png)

In the Security card, set the Exchange token authentication method, Verify token authentication method, and Withdraw token authentication method to none.

![](~@imagesZhCn/quickstarts/spa/set-auth-method.png)

### Configure login callback address

When the user completes the authentication in GenAuth, GenAuth will redirect the user to the callback address. The callback address whitelist must be configured here, otherwise the user will encounter an error message that the callback address does not match. The callback address required for this tutorial is `http://localhost:4000/callback`. Please paste this link in the Login callback address.

![](~@imagesZhCn/quickstarts/spa/set-url.png)

### Configure the logout callback address

When the user completes the logout in GenAuth, GenAuth will redirect the user to the logout callback address. **The logout callback address whitelist must be configured here**, otherwise the user will encounter an error message that the logout callback address does not match. The callback address required for this tutorial is `http://localhost:4000` Please paste this link in **Logout callback address**.

![](~@imagesZhCn/quickstarts/spa/set-url.png)

### Record application information

Record the following information:

- Application ID
- Application key
- Application domain name

![](~@imagesZhCn/quickstarts/save-app-info.png)

## Integrate GenAuth

### Modify Demo configuration

If you downloaded the [Sample Demo code](https://github.com/Authing/spa-demo-vue), you need to modify src/main.js and modify the configuration to your application configuration.

```js
const authing = new AuthenticationClient({
  appId: "APP_ID",
  appHost: "https://{Your domain name}.genauth.ai",
  redirectUri: "http://localhost:4000/callback",
  tokenEndPointAuthMethod: "none",
});
```

Then run:

```bash
$ yarn install
$ yarn serve
```

### Install SDK

Install the authing-js-sdk package in your application project. Then initialize an SDK instance.

Our example uses yarn, so it is recommended that you also use yarn to install authing-js-sdk

```bash
$ yarn add authing-js-sdk
```

If you are using npm

```bash
$ npm install authing-js-sdk
```

Initialize the SDK instance for use in the Vue project.
Inject the SDK instance into the Vue context through provide to facilitate use by other components.

```js
import { AuthenticationClient } from "authing-js-sdk";

const authing = new AuthenticationClient({
  appId: "APP_ID",
  appHost: "https://{Your domain name}.genauth.ai",
  redirectUri: "http://localhost:4000/callback",
  tokenEndPointAuthMethod: "none",
});
Vue.config.productionTip = false;

new Vue({
  router,
  provide: {
    $authing: authing,
  },
  render: (h) => h(App),
}).$mount("#app");
```

GenAuth JS SDK receives the following parameters:

- appId, application ID, which can be obtained on the application details page.
- appHost: application authentication address, replace `{application domain name}` with the actual domain name of your application.
- redirectUri: application callback address, the address to which GenAuth jumps back after authentication. It must be configured in the console callback address whitelist in advance, **randomly filling in will definitely result in an error! **
- tokenEndPointAuthMethod: token endpoint authentication method, optional values ​​are `client_secret_post`, `client_secret_basic`, `none`, default is `client_secret_post`. Fill in `none` for SPA scenarios.

### Initiate login

GenAuth SDK allows you to quickly integrate login into Vue applications. You need to generate a **code_verifier value** and its **digest value**, save **code_verifier**, and fill its **digest value** into buildAuthorizeUrl to build a login link. Then redirect the browser to this address when the login button is clicked, allowing the user to complete the authentication on the login page hosted by GenAuth. After successful login, GenAuth will redirect the user back to your application.

```vue
<template>
  <button @click="handleLogin">Click to log in</button>
</template>

<script>
export default {
  name: "Login",
  inject: ["$authing"],
  methods: {
    handleLogin: async function () {
      // PKCE scenario usage example
      // Generate a code_verifier
      let codeChallenge = this.$authing.generateCodeChallenge();
      localStorage.setItem("codeChallenge", codeChallenge);
      // Calculate the SHA256 digest of code_verifier
      let codeChallengeDigest = this.$authing.getCodeChallengeDigest({
        codeChallenge,
        method: "S256",
      });
      // Construct OIDC authorization code + PKCE mode login URL
      let url = this.$authing.buildAuthorizeUrl({
        codeChallenge: codeChallengeDigest,
        codeChallengeMethod: "S256",
      });
      window.location.href = url;
    },
  },
};
</script>
```

### Handle callback

After the user completes the authentication in GenAuth, the business application will be called back. We need to extract the **code** from **query**, extract the code_verifier when initiating the login from localStorage, and then call the getAccessTokenByCode function to **get the Access token**. Then use the Access token to call the getUserInfoByAccessToken function to **get the user information**.

```vue
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  inject: ["$authing"],
  mounted: function () {
    const currentQuery = this.$router.history.current.query;
    const code = currentQuery.code || "";
    const codeChallenge = localStorage.getItem("codeChallenge");
    this.getToken(code, codeChallenge);
  },
  methods: {
    getToken: async function (code, codeChallenge) {
      let tokenSet = await this.$authing.getAccessTokenByCode(code, {
        codeVerifier: codeChallenge,
      });
      const { access_token, id_token } = tokenSet;
      let userInfo = await this.$authing.getUserInfoByAccessToken(
        tokenSet.access_token
      );
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("idToken", id_token);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
  },
};
</script>
```

### Display user information

We can use the following components to display user information based on the login status.

```vue
<template>
  <div>
    <div>user-info:{{ userInfo }}</div>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data: function () {
    return {
      userInfo: "",
    };
  },
  inject: ["$authing"],
  mounted: function () {
    let userInfo = localStorage.getItem("userInfo");
    this.userInfo = userInfo;
  },
  methods: {
    handleLogout: function () {
      let idToken = localStorage.getItem("idToken");
      console.log(this);
      this.$authing.buildLogoutUrl({
        expert: true,
        redirectUri: "http://localhost:4000",
        idToken,
      });
      localStorage.clear();
      window.location.href = "http://localhost:4000";
    },
  },
};
</script>
```

### User Logout

Use the buildLogoutUrl method to construct the logout address. You need to pass in the **Id token** and **logout callback address** of the current logged out user. The logout callback address **must be configured** in the console's application logout callback whitelist. **If you fill it in randomly, you will get an error! **

```vue
<script>
export default {
  name: "UserInfo",
  data: function () {
    return {
      userInfo: "",
    };
  },
  inject: ["$authing"],
  mounted: function () {
    let userInfo = localStorage.getItem("userInfo");
    this.userInfo = userInfo;
  },
  methods: {
    handleLogout: function () {
      let idToken = localStorage.getItem("idToken");
      console.log(this);
      this.$authing.buildLogoutUrl({
        expert: true,
        redirectUri: "http://localhost:4000",
        idToken,
      });
      localStorage.clear();
      window.location.href = "http://localhost:4000";
    },
  },
};
</script>
```

## Calling resource API

Next, we will describe how to **request the API of an external resource server** from a Vue application.

> If you have integrated authentication into your Vue application following the previous steps, you need to **log out** first, and we need a new Access token.

### Building a server-side API

First, you need to build a server-side API interface for the Vue application to call. In this tutorial, we use a ready-made API Server.

Clone the API Server repository:

```bash
$ git clone https://github.com/Authing/m2m-demo-express.git
```

Enter the project directory and install dependencies:

```bash
$ npm install
```

In line 12 of app.js , modify the configuration to match your application configuration:

```js
// Authorization middleware, Access token must exist and can be verified by the GenAuth application public key
const checkJwt = jwt({
  // Dynamically obtain the verification public key from the GenAuth application service discovery address
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://{application domain name}.genauth.ai/oidc/.well-known/jwks.json`,
  }),

  // Verify the audience and issuer
  audience: "APP_ID",
  issuer: [`https://{application domain name}.genauth.ai/oidc`],
  algorithms: ["RS256"],
});
```

Start the API Server:

```bash
$ npm start
```

For details, refer to [Documentation](/quickstarts/apiServer/nodeJsExpress).

### Set resource permissions

In order to obtain an access token with resource permissions, you first need to define **who has what permissions for what resources** in GenAuth.

#### Create a user

In **User Management** > **User List**, click the "Create" button on the right.

Create a test user.

![](~@imagesZhCn/quickstarts/spa/create-user.png)

#### Create resources

On the application details page, click the "Authorization" tab, and click Add in the "API Resources" card.

![](~@imagesZhCn/quickstarts/apiServer/create-resource-1.png)

Fill in the resource name: order, resource description: order, API interface URL: `http://localhost:5000/api/protected`, define an **operation** for the resource. This tutorial defines a **read operation** for the **order resource**. Click Add Operation, fill in `read` for the operation type, and fill in read order for the description. Finally, click Save.

![](~@imagesZhCn/quickstarts/apiServer/create-resource-2.png)

#### Resource Authorization

In the "Resource Authorization" tab, click Add.

![](~@imagesZhCn/quickstarts/spa/resource-acl.png)

Select **User** for **Authorized Subject Type**, search for the test user just created for **Authorized Subject**, select Allow for **Authorization Role**, select the order resource just defined for **Resource Type**, keep the default for **Resource Identifier**, select the specific operation for **Operation**, and select the read order operation. Finally, click OK.

![](~@imagesZhCn/quickstarts/spa/resource-authz-1.png)

![](~@imagesZhCn/quickstarts/spa/resource-authz-2.png)

### Initiate Authentication Authorization

GenAuth SDK allows you to quickly integrate login into Vue applications. You need to generate a **code_verifier value** and its **digest value**, save the code_verifier, and fill its digest value into buildAuthorizeUrl to build the login link. In addition, you need to specify the scope authorization scope and request the corresponding resource permissions. Then redirect the browser to this address when the login button is clicked, so that the user can complete the authentication on the login page hosted by GenAuth. After the login is successful, GenAuth will redirect the user back to your application.

```vue
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  inject: ["$authing"],
  mounted: function () {
    const currentQuery = this.$router.history.current.query;
    const code = currentQuery.code || "";
    const codeChallenge = localStorage.getItem("codeChallenge");
    this.getToken(code, codeChallenge);
  },
  methods: {
    getToken: async function (code, codeChallenge) {
      let tokenSet = await this.$authing.getAccessTokenByCode(code, {
        codeVerifier: codeChallenge,
      });
      const { access_token, id_token } = tokenSet;
      let userInfo = await this.$authing.getUserInfoByAccessToken(
        tokenSet.access_token
      );
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("idToken", id_token);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
  },
};
</script>
```

### Handle callback

After the user completes the authentication in GenAuth, the business application will be called back. We need to extract the **code** from **query**, extract the code_verifier when initiating the login from localStorage, and then call the getAccessTokenByCode function to **get the Access token**. Then use the Access token to call the getUserInfoByAccessToken function to **get the user information**. Finally, jump to other pages of the application.

```js
{
  "methods": {
    "getToken": async function(code, codeChallenge) {
      let tokenSet = await this.$authing.getAccessTokenByCode(code, {
        "codeVerifier": codeChallenge
      })
      const { access_token, id_token } = tokenSet
      let userInfo = await this.$authing.getUserInfoByAccessToken(
        tokenSet.access_token
      )
      localStorage.setItem("accessToken", access_token)
      localStorage.setItem("idToken", id_token)
      localStorage.setItem("userInfo", JSON.stringify(userInfo))
    }
  }
}
```

### Use Access token to call resource API

Next, we call the backend interface in the Vue application. You can carry the Access token in the **request header**, and the API server will check the legitimacy and permissions of the Access token, and then return the data.

```vue
<script>
export default {
  name: "UserInfo",
  data: function () {
    return {
      userInfo: "",
    };
  },
  inject: ["$authing"],
  mounted: function () {
    let userInfo = localStorage.getItem("userInfo");
    this.userInfo = userInfo;
  },
  methods: {
    handleResource: async function () {
      try {
        let accessToken = localStorage.getItem("accessToken");
        let res = await fetch("http://localhost:5000/api/protected", {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
          method: "GET",
        });
        let data = await res.json();
        alert(JSON.stringify(data));
      } catch (err) {
        alert("No access to interface");
      }
    },
  },
};
</script>
```

> API server http://localhost:5000/api/protected requires order:read permission scope.

Congratulations 🎉, you have learned how to integrate GenAuth authentication and authorization in Vue single-page web applications and call external resource server interfaces.

## Next you may need

Use GenAuth to protect API interfaces:
::: page-ref /quickstarts/apiServer/nodeJsExpress/
:::

Learning resources, roles, and permission management content:
::: page-ref /guides/access-control/
:::

Self-built application SSO solution:
::: page-ref /guides/app-new/sso/
:::
