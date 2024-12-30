# Integrate the ABAC permission model into your application system

<LastUpdated/>

[Previously](./README.md#What is attribute-based access control-abac) We introduced what attribute-based access control (ABAC) is. The following article introduces how to quickly integrate the ABAC permission model into your system based on {{$localeConfig.brandName}}. In the previous lecture, we introduced how to integrate the RBAC permission model. I believe you are aware that the RBAC permission model is static, that is, there is no dynamic attribute such as environment and object attributes involved, so it is difficult to implement access control similar to the following scenarios:

- When the department to which a document belongs is the same as the user's department, the user can access the document;
- When the user is the owner of a document and the document status is draft, the user can edit the document;
- People in department A are prohibited from accessing system B before 9 am;
- Accessing system A as an administrator is prohibited in places other than Shanghai;

## Main components of ABAC

In ABAC, whether an operation is allowed is determined by dynamic calculation based on object, resource, operation and environment information.

- Object: The object is the user who currently requests to access the resource. The user's attributes include ID, personal resources, roles, department and organization membership, etc.;
- Resource: The resource is the asset or object (such as file, data, server, or even API) that the current accessing user wants to access. Resource attributes include the file's creation date, file owner, file name and type, data sensitivity, etc.;
- Operation: An operation is an operation that a user attempts to perform on a resource. Common operations include "read", "write", "edit", "copy", and "delete";
- Environment: The environment is the context of each access request. Environment attributes include the time and location of the access attempt, the object's device, the communication protocol, and the encryption strength.

## How ABAC uses attributes to dynamically calculate decision results

During the execution of ABAC's decision statements, the decision engine dynamically calculates the decision results based on the defined decision statements, combined with factors such as objects, resources, operations, and environments. ,

Whenever an access request occurs, the ABAC decision system analyzes whether the attribute value matches the established policy. If there is a matching policy, the access request is passed.

For example, the policy "When the department of a document is the same as the department of the user, the user can access this document" will be matched by the following attributes:

- Department of the object (user) = Department of the resource;
- Resource = "Document";
- Action = "Access";

The policy "People in department A are prohibited from accessing system B before 9 am;" will be matched by the following attributes:

- Department of the object = Department A;
- Resource = "System B";
- Action = "Access";
- Environment = "Time is 9 am".

## Specify restrictions when authorizing resources in {{$localeConfig.brandName}}

When authorizing resources, we can specify restrictions. For example, in the following example, we add a restriction: requiring the current requesting user to be MFA authenticated.

![](~@imagesZhCn/guides/access-control/Xnip2021-02-25_14-18-01.png)

In addition to the MFA authentication attribute, you can also obtain the following attributes in the policy engine context of {{$localeConfig.brandName}}:

- User object attributes, such as gender, organization, group, role, whether the email address is verified, whether the mobile phone number is verified, custom data, whether MFA authentication has been passed, the user's last MFA authentication time, etc.;
- Environment attributes: client IP, client UA, client browser, request source country, request source province, request source city, etc.;
- Resource attributes: resource creation time, resource owner, resource tag, etc.;

You can form flexible policy authorization statements based on these attributes.

