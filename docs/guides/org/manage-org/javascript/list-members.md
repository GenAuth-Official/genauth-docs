!!!include(common/init-js-mngmt-sdk.md)!!!

Use `listMembers` of `OrgManagementClient` to get the member list of the node:

```javascript
const { totalCount, list } = await managementClient.org.listMembers("NODE_ID");
```
