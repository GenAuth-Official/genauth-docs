# Overview

<LastUpdated/>

No matter what type of application you are developing - internal employee IT system, toC account system or API exposed to other developers, user authentication is a crucial part of it. {{$localeConfig.brandName}} provides a variety of authentication methods for developers to choose from.

::: hint-warning
Note: Some browsers have begun to disable third-party cookies by default, which will affect some functions of {{$localeConfig.brandName}} in some scenarios. For detailed description, please see: [FAQ: How will browser disabling third-party cookies affect {{$localeConfig.brandName}} functions? ](/guides/faqs/block-third-party-cookie-impact.md)
:::

The login experience is one of the most important user experiences that software developers need to consider. It is not an easy task to provide users with a seamless, convenient and secure authentication experience. Generally speaking, the login logic is also associated with registration, password reset, account association and other logic. More importantly, for many applications, it is important to enhance security in the form of strong and adaptive authentication during the login process.

{{$localeConfig.brandName}} provides a lot of authentication methods for developers to choose and combine. Password policies, frequent login detection, custom authentication processes, etc. can be easily completed through the management console (these operations can basically also be completed through the Management API).

## OIDC / OAuth2.0 / SAML / AD / LDAP / Social Login

{{$localeConfig.brandName}} supports accessing your applications and user data through standard protocols such as OIDC, OAuth2.0, SAML, LDAP, etc. You can safely use {{$localeConfig.brandName}} as your Identity Provider. If you use {{$localeConfig.brandName}} as an Identity Provider, you can connect to other third-party Service Providers, such as logging in to Alibaba Cloud, AWS, Azure, Jira, etc.

{{$localeConfig.brandName}} can also be used as a Service Provider to connect to third-party Identity Providers through standard protocols such as OIDC, OAuth2.0, SAML, LDAP, AD, etc. For example, you can log in to your application through Azure AD or local Windows AD.
{{$localeConfig.brandName}} can also use third-party social login to automatically pull the user information of social login users to your user directory.

You can learn about the implementation principles of [OIDC, OAuth2.0](/concepts/oidc/oidc-overview.md), [SAML](/concepts/saml/saml-overview.md), [LDAP](/concepts/ldap.md), and [AD](https://en.wikipedia.org/wiki/Active_Directory) respectively.

## Hosted login page authentication

Each user pool in {{$localeConfig.brandName}} has an independent secondary domain name and an online login page. You can access this login page by visiting `https://YOUR_DOMAIN.genauth.ai/login`
. You don't need to write a line of code to maintain the login page. You can make some customized configurations through the application configuration of the console.

You can try the [sample authentication page](https://sample-sso.genauth.ai) provided by GenAuth.

## Embedded login form authentication

{{$localeConfig.brandName}} embedded login component is a lightweight, modern, and highly scalable front-end login component provided by {{$localeConfig.brandName}}, which supports native JavaScript and the three major front-end frameworks of React, Vue, and Angular. This embedded login component is basically consistent with the login page hosted by {{$localeConfig.brandName}}, and has strong customization capabilities. This component has built-in functions such as password reset, MFA, social login, and scan code login, all of which are highly configurable.

For details, see [Use the embedded login component to complete authentication](/guides/basics/authenticate-first-user/use-embeded-login-component/).

## Auth SDK

{{$localeConfig.brandName}} provides a lightweight, developer-friendly Auth SDK (supports JavaScript/Node, Java, Python, PHP, C#, etc.) for front-end developers, allowing you to implement your authentication logic more flexibly, quickly, and securely. This Auth SDK supports all authentication-related functions of {{$localeConfig.brandName}}, including basic authentication, password reset, account binding, and all other functions. You can get the user's `id_token` through this SDK and pass it to downstream applications as the user's identity credential.

!!!include(common/sdk-list.md)!!!

## Authentication API

The hosted login page, embedded login component, and Auth SDK underlying capabilities mentioned above are all supported by the Authentication API. The {{$localeConfig.brandName}} Authentication API supports two calling methods: RESTful and GraphQL (endpoint is https://core.genauth.ai/graphql/v2), and you can also directly call the Authentication API to implement authentication logic.

## Single Sign-On

Single Sign-On (SSO) is one of the more popular solutions for enterprise business integration. The definition of SSO is that in multiple application systems, users only need to log in once to access all mutually trusted application systems. We provide a dedicated [SSO SDK](https://docs.genauth.ai/v3/reference/sdk/web/) based on which developers can quickly implement single sign-on between applications.
