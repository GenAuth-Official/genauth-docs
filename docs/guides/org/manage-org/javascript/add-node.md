!!!include(common/init-js-mngmt-sdk.md)!!!

Use the `addNode` method of `OrgManagementClient` to add a node:

```javascript
const org = await managementClient.org.create('Beijing XX Company', 'Beijing XX Company Co., Ltd.', 'example');
const { id: orgId, rootNode } = org
const node = await managementClient.org.addNode(orgId, rootNode.id, { name: 'Operation Department' })
```
