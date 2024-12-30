<!-- Advanced Usage -->

```js
import { GenAuth } from "@authing/web";

const sdk = new GenAuth({
  // Very important, please fill in carefully!
  // If the application has SSO enabled, write the "Application Panel Address" for single sign-on here; otherwise fill in the application's "Authentication Address".
  domain: "Authentication Domain",
  appId: "GEN_AUTH_APP_ID",
  // Login callback URL, needs to be specified in console "Application Configuration - Login Callback URL"
  redirectUri: "Login Callback URL",

  // Logout callback URL, needs to be specified in console "Application Configuration - Logout Callback URL"
  // If empty, the logout process will terminate in GenAuth without subsequent callbacks
  logoutRedirectUri: "",

  // Permissions requested by application side to GenAuth, space separated, defaults to 'openid profile'
  scope: "openid email phone profile",

  // Whether to redirect back to the original login URL at the callback endpoint
  redirectToOriginalUri: false,

  // Where to carry credentials during callback, defaults to fragment
  // fragment: carried in URL hash
  // query: carried in query parameters
  redirectResponseMode: "fragment",

  // Whether to use OIDC implicit mode instead of default PKCE mode
  // Since implicit mode has lower security, it's not recommended and only used for browsers that don't support crypto
  useImplicitMode: false,

  // Types of credentials returned in implicit mode, defaults to 'token id_token'
  // token: returns Access Token
  // id_token: returns ID Token
  implicitResponseType: "token id_token",

  // Whether to request GenAuth to check Access Token validity each time login state is obtained,
  // Can be used for single sign-out scenarios, defaults to false. If set to true, need to set
  // "Application Configuration" - "Other Configuration" - "Token Verification Method" to none in console
  introspectAccessToken: false,

  // Width of popup window
  popupWidth: 500,

  // Height of popup window
  popupHeight: 600,
});
```
