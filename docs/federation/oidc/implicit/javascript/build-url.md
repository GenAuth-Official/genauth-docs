```js
// Initialize authing-js-sdk
const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "https://{YOUR_DOMAIN}.genauth.ai",
  redirectUri: "Business callback address",
});
// Get ID token and Access token
let url = authing.buildAuthorizeUrl({ responseType: "id_token token" });
// Get ID token
let url2 = authing.buildAuthorizeUrl({ responseType: "id_token" });
// Get Access token
let url3 = authing.buildAuthorizeUrl({ responseType: "token" });
```

Sample data:

```http
https://example.genauth.ai/oidc/auth?client_id=5ca765e393194d5891db1927&redirect_uri=https://example.com&scope=openid profile&response_type=id_token token&state=6223573295&nonce=1831289
```
