!!!include(common/init-python-mngmt-sdk.md)!!!

Use the `create` method of [UsersManagementClient](/reference/sdk-for-python/management/UsersManagementClient.md) to create a user:

```python
user = management_client.users.create(
  userInfo={
    'username': 'bob',
    'password': '123456',
    'phone': '188xxxx8888', # Since it is an administrator operation, there is no need to verify the mobile phone number verification code. If you need to verify, please use AuthenticationClient
    'nickname': 'Nick',
    'loginsCount': 2, # The number of user logins recorded by the original user system
    'signedUpd': '2020-10-15T17:55:37+08:00', # User registration time recorded in the original user system
})
```
