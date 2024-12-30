# Java

This guide will start with the installation of the GenAuth Java SDK and step by step guide you on how to quickly add user management capabilities to your existing or newly developed applications.

<AppDetailSiderBar />

## Installation

### Gradle project

```
implementation "cn.authing:authing-java-sdk:<{final_version}>"
```

### Maven project

```xml
<dependency>
<groupId>cn.authing</groupId>
<artifactId>authing-java-sdk</artifactId>
<version>{final_version}</version>
</dependency>
```

## Manage your users

### Initialization

````java
import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.model.ManagementClientOptions;

ManagementClientOptions clientOptions = new ManagementClientOptions("GEN_AUTH_USERPOOL_ID", "GEN_AUTH_USERPOOL_SECRET"); ManagementClient managementClient = new ManagementClient(clientOptions); ``` ### Simple management of users ```java //Create user import cn.authing.sdk.java.client.ManagementClient; import cn.authing.sdk.java.dto.CreateUserReqDto; import cn.authing.sdk.java.dto.UserSingleRespDto; import cn.authing.sdk.java.model.ManagementClientOptions; import cn.authing.sdk.java.util.JsonUtils; public class CreateUserTest { private static final String ACCESS_KEY_ID = "GEN_AUTH_USERPOOL_ID"; // User pool id private static final String ACCESS_KEY_SECRET = "GEN_AUTH_USERPOOL_SECRET";//Application key public static void main(String[] args) throws Throwable { ManagementClientOptions clientOptions = new ManagementClientOptions(ACCESS_KEY_ID, ACCESS_KEY_SECRET); ManagementClient client = new ManagementClient(clientOptions); CreateUserReqDto request = new CreateUserReqDto(); request.setUsername("bob"); request.setPassword("123456"); UserSingleRespDto response = client.createUser(request); System.out.println(JsonUtils.serialize(response)); } } ``` ## Error handling ```java import cn.authing.sdk.java.dto.*; import cn.authing.sdk.java.client.ManagementClient; import cn.authing.sdk.java.model.ManagementClientOptions; public static void main(String[] args) { ManagementClientOptions clientOptions = new ManagementClientOptions("GEN_AUTH_USERPOOL_ID", "GEN_AUTH_USERPOOL_SECRET"); ManagementClient managementClient = new ManagementClient(clientOptions); CreateRoleDto request = new CreateRoleDto(); request.setCode("code"); request.setNamespace("namespace"); request.setDescription("description"); RoleSingleRespDto response = managementClient.createRole(request); if (response.getCode() != 200) { throw new RuntimeException(response.getMessage()); // Throw an exception and catch it by global exception catching middleware } } ```
````
