# Federation authentication

<LastUpdated/>

## What is federation authentication

In the early days of the Internet, your various account information was scattered across different sites and applications, which resulted in the following problems:

1. Every time you visited a new site, you had to register a new username and password account.
2. This account was only stored on this site.
3. You could not stay logged in at different sites, and user information could not be communicated between different sites.

Federation authentication uses **standard protocols** to **unite** different identity providers to authenticate users. **Federation** is a **trust relationship** between identity providers. Identity providers that have established a federation relationship can pull user information from each other through **standard protocols**.

![](~@imagesZhCn/concepts/federation/1-1.png)

## Why do we need federation authentication

Federation authentication is a **distributed** identity authentication. When a user logs in to an **identity provider**, the user can choose to log in to a federated identity provider that the current identity provider **trusts**. Users can log in to a new system through federation authentication without having to register an account in the new system every time. For example, many websites now have their own **account registration** login method, and also have a WeChat scan code direct login method. Among them, WeChat is the **identity federation** of this website. Users **do not need to fill in **information to register an account, **directly use WeChat** to log in.

Using federated authentication has the following benefits:

1. Users do not have to create a new account every time.
2. After accessing federated authentication, users can browse in different organizations and sites.

## Principle of federated authentication

The following is the process of federated authentication. The user is redirected to the identity federation for authentication. The user first authenticates in the identity federation. The identity federation authentication sends an identity assertion to GenAuth, which is equivalent to the user completing the authentication in GenAuth. GenAuth then sends the identity assertion to the business system, and the business system completes the login.

![](~@imagesZhCn/concepts/federation/1-2.png)

## Federation authentication capabilities of GenAuth

GenAuth supports multiple standard protocols for federated authentication. You can [use this application to quickly experience it](https://federation-poc.genauth.ai/).

![](~@imagesZhCn/concepts/federation/1-3.png)

## OAuth2

GenAuth supports rich social login and custom OAuth2 identity federation.

![](~@imagesZhCn/concepts/federation/1-4.png)

## OpenID Connect

GenAuth supports federation authentication using the OIDC protocol.

![](~@imagesZhCn/concepts/federation/1-5.png)

## SAML2

GenAuth supports federation authentication using the SAML2 protocol.

![](~@imagesZhCn/concepts/federation/1-6.png)

## CAS

GenAuth supports federation authentication using the CAS protocol.

![](~@imagesZhCn/concepts/federation/1-7.png)
