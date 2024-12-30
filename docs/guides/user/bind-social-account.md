# Bind account

<LastUpdated/>

You may encounter such a scenario: your user registered an account with a mobile phone number and registered another account with WeChat. Now you want to bind the WeChat account to the mobile phone account, so that when the user logs in with WeChat in the future, he will log in to the mobile phone account and return the information of the mobile phone account.

You can bind the user's social account to his main account (mobile phone, email account) by calling the following interface:

<ApiMethodSpec method="post" host="https://core.genauth.ai" path="/api/users/link" summary="Bind social account to main account">
<template slot="description">

If you want to bind a social account to a main account, the end user must provide the credentials of the **social account** and the credentials of the **main account** to prove that he is the owner of these two accounts, and then bind them.

</template>
<template slot="headers">
<ApiMethodParam name="Content-Type" type="string" required description="application/x-www-form-urlencoded" />
</template>
<template slot="formDataParams">
<ApiMethodParam name="primaryUserToken" type="string" required description="Primary Account Token" />
<ApiMethodParam name="secondaryUserToken" type="string" required description="Social Account Token" />
</template>
<template slot="response">
<ApiMethodResponse>

```json
{
  "code": 200,
  "message": "Binding Successful"
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

::: hint-warning
After completing the binding of the social account, the data corresponding to the original social account will be deleted, and you will not be able to log in to the original social account again.
:::
