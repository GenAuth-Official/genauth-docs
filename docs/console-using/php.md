# Node.js/Javascript

This guide will start with the installation of the GenAuth Node.js/Javascript SDK and step by step guide you on how to quickly add user authentication and management capabilities to your existing or newly developed applications.

<AppDetailSiderBar />

## Installation

```yarn
# Install using `yarn`
yarn add authing-js-sdk
```

## Authenticate your users

### Initialization

```js
const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID", // Application ID
  secret: "GEN_AUTH_SECRET", // Application Secret
  appHost: "GEN_AUTH_DOMAIN", // User pool domain name corresponding to the application
  redirectUri: "GEN_AUTH_REDIRECTURI", // Redirect target URL after authentication is completed
});
```

### Simple authentication user

```js
//Generate user login link for OIDC protocol
const data = authenticationClient.buildAuthorizeUrl({
  scope: "openid profile offline_access",
});
```

## Manage your users

### Initialization

```javascript
import { ManagementClient } from "authing-js-sdk";
const managementClient = new ManagementClient({
  userPoolId: "GEN_AUTH_USERPOOL_ID", // User Pool ID
  secret: "GEN_AUTH_USERPOOL_SECRET", // User Pool Key
});
```

### Simple User Management

```js
//Create User
const data = await managementClient.users.create({
  email: "admin@test.com",
  password: "password",
});
```

## Error Handling

```js
try {
  const user = await authing.loginByEmail("test@example.com", "passw0rd");
} catch (error) {
  console.log(error.code); // 2004
  console.log(error.message); // User does not exist
}
```
