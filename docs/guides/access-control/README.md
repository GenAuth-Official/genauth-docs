# Manage user permissions

<LastUpdated/>

::: hint-info
For information about the {{$localeConfig.brandName}} user pool version that supports the various benefits of the "Permission Management" function, please check the [Official Website "Price" page](https://www.genauth.ai/pricing). If your version does not support this benefit and you want to try it, you can activate the trial period. For an introduction to the trial period and how to activate it, please check the [Trial Period](/guides/basics/trial/README.md).
:::

In the [previous section](../authentication/README.md), we introduced authentication. Authentication refers to the process of identifying the identity of the requester (such as using passwords, WeChat, mobile phone verification codes, etc.). After successfully identifying the user's identity, what we need to do next is to **manage and assign permissions. **

Permission management generally refers to the fact that users can access and only access their authorized resources according to the security rules or security policies set by the system, no more and no less.

Currently, the two widely used permission models are [Role-based access control (RBAC)](./choose-the-right-access-control-model.md#What is role-based access control-rbac) and [Attribute-based access control (ABAC)](./choose-the-right-access-control-model.md#What is attribute-based access control-abac), each of which has its own advantages and disadvantages: the RBAC model is simpler to build, but its disadvantage is that it cannot authorize resources in a fine-grained manner (it only authorizes a certain type of resource rather than a specific resource); the ABAC model is relatively complex to build and has a high learning cost, but its advantages are fine-grained and dynamic execution based on context.

Next, you can learn how to [choose a suitable permission model for your application system. ](./choose-the-right-access-control-model.md)
