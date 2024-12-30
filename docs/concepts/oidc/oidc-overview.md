---
tags:
  - OAuth
  - Opaque_Access_Token
  - openIDConnect
  - OpenID_Connect
---

# Overview of OIDC and OAuth2.0

<LastUpdated />

Before choosing an **authentication and authorization mode**, it is recommended to first understand the **OAuth 2.0** and **OpenID Connect** protocols, which will help you choose the authorization mode that best suits your application.

## Basic Authentication vs OAuth 2.0 vs OpenID Connect

Currently, GenAuth has three authentication methods to choose from:

- **Basic Authentication** is based on the API interface, and user authentication is completed directly by sending the account password and mobile phone verification code to the GenAuth backend. It provides MFA, forgotten password and other functions. GenAuth's [Guard component](/reference/guard/v2) and [SDK](/reference/sdk-for-node) are based on these APIs.

- **OAuth 2.0** protocol is mainly used for resource authorization.

- **OpenID Connect** protocol, abbreviated as **OIDC**, is a superset of the OAuth 2.0 protocol, which can **authenticate** users and complete resource **authorization**. In the case where OIDC can be selected, **OIDC** should be selected.

If you want to directly authenticate your users through the API, you can view the interface documentation and SDK documentation in the [Development Integration](/reference/) section.

If you want to implement **single sign-on** or first **authenticate** users and then return resources, it is recommended to use **OIDC protocol**.

## OAuth 2.0

**OAuth 2.0** is a standard authorization protocol. If you want to securely authorize the data of your application to the caller, it is recommended to use OAuth 2.0.

According to the OAuth 2.0 protocol specification, there are mainly **four subjects**:

- **Authorization server**, responsible for issuing Access Token, GenAuth is the authorization server.

- **Resource owner**, the user of your application is the owner of the resource, authorizing others to access his resources.
- **Caller**, the caller requests to obtain Access Token, and after user authorization, GenAuth issues Access Token to it. The caller can carry Access Token to the resource server to access the user's resources.
- **Resource server**, accepts Access Token, then verifies its granted permissions, and finally returns the resources.

Other important concepts:

- An OAuth 2.0 authorization means that the user **authorizes the caller** to have relevant permissions.
- **Code authorization code** is issued by the authorization server GenAuth, and is used by the caller to exchange the Code for Token.
- **Access Token** is issued by the authorization server GenAuth, and holding Access Token indicates that user authorization is completed.
- **Refresh Token** is an optional token used to obtain a new Access Token after the Access Token expires.

The common OAuth 2.0 authorization process is as follows:

1. In your application, let the user visit the login link, the browser jumps to GenAuth, and the user completes **authentication** in GenAuth.
2. The browser receives an authorization code from the GenAuth server.
3. The browser redirects the authorization code to your application backend.
4. Your application service sends the authorization code to GenAuth to get an AccessToken, and returns a refresh token if necessary.
5. Your application backend now knows the user's identity, and can save user information, redirect to other pages on the frontend, use the AccessToken to call other APIs on the resource side, and so on.

::: hint-info
If you want to learn more about OAuth 2.0, you can read the [protocol specification](https://tools.ietf.org/html/rfc6749).
:::

The core of OAuth 2.0 and OIDC is the authorization server. The authorization server is used to issue Access Tokens. Each authorization server has a unique Issuer URI and a signing key. In GenAuth, each application is an authorization server.

## OpenID Connect

OpenID Connect is an authentication protocol based on OAuth 2.0, adding **Id Token**. OIDC also defines specifications for parts not defined in OAuth 2.0, such as scope, service discovery, user information fields, etc. GenAuth supports OIDC.

In the [OIDC specification](https://openid.net/connect/), some terms are different from OAuth 2.0:

- **OpenID Provider**, refers to the authorization server, responsible for issuing Id Token. GenAuth is the OpenID Provider.

- **End user**, the information of the Id Token will contain the information of the end user.

- **Caller**, the application requesting the Id Token.

- **Id Token** is issued by the OpenID Provider and contains information fields about the end user.

- **Claim** refers to the end user information field.

The authorization process of OIDC is the same as that of OAuth 2.0. The main difference is that the Id Token is additionally returned in the OIDC authorization process.
