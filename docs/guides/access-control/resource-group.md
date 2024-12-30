---
{ meta: [{ name: 'description', content: 'Use permission groups to manage permission resources' }] }
---

# Use permission groups to manage permission resources

<LastUpdated/>

Permission groups can be understood as namespaces for permissions. Roles and resources in different permission groups are independent of each other, and there will be no conflict even if they have the same name.

![](~@imagesZhCn/guides/access-control/Xnip2021-02-25_20-58-50.png)

## Create permission groups

Click the Add button in the Permission Group menu of **Permission Management**:
![](~@imagesZhCn/guides/access-control/Xnip2021-02-25_21-22-41.png)

Fill in the group name and group identifier in the pop-up window. The identifier is used as a unique identifier to identify the permission group during later authentication.

![](~@imagesZhCn/guides/access-control/Xnip2021-02-25_21-24-56.png)

In the created permission group, you can use the ABAC or RBAC permission model introduced earlier to independently manage permission resources.

## How to use permission groups to determine permissions

```javascript
import { ManagementClient } from 'authing-js-sdk'

const managementClient = new ManagementClient({
  userPoolId: 'YOUR_USERPOOL_ID',
  secret: 'YOUR_USERPOOL_SECRET',
})
const { totalCount, list } = await managementClient.acl.isAllowed(
  'USER_ID',
  'resource',
  'operation',
  'permission group identifier'
)
```

## Relationship between permission groups and applications

When each application is created, {{$localeConfig.brandName}} will create a permission group for you. The automatically created permission group name is the application name, the identifier is the application ID, and it cannot be modified. {{$localeConfig.brandName}} will also create a default permission group for each user pool. When your permission resources are relatively simple and do not need to be isolated and managed at the application level, you can directly use the default permission group. When your application is complex and contains conflicting roles or resources, you can manually create permission groups to isolate and manage permission resources.
