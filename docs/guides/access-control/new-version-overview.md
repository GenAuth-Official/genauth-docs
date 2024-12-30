# New version of permission management

<LastUpdated/>

There are currently two permission models widely used in the industry: role-based access control (RBAC) and attribute-based access control (ABAC). Each has its own advantages and disadvantages:

* The RBAC model is simpler to build, but its disadvantage is that it cannot authorize resources in a fine-grained manner (it only authorizes a certain type of resource rather than a specific resource).

* The ABAC model is relatively complex to build and has a high learning cost. Its advantages are fine-grainedness and dynamic execution based on context.

The following is a further introduction to the two models.

## RBAC

RBAC refers to authorizing related permissions according to user roles. This enables more flexible access control, which is simpler, more efficient, and more scalable than directly granting user permissions.

##

* You can learn about basic information about the space and an introduction to permission management in [Permission Space](/guides/access-control/access-management-space.md).

* You can view a list of all roles in the entire user pool in [Role Management](/guides/access-control/role-management.md) and click each role detail page to learn about the basic information, permission management, and extended fields of the corresponding role.

* You can learn about common resources, view the authorization information of these common resources, edit authorization rules, and view the authorization relationship of all common resources in [Common Resource Permissions](/guides/access-control/common-resources-access-management.md).

* You can learn about data resources of different structures and how to authorize data resources through packaging policies in [Data Resource Permissions](/guides/access-control/data-resources-access-control.md).



