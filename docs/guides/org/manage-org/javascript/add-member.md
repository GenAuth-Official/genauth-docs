!!!include(common/init-js-mngmt-sdk.md)!!!

Use the `addMembers` method of `OrgManagementClient` to add members to the node:

```javascript
const { totalCount, list } = await managementClient.org.addMembers("NODE_ID", ["USER_ID"])
```