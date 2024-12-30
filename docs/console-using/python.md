# Python

This guide will start with the installation of the GenAuth Python SDK and step by step guide you on how to quickly add user authentication and management capabilities to your existing or newly developed applications.

<AppDetailSiderBar />

## Installation

```bash
#Install using `pip`
pip install authing
```

## Authenticate your user

### Initialization

```python
from genauth.v2.authentication import AuthenticationClient, AuthenticationClientOptions

authentication_client = AuthenticationClient(
options=AuthenticationClientOptions(
app_id='GEN_AUTH_APP_ID',# Application ID
secret='GEN_AUTH_SECRET',# Application Secret
app_host='GEN_AUTH_DOMAIN',# User pool domain name corresponding to the application
redirect_uri='GEN_AUTH_REDIRECTURI'# Redirect target URL after authentication is completed
)
)
```

### Simple authentication user

```python
#Generate user login link for OIDC protocol
data = authentication_client.build_authorize_url(scope="openid profile offline_access")
```

## Manage your users

### Initialization

```python
from authing.v2.management import ManagementClient, ManagementClientOptions

management_client = ManagementClient(
options=ManagementClientOptions(
user_pool_id='GEN_AUTH_USERPOOL_ID',# User pool ID
secret='GEN_AUTH_USERPOOL_SECRET',# User pool key
host='https://api.genauth.ai'# GenAuth server address
)
)
```

### Simple management of users

```python
#Create user
data = management_client.users.create(
userInfo={
'email': 'admin@test.com',
'password': 'test',
}
)
```

## Error handling

````python
from genauth.v2.authentication import AuthenticationClient, AuthenticationClientOptions
from authing.v2.exceptions import AuthingException authentication_client = AuthenticationClient( options=AuthenticationClientOptions( app_id='GEN_AUTH_APP_ID', secret='GEN_AUTH_SECRET', app_host='GEN_AUTH_DOMAIN', redirect_uri='GEN_AUTH_REDIRECTURI'# Redirect target URL after authentication is completed ) ) try: authentication_client.login_by_username( username='test', password='passw0rd', ) except AuthingException as e: print(e) ```
````
