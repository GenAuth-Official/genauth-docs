# Backend Logout

<LastUpdated />

Depending on the different terminals and specific usage scenarios, we provide two logout methods: **frontend logout** and **backend logout**:

- **frontend logout**: Frontend logout means that the user accesses the logout address on the frontend, and after logging out, the server will clear the user's login status. This logout method generally requires the participation of the browser and needs to be used in the browser environment. The Node SDK provides a method for generating a logout address, and developers can guide users to access this address on the frontend.

- **backend logout**: Backend logout refers to calling the method of revoking `access_token` in the backend service to invalidate the user's `access_token` and achieve the logout effect. It is suitable for scenarios where the login status is managed using Token.

This part of the document describes the method of generating a backend to withdraw the user's `access_token`.

## Request parameters

| Name  | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ----- | ------ | -------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |
| token | string | Yes                                    | -             | User's `access_token`                      | `xxxxxx`                                          |

## Sample code

```java
import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.*;
import cn.authing.sdk.java.model.AuthenticationClientOptions;

// Set initialization parameters
AuthenticationClientOptions clientOptions = new AuthenticationClientOptions();
clientOptions.setAppId("AUTHING_APP_ID"); // GenAuth Application ID
clientOptions.setAppSecret("AUTHING_APP_SECRET"); // GenAuth application secret key
clientOptions.setAppHost("AUTHING_APP_HOST"); // GenAuth application domain name, such as https://example.genauth.ai. Note: The Host address is an example style. The application Host address format of different versions of user pools is different. The actual address is based on the `Authentication Address` field under Self-built Application->Application Configuration->Authentication Configuration.
clientOptions.setRedirectUri("AUTHING_APP_REDIRECT_URI"); // Login callback address configured by GenAuth application

// Initialize AuthenticationClient
AuthenticationClient authenticationClient = new AuthenticationClient(clientOptions);

// Revoke access_token
Boolean success = client.revokeToken("ACCESS_TOKEN");
System.out.println(success);
```

## Request response

Type: `boolean`

Sample result:

```txt
true
```
