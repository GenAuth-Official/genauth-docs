!!!include(common/init-python-auth-sdk.md)!!!

If the user has not set a password before (for example, by registering by mobile phone number, social login, etc.), there is no need to enter the original password.

```python
# If you register by mobile phone number, social login or other methods, and no password is set for the first time, old_password will be left blank.
authentication_client.update_password(
  new_password="passw0rd",
)
```

or:

```python
# The user has previously set a password
authentication_client.update_password(
  new_password="passw0rd",
  old_password="123456!"
)
```