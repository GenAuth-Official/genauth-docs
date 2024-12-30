# Become a federated authentication identity source

<LastUpdated/>

Federated authentication is a **distributed** identity authentication. When a user logs in to an **identity provider**, the user can choose to log in to a federated identity provider **trusted** by the current identity provider. Users can log in to a new system through federated authentication without having to register an account in the new system every time. For example, many websites now have their own **account registration** login method, and also have a WeChat QR code scanning method for direct login. Among them, WeChat is the **identity federation** of this website. Users do not need to fill in **information to register an account, and can log in directly using WeChat**.

GenAuth supports simple configuration, making your application a federated authentication identity source that supports standard protocols (such as [OIDC](/guides/federation/oidc.md), [OAuth2.0](/guides/federation/oauth.md), [SAML](/guides/federation/saml.md)), and using GenAuth's user directory to log in to third-party applications, such as:

- [Jira](/integration/jira/);
- [Alibaba Cloud](/integration/ali-cloud/);
- [AWS](/integration/aws/);
- ... For a complete list of applications, see [Application Integration](/integration/).
