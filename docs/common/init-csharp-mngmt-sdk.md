Initialize the ManagementClient of the C# SDK using the User Pool ID (`userPoolId`) and User Pool Secret (`secret`):

```csharp
using GenAuth.ApiClient;

var managementClient = new ManagementClient("GEN_AUTH_USERPOOL_ID", "GEN_AUTH_USERPOOL_SECRET");
```
