# React

This guide will start with the installation of the GenAuth Browser SDK and step by step guide you on how to quickly add user authentication capabilities to your existing or newly developed React application.

<AppDetailSiderBar />

## Installation

```bash
#Install using Yarn
$ yarn add @authing/web
```

## Authenticate your user

### Initialize

```js
import { GenAuth } from "@authing/web";

const sdk = new GenAuth({
  domain: "GEN_AUTH_DOMAIN", // Authentication address of the application
  appId: "GEN_AUTH_APP_ID", // Application ID
  redirectUri: "GEN_AUTH_REDIRECTURI", // Login callback address
});
```

### Simple authentication user

````tsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { GenAuth } from "@authing/web";
import type { LoginState } from "@authing/web/dist/typings/global";

function App() {
const sdk = useMemo(() => {
return new GenAuth({
domain: "GEN_AUTH_DOMAIN",
appId: "GEN_AUTH_APP_ID",
redirectUri: "GEN_AUTH_REDIRECTURI",
});
}, []);

const [loginState, setLoginState] = useState<LoginState | null>();

// Open the login page hosted by GenAuth in a redirection mode

const login = () => {
sdk.loginWithRedirect();
};

// Get the user's login status

const getLoginState = useCallback(async () => {
try {
const state = await sdk.getLoginState();
setLoginState(state);
} catch (error) {
console.log(error);
}
}, [sdk]);

useEffect(() => {
// Determine whether the current URL is the GenAuth login callback URL
if (sdk.isRedirectCallback()) {
/**
* Open the login page hosted by GenAuth in a redirect mode. After successful authentication, you need to cooperate with the
* handleRedirectCallback method to process the
* authorization code or token sent by GenAuth at the callback endpoint to obtain the user login status
*/
sdk.handleRedirectCallback().then((res) => setLoginState(res));
} else {
getLoginState();
}
}, [getLoginState, sdk]);

return (
<div className="App">
<p>
<button onClick={login}>loginWithRedirect</button>
</p>
<p>
<code>{JSON.stringify(loginState)}</code>
</p>
</div>
); } export default App; ``` ## Error handling ```ts const getLoginState = useCallback(async () => { try { const state = await sdk.getLoginState(); setLoginState(state); } catch (error) { console.log(error); } }, [sdk]); ```
````
