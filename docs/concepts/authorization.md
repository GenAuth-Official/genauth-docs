# What is authorization

<LastUpdated/>

## The meaning of authorization

In the **general field**, authorization is the process by which leaders provide employees and subordinates with more autonomy to achieve organizational goals.

In the **computer field**, authorization is the power granted to an entity by the approval authority designated by the information system to process, store or transmit information.

In the **identity authentication field**, authorization refers to a mechanism that allows a client to have limited access to server resources after identity authentication.

## Why do we need "authorization"?

In the user system that has been built, when your API needs to determine whether the current access user can access the current resource, you need to build your own permission system. Authorization is a very important concept in the permission system, which refers to the process of determining what permissions a user has, which is completely different from authentication.

For enterprises, authorization can clarify the relationship between organizational members, make responsibilities and boundaries clearer, and facilitate company management; at the same time, authorization can ensure data security and prevent risks. Different permissions allow different operations, which can prevent accidents such as user damage, data leakage, and misoperation; authorization can improve decision-making efficiency. Excellent authorization and permission management make the system easier to operate and improve employee work efficiency.

From the product perspective, authorization can ensure the use security and data security of product systems, prevent illegal operations and data leakage; authorization can also improve the operability of the system and enhance user experience; in addition, good authorization functions will enhance product value and make it more competitive in the market.

## Authorization mode

There are two main authorization modes, namely, the authorization code mode based on the OAuth 2.0 process and the centralized verification of user authorization through the API interface to the authorization center.

### Authorization mode based on the OAuth 2.0 framework

The OAuth2 framework is a secure, lightweight, and standard authorization system that helps resource parties, callers, and resource owners complete the authorization process. If the resource owner is not involved in the authorization process, you can use the client_credentials mode. This mode is generally used in the M2M mode of the backend server. You can get the application ID and key on the application details page, and you need to store them securely on your server.

You can use OAuth2.0's client_credentials to simulate issuing an access_token with specific scope permissions:

```shell
curl --request POST \
--url https://${YOUR_GEN_AUTH_DOMAIN}/oidc/token \
--header 'accept: application/json' \
--header 'cache-control: no-cache' \
--header 'content-type: application/x-www-form-urlencoded' \
--data 'grant_type=client_credentials&scope=customScope&client_id=CLIENT_ID&client_secret=CLIENT_SECRET'
```

{{$localeConfig.brandName}} will dynamically determine which permissions to issue based on the resource and context requested by the caller. And returns the rejected scope:

```json
{
  "access_token": "...",
  "token_type": "Bearer",
  "expires_in": 3599,
  "scope": "user",
  "scope_rejected": "xxx yyy"
}
```

scope is a list of permissions that the access_token has, separated by spaces. You can use the scope to determine which permissions the user has on the backend.

When the authorization process involves the resource owner's participation in authorization, the authorization code mode in the OAuth2.0 framework can be used. You need to put the permission item in the scope parameter of the link that initiates the authorization, for example:

```sh
https://${YOUR_GEN_AUTH_DOMAIN}/oidc/auth?client_id={your application ID}&scope=openid book:read book:delete&redirect_uri={your business callback address}&state={random string}&response_type=code
```

You need to let the resource owner click the link, then go to the login page, the resource holder authenticates his identity, and authorizes the resource to the caller.
After completing the authentication and authorization, the browser will jump to the business callback address and pass the code authorization code through the URL. The caller can use this code authorization code to {{$localeConfig.brandName}} to exchange for an authorized AccessToken to obtain the resources of the resource party.

The code for exchanging the token for Code is as follows:

```sh
curl --request POST \
--url https://${YOUR_GEN_AUTH_DOMAIN}/oidc/token \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data client_id={application ID} \
--data client_secret= {application key} \
--data grant_type=authorization_code \
--data redirect_uri={callback address} \
--data code={authorization code}
```

Similarly, {{$localeConfig.brandName}} will dynamically determine which permissions to issue the AccessToken based on the resource and context requested by the caller. And returns the rejected scope:

```json
{
  "access_token": "...",
  "token_type": "Bearer",
  "expires_in": 3599,
  "scope": "openid book:read",
  "scope_rejected": "book:delete"
}
```

Of course, the resource party must verify whether the caller carries an AccessToken with permissions before returning the resource. When all checks are passed, the resource can be safely returned.

## Using the Permission API

In addition to using the client_credentials mode of OIDC, you can also use the general permission API to create roles, authorize roles, and determine whether a user has a certain permission. We support SDKs in languages ​​such as Node.js, Python, Java, PHP, and C#. [Click here for details](/guides/access-control/).
