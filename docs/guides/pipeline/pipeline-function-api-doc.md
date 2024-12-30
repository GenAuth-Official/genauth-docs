---
meta:
  - name: description
    content: Pipeline Function Development Guide
---

# Pipeline Function Development Guide

<LastUpdated/>

::: hint-success
Pipeline is a group of functions. The difference from ordinary Hooks is that the function data in the entire process of Pipeline can be passed to each other to achieve the same effect as industrial assembly lines. This design pattern can make developers' custom functions more modular and easier to manage.
:::

::: hint-danger
For security reasons, {{$localeConfig.brandName}} will use your user pool ID (userPoolId) and user pool key (secret) to initialize authing-js-sdk in a special way. This process will not send your user pool key to the public network. You can use the global variable **authing**, **Do not initialize the SDK again! **
:::

## Pipeline function type <a id="pipeline-type"></a>

Currently {{$localeConfig.brandName}} supports six types of Pipeline functions:

| Trigger scenario                  | Description                                                                                                                                                                                                                                                                                                                              |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Before registration               | Triggered before each user officially enters the registration logic, **user information has not been saved to the database at this time**. Developers can customize the user registration process here to implement functions such as registered email whitelist and registered IP whitelist.                                            |
| After registration                | Triggered after each user completes the registration logic, **user information has been saved to the database at this time**. Developers can obtain and customize the extended user registration information here to implement functions such as writing custom Metadata to the database and new user registration webhook notification. |
| Before authentication             | Triggered before each user completes authentication, **login information has not been written to the database at this time**. Developers can customize the user login process here to implement functions such as prohibiting users from logging in during specific time periods and blocking suspicious IP logins.                      |
| After authentication              | Triggered after each user completes authentication, **the login information has been written to the database**. Developers can obtain and customize the login information of extended users here, write user location information into Metadata, use ui-avatars to generate user avatars, and other functions.                           |
| Before OIDC ID Token Issuance     | Triggered before the OIDC application issues the ID Token (**only triggered in authorization code mode, implicit mode, and password mode**). Developers can write custom fields to the ID Token here.                                                                                                                                    |
| Before OIDC Access Token Issuance | Triggered before the OIDC application issues the Access Token. Developers can write custom fields to the Access Token here.                                                                                                                                                                                                              |

::: hint-danger
Please do not interrupt the normal authentication process in the "after registration" and "after authentication" scenarios, otherwise it will cause inconsistencies between database data and return results, resulting in unexpected errors!
:::

::: hint-info
In the OIDC authentication process, the authorization code mode, implicit mode, password mode, and programmatic access account mode will issue an Access Token and trigger the corresponding Pipeline function.

When using a programmatic access account for authentication, the OIDC ID Token will not be issued, and the corresponding Pipeline function will not be triggered.
:::

::: hint-info
For the detailed process of how an OIDC application uses an authorization code to exchange for an ID Token and an Access Token, please refer to: [Using OIDC Authorization](/federation/oidc/authorization-code/?step=2).

For the detailed process of using Client ID and Client Secret to exchange Access Token for OIDC programmatic access account, please refer to: [M2M Authorization](/guides/authorization/m2m-authz.html)
:::

## Function definition <a id="definition"></a>

Pipeline function definition:

```js
async function pipe(user, context, callback)
```

Parameter description:

| Parameter | Type     | Description                                                                                                    |
| :-------- | :------- | :------------------------------------------------------------------------------------------------------------- |
| user      | object   | Current request user. For detailed description, please refer to [user object](user-object.md).                 |
| context   | object   | Request authentication context. For detailed description, please refer to [context object](context-object.md). |
| callback  | function | Callback function, see the following document for usage.                                                       |

::: hint-danger
Do not rename the pipe function!
:::

::: hint-success
The user parameter of the Pipeline function triggered before registration is empty because the user object has not been generated at this time.

When using a programmatic access account for authentication, the user parameter of the Pipeline function triggered before the OIDC Access Token is issued is empty because there is no concept of users for programmatic access accounts.

:::

::: hint-success
The pipe function supports async / await syntax!
:::

### callback function <a id="callback"></a>

Definition:

```js
function callback(error, user, context)
```

When your Pipeline function completes the required processing and needs to return data to the backend of {{$localeConfig.brandName}}, or needs to interrupt the authentication process, you need to call the callback function before the code returns.

Parameter description:

| Parameter | Type   | Description                                                                                                                                    |
| :-------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| error     | object | Error object. **If not null, the entire authentication process will be interrupted and the error will be directly returned to the frontend. ** |
| user      | object | User object as the return value, its value will be used by the backend and used as the parameter of the next Pipeline function.                |
| context   | object | Context object as the return value, its value will be used by the backend and used as the parameter of the next Pipeline function.             |

::: hint-danger
If the error parameter is not null, please be sure to pass the latest user and context to the callback function, otherwise the subsequent Pipeline function will not work properly.
:::

### Set asynchronous execution <a id="async"></a>

The pipeline function set to asynchronous execution (**asynchronous here is not at the language level**) will not block the execution of registration, login, and OIDC processes. The parameters passed in by the callback function have no effect on the subsequent processes. It is suitable for scenarios of asynchronous notification, such as Feishu group notification, DingTalk group notification, triggering external system statistics, etc.

As shown in the figure below, checking this box means that the pipeline function is executed asynchronously:

![](https://cdn.genauth.ai/blog/20200927195654.png)

## Pipeline function example <a id="demo"></a>

Here we implement a **Pre-Register Pipeline** for registering email suffix whitelist.

```js
async function pipe(context, callback) {
  const email = context.data.userInfo.email;
  // Non-email registration method, skip this pipe function
  if (!email) {
    // Note the parameters
    return callback(null, context);
  }

  // If the domain email address is not example.com, return Access denied. error to the terminal.
  if (!email.endsWith("@example.com")) {
    return callback(new Error("Access denied."));
  }
  // Enter the next pipe function (if any)
  return callback(null, context);
}
```
