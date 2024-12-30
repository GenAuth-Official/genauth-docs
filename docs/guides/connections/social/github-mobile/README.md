# Github Mobile

<LastUpdated/>

## Scenario Introduction

### Overview

Github social login allows users to log in to third-party applications or websites securely using Github as the identity source. Configure and enable Github social login in {{$localeConfig.brandName}} to quickly obtain Github's basic open information and help users log in without passwords.

### Application Scenario

Mobile

### End User Preview

<img src="./images/github_1.png" alt="drawing" width="500"/>

## Notes

- If you do not have a Github account, please go to [GitHub](https://www.github.com) to register a developer account.
- Follow the instructions in the [GitHub documentation](https://docs.github.com/cn/developers/apps/building-oauth-apps/creating-an-oauth-app) to create a GitHub OAuth application and record the application's Client ID and Client Secret.
- If you don't have a {{$localeConfig.brandName}} console account, please go to the [{{$localeConfig.brandName}} console](https://www.genauth.ai/) to register a developer account.

## Step 1: Create an OAuth application in Github

- In the upper-right corner of any Github page, click your profile photo, and then click Settings.

- In the left column, click <> Developer settings.

- In the left sidebar, click OAuth applications.

- Click **New OAuth App**.

- In **Application name**, enter a name for the application.

- In **Homepage URL**, enter the full URL of your application's website.

- In **Authorization callback URL**, enter the callback URL for your application.

<img src="./images/github_2.png" height="500">

During the application creation process, you need to configure the allowed callback address. Please use the following settings: `https://core.genauth.ai/connection/social/<Unique Identifier>/<USERPOOL_ID>/callback`. You need to replace `<Unique Identifier>` with your `Unique Identifier` and `<USERPOOL_ID>` with your [User Pool ID](/guides/faqs/get-userpool-id-and-secret.md)

## Step 2: Configure Github Mobile in the {{$localeConfig.brandName}} console

2.1 Please click the "Create Social Identity Source" button on the "Social Identity Source" page of the {{$localeConfig.brandName}} console to enter the "Select Social Identity Source" page.

<img src="./images/github_3.png" >

2.2 Please go to the {{$localeConfig.brandName}} console's "Social Identity Source" - "Select Social Identity Source" page, click the "Github Mobile" identity source button to enter the "Github Mobile Login Mode" page.

<img src="./images/github_4.png" >

2.3 Please go to the {{$localeConfig.brandName}} console's "Social Identity Source" - "Github Mobile" page to configure the relevant field information.

<img src="./images/github_5.png" >

| Field/Function               | Description                                                                                                                                                                                                                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unique ID                    | a. The unique ID consists of lowercase letters, numbers, and -, and is less than 32 bits long. b. This is the unique ID of this connection and cannot be modified after setting.                                                                                                 |
| Display name                 | This name will be displayed on the button of the terminal user's login interface.                                                                                                                                                                                                |
| Client ID                    | The Client ID applied for on Github needs to be obtained on Github.                                                                                                                                                                                                              |
| Client secrets               | The Client secrets applied for on Github need to be obtained on Github.                                                                                                                                                                                                          |
| Callback address             | Github valid redirect URI. This URL needs to be configured on Github.                                                                                                                                                                                                            |
| Login mode                   | After turning on "Login only mode", you can only log in to existing accounts, and cannot create new accounts. Please choose carefully.                                                                                                                                           |
| Account identity association | When "Account identity association" is not turned on, a new user is created by default when a user logs in through an identity source. After turning on "Account identity association", users can be allowed to log in directly to an existing account through "field matching". |

After the configuration is completed, click the "Create" or "Save" button to complete the creation.

After creating the "Github Mobile" identity source on the {{$localeConfig.brandName}} console, you need to configure the callback address to the Authorization callback URL on Github.

<img src="./images/github_6.png" >

## Step 3: Development access

- **Recommended development access method**: SDK

- **Pros and cons description**: Simple operation and maintenance, {{$localeConfig.brandName}} is responsible for operation and maintenance. Each user pool has an independent secondary domain name; if you need to embed it in your application, you need to log in using the pop-up mode, that is: after clicking the login button, a window will pop up with the content of the login page hosted by {{$localeConfig.brandName}}, or redirect the browser to the login page hosted by {{$localeConfig.brandName}}.

- **Detailed access method**:

  3.1 Create an application in the {{$localeConfig.brandName}} console. For details, see: [How to create an application in {{$localeConfig.brandName}}](/guides/app-new/create-app/create-app.md)

  3.2 On the created Github identity source connection details page, open and associate an application created in the {{$localeConfig.brandName}} console

<img src="./images/github_7.png" >

3.3 Experience Github third-party login on the login page (as shown in the [end-user preview](#end-user preview)).
