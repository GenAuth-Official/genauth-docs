# Configure login and registration methods

<LastUpdated/>

By default, your application only includes the most basic login and registration methods: mobile phone number verification code login, account password login, email registration, mobile phone number registration.

In addition to the most basic login and registration methods mentioned above, {{$localeConfig.brandName}} also supports:

- [Configure login and registration methods](#Configure login and registration methods)
  - [Add social login](#Add social login)
    - [Configure custom social login](#Configure custom social login)
    - [WeChat solution](#WeChat solution)
  - [Add scan code login](#Add scan code login)
    - [Add mini program scan code login](#Add mini program scan code login)
    - [Add self-built mobile application scan code login](#Add self-built mobile application scan code login)
  - [Add enterprise identity source login](#Add enterprise identity source login)
    - [Add enterprise WeChat login](#Add enterprise WeChat login)
    - [Add OIDC identity source login](#Add-oidc-identity source login)
    - [Add SAML identity source login](#Add-saml-identity source login)
    - [Add OAuth2.0 identity source login](#Add-oauth20-identity source login)
    - [Add CAS identity source login](#Add-cas-identity source login)
    - [Add Microsoft Azure AD login](#Add-Microsoft-azure-ad-login)
    - [Add LDAP user directory login](#Add-ldap-user directory login)
    - [Add Windows AD user directory login](#Add-windows-ad-user directory login)

## Add social login

{{$localeConfig.brandName}} currently supports nearly 20 social logins at home and abroad, such as WeChat, GitHub, Sign in with Apple, Alipay, etc. The following is a complete list:

!!!include(common/social-connections-table.md)!!!

### Configure custom social login

{{$localeConfig.brandName}} provides the ability to access **custom OAuth2.0 identity providers**. If you need to connect to a social login identity source that is not built in {{$localeConfig.brandName}}, you can <router-link to="/connections/custom-social-provider/" target="_blank">Read this guide</router-link>.

### WeChat solution

{{$localeConfig.brandName}} has a complete solution for the WeChat ecosystem. You can view [Product Introduction](https://www.genauth.ai/solutions/wechat) and read [Guide to connecting the WeChat account system](/guides/wechat-ecosystem/).

## Add QR code scanning login

### Add mini program QR code scanning login

The mini program QR code scanning login website is a groundbreaking design of {{$localeConfig.brandName}}. After enabling scanning the small login QR code in {{$localeConfig.brandName}}, you can obtain the official real-name user information of WeChat. Users can complete registration or login with real numbers with one-click authorization, and establish an account system based on mobile phone numbers for developers.
For details, please [read this document](/guides/connections/social/wechat-miniprogram-qrconnect/README.md).

<img src="../wechat-ecosystem/images/wxapp-scaning-demo.gif" style="display:block;margin: 15px auto;">

### Add self-built mobile application to scan QR code for login

With the popularity of mobile Internet, mobile phones have become a necessity in people's lives, and it is becoming more and more common to complete authentication by scanning QR codes with mobile phones. More and more mobile applications have integrated the function of scanning QR codes to log in to PC-side website applications, which is a convenient and safe experience for users. With the scanning login capability provided by {{$localeConfig.brandName}}, this function can be implemented quickly and safely. For details, please [read this document](/guides/authentication/qrcode/use-self-build-app/overview.md).

## Add enterprise identity source login

By configuring enterprise identity source login, you can leverage existing enterprise user directories (such as enterprise WeChat, LDAP user directory, Windows AD user directory, etc.) to reduce migration costs. {{$localeConfig.brandName}} will automatically synchronize user information to the user directory of {{$localeConfig.brandName}} each time a user logs in using an enterprise identity source.

### Add enterprise WeChat login

For the configuration process, please see [Connect to enterprise WeChat internal application scan code login](/connections/wechatwork-corp-qrconnect/). After the configuration is complete, you need to enable this login method in the application:

![](./images/Xnip2021-03-03_20-58-57.png)

### Add OIDC identity source login

For the configuration process, please see [Connect OIDC identity source](/connections/oidc/). After the configuration is complete, you need to enable this login method in the application:

![](./images/Xnip2021-03-05_13-23-10.png)

### Add SAML identity source login

For the configuration process, please see [Connect SAML identity source](/connections/saml/). After the configuration is complete, you need to enable this login method in the application:

![](./images/Xnip2021-03-03_21-01-20.png)

### Add OAuth2.0 identity source login

For the configuration process, please see [Connect OAuth2.0 identity source](connections/custom-social-provider/). After the configuration is complete, you need to enable this login method in the application:

![](./images/Xnip2021-03-03_21-05-05.png)

### Add CAS identity source login

For the configuration process, please see [Connect CAS identity source](/connections/cas/). After the configuration is complete, you need to enable this login method in the application:

![](./images/Xnip2021-03-03_21-05-54.png)

### Add Microsoft Azure AD login

For the configuration process, please see [Connect Azure Active Directory identity source](/connections/azure-active-directory/). After the configuration is complete, you need to enable this login method in the application:

![](./images/Xnip2021-03-03_21-07-47.png)

### Add LDAP user directory login

For the configuration process, please see [Connect to LDAP identity source](/connections/ldap/). After the configuration is complete, you need to enable this login method in the application:

![](./images/Xnip2021-03-03_21-10-03.png)
