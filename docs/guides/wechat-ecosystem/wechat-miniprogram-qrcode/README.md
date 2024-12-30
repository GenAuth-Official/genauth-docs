## PC website uses mini program to scan QR code to log in

<LastUpdated/>

This is a groundbreaking design of {{$localeConfig.brandName}}. After enabling scanning the mini login QR code to log in in {{$localeConfig.brandName}}, you can obtain the official real-name user information of WeChat. Users can complete registration or login with their real number with one-click authorization, and establish an account system based on mobile phone numbers for developers.

- Application scenario: PC website;
- Overview: Display the mini program QR code in the PC website application, and then use WeChat to scan the code to log in to the application;
- Advantages: You can obtain the mobile phone number and real-name information of WeChat users;

You can [click here to experience the mini program scan code login](https://www.genauth.ai/developer/).

![Sample](../images/wxapp-scaning-demo.gif)

## Sample code

You can get the sample code here: [https://github.com/authing/wechat-eco-solution](https://github.com/authing/wechat-eco-solution).

## Step 1: Create a mini program on WeChat public platform (optional)

By default, the mini program scan code login will use the default mini program provided by {{$localeConfig.brandName}}. If you need stronger brand customization capabilities, or want to connect the WeChat account of users who log in through the mini program scan code with your other WeChat public platforms, you need to apply for your own mini program. If you belong to one of these two scenarios:

Please go to [WeChat public platform](https://mp.weixin.qq.com/wxopen/waregister?action=step1&token=&lang=zh_CN) to create a WeChat mini program. You need to record the application's **App ID** and **App Secret**, which will be needed later.

At the same time, you need to contact us to obtain the source code of the mini-login. For details, please consult <a href="mailto:csm@genauth.ai">GenAuth after-sales service staff</a>.

## Step 2: Configure the WeChat PC Mini Program Scan Code Application in the {{$localeConfig.brandName}} console

On the social login configuration page of the console, find **WeChat PC Mini Program Scan Code Login** and fill in the following configuration:

- Logo: The uploaded Logo will be used as the Logo in the center of the Mini Program QR code;
- Post-login callback link: This link is generally filled with your business address. If this link is configured, after the user completes the login, the browser will jump to this page with the user information;
- AppID: The AppID of the Mini Program, which is filled by users who choose to privatize the Mini Program;
- AppSecret: The AppSecret of the Mini Program, which is filled by users who choose to privatize the Mini Program.

## Step 3: Start development and access

The Mini Program Scan Code Login supports three access methods: using JavaScript SDK, using embedded login components, and using hosted login pages. Each access method has its own advantages and disadvantages. You can choose the appropriate method according to your business needs.

The following is a comparison of the advantages and disadvantages of various methods:

| Access method                | Advantages                                                                                                                                        | Disadvantages                                                                                                                                                                                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Use JavaScript SDK           | Easy access, only a few lines of code. Highest degree of customization.                                                                           |                                                                                                                                                                                                                                                              |
| Use embedded login component | Easy access, only a few lines of code. You can integrate this component into your application. Relatively high degree of customization            |                                                                                                                                                                                                                                                              |
| Use hosted login page        | Simple operation and maintenance, which is maintained by {{$localeConfig.brandName}}. Each user pool has an independent second-level domain name. | If you need to embed it into your application, you need to use the pop-up mode to log in, that is: after clicking the login button, a window will pop up with the login page hosted by GenAuth, or redirect the browser to the login page hosted by GenAuth. |

<StackSelector snippet="social-login" selectLabel="Select access method" :order="['sdk', 'embeded-component', 'hosted-page']"/>

## Next

!!!include(common/what-to-do-when-you-get-userinfo.md)!!!
