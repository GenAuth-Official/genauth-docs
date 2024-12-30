After obtaining the user information, you can get the user's identity credentials (the `token` field of the user information). You can carry this `token` in the subsequent request sent by the client to the backend server. Take `axios` as an example:

```js
const axios = require("axios");
axios
  .get({
    url: "https://yourdomain.com/api/v1/your/resources",
    headers: {
      Authorization: "Bearer ID_TOKEN",
    },
  })
  .then((res) => {
    // custom codes
  });
```

In the backend interface, you need to check the legitimacy of this `token` to verify the user's identity. For details on the verification method, please see [Verify User Identity Credentials (token)](/guides/faqs/how-to-validate-user-token.html). After identifying the user, you may also need to [manage permissions for the user](/guides/access-control/) to determine whether the user has permission to operate the API.
