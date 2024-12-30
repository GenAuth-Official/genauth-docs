---
meta:
  - name: description
    content: FAQ
---

# Pipeline FAQ

<LastUpdated/>

#### Q: Does the Pipeline function support async await syntax?

A: Yes.

#### Q: Can I use {{$localeConfig.brandName}} SDK in the Pipeline function?

A: Yes, without importing and initializing. For details, see [Available Node Modules](available-node-modules.md).

#### Q: Can I write Pipeline functions in other languages?

A: No, currently only Node language is supported.

#### Q: What are the precautions for writing Pipeline functions?

A: 

* Please do not rename the pipe function.

* It is recommended not to hard code, use [environment variables](env.md) to store constant values.

#### Q: What is the impact of refreshing the user pool secret on the Pipeline function?

A: Since the {{$localeConfig.brandName}} Pipeline function runs completely in the cloud, refreshing the user pool secret will update all Pipeline functions in the user pool at the same time. This means that authing-js-sdk will not be able to be used normally in the Pipeline function for a short period of time.

#### Q: What are the performance optimization methods?

A: If it is a function that is not directly related to the pipeline process, such as new user registration notification, etc., it can be [set to asynchronous execution] (pipeline-function-api-doc.md#Set asynchronous execution).

