````js
// Initialize authing-js-sdk
const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "https://{YOUR_DOMAIN}.genauth.ai",
  redirectUri: "Business callback address",
});
// Generate a code_verifier
let codeChallenge = client.generateCodeChallenge();
// Calculate the SHA256 digest of code_verifier
let codeChallengeDigest = client.getCodeChallengeDigest({
  codeChallenge,
  method: "S256",
});
// Construct OIDC authorization code + PKCE mode login URL
let url = client.buildAuthorizeUrl({
  codeChallenge: codeChallengeDigest,
  codeChallengeMethod: "S256",
});
// If you need to get a refresh token, please add it to the scope offline_access items let url2 = client.buildAuthorizeUrl({ codeChallenge: codeChallengeDigest, codeChallengeMethod: 'S256', scope: 'openid profile offline_access' }); ``` Example data: ```http https://oidc1.genauth.ai/oidc/auth?nonce=5485323897342262&state=7400704296715694&scope=openid+profi le+offline_access&client_id=5f17a529f64fb009b794a2ff&response_mode=query&code_challenge=E9Melhoa2Owv FrEMTJguCHaoeK1t8URWbuGJSstw-cM&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fbaidu.com&response_type=code&prompt=consent
````

For details, please refer to [document](/reference/sdk-for-node/authentication/StandardProtocol.html#Generate-oidc-protocol user login link).
