Use the [AppID](/guides/faqs/get-app-id-and-secret.md) to initialize the `AuthenticationClient` of the [Python SDK](/reference/sdk-for-python/):

```python
from genauth.v2.authentication import AuthenticationClient, AuthenticationClientOptions

authentication_client = AuthenticationClient(
  options=AuthenticationClientOptions(
    app_id='GEN_AUTH_APP_ID'
))
```
