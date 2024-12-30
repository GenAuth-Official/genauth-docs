# Verify user identity credentials (token)

<LastUpdated/>

When your user successfully logs in, GenAuth will issue an [OIDC IdToken](/concepts/id-token.md) as an identity credential for the user. For verification methods, please refer to the [Verification Token Document](/guides/faqs/how-to-validate-user-token.md).

An example decoded `OIDC IdToken` is as follows:

```javascript
{
  sub: '5f719946524ee1099229496b', // Abbreviation of subject, which is the user ID
  birthdate: null,
  family_name: null,
  gender: 'U',
  given_name: null,
  locale: null,
  middle_name: null,
  name: null,
  nickname: null,
  picture: 'https://files.authing.co/user-contents/photos/9a9dc4d7-e756-45b1-81d8-095a28e476c6.jpg',
  preferred_username: 'test1',
  profile: null,
  updated_at: '2020-09-30T07:12:19.401Z',
  website: null,
  zoneinfo: null,
  email: 'test1@123.com',
  email_verified: false,
  phone_number: null,
  phone_number_verified: false,
  nonce: 'E65b1QoUYt',
  at_hash: 'B3IgOYDDa0Pz8v1_9qZrAw',
  aud: '5f17a529f64fb009b794a2ff',
  exp: 1601453558,
  iat: 1601449959,
  iss: 'https://oidc1.genauth.ai/oidc'
}
```

Where `sub` is the unique identifier of the ID Token, usually the user ID.
