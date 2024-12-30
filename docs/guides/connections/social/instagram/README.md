# Instagram

<LastUpdated/>

## Scenario Introduction

- **Overview**: Instagram social login allows users to log in to third-party applications or websites securely using Instagram as their identity source. Configure and enable Instagram social login in GenAuth to quickly obtain basic public information on Instagram and help users log in without a password.
- **Application scenario**: PC website
- **End-user preview image**:

<img src="./images/00-viewResult.png" >

## Notes

- If you do not have an Instagram Open Platform account, please go to [Instagram Open Platform](https://developers.facebook.com/) to register a developer account. Since Instagram belongs to Facebook, the Instagram open platform mentioned here is Facebook's open platform;
- Open an [Instagram account](https://www.instagram.com/) with multimedia materials;
- If you do not have a GenAuth console account, please go to the [GenAuth Console](https://www.genauth.ai/) to register a developer account;

## Step 1: Create a Facebook application

Go to [developers.facebook.com](https://developers.facebook.com/), click **My Apps**, then create a new application and select **Consumer** or **No application type**, and fill in the application name.

<img src="./images/01-createapp.png" >

<img src="./images/02-saveapp.png" >

In the dashboard, find the **Instagram Basic Display** product, then click Settings to add it to your application.

<img src="./images/03-addinstagram.png" >

Scroll to the bottom of the page and click **Create a new application**.

<img src="./images/04-saveins.png" >

## Step 2: Configure Instagram in the GenAuth console

2.1 On the "Social Identity Source" page of the GenAuth Console, click the "Create Social Identity Source" button to go to the "Select Social Identity Source" page.

<img src="./images/05-addSocial.png" >

2.2 On the "Social Identity Source" - "Select Social Identity Source" page of the GenAuth Console, click the "Instagram" identity source button to go to the "Instagram Login Mode" page.

<img src="./images/06-choiceIns.png" >

2.3 On the "Social Identity Source" - "Instagram" page of the GenAuth Console, configure the relevant field information.

<img src="./images/07-insconfig.png" >

| Field/Function               | Description                                                                                                                                                                                                                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unique ID                    | a. The unique ID consists of lowercase letters, numbers, and -, and its length is less than 32 bits. b. This is the unique ID of this connection and cannot be modified after setting.                                                                                                            |
| Display Name                 | This name will be displayed on the button of the end user's login interface.                                                                                                                                                                                                                      |
| Application ID               | Application ID, which needs to be obtained on the Instagram Open Platform.                                                                                                                                                                                                                        |
| Application Key              | Application ID, which needs to be obtained on the Instagram Open Platform                                                                                                                                                                                                                         |
| Callback URL                 | Instagram valid OAuth jump URI. This URL needs to be configured on the Instagram Open Platform.                                                                                                                                                                                                   |
| Login Mode                   | After turning on "Login Only Mode", you can only log in to existing accounts, and cannot create new accounts. Please choose carefully.                                                                                                                                                            |
| Account Identity Association | When "Account Identity Association" is not turned on, a new user is created by default when a user logs in through an identity source. After turning on "Account Identity Association", users can be allowed to log in directly to existing accounts through "Field Matching" or "Query Binding". |

After the configuration is completed, click the "Create" or "Save" button to complete the creation.

After creating the Instagram identity source on the GenAuth console, you need to configure the callback address to the **OAuth Client Authorization Settings** in the Instagram application on Instagram's open platform.

In the last step, Instagram needs to obtain permission to access **instagram_graph_user_profile**, so you need to add this permission. Then click and save the changes, and the Instagram application is successfully created.

<img src="./images/08-insconfig-success.png" >

## Step 3: Development Access

- **Recommended Development Access Method**: Use Hosted Login Page

- **Advantages and Disadvantages**: Simple operation and maintenance, GenAuth is responsible for operation and maintenance. Each user pool has an independent secondary domain name; if you need to embed it in your application, you need to log in using the pop-up mode, that is, after clicking the login button, a window will pop up with the login page hosted by GenAuth, or redirect the browser to the login page hosted by GenAuth.

- **Detailed access method**:

  3.1 Create an application in the GenAuth console. For details, see: [How to create an application in GenAuth](/guides/app-new/create-app/create-app.md)

  3.2 On the created Instagram identity source connection details page, open and associate an application created in the GenAuth console

<img src="./images/09-openapp.png" >

3.3 Experience Instagram third-party login on the login page

<img src="./images/10-login.png" >
