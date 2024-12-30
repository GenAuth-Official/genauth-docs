---
meta:
  - name: description
content: Python SDK
---

# {{$localeConfig.brandName}} - Python SDK

<LastUpdated/>

{{$localeConfig.brandName}} Python SDK consists of two parts: user authentication module (AuthenticationClient) and management module (ManagementClient).

!!!include(reference/sdk/common/authentication_client_desc.md)!!!

!!!include(reference/sdk/common/management_client_desc.md)!!!

In a project, ManagementClient should only be initialized once, while an instance of AuthenticationClient corresponds to one end user and should be initialized once in each request.

### GitHub / PIP address

| Item               | Description                                                                            |
| ------------------ | -------------------------------------------------------------------------------------- |
| Supported versions | Python 2.7+, Python 3                                                                  |
| GitHub address     | [https://github.com/Authing/authing-py-sdk](https://github.com/Authing/authing-py-sdk) |
| PIP address        | [https://pypi.org/project/authing/](https://pypi.org/project/authing/)                 |

## Installation

```bash
pip install authing
```

## Use the user authentication module

!!!include(reference/sdk/common/authentication_client_desc.md)!!!

### Initialization

#### Get application information

!!!include(reference/sdk/common/get_app_info.md)!!!

#### Initialization

Initialization example code:

```python
from authing import AuthenticationClient

# Initializing AuthenticationClient
authentication_client = AuthenticationClient(
    # GenAuth application ID
    app_id='GEN_AUTH_APP_ID',

    # GenAuth application secret
    app_secret='GEN_AUTH_APP_SECRET',

    # GenAuth application host, such as https://example.genauth.ai
    app_host='GEN_AUTH_APP_HOST',

    # GenAuth application login callback address
    redirect_uri='GEN_AUTH_APP_REDIRECT_URI',
)
```

<details>
<summary>Click to expand the complete parameters and explanations of AuthenticationClient</summary>

- `app_id`: GenAuth application ID, required.
- `app_secret`: GenAuth application secret, required.
- `app_host`: GenAuth application domain name, such as https://example.genauth.ai, required. Note: The Host address is an example style. The application Host address format of different versions of user pools is different. The actual address is based on the `Authentication Address` field under Self-built Application->Application Configuration->Authentication Configuration.
- `redirect_uri`: The redirection target URL after authentication is completed, optional. The GenAuth server will verify this link, which needs to be consistent with the settings of the console.
- `logout_redirect_uri`: The redirection target URL after logout is completed, optional. The GenAuth server will verify this link, which needs to be consistent with the settings of the console.
- `scope`: The permissions requested by the application side to GenAuth, separated by spaces, optional. The default is `'openid profile'`, and the successfully obtained permissions will appear in the `scope` field of `access_token`. Below are some examples. For more scope definitions, see the GenAuth related [documents](https://docs.genauth.ai/concepts/oidc-common-questions.html#scope-%E5%8F%82%E6%95%B0%E5%AF%B9%E5%BA%94%E7%9A%84%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF).
- `openid`: The permissions specified by the OIDC standard must be included.
- `profile`: Get the user's basic identity information.
- `offline_access`: Get `refresh_token` during authentication. You can request a new `access_token` through `refresh_token`.
- `protocol`: Application protocol type, default is `oidc`. Optional values ​​are `oidc`, `oauth`, `cas`, `saml`.
- `token_endpoint_auth_method`: Get token endpoint authentication method, default is `client_secret_post`. Optional values ​​are `client_secret_post`, `client_secret_basic` and `none`. It needs to be consistent with the configuration of **Exchange token authentication method** in **Application** - **Self-built application** - **Application details** - **Application configuration** - **Other settings** - **Authorization configuration** in the [GenAuth console](https://console.genauth.ai).
- `introspection_endpoint_auth_method`: Verify token status endpoint authentication method, default is `client_secret_post`. Optional values ​​are `client_secret_post`, `client_secret_basic` and `none`. It should be consistent with the configuration of **Verify token authentication method** in **Application** - **Self-built application** - **Application details** - **Application configuration** - **Other settings** - **Authorization configuration** in the [GenAuth console](https://console.genauth.ai).
- `revocation_endpoint_auth_method`: The authentication method of revocation token endpoint, which defaults to `client_secret_post`. The optional values ​​are `client_secret_post`, `client_secret_basic` and `none`. It should be consistent with the configuration of **Revoke token authentication method** in **Application** - **Self-built application** - **Application details** - **Application configuration** - **Other settings** - **Authorization configuration** in the [GenAuth console](https://console.genauth.ai).
- `timeout`: The request timeout, optional, in milliseconds, defaults to 10000 (10 seconds).
- `reject_unauthorized`: Whether to reject illegal HTTPS requests, the default is true; if it is a private deployment scenario and the certificate is not trusted, it can be set to false.
- `lang`: The language format returned by the interface Message (optional), the optional values ​​are zh-CN, en-US, ja-JP and zh-TW, the default is zh-CN.

</details>

### Quick Start

After initializing the user authentication module (AuthenticationClient), you can get an instance of AuthenticationClient and then call methods on this instance.

#### Login using an online hosted login page

GenAuth provides all developers with an out-of-the-box online hosted login page. The Python SDK provides methods such as automatically generating login links and processing login callbacks.

<details>
<summary>Click here to expand the detailed introduction of GenAuth hosted login page</summary>

GenAuth hosted login page is the simplest and most secure way to integrate. This is because the login process is maintained by GenAuth and kept secure by GenAuth. For most integrations, it is recommended to use the login process hosted by GenAuth. Your business system redirects the user to GenAuth, where the user authenticates and then redirects back to the application callback connection configured in the console. This design is considered a security best practice. In terms of custom configuration, the hosted mode provides a moderate degree of login registration form customization, which can be customized through console configuration and CSS. [Click here to experience it online](https://sample-sso.genauth.ai/).

![](~@imagesZhCn/reference/sample-sso-app.jpg)

</details>

Using this method, after Python SDK generates the login address, you can guide the user to visit this link in the browser. When the end user clicks this link, the browser will redirect to your online login page hosted by GenAuth for authentication through 302 redirection, and call back to your application system after the authentication is completed. GenAuth hosted login page supports GenAuth now supports all authentication capabilities, including password authentication, social login authentication, scan code login, etc., which is also our most recommended authentication method.

##### Generate a one-time login link

Generate a one-time address for login and guide the user to visit this link.

```python
from authing import AuthenticationClient

# Initializing AuthenticationClient
authentication_client = AuthenticationClient(
    # GenAuth application ID
    app_id='GEN_AUTH_APP_ID',

    # GenAuth application secret
    app_secret='GEN_AUTH_APP_SECRET',

    # GenAuth application host, such as https://example.genauth.ai
    app_host='GEN_AUTH_APP_HOST',

    # GenAuth application login callback address
    redirect_uri='GEN_AUTH_APP_REDIRECT_URI',
)

# Generate a one-time address for login, which can be used to guide users to visit this address
url = authentication_client.build_authorize_url()
print(url)
```

##### Handle login callback

When the user completes login on the GenAuth hosted login page, they will be redirected to your configured login callback address (the `redirectUri` passed in when initializing AuthenticationClient), and the one-time temporary credential `code` will be carried in the URL's Query parameter. You can use this `code` to exchange for `access_token`.

```python
from authing import AuthenticationClient

# Initializing AuthenticationClient
authentication_client = AuthenticationClient(
    # GenAuth application ID
    app_id='GEN_AUTH_APP_ID',

    # GenAuth application secret
    app_secret='GEN_AUTH_APP_SECRET',

    # GenAuth application host, such as https://example.genauth.ai
    app_host='GEN_AUTH_APP_HOST',

    # GenAuth application login callback address
    redirect_uri='GEN_AUTH_APP_REDIRECT_URI',
)

code = "REPLACE_ME_WITH_REAL_CODE"
# Use code to exchange for access_token
token_resp = authentication_client.get_access_token_by_code()
print(token_resp)
```

#### Email + password login

In addition to the authentication method using the hosted login page, if you need to build your own login page, GenAuth also provides an interface-based authentication method. If the authentication is successful, you can also get the user's `access_token`. After obtaining the `access_token`, you can call methods such as modifying user information.

```python
from authing import AuthenticationClient

# Initializing AuthenticationClient
authentication_client = AuthenticationClient(
    # GenAuth application ID
    app_id='GEN_AUTH_APP_ID',

    # GenAuth application secret
    app_secret='GEN_AUTH_APP_SECRET',

    # GenAuth application host, such as https://example.genauth.ai
    app_host='GEN_AUTH_APP_HOST',

    # GenAuth application login callback address
    redirect_uri='GEN_AUTH_APP_REDIRECT_URI',
)

# Call the login method of AuthenticationClient, such as sign_in_by_email_password
sign_in_resp = authentication_client.sign_in_by_email_password(
  email="test@example.com",
  password="passw0rd"
)

# You can get the user's access_token from sign_in_resp, which represents the user's access to the interface
access_token = sign_in_resp["data"]["access_token"]
# Then use this access_token to call the set_access_token method of AuthenticationClient, AuthenticationClient can then call interfaces that require login, such as getting user information, modifying user information, getting role list, etc.
authentication_client.set_access_token(access_token)

# Call other interfaces that require login, such as modifying user information
update_profile_resp = authentication_client.update_profile(
  nickname="xxx"
)
print(update_profile_resp)
```

## Use the management module

The management module (ManagementClient) makes requests as an administrator, used to manage user pool resources and perform management tasks, providing methods for managing users, roles, applications, resources, etc.; generally speaking, all operations you can do in the [{{$localeConfig.brandName}} console](https://console.genauth.ai/console/userpool) can be completed using this module.

### Initialization

#### Get AK/SK

GenAuth Python SDK uses AK/SK for local signature authentication, where the client calculates the signature of the request data using AK/SK and transmits the signature result to the server for signature verification.

In GenAuth, there are currently two types of AK/SK:

- User pool global AK/SK: Has global operation permissions for all resources in the user pool. You can get the **user pool ID** and **user pool secret** from **Settings** - **Basic Settings** - **Key Management** in the [GenAuth console](https://console.genauth.ai), where **user pool ID** is the AK (Access Key ID), and **user pool secret** is the SK (Access Key Secret).
- Collaboration administrator AK/SK: Can perform fine-grained authorization on resources in the user pool, and the collaboration administrator's AK/SK can only call the APIs it has been authorized for. (In development, stay tuned)

You can choose the appropriate AK/SK based on your needs.

<details>
<summary>Click here to expand how to get the user pool ID and user pool secret</summary>

In the [GenAuth console](https://console.genauth.ai), you can get the user pool ID (UserPool Id) and user pool secret (UserPool Secret) from the **Settings** -> **Basic Settings** -> **Key Management** page, as shown below:

![](https://files.authing.co/authing-docs-v2/20220328-182903.png)

</details>

#### initialization

Initialization example code:

```python
from authing import ManagementClient

# Initializing ManagementClient
management_client = ManagementClient(
  access_key_id="GEN_AUTH_ACCESS_KEY_ID", # GenAuth Access Key ID
  access_key_secret="GEN_AUTH_ACCESS_KEY_SECRET", # GenAuth Access Key Secret
)
```

<details>
<summary>Click here to expand the complete parameters and explanations of ManagementClient</summary>

- `access_key_id`: GenAuth user pool ID or collaboration administrator's Access Key ID.
- `access_key_secret`: GenAuth user pool secret or collaboration administrator's Access Key Secret.
- `access_key_secret`: Request timeout, optional, in milliseconds, defaults to 10000 (10 seconds).
- `host`: GenAuth server address, defaults to `https://api.genauth.ai`. If you are using the GenAuth public cloud version, ignore this parameter. If you are using the private deployment version, this parameter is required, the format is: https://authing-api.my-authing-service.com (no slash / at the end).
- `lang`: Interface Message return language format (optional), optional values are zh-CN, en-US, ja-JP and zh-TW, defaults to zh-CN.

</details>

### Quick Start

After initializing ManagementClient, you can get an instance of ManagementClient and then call methods on this instance.

#### Get user list

```python
from authing import ManagementClient

# Initializing ManagementClient
management_client = ManagementClient(
  access_key_id="GEN_AUTH_ACCESS_KEY_ID", # GenAuth Access Key ID
  access_key_secret="GEN_AUTH_ACCESS_KEY_SECRET", # GenAuth Access Key Secret
)

resp = management_client.list_users(
    options={
      "pagination": {
        "page": 1,
        "limit": 10
      }
    }
)
print(resp)
```

#### Create role

```python
from authing import ManagementClient

# Initializing ManagementClient
management_client = ManagementClient(
  access_key_id="GEN_AUTH_ACCESS_KEY_ID", # GenAuth Access Key ID
  access_key_secret="GEN_AUTH_ACCESS_KEY_SECRET", # GenAuth Access Key Secret
)

data = management_client.create_role(
  code='admin',
  description='Admin',
)
print(resp)
```

## Error handling

GenAuth Python SDK methods do not throw errors (exceptions) when requesting interfaces, unless specifically stated. All methods return values include two status codes: `statusCode` and `apiCode`:

- `statusCode`: `statusCode` is the request status code, which does not include specific business error information. **When `statusCode` is `200`, it indicates that the interface request is successful**, and no `apiCode` will be returned. When `statusCode` is not `200`, it indicates that the interface request failed or additional operations are required (for example, the login interface requires MFA secondary verification), you need to pay attention to this and perform necessary error handling. Each `statusCode` corresponds to a type of error,
  For specific error classification, please refer to the following. In most cases, unless you need to respond to certain specific exceptions, you only need to focus on `statusCode`, without needing to focus on `apiCode`.
- `apiCode`: `apiCode` is the business status code, each `apiCode` has a specific error meaning, and the specific `apiCode` list is as follows. `apiCode` will only be returned when `statusCode` is not 200 and the error reason has business significance.
- `requestId`: Request ID, returned when the request fails. If you encounter an error while using the Python SDK, you can use this `requestId` to consult the GenAuth development team.

For detailed `statusCode` and `apiCode`, please refer to [Error Code](../../error-code.md).

Example code:

```python
from authing import AuthenticationClient

# Initializing AuthenticationClient
authentication_client = AuthenticationClient(
    # GenAuth application ID
    app_id='GEN_AUTH_APP_ID',

    # GenAuth application secret
    app_secret='GEN_AUTH_APP_SECRET',

    # GenAuth application host, such as https://example.genauth.ai
    app_host='GEN_AUTH_APP_HOST',

    # GenAuth application login callback address
    redirect_uri='GEN_AUTH_APP_REDIRECT_URI',
)

# Call the login method of AuthenticationClient, such as sign_in_by_email_password
sign_in_resp = authentication_client.sign_in_by_email_password(
  email="test@example.com",
  password="passw0rd"
)

status_code, message, data = sign_in_resp["statusCode"], sign_in_resp["message"], sign_in_resp["data"]

# status_code is not 200, indicating that the request failed, and an exception needs to be caught
if status_code != 200:
  raise Exception(message)

# Continue normal business logic processing
```

## Private deployment

If you are using a private deployment GenAuth IDaaS service, you need to specify the API address of the private GenAuth instance when initializing, as follows:

```python
from authing import ManagementClient

# Initializing ManagementClient
management_client = ManagementClient(
  access_key_id="GEN_AUTH_ACCESS_KEY_ID", # GenAuth Access Key ID
  access_key_secret="GEN_AUTH_ACCESS_KEY_SECRET", # GenAuth Access Key Secret
  host="https://api.your-authing-service.com" # Set the address of the private GenAuth service
)
```

If you are unsure how to obtain it, you can contact the GenAuth IDaaS service administrator.

## Get help

Any suggestions or feedback are welcome in the [GenAuth forum](https://forum.genauth.ai/).
