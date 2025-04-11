---
meta:
  - name: description
    content: How to debug
---

# How to debug

<LastUpdated/>

This article describes how to use the {{$localeConfig.brandName}} console to debug Pipeline functions.

In the previous step, we have [created the first Pipeline function](./write-your-first-pipeline-function.md), and let's review the function code:

![](~@imagesZhCn/pipeline/1.png)

The function of this Pipeline function is to only allow email registrations with a domain suffix of `example.com`.

Click the debug button of the Pipeline function:

![](~@imagesZhCn/pipeline/2.png)

Click this button to open the debug window: {{$localeConfig.brandName}} will **produce corresponding test data based on your user pool**.

## View log

::: hint-warning
You need to use the {{$localeConfig.brandName}} Pipeline global built-in function `log` to view the running log, not `console.log`!
:::

Use the function editor to modify the code and add a line at the beginning of the function: Note that it is log, not console.log.

```js
log(context);
```

::: hint-info
If there is no log output, please try again a few times!
:::

::: hint-info
We recommend that you use the debugger to debug the code before publishing this function online.
:::
