# Access MFA through SDK

<LastUpdated/>

## Overview

{{$localeConfig.brandName}} can not only configure the MFA authentication process through the console, but also customize the MFA authentication process of {{$localeConfig.brandName}} through the SDK.

This article will take [{{$localeConfig.brandName}} - Node/JavaScript SDK](/reference/sdk-for-node/) as an example to guide users to complete the SDK-based MFA custom development.

It includes: binding MFA authenticator, unbinding MFA authenticator, user secondary authentication, etc.

## Preparation

1. <a :href="`${$themeConfig.consoleDomain}`">Register a {{$localeConfig.brandName}} account</a>.
2. [Create a user pool and application](/guides/basics/authenticate-first-user/use-hosted-login-page.md).

## Multi-factor authentication (MFA) API

[Reference authentication API documentation](https://api.genauth.ai/openapi/v3/authentication/#tag/MFA%20%E8%A6%81%E7%B4%A0%E7%AE%A1%E7%90%86/API%20%E5%88%97%E8%A1%A8)

[Reference management API documentation](https://api.genauth.ai/openapi/v3/management/#tag/%E7%AE%A1%E7%90%86%E7%94%A8%E6%88%B7/API%20%E5%88%97%E8%A1%A8/operation/UsersManagementController_getUserMfaInfo)

## Multi-factor authentication (MFA) SDK

[Reference SDK v2 Documentation](https://docs.genauth.ai/reference/sdk-for-node/authentication/MfaAuthenticationClient.html)
