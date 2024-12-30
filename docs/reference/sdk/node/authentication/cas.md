---
meta:
  - name: description
content: Node.js/JavaScript SDK
---

<LastUpdated/>

# {{$localeConfig.brandName}} - Node.js SDK CSA module

CAS is the abbreviation of Central Authentication Service, an independent open instruction protocol.

## Generate user login link for CAS protocol

> Generate user login link for CAS protocol

```js
AuthenticationClient().buildAuthorizeUrl(options);
```

### Parameters

- `options` \<object\> Parameters to be filled in when initiating authorized login.

- `options.service` \<string\> Business callback address in CAS protocol.

### Example

```js
// Splice CAS login link
const authenticationClient = new AuthenticationClient({
  appId: "Application ID",
  appHost: "https://{YOUR_DOMAIN}.genauth.ai",
  protocol: "cas",
});
let url = authenticationClient.buildAuthorizeUrl({
  service: "service address",
});
```

### Example data

```http
https://oidc1.genauth.ai/cas-idp/5f17a529f64fb009b794a2ff/login?service=https://example.com
```

## Verify the validity of CAS 1.0 Ticket

> Verify the validity of CAS 1.0 Ticket.

```js
AuthenticationClient().validateTicketV1(ticket, service);
```

### Parameters

- `ticket` \<string\> The ticket issued by GenAuth after successful CAS authentication.

- `service` \<string\> CAS callback address.

### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: "Application ID",
  appHost: "https://{YOUR_DOMAIN}.genauth.ai",
});
let res = await authenticationClient.validateTicketV1(
  "Ticket content",
  "service address"
);
```

### Example data

When the ticket is valid, return:

```json
{
  "valid": true
}
```

When the ticket is invalid, return:

```json
{
  "valid": false,
  "message": "Ticket is invalid"
}
```

## Verify the validity of CAS 2.0 Ticket

> Verify the validity of CAS 2.0 Ticket and return user attributes at the same time. The data format is JSON by default, and XML can be selected.

```js
AuthenticationClient().validateTicketV2(ticket, service, format);
```

### Parameters

- `ticket` \<string\> The ticket issued by GenAuth after successful CAS authentication.
- `service` \<string\> CAS callback address.
- `format` \<string\> Return data format, optional values ​​are XML and JSON, and the default is JSON.

### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: "Application ID",
  appHost: "https://{YOUR_DOMAIN}.genauth.ai",
});
let res = await authenticationClient.validateTicketV2(
  "ticket content",
  "service address"
);
```

### Example data

Returned when the ticket is valid, JSON format:

````json
{
"serviceResponse": {
"authenticationSuccess": {
"user": "test1@123.com",
"attributes": {
"updated_at": "2021-06-16T14:03:17.358Z",
"address": {
"country": null,
"postal_code": null,
"region": null,
"formatted": null
},
"phone_number_verified": false,
"phone_number": null, "locale": null, "zoneinfo": null, "birthdate": null, "gender": "U", "email_verified": true, "email": "test1@123.com", "website": null, "picture": "https://files.authing.co/user-contents/photos/9a9dc4d7-e756-45b1-81d8-095a28e476c6.jpg", "profile": null, "preferred_username": "test1@123.com", "nickname": null, "middle_name": null, "family_name": null, "given_name": "AAA", "name": null, "sub": "5f719946524ee1099229496b", "external_id": null, "unionid": "ldap:f63ed82a-ab77-40da-97bd-defd910d2afd:uid=5fa0354af2c5d2f5c377c991,ou=users,o=5fa029ac692f1d4b55a87623,dc=authing,dc=cn" } } } } ``` XML format: ```xml <cas:serviceResponse xmlns:cas="http://www.yale.edu/tp/cas"> <cas:authenticationSuccess> <cas:user>test1@123.com</cas:user> <cas:attributes> <cas:authenticationDate>2021-06-16T13:12:29.369Z</cas:authenticationDate> <cas:longTermAuthenticationRequestTokenUsed>false</cas:longTermAuthenticationRequestTokenUsed> <cas:updated_at/> <cas:address> <cas:locality/> <cas:street_address/> </cas:address> <cas:phone_number_verified>false</cas:phone_number_verified> <cas:gender>U</cas:gender> <cas:email_verified>false</cas:email_verified> <cas:email>test1@123.com</cas:email> <cas:picture>https://files.authing.co/authing-console/default-user-avatar.png</cas:picture> <cas:nickname>aaa</cas:nickname> <cas:sub>6063fcd01d0d2e39d4596904</cas:sub> <cas:external_id>046bb9d1-8501-11e9-bfaa-7cd30abeb5de</cas:external_id>
</cas:attributes>
</cas:authenticationSuccess>
</cas:serviceResponse>
````

Returned when the ticket is invalid, JSON format:

```json
{
  "serviceResponse": {
    "authenticationFailure": {
      "code": "INVALID_TICKET",
      "description": "Ticket is invalid"
    }
  }
}
```

XML format:

```xml
<cas:serviceResponse xmlns:cas='http://www.yale.edu/tp/cas'>
<cas:authenticationFailure code="INVALID_TICKET">
Ticket is invalid
</cas:authenticationFailure>
</cas:serviceResponse>
```

## Concatenate logout URL

> Concatenate logout URL.

```js
AuthenticationClient().buildLogoutUrl(options);
```

### Parameters

- `options` \<string\> Logout configuration items.

- `options.redirectUri` \<string\> Redirect address after logout.

### Example

```javascript
// Splice cas logout link
const authenticationClient = new AuthenticationClient({
  appId: "Application ID",
  appHost: "https://{YOUR_DOMAIN}.genauth.ai",
  protocol: "cas",
});
let url = authenticationClient.buildLogoutUrl({
  redirectUri: "https://www.genauth.ai",
});
```

### Example data

```http
https://oidc1.genauth.ai/cas-idp/5f17a529f64fb009b794a2ff/logout?service=https://example.com
```
