# Add extended fields to IdToken

<LastUpdated/>

## What is IdToken

**id_token** is equivalent to the user's ID card. The developer's front-end should carry id_token when accessing the back-end interface. **Developer server** needs to verify the id_token passed by the front-end. You can use the key of the OIDC application or the public key of the OIDC application to verify the signature, and then you can get the user ID and basic information corresponding to this token. For example code, see: [Use application key to verify Token](/guides/basics/authenticate-first-user/how-to-validate-user-token.md#Use application key to verify-hs256-algorithm-signed-token).

In {{$localeConfig.brandName}}, the `token` field of [user information](/guides/user/user-profile.md) is an IdToken.

## Default fields of IdToken

An OIDC IdToken contains the following fields by default, [refer to the OIDC specification](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims):

| Field name | Meaning |
| :--- | :--- |
| sub | Abbreviation of subject, which is the user ID |
| name | given name |
| given\_name | given name |
| family\_name | surname |
| middle\_name | middle name |
| nickname | nickname |
| preferred\_username | preferred name |
| profile | basic information |
| picture | avatar |
| website | website link |
| email | email |
| email\_verified | whether the email is verified |
| gender | gender |
| birthdate | birthday |
| zoneinfo | time zone |
| locale | region |
| phone\_number | Phone number |
| phone\_number\_verified | Verified phone number |
| address | Address |
| formatted | Detailed address |
| street\_address | Street address |
| locality | City |
| region | Province |
| postal\_code | Postal code |
| country | Country |
| updated\_at | Information update time |

## Add extended fields to IdToken

You can use the [Pipeline capability](/guides/pipeline/) of {{$localeConfig.brandName}} to insert a custom code snippet in the user authentication process and add a custom `IdToken` field to the user. For example, in the following example, we add the field `KEY` to the user's `id_token`, with the value `VALUE`:

```javascript
async function pipe(user, context, callback) {
  user.addToken('KEY', 'VALUE')
  callback(null, user, context)
}
```

> You can parse `id_token` on [this website](https://jwt.yelexin.cn).

