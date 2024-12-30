# LinkedIn Mobile

<LastUpdated/>

## Scenario Introduction

### Overview

LinkedIn social login allows users to log in to third-party applications or websites securely using LinkedIn as the identity source. Configure and enable LinkedIn social login in {{$localeConfig.brandName}} to quickly obtain basic open information on LinkedIn and help users log in without passwords.

### Application scenarios

Mobile

### End-user preview

<img src="./images/linkedin_0.png" alt="drawing" width="500"/>

## Notes

- Please follow the instructions in the [Microsoft documentation](https://docs.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/sign-in-with-linkedin#getting-started) or create an application through the [LinkedIn Developer Platform](https://www.linkedin.com/developers/apps).
- If you have not opened a {{$localeConfig.brandName}} console account, please go to the [{{$localeConfig.brandName}} console](https://www.genauth.ai/) to register a developer account.

## Step 1: Create an app on LinkedIn

- On [LinkedIn Developers](https://developer.linkedin.com/), click Create app to start creating your app.

<img src="./images/linkedin_1.png" >

- Enter the relevant information of your app and click Create app to complete the creation.

<img src="./images/linkedin_2.png" >

- After the creation is completed, view the application information under the Settings, Auth, Products and other tabs, and set the callback address by editing the Authorized redirect URLs for your app. The callback address is set to: https://core.genauth.ai/connection/social/{ unique identifier }/{YOUR_USERPOOL_ID}/callback.

<img src="./images/linkedin_3.png" >

- As shown in the figure below, under the Products tab of this page, you will see all the products available for this app. Click the Select button to the right of Sign In with LinkedIn to select this feature and follow the subsequent prompts to complete the operation. Usually, LinkedIn will approve your app to use the Sign In with LinkedIn feature after a few minutes.

<img src="./images/linkedin_4.png" >

- Please use the following settings for the callback address: `https://core.genauth.ai/connection/social/<Unique Identifier>/<USERPOOL_ID>/callback`, you need to replace `<Unique Identifier>` with your `Unique Identifier`, and `<USERPOOL_ID>` with your [User Pool ID](/guides/faqs/get-userpool-id-and-secret.md)

## Step 2: Configure LinkedIn in the {{$localeConfig.brandName}} console

2.1 Please click the "Create Social Identity Source" button on the "Social Identity Source" page of the {{$localeConfig.brandName}} console to enter the "Select Social Identity Source" page.

<img src="./images/linkedin_5.png" >

2.2 Please go to the "Social Identity Source" - "Select Social Identity Source" page in the {{$localeConfig.brandName}} console, click the "LinkedIn" identity source button to enter the "LinkedIn Login Mode" page.

<img src="./images/linkedin_6.png" >

2.3 Please go to the "Social Identity Source" - "LinkedIn" page in the {{$localeConfig.brandName}} console to configure the relevant field information.

<img src="./images/linkedin_7.png" >

| Field/Function               | Description                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unique ID                    | a. The unique ID consists of lowercase letters, numbers, and -, and is less than 32 bits long. b. This is the unique ID of this connection and cannot be modified after setting.                                                                                                                                                                                                                 |
| Display name                 | This name will be displayed on the button of the end user's login interface.                                                                                                                                                                                                                                                                                                                     |
| Client ID                    | LinkedIn application ID, which needs to be obtained on LinkedIn developers.                                                                                                                                                                                                                                                                                                                      |
| Client secrets               | LinkedIn application key, which needs to be obtained on LinkedIn developers.                                                                                                                                                                                                                                                                                                                     |
| Callback address             | LinkedIn valid redirect URI. This URL needs to be configured on LinkedIn developers.                                                                                                                                                                                                                                                                                                             |
| Login mode                   | After turning on "Login-only mode", you can only log in to existing accounts, and cannot create new accounts. Please choose carefully.                                                                                                                                                                                                                                                           |
| Account identity association | When "Account identity association" is not turned on, a new user is created by default when a user logs in through an identity source. After turning on "Account identity association", users can be allowed to log in directly to existing accounts through "field matching". "Email" field matching is supported. To obtain the user's email, you need to apply for r_emailaddress permission. |

After the configuration is completed, click the "Create" or "Save" button to complete the creation.

After creating the LinkedIn identity source on the {{$localeConfig.brandName}} console, you need to configure the callback address to the Authorized redirect URLs for your app on LinkedIn developers.

<img src="./images/linkedin_3.png" >

## Step 3: Development access

- **Recommended development access method**: Use a hosted login page

- **Pros and cons description**: Simple operation and maintenance, {{$localeConfig.brandName}} is responsible for operation and maintenance. Each user pool has an independent secondary domain name; if you need to embed it in your application, you need to use the pop-up mode to log in, that is: after clicking the login button, a window will pop up with the content of the {{$localeConfig.brandName}} hosted login page, or redirect the browser to the {{$localeConfig.brandName}} hosted login page.

- **Detailed access method**:

  3.1 Create an application in the {{$localeConfig.brandName}} console. For details, see: [How to create an application in {{$localeConfig.brandName}}](/guides/app-new/create-app/create-app.md)

  3.2 On the created LinkedIn identity source connection details page, open and associate an application created in the {{$localeConfig.brandName}} console

<img src="./images/linkedin_8.png" >

3.3 Experience LinkedIn third-party login on the login page (as shown in the [end user preview](#end user preview)).
