!!!include(common/init-js-auth-sdk.md)!!!

Use the `registerByEmail` method:


```javascript
authenticationClient.registerByEmail("test@example.com", "passw0rd");
```

or:

```javascript
authenticationClient.registerByEmail(
  "test@example.com",
  "passw0rd",
  {
    nickname: "Nick",
  },
  {
    generateToken: true,
  }
);
```
