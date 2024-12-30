!!!include(common/init-csharp-auth-sdk.md)!!!

First, call the SMS verification code sending interface to send the SMS verification code, and then use the `RegisterByPhoneCode` method:


```csharp
var phone = "phone number";
var code = "1234";
var password = "123456";
var user = await authenticationClient.RegisterByPhoneCode(phone, code, password);
Console.WriteLine(user.Phone);
```
