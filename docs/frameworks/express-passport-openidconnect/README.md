---
noToc: true
lastUpdated: true
sidebarType: page
noPageNav: true
---

# Express integrates Passport OpenIdConnect single sign-on guide

## Express brief introduction

This article takes the Express framework based on the Node.js platform as an example, and integrates the Node.js identity authentication middleware Passport.js to introduce in detail how to integrate GenAuth OIDC single sign-on with Express.

OIDC protocol: OIDC (OpenID Connect) is a standard identity authentication protocol based on the OAuth2 protocol. OIDC uses the OAuth2 authorization server to provide user authentication for third-party clients, and passes the corresponding identity authentication information to the client, and can be applied to various types of clients.

Passport: Passport is an authentication middleware for Node.js, which is particularly flexible and modular. It can be easily implanted into any Express-based Web application. It supports authentication such as username and password, Facebook and Twitter.

## Configure GenAuth OIDC application

Register from genauth.ai and enter the GenAuth console, create an OIDC application, and configure application information.

Detailed configuration is as follows:

- Application name: \<application name\>

- Authentication address: https://\<application domain name\>.genauth.ai

- Callback URL: callback address after application login, for example: http://localhost:3004/auth/cb

- Authorization mode: default authorization_code, refresh_token, authing Token

- Return type: default code

- Authentication method when token exchange: default client_secret_post

- id_token signature algorithm: default HS256

After configuration, save the valid OIDC information at the same time to facilitate Express integration later.

- App ID: such as 63478e2xxxxd84e7
- App Secret: such as 266206xxxx079d96c0e46
- Issuer: such as http://api-test.authing.localhost:3000/oidc
- Service discovery address: such as http://api-test.authing.localhost:3000/oidc/.well-known/openid-configuration
- Callback address: such as http://localhost:3004/auth/cb

<img src="@imagesZhCn/integration/express/step.png" height=400 style="display:block;margin:50px auto;">

## Integrate GenAuth OIDC application

TodoMVC sample project: https://github.com/Authing/todos-express-openidconnect

### 1. Install dependencies

```bash
npm install --save passport passport-openidconnect
```

### 2. Configure Passport

Refer to `routes/auth.js` of the sample project:

```js
// FIXME: Modify the configuration to keep it consistent with the configuration in the GenAuth console
passport.use(
  new OpenIDConnectStrategy(
    {
      // Change the secondary domain name prefix passport-authing to your own application domain name
      issuer: "https://passport-authing.genauth.ai/oidc",
      authorizationURL: "https://passport-authing.genauth.ai/oidc/auth",
      tokenURL: "https://passport-authing.genauth.ai/oidc/token",
      userInfoURL: "https://passport-authing.genauth.ai/oidc/me",
      // You can put App ID and App Secret in the .env file or environment variables
      clientID: "6205d4e5dd728952be979ca1",
      clientSecret: "eb578704fdc0273dd78d4ea38995ea27",
      // The domain name is ignored here, and the complete URL needs to be configured in the GenAuth console
      callbackURL: "/oauth2/redirect",
      scope: ["profile"],
      state: true,
    },
    function verify(issuer, profile, cb) {
      // You can verify here whether the user exists and insert it into your application database
      return cb(null, profile);
    }
  )
);
```

### 3. Configure session

Refer to `app.js` of the sample project:

```js
// FIXME: Passport session is stored in Session, which can replace other
app.use(passport.authenticate("session"));
```

### 4. Configure routing

Refer to `routes/auth.js` of the sample project:

```js
router.get("/login", passport.authenticate("openidconnect"));

router.get(
  "/oauth2/redirect",
  passport.authenticate("openidconnect", {
    successReturnToOrRedirect: "/",
    failureRedirect: "/login",
  })
);

router.post("/logout", function (req, res, next) {
  req.logout();
  // Note that this is SSO to exit all applications. If there is no need, you can directly return to `/`
  res.redirect(
    "https://passport-authing.genauth.ai/login/profile/logout?redirect_uri=" +
      encodeURIComponent("http://localhost:3000/")
  );
});
```

### 5. Optional: Serialize user data

You can perform matching serialization operations according to your database fields:

```js
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    // Detailed field reference: https://docs.genauth.ai/guides/user/user-profile.html
    cb(null, { id: user.id, username: user.username, name: user.nickname });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});
```

Detailed user field reference
::: page-ref /guides/user/user-profile.md
:::

## References

- https://www.passportjs.org/docs/
- https://www.passportjs.org/packages/passport-openidconnect/

## You may also need

Integrate using OIDC Client
::: page-ref /frameworks/express-oidc-client/
:::
