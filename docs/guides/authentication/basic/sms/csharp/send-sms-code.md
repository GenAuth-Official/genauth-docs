!!!include(common/init-csharp-auth-sdk.md)!!!

Use the `SendSmsCode` method:

```csharp
var phone = "phone number";
await authenticationClient.SendSmsCode(phone);
```