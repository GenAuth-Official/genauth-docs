# Test OIDC Capabilities Based on GenAuth

<LastUpdated/>

After your application completes OIDC integration, GenAuth can help you quickly verify whether you have complete OIDC capabilities. GenAuth provides developers with testing environments for multiple application types and development languages.

OIDC has five authorization modes:

1. Authorization Code Mode

2. Authorization Code + PKCE Mode

3. Implicit Mode

4. Password Mode

5. Client Credentials Mode

Before starting testing, you must understand the relationship between the above authorization modes and your application. This is to help you choose the appropriate authorization mode for testing. For details, please refer to: [Choose OIDC Authorization Mode | GenAuth Documentation](/concepts/oidc/choose-flow.md).

Regardless of which authorization mode you use, the entire testing process requires the following parameters:

- App ID
- App Secret
- Issuer
- appHost
- Login Callback URL
- scope
