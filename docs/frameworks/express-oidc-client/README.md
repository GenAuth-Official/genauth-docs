---
 noToc: true
 lastUpdated: true
 sidebarType: page
 noPageNav: true
---

# Express Integration OIDC Single Sign-On Guide

## Express Overview

This article takes the Express framework based on the Node.js platform as an example, and introduces in detail how Express integrates GenAuth OIDC single sign-on, along with the Node.js authentication middleware Passport.js.

OIDC Protocol: OIDC (OpenID Connect) is an identity authentication standard protocol based on OAuth2 protocol. OIDC uses OAuth2's authorization server to provide user identity authentication for third-party clients and passes the corresponding identity authentication information to the client, which can be applied to various types of clients.

Passport: Passport is a Node.js authentication middleware, particularly flexible and modular. It can be very conveniently embedded into any Web application based on Express. Supports username password, Facebook, and Twitter authentication, among others.

## Configuring GenAuth OIDC Application

Register and enter the GenAuth console from genauth.ai, create an OIDC application, and configure application information.

Detailed configuration is as follows:

- Application name: \<application name\>
- Authentication address: https://\<application domain name\>.genauth.ai
- Callback URL: callback address after application login, for example: http://localhost:3004/auth/cb
- Authorization mode: default authorization_code, refresh_token, genauth Token
- Return type: default code
- Authentication method when token exchange: default client_secret_post
- id_token signature algorithm: default HS256

After configuration, save the valid OIDC information at the same time for Express integration later.

- App ID: such as 63478e2xxxxd84e7
- App Secret: such as 266206xxxx079d96c0e46
- Issuer: such as http://api-test.genauth.localhost:3000/oidc
- Service discovery address: such as http://api-test.genauth.localhost:3000/oidc/.well-known/openid-configuration
- Callback address: such as http://localhost:3004/auth/cb

<img src="@imagesZhCn/integration/express/step.png" height=400 style="display:block;margin:50px auto;">

## Integrating GenAuth OIDC Application

1. Install dependencies.

   ```yaml
   yarn add express passport openid-client express-session
   ```

2. Create an index.js file in the src directory, set up a local service with Express.
   ```javascript
   const express = require("express");
   var app = express();
   app.listen(3004, () => console.log(`Example app listening on port 3004!`));
   ```
3. Connect to the OIDC application, register the 'oidc' strategy.

   ```javascript
   const passport = require("passport");
   const { Strategy, Issuer } = require("openid-client");
   const config = {
     // oidc configuration information
     appID: "{replace with your App ID: such as 5f34e94bexxxxx29e34}",
     appSecret:
       "{replace with your App Secret: such as 8226514dxxxxxxad4991e02e9}",
     issuer:
       "{replace with your issuer: such as https://aj00.genauth.ai/oauth/oidc}",
     configInfo:
       "{replace with your service discovery address: such as https://aj00.genauth.ai/oauth/oidc/.well-known/openid-configuration}",
     callbackUrl:
       "{replace with your callback address: such as http://localhost:3004/auth/cb}",
   };

   (async () => {
     const issuer = await Issuer.discover(config.configInfo); // Connect to the OIDC application
     const client = new issuer.Client({
       // Initialize issuer information
       client_id: config.appID,
       client_secret: config.appSecret,
       id_token_signed_response_alg: "HS256",
       token_endpoint_auth_method: "client_secret_post",
     });
     const params = {
       redirect_uri: config.callbackUrl,
       scope: "openid profile email phone",
       grant_type: "authorization_code",
       response_type: "code",
     };
     // Register OIDC strategy with passport
     passport.use(
       "oidc",
       new Strategy({ client, params }, (tokenset, userinfo, done) => {
         return done(null, userinfo); // Return user information
       })
     );
   })();
   ```

4. Define OIDC access, callback, and user information query interfaces.

   ```javascript
   app.get("/auth", passport.authenticate("oidc"));
   app.get(
     "/auth/cb",
     passport.authenticate("oidc", {
       successRedirect: "/",
       failureRedirect: "/",
     })
   );
   app.get("/user", (req, res) => {
     res.send(req.user);
   });
   app.get("/", (req, res) => {
     res.send("home");
   });
   ```

5. In addition to the above core steps, please refer to the complete Express integration of GenAuth OIDC code file for storing session information, serializing user information, and logout, etc.

   ```javascript
   const express = require("express");
   const session = require("express-session");
   const passport = require("passport");
   const { Strategy, Issuer } = require("openid-client");
   const config = {
     appID: "{replace with your App ID: such as 5f34e94bexxxxx29e34}",
     appSecret:
       "{replace with your App Secret: such as 8226514dxxxxxxad4991e02e9}",
     issuer:
       "{replace with your issuer: such as https://aj00.genauth.ai/oauth/oidc}",
     configInfo:
       "{replace with your service discovery address: such as https://aj00.genauth.ai/oauth/oidc/.well-known/openid-configuration}",
     callbackUrl:
       "{replace with your callback address: such as http://localhost:3004/auth/cb}",
   };

   (async () => {
     const issuer = await Issuer.discover(config.configInfo);
     const client = new issuer.Client({
       client_id: config.appID,
       client_secret: config.appSecret,
       id_token_signed_response_alg: "HS256",
       token_endpoint_auth_method: "client_secret_post",
     });
     const params = {
       redirect_uri: config.callbackUrl,
       scope: "openid profile email phone",
       grant_type: "authorization_code",
       response_type: "code",
     };
     var app = express();
     app.use(
       session({
         secret: "keyboard cat",
         resave: true,
         saveUninitialized: true,
       })
     );
     app.use(passport.initialize());
     app.use(passport.session());
     passport.use(
       "oidc",
       new Strategy({ client, params }, (tokenset, userinfo, done) => {
         return done(null, userinfo);
       })
     );

     app.get("/auth", passport.authenticate("oidc"));
     app.get(
       "/auth/cb",
       passport.authenticate("oidc", {
         successRedirect: "/",
         failureRedirect: "/user",
       })
     );
     app.get("/user", (req, res) => {
       res.send(req.user);
     });
     app.get("/", (req, res) => {
       res.send("home");
     });
     app.get("/logout", (req, res) => {
       const logoutBaseURL = "https://aj00.genauth.ai/login/profile/logout";
       const appId = "5f17f5d6f64fb07b7094a41b";
       const logoutRedirectURL = "http://localhost:3004";
       const logoutUrl = `${logoutBaseURL}?app_id=${appId}&redirect_uri=${logoutRedirectURL}`;
       req.session.destroy();
       res.redirect(logoutUrl);
     });
     passport.serializeUser(function (user, done) {
       done(null, user);
     });
     passport.deserializeUser(function (id, done) {
       done(null, { client_id: id });
     });
     app.listen(3004, () => console.log(`Example app listening on port 3004!`));
   })();
   ```

## Start Test Verification

1. Enter node src/index.js in the console to start the project.
2. After starting, access port 3004, http://localhost:3004/ displays home indicating successful startup.

- Login: http://localhost:3004/auth, redirect to GenAuth login component, after successful login authentication, redirect to home page, otherwise redirect to user information page (check GenAuth configuration for consistency when authentication fails).
- View user information: http://localhost:3004/user, displays blank if not logged in or logged out, displays user data in json format if logged in.
- Logout: http://localhost:3004/logout, redirect to home page after logout.

## You may also need

Integrate using passport-openidconnect
::: page-ref /frameworks/express-passport-openidconnect/
:::
