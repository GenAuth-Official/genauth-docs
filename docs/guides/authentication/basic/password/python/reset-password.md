!!!include(common/init-python-auth-sdk.md)!!!

Reset password using mobile phone verification code:

```python
authentication_client.reset_password_by_phone_code(
  phone="188xxxx8888",
  code="1234",
  new_password="passw0rd"
)
```

Reset your password using the verification code sent via email:

```python
authentication_client.reset_password_by_email_code(
  email="test@example.com",
  code="1234",
  new_password="passw0rd"
)
```
