!!!include(common/init-python-auth-sdk.md)!!!

Set custom fields:

```python
# Set int type data
authentication_client.set_udv(
key="age",
value=15
)

# Set boolen type data
authentication_client.set_udv(
key="is_ok",
value=True
)
```

Get the latest custom data of the user:

```python
udvs = authentication_client.list_udv()
```