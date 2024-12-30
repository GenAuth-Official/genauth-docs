---
meta:
  - name: description
content: Node.js/JavaScript SDK
---

<LastUpdated/>

# {{$localeConfig.brandName}} - Node.js SDK SAML module

Security Assertion Markup Language (SAML, pronounced sam-el) is an open source XML-based standard data format for exchanging authentication and authorization data between parties, especially between identity providers and service providers.

## Generate a user login link for the SAML2 protocol

> Generate a user login link for the SAML2 protocol

```js
AuthenticationClient().buildAuthorizeUrl(options);
```

### Example

```javascript
// Splice SAML2 login link
const authenticationClient = new AuthenticationClient({
  appId: "Application ID",
  appHost: "https://{YOUR_DOMAIN}.genauth.ai",
  protocol: "saml",
});
let url = authenticationClient.buildAuthorizeUrl();
```

### Sample data

```http
https://oidc1.genauth.ai/api/saml-idp/5f17a529f64fb009b794a2ff
```

## Splice the logout URL

> Splice the logout URL.

```js
AuthenticationClient().buildLogoutUrl(options);
```

### Parameters

- `options` \<string\> Logout configuration items.
- `options.redirectUri` \<string\> Redirect URL after logout.

### Example

```javascript
// Splice the universal logout link of the front end
const authenticationClient = new AuthenticationClient({
  appId: "Application ID",
  appHost: "https://{YOUR_DOMAIN}.genauth.ai",
  redirectUri: "Business callback address",
  protocol: "saml",
});
let url = authenticationClient.buildLogoutUrl({
  redirectUri: "https://www.genauth.ai",
});
```

### Example data

```http
https://oidc1.genauth.ai/login/profile/logout?redirect_uri=https://www.genauth.ai
```
