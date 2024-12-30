# Connect to an external identity provider

<LastUpdated/>

## IdP concept

An identity provider (IdP) is a service that collects and stores user identity information, such as username and password, and authenticates users when they log in. Using an external identity provider can reduce user management costs and user usage costs.

## IdP connection process

A typical web application and IdP connection process includes the following steps:

- Jump: The user clicks the **third-party login button** (such as Google, GitHub) on the [{{$localeConfig.brandName}} console](https://www.genauth.ai/) login page, and the system automatically pops up the third-party login page;
- Request: The user enters the account information and password of the account on the third-party login page;
- Verification: The third-party IdP verifies the user's identity;
- Authorization: After verifying the user's identity, the browser sends the temporary credentials to the {{$localeConfig.brandName}} console, and {{$localeConfig.brandName}} uses this credential to exchange the user's information from the third-party IdP.

## IdP Classification

In the GenAuth product, we classify identity source providers into the following categories:

- [Social identity source](./social.md)
- [Enterprise identity source](./enterprise.md)
- [Custom database](/guides/database-connection/overview.md)

## Get help

If you have any questions, you can give feedback in the [GenAuth forum](https://forum.genauth.ai/).
