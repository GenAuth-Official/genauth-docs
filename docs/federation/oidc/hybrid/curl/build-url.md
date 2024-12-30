<ApiMethodSpec method="get" host="https://<your application domain name>.genauth.ai" path="/oidc/auth" summary="Concatenate a link and let the end user visit it in the browser to initiate an OIDC authorization login request." description="To initiate authorization, you need to concatenate a URL for authorization and let the end user visit it in the browser. The specific parameters are as follows:">
<template slot="queryParams">
<ApiMethodParam name="client_id" type="string" required description="Application ID." />
<ApiMethodParam name="redirect_uri" type="string" required>

Callback link. After the user successfully authenticates the OP, the OP will send the code, id_token, and access_token to this address in the form of URL hash. This value must appear in the callback address configured in the console, otherwise the OP will not allow callback to this address. When using mixed mode, it is recommended to use https addresses for all redirect_uri configured in the console, otherwise the access_token will be transmitted in plain text, causing security risks. If you want to use http addresses, please turn on the "**Do not force implicit mode callback links to https**" switch in the console.

</ApiMethodParam>
<ApiMethodParam name="scope" type="string" required>

Required permissions must include **openid**. If you need to **get mobile phone number** and **email**, you need to include phone email; multiple scopes should be separated by **spaces**. At the same time, id_token will contain related fields. **Implicit mode does not support returning refresh_token**, so the offline_access field is invalid.

</ApiMethodParam>
<ApiMethodParam name="response_type" type="string" required description="Application ID.">

Return type, optional value is code id_token token. It means that after successful authentication, OP returns code, id_token and access_token. [Refer to OIDC specification](https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationExamples).

</ApiMethodParam>
<ApiMethodParam name="state" type="string" required description="A random string used to prevent CSRF attacks. If the state value in the response is different from the state value set before sending the request, it means that you are under attack." />
<ApiMethodParam name="nonce" required type="string">

A random string used to prevent Replay attacks. **Required in implicit mode**.

</ApiMethodParam>
<ApiMethodParam name="prompt" type="string">

It can be none, login, consent or select_account, specifying the interaction method between OP and End-User. [Refer to OIDC specification](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest).

</ApiMethodParam>

</template>

</ApiMethodSpec>

Assuming you create an OIDC application with the domain name `example`, the authorization URL is:

```
GET https://example.genauth.ai/oidc/auth?client_id=5ca765e393194d5891db1927&redirect_uri=https://example.com&scope=openid profile&response_type=code id_token token&state=23758235&nonce=1831289
```
