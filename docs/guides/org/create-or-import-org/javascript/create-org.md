!!!include(common/init-js-mngmt-sdk.md)!!!

Use the `org` method of `ManagementClient` to obtain the `OrgManagement` object, and then use the object to call the `create` method to create an organization:

```javascript
const org = await managementClient.org.create('Beijing XX Company', 'Beijing XX Company Co., Ltd.', 'example');
```
