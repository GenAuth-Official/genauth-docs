# React Native

This guide will start with the installation of the GenAuth React Native SDK and step by step guide you on how to quickly add user authentication and management capabilities to your existing or newly developed applications.

<AppDetailSiderBar />

## Installation

```shell
# Install the React Native SDK
yarn add @authing/rn

# Install the dependencies required by the SDK
yarn add react-native-gesture-handler react-native-webview
```

## Authenticate your users

### Initialization

```js
//Accessing AuthingGuard is very simple. In the simplest case, you only need to specify the application id and the callback function for the successful login event.
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { AuthingGuard } from "@authing/rn";

const App = () => {
  const appId = "GEN_AUTH_APP_ID"; // Application ID
  const onLogin = (userInfo) => {
    /*
     * After the user successfully logs in, the user information userInfo will be called back to the passed in onLogin function.
     * User information includes GenAuth user ID, avatar, nickname, etc., as well as login credentials token
     */
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <AuthingGuard appId={appId} onLogin={onLogin} />
      </SafeAreaView>
    </>
  );
};

export default App;
```

## Manage your users

### Initialization

```shell
# Install js-sdk
yarn add authing-js-sdk
```

```js
import { ManagementClient } from "authing-js-sdk";

const managementClient = new ManagementClient({
  userPoolId: "GEN_AUTH_USERPOOL_ID", // User pool ID
  secret: "GEN_AUTH_USERPOOL_SECRET", // User pool key
});
```

### Simple user management

```js
// Create user
managementClient.create({
  email: "admin@test.com",
  password: "test",
});
```

## Error handling

```js
<AuthingGuard
  appId={appId}
  onLogin={onLogin}
  onLoginError={(error) => {
    // If there is an error, each error code can be used to handle the error
  }}
/>;

// Management module You can use try catch for error handling.
try {
  managementClient.create({
    email: "admin@test.com",
    password: "test",
  });
} catch (e) {}
```
