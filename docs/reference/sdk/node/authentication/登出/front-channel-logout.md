# Front-end Logout

<LastUpdated />

Depending on the different terminals and specific usage scenarios, we provide two logout methods: **front-end logout** and **back-end logout**:

- **front-end logout**: Front-end logout refers to the user accessing the logout address on the front-end. After logging out, the server will clear the user's login status. This logout method generally requires the participation of the browser and needs to be used in the browser environment. The Node SDK provides a method for generating a logout address, and developers can guide users to access this address on the front-end.

- **back-end logout**: Back-end logout refers to calling the method of revoking `access_token` in the back-end service to invalidate the user's `access_token` and achieve the logout effect. It is suitable for scenarios where the login status is managed using Token.

This part of the document introduces the method of generating a front-end logout link.

## Request parameters

| Name        | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                                                                                                                        | <div style="width:200px"></div>Sample value</div> |
| ----------- | ------ | -------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| redirectUri | string | No                                     | -             | The callback address after logout. This address must be configured in the logout callback URL in the application configuration. When setting this parameter, idToken must be passed at the same time.                                             | `https://example.com/homepage`                    |
| idToken     | string | No                                     | -             | The user's id_token. This parameter is required when redirectUri is set. The id_token is used as the user's request credential to access this endpoint to prevent third parties from placing malicious logout addresses to induce users to click. | `xxxxxxxx`                                        |
| state       | string | No                                     | -             | Custom intermediate state, which is any random string. When the user logs out and calls back to the callback address you configured, this state will be carried at the same time.                                                                 | `some-random-string`                              |

## Sample code

```javascript
import { AuthenticationClient, Models } from "@genauth/nodejs";

const authenticationClient = new AuthenticationClient({
  // Need to be replaced with your GenAuth AppId, Secret and Host
  appId: "GEN_AUTH_APP_ID",
  appSecret: "GEN_AUTH_APP_SECRET",
  appHost: "GEN_AUTH_APP_HOST",
  protocol: "oidc",
});

(async () => {
  const url = await authenticationClient.buildLogoutUrl({
    redirectUri: "https://example.com/homepage",
    // User's id_token can be obtained through the login interface
    idToken: "xxxxxxxx",
    state: "some-random-string",
  });

  console.log(url);
})();
```

## Request response

Type: `string`

Sample result:

```txt
https://example.genauth.ai/oidc/session/end?post_logout_redirect_uri=xxx&id_token_hint=xxxx&state=xxxx
```
