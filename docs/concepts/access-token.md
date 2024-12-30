---
tags:
  - Access_Token
  - Opaque_Access_Token
  - JWT_Access_Token
  - AccessToken
  - OpaqueAccessToken
  - JwtAccessToken
---

# What is Access Token

<LastUpdated/>

Access Token is used in token-based authentication mode to allow applications to access a resource API. After the user authentication and authorization are successful, GenAuth will issue an Access Token to the application. The application needs to **carry the Access Token** to access the resource API. The resource service API will use the interceptor to check whether the `scope` field in the Access Token contains specific permission items to decide whether to return the resource.

If your user logs in through a social account, such as WeChat, WeChat will issue its own Access Token as an identity provider, and your application can use the Access Token to call WeChat-related APIs. These Access Tokens are controlled by the social account service provider and the format is arbitrary.

## Opaque Access Token

Opaque Access Token is a random string from which no information can be obtained. You need to send it to the server for parsing. Opaque Access Token can only be verified by sending the token to the server.

## JWT Access Token

JWT stands for [JSON Web Token](https://tools.ietf.org/html/rfc7519), which complies with the JWT standard. JWT contains the subject, audience, authority, issuance time, expiration time, user information field, etc. and has a signature, which is not tamperable. Therefore, it does not need to be sent to the server and can be verified locally. GenAuth uses this format of token in most cases.

## Access Token Example

```
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjF6aXlIVG15M184MDRDOU1jUENHVERmYWJCNThBNENlZG9Wa3VweXdVeU0ifQ.eyJqdGkiOiIzWUJ5eWZ2TDB4b01QNXdwTXVsZ0wiLCJzdWIiOiI2MDE5NDI5NjgwMWRjN2JjMm ExYjI3MzUiLCJpYXQiOjE2MTI0NDQ4NzEsImV4cCI6MTYxMzY1NDQ3MSwic2NvcGUiOiJvcGVuaWQgZW1haWwgbWVzc2Fn ZSIsImlzcyI6Imh0dHBzOi8vc3RlYW0tdGFsay5hdXRoaW5nLmNuL29pZGMiLCJhdWQiOiI2MDE5M2M2MTBmOTExN2U3Y2I wNDkxNTkifQ.cYyZ6buwAjp7DzrYQEhvz5rvUBhkv_s8xzuv2JHgzYx0jbqqsWrA_-gufLTFGmNkZkZwPnF6ktjvPHFT-1 iJfWGRruOOMV9QKPhk0S5L2eedtbKJU6XIEkl3F9KbOFwYM53v3E7_VC8RBj5IKqEY0qd4mW36C9VbS695wZlvMYnmXhIop Ysd5c83i39fLBF8vEBZE1Rq6tqTQTbHAasR2eUz1LnOqxNp2NNkV2dzlcNIksSDbEGjTNkWceeTWBRtFMi_o9EWaHExdm5574jQ-ei5zE4L7x-zfp9iAe8neuAgTsqXOa6RJswhyn53cW4DwWg_g26lHJZXQvv_RHZRlQ
```

Parsed content:

```json
{
  "jti": "3YByyfvL0xoMP5wpMulgL",
  "sub": "60194296801dc7bc2a1b2735", // Abbreviation of subject, which is the user ID
  "iat": 1612444871,
  "exp": 1613654471,
  "scope": "openid email message",
  "iss": "https://steam-talk.genauth.ai/oidc",
  "aud": "60193c610f9117e7cb049159"
}
```
