# Access Token vs Id Token

<LastUpdated/>

There are two types of identity-related tokens: Access Token and Id Token.

## Access Token

Access Token can be in the format of [JWT](https://tools.ietf.org/html/rfc7519) or a random string. Access Token should be carried to access protected API interfaces, and the API interface should check the scope permission items in the Access Token to decide whether to return resources. For example, an application uses Google login and then synchronizes the user's calendar information. Google will return an Access Token to the application. When the application wants to read and write the user's calendar data, the application needs to carry the returned Access Token to access Google's Calendar API.

**Never** use Access Token for authentication. Access Token itself **cannot indicate whether the user has been authenticated**.

Access Token only contains the user id in the `sub` field. In the application you develop, you should treat Access Token **as a random string** and do not try to parse information from it.

Access Token content example:

```json
{
  "jti": "YEeiX17iDgNwHGmAapjSQ",
  "sub": "601ad46d0a3d171f611164ce", // Abbreviation of subject, which is the user ID
  "iat": 1612415013,
  "exp": 1613624613,
  "scope": "openid profile offline_access",
  "iss": "https://yelexin-test1.genauth.ai/oidc",
  "aud": "601ad382d02a2ba94cf996c4" // Abbreviation of audience, which is the application ID
}
```

Note that Access Token does not contain any user information except id. It contains scope permission items, which are used to call protected API interfaces. So Access Token is used to **call interfaces**, **not for user authentication**.

In many scenarios, you want to get more user information through Access Token. You can call GenAuth's **User Information Endpoint** (Self-built Application **Application Configuration** Tab **Authentication Configuration** Module) with Access Token to get complete user information.

## Id Token

The format of Id Token is [JWT](https://tools.ietf.org/html/rfc7519). Id Token is only applicable to authentication scenarios. For example, if an application uses Google login and then synchronizes the user's calendar information, Google will return Id Token to the application. Id Token contains the user's basic information (user name, avatar, etc.). The application can parse Id Token and use the information in it to display the user name and avatar.

::: hint-warning
Before using Id Token, you should first [verify the legitimacy](/guides/faqs/how-to-validate-user-token.md).
:::

It is not recommended to use ID Token for API access authentication.

The audience (aud parameter) of each ID Token is the ID of the application that initiates the authentication and authorization request (or the AK of the programmatic access account).

Example of the content in the Id Token:

```json
{
  "sub": "601ad46d0a3d171f611164ce", // Abbreviation of subject, which is the user ID
  "birthdate": null,
  "family_name": null,
  "gender": "U",
  "given_name": null,
  "locale": null,
  "middle_name": null,
  "name": null,
  "nickname": null,
  "picture": "https://files.authing.co/authing-console/default-user-avatar.png",
  "preferred_username": null,
  "profile": null,
  "updated_at": "2021-02-04T05:02:25.932Z",
  "website": null,
  "zoneinfo": null,
  "at_hash": "xnpHKuO1peDcJzbB8xBe4w",
  "aud": "601ad382d02a2ba94cf996c4", // audience abbreviation, application ID
  "exp": 1613624613,
  "iat": 1612415013,
  "iss": "https://oidc1.genauth.ai/oidc"
}
```
