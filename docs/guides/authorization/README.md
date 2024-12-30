# Authorization

<LastUpdated/>

In the previous section, we introduced [**Authentication**](../authentication/README.md) and [**Permission Management**](../access-control/README.md). Authentication is the process of identifying the identity of the requester, and permission management is the process of determining who has which operation permissions. After determining the user's identity and the permissions the user has, the next thing we need to do is to safely grant the user permissions.

## Meaning of Authorization

In the **General Field**, authorization is the process by which leaders provide employees and subordinates with more autonomy to achieve organizational goals.

In the **Computer Field**, authorization is the power granted to an entity by the approval authority designated by the information system to process, store or transmit information.

In the **Authentication Field**, authorization refers to a mechanism in which the client can access server resources in a limited manner after identity authentication.

## Why do we need "authorization"?

In the user system that has been built, when your API needs to determine whether the current access user can access the current resource, you need to build your own permission system. Authorization is a very important concept in the permission system. It refers to the process of determining what permissions a user has, which is completely different from authentication.

For enterprises, authorization can clarify the relationship between organizational members, make responsibilities and boundaries clearer, and facilitate company management; at the same time, authorization can ensure data security and prevent risks. Different permissions allow different operations, which can prevent accidents such as user damage, data leakage, and misoperation; authorization can improve the efficiency of decision-making. Excellent authorization and permission management make the system easier to operate and improve the work efficiency of employees.

From the product perspective, authorization can ensure the use security and data security of the product system, prevent illegal operations and data leakage; authorization can also improve the operability of the system and enhance user experience; in addition, good authorization functions will enhance product value and make it more competitive in the market.

## Authorization mode

There are two main authorization modes, namely, the authorization code mode based on the OIDC process and the centralized verification of user authorization through the API interface to the authorization center.

### Authorization mode based on OIDC framework

OIDC framework is a secure, lightweight, standard authorization system used to help resource parties, callers, and resource owners complete the authorization process. If the resource owner is not involved in the authorization process, the client_credentials mode can be used. This mode is generally used in the M2M mode of the backend server. You can create a programmatic access account on the application details page and obtain a pair of AK and SK. You need to give it to the caller.

You can use OIDC's client_credentials mode to request an access_token with a specific scope:

```shell
curl --request POST \
  --url https://${YOUR_GEN_AUTH_DOMAIN}/oidc/token \
  --header 'accept: application/json' \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data 'grant_type=client_credentials&scope=customScope&client_id=AK&client_secret=SK'
```

{{$localeConfig.brandName}} dynamically determines which permissions to issue based on the resource and context requested by the caller. And returns the rejected scope:

```json
{
  "access_token": "...",
  "token_type": "Bearer",
  "expires_in": 3599,
  "scope": "user",
  "scope_rejected": "xxx yyy"
}
```

scope is a list of permissions that the access_token has, separated by spaces. You can use the scope in the backend to determine which permissions the user has.

When the authorization process involves the resource owner's participation in authorization, the authorization code mode in the OIDC framework can be used. You need to put the permission item in the scope parameter of the link that initiates the authorization, for example:

```sh
https://${YOUR_GEN_AUTH_DOMAIN}/oidc/auth?client_id={Programming access account AK}&scope=openid book:read book:delete&redirect_uri={Your business callback address}&state={Random string}&response_type=code
```

You need to let the resource owner click the link, then go to the login page, the resource holder authenticates his identity, and authorizes the resource to the caller.
After completing the authentication and authorization, the browser will jump to the business callback address and pass the code authorization code through the URL. The caller can use this code authorization code to {{$localeConfig.brandName}} to exchange for an authorized AccessToken to obtain the resources of the resource party.

The code for exchanging the code for token is as follows:

```sh
curl --request POST \
  --url https://${YOUR_GEN_AUTH_DOMAIN}/oidc/token \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data client_id={Programming access account AK} \
  --data client_secret={Programming access account SK} \
  --data grant_type=authorization_code \
  --data redirect_uri={Callback address} \
  --data code={Authorization code}
```

Similarly, {{$localeConfig.brandName}} will dynamically determine the permissions of the AccessToken issued based on the resources and context requested by the caller. Denied permissions will not appear in the scope:

```json
{
  "access_token": "...",
  "token_type": "Bearer",
  "expires_in": 3599,
  "scope": "openid book:read"
}
```

Of course, the resource party must verify whether the caller carries an AccessToken with permissions before returning the resource. When all checks are passed, the resource can be safely returned.

## Using the Permission API

In addition to using the client_credentials mode of OIDC, you can also use the general permission API to create roles, authorize roles, and determine whether a user has a certain permission. We support SDKs in languages ​​such as Node.js, Python, Java, PHP, and C#. [Click here for details](/guides/access-control/).
