# User Guide Overview

<LastUpdated/>

Welcome to the User Guide, where you will officially start your development journey in {{$localeConfig.brandName}}!

Here, you will mainly learn two things:

1. Integrated authentication, we will guide you step by step through examples and code on how to quickly integrate authentication functions into your application system;
2. Manage resources, how to manage your resources in {{$localeConfig.brandName}}, such as applications, roles, user directories, configurations, etc.

Before you officially start development, we recommend that you first understand [What is {{$localeConfig.brandName}}](/concepts/), and several core concepts in {{$localeConfig.brandName}}: [Difference between authentication and authorization](/concepts/authentication-vs-authorization.md), [User pool](/concepts/user-pool.md) and [Application](/concepts/application.md).

## Integrate authentication into your application

It is recommended to read [Quick Start: Authenticate your first user](/guides/basics/authenticate-first-user/) first, where you will learn the complete steps of integrating {{$localeConfig.brandName}} to help you get started quickly.

After that, you can read the guide by topic:

1. Authenticate users
   - The most basic [account and password authentication](./authentication/basic/password/README.md), [mobile phone number verification code authentication](./authentication/basic/sms/README.md) means;
   - [How to access social login authentication](/guides/authentication/social/);
   - [How to access scan code login authentication](/guides/authentication/qrcode/use-self-build-app/overview.md);
   - [How to authenticate in the mini program](/guides/authentication/wechat-mini-program/);
   - [Implement single sign-on (SSO)](/guides/app-new/sso/);
   - [Implement single sign-on on mobile terminals](/guides/authentication/mobile-sso/);
   - [How to integrate multi-factor authentication](/guides/security/mfa/)
   - Expand the authentication process:
     - [Add user-defined fields](/guides/authentication/extensibility/user-defined-field/)
     - [Add extended fields to IdToken](/guides/authentication/extensibility/customize-id-token.md)
     - [Use a custom database to authenticate users](/guides/authentication/extensibility/database-connection.md)
     - [Use Pipeline to extend the authentication process](/guides/authentication/extensibility/pipeline.md)
     - [Use Webhook to listen to authentication events](/guides/authentication/extensibility/webhook.md)
2. Manage user permissions
   - [Choose the right permission model](/guides/access-control/choose-the-right-access-control-model.md)
   - [Integrate RBAC permission model into your application system](/guides/access-control/rbac.md)
   - [Integrate ABAC Permission model to your application system](/guides/access-control/abac.md)
   - [Use permission groups to manage permission resources](/guides/access-control/resource-group.md)
   - [Manage resource permissions](/guides/access-control/resource-acl.md)
3. Authorization

   - [User-consented resource authorization](/guides/authorization/user-consent-authz.md)
   - [Machine-to-machine (M2M) authorization](/guides/authorization/m2m-authz.md)

4. Manage user accounts

   - [Understand the meaning of all fields in user profile](/guides/user/user-profile.md);
   - [Understand how administrators create accounts](/guides/user/create-user/);
   - [Understand how to manage user accounts](/guides/user/manage-profile.md), such as modifying user profiles, binding MFA, etc.;
   - [Learn how to bind an account](/guides/user/bind-social-account.md);
   - ...

5. Detailed guide to [Connecting the WeChat Ecosystem Account System](/guides/wechat-ecosystem/).

## Manage your resources in {{$localeConfig.brandName}}

It is recommended to read [Console Overview](/guides/basics/console/) first, you will quickly understand what the {{$localeConfig.brandName}} console has, which can help you get a general idea of ​​the {{$localeConfig.brandName}}.

You can then read the guides by topic:

1. [Manage User Directory](/guides/users/)

   - [Learn about the configuration items of the user directory](/guides/users/settings.md);
   - [Learn how to add custom user fields](/guides/users/user-defined-field/);
   - [Learn how to search for users](/guides/users/search.md);
   - [Learn how to use the LDAP user directory](/guides/users/ldap-user-directory.md).

2. [Manage your own application](/guides/app-new/)
3. [Manage multiple tenants](/tenant/)
4. [Become a federated identity source](/guides/federation/)
5. [Connect to an external identity provider](/guides/connections/)

   - [Configure social login](/guides/connections/social.md)
   - [Configure a standard protocol identity provider](/guides/connections/enterprise.md)
   - [Use a custom database](/guides/database-connection/overview.md)

6. [Manage organizations](/guides/org/)

   - [Create or import an organization](/guides/org/create-or-import-org/README.md);
   - [Manage organizations](/guides/org/manage-org/README.md);
   - [Manage member life cycle](/guides/org/staff-life-cycle-management/README.md);
   - [Manage terminal devices](/guides/org/device-management/README.md);

7. [View audit logs](/guides/audit/)
8. Configure security information

   - [Configure Web security domain](/guides/security/config-domain.md)
   - [Configure password security](/guides/security/pw-security/)

9. Configure user pool information
   - [Modify user pool basic information](/guides/userpool-config/basic-config.md)
   - [Configure email service and template](/guides/userpool-config/email/)
   - [Configure SMS service](/guides/userpool-config/sms/)

## Understand the private deployment solution

If you need to privately deploy {{$localeConfig.brandName}}, please read the following guidelines:

- [Basic deployment pattern](/guides/deployment/bare-metal.md);
- [Docker deployment pattern](/guides/deployment/docker-compose.md);
- [Kubernetes deployment pattern](/guides/deployment/kubernetes.md).
