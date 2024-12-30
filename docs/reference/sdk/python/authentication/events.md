## Subscribe to events

- authenticationClient.sub_event(event_code,receiver)

### Request parameters

- event_Code `<string>` Event code
- receiver `<function>` Custom receiver

### Code example

```python
client = AuthenticationClient(app_id="xxx",
app_host="https://myapp_site.genauth.ai",
app_secret="xxx",
websocket_host="wss://events.genauth.ai"
)
sign_in_resp = client.sign_in_by_email_password(
email="sxy_1@qq.com",
password="111"
)
# Get access_token
access_token = sign_in_resp["data"]["access_token"]
# Then use this access_token to call the set_access_token method of AuthenticationClient, AuthenticationClient Then you can call interfaces that require login to access, such as obtaining user information, modifying user information, and obtaining role lists.
client.set_access_token(access_token)

client.sub_event("authing.user.updated",lambda msg:{
print(msg)
})
```

## Publish events

- authenticationClient.pubt_event(eventCode, data)

### Request parameters

- event_code `<string>` Event code
- data `<dict>` Event body

### Code example

```python
client = AuthenticationClient(app_id="63f759f4fdc9e3c2f3e74738",
app_host="https://sxysdk.hydra.authing-inc.co",
app_secret="54fecbfd8e28b3f7c84daade9207543f",
websocket_host="wss://events.hydra.authing-inc.co"
)
sign_in_resp = client.sign_in_by_email_password(
email="sxy_1@qq.com",
password="111"
)
# You can get the user's access_token from sign_in_resp. This access_token represents the user's access interface credentials
access_token = sign_in_resp["data"]["access_token"]
# Then use this access_token to call the set_access_token method of AuthenticationClient. AuthenticationClient can then call interfaces that require login to access, such as obtaining user information, modifying user information, and obtaining role lists.
client.set_access_token(access_token)
event_code = "custom_aouaw.sxytestevent"
data = {"id":"myid"}
print(client.put_event(event_code,data))
```
