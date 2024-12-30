# ASA form filling

<LastUpdated/>

GenAuth Secure Authentication (ASA) is a feature developed by {{$localeConfig.brandName}} that provides single sign-on (SSO) for external web applications that do not support standard authentication protocols (OAuth2.0, OIDC, SAML, CAS).

Administrators can assign application accounts and passwords to users. {{$localeConfig.brandName}} stores the account and password in encrypted form in the database. When a user accesses the login interface of an application to which an account and password are assigned, {{$localeConfig.brandName}} will automatically fill in the account and password and log in. End users only need to log in to {{$localeConfig.brandName}} to directly access the assigned application.

## How to use

### Create an ASA application

Find an application that supports ASA in the {{$localeConfig.brandName}} application market. Below we take "Shimo Document" as an example for demonstration.

![](~@imagesZhCn/guides/asa/1.png)

Click to enter the details, click "Get Application"

![](~@imagesZhCn/guides/asa/2.png)

Fill in the application name, click "Next"

![](~@imagesZhCn/guides/asa/3.png)

Click "Finish"

![](~@imagesZhCn/guides/asa/4.png)

On the Account Assignment page, assign an application account to the user

![](~@imagesZhCn/guides/asa/5.png)

On the Access Authorization page, select "Allow all users to access"

![](~@imagesZhCn/guides/asa/6.png)

### Download the plug-in

End users need to download the browser plug-in to use ASA. The download list of browser plug-ins is as follows. If the browser you are using is not in the following list, please try to install the Chrome version of the plug-in:

| Browser | Instructions |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Google Chrome | <ul><li>Try to directly open the [Chrome App Store](https://chrome.google.com/webstore/detail/authing-secure-authentica/oeikeglindpddkmhcfgjadjmkbemfohm) to install</li><li>If you cannot access the link above, check <a href="./chrome-manual-install.html" target="_blank">Chrome Manual Installation Plug-in</a> to install</li></ul> |
| 360 Speed ​​Browser | Go to [App Center](https://ext.chrome.360.cn/webstore/detail/djnmokbcodildihilkkhomijjmpmcdmk) to download and install. You can use this plug-in after logging in to the GenAuth application panel |
| 360 Secure Browser | Go to [App Center](https://ext.se.360.cn/webstore/detail/djnmokbcodildihilkkhomijjmpmcdmk) to download and install, and then log in to the GenAuth App Panel to use this plug-in |
| Firefox | Go to [Extension Center](https://addons.mozilla.org/zh-CN/firefox/addon/authing-secure-authentication/) to download and install, and then log in to the GenAuth App Panel to use this plug-in |

<!-- | Safari | Go to [App Store](https://apps.apple.com/cn/app/%E6%90%9C%E7%8B%97%E8%BE%93%E5%85%A5%E6%B3%95-%E8%AF%AD%E9%9F%B3%E5%8F%98%E5%A3%B0%E6%96%97%E5%9B%BE%E8%A1%A8%E6%83%85/id917670924) Download and install, and you can use this plug-in after logging in to the GenAuth application panel | -->

### Experience login

Click the "Go to Experience" button in the single sign-on application list to enter the {{$localeConfig.brandName}} application panel login page.

![](~@imagesZhCn/guides/asa/7.png)

Enter the email and password of the user who was previously assigned an account, click "Login", and enter the application panel.

![](~@imagesZhCn/guides/asa/8.png)

A red exclamation mark will appear on the plug-in icon. Click the "plug-in icon" to open the plug-in page and click "Trust" the current account.

![](~@imagesZhCn/guides/asa/9.png)

The plug-in will display a list of all applications assigned to the current account by the administrator, and you can see the "Graphite Document" you added previously.

![](~@imagesZhCn/guides/asa/10.png)

Enter the login interface of the corresponding application, and the {{$localeConfig.brandName}} browser plug-in will automatically fill in the previously assigned account password and automatically log in. Sometimes the application needs to perform some human-computer verification, which requires manual operation by the user and cannot be skipped by the plug-in.

![](~@imagesZhCn/guides/asa/11.png)

Login is successful when verification is completed.

![](~@imagesZhCn/guides/asa/12.png)

We are accelerating the ASA plug-in to support more applications. If you want your application to be supported, you can learn more details in [Join APN Overview](../../apn/README.md).

## Custom ASA application

If you can't find the application you need in the application market, you can use a custom ASA application.

### Create a custom ASA application

The following takes "Graphite Document" as an example. First, find **Custom ASA application** in the application market

![](~@imagesZhCn/guides/asa/custom-1.png)

Click to enter the details, then click "Get application", enter the application configuration interface, upload the application logo, fill in the application name, and click "Next".

![](~@imagesZhCn/guides/asa/custom-2.png)

Enter the ASA configuration interface

- First enter the **application login page URL**, such as the login page URL of "Shimo Document" is **https://shimo.im/loginByPassword**.
- Then fill in the **ASA automatic login steps**. The automatic login steps must be a valid JSON string and an object array. The ASA plug-in will perform object operations in sequence according to this array. All keys of the objects in the array are as follows:

  - **action**: indicates the operation type of the current step, all operation types are
    - **type**: input, such as input account
    - **click**: click, such as clicking the login button
    - **selectFrame**: switch iframe, some website login boxes are nested in iframes, at this time, you need to switch to the iframe where the login box is located to enter the account and password to log in
    - **wait**: wait for a certain time, such as some web pages need to wait for a certain time before clicking the login button after entering the account and password

  * **target**: indicates the operation target of the current step, the value is a string, accepts all dom element selectors that [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) can accept, such as `#password`
  * **value**: indicates the operation value of the current step
    - When used in the **type** operation, the value is a string, and <code><span v-pre>{{account}}</span></code> can be used to indicate the bound account, <code><span v-pre>{{password}}</span></code> indicates the bound password
    - When used in the **wait** operation, the value is a number in milliseconds, such as 1000 means waiting for 1 second

* The account allocation method currently only supports **Administrators setting accounts and passwords**

![](~@imagesZhCn/guides/asa/custom-3.png)

Click "Finish" and assign an application account to the user on the account allocation page

![](~@imagesZhCn/guides/asa/custom-4.png)

On the access authorization page, select "Allow all users to access"

![](~@imagesZhCn/guides/asa/custom-5.png)

You can [experience login](#experience login) later
