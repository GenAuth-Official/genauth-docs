# Vue

This guide will start with the installation of the GenAuth Browser SDK and step by step guide you on how to quickly add user authentication capabilities to your existing or newly developed Vue applications.

<AppDetailSiderBar />

## Installation

```bash
# Install using Yarn
$ yarn add @authing/web
```

## Authenticate your user

### Initialization

```js
import { GenAuth } from "@authing/web";

const sdk = new GenAuth({
  domain: "GEN_AUTH_DOMAIN", // Authentication address of the application
  appId: "GEN_AUTH_APP_ID", // Application ID
  redirectUri: "GEN_AUTH_REDIRECTURI", // Login callback address
});
```

### Simple authentication user

```js
import { GenAuth } from '@authing/web';

export default {
name: 'App',
data() {
return {
sdk: null,
loginState: null,
};
},
created() {
this.sdk = new GenAuth({
domain: 'GEN_AUTH_DOMAIN',
appId: 'GEN_AUTH_APP_ID',
redirectUri: 'GEN_AUTH_REDIRECTURI',
});
},
mounted() {
// Determine whether the current URL is the GenAuth login callback URL
if (this.sdk.isRedirectCallback()) {
console.log('redirect');

/**
* Open the login page hosted by GenAuth in a redirect mode. After successful authentication,
* You need to cooperate with the handleRedirectCallback method to process the authorization code or token sent by GenAuth in the callback endpoint to obtain the user login status
*/
this.sdk.handleRedirectCallback().then((res) => {
this.loginState = res;
window.location.replace('/');
});
} else {
this.getLoginState();
}
},
methods: {

// Open in a redirect mode Login page hosted by GenAuth

login() {
this.sdk.loginWithRedirect();
},

// Get the user's login status

async getLoginState() {
try {
const state = await this.sdk.getLoginState();
this.loginState = state;
} catche(error) {
console.log(error);
}
},
},
};
```

## Error handling

```js
async getLoginState() {
try {
const state = await this.sdk.getLoginState();
this.loginState = state;
} catche(error) {
console.log(error);
}
},
```
