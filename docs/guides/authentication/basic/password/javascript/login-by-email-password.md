!!!include(common/init-js-auth-sdk.md)!!!

Use the `loginByEmail` method:

```javascript
authenticationClient.loginByEmail("test@example.com", "passw0rd");
```

or:

```javascript
authenticationClient.loginByEmail(
 'test@example.com',
 'passw0rd',
 {
   autoRegister: true，
   captchaCode: 'xj72'
 }
)
```
