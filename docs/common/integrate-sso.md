This article describes how to use the SDK provided by {{$localeConfig.brandName}} in a browser environment to implement [Single Sign-On](/guides/app-new/sso/).

The **SDK Name** used in this article: GenAuth Web SDK, **NPM Package Name**: [@authing/web](https://www.npmjs.com/package/@authing/web).

## GenAuth Web SDK

GenAuth Web SDK provides developers with simple and easy-to-use functions to implement single sign-on in browsers. It is a Web application authentication SDK based on the [OIDC](https://docs.genauth.ai/guides/federation/oidc.html) standard. You can integrate with GenAuth by calling the SDK to help you implement cross-domain [Single Sign-On](/guides/app-new/sso/) for multiple applications in the browser.

GenAuth Web SDK can help you implement cross-domain single sign-on for multiple applications in the browser. It is **currently only suitable for standalone use** and does not support mixed use with Guard or other SDKs.

The functions currently supported by GenAuth Web SDK are as follows:

| Function           | Description                                                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| loginWithRedirect  | Jump to login                                                                                                                     |
| loginWithPopup     | Pop-up login                                                                                                                      |
| isRedirectCallback | Determine whether the current URL is the GenAuth login callback URL, and implement silent login in combination with getLoginState |
| getLoginState      | Get login status                                                                                                                  |
| getUserInfo        | Get user information                                                                                                              |
| logoutWithRedirect | Logout                                                                                                                            |

In addition, GenAuth Web SDK will gradually migrate all GenAuth authentication functions that can be run in browsers from [authing-js-sdk](https://docs.genauth.ai/reference/sdk-for-node/authentication/) in the future, and integrate GenAuth's latest V3 authentication API to provide users with a better user experience.

## Step 1: Create a self-built application

::: hint-info
Refer to [Create a self-built application](https://docs.genauth.ai/guides/app-new/create-app/create-app.html).
:::

## Step 2: Configure single sign-on

::: hint-info
Refer to [Self-built application SSO solution](https://docs.genauth.ai/guides/app-new/sso/create-app-sso.html).
:::

## Step 3: Modify the configuration

Find the applications that have just been configured for single sign-on, enter their **Application Configuration** pages respectively, and fill in the following information:

![](~@imagesZhCn/common/integrate-sso/sso-panel.png)

1. **Authentication configuration**: Configure **Login callback URL**.

![](~@imagesZhCn/common/integrate-sso/sso-callback.png)

2. **Authorization configuration**: **Authorization mode** turn on **authorization_code**, **Return type** turn on **code**.

![](~@imagesZhCn/common/integrate-sso/sso-authorization-configuration.png)

3. If you create a **standard web application**, check **none** for the following `token` verification method.

![](~@imagesZhCn/common/integrate-sso/sso-authorization-token-new.png)

4. Save the current configuration.

::: hint-info
Note that if you use a social identity source or enterprise identity source to log in, and you need to return the `identities` field containing all identity sources when obtaining user information after logging in, you need to enable account association configuration. For details, refer to [Account Association of Identity Source Connection](/guides/connections/account-association.html).
:::

## Step 4: Install SDK

GenAuth Web SDK supports integration into your front-end business software through package managers and script tags.

:::: tabs :options="{ useUrlFragment: false }"
::: tab NPM

```shell
npm install --save @authing/web
```

:::

::: tab Yarn

```shell
yarn add @authing/web
```

:::

::: tab CDN

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://cdn.authing.co/packages/web/5.1.0/index.global.js"></script>
```

:::
::::

## Step 5: Instantiate SDK

::: hint-info
Implementing single sign-on requires at least two applications, so the SDK needs to be instantiated twice and passed in different parameters.
:::

:::: tabs :options="{ useUrlFragment: false }"
::: tab React

```tsx
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/react/website1/src/App.tsx
// App.tsx
import { GenAuth } from "@authing/web";

import React, { useMemo } from "react";

import { GenAuth } from "@authing/web";

function App() {
  const authing = useMemo(() => {
    return new GenAuth({
      // Console -> Applications -> Single Sign-On SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });
  }, []);

  return <div className="App"></div>;
}

export default App;
```

:::

::: tab Vue2

```vue
<!-- Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/vue2/website1/src/App.vue -->
<template>
  <div id="app"></div>
</template>
<script>
import { GenAuth } from "@authing/web";

export default {
  name: "APP",
  data() {
    return {
      authing: null,
    };
  },
  created() {
    this.authing = new GenAuth({
      // Console -> Applications -> Single Sign-On SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });
  },
};
</script>
```

:::

::: tab Vue3

```vue
<script>
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/vue3/website1/src/App.vue
// App.vue
import { defineComponent } from "vue";

import { GenAuth } from "@authing/web";

export default defineComponent({
  name: "App",

  setup() {
    const authing = new GenAuth({
      // Console -> Applications -> Single Sign-On SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });
  },
});
</script>
```

:::

::: tab Angular

```typescript
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/angular/website1/src/app/app.component.ts
// app.component.ts
import { Component } from "@angular/core";

import { GenAuth } from "@authing/web";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  private authing = new GenAuth({
    // Console -> Applications -> Single Sign-On SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
    domain: "GEN_AUTH_DOMAIN_URL",

    // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
    appId: "GEN_AUTH_APP_ID",

    // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
    redirectUri: "YOUR_REDIRECT_URL",

    // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
    userPoolId: "GEN_AUTH_USER_POOL_ID",
  });
}
```

:::

::: tab CDN

```html
<!-- Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/cdn/website1/index.js -->
<script>
  const authing = new AuthingFactory.GenAuth({
    // Console -> Applications -> Single Sign-On SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
    domain: "GEN_AUTH_DOMAIN_URL",

    // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
    appId: "GEN_AUTH_APP_ID",

    // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
    redirectUri: "YOUR_REDIRECT_URL",

    // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
    userPoolId: "GEN_AUTH_USER_POOL_ID",
  });
</script>
```

:::
::::

## Step 6: Initiate login

GenAuth Web SDK can initiate authentication authorization requests to GenAuth, currently supporting three forms:

1. Redirect login: Jump from the current page to the GenAuth hosted login page for login.
2. Popup login: Pop up a window, load the GenAuth hosted login page in the pop-up window, without page jump.
3. Silent login: As mentioned in [Self-built application SSO solution](/guides/app-new/sso/create-app-sso.md), you can add multiple self-built applications to the **Single Sign-On SSO** panel. If a user has logged in to one of these applications, then when they access other applications in the same browser, they can achieve silent login, directly obtaining user information, and achieving single sign-on effect.

### 1. Redirect login

:::: tabs :options="{ useUrlFragment: false }"
::: tab React

```tsx
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/react/website1/src/App.tsx
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { GenAuth } from "@authing/web";

import type { LoginState } from "@authing/web/dist/typings/src/global";

function App() {
  const authing = useMemo(() => {
    return new GenAuth({
      // Console -> Applications -> Single Sign-On SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });
  }, []);

  const [loginState, setLoginState] = useState<LoginState | null>();

  /**
   * Open GenAuth's hosted login page in redirect mode
   */
  const loginWithRedirect = () => {
    // Redirect users to the GenAuth authentication endpoint for login, and use handleRedirectCallback together
    authing.loginWithRedirect();
  };

  /**
   * Get user login status
   */
  const getLoginState = useCallback(async () => {
    const loginState = await authing.getLoginState({
      ignoreCache: true, // Whether to ignore local cache, ignore it to verify user login status in real time
    });
    setLoginState(loginState);
  }, []);

  useEffect(() => {
    // Check if the current URL is the GenAuth login callback URL
    if (authing.isRedirectCallback()) {
      /**
       * Open GenAuth's hosted login page in redirect mode, after successful authentication, you need to use the handleRedirectCallback method,
       * Process the authorization code or token sent by GenAuth in the callback endpoint to obtain user login status
       */
      authing.handleRedirectCallback().then((res) => {
        setLoginState(res);
        // Because the code can only be used once, so here you need to redirect the page to other addresses, here is to refresh the current page as an example:
        window.location.replace("/");
      });
    } else {
      getLoginState();
    }
  }, []);

  return (
    <div className="App">
      <p>
        <button onClick={loginWithRedirect}>Login With Redirect</button>
      </p>
      <p>
        <code>{JSON.stringify(loginState)}</code>
      </p>
    </div>
  );
}

export default App;
```

:::

::: tab Vue2

```vue
<!-- Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/vue2/website1/src/App.vue -->
<template>
  <div id="app">
    <button @click="login">Login With Redirect</button>
    <p v-if="loginState">
      <textarea
        cols="100"
        rows="20"
        readOnly
        :value="JSON.stringify(loginState, null, 2)"
      ></textarea>
    </p>
  </div>
</template>
<script>
import { GenAuth } from "@authing/web";

export default {
  name: "App",

  data() {
    return {
      authing: null,
      loginState: null,
    };
  },

  created() {
    this.authing = new GenAuth({
      // Console -> Applications -> Single Sign-On SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });
  },
  mounted() {
    // Check if the current URL is the login callback address
    if (this.authing.isRedirectCallback()) {
      console.log("redirect");

      /**
       * Open GenAuth's hosted login page in redirect mode, after successful authentication, you need to use the handleRedirectCallback method,
       * Process the authorization code or token sent by GenAuth in the callback endpoint to obtain user login status
       */
      this.authing.handleRedirectCallback().then((res) => {
        this.loginState = res;
        // Because the code can only be used once, so here you need to redirect the page to other addresses, here is to refresh the current page as an example:
        window.location.replace("/");
      });
    } else {
      console.log("normal");

      this.getLoginState();
    }
  },
  methods: {
    /**
     * Open GenAuth's hosted login page in redirect mode
     */
    login() {
      this.authing.loginWithRedirect();
    },
    /**
     * Get user login status
     */
    async getLoginState() {
      const state = await this.authing.getLoginState({
        ignoreCache: true, // Whether to ignore local cache, ignore it to verify user login status in real time
      });
      this.loginState = state;
    },
  },
};
</script>
```

:::

::: tab Vue3

```vue
<!-- Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/vue3/website1/src/App.vue -->
<template>
  <div>
    <button @click="login">Login With Redirect</button>

    <p v-if="loginState">
      <textarea
        cols="100"
        rows="20"
        readOnly
        :value="JSON.stringify(loginState, null, 2)"
      ></textarea>
    </p>
  </div>
</template>
<script>
import { defineComponent, onMounted, reactive, toRefs } from "vue";

import { GenAuth } from "@authing/web";

export default defineComponent({
  name: "App",
  setup() {
    const authing = new GenAuth({
      // Console -> Applications -> Single Sign-On SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });

    const state = reactive({
      loginState: null,
    });

    /**
     * Open GenAuth's hosted login page in redirect mode
     */
    const login = () => {
      authing.loginWithRedirect();
    };

    /**
     * Get user login status
     */
    const getLoginState = async () => {
      const res = await authing.getLoginState({
        ignoreCache: true, // Whether to ignore local cache, ignore it to verify user login status in real time
      });
      state.loginState = res;
    };

    onMounted(() => {
      // Check if the current URL is the login callback URL
      if (authing.isRedirectCallback()) {
        console.log("redirect");

        /**
         * Open GenAuth's hosted login page in redirect mode, after successful authentication, you need to use the handleRedirectCallback method,
         * Process the authorization code or token sent by GenAuth in the callback endpoint to obtain user login status
         */
        authing.handleRedirectCallback().then((res) => {
          state.loginState = res;
          // Because the code can only be used once, so here you need to redirect the page to other addresses, here is to refresh the current page as an example:
          window.location.replace("/");
        });
      } else {
        console.log("normal");

        getLoginState();
      }
    });

    return {
      ...toRefs(state),
      login,
      getLoginState,
    };
  },
});
</script>
```

:::

::: tab Angular

```html
<button (click)="loginWithRedirect()">Login With Redirect</button>

<p *ngIf="loginState">
  <textarea cols="100" rows="20" readonly>{{ loginState | json }}</textarea>
</p>
```

```ts
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/angular/website1/src/app/app.component.ts
import { Component } from "@angular/core";
import { GenAuth } from "@authing/web";
import type { LoginState } from "@authing/web/dist/typings/src/global";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  loginState: LoginState | null = null;

  private authing = new GenAuth({
    // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
    domain: "GEN_AUTH_DOMAIN_URL",

    // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
    appId: "GEN_AUTH_APP_ID",

    // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
    redirectUri: "YOUR_REDIRECT_URL",

    // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
    userPoolId: "GEN_AUTH_USER_POOL_ID",
  });

  ngOnInit() {
    // Check if the current URL is the login callback URL
    if (this.authing.isRedirectCallback()) {
      console.log("redirect");

      /**
       * Open GenAuth's hosted login page in redirect mode, after successful authentication, you need to use the handleRedirectCallback method,
       * Process the authorization code or token sent by GenAuth in the callback endpoint to obtain user login status
       */
      this.authing.handleRedirectCallback().then((res) => {
        this.loginState = res;
        // Because the code can only be used once, so here you need to redirect the page to other addresses, here is to refresh the current page as an example:
        window.location.replace("/");
      });
    } else {
      this.getLoginState();
    }
  }

  /**
   * Open GenAuth's hosted login page in redirect mode
   */
  loginWithRedirect() {
    this.authing.loginWithRedirect();
  }

  /**
   * Get user login status
   */
  async getLoginState() {
    const state = await this.authing.getLoginState({
      ignoreCache: true, // Whether to ignore local cache, ignore it to verify user login status in real time
    });
    this.loginState = state;
  }
}
```

:::

::: tab CDN

```html
<!-- Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/cdn/website1/index.js -->
<button id="loginWithRedirect">Login With Redirect</button>
```

```javascript
const authing = new AuthingFactory.GenAuth({
  // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
  domain: "GEN_AUTH_DOMAIN_URL",

  // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
  appId: "GEN_AUTH_APP_ID",

  // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
  redirectUri: "YOUR_REDIRECT_URL",

  // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
  userPoolId: "GEN_AUTH_USER_POOL_ID",
});

if (authing.isRedirectCallback()) {
  console.log("redirect");
  authing.handleRedirectCallback().then((loginState) => {
    console.log("loginState: ", loginState);
    // Because the code can only be used once, so here you need to redirect the page to other addresses, here is to refresh the current page as an example:
    window.location.replace("/");
  });
} else {
  authing
    .getLoginState({
      ignoreCache: true, // Whether to ignore local cache, ignore it to verify user login status in real time
    })
    .then((loginState) => {
      console.log("loginState: ", loginState);
    });
}

document.querySelector("#loginWithRedirect").onclick = function () {
  authing.loginWithRedirect();
};
```

:::
::::

The `loginWithRedirect` method can also accept the following custom parameters:

:::: tabs :options="{ useUrlFragment: false }"
::: tab React

```js
const params: {
  // Login callback URL, default is redirectUri in initialization parameters
  redirectUri?: string,

  // Force user to login again even if they are already logged in, default is false
  forced?: boolean,
} = {
  redirectUri: "YOUR_REDIRECT_URL",
  forced: true,
};

authing.loginWithRedirect(params);
```

:::

::: tab Vue2

```js
export default {
  methods: {
    login() {
      const params = {
        redirectUri: "YOUR_REDIRECT_URL",

        // Force user to login again even if they are already logged in, default is false
        forced: true,
      };

      this.authing.loginWithRedirect(params);
    },
  },
};
```

:::

::: tab Vue3

```js
export default {
  setup() {
    const login = () => {
      const params = {
        redirectUri: "YOUR_REDIRECT_URL",

        // Force user to login again even if they are already logged in, default is false
        forced: true,
      };

      authing.loginWithRedirect(params);
    };

    return {
      login,
    };
  },
};
```

:::

::: tab Angular

```js
export class AppComponent {
  login() {
    const params: {
      // Login callback URL, default is redirectUri in initialization parameters
      redirectUri?: string,

      // Force user to login again even if they are already logged in, default is false
      forced?: boolean,
    } = {
      redirectUri: "YOUR_REDIRECT_URL",
      forced: true,
    };

    this.authing.loginWithRedirect(params);
  }
}
```

:::

::: tab CDN

```javascript
const params = {
  redirectUri: "YOUR_REDIRECT_URL",

  // Force user to login again even if they are already logged in, default is false
  forced: true,
};

authing.loginWithRedirect(params);
```

:::
::::

### 2. Login with Popup

:::: tabs :options="{ useUrlFragment: false }"
::: tab React

```tsx
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/react/website1/src/App.tsx
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { GenAuth } from "@authing/web";

import type { LoginState } from "@authing/web/dist/typings/src/global";

function App() {
  const authing = useMemo(() => {
    return new GenAuth({
      // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });
  }, []);

  const [loginState, setLoginState] = useState<LoginState | null>();

  /**
   * Open GenAuth's hosted login page in popup mode
   */
  const loginWithPopup = async () => {
    const loginState = await authing.loginWithPopup();
    setLoginState(loginState);
  };

  return (
    <div className="App">
      <p>
        <button onClick={loginWithPopup}>Login With Popup</button>
      </p>
      <p>
        <code>{JSON.stringify(loginState)}</code>
      </p>
    </div>
  );
}

export default App;
```

:::

::: tab Vue2

```vue
<!-- Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/vue2/website1/src/App.vue -->
<template>
  <div id="app">
    <button @click="loginWithPopup">Login With Popup</button>
    <p v-if="loginState">
      <textarea
        cols="100"
        rows="20"
        readOnly
        :value="JSON.stringify(loginState, null, 2)"
      ></textarea>
    </p>
  </div>
</template>
<script>
import { GenAuth } from "@authing/web";

export default {
  name: "App",
  data() {
    return {
      authing: null,
      loginState: null,
    };
  },
  created() {
    this.authing = new GenAuth({
      // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });
  },
  methods: {
    /**
     * Open GenAuth's hosted login page in popup mode
     */
    async loginWithPopup() {
      this.loginState = await this.authing.loginWithPopup();
    },
  },
};
</script>
```

:::

::: tab Vue3

```vue
<!-- Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/vue3/website1/src/App.vue -->
<template>
  <div>
    <button @click="loginWithPopup">Login With Popup</button>
    <p v-if="loginState">
      <textarea
        cols="100"
        rows="20"
        readOnly
        :value="JSON.stringify(loginState, null, 2)"
      ></textarea>
    </p>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from "vue";

import { GenAuth } from "@authing/web";

export default defineComponent({
  name: "App",

  setup() {
    const authing = new GenAuth({
      // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });

    const state = reactive({
      loginState: null,
    });

    /**
     * Open GenAuth's hosted login page in popup mode
     */
    const loginWithPopup = async () => {
      state.loginState = await authing.loginWithPopup();
    };

    return {
      ...toRefs(state),
      loginWithPopup,
    };
  },
});
</script>
```

:::

::: tab Angular

```html
<button (click)="loginWithPopup()">Login With Popup</button>

<p *ngIf="loginState">
  <textarea cols="100" rows="20" readonly>{{ loginState | json }}</textarea>
</p>
```

```ts
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/angular/website1/src/app/app.component.ts
import { Component } from "@angular/core";

import { GenAuth } from "@authing/web";

import type {
  LoginState,
  NormalError,
} from "@authing/web/dist/typings/src/global";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  loginState: LoginState | null = null;

  private authing = new GenAuth({
    // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
    domain: "GEN_AUTH_DOMAIN_URL",

    // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
    appId: "GEN_AUTH_APP_ID",

    // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
    redirectUri: "YOUR_REDIRECT_URL",

    // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
    userPoolId: "GEN_AUTH_USER_POOL_ID",
  });

  /**
   * Open GenAuth's hosted login page in popup mode
   */
  async loginWithPopup() {
    this.loginState = await this.authing.loginWithPopup();
  }
}
```

:::

::: tab CDN

```html
<!-- Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/cdn/website1/index.js -->
<button id="loginWithPopup">Login With Popup</button>
```

```javascript
const authing = new AuthingFactory.GenAuth({
  // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
  domain: "GEN_AUTH_DOMAIN_URL",

  // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
  appId: "GEN_AUTH_APP_ID",

  // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
  redirectUri: "YOUR_REDIRECT_URL",

  // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
  userPoolId: "GEN_AUTH_USER_POOL_ID",
});

document.querySelector("#loginWithPopup").onclick = function () {
  authing.loginWithPopup().then((loginState) => {
    console.log("loginState: ", loginState);
  });
};
```

:::
::::

You can use default parameters or customize parameters as needed:

:::: tabs :options="{ useUrlFragment: false }"

::: tab React

```ts
const login = async () => {
  const params: {
    // Force user to login again even if they are already logged in, default is false
    forced?: boolean;
  } = {
    forced: true,
  };

  const res = await authing.loginWithPopup(params);

  console.log(res);
};
```

:::

::: tab Vue2

```js
export default {
  methods: {
    /**
     * Open GenAuth's hosted login page in popup Mode
     */
    async login() {
      const params = {
        // Force user to login again even if they are already logged in, default is false
        forced: true,
      };
      await this.authing.loginWithPopup(params);
    },
  },
};
```

:::

::: tab Vue3

```js
export default {
  setup() {
    /**
     * Open GenAuth's hosted login page in popup mode
     */
    const login = async () => {
      const params = {
        // Force user to login again even if they are already logged in, default is false
        forced: true,
      };
      await authing.loginWithPopup(params);
    };

    return {
      login,
    };
  },
};
```

:::

::: tab Angular

```ts
export class AppComponent {
  /**
   * Open GenAuth's hosted login page in popup mode
   */
  async login() {
    const params: {
      // Force user to login again even if they are already logged in, default is false
      forced?: boolean;
    } = {
      forced: true,
    };

    const res = await this.authing.loginWithPopup(params);

    console.log(res);
  }
}
```

:::

::: tab CDN

```javascript
const params = {
  // Force user to login again even if they are already logged in, default is false
  forced: true,
};

authing.loginWithPopup(params);
```

:::

::::

### 3. Silent Login

:::: tabs :options="{ useUrlFragment: false }"

::: tab React

```tsx
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/react/website1/src/App.tsx
import React, { useEffect, useMemo, useState } from "react";

import { GenAuth } from "@authing/web";

import type { LoginState } from "@authing/web/dist/typings/src/global";

function App() {
  const authing = useMemo(() => {
    return new GenAuth({
      // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });
  }, []);

  const [loginState, setLoginState] = useState<LoginState | null>();

  useEffect(() => {
    // Check if the current URL is the GenAuth login callback URL
    if (authing.isRedirectCallback()) {
      console.log("redirect");
      /**
       * Open GenAuth's hosted login page in redirect mode, after authentication, you need to use the handleRedirectCallback method to handle the authorization code or token sent by GenAuth, and get the user login state
       */
      authing.handleRedirectCallback().then((res) => {
        setLoginState(res);
        // Because the code can only be used once, here we need to redirect the page to another address, here we use refreshing the current page as an example:
        window.location.replace("/");
      });
    } else {
      console.log("normal");

      // Get user login state
      authing
        .getLoginState({
          ignoreCache: true, // Whether to ignore local cache, ignore it and check user login status in real time from the remote
        })
        .then((res) => {
          if (res) {
            setLoginState(res);
          } else {
            // If the user is not logged in, redirect to the authorization center
            authing.loginWithRedirect();
          }
        });
    }
  }, []);

  return (
    <div>
      <p>
        Access Token: <code>{loginState?.accessToken}</code>
      </p>
      <p>
        User Info: <code>{JSON.stringify(loginState?.parsedIdToken)}</code>
      </p>
      <p>
        Access Token Info:
        <code>{JSON.stringify(loginState?.parsedAccessToken)}</code>
      </p>
      <p>
        Expire At: <code>{loginState?.expireAt}</code>
      </p>
    </div>
  );
}

export default App;
```

:::

::: tab Vue2

```vue
<!-- Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/vue2/website1/src/App.vue -->
<template>
  <div id="app">
    <p v-if="loginState">
      <textarea
        cols="100"
        rows="20"
        readOnly
        :value="JSON.stringify(loginState, null, 2)"
      ></textarea>
    </p>
  </div>
</template>
<script>
import { GenAuth } from "@authing/web";

export default {
  name: "App",

  data() {
    return {
      authing: null,
      loginState: null,
    };
  },

  created() {
    this.authing = new GenAuth({
      // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });
  },

  mounted() {
    // Check if the current URL is the GenAuth login callback URL
    if (this.authing.isRedirectCallback()) {
      console.log("redirect");

      /**
       * Open GenAuth's hosted login page in redirect mode, after authentication, you need to use the handleRedirectCallback method to handle the authorization code or token sent by GenAuth, and get the user login state
       */
      this.authing.handleRedirectCallback().then((res) => {
        this.loginState = res;
        // Because the code can only be used once, here we need to redirect the page to another address, here we use refreshing the current page as an example:
        window.location.replace("/");
      });
    } else {
      console.log("normal");

      this.authing
        .getLoginState({
          ignoreCache: true, // Whether to ignore local cache, ignore it and check user login status in real time from the remote
        })
        .then((res) => {
          this.loginState = res;
          if (!res) {
            // Silent login. If the user information cannot be obtained, redirect to the authorization center
            this.authing.loginWithRedirect();
          }
        });
    }
  },
};
</script>
```

:::

::: tab Vue3

```vue
<!-- Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/vue3/website1/src/App.vue -->
<template>
  <div>
    <p v-if="loginState">
      <textarea
        cols="100"
        rows="20"
        readOnly
        :value="JSON.stringify(loginState, null, 2)"
      ></textarea>
    </p>
  </div>
</template>
<script>
import { defineComponent, onMounted, reactive, toRefs } from "vue";

import { GenAuth } from "@authing/web";

export default defineComponent({
  name: "App",

  setup() {
    const authing = new GenAuth({
      // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });

    const state = reactive({
      loginState: null,
    });

    /**
     * Get user login state
     */
    const getLoginState = async () => {
      const res = await authing.getLoginState({
        ignoreCache: true, // Whether to ignore local cache, ignore it and check user login status in real time from the remote
      });
      state.loginState = res;

      if (!res) {
        authing.loginWithRedirect();
      }
    };

    onMounted(() => {
      // Check if the current URL is the GenAuth login callback URL
      if (authing.isRedirectCallback()) {
        console.log("redirect");

        /**
         * Open GenAuth's hosted login page in redirect mode, after authentication, you need to use the handleRedirectCallback method to handle the authorization code or token sent by GenAuth, and get the user login state
         */
        authing.handleRedirectCallback().then((res) => {
          state.loginState = res;
          // Because the code can only be used once, here we need to redirect the page to another address, here we use refreshing the current page as an example:
          window.location.replace("/");
        });
      } else {
        console.log("normal");
        // Silent login, directly get user information
        getLoginState({
          ignoreCache: true, // Whether to ignore local cache, ignore it and check user login status in real time from the remote
        });
      }
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>
```

:::

::: tab Angular

```ts
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/angular/website1/src/app/app.component.ts
import { Component } from "@angular/core";

import { GenAuth } from "@authing/web";

import type { LoginState } from "@authing/web/dist/typings/src/global";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  loginState: LoginState | null = null;

  private authing = new GenAuth({
    // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
    domain: "GEN_AUTH_DOMAIN_URL",

    // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
    appId: "GEN_AUTH_APP_ID",

    // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
    redirectUri: "YOUR_REDIRECT_URL",

    // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
    userPoolId: "GEN_AUTH_USER_POOL_ID",
  });

  ngOnInit() {
    // Check if the current URL is the GenAuth login callback URL
    if (this.authing.isRedirectCallback()) {
      console.log("redirect");

      /**
       * Open GenAuth's hosted login page in redirect mode, after authentication, you need to use the handleRedirectCallback method to handle the authorization code or token sent by GenAuth, and get the user login state
       */
      this.authing.handleRedirectCallback().then((res) => {
        this.loginState = res;
        // Because the code can only be used once, here we need to redirect the page to another address, here we use refreshing the current page as an example:
        window.location.replace("/");
      });
    } else {
      console.log("normal");

      this.getLoginState({
        ignoreCache: true, // Whether to ignore local cache, ignore it and check user login status in real time from the remote
      });
    }
  }

  /**
   * Get user login state
   */
  async getLoginState() {
    const res = await this.authing.getLoginState({
      ignoreCache: true, // Whether to ignore local cache, ignore it and check user login status in real time from the remote
    });
    if (res) {
      this.loginState = res;
    } else {
      // Silent login. If the user information cannot be obtained, redirect to the authorization center
      this.authing.loginWithRedirect();
    }
  }
}
```

:::

::: tab CDN

```javascript
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/cdn/website1/index.js
var authing = new AuthingFactory.GenAuth({
  // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
  domain: "GEN_AUTH_DOMAIN_URL",

  // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
  appId: "GEN_AUTH_APP_ID",

  // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
  redirectUri: "YOUR_REDIRECT_URL",

  // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
  userPoolId: "GEN_AUTH_USER_POOL_ID",
});

if (authing.isRedirectCallback()) {
  console.log("redirect");
  authing.handleRedirectCallback().then((loginState) => {
    console.log("loginState: ", loginState);
    // Because the code can only be used once, here we need to redirect the page to another address, here we use refreshing the current page as an example:
    window.location.replace("/");
  });
} else {
  authing
    .getLoginState({
      ignoreCache: true, // Whether to ignore local cache, ignore it and check user login status in real time from the remote
    })
    .then((loginState) => {
      console.log("loginState: ", loginState);
      if (!loginState) {
        // Silent login. If the user information cannot be obtained, redirect to the authorization center
        authing.loginWithRedirect();
      }
    });
}
```

:::
::::

### 4. Advanced Usage

GenAuth Web SDK uses default parameters by default. If you need to finely control the login request parameters, you can refer to this example.

```js
import { GenAuth } from '@authing/web'

const authing = new GenAuth({
  // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
  domain: 'GEN_AUTH_DOMAIN_URL',

  // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
  appId: 'GEN_AUTH_APP_ID',

  // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
  redirectUri: 'YOUR_REDIRECT_URL',

  // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
  userPoolId: 'GEN_AUTH_USER_POOL_ID'

  // Permissions requested by the application side to GenAuth, separated by spaces, the default is 'openid profile'
  scope: 'openid email phone profile',

  // Where to carry the identity credentials when the callback is performed, the default is fragment
  // fragment: Carry in the URL hash
  // query: Carry in the query parameters
  responseMode: 'fragment',

  // Whether to use OIDC implicit mode instead of the default PKCE mode
  // Because the implicit mode has lower security, it is not recommended to use it, only for compatibility with browsers that do not support crypto
  useImplicitMode: false,

  // The type of credentials returned by the implicit mode, the default is 'token id_token'
  // token: Return Access Token
  // id_token: Return ID Token
  implicitResponseType: 'token id_token',

  // Whether to request GenAuth to check the validity of the Access Token each time the login state is obtained, which can be used for single sign-out scenarios, the default is false
  // If set to true, you need to set the "Application Configuration" - "Other Configuration" - "Check token identity verification method" to none in the console
  introspectAccessToken: false,

  // The width of the popup window
  popupWidth: 500,

  // The height of the popup window
  popupHeight: 600,
});
```

## 5. After Login

### Get Login State

If you want to get the user login state, such as `Access Token`、`ID Token`, you can call the `getLoginState` method. If the user has not logged in to GenAuth, the login state is `null`:

:::: tabs :options="{ useUrlFragment: false }"

::: tab React

```tsx
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/react/website1/src/App.tsx
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { GenAuth } from "@authing/web";

import type { LoginState } from "@authing/web/dist/typings/src/global";

function App() {
  const authing = useMemo(() => {
    return new GenAuth({
      // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });
  }, []);

  const [loginState, setLoginState] = useState<LoginState | null>();

  /**
   * Get user login state
   */
  const getLoginState = useCallback(async () => {
    const loginState = await authing.getLoginState({
      ignoreCache: true, // Whether to ignore local cache, ignore it and check user login status in real time from the remote
    });
    setLoginState(loginState);
  }, []);

  return (
    <div className="App">
      <p>
        <code>{JSON.stringify(loginState)}</code>
      </p>
    </div>
  );
}

export default App;
```

:::

::: tab Vue2

```vue
<!-- Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/vue2/website1/src/App.vue -->
<template>
  <div id="app">
    <button @click="getLoginState">Get Login State</button>
    <p v-if="loginState">
      <textarea
        cols="100"
        rows="20"
        readOnly
        :value="JSON.stringify(loginState, null, 2)"
      ></textarea>
    </p>
  </div>
</template>
<script>
import { GenAuth } from "@authing/web";

export default {
  name: "App",

  data() {
    return {
      authing: null,
      loginState: null,
    };
  },

  created() {
    this.authing = new GenAuth({
      // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });
  },

  methods: {
    /**
     * Get user login state
     */
    async getLoginState() {
      const state = await this.authing.getLoginState({
        ignoreCache: true, // Whether to ignore local cache, ignore it and check user login status in real time from the remote
      });
      this.loginState = state;
    },
  },
};
</script>
```

:::

::: tab Vue3

```vue
<!-- Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/vue3/website1/src/App.vue -->
<template>
  <div>
    <button @click="getLoginState">Get Login State</button>
    <p v-if="loginState">
      <textarea
        cols="100"
        rows="20"
        readOnly
        :value="JSON.stringify(loginState, null, 2)"
      ></textarea>
    </p>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from "vue";

import { GenAuth } from "@authing/web";

export default defineComponent({
  name: "App",

  setup() {
    const authing = new GenAuth({
      // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });

    const state = reactive({
      loginState: null,
    });

    /**
     * Get user login state
     */
    const getLoginState = async () => {
      const res = await authing.getLoginState({
        ignoreCache: true, // Whether to ignore local cache, ignore it and check user login status in real time from the remote
      });
      state.loginState = res;
    };

    return {
      ...toRefs(state),
      getLoginState,
    };
  },
});
</script>
```

:::

::: tab Angular

```ts
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/angular/website1/src/app/app.component.ts
import { Component } from "@angular/core";

import { GenAuth } from "@authing/web";

import type { LoginState } from "@authing/web/dist/typings/src/global";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  loginState: LoginState | null = null;

  private authing = new GenAuth({
    // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
    domain: "GEN_AUTH_DOMAIN_URL",

    // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
    appId: "GEN_AUTH_APP_ID",

    // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
    redirectUri: "YOUR_REDIRECT_URL",

    // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
    userPoolId: "GEN_AUTH_USER_POOL_ID",
  });

  /**
   * Get user login state
   */
  async getLoginState() {
    this.loginState = await this.authing.getLoginState({
      ignoreCache: true, // Whether to ignore local cache, ignore it and check user login status in real time from the remote
    });
  }
}
```

:::

::: tab CDN

```javascript
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/cdn/website1/index.js
const authing = new AuthingFactory.GenAuth({
  // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
  domain: "GEN_AUTH_DOMAIN_URL",

  // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
  appId: "GEN_AUTH_APP_ID",

  // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
  redirectUri: "YOUR_REDIRECT_URL",

  // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
  userPoolId: "GEN_AUTH_USER_POOL_ID",
});

document.querySelector("#getLoginState").onclick = function () {
  authing
    .getLoginState({
      ignoreCache: true, // Whether to ignore local cache, ignore it and check user login status in real time from the remote
    })
    .then((loginState) => {
      console.log("loginState: ", loginState);
    });
};
```

:::
::::

### Get User Information

:::: tabs :options="{ useUrlFragment: false }"

::: tab React

```tsx
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/react/website1/src/App.tsx
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { GenAuth } from "@authing/web";

import type {
  IUserInfo,
  NormalError,
} from "@authing/web/dist/typings/src/global";

function App() {
  const authing = useMemo(() => {
    return new GenAuth({
      // Console -> Applications -> Single Sign-On SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });
  }, []);

  const [userInfo, setUserInfo] = useState<IUserInfo | NormalError | null>();

  /**
   * Get user information using Access Token
   */
  const getUserInfo = async () => {
    const userInfo = await authing.getUserInfo();
    setUserInfo(userInfo);
  };

  return (
    <div className="App">
      <p>
        <button onClick={getUserInfo}>Get User Info</button>
      </p>
      <p>
        User Info:
        <code>{JSON.stringify(userInfo)}</code>
      </p>
    </div>
  );
}

export default App;
```

:::

::: tab Vue2

```vue
<!-- Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/vue2/website1/src/App.vue -->
<template>
  <div id="app">
    <button @click="getUserInfo">Get User Info</button>
    <p v-if="userInfo">
      <textarea
        cols="100"
        rows="15"
        readOnly
        :value="JSON.stringify(userInfo, null, 2)"
      ></textarea>
    </p>
  </div>
</template>
<script>
import { GenAuth } from "@authing/web";

export default {
  name: "App",

  data() {
    return {
      authing: null,
      userInfo: null,
    };
  },

  created() {
    this.authing = new GenAuth({
      // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });
  },

  methods: {
    /**
     * Get user information
     */
    async getUserInfo() {
      const userInfo = await this.authing.getUserInfo();
      this.userInfo = userInfo;
    },
  },
};
</script>
```

:::

::: tab Vue3

```vue
<!-- Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/vue3/website1/src/App.vue -->
<template>
  <div id="app">
    <button @click="getUserInfo">Get User Info</button>
    <p v-if="userInfo">
      <textarea
        cols="100"
        rows="15"
        readOnly
        :value="JSON.stringify(userInfo, null, 2)"
      ></textarea>
    </p>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from "vue";
import { GenAuth } from "@authing/web";

export default defineComponent({
  name: "App",

  setup() {
    const authing = new GenAuth({
      // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",
    });

    const state = reactive({
      userInfo: null,
    });

    /**
     * Get user information
     */
    const getUserInfo = async () => {
      const userInfo = await authing.getUserInfo();
      state.userInfo = userInfo;
    };

    return {
      ...toRefs(state),
      getUserInfo,
    };
  },
});
</script>
```

:::

::: tab Angular

```html
<!-- app.component.html -->
<button (click)="getUserInfo()">Get User Info</button>

<p *ngIf="userInfo">
  <textarea cols="100" rows="15" readonly>{{ userInfo | json }}</textarea>
</p>
```

```ts
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/angular/website1/src/app/app.component.ts
// app.component.ts
import { Component } from "@angular/core";

import { GenAuth } from "@authing/web";

import type {
  IUserInfo,
  NormalError,
} from "@authing/web/dist/typings/src/global";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  userInfo: IUserInfo | NormalError | null = null;

  private authing = new GenAuth({
    // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
    domain: "GEN_AUTH_DOMAIN_URL",

    // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
    appId: "GEN_AUTH_APP_ID",

    // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
    redirectUri: "YOUR_REDIRECT_URL",

    // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
    userPoolId: "GEN_AUTH_USER_POOL_ID",
  });

  /**
   * Get user information
   */
  async getUserInfo() {
    this.userInfo = await this.authing.getUserInfo();
  }
}
```

:::

::: tab CDN

```html
<button id="getUserInfo">Get User Info</button>
```

```javascript
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/cdn/website1/index.js
const authing = new AuthingFactory.GenAuth({
  // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
  domain: "GEN_AUTH_DOMAIN_URL",

  // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
  appId: "GEN_AUTH_APP_ID",

  // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
  redirectUri: "YOUR_REDIRECT_URL",

  // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
  userPoolId: "GEN_AUTH_USER_POOL_ID",
});

document.querySelector("#getUserInfo").onclick = function () {
  authing.getUserInfo().then((userInfo) => {
    console.log("userInfo: ", userInfo);
  });
};
```

:::
::::

### Logout

You can call the SDK's `logoutWithRedirect` method to log out.

::: hint-info
If you are using the "single sign-out" feature, you need to pass in the `introspectAccessToken` parameter and set it to `true` when instantiating the SDK.
:::

:::: tabs :options="{ useUrlFragment: false }"

::: tab React

```tsx
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/react/website1/src/App.tsx
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { GenAuth } from "@authing/web";

function App() {
  const authing = useMemo(() => {
    return new GenAuth({
      // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",

      // Whether to request GenAuth to check the validity of the Access Token when getting the login state, which can be used in the "single sign-out" scenario, and the default is false
      // If set to true, you need to set "Verification method for token identity" to "none" in the "Application configuration" -> "Other configuration" in the console.
      introspectAccessToken: true,
    });
  }, []);

  /**
   * Logout
   */
  const logoutWithRedirect = async () => {
    await authing.logoutWithRedirect({
      // Optional, if you pass in this parameter, you need to configure the "Logout callback URL" in the console
      redirectUri: "YOUR_REDIRECT_URL",
    });
  };

  return (
    <div className="App">
      <p>
        <button onClick={logoutWithRedirect}>Logout With Redirect</button>
      </p>
    </div>
  );
}

export default App;
```

:::

::: tab Vue2

```vue
<!-- Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/vue2/website1/src/App.vue -->
<template>
  <div id="app">
    <button @click="logoutWithRedirect">Logout With Redirect</button>
  </div>
</template>
<script>
import { GenAuth } from "@authing/web";

export default {
  name: "App",

  data() {
    return {
      authing: null,
    };
  },

  created() {
    this.authing = new GenAuth({
      // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",

      // Whether to request GenAuth to check the validity of the Access Token when getting the login state, which can be used in the "single sign-out" scenario, and the default is false
      // If set to true, you need to set "Verification method for token identity" to "none" in the "Application configuration" -> "Other configuration" in the console.
      introspectAccessToken: true,
    });
  },

  methods: {
    /**
     * Logout
     */
    logoutWithRedirect() {
      this.authing.logoutWithRedirect({
        // Optional, if you pass in this parameter, you need to configure the "Logout callback URL" in the console
        redirectUri: "YOUR_REDIRECT_URL",
      });
    },
  },
};
</script>
```

:::

::: tab Vue3

```vue
<!-- Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/vue3/website1/src/App.vue -->
<template>
  <div id="app">
    <button @click="logoutWithRedirect">Logout With Redirect</button>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { GenAuth } from "@authing/web";

export default defineComponent({
  name: "App",

  setup() {
    const authing = new GenAuth({
      // Console -> Applications -> Single Sign-On SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
      domain: "GEN_AUTH_DOMAIN_URL",

      // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
      appId: "GEN_AUTH_APP_ID",

      // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
      redirectUri: "YOUR_REDIRECT_URL",

      // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
      userPoolId: "GEN_AUTH_USER_POOL_ID",

      // Whether to request GenAuth to check the validity of the Access Token when getting the login state, which can be used in the "single sign-out" scenario, and the default is false
      // If set to true, you need to set "Verification method for token identity" to "none" in the "Application configuration" -> "Other configuration" in the console.
      introspectAccessToken: true,
    });

    /**
     * Logout
     */
    const logoutWithRedirect = () => {
      authing.logoutWithRedirect({
        // Optional, if you pass in this parameter, you need to configure the "Logout callback URL" in the console
        redirectUri: "YOUR_REDIRECT_URL",
      });
    };

    return {
      logoutWithRedirect,
    };
  },
});
</script>
```

:::

::: tab Angular

```html
<button (click)="logoutWithRedirect()">Logout With Redirect</button>
```

```ts
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/angular/website1/src/app/app.component.ts
import { Component } from "@angular/core";

import { GenAuth } from "@authing/web";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  private authing = new GenAuth({
    // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
    domain: "GEN_AUTH_DOMAIN_URL",

    // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
    appId: "GEN_AUTH_APP_ID",

    // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
    redirectUri: "YOUR_REDIRECT_URL",

    // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
    userPoolId: "GEN_AUTH_USER_POOL_ID",

    // Whether to request GenAuth to check the validity of the Access Token when getting the login state, which can be used in the "single sign-out" scenario, and the default is false
    // If set to true, you need to set "Verification method for token identity" to "none" in the "Application configuration" -> "Other configuration" in the console.
    introspectAccessToken: true,
  });

  /**
   * Logout
   */
  logoutWithRedirect() {
    this.authing.logoutWithRedirect({
      // Optional, if you pass in this parameter, you need to configure the "Logout callback URL" in the console
      redirectUri: "YOUR_REDIRECT_URL",
    });
  }
}
```

:::
::: tab CDN

```html
<button id="logoutWithRedirect">Logout With Redirect</button>
```

```javascript
// Example: https://github.com/Authing/authing-js-sdk/blob/master/examples/web/sso/cdn/website1/index.js
const authing = new AuthingFactory.GenAuth({
  // Console -> Applications -> Single Sign-on SSO -> Configuration -> Application panel address, such as: https://my-awesome-sso.genauth.ai
  domain: "GEN_AUTH_DOMAIN_URL",

  // Console -> Custom Applications -> Click into the corresponding application -> Endpoint Information -> APP ID
  appId: "GEN_AUTH_APP_ID",

  // Console -> Custom Applications -> Click into the corresponding application -> Authentication Configuration -> Login callback URL
  redirectUri: "YOUR_REDIRECT_URL",

  // Console -> Settings -> Basic Settings -> Basic Information -> User Pool ID
  userPoolId: "GEN_AUTH_USER_POOL_ID",

  // Whether to request GenAuth to check the validity of the Access Token when getting the login state, which can be used in the "single sign-out" scenario, and the default is false
  // If set to true, you need to set "Verification method for token identity" to "none" in the "Application configuration" -> "Other configuration" in the console.
  introspectAccessToken: true,
});

document.querySelector("#logoutWithRedirect").onclick = function () {
  authing.logoutWithRedirect({
    // Optional, if you pass in this parameter, you need to configure the "Logout callback URL" in the console
    redirectUri: "YOUR_REDIRECT_URL",
  });
};
```

:::
::::

## Get Help <a id="get-help"></a>

Please visit [GenAuth Forum](https://forum.genauth.ai/).
