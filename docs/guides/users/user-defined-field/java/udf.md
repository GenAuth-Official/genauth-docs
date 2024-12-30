!!!include(common/init-java-auth-sdk.md)!!!

First, initialize the SDK with the user's token:

```java
authenticationClient.setAccessToken("ID_TOKEN");
```

Set custom fields:

```java
List<UserDefinedData> list = authenticationClient.setUdv('school', 'Huazhong University of Science and Technology').execute();
```

Get the latest custom data of the user:

```java
List<UserDefinedData> list = authenticationClient.listUdv().execute();
```