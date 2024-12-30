!!!include(common/init-csharp-auth-sdk.md)!!!

If the user has not set a password before (for example, by registering by mobile phone number, social login, etc.), there is no need to enter the original password.

```csharp
var newPassword = "123456";
await authenticationClient.UpdatePassword(newPassword);
```

or:

```csharp
var oldPassword = "111111";
var newPassword = "123456";
await authenticationClient.UpdatePassword(newPassword, oldPassword);
```