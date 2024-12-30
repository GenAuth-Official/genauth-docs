Use the `SendSmsCode` method to send the verification code:

```csharp
var phone = "phone number";
await authenticationClient.SendSmsCode(phone);
```