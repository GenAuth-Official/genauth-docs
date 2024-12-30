---
meta:
  - name: description
content: Python SDK
---

<LastUpdated/>

# {{$localeConfig.brandName}} - Python SDK SAML module

Security Assertion Markup Language (SAML, pronounced sam-el) is an open source standard data format based on XML for exchanging authentication and authorization data between parties, especially between identity providers and service providers.

## Initialization

- `app_id` \<str\> Application ID, required.

- `app_host` \<str\> Full application address, such as https://sample-app.genauth.ai, without the final slash '/'.

- `protocol` \<str\> Protocol type, optional values ​​are `oidc`, `oauth`, `saml`, `cas`, fill in `saml` here.

### Example

```python
from genauth.v2.authentication import AuthenticationClient, AuthenticationClientOptions

authentication_client = AuthenticationClient
options=AuthenticationClientOptions(
app_id='GEN_AUTH_APP_ID',
app_host='https://YOUR_DOMAIN.genauth.ai',
protocol='saml',
))
```

## Generate a user login link for the SAML2 protocol

```python
def build_authorize_url(self):
pass
```

Generate a user login link for the SAML2 protocol.

### Parameters

None

### Example

```python
from genauth.v2.authentication import AuthenticationClient, AuthenticationClientOptions

authentication_client = AuthenticationClient
options=AuthenticationClientOptions(
app_id='GEN_AUTH_APP_ID',
app_host='https://YOUR_DOMAIN.genauth.ai',
protocol='saml',
))

url = authentication_client.build_authorize_url()
```

### Example data

```http
https://oidc1.genauth.ai/api/saml-idp/5f17a529f64fb009b794a2ff
```

## Concatenate the logout URL

```python
def build_logout_url(self, redirect_uri=None):
pass
```

Concatenate the logout URL, users can log out through this link.

### Parameters

- `redirect_uri` \<str\> Redirect address after logout.

### Example

```python
from genauth.v2.authentication import AuthenticationClient, AuthenticationClientOptions

authentication_client = AuthenticationClient
options=AuthenticationClientOptions(
app_id='GEN_AUTH_APP_ID',
app_host='https://YOUR_DOMAIN.genauth.ai',
secret='GEN_AUTH_APP_SECRET',
protocol='saml',
))
url = authentication_client.build_logout_url(
redirect_uri="http://localhost:3000"
);
```

### Example data

```http
https://oidc1.genauth.ai/login/profile/logout?redirect_uri=https://www.genauth.ai
```
