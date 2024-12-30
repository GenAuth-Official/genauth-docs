Initialize the [Java SDK](/reference/sdk-for-java/) `ManagementClient` using [User Pool ID (`userPoolId`) and User Pool Secret (`secret`)](/guides/faqs/get-userpool-id-and-secret.md):

```java
import cn.genauth.core.mgmt.ManagementClient;

public class ManagementClientTest {
    public static void main(String[] args){
        ManagementClientOptions options = new ManagementClientOptions();
        options.setAccessKeyId(GEN_AUTH_USERPOOL_ID);
        options.setAccessKeySecret(GEN_AUTH_USERPOOL_SECRET);
        ManagementClient client = new ManagementClient(options);
    }
}
```
