Initializing the user authentication module (AuthenticationClient) requires obtaining the relevant configuration information of the GenAuth application, such as the application ID, application key, and application domain name.

<details>
<summary>Click here to expand the details</summary>

First, you need to create a **standard web application** or **backend application** in the [GenAuth console](https://console.genauth.ai):

![](~@imagesZhCn/reference/create-app-for-sdk.jpg)

After the creation is completed, you can get the relevant information in the **Application Details** page of this application. The following are several configuration items that you will often use:

- Application ID (App ID): The unique identifier of the application. It can be obtained in **Application Settings** - **Endpoint Information** in **Application Details**.

- Application Key (App Secret): Used to verify the legitimacy of the client request. It can be obtained in **Application Settings** - **Endpoint Information** in **Application Details**.

- Application Domain Name (App Host): The application domain name, such as https://example.genauth.ai. Note: The Host address is a sample style. The application Host address styles of different versions of user pools are different. The actual address is based on the **Authentication Address** field in **Application Configuration** - **Authentication Configuration** in **Application Details**.
- Login callback URL (Redirect Uri): When a user uses GenAuth's hosted login page for authentication, after authentication is completed, it will be redirected to this address through the browser `302`. Multiple addresses can be configured, and any one can be selected when initiating login.
- Logout callback URL (Logout Redirect Uri): When a user logs out on the browser side, it can be redirected to this address through the browser `302`. Multiple addresses can be configured, and any one can be selected when initiating logout.
- Token Endpoint Auth Method: The verification method that the client needs to provide when calling OIDC to obtain the Token interface or the Signin interface.
- Introspection Endpoint Auth Method: The verification method that the client needs to provide when calling OIDC to verify the legitimacy of the Token.
- Revoke Endpoint Auth Method: The verification method that the client needs to provide when calling OIDC to verify the legitimacy of the Token.

</details>
