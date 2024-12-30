#### Authorization code mode

If the authentication process in your application requires the participation of the backend service, it is recommended to use the authorization code mode.

The overall process is as follows:

1. In your application, let the user visit the login link, the browser jumps to GenAuth, and the user completes the authentication in GenAuth.

2. The GenAuth server will issue a temporary authorization code and send the authorization code to your application backend through browser redirection.

3. Your application service backend sends the obtained authorization code to the GenAuth server, obtains AccessToken and IdToken, and returns Refresh Token if necessary.

4. Your application backend can now know the user's identity through IdToken, and can save user session information later. And you can redirect to other front-end pages, use AccessToken to call your backend API, etc.

<img src="https://cdn.authing.co/authing-docs-v2/1.3.96/assets/img/1-3.f80500ca.png" alt="drawing" />

#### Authorization code + PKCE mode

If your application is a **SPA front-end application or mobile app**, it is recommended to use the **Authorization code + PKCE mode**. The authorization code + PKCE mode is **suitable for scenarios where keys cannot be stored securely** (such as front-end browsers).

The overall process is as follows:

1. In your application, let the user visit the login link, the browser jumps to GenAuth, and the user completes **authentication** in GenAuth.

2. The GenAuth server will issue a temporary **Authorization code** and send the authorization code to your application front end through browser redirection.

3. Your application sends the **Authorization code** and **Verification code** to GenAuth to obtain **AccessToken** and **IdToken**, and if necessary, it will also return Refresh token.
4. Your application front-end now knows the user's identity through IdToken. You can then use Access token to exchange for user information, redirect to other front-end pages, and use AccessToken to call your back-end API.

<img src="https://cdn.authing.co/authing-docs-v2/1.3.96/assets/img/pkce-2.7ef745c5.png" alt="drawing" />

#### Implicit mode

If your application is a **SPA front-end application**, you can also use **implicit mode** to complete user authentication and authorization. Implicit mode **is suitable for scenarios where keys cannot be stored securely** (such as front-end browsers). In **implicit mode**, the application does not need to use code to exchange for tokens, and does not need to request the `/oidc/token` endpoint. AccessToken and IdToken will be returned directly from the **authentication endpoint**.

The overall process is as follows:

1. In your application, let the user visit the login link, the browser jumps to GenAuth, and the user completes **authentication** in GenAuth.
2. The GenAuth server will directly issue the user's AccessToken and IdToken, and send them to your application frontend in the **URL hash** through browser redirection.
3. Your application extracts the AccessToken and IdToken from the URL.
4. Your application can save the AccessToken and IdToken for subsequent use, such as accessing the resource server with the AccessToken and requesting the server with the IdToken so that the server can identify the user.

<img src="https://cdn.authing.co/authing-docs-v2/1.3.96/assets/img/implicit-flow.fdb49293.png" alt="drawing" />

#### Hybrid mode

In some scenarios, you may want to obtain both the AccessToken and IdToken directly from the authentication endpoint and the authorization code for subsequent refresh token acquisition. It is recommended to use the **hybrid mode**.
In the **hybrid mode**, the application will receive the AccessToken, IdToken and code. The application can choose to send the code to the backend service to obtain the user's AccessToken, IdToken, and Refresh token from the `/oidc/token` endpoint.

The overall process is as follows:

1. In your application, let the user visit the login link, the browser jumps to GenAuth, and the user completes **authentication** in GenAuth.

2. The GenAuth server will directly issue a temporary authorization code, as well as the user's AccessToken and IdToken, and send them to your application front end in **URL hash** through browser redirection.

3. Your application extracts the code, AccessToken, and IdToken from the URL.

4. Your application can save the AccessToken and IdToken for subsequent use, such as accessing the resource server with the AccessToken and requesting the server with the IdToken so that the server can identify the user.

5. Your application can send the code to the backend.

6. The application backend can use the code to obtain the user's AccessToken, IdToken, and refresh token. After that, you can save user information, use the AccessToken to call other APIs of the resource party, and so on.

<img src="https://cdn.authing.co/authing-docs-v2/1.3.96/assets/img/hybrid-flow.53529f18.png" alt="drawing" />

#### Client Credentials Mode

Client Credentials mode is used for server-to-server authorization (M2M authorization) without user participation. You need to create a programmatic access account and give the AK and SK key pairs to your resource caller.

The overall process is as follows:

1. The resource caller sends his credentials AK, SK and the requested scope to the GenAuth authorization endpoint.

2. If the credentials are correct and the caller has resource permissions, GenAuth issues an AccessToken for it.

<img src="https://cdn.authing.co/authing-docs-v2/1.3.96/assets/img/client-credentials-flow.1434552a.png" alt="drawing" />

#### Password mode

This mode is not recommended. Try to use other modes. Only consider using **password mode** when other modes cannot solve the problem. If you use password mode, please make sure that your application code logic is very secure and will not be attacked by hackers, otherwise it will **directly leak the user's account and password**. It is generally used to transform and integrate very old applications, otherwise **never** make it your first choice.

The overall process is as follows:

1. Your application asks the user to enter the account and password information.
2. Your application sends the user's account and password to GenAuth.
3. If the account and password are correct, GenAuth returns a token.

<img src="https://cdn.authing.co/authing-docs-v2/1.3.96/assets/img/password-flow.99e74271.png" alt="drawing" />
