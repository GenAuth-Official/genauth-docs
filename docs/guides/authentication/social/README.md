# Use social login authentication

<LastUpdated/>

Social login refers to the process of users using social platform identity authentication information to authenticate and log in to third-party applications or websites. For example, people often use personal WeChat, QQ, Weibo and other social accounts to log in to Didi, NetEase Cloud Music, etc. Social login not only helps to simplify the user's login experience on third-party platforms, but also provides a simpler and more convenient way for users to create new accounts on third-party platforms. Whether for ordinary users or enterprises, social login has incomparable advantages.

## Social login list

{{$localeConfig.brandName}} currently supports nearly 20 social logins at home and abroad, such as WeChat, GitHub, Sign in with Apple, Alipay, etc. The following is a complete list:

!!!include(common/social-connections-table.md)!!!

## Custom social login

{{$localeConfig.brandName}} provides the ability to access **custom OAuth2.0 identity providers**. If you need to connect to a social login identity source that is not built into {{$localeConfig.brandName}}, you can <router-link to="/connections/custom-social-provider/" target="_blank">read this guide</router-link>.

## WeChat solution

{{$localeConfig.brandName}} has a complete solution for the WeChat ecosystem. You can view the [product introduction](https://www.genauth.ai/solutions/wechat) and read the [Guide to connecting to the WeChat account system](/guides/wechat-ecosystem/).

## Choose the appropriate development access method

{{$localeConfig.brandName}} Social login supports four access methods: **Using JavaScript SDK**, **Using embedded login components**, **Using hosted login pages** and **Manually calling social login interfaces**. Each different access method has its own advantages and disadvantages. You can choose the appropriate method according to your business needs.

### Pros and cons comparison

The following is a comparison of the pros and cons of various methods:

| Access method                                                          | Advantages                                                                                                                                     | Disadvantages                                                                                                                                                                                                                                              | Recommended                                             |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Use JavaScript SDK <img width=200 style="display:inline;float:right"/> | Easy access, only a few lines of code. Highest degree of customization.                                                                        |                                                                                                                                                                                                                                                            | <img width=120 style="display:inline;float:right"/> Yes |
| Use embedded login component                                           | Easy access, only a few lines of code. You can integrate this component into your application. Relatively high degree of customization         |                                                                                                                                                                                                                                                            | Yes                                                     |
| Use hosted login page                                                  | Simple operation and maintenance, which is handled by {{$localeConfig.brandName}}. Each user pool has an independent second-level domain name. | If you need to embed it in your application, you need to use the pop-up mode to log in, that is: after clicking the login button, a window will pop up with the login page hosted by GenAuth, or redirect the browser to the login page hosted by GenAuth. | Yes                                                     |
| Manually call the social login interface                               |                                                                                                                                                | You need to manually parse the user information from the URL. Access is relatively complicated and troublesome.                                                                                                                                            | Not recommended                                         |

### Detailed access method

The following is the detailed access method for each method:

<StackSelector snippet="social-login" selectLabel="Select access method" :order="['sdk', 'embeded-component', 'hosted-page', 'manually']"/>
