!!!include(common/init-csharp-mngmt-sdk.md)!!!

Use the `create` method of [UsersManagementClient](/reference/sdk-for-csharp/management/UsersManagementClient.md) to create a user:

```csharp
var email = "test@example.com";
var password = "123456";
var user = managementClient.Users.Create(new CreateUserInput()
{
  Email = email,
  Password = password,
})
```