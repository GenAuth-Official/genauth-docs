To implement WeChat PC applet scanning code login, you only need to implement the following lines of code:

- Initialize `AuthenticationClient` through the application ID. You can view the application ID on the application list page of the console.
- Call the `authenticationClient.wxqrcode.startScanning` method, the first parameter passes in the mounted DOM element node ID, and the second parameter specifies the onSuccess and onError callback functions.
- After the user successfully logs in, you can get the user information in the onSuccess callback function; if the login fails, you can get the error code and error information in the onError callback function. For complete error codes, please see: Error code list.

```javascript
import { AuthenticationClient } from "authing-js-sdk";

const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "https://xxx.genauth.ai",
});

const onScanningSuccess = async (userInfo: any, ticket: string) => {
  const { token } = userInfo;
  if (!token) {
    // The polling interface will not return complete user information, and ticket needs to be exchanged
    userInfo = await authenticationClient.wxqrcode.exchangeUserInfo(ticket);
  }
};

authenticationClient.wxqrcode.startScanning("qrcode", {
  onSuccess: onScanningSuccess,
  onError: (message) => onFail && onFail(`${message}`),
});
```
