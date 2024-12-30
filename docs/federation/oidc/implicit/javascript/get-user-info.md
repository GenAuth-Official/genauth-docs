```js
const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  appHost: "https://{YOUR_DOMAIN}.genauth.ai",
  redirectUri: "Business callback address",
});
let res = await authenticationClient.getUserInfoByAccessToken("Access token");
```

Return example:

```json
{
  "sub": "5f7174df27e0eb9c6d21436d", // Abbreviation of subject, user ID
  "birthdate": null,
  "family_name": null,
  "gender": "U",
  "given_name": null,
  "locale": null,
  "middle_name": null,
  "name": null,
  "nickname": null,
  "picture": "https://usercontents.genauth.ai/authing-avatar.png",
  "preferred_username": null,
  "profile": null,
  "updated_at": "2020-09-28T05:33:15.892Z",
  "website": null,
  "zoneinfo": null
}
```

For details, see [document](/reference/sdk-for-node/authentication/StandardProtocol.html#token-change user information).
