Initialize the [Python SDK](/reference/sdk-for-python/) `ManagementClient` using [User Pool ID (`userPoolId`) and User Pool Secret (`secret`)](/guides/faqs/get-userpool-id-and-secret.md):

```python
from authing.v2.management import ManagementClient, ManagementClientOptions

management_client = ManagementClient(
  options=ManagementClientOptions(
    user_pool_id='GEN_AUTH_USERPOOL_ID',
    secret='GEN_AUTH_USERPOOL_SECRET',
))
```
