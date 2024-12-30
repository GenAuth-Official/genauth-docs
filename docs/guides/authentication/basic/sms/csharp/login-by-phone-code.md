!!!include(common/init-csharp-auth-sdk.md)!!!

First, call the Send SMS Verification Code API to send the SMS verification code, and then use the `LoginByPhoneCode` method:

```csharp
var phone = "phone number";
var code = "1234";
var user = await authenticationClient.LoginByPhoneCode(phone, code);
Console.WriteLine(user.Phone);
```