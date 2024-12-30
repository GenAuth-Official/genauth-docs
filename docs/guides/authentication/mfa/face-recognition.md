# MFA based on face recognition

<LastUpdated/>

## Overview

Multi-factor authentication (MFA) is a security system that performs secondary identity authentication to verify the legitimacy of an operation. For example, a bank's USB shield requires SMS verification for remote login. This article introduces the authentication method based on identifying the user's unique facial features.

## Preparation

Role: Administrator

Before enabling face recognition MFA, perform the following preparations:

1. <a :href="`${$themeConfig.consoleDomain}`">Register a {{$localeConfig.brandName}} account</a>.
2. [Create a user pool and application](/guides/basics/authenticate-first-user/use-hosted-login-page.md).

## Enable Face Recognition MFA

Role: Administrator

### Enable App-level Face Recognition MFA

::: hint-info
To configure App-level MFA, you must enable the **Customize security rules for this app** switch in **App->Self-built App->App Details->Advanced Configuration** before the **Security Management** tab will appear.
::: 

To enable App-level Face Recognition MFA, perform the following steps:

1. Select **App->Self-built App** in the navigation menu on the left side of the console.

2. Select the app for which you want to enable Face Recognition MFA in the list of self-built apps.

3. Go to the App Details page, select the **Security Management** tab, and enable the **Face Recognition** switch in the **Multi-factor Authentication** module at the bottom of the page.

### Enable Global Face Recognition MFA

To enable Global Face Recognition MFA, perform the following steps:

1. Select **Security Settings->Multi-factor Authentication** in the navigation menu on the left side of the console.

2. Enable the Face Recognition switch in the Multi-Factor Authentication module.

3. Select the applicable identity source in the Policy Configuration module and turn off the MFA switch for other irrelevant identity sources.

## Login using Face Recognition MFA

### Experience login

Role: Administrator

::: hint-info

Face recognition MFA is supported on both the web and mobile terminals, and the phone and computer must be equipped with a camera.

:::

To experience Face Recognition MFA, administrators should perform the following steps:

1. Select User Management->User List in the navigation menu on the left side of the console, click the Create User button to create a user for Face Recognition MFA login by using the Username/Phone Number/Email.

2. Select Application->Self-built Application, click the Experience Login button in the upper right corner of the target application details page, and log in using the account created above.

3. After one identity authentication, the system prompts you to call your camera, click Allow to open the camera for authentication.

### User login

Role: Normal user

To perform face recognition MFA when logging in, follow these steps:

1. Log in by username/mobile number/email account or scan code.

2. After one identity authentication, the system prompts to call your camera, click **Allow** to open the camera for authentication.

::: hint-info
Face recognition MFA authentication may take several seconds, please wait patiently. After the authentication is completed, it will prompt success.
:::

## Turn off face recognition MFA

Role: Administrator

To turn off face recognition MFA, you can turn off the function at the application level and globally:

* Turn off application-level face recognition MFA: Go to application details, select **Security Management**, and turn off the **Face Recognition** switch in the **Multi-factor Authentication** module.
* Turn off full face recognition MFA: Select **Security Settings->Multi-factor Authentication**, and turn off the **Face Recognition** switch in the **Multi-factor Authentication** module.
