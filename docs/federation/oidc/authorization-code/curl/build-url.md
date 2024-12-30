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

It can be none, login, consent or select_account, specifying the interaction method between OP and End-User. **If refresh_token is required**, **consent** must be used.

</ApiMethodParam>

</template>

</ApiMethodSpec>

Request example:

```
https://<your application domain name>.genauth.ai/oidc/auth?client_id=5c9b079883e333d55a101082&redirect_uri=https://www.example.cn/example&scope=openid profile&response_type=code&state=52378542395
```

**If you need to refresh access_token later**, please splice the login link as follows

Login request example with refresh token function:

````
https://<your application domain name>.genauth.ai/oidc/auth?client_id=5c9b079883e333d55a101082&redirect_uri=https://example.com&scope=openid profile offline_access&response_type=code&prompt=consent&state=235345 ```
````
