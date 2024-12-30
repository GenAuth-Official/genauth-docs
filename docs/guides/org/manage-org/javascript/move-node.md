!!!include(common/init-js-mngmt-sdk.md)!!!

Use `moveNode` of `OrgManagementClient` to move nodes:

> You need to specify the new parent node (TRAGET_NODE_ID) of the node you want to move.

```javascript
await managementClient.org.moveNode("ORGID", "NODEID", "TRAGET_NODE_ID")
```
