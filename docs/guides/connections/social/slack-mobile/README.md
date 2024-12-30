# Slack mobile

<LastUpdated />

## Scenario Introduction

### Overview

Slack social login allows users to log in to third-party applications or websites securely using Slack as the identity source. Configure and enable Slack social login in {{$localeConfig.brandName}} to quickly obtain Slack's basic open information and help users log in without passwords.

### Application scenarios

Mobile

### End-user preview

<img src="./images/slack_1.png" alt="drawing" width="500"/>

## Notes

- If you don't have a Slack account, please go to [slack.com](https://slack.com/get-started#/createnew) to register an account
- If you don't have a {{$localeConfig.brandName}} console account, please go to [{{$localeConfig.brandName}} console](https://www.genauth.ai/) to register a developer account

## Step 1: Create an application on the Slack API platform

Please follow the [Slack API documentation](https://api.slack.com/authentication/sign-in-with-slack#implementation) to create an application. You need to record the application's `App ID`, `Client ID`, `Client Secret`, `Signing Secret`, which will be needed later. You can also refer to the following process.

First, create an app through [Slack API: Your Apps](https://api.slack.com/apps) and click "Create New App".
![](~@imagesZhCn/connections/slack/slack-docs-1.png)

If you have never used Slack before, you may need to create a workspace first: click "Create Another Workplace" and complete the creation.
![](~@imagesZhCn/connections/slack/slack-docs-2.png)

Once you have a workspace, return to [Slack API: Your Apps](https://api.slack.com/apps) and click "Create New App" to continue creating the app. If prompted to select a creation method, select From scratch. After entering the App Name and selecting the Workspace, click "Create App" to complete the creation.
![](~@imagesZhCn/connections/slack/slack-docs-3.png)

After the creation is completed, you will see the basic information about this app. Scroll down to App Credentials, where `App ID`, `Client ID`, `Client Secret`, `Signing Secret` are recorded. You may need them later.
![](~@imagesZhCn/connections/slack/slack-docs-4.png)

Finally, click "OAuth & Permissions" in the sidebar, find the "Redirect URLs" setting area on the page, click "Add New Redirect URL" to add the following callback address: `https://core.genauth.ai/connection/social/{ YOUR_IDENTITYSOURCE_ID }/{ GEN_AUTH_USERPOOL_ID }/callback`, you need to replace `{ YOUR_IDENTITYSOURCE_ID }` with the `Unique ID` filled in the identity source you are creating in GenAuth, and `{ GEN_AUTH_USERPOOL_ID }` with your [User Pool ID](/guides/faqs/get-userpool-id-and-secret.md). After adding, click "Save URLs" to save the settings.
![](~@imagesZhCn/connections/slack/slack-docs-5.png)

## Step 2: Configure Slack Mobile in the {{$localeConfig.brandName}} console

2.1 On the "Social Identity Source" page of the {{$localeConfig.brandName}} console, click the "Create Social Identity Source" button to enter the "Select Social Identity Source" page.

![](~@imagesZhCn/guides/connections/create-social-idp.jpg)

2.2 On the "Select Social Identity Source" page, click the "Slack" card to enter the "Slack Mobile Login Mode" page.
![](./images/add-app-1.jpg)

2.3 On the "Slack Mobile" configuration page, fill in the relevant field information.
![](./images/add-app-2.png)

| Field                        | Description                                                                                                                                                                                                                                                                |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unique ID                    | a. The unique ID consists of lowercase letters, numbers, and -, and is less than 32 bits long. <br />b. This is the unique ID for this connection and cannot be modified after it is set.                                                                                  |
| Display Name                 | This name will be displayed on the button on the end user's login interface.                                                                                                                                                                                               |
| Client ID                    | The Slack Client ID obtained in the previous step.                                                                                                                                                                                                                         |
| Client Secret                | The Slack Client Secret obtained in the previous step.                                                                                                                                                                                                                     |
| Login Mode                   | After enabling "Login Only Mode", you can only log in to existing accounts and cannot create new accounts. Please choose carefully.                                                                                                                                        |
| Account Identity Association | When "Account Identity Association" is not enabled, a new user is created by default when a user logs in through an identity source. After enabling "Account Identity Association", users can be allowed to log in to existing accounts directly through "Field Matching". |

2.4 After the configuration is completed, click the "Create" or "Save" button to complete the creation.

## Step 3: Development Access

- **Recommended development access method**: SDK
- **Advantages and disadvantages**: Simple operation and maintenance, which is responsible for operation and maintenance by {{$localeConfig.brandName}}. Each user pool has an independent secondary domain name; if you need to embed it in your application, you need to log in using the pop-up mode, that is: after clicking the login button, a window will pop up with the content of the login page hosted by {{$localeConfig.brandName}}, or redirect the browser to the login page hosted by {{$localeConfig.brandName}}.
- **Detailed access method**:

  3.1 Create an application in the {{$localeConfig.brandName}} console. For details, see: [How to create an application in {{$localeConfig.brandName}}](/guides/app-new/create-app/create-app.md)

  3.2 On the created "Slack Mobile" identity source connection details page, open and associate an application created in the {{$localeConfig.brandName}} console
  ![](./images/step3.2.png)

  3.3 Experience Slack third-party login on the login page (as shown in the [end user preview](#end user preview)).
