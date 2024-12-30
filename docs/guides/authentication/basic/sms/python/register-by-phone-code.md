!!!include(common/init-python-auth-sdk.md)!!!

First, call the SMS verification code sending interface to send the SMS verification code, and then use the `register_by_phone_code` method:

```python
phone = '188xxxx8888'
user = authentication_client.register_by_phone_code(
    phone=phone,
    code='1234',
    password='passw0rd',
    profile={
      'nickname': 'Nick'
    }
)
```