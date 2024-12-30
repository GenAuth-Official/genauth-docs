!!!include(common/init-js-mngmt-sdk.md)!!!

Use `updateNode` of `OrgManagementClient` to modify node information:

```javascript
await managementClient.org.updateNode("NDOEID", {
   name: 'New node name'
})
```