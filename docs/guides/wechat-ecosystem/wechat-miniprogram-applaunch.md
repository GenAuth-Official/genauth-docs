# Login with Mini Program in Mobile APP

<LastUpdated/>

Login with Mini Program in Mobile APP is a key way to establish a user system centered on mobile phone number. {{$localeConfig.brandName}} greatly reduces the complexity of development for developers through SDK. One line of code can obtain the mobile phone number authorized by the user in the Mini Program through the mobile terminal and establish an account system based on the mobile phone number.

- Application scenario: Mobile APP;
- Overview: Launch WeChat Mini Program in mobile application for login.
- Check the [WeChat official documentation](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Login/Development_Guide.html)

<img src="./images/wechat-mobile-mini-program-login.png" height="400px" style="display:block;margin: 0 auto;"/>

## Step 1: Create a WeChat mobile app on WeChat Open Platform

Please go to the [WeChat Open Platform](https://open.weixin.qq.com/cgi-bin/frame?t=home/app_tmpl&lang=zh_CN) to create a WeChat mobile app, and initiate the mini program association operation for the approved mobile app on the [WeChat Open Platform](https://open.weixin.qq.com/) **Management Center-Mobile Application-Application Details-Associated Mini Program Information** page. The `AppID` of the mini program that needs to be associated - **Mini Login** is `wxa0435021fd7a3af2`.

<img src="https://cdn.genauth.ai/blog/image%20%28363%29.png" height="400px" style="display:block;margin: 0 auto;">

## Step 2: Create a WeChat mini program in WeChat Open Platform (optional)

By default, the APP will use the default mini program provided by {{$localeConfig.brandName}} when launching the mini program login. If you need stronger brand customization capabilities, or want to connect the WeChat account of users who log in through the mini program by scanning the code with their other WeChat public platforms, you need to apply for your own mini program. If you belong to one of these two scenarios:

Please go to [WeChat Public Platform](https://mp.weixin.qq.com/wxopen/waregister?action=step1&token=&lang=zh_CN) to create a WeChat mini program. You need to record the app's **App ID** and **App Secret**, which will be needed later.

At the same time, you need to contact us to obtain the source code of the mini login. For details, please consult <a href="mailto:csm@genauth.ai">GenAuth after-sales service staff</a>.

## Step 3: Configure the "App Launch Mini Program Login" application in the {{$localeConfig.brandName}} console (optional)

On the social login configuration page of the console, find **App Launch Mini Program Login** and fill in the following configuration:

- AppID: AppID of the mini program, select the user of the private mini program to fill in;
- AppSecret: AppSecret of the mini program, select the user of the private mini program to fill in.

## Step 4: Start developing access

### Launch WeChat Mini Program

Developers need to call WechatOpenSDK (for the specific access process, please refer to [WeChat official document](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/iOS.html)) to invoke the mini program:

- Mini program userName is gh_a781a791e29e
- path is /routers/explore
- path query parameters are:
  - userPoolId: your user pool ID
  - getPhone: whether to obtain the user's mobile phone number, 1 means yes, no or other means no
  - fromApp: 1, this parameter is required.
  - useSelfWxapp: 0. This parameter is required.

Take Swift language as an example:

```swift
let userPoolId = "5e4cdd055df3df65dc58b97d"
let req = WXLaunchMiniProgramReq()
req.userName = "gh_a781a791e29e"
req.path = "/routes/explore?userPoolId=\(userPoolId)&getPhone=1&fromApp=1&useSelfWxapp=0"
req.miniProgramType = WXMiniProgramType.test
WXApi.send(req)
```

### Receive data returned by the mini program

The mini login will return a URL query string to the App, and the developer can convert it into a dictionary:

- code: business status code, 200 means success.
- message: prompt information.
- ticket: with authorization success. Developers can use this to obtain user information

```swift
func onResp(_ resp: BaseResp) {
    print("onResp: type=\(resp.type)")
    if resp.isKind(of: WXLaunchMiniProgramResp.self ) {
        if resp.errCode == 0 && resp.type == 0{//Authorization successful
            let response = resp as! WXLaunchMiniProgramResp
            let extMsg = response.extMsg!
            //  WeChat login success notification
            debugPrint(extMsg)
            let arr = extMsg.components(separatedBy:"&")
            var data = [String:Any]()
            for row in arr {
                let pairs = row.components(separatedBy:"=")
                data[pairs[0]] = pairs[1]
            }
            let code = data["code"]
            let message = data["message"]
            let ticket = data["ticket"]
            debugPrint(code, message, ticket)
        }
    }
}
```

### Get user information

If the user agrees to the authorization, the developer can use the ticket to exchange for user information. The default validity period of the ticket is two minutes. By default, for security reasons, the user pool key is required to exchange the ticket for user information, which means that the user information cannot be directly exchanged in the App. We also provide developers with the right to choose. Developers can modify this option on the user pool basic configuration page (see above).

<ApiMethodSpec method="post" host="https://core.genauth.ai" path="oauth/app2wxapp/auth/:userPoolId" summary="ticket in exchange for user information">
<template slot="headers">
<ApiMethodParam name="content-type" type="string" required description="application/json" />
</template>
<template slot="pathParams">
<ApiMethodParam name="userPoolId" type="string" required description="User Pool ID" />
</template>
<template slot="bodyParams">
<ApiMethodParam name="secret" type="string" description="User pool key" />
<ApiMethodParam name="tickett" type="string" required description="The ticket returned by the mini program to the App" />
</template>
<template slot="response">
<ApiMethodResponse description="_id is the user ID."">

```js
{
  emailVerified: false,
  username: 'jack',
  nickname: 'jack',
  company: '',
  photo: 'https://usercontents.genauth.ai/avatar-5e57540f84622ae263294a42-1582781455906',
  loginsCount: 2,
  registerMethod: 'oauth:app2wxapp',
  blocked: false,
  isDeleted: false,
  oauth: '{"nickName":"jack","gender":1,"language":"zh_CN","city":"Haidian","province":"Beijing","country":"China","avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/8INxh2bxDMiaU05jLqvWBszALu2u8Qw4iaxV58v4fERaDWV8yunE7icNiahJdxkOCNfGosqXcQ2SyScAcdyibv8uWWQ/132","phone":"17670416754","openid":"o1p9H4wAgb9uTqpxG5Z1g0pIr3FE","unionid":"o0pqE6Fbr5M-exSu_PeL_sjwN44U"}',
  metadata: '""',
  _id: "5e57540f84622ae263294a42",
  unionid: 'o0pqE6Fbr5M-exSu_PeL_sjwN44U',
  openid: 'o1p9H4wAgb9uTqpxG5Z1g0pIr3FE',
  lastIP: '::ffff:192.168.0.106',
  lastLogin: "2020-02-27T05:33:20.796Z",
  signedUp: "2020-02-27T05:30:55.875Z",
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVuaW9uaWQiOiJvMHBxRTZGYnI1TS1leFN1X1BlTF9zandONDRVIiwiaWQiOiI1ZTU3NTQwZjg0NjIyYWUyNjMyOTRhNDIiLCJjbGllbnRJZCI6IjVlNGNkZDA1NWRmM2RmNjVkYzU4Yjk3ZCJ9LCJpYXQiOjE1ODI3ODE2MDAsImV4cCI6MTU4NDA3NzYwMH0.pd7HJu5Ft8uytxIy4VgHdQiaAKuo96P_LcABFwM7OPI',
  tokenExpiredAt: "2020-03-13T05:33:20.000Z",
  phone: '188xxxx8888'
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

Swift code example:

```swift
import Alamofire

struct Body: Encodable {
    let ticket: String
}
let body = Body(ticket: ticket)
let url = "https://core.genauth.ai/oauth/app2wxapp/auth/5e4cdd055df3df65dc58b97d?ticket=\(ticket)"
AF.request(
    url,
    method: .post,
    parameters: body,
    encoder: JSONParameterEncoder.default
).responseJSON { response in
    debugPrint("Response: \(response)")
}
```

## Next Steps

!!!include(common/what-to-do-when-you-get-userinfo.md)!!!
