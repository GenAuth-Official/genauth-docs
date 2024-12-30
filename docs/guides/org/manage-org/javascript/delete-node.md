!!!include(common/init-js-mngmt-sdk.md)!!!

Use the `deleteNode` method of `OrgManagementClient` to delete the node:

```javascript
const org = await managementClient.org.create('Beijing XX Company', 'Beijing XX Company Co., Ltd.', 'example');
const { id: orgId, rootNode } = org
const node = await managementClient.org.deleteNode(orgId, rootNode.id)
```
