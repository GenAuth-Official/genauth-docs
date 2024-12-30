# Facebook

<LastUpdated/>

## Scenario Introduction

- **Overview**: Facebook social login is a user's secure login to a third-party application or website using Facebook as the identity source. By configuring and enabling Facebook social login in GenAuth, you can quickly obtain Facebook's basic open information through GenAuth and help users achieve password-free login.
- **Application scenario**: PC website
- **Terminal user preview image**:

![](./images/0-viewResult.png)

## Notes

- If you have not opened a Facebook Open Platform account, please go to [Facebook Open Platform](https://developers.facebook.com/) to register a developer account.
- If you have not opened a GenAuth console account, please go to [GenAuth Console](https://www.genauth.ai/) to register a developer account.

## Step 1: Create a Facebook App

Go to [developers.facebook.com](https://developers.facebook.com/), click **My Apps**, then create a new app and select **Consumer** or **No App Type**, fill in the app name.

![](./images/1-metaCreateApp.png)

![](./images/2-metaSaveApp.png)

In the dashboard, find the **Facebook Login** product and click Set Up to add it to your app. Then find the App ID and App Secret in Settings > Basic in the left menu and write them down.

![](./images/3-metaAddFacebook.png)

![](./images/6-appidSecret.png)

## Step 2: Configure Facebook in the GenAuth Console

2.1 In the GenAuth Console, on the Social Identity Sources page, click the Create Social Identity Source button to go to the Select Social Identity Source page.

![](./images/4-addSocial.png)

2.2 On the "Social Identity Source" - "Select Social Identity Source" page of the GenAuth console, click the "Facebook" identity source button to enter the "Facebook Login Mode" page.

![](./images/5-choiceMeta.png)

2.3 On the "Social Identity Source" - "Facebook" page of the GenAuth console, configure the relevant field information.

![](./images/7-savefacebook.png)

| Field/Function               | Description                                                                                                                                                                                                                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unique ID                    | a. The unique ID consists of lowercase letters, numbers, and -, and its length is less than 32 bits. b. This is the unique ID of this connection and cannot be modified after setting.                                                                                                            |
| Display Name                 | This name will be displayed on the button of the end user's login interface.                                                                                                                                                                                                                      |
| Application ID               | The application ID needs to be obtained on the Facebook Open Platform.                                                                                                                                                                                                                            |
| Application Key              | Application ID, which needs to be obtained on the Facebook Open Platform.                                                                                                                                                                                                                         |
| Scopes                       | Scopes, data permissions need to be applied for on the Facebook Open Platform                                                                                                                                                                                                                     |
| Callback Address             | Facebook valid OAuth redirect URI. This URL needs to be configured on the Facebook Open Platform.                                                                                                                                                                                                 |
| Login Mode                   | After turning on "Login Only Mode", you can only log in to existing accounts, and cannot create new accounts. Please choose carefully.                                                                                                                                                            |
| Account Identity Association | When "Account Identity Association" is not turned on, a new user is created by default when a user logs in through an identity source. After turning on "Account Identity Association", users can be allowed to log in directly to an existing account through "Field Matching" or "Ask Binding". |

After the configuration is completed, click the "Create" or "Save" button to complete the creation.

After creating the Facebook identity source on the GenAuth console, you need to configure the callback address to the **OAuth Client Authorization Settings** in the Facebook application on Facebook's Open Platform.

![](./images/9-oauthUrl.png)

## Step 3: Development access

- **Recommended development access method**: Use a hosted login page

- **Advantages and disadvantages**: Simple operation and maintenance, GenAuth is responsible for operation and maintenance. Each user pool has an independent secondary domain name; if you need to embed it into your application, you need to log in using the pop-up mode, that is: after clicking the login button, a window will pop up with the login page hosted by GenAuth, or redirect the browser to the login page hosted by GenAuth.

- **Detailed access method**:

  3.1 Create an application in the GenAuth console, for details, see: [How to create an application in GenAuth](/guides/app-new/create-app/create-app.md)

  3.2 On the created Facebook identity source connection details page, open and associate an application created in the GenAuth console.

![](./images/8-openApp.png)

3.3 Experience Facebook third-party login on the login page

![](./images/10-loginpage.png)
