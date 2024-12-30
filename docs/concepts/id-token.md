---
tags:
  - ID_Token
  - IdToken
---

# What is ID Token

<LastUpdated/>

In the `OIDC` protocol, you will encounter three types of tokens: `id_token`, `access_token` and `refresh_token`. This article will introduce what is **ID Token**, you can also read separately:

- [What is Access Token](./access-token.md)
- [What is Refresh Token](./refresh-token.md)

The most important extension of the [OIDC (OpenID Connect) protocol](https://openid.net/specs/openid-connect-core-1_0.html) to the [OAuth 2.0 protocol](https://tools.ietf.org/html/rfc6749) is the **ID Token** data structure. **ID Token** is equivalent to the user's identity credential. The developer's front-end can carry **ID Token** when accessing the back-end interface. **Developer server** can verify the user's **ID Token** to determine the user's identity. After passing [verification](/guides/faqs/how-to-validate-user-token.md), relevant resources are returned.

**ID Token** is essentially a [`JWT Token`](./jwt-token.md), which contains key/value pairs related to the user's identity information, for example:

```json
{
  "iss": "https://server.example.com",
  "sub": "24400320", // Abbreviation of subject, which is the user ID
  "aud": "s6BhdRkqt3",
  "nonce": "n-0S6_WzA2Mj",
  "exp": 1311281970,
  "iat": 1311280970,
  "auth_time": 1311280969,
  "acr": "urn:mace:incommon:iap:silver"
}
```

**ID Token** is essentially a `JWT Token`, which means:

- The user's identity information is directly encoded into `id_token`, you don't need to request additional resources to obtain user information;
- `id_token` can verify that it has not been tampered with. For details, please see [How to Verify ID Token](/guides/faqs/how-to-validate-user-token.md).

## ID Token complete field meaning

| Field name            | Translation                                                 |
| :-------------------- | :---------------------------------------------------------- |
| sub                   | Abbreviation of subject, unique identifier, usually user ID |
| name                  | given name                                                  |
| given_name            | given name                                                  |
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
| region                | province                                                    |
| postal_code           | zip code                                                    |
| country               | country                                                     |
| updated_at            | information update time                                     |

[Refer to OIDC specification](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)
