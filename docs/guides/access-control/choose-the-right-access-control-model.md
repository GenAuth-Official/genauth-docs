# Choose the right permission model

<LastUpdated/>

The two widely used permission models are: [Role-based access control (RBAC)](#What is role-based access control-rbac) and [Attribute-based access control (ABAC)](#What is attribute-based access control-abac). Each has its own advantages and disadvantages: the RBAC model is simpler to build, but its disadvantage is that it cannot authorize resources in a fine-grained manner (it only authorizes a certain type of resource rather than a specific resource); the ABAC model is relatively complex to build, and the learning cost is relatively high. Its advantages are fine-grained and dynamic execution based on context.

## What is role-based access control (RBAC)

Role-based access control (RBAC for short) refers to authorizing the relevant permissions of users through their roles (Role), which achieves more flexible access control. Compared with directly granting user permissions, it is simpler, more efficient, and more scalable.

<img src="~@imagesZhCn/guides/rbac.png" alt="drawing"/>


When using RBAC, by analyzing the actual situation of system users, different roles are granted to them based on common responsibilities and needs. You can grant one or more roles to a user, and each role has one or more permissions. This relationship between user-role and role-permission allows us to no longer manage individual users separately. Users inherit the required permissions from the granted roles.

Take a simple scenario (Gitlab's permission system) as an example. There are three roles in the user system: Admin, Maintainer, and Operator. These three roles have different permissions. For example, only Admin has the permission to create and delete code repositories, while other roles do not have them.

![](../basics/authenticate-first-user/images/rbac.png)

We grant a user the role of "Admin", and he has the two permissions of "Create code repository" and "Delete code repository".

Not directly granting user authorization policies is for future scalability considerations. For example, if there are multiple users with the same permissions, we need to assign the same permissions to these users when assigning them, and modify the permissions of these users one by one when modifying them. After we have roles, we only need to set permissions for the role, assign different roles to different users, and then modify the permissions of the role to automatically modify the permissions of all users in the role.

## What is Attribute-Based Access Control (ABAC)

Attribute-Based Access Control (ABAC) is a very flexible authorization model. Unlike RBAC, ABAC dynamically determines whether an operation is allowed through various attributes.

### The main components of ABAC

In ABAC, whether an operation is allowed is determined by the dynamic calculation of objects, resources, operations, and environmental information.

- Object: The object is the user who currently requests to access the resource. The attributes of the user include ID, personal resources, roles, departments, and organizational memberships;
- Resource: The resource is the asset or object (such as files, data, servers, or even APIs) that the current access user wants to access. Resource attributes include the file's creation date, file owner, file name and type, data sensitivity, etc.;
- Operation: An operation is an operation that a user attempts to perform on a resource. Common operations include "read", "write", "edit", "copy", and "delete";
- Environment: The environment is the context of each access request. Environment attributes include the time and location of the access attempt, the object's device, the communication protocol, and the encryption strength.

### How ABAC uses attributes to dynamically calculate decision results

During the execution of ABAC's decision statements, the decision engine dynamically calculates the decision results based on the defined decision statements, combined with factors such as objects, resources, operations, and environments. ,

Whenever an access request occurs, the ABAC decision system analyzes whether the attribute value matches the established policy. If there is a matching policy, the access request is passed.

For example, the policy "When the department of a document is the same as the department of the user, the user can access this document" will be matched by the following attributes:

- Department of the object (user) = Department of the resource;
- Resource = "Document";
- Operation = "Access";

The policy "People in Department A are prohibited from accessing System B before 9 am" will be matched by the following attributes:

- Department of the object = Department A;
- Resource = "System B";
- Operation = "Access";

- Environment = "The time is 9 am".

### ABAC Application Scenarios

Under the ABAC permission model, you can easily implement the following permission control logic:

1. Authorize A to edit a specific department;
2. When the department to which a document belongs is the same as the user's department, the user can access the document;
3. When the user is the owner of a document and the document is in draft status, the user can edit the document;
4. Forbid people in department A to access system B before 9 a.m.;
5. Forbid access to system A as an administrator in places other than Shanghai;

The above logic has several common points:

- Specific to a resource rather than a class of resources;
- Specific to a certain operation;
- Can dynamically execute policies through the context of the request (such as time, geographic location, resource tag);

If it is condensed into one sentence, you can **fine-grainedly authorize under what circumstances to have a specific permission on a resource. **

## {{$localeConfig.brandName}}'s permission model

There are several concepts in {{$localeConfig.brandName}}:
- User: your end user;
- Role: a role is a logical collection. You can authorize a role to have certain operation permissions, and then grant the role to a user, and the user will inherit all permissions in the role;
- Resource: you can define the entity objects in your application system as resources, such as orders, products, documents, books, etc. Each resource can define multiple operations, such as documents have read, edit, and delete operations;
- Authorization: authorize certain operations of a certain type of resource to a role or user.

In the {{$localeConfig.brandName}} permission system, we implement the role permission inheritance of the RBAC model through the two objects of user and role. On top of this, we can also dynamically and fine-grainedly authorize around attributes, thereby implementing the ABAC permission model. At the same time, in order to meet the design requirements of complex organizational structures in large systems, we combine resources, roles, and permission authorizations into a unified [permission group](./resource-group.md) to facilitate management by developers.

![](../basics/authenticate-first-user/images/permission-group.png)

## How do I choose which permission model to use

Here, the size of the organization is a crucial factor. Due to the initial design and implementation difficulties of ABAC, it may be too complicated to consider for small businesses.

For small and medium-sized enterprises, RBAC is a simple alternative to ABAC. Each user has a unique role with corresponding permissions and restrictions. When a user moves to a new role, their permissions are changed to those of the new position. This means that a small number of internal and external users can be easily managed in a hierarchy with clearly defined roles.

However, it is not efficient for large organizations when new roles must be established manually. Once the attributes and rules are defined, ABAC's policies are easier to apply when there are many users and stakeholders, while also reducing security risks.

In short, choose ABAC if:

- You are in a large organization with many users;
- You need deep, specific access control capabilities;
- You have time to invest in a long-range model;
- You need to ensure privacy and security compliance;

However, consider RBAC if:

- You are in a small or medium-sized enterprise;
- Your access control policy is broad;
- You have few external users and your organizational roles are well defined;

## Next

Next, you can learn how to [integrate the RBAC permission model into your application system](./rbac.md) or [integrate the ABAC permission model into your application system](./abac.md).
