---
meta:
  - name: description
content: Python SDK
---

<LastUpdated/>

# {{$localeConfig.brandName}} - Python SDK CSA module

CAS is the abbreviation of Central Authentication Service, an independent open command protocol.

## Initialization

- `app_id` \<str\> Application ID, required.

- `app_host` \<str\> Full application address, such as https://sample-app.genauth.ai, without the last slash '/'.

- `protocol` \<str\> Protocol type, optional values ​​are `oidc`, `oauth`, `saml`, `cas`, fill in `cas` here.

### Example

```python
from genauth.v2.authentication import AuthenticationClient, AuthenticationClientOptions

authentication_client = AuthenticationClient
options=AuthenticationClientOptions(
app_id='GEN_AUTH_APP_ID',
app_host='https://YOUR_DOMAIN.genauth.ai',
protocol='cas',
))
```

## Generate a user login link for the CAS protocol

```python
def build_authorize_url(self):
pass
```

Generate a user login link for the CAS protocol.

### Parameters

None

### Example

```python
from genauth.v2.authentication import AuthenticationClient, AuthenticationClientOptions

authentication_client = AuthenticationClient
options=AuthenticationClientOptions(
app_id='GEN_AUTH_APP_ID',
app_host='https://YOUR_DOMAIN.genauth.ai',
protocol='cas',
))

url = authentication_client.build_authorize_url()
```

### Example data

```http
https://oidc1.genauth.ai/cas-idp/5f17a529f64fb009b794a2ff/login?service=https://example.com
```

## Verify the validity of CAS 1.0 Ticket

```python
def validate_ticket_v1(self, ticket, service):
pass
```

Verify CAS 1.0 Ticket validity.

### Parameters

- `ticket` \<str\> The ticket issued by GenAuth after successful CAS authentication.

- `service` \<str\> CAS callback address.

### Example

```python
from genauth.v2.authentication import AuthenticationClient, AuthenticationClientOptions

authentication_client = AuthenticationClient
options=AuthenticationClientOptions(
app_id='GEN_AUTH_APP_ID',
app_host='https://YOUR_DOMAIN.genauth.ai',
protocol='cas',
))

data = authentication_client.validate_ticket_v1(
ticket='ticket content',
service='service address'
)
```

### Example data

When the ticket is valid, it returns:

```json
{
  "valid": true,
  "username": "user1"
}
```

When the ticket is invalid, it returns:

```json
{
  "valid": false,
  "message": "ticket is invalid"
}
```

## Concatenate the logout URL

```python
def build_logout_url(self, redirect_uri=None):
pass
```

Concatenate the logout URL.

### Parameters

- `redirect_uri` \<str\> The redirection address after logout.

### Example

```python
from genauth.v2.authentication import AuthenticationClient, AuthenticationClientOptions

authentication_client = AuthenticationClient
options=AuthenticationClientOptions(
app_id='GEN_AUTH_APP_ID',
app_host='https://YOUR_DOMAIN.genauth.ai',
protocol='cas',
))

data = authentication_client.build_logout_url(
redirect_uri='http://localhost:3000',
)

```

### Sample data

```http
https://oidc1.genauth.ai/cas-idp/5f17a529f64fb009b794a2ff/logout?service=https://example.com
```
