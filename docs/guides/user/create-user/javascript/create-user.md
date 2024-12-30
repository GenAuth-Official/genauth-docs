!!!include(common/init-js-mngmt-sdk.md)!!!

Use the `create` method of [UsersManagementClient](/reference/sdk-for-node/management/UsersManagementClient.md) to create a user:

```javascript
const user = await managementClient.users.create({
   username: 'bob',
   password: 'passw0rd'
})
```

or:

```javascript
const user = await managementClient.users.create({
   nickname: 'Nick',
   phone: '188xxxx8888', // Since it is an administrator operation, there is no need to verify the mobile phone number verification code. If you need to verify, please use AuthenticationClient
   loginsCount: 2, // The number of user logins recorded in the original user system
   signedUp: '2020-10-15T17:55:37+08:00' // The user registration time recorded in the original user system
})
```
