---
tags:
  - JSON_WEB_TOKEN
  - JWT
  - JsonWebToken
meta:
  - name: description
    content: Learn JWT Token interpretation and use
---

# Learn JWT Token interpretation and use

<LastUpdated/>

Understand how to verify the token:

::: page-ref /guides/faqs/how-to-validate-user-token.md
:::

## JWT Introduction

JSON Web Token (JWT, [RFC 7519](https://tools.ietf.org/html/rfc7519)) is a JSON-based open standard (RFC 7519) for transmitting claims between network application environments. The Token is designed to be compact and secure, and is especially suitable for single sign-on (SSO) scenarios in distributed sites. JWT statements are generally used to transmit authenticated user identity information between identity providers and service providers, allowing them to obtain resources from resource servers. They can also include additional claim information necessary for other business logic. JWTs can be directly used for authentication or encryption.

For more details, please refer to this article: [What is JWT](https://www.jianshu.com/p/576dbf44b2ae).

## Authentication Flow

![](~@imagesZhCn/concepts/jwt-flow.png)


### User Authentication Flow

- User uses account (phone/email/username) and password to request the server
- The server verifies whether the user account matches the database
- The server sends a JWT Token to the client after verification
- **Client stores the Token and carries it with each request (**[**How to carry?**](#How-to-carry-JWT-Token-on-the-client)**)**
- **Server verifies the Token value and returns the corresponding resource based on the Token's legitimacy (**[**How to verify?**](/guides/faqs/how-to-validate-user-token.md)**)**
- **Client stores the Token and carries it with each request (**[**How to carry?**](#How-to-carry-JWT-Token-on-the-client)**)**
- **Server verifies the Token value and returns the corresponding resource based on the Token's legitimacy (**[**How to verify?**](/guides/faqs/how-to-validate-user-token.md)**)**

## Security Limits

To prevent user abuse, the system limits IP by default:

- 5 minutes, 3 consecutive registrations are prohibited;
- 5 minutes, 3 consecutive login failures require inputting a verification code;

> You can customize the time range and the threshold for the number of times within that period.

To enable/disable or modify this limit, please refer to: [Enable/Disable/Configure Registration Frequency Limit](/guides/security/config-register-limit.md).

## How to Carry JWT Token on the Client

After completing authentication, the developer will return a JWT Token to the developer, and the developer needs to store this Token in the client and then send it to the developer's restricted backend server for verification.

It is recommended to use the **HTTP Header Authorization** form to carry the Token, as follows:

```js
const axios = require("axios");
axios
  .get({
    url: "https://yourdomain.com/api/v1/your/resources",
    headers: {
      Authorization: "Bearer ID_TOKEN",
    },
  })
  .then((res) => {
    // custom codes
  });
```

Note that the fifth line has a **Bearer** type.

### What is Bearer?

Bearer Token \([RFC 6750](http://www.rfcreader.com/#rfc6750)\) is used for authorization to access resources. Any bearer can access related resources without proof of holding an encryption key. A Bearer represents authorization scope, validity period, and other authorization matters; a Bearer should prevent leakage during storage and transmission, and implement Transport Layer Security \(TLS\); a Bearer's validity period should not be too long, and after expiration, a Refresh Token can be used to update it.

It is recommended that developers follow the specification and append Bearer before the Token in each request.
