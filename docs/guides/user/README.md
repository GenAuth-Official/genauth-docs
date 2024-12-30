---
meta:
  - name: description
    content: Manage user accounts
---

# Manage user accounts

<LastUpdated/>

::: hint-info
For information about the {{$localeConfig.brandName}} user pool version that supports the various benefits of the "User Management" function, please check the [Official Website "Pricing" Page](https://www.genauth.ai/pricing). If your version does not support this benefit and you want to try it, you can activate the trial period. For an introduction to the trial period and how to activate it, please check [Trial Period](/guides/basics/trial/README.md).
:::

This section mainly introduces the operations of managing a single user, such as binding an email address, associating an account, disabling an account, etc. If you want to learn how to manage the user directory, please see [Manage User Directory](../users/README.md).

User account management can be managed visually through the console and the user personal center, or with the help of SDK & API. You can choose the method that suits you according to your business needs.

User account management is divided into two modes: administrator operation and user self-service operation. User self-service operation requires user identity verification through mobile phone verification code, MFA, etc. Administrator operation only needs to provide Management Token (if using SDK, only [user pool key](/guides/faqs/get-userpool-id-and-secret.md)).

The following content is in no particular order. You can choose the content you are interested in to read:

- [Learn the meaning of all fields in the user profile](./user-profile.md);
- [Learn how administrators create accounts](./create-user/);
- [Learn how to manage user accounts](./manage-profile.md), such as modifying user profiles, binding MFA, etc.;
<!-- - [Learn how to add roles to users and assign permissions](./role-and-permission.md); -->
- [Learn how to bind accounts](./bind-social-account.md);
- [Learn how to manage user custom data](/guides/users/user-defined-field/);
- [Learn how to view a user's login history](./login-history.md);
- [Learn how to enhance the security of user accounts](./security.md);
- [Learn how to manage a user's login state](./login-state.md);
- [Learn how to control which apps users can access](./application-access.md).
