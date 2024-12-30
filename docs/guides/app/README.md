# Overview of self-built applications

<LastUpdated/>

In {{$localeConfig.brandName}}, [user pool](/concepts/user-pool.md) is the smallest unit of tenant isolation, storing all user data in the user system; and applications correspond to business applications created in reality. A user pool may have multiple applications. For example, all students of a school are in a user pool, and the school will develop multiple applications such as course selection application, email application, teacher-student service center, etc., which will use the same user system. You can learn more about [application-related introduction](/concepts/application.md) here.

You can create standard web applications, single-page web applications, client applications, backend applications, etc. in the **self-built application** menu. For details on application creation, see [How to create your first application](./create-app.md).

The following content is in no particular order. You can choose the content you are interested in to read:

- [Configure login and registration methods](/guides/app-new/create-app/login-control.md), you can add social login and third-party identity source login to your application.
- [Add registration agreement](/guides/customize/global-guard/), you can let users read and agree to the registration agreement before registration, you can customize the agreement content and link.
- [Customize login box style](/guides/app-new/create-app/customize-guard.md#Login box style), {{$localeConfig.brandName}} hosted login page supports highly customized page style through custom CSS.
- [Become a federated authentication identity source](/guides/app-new/create-app/app-configuration.md), {{$localeConfig.brandName}} can quickly become an OIDC, OAuth2.0, SAML identity provider through simple configuration.
- [Enable multi-factor authentication](/guides/app-new/create-app/security-management.md#Multi-factor authentication), enable MFA multi-factor authentication for your application, supporting SMS verification code, email verification code, OTP, face recognition and other methods.

