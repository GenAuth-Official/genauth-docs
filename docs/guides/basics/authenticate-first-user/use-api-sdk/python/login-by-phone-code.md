Use the `login_by_phone_code` method to log in using a phone number verification code:

```python
phone = '188xxxx8888'
# Login with phone number verification code. If the user does not exist, an account will be created automatically
user = authentication_client.login_by_phone_code(
    phone=phone,
    code='1234',
)
```