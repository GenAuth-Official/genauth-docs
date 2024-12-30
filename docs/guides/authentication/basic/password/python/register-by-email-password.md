!!!include(common/init-python-auth-sdk.md)!!!

Use the `register_by_email` method:


```python
email = 'test@example.com'
user = authentication_client.register_by_email(
    email=email,
    password='passw0rd',
    profile={
      'nickname': 'Nick'
    }
)
```
