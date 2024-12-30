### What is ID Token?

The most important extension of the [OpenID Connect (OIDC) protocol](https://openid.net/specs/openid-connect-core-1_0.html) to the [OAuth 2.0 protocol](https://www.rfc-editor.org/rfc/rfc6749) is the **ID Token** data structure. After a user is authenticated by OIDC, he can get his **ID Token**, which is equivalent to the user's identity credential, which you can think of as his **ID card**.

ID Token is essentially a **JSON Web Token** (JWT), so you can easily get the user's user information, and the JWT mechanism also ensures that the content of the ID Token will not be maliciously forged or tampered with by others. If you want to know more about JWT, you can read [Understanding the Interpretation and Use of JWT Token](https://docs.pre.genauth.ai/concepts/jwt-token.html).

ID Token The example is as follows:

```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MmVhYTk1ZmNhMWM1OTZjNTk5YjY3OWYiLCJhdWQiOiI2MmY3MzNhNzE0OGJmOTU4YWYxZTU0MTAiLCJpYXQiOjE2NjA4MDE1MjEsImV4cCI6MTY2MjAxMTEyMSwiaXNzIjoiaHR0cHM6Ly9zYWRkZGYuY2o ubWVyZWl0aC5jb20vb2lkYyIsIm5vbmNlIjoiVGpESkRUaFcwaCIsIm5hbWUiOm51bGwsImdpdmVuX25hbWUiOm51bGwsIm1pZGRsZV9uYW1 lIjpudWxsLCJmYW1pbHlfbmFtZSI6bnVsbCwibmlja25hbWUiOm51bGwsInByZWZlcnJlZF91c2VybmFtZSI6bnVsbCwicHJvZmlsZSI6bnV sbCwicGljdHVyZSI6Imh0dHBzOi8vZmlsZXMuYXV0aGluZy5jby9hdXRoaW5nLWNvbnNvbGUvZGVmYXVsdC11c2VyLWF2YXRhci5wbmciLC J3ZWJzaXRlIjpudWxsLCJiaXJ0aGRhdGUiOm51bGwsImdlbmRlciI6IlUiLCJ6b25laW5mbyI6bnVsbCwibG9jYWxlIjpudWxsLCJ1cGRhdG VkX2F0IjoiMjAyMi0wOC0xN1QwNjozNToyOC4zNzZaIiwiZW1haWwiOm51bGwsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicGhvbmVfbnVtYmVyIjpudWxsLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlfQ.KDCWkSCxek_-fuRzH7kq8lU_NYMYZKns4gquUoyosi0
```

This is a `Base64` encoded (non-encrypted) string, you can easily decode and verify its content through [various language clients](https://jwt.io/):

```json
{
  "sub": "user_id",
  "aud": "app_id",
  "iat": 1660211717,
  "exp": 1661421317,
  "iss": "https://your_domain.genauth.ai/oidc",
  "nonce": "r7HSS7s_HW",
  "name": null,
  "given_name": null,
  "middle_name": null,
  "family_name": null,
  "nickname": null,
  "preferred_username": null,
  "profile": null,
  "picture": "https://files.authing.co/authing-console/default-user-avatar.png",
  "website": null,
  "birthdate": null,
  "gender": "U",
  "zoneinfo": null,
  "locale": null,
  "updated_at": "2022-08-11T09:55:15.267Z",
  "email": "test@example.com",
  "email_verified": false,
  "phone_number": null,
  "phone_number_verified": false
}
```

There are several important fields:

- `sub`: User ID

- `aud`: GenAuth application ID

- `iss`: OIDC Issuer that issued this Token

(other user information).

**With `id_token`, you can know the user's identity (`sub`), and thus associate it with the business data in your business system; you can also display it based on the user's profile. **

### What is Access Token?

`access_token` is the user's credential for accessing backend resources. When requesting the backend server, **you should carry access_token (not id_token)** in the authorization request header. Take `CURL` as an example:

```bash
$ curl -i --request GET \\
--url http://localhost:5000/api/protected \\
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRmTE90M0xibjhfYThwUk11ZXNzYW1xai1vM0RCQ3MxL W93SExRLVZNcVEifQ.eyJqdGkiOiJTUWxFSGRzTk54MDc4TThwT1R6djMiLCJpYXQiOjE2MTk1MzA4MzQsImV4cCI6 MTYxOTUzNDQzNCwic2NvcGUiOiJvcGVuaWQiLCJpc3MiOiJodHRwczovL29pZGMxLmF1dGhpbmcuY24vb2lkYyIsIm F1ZCI6IjYwNTA3NTFhZWQwZjI5YmY3NzIzYzdhOCIsImF6cCI6IjVmMTdhNTI5ZjY0ZmIwMDliNzk0YTJmZiJ9.Qst hJdDM5TNtfQOAzy6EwuedK9r03SzkgE2GQkQCLv8SZJhg-tOIKzHqjDDUmRTkJPLl3HHQTUAzfS3UUYwOiah3smiYF 7ynx6jukaoGyHTIgXXwavUVmD5j-mnD3kZrLAo-dh5BLBQfLiiE_WlOkQvnKC160K9ETuwQlhx1TGJts0-sMsjsiRx 28EJvdrdWw8CVHGiQVzvCE6kHkYmkO6VTkgEnHNqpRpdB0IysIeKUOWezgGZE-Dmtyam6c8nXW_lr798B194zVyjSOuwGt1tqEfRpBDYiD_ER29aWjH2UbI0pjko_15Ldqno9RgehTJXv5suQ6zdfrER-6b5Bmg'
```

`access_token` has a certain validity period. When `access_token` expires, you need to use `refresh_token` to exchange for a new `access_token`.

### What is Refresh Token?

A `refresh_token` is a special token used to obtain a new `access_token`. Each time you exchange a new `access_token`, you will get a new `refresh_token` again. Your system should store the `refresh_token` securely, because the `refresh_token` allows users to stay logged in for a relatively long period of time.

If you want to get a `refresh_token`, when you [initiate OIDC login](#tag/login/jump to%20Authing%20login), you need to add `offline_access` to `scope`.

</details>
