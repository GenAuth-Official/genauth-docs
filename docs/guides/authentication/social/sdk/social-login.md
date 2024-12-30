Taking GitHub social login as an example, you only need to implement the following lines of code:

- Initialize `AuthenticationClient` with the application ID. You can view the application ID on the application list page of the console.
- Call the `authenticationClient.social.authorize` method, passing `github` as the first parameter, and specifying the `onSuccess` and `onError` callback functions as the second parameter.
- After the user successfully logs in, you can get the user information in the `onSuccess` callback function; if the login fails, you can get the error code and error information in the `onError` callback function. For a complete list of error codes, see: Error Code List.

```javascript
import { AuthenticationClient } from "authing-js-sdk";

const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "https://xxx.genauth.ai",
});

// Sign in with GitHub
await authenticationClient.social.authorize("github", {
  onSuccess: (user) => {
    console.log(user);
  },
  onError: (code, message) => {},
});
```
