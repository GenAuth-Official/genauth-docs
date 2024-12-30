---
meta:
  - name: description
content: OIDC FAQ
---

# OIDC FAQ

<LastUpdated/>

OIDC stands for OpenID Connect, a lightweight authentication + authorization protocol based on OAuth 2.0, and a superset of OAuth 2.0. It specifies how other applications, such as application A (XX mail system), application B (XX chat system), and application C (XX document system) you develop, retrieve user data from your central data table, and stipulates interaction methods, security specifications, etc., ensuring that your users only need to log in once when accessing all applications, instead of repeatedly entering passwords. In addition, following these specifications, your user authentication process will be very secure.

## How to handle OIDC in the backend

Please refer to the example on GitHub: [example-spring-boot-oidc](https://github.com/Authing/example-spring-boot-oidc)

## Comparison of the characteristics of the three authentication flows of OIDC

| Features                                                | Authorization code mode | Implicit mode | Hybrid mode |
| :------------------------------------------------------ | :---------------------- | :------------ | :---------- |
| All tokens are returned from the authorization endpoint | no                      | yes           | no          |
| All tokens are returned from the token endpoint         | yes                     | no            | no          |
| Tokens are not exposed to the frontend                  | yes                     | no            | no          |
| Clients can be authenticated by OP                      | yes                     | no            | yes         |
| Tokens can be refreshed                                 | yes                     | no            | yes         |
| One interaction                                         | no                      | yes           | no          |
| Server-to-server communication is required              | yes                     | no            | varies      |

## Authorization flows corresponding to different response-types

| "response_type" value | Flow                    |
| :-------------------- | :---------------------- |
| code                  | Authorization Code Flow |
| id_token              | Implicit Flow           |
| id_token token        | Implicit Flow           |
| code id_token         | Hybrid Flow             |
| code token            | Hybrid Flow             |
| code id_token token   | Hybrid Flow             |

[Refer to OIDC specification](https://openid.net/specs/openid-connect-core-1_0.html#Authentication)

## How to verify the legitimacy of the token

Please refer to:

::: page-ref /guides/basics/authenticate-first-user/how-to-validate-user-token.md
:::

## User information corresponding to the scope parameter

| scope name      | Corresponding information                                                                                                                            |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| username        | username                                                                                                                                             |
| address         | address                                                                                                                                              |
| email           | email, email_verified                                                                                                                                |
| phone           | phone_number, phone_number_verified                                                                                                                  |
| profile         | birthdate, family_name, gender, given_name, locale, middle_name, name, nickname, picture, preferred_username, profile, updated_at, website, zoneinfo |
| offline_access  | If this parameter exists, the token interface will return the refresh_token field                                                                    |
| roles           | The user's role list corresponding to the role information                                                                                           |
| unionid         | The user's unionid field                                                                                                                             |
| openid          | The user's openid field                                                                                                                              |
| external_id     | The user's user ID in the original system                                                                                                            |
| extended_fields | The user's extended field information, the content is an object, the key is the extended field name, and the value is the extended field value       |

The above are the default supported by GenAuth Scope, you can also configure ["Custom OIDC Scope"](/guides/app-new/create-app/oidc-scope.md) in the ["Protocol Configuration"](/guides/app-new/create-app/protocol-config.md) area of ​​the application.

## Meaning of OIDC user information fields

| Field name            | Translation                                                 |
| :-------------------- | :---------------------------------------------------------- | ---------- |
| sub                   | Abbreviation of subject, unique identifier, usually user ID |
| name                  | given_name                                                  | given name |
| family_name           | surname                                                     |
| middle_name           | middle name                                                 |
| nickname              | nickname                                                    |
| preferred_username    | preferred name                                              |
| profile               | basic information                                           |
| picture               | avatar                                                      |
| website               | website link                                                |
| email                 | email                                                       |
| email_verified        | whether the email is verified                               |
| gender                | gender                                                      |
| birthdate             | birthday                                                    |
| zoneinfo              | time zone                                                   |
| locale                | region                                                      |
| phone_number          | mobile number                                               |
| phone_number_verified | verified mobile number                                      |
| address               | address                                                     |
| formatted             | detailed address                                            |
| street_address        | street address                                              |
| locality              | city                                                        |
| region                | Province                                                    |
| postal_code           | Postal code                                                 |
| country               | Country                                                     |
| updated_at            | Information update time                                     |

[Refer to OIDC specification](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)

## Difference between IdToken and AccessToken

**IdToken** is equivalent to the user's ID card. The developer's front-end should carry **IdToken** when accessing the back-end interface. **Developer server** should verify the user's **IdToken**. After verification, the relevant resources are returned. The OIDC application key or OIDC application public key can be used to verify the signature, and then the user ID and basic information corresponding to this token can be obtained. For example code, see: [Use application key to verify Token](/guides/faqs/how-to-validate-user-token.md#Use application key to verify-hs256-algorithm-signed-token).

**AccessToken** is used to request the resources held by the user on the {{$localeConfig.brandName}} server. Your request to access the {{$localeConfig.brandName}} server needs to carry this **AccessToken** in the Authorization request header. The sample code is as follows:

```js
const axios = require("axios");
axios
  .get({
    url: "https://core.genauth.ai/api/your/resources",
    headers: {
      Authorization: "Bearer YOUR_OIDC_ACCESS_TOKEN",
    },
  })
  .then((res) => {
    // custom codes
  });
```

## Why does the OIDC authorization code process need to change the code to token and then to user information?

The authentication process of the OIDC authorization code mode involves three parties: the user, the OIDC server (OIDC Provider, referred to as OP), and the application business server (Service Provider, referred to as SP).

The purpose of interaction between SP, user, and OP is as follows:

1. SP hopes to get a credible identity assertion so that the user can log in.

2. SP initiates login and jumps to the OP's authentication page. OP asks the user to log in and authorizes his or her own information, and then OP sends an authorization code to SP. In fact, this is passing user information by reference.

3. After receiving the authorization code, SP combines the Client ID and Client Secret to OP in exchange for the user's `access_token`.

4. SP uses `access_token` to get relevant information about the user from OP, thereby obtaining a credible identity assertion and allowing the user to log in.

In the OIDC protocol, after the user successfully logs in, the OIDC authentication server will call back the user's browser to a callback address with an authorization code (code). This authorization code is generally valid for ten minutes and once, and becomes invalid after use. This avoids the risk of exposing the `access_token` or user information on the front end. The validity period of the `access_token` is relatively long, generally 1~2 hours. If it is leaked, it will have a certain impact on the user.

After the back end receives this code, it needs to use the Client Id + Client Secret + Code to exchange the user's `access_token` from the OIDC authentication server. In this step, the OIDC Server actually authenticates the OAuth Client to ensure that the machine that comes to the OIDC authentication server to obtain the `access_token` is trustworthy, not that anyone can come to the OIDC authentication server to exchange the code for a token after getting the code.

If the code is obtained by a hacker, he cannot use it if he does not have the Client Id + Client Secret. Even if he has it, he has to compete with the real application server, because the code is valid once and becomes invalid after use, which increases the difficulty of attack. On the contrary, if the `access_token` or user information is returned directly without the code, it will affect the user once it is leaked.
