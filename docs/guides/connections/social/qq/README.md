# Tencent QQ

<LastUpdated/>

## Scenario Introduction

- **Overview**: Tencent QQ social login is a user's secure login to a third-party application or website using Tencent QQ as the identity source. Configure and enable Tencent QQ social login in {{$localeConfig.brandName}}, and you can quickly obtain Tencent QQ's basic open information and help users log in without passwords through {{$localeConfig.brandName}}.
- **Application scenario**: Create website application, create mobile application
- **Terminal user preview image**:

<img src="./images/qq_1.png" >

## Notes

- If you have not opened a QQ interconnection platform account, please go to [QQ interconnection center](https://connect.qq.com/manage.html#/) to register a developer account.
- You can create an application only after it is approved.
- If you have not opened a {{$localeConfig.brandName}} console account, please go to [{{$localeConfig.brandName}} console](https://www.genauth.ai/) to register a developer account.

## Step 1: Create a website application on QQ Open Platform

Go to [QQ Connect Center](https://connect.qq.com/manage.html#/) to create a website application.

Click your personal QQ avatar on the upper left of the page to complete the registration and initiate the review, then click "Website Application" and "Create Application" to create a website application that uses QQ login. If you encounter any problems during the process, please refer to the QQ official "Documentation" at the top of the page.

<img src="./images/qq_2.png" >

During the application creation process, you need to configure the allowed callback address. Please use the following settings: `https://core.genauth.ai/connection/social/<Unique Identifier>/<USERPOOL_ID>/callback`. You need to replace `<Unique Identifier>` with your `Unique Identifier` and `<USERPOOL_ID>` with your [User Pool ID](/guides/faqs/get-userpool-id-and-secret.md)

## Step 2: Configure Tencent QQ in the {{$localeConfig.brandName}} console

2.1 Please click the "Create Social Identity Source" button on the "Social Identity Source" page of the {{$localeConfig.brandName}} console to enter the "Select Social Identity Source" page.

<img src="./images/qq_3.png" >

2.2 Please go to the {{$localeConfig.brandName}} console's "Social Identity Source" - "Select Social Identity Source" page, click the "Tencent QQ" identity source button to enter the "Tencent QQ Login Mode" page.

<img src="./images/qq_4.png" >

2.3 Please go to the {{$localeConfig.brandName}} console's "Social Identity Source" - "Tencent QQ" page to configure the relevant field information.

<img src="./images/qq_5.png" >

| Field/Function               | Description                                                                                                                                                                                                                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unique Identifier            | a. The unique identifier consists of lowercase letters, numbers, and -, and is less than 32 bits long. b. This is the unique identifier for this connection and cannot be modified after setting.                                                                                                                  |
| Display Name                 | This name will be displayed on the button of the terminal user's login interface.                                                                                                                                                                                                                                  |
| APP ID                       | QQ application ID, which needs to be obtained on the QQ Open Platform.                                                                                                                                                                                                                                             |
| APP Key                      | QQ application key, which needs to be obtained on the QQ Open Platform.                                                                                                                                                                                                                                            |
| Callback URL                 | You can fill in your business callback address. After the user completes the login, the browser will jump to this address.                                                                                                                                                                                         |
| Scopes                       | By default, {{$localeConfig.brandName}} will only apply for authorization of basic user information (such as avatar, nickname, etc.) from the user. If you need more advanced permissions, you can check the corresponding options.                                                                                |
| Callback Address             | QQ valid jump URI. This URL needs to be configured on the QQ Open Platform.                                                                                                                                                                                                                                        |
| Login Mode                   | After turning on "Login Only Mode", you can only log in to existing accounts, and cannot create new accounts. Please choose carefully.                                                                                                                                                                             |
| Account Identity Association | When "Account Identity Association" is not turned on, a new user is created by default when the user logs in through the identity source. After enabling "Account Identity Association", users can log in directly to existing accounts through "Field Matching" or "Query Binding". a. Association method: Select |

After configuration, click "Create" or "Save" to complete the creation.

After creating the Tencent QQ identity source on the {{$localeConfig.brandName}} console, you need to configure the callback address to the website callback domain in the platform information on the open platform of QQ Interconnect.

<img src="./images/qq_6.png" >

## Step 3: Development Access

- **Recommended development access method**: Use hosted login page

- **Advantages and disadvantages description**: Simple operation and maintenance, {{$localeConfig.brandName}} is responsible for operation and maintenance. Each user pool has an independent secondary domain name; if you need to embed it in your application, you need to log in using the pop-up mode, that is, after clicking the login button, a window will pop up with the content of the login page hosted by {{$localeConfig.brandName}}, or redirect the browser to the login page hosted by {{$localeConfig.brandName}}.

- **Detailed access method**:

  3.1 Create an application in the {{$localeConfig.brandName}} console. For details, see: [How to create an application in {{$localeConfig.brandName}}](/guides/app-new/create-app/create-app.md)

  3.2 On the created QQ identity source connection details page, open and associate an application created in the {{$localeConfig.brandName}} console

<img src="./images/qq_7.png" >

3.3 Experience QQ third-party login on the login page

<img src="./images/qq_8.png" >
