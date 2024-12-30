!!!include(common/init-js-auth-sdk.md)!!!


If the user has not set a password before (for example, by registering by mobile phone number, social login, etc.), there is no need to enter the original password.

```javascript
authenticationClient.updatePassword("passw0rd"); 
```

or:

```javascript
authenticationClient.updatePassword("passw0rd", "oldPassw0rd"); // The user previously set a password
```
