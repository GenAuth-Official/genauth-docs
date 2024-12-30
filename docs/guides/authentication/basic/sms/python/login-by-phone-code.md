!!!include(common/init-python-auth-sdk.md)!!!

First, call the send SMS verification code interface to send the SMS verification code, and then use the `login_by_phone_code` method:

```python
phone = '188xxxx8888'
# Login with phone number verification code. If the user does not exist, an account will be created automatically
user = authentication_client.login_by_phone_code(
    phone=phone,
    code='1234',
)
```