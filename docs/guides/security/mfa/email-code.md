# MFA based on email verification code

<LastUpdated/>

## Overview

Multi-factor authentication (MFA) is a security system that performs secondary identity authentication to verify the legitimacy of an operation. For example, a bank's USB shield requires mobile phone and email verification for remote login. This article introduces multi-factor authentication based on email verification code.

## Preparation

Role: Administrator

Before enabling email verification code MFA, perform the following preparations:

1. <a :href="`${$themeConfig.consoleDomain}`">Register a {{$localeConfig.brandName}} account</a>.
2. [Create a user pool and application](/guides/basics/authenticate-first-user/use-hosted-login-page.md).

## Enable Email Verification Code MFA

Role: Administrator

### Enable Application-level Email Verification Code MFA

::: hint-info
To configure application-level MFA, you must enable the **Customize security rules for this application** switch in **Application->Self-built Application->Application Details->Advanced Configuration** before the **Security Management** tab will appear.
::: 

To enable application-level Email Verification Code MFA, perform the following steps:

1. Select **Application->Self-built Application** in the navigation menu on the left side of the console.

2. Select the application for which you need to enable Email Verification Code MFA in the list of self-built applications.

3. Go to the application details page, select **Security Management**, and enable the **Email Verification** switch in the **Multi-factor Authentication** module.

### Enable Global Email Verification Code MFA

To enable Global Email Verification Code MFA, perform the following steps:

1. Select **Security Settings->Multi-factor Authentication** in the navigation menu on the left side of the console.

2. Enable the **Email Verification** switch in the **Multi-factor Authentication** module.

3. Select the applicable identity source in the **Policy Configuration** module and turn off the MFA switch of other irrelevant identity sources.

## Login using email verification code MFA

### Experience login

Role: Administrator

To experience email verification code MFA, the administrator needs to perform the following steps:

1. Select **User Management->User List** in the navigation menu on the left side of the console, click the **Create User** button to create a user for email verification code MFA login by **Username/Mobile Number/Email**.

2. Select **Application->Self-built Application**, click the **Experience Login** button in the upper right corner of the target application details page, and log in with the account created above.

3. After one identity authentication, if the email address has not been bound, the system opens the **Bind Email** page, and enter the email address at this time.

::: hint-info
If the email address has been bound in the **Personal Information** module on the user details page in advance, after one identity authentication, the step of entering the email address will be skipped, and you will be required to enter the email verification code directly.
:::

4. Enter the verification code obtained from the email address.

The prompt is that the authentication is completed and the login is successful.

### User login

Role: Ordinary user

To perform email verification code MFA when logging in, perform the following steps:

1. Log in by username/mobile number/email account or scan code.

2. After one identity authentication, if the user has not yet bound an email, the system opens the **Bind email** page, and enter the email address at this time.

::: hint-info
If the email has been bound, after one identity authentication, the step of entering the email address will be skipped, and you will be required to directly enter the email verification code.
:::

3. Enter the verification code obtained from the email.

The prompt is that the authentication is completed and the login is successful.

## Turn off email verification code MFA

Role: Administrator

To turn off email verification code MFA, you can turn off the function at the application level and globally:

* Turn off application-level email verification code MFA: Enter the application details, select **Security Management**, and turn off the **Email Verification** switch in the **Multi-factor Authentication** module.

* Turn off the global email verification code MFA: Select **Security Settings->Multi-factor Authentication**, and turn off the **Email Verification** switch in the **Multi-factor Authentication** module.