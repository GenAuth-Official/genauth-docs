!!!include(common/init-js-auth-sdk.md)!!!

First, initialize the SDK with the user's token:

```java
authenticationClient.setToken("ID_TOKEN");
```

Set custom fields:

```java
const list = authenticationClient.setUdv('school', 'Huazhong University of Science and Technology');
```

Get the latest custom data of the user:

```java
const list = authenticationClient.listUdv();
```