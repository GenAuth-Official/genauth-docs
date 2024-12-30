---
meta:
  - name: description
    content: FAQ
---

# FAQ

<LastUpdated/>

## Does the Pipeline function support async await syntax?

Yes.

## Can I use the {{$localeConfig.brandName}} SDK in the Pipeline function?

Yes, without importing and initializing. For details, see [Available Node Modules](available-node-modules.md).

## Can I write Pipeline functions in other languages?

No, currently only Node is supported.

## What are the precautions for writing Pipeline functions?

* Please do not rename the pipe function.
* It is recommended not to hard code, and use [environment variables](env.md) to store constant values.

## What is the impact of refreshing the user pool secret on the Pipeline function?

Since the {{$localeConfig.brandName}} Pipeline function runs completely in the cloud, refreshing the user pool secret will update all Pipeline functions in the user pool at the same time. This means that authing-js-sdk will not be able to be used normally in the Pipeline function for a short period of time.

## What are the performance optimization methods?

* If it is a function that is not directly related to the pipeline process, such as new user registration notification, etc., you can [set it to asynchronous execution] (pipeline-function-api-doc.md#Set asynchronous execution).

