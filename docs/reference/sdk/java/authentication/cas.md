---
meta:
  - name: description
    content: Java SDK
---

# {{$localeConfig.brandName}} - Java SDK CAS module

<LastUpdated/>

CAS is the abbreviation of Central Authentication Service, an independent open command protocol.

## Initialization

Parameters when initializing AuthenticationClient:

- `appId` \<String\> Application ID, required.

- `appHost` \<String\> Full application address, such as https://sample-app.genauth.ai, without the final slash '/'.

- `protocol` \<ProtocolEnum\> Protocol type, optional values ​​are `OIDC`, `OAUTH`, `SAML`, `CAS`, the default is `OIDC`.

### Example

```java
// Initialize with AppId and AppHostAuthenticationClientOptions options = new AuthenticationClientOptions();
options.setAppId("AUTHING_APP_ID");
options.setAppHost("AUTHING_APP_HOST");
// protocol
options.setProtocol(ProtocolEnum.CAS.getValue());
AuthenticationClient authenticationClient = null;
try {
    authenticationClient = new AuthenticationClient(options);
} catch (IOException | ParseException e) {
    e.printStackTrace();
}
```

## Generate a user login link for the CAS protocol

authenticationClient.buildAuthorizeUrl(ICasParams options)

> Generate a user login link for the CAS protocol

### Parameters

- `options` \<ICasParams\> Parameters to be filled in when initiating authorized login.

- `options.service` The service address requested.

### Example

```java
// Splice CAS login link
//options.setProtocol(ProtocolEnum.CAS.getValue());

ICasParams iCasParams = new ICasParams();
iCasParams.setService("https://example.com");
String respDto = authenticationClient.buildAuthorizeUrl(iCasParams);
```

### Sample data

```http
https://oidc1.genauth.ai/cas-idp/5f17a529f64fb009b794a2ff/login?service=https://example.com
```
