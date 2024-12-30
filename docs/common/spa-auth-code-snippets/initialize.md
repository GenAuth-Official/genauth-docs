<!-- Initialize SDK -->

```js
import { GenAuth } from "@authing/web";

const sdk = new GenAuth({
  // Application authentication address, e.g.: https://domain.genauth.ai
  domain: "Authentication Address",
  appId: "GEN_AUTH_APP_ID",
  // Login callback URL, needs to be specified in console "Application Configuration - Login Callback URL"
  redirectUri: "Login Callback URL",
});
```
