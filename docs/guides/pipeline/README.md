# Pipeline

<LastUpdated/>

## Introduction

::: hint-info
For information about the {{$localeConfig.brandName}} user pool version that supports the various benefits of the "Pipeline" function, please check the [official website "Price" page](https://www.genauth.ai/pricing). If your version does not support this benefit and you want to try it, you can activate the trial period. For an introduction to the trial period and how to activate it, please check the [trial period](/guides/basics/trial/README.md).
:::

{{$localeConfig.brandName}} Pipeline is a set of user-defined JavaScript codes running in the cloud, which allows developers to extend and customize {{$localeConfig.brandName}} capabilities.

{{$localeConfig.brandName}} Pipeline functions are all user-defined, and we also provide [rich function templates](https://github.com/authing/pipeline) to help developers quickly get started with development.

At the same time, Pipeline is a group of functions. The difference from ordinary Hooks is that the function data in the entire process of Pipeline can be passed to each other to achieve the same effect as industrial assembly lines. This design pattern can make the developer's custom functions more modular and easier to manage.

{{$localeConfig.brandName}} Pipeline uses a serverless architecture on the backend. All user-defined codes run in the cloud to ensure isolation between different tenants. At the same time, it can be elastically scaled, which not only ensures security but also improves operating efficiency.

![](https://cdn.genauth.ai/blog/authing-pipeline.png)

## Application scenarios

With {{$localeConfig.brandName}} Pipeline, developers can implement the following functions:

- Whitelist mechanism: such as registered email suffix whitelist, registered IP whitelist, etc.
- Event notification: such as sending group notifications after user registration, user login IP abnormal notification, etc.
- Permission control: such as adding users to a certain user group based on their email addresses after they log in, etc.
- Extend user fields: such as adding custom Metadata to the requesting user.
- Custom token: such as adding custom fields to the token.
- ... and more, the imagination is endless.

Next, let's [create your first Pipeline function](./write-your-first-pipeline-function.md) together!
