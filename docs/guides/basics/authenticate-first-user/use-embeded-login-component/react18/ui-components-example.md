**First, install the GenAuth library through npm/yarn/cnpm.**

It is recommended to use npm (stable version v3.1.21) or yarn, which can better cooperate with the [webpack](https://webpack.js.org/) packaging tool, and can also be safely packaged and deployed in the production environment to enjoy the many benefits brought by the entire ecosystem and tool chain.
If your network environment is not good, you can also use [cnpm](https://github.com/cnpm/cnpm) .

Run the following command line to install the GenAuth React.JS library:

```sh
$ yarn add @authing/guard-react18

# OR

$ npm install @authing/guard-react18 --save
```

**Then, complete the configuration in your React application:**

`App.tsx`

```js
// Code example: https://github.com/Authing/Guard/blob/master/examples/guard-react18/normal/src/App.tsx
import React from "react";
import { GuardProvider } from "@authing/guard-react18";
import "@authing/guard-react18/dist/esm/guard.min.css";

// Your business code root component
import RouterComponent from "./router";

const App = () => {
  return (
    <GuardProvider
      appId="GEN_AUTH_APP_ID"
      // If you are using a privately deployed GenAuth service, you need to pass in a custom host, such as:
      // host="https://my-authing-app.example.com"

      // By default, the first callback address you configured in the GenAuth console will be used as the callback address for this authentication.
      // If you have configured multiple callback addresses, you can also specify them manually (this address also needs to be added to the "Login Callback URL" of the application):
      // redirectUri="YOUR_REDIRECT_URI"
    >
      <RouterComponent></RouterComponent>
    </GuardProvider>
  );
};
```

`Embed.tsx`

```js
// Code example: https://github.com/Authing/Guard/blob/master/examples/guard-react18/normal/src/pages/Embed.tsx
import React, { useEffect } from "react";
import { useGuard, User } from "@authing/guard-react18";

export default function Login() {
  // Get Guard instance
  const guard = useGuard();

  useEffect(() => {
    // Use the start method to mount the Guard component to the DOM node you specify, and return userInfo after successful login
    guard.start("#authing-guard-container").then((userInfo: User) => {
      console.log("userInfo: ", userInfo);
    });
  }, []);

  return (
    <div>
      <div id="authing-guard-container"></div>
    </div>
  );
}
```
