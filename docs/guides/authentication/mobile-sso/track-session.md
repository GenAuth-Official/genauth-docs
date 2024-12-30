---
meta:
  - name: description
    content: Automatically detect login
---

# Automatically detect login on mobile

<LastUpdated/>

## Principle introduction

Automatically detect the login status of associated applications on the same device, which essentially establishes a session connection between a deviceId (device ID) and the GenAuth server.

When a user logs in to an application, the GenAuth interface is called to create a session between the deviceId and the GenAuth server, so that when the user logs in to other applications on the same device, the existence of this session can be detected, thereby skipping the login step and achieving automatic login.

Suppose you have three apps: App 1, App2 and App3. As long as one of the apps has established a session relationship with the GenAuth server, the session can be detected.

## Start access

### Get device ID

::: hint-warning
Please be sure to verify that the deviceId you get in different apps is consistent during testing!
:::

#### iOS

The device ID of an iOS device can be obtained through [identifierForVendor](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor). The device ID obtained by apps from the same vendor is the same.

::: hint-info
Under what circumstances do apps belong to the same vendor?

1. Apps downloaded from the App Store are determined based on the app information registered in the App Store.
2. Apps not downloaded from the App Store
   1. On iOS 6 and before, apps with the same first two parts of the bundle id belong to the same vendor, such as com.example.app1 and com.example.app2 are the same vendor. com.example.app1.xxx and com.example.app2.xxx also belong to the same vendor.
   2. iOS 7 and later, apps with the same bundle id except the last part belong to the same vendor, such as com.example.app1 and com.example.app2. However, com.example.app1.xxx and com.example.app2.xxx do not belong to the same vendor.

:::

If your apps do not belong to the same vendor, it is recommended to use [ASIdentifierManager](https://developer.apple.com/documentation/adsupport/asidentifiermanager).

Swift 5 code example:

```swift
let deviceId = UIDevice.current.identifierForVendor!.uuidString
```

OC code example:

```objectivec
UIDevice *currentDevice = [UIDevice currentDevice];
NSString *deviceId = [[currentDevice identifierForVendor] UUIDString];
```

#### Android

Android devices can be obtained through [ANDROID_ID](https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID):

Java code example:

```java
import android.provider.Settings.Secure;
private String android_id = Secure.getString(getContext().getContentResolver(),
                                                        Secure.ANDROID_ID);
```

Kotlin code example:

```kotlin
val deviceID = Settings.Secure.getString(contentResolver,
Settings.Secure.ANDROID_ID)
```

<ApiMethodSpec method="post" host="https://core.genauth.ai" path="/oauth/sso/mobile/createSession" summary="Create session">
<template slot="description">

This API is used to create a session in a mobile application client, **and the user must be logged in**, and add the authorization request header to the request header to carry the user token.

</template>
<template slot="headers">
<ApiMethodParam name="authorization" type="string" required description="token of logged in user" />
<ApiMethodParam name="content-type" type="string" required description="application/json" />
</template>
<template slot="bodyParams">
<ApiMethodParam name="deviceId" type="string" required description="Device ID" />
<ApiMethodParam name="userPoolId" type="string" required description="User Pool ID" />
</template>
<template slot="response">
<ApiMethodResponse>

```js
{
    code: 200,
    message: "Session created successfully!",
    data: {
        sessionId: "xxxxxx", // session ID
    }
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

Swift code example:

```swift
func createSession(userPoolId: String, token: String){
    // Mobile SSO: createSession
    struct MobileSSO: Encodable {
        let userPoolId: String
        let deviceId: String
    }
    let body = MobileSSO(
        userPoolId: UserPoolId,
        deviceId: UIDevice.current.identifierForVendor!.uuidString,
    )
    let headers: HTTPHeaders = [
        "Authorization": token ,
        "Accept": "application/json"
    ]
    let api = "https://core.genauth.ai/oauth/sso/mobile/createSession"
    AF.request(api, method: .post, parameters: body, encoder: JSONParameterEncoder.default, headers: headers).response { response in
         debugPrint(response)
    }
}

```

<ApiMethodSpec method="get" host="https://core.genauth.ai" path="/oauth/sso/mobile/trackSession" summary="Query session" description="This API is used to query the session in the mobile application client, and does not require the user to be logged in.">
<template slot="headers">
<ApiMethodParam name="content-type" type="string" required description="application/json" />
</template>
<template slot="bodyParams">
<ApiMethodParam name="deviceId" type="string" required description="Device ID" />
<ApiMethodParam name="userPoolId" type="string" required description="User Pool ID" />
</template>
<template slot="response">
<ApiMethodResponse>

<template slot="description">

There are two situations: directly returning user information and returning ticket

</template>

```js
// Return user information directly
{
    code: 200,
    message: 'Successfully obtained session user information',
    data: {
      "_id":"5e05bbf2d51b3761d5c71070",
      "email":"983132@qq.com",
      "emailVerified":false,
      "oauth":"",
      "registerMethod":"default:username-password",
      "username":"983132@qq.com",
      "nickname":"",
      "company":"",
      "photo":"https://usercontents.authing.co/authing-avatar.png",
      "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiOTgzMTMyQHFxLmNvbSIsImlxxxxxxxxx",
      "phone":"",
      "tokenExpiredAt":"2020-01-11T08:08:18.000Z",
      "loginsCount":1,
      "lastIP":"::1",
      "signedUp":"2019-12-27T08:08:18.115Z",
      "blocked":false,
      "isDeleted":false
    }
}

// Return ticket
{
    code: 200,
    message: 'Successfully obtained session user information',
    data: {
      ticket: "xxxxdjdkxxxxx",
      nickname: "xxxx",
      photo: "https://usercontents.authing.co/authing-avatar.png"
    }
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

If the session is queried, GenAuth trackSession will return the user's nickname and avatar (for display purposes) and the ticket used to exchange for user information:

You can display the user's nickname and avatar on the front end, as shown below:

![](https://cdn.genauth.ai/blog/image%20%28462%29.png)

<ApiMethodSpec method="post" host="https://core.genauth.ai" path="/oauth/sso/mobile/exchangeUserInfoWithTicket" summary="Use ticket to exchange for user information">
<template slot="description">

Use ticket to exchange for user information, **This interface requires a user pool key, please call it on the back end**!

</template>
<template slot="headers">
<ApiMethodParam name="content-type" type="string" required description="application/json" />
</template>
<template slot="bodyParams">
<ApiMethodParam name="ticket" type="string" required description="ticket obtained by trackSession" />
<ApiMethodParam name="secret" type="string" required description="User pool key" />
<ApiMethodParam name="userPoolId" type="string" required description="User Pool ID" />
</template>
<template slot="response">
<ApiMethodResponse>

```json
{
   "code":200,
   "message":"Successfully exchanged user information",
   "data":{
      "_id":"5e05bbf2d51b3761d5c71070",
      "email":"983132@qq.com",
      "emailVerified":false,
      "oauth":"",
      "registerMethod":"default:username-password",
      "username":"983132@qq.com",
      "nickname":"",
      "company":"",
      "photo":"https://usercontents.authing.co/authing-avatar.png",
      "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiOTgzMTMyQHFxLmNvbSIsImlxxxxxxxxx",
      "phone":"",
      "tokenExpiredAt":"2020-01-11T08:08:18.000Z",
      "loginsCount":1,
      "lastIP":"::1",
      "signedUp":"2019-12-27T08:08:18.115Z",
      "blocked":false,
      "isDeleted":false
   }
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

<ApiMethodSpec method="post" host="https://core.genauth.ai" path="/oauth/sso/mobile/destorySession" summary="Destroy session">
<template slot="description">

This interface is used to destroy a session in a mobile application client, **and the user must be logged in, and the authorization request header with the user token must be added to the request header**. Since there are multiple applications, by default only the session of the specified App will be destroyed (trackSession will query the session as long as there is another App with a session). If you want to clear the sessions of all Apps, you can set destoryAll to true.

</template>
<template slot="headers">
<ApiMethodParam name="authorization" type="string" required description="token of logged in user" />
<ApiMethodParam name="content-type" type="string" required description="application/json" />
</template>
<template slot="bodyParams">
<ApiMethodParam name="deviceId" type="string" required description="Device ID" />
<ApiMethodParam name="userPoolId" type="string" required description="User Pool ID" />
</template>
<template slot="response">
<ApiMethodResponse>

```js
 {
    code: 200,
    message: "Destroying session successfully!"
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

::: hint-info
You should call this API every time the user logs out and deletes the App.
:::
