The caller can use the SDK to obtain an access token from GenAuth.

```js
const authenticationClient = new AuthenticationClient({
  appId: "GEN_AUTH_APP_ID",
  secret: "GEN_AUTH_APP_SECRET",
  redirectUri: "Business callback address",
});
let res = await authenticationClient.getAccessTokenByClientCredentials(
  "email openid profile phone",
  {
    accessKey: "Programming access account AK",
    secretKey: "Programming access account SK",
  }
);
```

Sample data:

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRmTE90M0xibjhfYThwUk11ZXNzYW1xai1vM0RCQ3MxLW93SExRLVZNcVEifQ.eyJqdGkiOiJsdzg0NW5zdGcwS3EtMTlodVpQOHYiLCJzdWIiOiI1ZmY3MDFkODQ2YjkyMDNlMmY2YWM2ZjMiLCJpYXQiOjE2MTU4ODM1ODYsImV4cCI6MTYxNTg4NzE4Niwic2NvcGUiOiJlbWFpbCBvcGVuaWQgcHJvZmlsZSBwaG9uZSIsImlzcyI6Imh0dHBzOi8vb2lkYzEuYXV0aGluZy5jbi9vaWRjIiwiYXVkIjoiNWYxN2E1MjlmNjRmYjAwOWI3OTRhMmZmIn0.VvYKBcWcr8iIi1b37ugWQ9hsvog4_7EqDQyFqwhIuvM0NHlHH3Bhw83EQIKSNfbWV4nv3ihfeNGPLMzslbQr-wwjnWZTLMYl1bcn7IdVtD_kTN3Zz10MwF5td-VQ7UndU28wJ0HE1mo6E8QH93kYGckS5FSZXmCBa0M5H59Jec_a1MHI1MZrr_V9cZ9EfeF97V-PcqU8JVAwDZclCJ3mWY_Mb65RnMR9yEVqUZzJStmaXGMuRIzjkm2pklqt0CtQQJfzECXq_4USpwRXDiYLWILYPUCcO6hGxDjhMEd8IcxdG51TQP-w1UM6LyIRn61uSJvDsz8zg5dStDKyocypiA",
  "expires_in": 3600,
  "scope": "email openid profile phone",
  "token_type": "Bearer"
}
```

See the [documentation](/reference/sdk-for-node/authentication/StandardProtocol.html#client-credentials-mode-obtain-access-token) for details.
