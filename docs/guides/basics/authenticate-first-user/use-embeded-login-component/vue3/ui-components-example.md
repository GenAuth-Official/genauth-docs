**First, install the GenAuth library through npm/yarn/cnpm.**

It is recommended to use npm (stable version v3.1.21) or yarn, which can better cooperate with the [webpack](https://webpack.js.org/) packaging tool, and can also be safely packaged and deployed in the production environment to enjoy the many benefits brought by the entire ecosystem and tool chain.
If your network environment is not good, you can also use [cnpm](https://github.com/cnpm/cnpm) .

Run the following command line to install the GenAuth Vue.JS library:

```sh
$ yarn add @authing/guard-vue3

# OR

$ npm install @authing/guard-vue3 --save
```

**Then, complete the configuration in your Vue application:**

`main.ts`

```js
// Code example: https://github.com/Authing/Guard/blob/master/examples/guard-vue3/normal/src/main.ts
import { createApp } from "vue";
import { createGuard } from "@authing/guard-vue3";
import "@authing/guard-vue3/dist/esm/guard.min.css";
// Your business code root component
import App from "./App.vue";

const app = createApp(App);

app.use(
  createGuard({
    appId: "GEN_AUTH_APP_ID",
    // If you are using a privately deployed GenAuth service, you need to pass in a custom host, such as:
    // host: 'https://my-authing-app.example.com',

    // By default, the first callback address you configured in the GenAuth console will be used as the callback address for this authentication.
    // If you have configured multiple callback addresses, you can also specify them manually (this address also needs to be added to the "Login Callback URL" of the application):
    // redirectUri: "YOUR_REDIRECT_URI"
  })
);
```

`Embed.vue`

```vue
<template>
  <!-- Code example: https://github.com/Authing/Guard/blob/master/examples/guard-vue3/normal/src/views/Embed.vue -->
  <div id="authing-guard-container"></div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useGuard } from "@authing/guard-vue3";
import type { User } from "@authing/guard-vue3";

const guard = useGuard();

onMounted(() => {
  // Use the start method to mount the Guard component to the DOM node you specify, and return userInfo after successful login
  guard.start("#authing-guard-container").then((userInfo: User) => {
    console.log("userInfo: ", userInfo);
  });
});
</script>
```
