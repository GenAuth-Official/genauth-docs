!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `create` method of [UsersManagementClient](/reference/sdk-for-java/management/UsersManagementClient.md) to create a user:

```java
String email = "test@example.com";
String password = "123456";
User user = managementClient.users().create(new CreateUserInput().withEmail(email).withPassword(password)).execute();
```