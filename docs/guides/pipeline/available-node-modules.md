---
meta:
  - name: description
    content: Available Node Modules
---

# Available Node Modules

<LastUpdated/>

Currently, the following Node Modules can be used in the {{$localeConfig.brandName}} Pipeline:

- [GenAuth SDK for Node.js](https://github.com/Authing/authing.js)
- Network request library [axios](https://github.com/axios/axios)
- lodash
- {{$localeConfig.brandName}} built-in tool set function utils

## {{$localeConfig.brandName}} SDK for Node.js

::: hint-danger
For security reasons, {{$localeConfig.brandName}} will be initialized in a special way using your user pool ID (userPoolId) and user pool key (secret) authing-js-sdk, this process will not send your user pool key to the public network. You can use the global variable **authing**, **do not initialize the SDK again! **
:::

Developers can directly use the authing instance after [initialization](/reference/sdk-for-node/README.md), **no need to initialize manually**! {{$localeConfig.brandName}} Pipeline will automatically help developers take care of the initialization process.

As shown below:

```js
async function pipe(user, context, callback) {
  // Judge whether the user's mailbox ends with @genauth.ai
  if (!user.email.endsWith("@genauth.ai")) {
    return callback(null, user, context);
  }

  try {
    // Call API to add a role to the user
    await authing.roles.addUsers("ROLE", [user.id]);
  } catch (error) {}

  callback(null, user, context);
}
```

In addUsers(), we use env.ROOT_GROUP_ID to obtain the group ID through the environment variable, which avoids hard coding. For how to use environment variables in Pipeline functions, see [Using Environment Variables](env.md).
For how to use callbacks and the complete API of Pipeline functions, see [Pipeline Function API Documentation](pipeline-function-api-doc.md).

## Network request library

Currently {{$localeConfig.brandName}} supports the use of `axios` and supports async/await syntax 🚀!

For detailed documentation of axios, please go to [its official documentation](https://github.com/axios/axios).

## lodash

Developers need to import manually:

```js
const lodash = require("lodash");
```

For detailed documentation, please go to [its official documentation](https://lodash.com/docs/).

## Built-in tool set utils

{{$localeConfig.brandName}} has some built-in encapsulated practical functions for developers to call directly.

Developers need to import manually:

```js
const utils = require("./utils");
```

### Check if the IP is within the IP range <a id="iprangecheck"></a>

Usage:

```js
utils.ipRangeCheck(IP, [start, end]);
```

The return value is boolean.

Example: The following Pipeline function implements the function of registering an IP range whitelist.

```js
async function pipe(context, callback) {
  const utils = require("./utils");
  const ip = context.ip;
  if (ip && utils.ipRangeCheck(ip, ["110.53.254.1", "110.53.254.255"])) {
    return callback(null, context);
  }
  return callback(new Error("Access Denied!"));
}
```

## Other Node built-in modules

{{$localeConfig.brandName}} Pipeline uses the node8 engine, and all [node8 built-in modules](https://nodejs.org/dist/v8.17.0/docs/api/documentation.html) can be used, such as `querystring`, etc.
