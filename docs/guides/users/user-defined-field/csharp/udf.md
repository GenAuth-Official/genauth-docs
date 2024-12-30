!!!include(common/init-csharp-auth-sdk.md)!!!

First, initialize the SDK with the user's token:

```java
authenticationClient.Token = "user token";
```

Set custom fields:

```csharp
var key = "key";
var anyValue = "value";
var list = await authenticationClient.SetUdv(key, anyValue);
Console.WriteLine(list.Count());
```

Get the latest custom data for the user:

```csharp
var list = await authenticationClient.ListUdv();
Console.WriteLine(list.Count());
```