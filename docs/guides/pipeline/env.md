---
meta:
  - name: description
    content: Use environment variables
---

# Use environment variables in Pipeline

<LastUpdated/>

::: hint-success
The concept of environment variables in Pipeline functions is the same as that of environment variables in the operating system. Developers can obtain them through the global variable env. Environment variables are visible to all Pipelien functions in the application pool.
:::

You can configure environment variables on the **Settings** - **Environment variables** page:

![](https://cdn.genauth.ai/blog/20200927200619.png)

Environment variables are a set of Key-Value Pair values ​​that can be used to save WebHook links, keys and other data.

Enter the Key and Value and click Add:

![](https://cdn.genauth.ai/blog/20200927200707.png)

Here, we set an environment variable with the Key as `LARK_WEBHOOK`. In the Pipeline function, we can get the corresponding Value through `env.LARK_WEBHOOK`. For example, the following example triggers a Feishu group notification after user registration:

```js
async function pipe(user, context, callback) {
  const webhook = env.LARK_WEBHOOK;
  await axios.post(webhook, {
    title:
      "New User Registered - From {{$localeConfig.brandName}} Rules Pipeline",
    text: `
                User information:
                ID: ${user.id}
                Nickname: ${user.username}
                Registration method: ${user.registerSource}
                Email: ${user.email}
                Phone number: ${user.phone}
                UA: ${user.device}
                User pool ID: ${user.userPoolId}
          `,
  });
  return callback(null, user, context);
}
```
