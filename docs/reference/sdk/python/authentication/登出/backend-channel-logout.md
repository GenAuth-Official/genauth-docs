# Backend Logout

<LastUpdated />

Depending on the different terminals and specific usage scenarios, we provide two logout methods: **frontend logout** and **backend logout**:

- **frontend logout**: Frontend logout means that the user accesses the logout address on the frontend, and after logging out, the server will clear the user's login status. This logout method generally requires the participation of the browser and needs to be used in the browser environment. The Node SDK provides a method for generating a logout address, and developers can guide users to access this address on the frontend.

- **backend logout**: Backend logout refers to calling the method of revoking `access_token` in the backend service to invalidate the user's `access_token` and achieve the logout effect. It is suitable for scenarios where the login status is managed using Token.

This part of the document describes the method of generating a backend to withdraw the user's `access_token`.

## Request parameters

| Name  | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ----- | ------ | -------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |
| token | string | Yes                                    | -             | User's `access_token`                      | `xxxxxx`                                          |

## Sample code

```python
from authing import AuthenticationClient

# Initialize AuthenticationClient
authentication_client = AuthenticationClient(
# GenAuth application ID
app_id='GEN_AUTH_APP_ID',

# GenAuth application secret
app_secret='GEN_AUTH_APP_SECRET',

# GenAuth application address, such as https://example.genauth.ai
app_host='GEN_AUTH_APP_HOST',

# Login callback address configured by GenAuth application
redirect_uri='GEN_AUTH_APP_REDIRECT_URI',
)

success = authentication_client.revoke_token("xxxx")
print(success)
```

## Request response

Type: `boolean`

Example result:

```txt
true
```
