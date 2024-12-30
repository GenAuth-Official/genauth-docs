Python can use [PyJWT](https://pyjwt.readthedocs.io/en/stable/) to verify the IdToken:

```python
import jwt


audience = "GEN_AUTH_APP_ID"
secret = "GEN_AUTH_APP_SECRET"
encoded = jwt.encode({"some": "payload"}, key, algorithm="HS256")
jwt.decode(encoded, secret, audience=audience, algorithms="HS256")
```
