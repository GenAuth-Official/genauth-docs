# Use Pipeline to extend the authentication process

<LastUpdated/>

{{$localeConfig.brandName}} Pipeline is a set of user-defined JavaScript codes running in the cloud, which allows developers to extend and customize {{$localeConfig.brandName}} capabilities.

{{$localeConfig.brandName}} Pipeline functions are all user-defined, and we also provide [rich function templates](https://github.com/authing/pipeline) to help developers quickly get started with development.

At the same time, Pipeline is a set of functions. The difference from ordinary Hooks is that the function data in the entire process of Pipeline can be passed to each other to achieve the same effect as industrial assembly lines. This design pattern can make the developer's custom functions more modular and easy to manage.

{{$localeConfig.brandName}} Pipeline backend uses serverless architecture. All user-defined codes run in the cloud to ensure isolation between different tenants. At the same time, it can be elastically scaled, which not only ensures security, but also improves operating efficiency.

![](https://cdn.genauth.ai/blog/authing-pipeline.png)

You can use {{$localeConfig.brandName}} Pipeline to achieve the following functions:

- Whitelist mechanism: such as registered email suffix whitelist, registered IP whitelist, etc.
- Event notification: such as sending group notifications after user registration, user login IP abnormality notification, etc.
- Permission control: such as adding users to a user group based on their email addresses after they log in.
- Extending user fields: such as adding custom Metadata to the requesting user, etc.
- Custom token: such as adding custom fields to the token, etc.
- ... and more, the imagination space is endless.

For example, through the following code, we can implement the logic of **disallowing email registration that does not end with `example.com`**:

```javascript
async function pipe(user, context, callback) {
  const { email } = context.request.body;
  // Non-email registration method
  if (!email) {
    return callback(null, user, context);
  }
  if (!email.endsWith("example.com")) {
    return callback(new Error("Access denied."));
  }
  return callback(null, user, context);
}
```

For more application scenarios and detailed documents, please see [this](/guides/pipeline/).
