---
meta:
  - name: description
content: Java SDK
---

# {{$localeConfig.brandName}} - Java SDK SAML module

<LastUpdated/>

Security Assertion Markup Language (SAML, pronounced sam-el) is an open XML-based standard data format for exchanging authentication and authorization data between parties, especially between identity providers and service providers.

## Initialization

When initializing AuthenticationClient, you need to pass the AuthenticationClientOptions parameter, some of its properties are listed below:

- `appId` \<String\> App ID, required.

- `secret` \<String\> Application Key, required.

- `host` \<String\> Full application address, such as https://sample-app.genauth.ai, without the final slash '/'.

- `redirectUri` \<String\> Business callback URL, required. For details, please refer to [Authorization Code Mode](https://docs.genauth.ai/v2/guides/federation/oidc.html#%E6%8E%88%E6%9D%83%E7%A0%81%E6%A8%A1%E5%BC%8F).
- `protocol` \<ProtocolEnum\> Protocol type, optional values ​​are `OIDC`, `OAUTH`, `SAML`, `CAS`, default is `OIDC`.
- `tokenEndPointAuthMethod` \<AuthMethodEnum\> Get token endpoint verification method, optional values ​​are `CLIENT_SECRET_POST`, `CLIENT_SECRET_BASIC`, `NONE`, default is `CLIENT_SECRET_POST`.
- `introspectionEndPointAuthMethod` \<AuthMethodEnum\> Inspection token endpoint authentication method, optional values ​​are `CLIENT_SECRET_POST`, `CLIENT_SECRET_BASIC`, `NONE`, default is `CLIENT_SECRET_POST`.
- `revocationEndPointAuthMethod` \<AuthMethodEnum\> Revocation token endpoint authentication method, optional values ​​are `CLIENT_SECRET_POST`, `CLIENT_SECRET_BASIC`, `NONE`, default is `CLIENT_SECRET_POST`.

### Example

```java
// Initialize with AppId and appHost
AuthenticationClientOptions options = new AuthenticationClientOptions();
options.setAppId("AUTHING_APP_ID");
options.setAppHost("AUTHING_APP_HOST");
options.setProtocol(ProtocolEnum.SAML.getValue());
AuthenticationClient authenticationClient = null;
try {
  authenticationClient = new AuthenticationClient(options);
} catch (IOException | ParseException e) {
  e.printStackTrace();
}
```

## Generate user login link for SAML2 protocol

authenticationClient.buildAuthorizeUrl()

> Generate user login link for SAML2 protocol

### Parameters

None

### Example

```java
// Splice SAML2 Login link
//options.setProtocol(ProtocolEnum.SAML.getValue());

String respDto = authenticationClient.buildAuthorizeUrl();
```

### Sample Data

```http
https://oidc1.genauth.ai/api/v2/saml-idp/5f17a529f64fb009b794a2ff
```
