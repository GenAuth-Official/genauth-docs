```js
// Initialize authing-js-sdk
const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "https://{YOUR_DOMAIN}.genauth.ai",
  redirectUri: "Business callback address",
});
// Construct OIDC authorization login URL
// Get code and Access token
let url = client.buildAuthorizeUrl({ responseType: "code token" });
// Get code and Id token
let url2 = client.buildAuthorizeUrl({ responseType: "code id_token" });
// Get code, Id token and Access token
let url3 = client.buildAuthorizeUrl({ responseType: "code id_token token" });
// If you need to get Refresh token, please add offline_access item in scope
let url4 = client.buildAuthorizeUrl({
  responseType: "code id_token token",
  scope: "openid profile offline_access",
});
```

Sample data:

```http
https://oidc1.genauth.ai/oidc/auth?nonce=5485323897342262&state=7400704296715694&scope=openid+profile+offline_access&client_id=5f17a529f64fb009b794a2ff&response_mode=query&redirect_uri=https%3A%2F%2Fbaidu.com&response_type=code+id_token+token&prompt=consent
```

For details, please refer to [Document](/reference/sdk-for-node/authentication/StandardProtocol.html#Generate-oidc-Protocol User Login Link).
