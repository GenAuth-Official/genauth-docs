# Permission space

<LastUpdated/>

The new version of permission management introduces a new concept: permission space. Roles and resources are hung under the space. Similar to the permission grouping of the old version, it can be understood as an independent virtual object. You can create roles, resources, and management permissions in the permission space. The resources and roles between permissions are independent of each other. Permission space is divided into three categories:

* When creating a self-built application, the corresponding permission space is automatically generated: the namespace is named after the self-built application, and the access rights of the self-built application resources are controlled.

* When creating an integrated application, the corresponding permission space is automatically generated: the namespace is named after the integrated application, and the access rights of the integrated application resources are controlled.

* You can also create a permission space: when you do not need to use a self-built application or integrate a third-party application for authentication, but only manage the permissions of your existing system resources, you can create a permission space here.

There are two types of resources: general resources and data resources.

Authorization management includes two categories: