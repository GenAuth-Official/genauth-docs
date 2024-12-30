# CSharp

This guide will start with the installation of the GenAuth CSharp SDK and step by step guide you on how to quickly add user authentication and management capabilities to your existing or newly developed applications.

<AppDetailSiderBar />

## Installation

```powershell
# Nuget
Install-Package GenAuth.CSharp.SDK
```

## Authenticate your user

### Initialization

```csharp
// Initialize using AppId, APP_SECRET, appHost, redirectUri
using GenAuth.CSharp.SDK.Models.Authentication;
using GenAuth.CSharp.SDK.Services;

AuthenticationClient authentication = new AuthenticationClient(new AuthenticationClientInitOptions{
AppId = "GEN_AUTH_APP_ID",//Application ID
AppSecret = "GEN_AUTH_SECRET",//Application Secret
Domain = "GEN_AUTH_DOMAIN",//User pool domain name corresponding to the application
RediretUri = "GEN_AUTH_REDIRECTURI",//Redirection target URL after authentication is completed
});
```

### Simple authentication user

```csharp
//Generate authentication address, users log in through the authentication address, and jump to the specified redirectUri with code and state
string authUrl = authenticationClient.BuildAuthUrl( scope: "openid profile offline_access");
```

## Manage your users

### Initialization

```csharp
using GenAuth.CSharp.SDK.Models;
using GenAuth.CSharp.SDK.Services;

ManagementClientOptions options = new ManagementClientOptions()
{
AccessKeyId = "GEN_AUTH_USERPOOL_ID",//User pool ID
AccessKeySecret = "GEN_AUTH_USERPOOL_SECRET"//User pool key
};

ManagementClient managementClient = new ManagementClient(options);
```

### Simple management user

```csharp
//Create user
UserSingleRespDto result = await managementClient.CreateUser
(new CreateUserReqDto
{
Status = CreateUserReqDto.status.ACTIVATED,//User status
Username = "test",//User name
Password = "passw0rd",//Password
PasswordEncryptType = CreateUserReqDto.passwordEncryptType.NONE,//Password encryption method
Options=new CreateUserOptionsDto { }//Configuration information
},
});
```

## Error handling

```csharp
UserSingleRespDto userSingleRespDto =await managementClient.GetUser("61c188ccfff26fef0ca6880d");

if (userSingleRespDto.StatusCode !== 200)
{
throw new Exception(userSingleRespDto.Message); // Throw an exception, and the global exception catching middleware will catch the exception
}
```
