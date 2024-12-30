Use the [UserPool ID](/guides/faqs/get-userpool-id-and-secret.md) and [AppID](/guides/faqs/get-app-id-and-secret.md) to initialize the `AuthenticationClient` of the [Java SDK](/reference/sdk-for-java/):

```java
import cn.genauth.core.auth.AuthenticationClient;
// Initialize with AppId and appHost
AuthenticationClientOptions options = new AuthenticationClientOptions();
options.setAppId(GEN_AUTH_APP_ID);
options.setAppHost(GEN_AUTH_APP_HOST);
AuthenticationClient client = new AuthenticationClient(options);
```
