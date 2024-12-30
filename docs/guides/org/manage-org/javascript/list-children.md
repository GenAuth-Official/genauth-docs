!!!include(common/init-js-mngmt-sdk.md)!!!

Use `listChildren` of `OrgManagementClient` to get the child node list:

```javascript
// Child node list
const children = await managementClient.org.listChildren("ORGID", "NODEID")
```
