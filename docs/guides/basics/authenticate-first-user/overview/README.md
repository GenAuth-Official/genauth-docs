# Overview

<LastUpdated/>

When using {{$localeConfig.brandName}} for user authentication, you do not need to implement user management logic yourself. All related operations (such as creating and deleting users, configuring login processes, resetting passwords, etc.) can be completed through the {{$localeConfig.brandName}} console hosted login page, API & SDK. User information will be securely stored in the {{$localeConfig.brandName}} cloud database. You do not need to save an additional user profile, but directly use the user information stored in {{$localeConfig.brandName}} to meet your business needs. To do this, you need to first [join your business data with the GenAuth user table](/guides/faqs/how-to-join-authing-user-with-your-business-data.md).

There are several ways to use {{$localeConfig.brandName}} to access the user authentication process:

1. [Use {{$localeConfig.brandName}} to host the login page](../use-hosted-login-page.md).
2. [Use the embedded login component provided by {{$localeConfig.brandName}}](../use-embeded-login-component/), which can be integrated into your web and mobile projects. You do not need to implement the login form UI yourself.
3. [Use API & SDK](../use-api-sdk/), {{$localeConfig.brandName}} provides two forms of APIs in RESTFul and GraphQL, as well as SDKs in more than 10 languages ​​or frameworks, based on which you can customize the UI and authentication process.

{{$localeConfig.brandName}} can be integrated into various scenarios such as standard web applications, single-page web applications, client applications, and backend applications. You can read the access methods for different scenarios separately:

1. [Integrate {{$localeConfig.brandName}} in standard web applications? ](../../platform-guide/integrate-with-regular-web-app.md)
2. [Integrate {{$localeConfig.brandName}} in single-page web applications? ](../../platform-guide/integrate-with-spa.md)
3. [Integrate {{$localeConfig.brandName}} in client applications? ](../../platform-guide/integrate-with-mobile-app.md)

After the user successfully logs in, you also need to:

1. [Learn how to identify the current user's identity on the backend? ](../how-to-validate-user-token.md)
2. [Learn how to grant roles and permissions to users for fine-grained permission control? ](../how-to-implement-access-control.md)
3. [Learn how to implement the logout operation? ](../how-to-logout-user.md)
