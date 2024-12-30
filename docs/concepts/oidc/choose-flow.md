# Choose OIDC authorization mode

<LastUpdated/>

You need to choose a suitable authentication and authorization mode according to your scenario and the type of application you develop. This article will help you choose the appropriate OIDC authorization mode.

## Recommended authorization mode

Different types of applications require different authorization modes. The following table shows the modes we recommend:

| Application type      | Authorization mode      |
| --------------------- | ----------------------- |
| With backend scenario | Authorization code mode |
| SPA, no backend       | Implicit mode           |
| Between servers       | Client Credentials      |

## Does your application need an ID Token?

| Authorization Mode      | Access Token | Id Token |
| ----------------------- | ------------ | -------- |
| Authorization Code Mode | ✅           | ✅       |
| Implicit Mode           | ✅           | ✅       |
| Password Mode           | ✅           | ✅       |
| Client Credentials Mode | ✅           | ❌       |

## What type of application is yours?

How to choose the OIDC authorization mode depends on what type of application you are developing. Refer to the following flow chart to choose the authorization mode you need:

![](~@imagesZhCn/concepts/oidc/choose-flow.png)

## Is your application code publicly accessible?

If your end users can see and modify your application code, then the application is publicly accessible. This includes SPA (single page web application) and mobile applications. In this scenario, the application cannot store keys securely.

## Is your application a SPA or a native application?

If your application is a single-page web application, running in a new version of the browser, and the browser supports Web Crypto, you should use PKCE + authorization code mode. If your application runs in an old version of the browser, the browser does not support Web Crypto, you should use implicit mode. Implicit mode is only suitable for scenarios where the application cannot store keys securely. You should only consider using implicit mode if other modes are not available.

If your application is a native application, you should use PKCE + authorization code mode.

## Are there any end users using your application?

If your application runs on the server side, is not directly used by end users, and is only interacting between servers, you should use Client Credentials mode.

## Are the application and resources owned by the same party?

If your application and the resources that the application needs to access are all controlled by you, and your application can securely store user accounts and passwords, the code logic is secure enough. When other authorization modes are not suitable, you can choose password mode.

## Authorization code mode

The authorization code mode is suitable for scenarios where the application has a backend server. The authorization code mode requires that the application must be able to securely store keys for subsequent use of authorization codes to exchange for Access Tokens. The authorization code mode requires the browser to interact with the end user to complete the authentication and authorization, and then send the authorization code to the backend service through browser redirection, and then exchange the authorization code for token and token for user information.

![](~@imagesZhCn/guides/federation/oidc/authorization-code-flow.png)

For more information, please refer to [Using the Authorization Code Mode](/federation/oidc/authorization-code/).

## Implicit Mode

The implicit mode is **suitable for scenarios where keys cannot be stored securely** (such as front-end browsers). In **implicit mode**, the application does not need to use code to exchange tokens, and does not need to request the `/token` endpoint. AccessToken and IdToken will be returned directly from the **authentication endpoint**.

:::hint-info
Because the implicit mode is used in **scenarios where keys cannot be stored securely**, the implicit mode does not support obtaining Refresh Token.
:::

![](~@imagesZhCn/guides/federation/oidc/implicit-flow.png)

For more information, please refer to [Using Implicit Mode](/federation/oidc/implicit/).

## Password Mode

Password mode is suitable for scenarios where you control both the application and the resources required by the application. Password mode requires the application to store keys securely and to be trusted to store the account and password of the resource owner. It is generally common in self-owned applications using their own resources. Password mode does not require redirection jumps, only the user account and password need to be carried to access the Token endpoint.

![](~@imagesZhCn/guides/federation/oidc/password-flow.png)

For more information, please refer to [Using Password Mode](/federation/oidc/password/).

## Client Credentials Mode

Client Credentials mode is used for server-to-server authorization (M2M authorization) without user participation. You need to create a programmatic access account and give the AK and SK key pairs to your resource caller.

::: hint-info
Client Credentials mode does not support Refresh Token.
:::

![](~@imagesZhCn/guides/federation/oidc/client-credentials-flow.png)

For more information, refer to [Using Client Credentials Mode](/federation/oidc/client-credentials/).
