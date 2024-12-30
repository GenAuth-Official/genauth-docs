**First, install the GenAuth library through npm/yarn/cnpm.**

It is recommended to use npm (stable version v3.1.21) or yarn, which can better cooperate with the [webpack](https://webpack.js.org/) packaging tool, and can also be safely packaged and deployed in the production environment to enjoy the many benefits brought by the entire ecosystem and tool chain.
If your network environment is not good, you can also use [cnpm](https://github.com/cnpm/cnpm) .

Run the following command line to install the GenAuth Vue.JS library:

```sh
$ yarn add @authing/guard-vue2

# OR

$ npm install @authing/guard-vue2 --save
```

**Then, complete the configuration in your Vue application:**

`main.js`

```js
// Code example: https://github.com/Authing/Guard/blob/master/examples/guard-vue2/normal/src/main.js
import Vue from "vue";
import { GuardPlugin } from "@authing/guard-vue2";
import "@authing/guard-vue2/dist/esm/guard.min.css";

Vue.use(GuardPlugin, {
  appId: "GEN_AUTH_APP_ID",

  // If you are using a privately deployed GenAuth service, you need to pass in a custom host, such as:
  // host: 'https://my-authing-app.example.com',

  // By default, the first callback address you configured in the GenAuth console will be used as the callback address for this authentication.
  // If you have configured multiple callback addresses, you can also specify them manually (this address also needs to be added to the "Login Callback URL" of the application):
  // redirectUri: "YOUR_REDIRECT_URI"
});
```

`Embed.vue`

```vue
<template>
  <!--Code example: https://github.com/Authing/Guard/blob/master/examples/guard-vue2/normal/src/views/Embed.vue -->
  <div id="authing-guard-container"></div>
</template>
<script>
export default {
  mounted() {
    // // Use the start method to mount the Guard component to the DOM node you specify, and return userInfo after successful login
    this.$guard.start("#authing-guard-container").then((userInfo) => {
      console.log("userInfo: ", userInfo);
    });
  },
};
</script>
```
