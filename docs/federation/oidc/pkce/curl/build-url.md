<ApiMethodSpec method="get" host="https://<your application domain name>.genauth.ai" path="/oidc/auth" summary="Concatenate a link and let the end user visit it in the browser to initiate an OIDC authorization login request." description="To initiate authorization, you need to concatenate a URL for authorization and let the end user visit it in the browser. The specific parameters are as follows:">

<template slot="queryParams">

<ApiMethodParam name="client_id" type="string" required description="Application ID" />

<ApiMethodParam name="redirect_uri" type="string" required>

Callback link. After the user successfully authenticates the OP, the OP will send the authorization code to this address in the form of a URL query. This value must appear in the callback address configured in the console, otherwise the OP will not allow callbacks to this address.

</ApiMethodParam>

<ApiMethodParam name="scope" type="string" required>

Required permissions, must include **openid**. If **get phone number** and **email** are needed, phone email must be included; if refresh_token is needed, offline_access must be included. Multiple scopes should be separated by **spaces**. The decoded content of **id_token** will contain fields related to the user information corresponding to these scopes.

</ApiMethodParam>

<ApiMethodParam name="response_type" type="string" required description="Return type, fill in code. It means that after successful login, OP will return the authorization code." />

<ApiMethodParam name="state" type="string" required description="A random string used to prevent CSRF attacks. If the state value in the response is different from the state value set before sending the request, it means that the attack has occurred." />

<ApiMethodParam name="prompt" type="string">

It can be none, login, consent or select_account, specifying the interaction method between OP and End-User. **If refresh_token** is required, **consent** must be used.

</ApiMethodParam>

<ApiMethodParam name="code_challenge" type="string">

A string with a length greater than or equal to 43.

</ApiMethodParam>

<ApiMethodParam name="code_challenge_method" type="string">

It can be plain or S256, indicating the digest algorithm used when calculating code_challenge. Plain means no algorithm is used, and S256 means code_challenge is calculated using SHA256.

</ApiMethodParam>

</template>

</ApiMethodSpec>

Code_challenge calculation method:

If `code_challenge_method` is `plain`, you can pass a string with a length greater than or equal to 43 directly in plain text without calculation.

If `code_challenge_method` is `S256`, first generate a string S, calculate SHA256(S) to get a binary Buffer, then convert it to base64 `encoding, and code_challenge` passes this value.

Pseudocode: `BASE64URL-ENCODE(SHA256(ASCII(S)))`

Request example:

```
https://oidc1.genauth.ai/oidc/auth?nonce=5485323897342262&state=7400704296715694&scope=openid+profile&client_id=5f17a529f64fb009b794a2ff&response_mode=query&code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fbaidu.com&response_type=code
```

**If you need to refresh later access_token**, please concatenate the login link as follows

Login request example with refresh token function:

```
https://oidc1.genauth.ai/oidc/auth?nonce=5485323897342262&state=7400704296715694&scope=openid+profile+offline_access&client_id=5f17a529f64fb009b794a2ff&response_mode=query&code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fbaidu.com&response_type=code&prompt=consent
```
