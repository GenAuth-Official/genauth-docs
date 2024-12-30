# Honor

<LastUpdated />

## Scenario Introduction

- **Overview**: Honor social login allows users to log in to third-party applications or websites securely using Honor as the identity source. Configure and enable Honor social login in {{$localeConfig.brandName}} to quickly obtain Honor's basic open information and help users log in without passwords through {{$localeConfig.brandName}}.
- **Application scenario**: PC website
- **Terminal user preview image**:

![](./images/login-app-1.jpeg)

## Notes

- If you don't have an Honor account yet, please go to [Honor Developer Service Platform](https://developer.hihonor.com/) to register as a developer and complete real-name authentication. For specific methods, please refer to [Honor Developer Account Registration and Authentication](https://developer.hihonor.com/cn/doc/guides/100272).
- If you have not opened a {{$localeConfig.brandName}} console account, please go to [{{$localeConfig.brandName}} console](https://www.genauth.ai/) to register a developer account

## Step 1: Create a server application in Honor

Log in to [Honor Developer Service Platform](https://developer.hihonor.com/), click **Management Center**:
![](./images/open-manage-center-1.jpeg)

On the **Management Center** page, click **Account Service**:
![](./images/open-account-1.jpeg)

On the **Account Service** page, click Operations in sequence Please select application → Web application → New application:
![](./images/create-client-1.jpeg)

![](./images/create-client-2.jpeg)

Select platform type as Web → Fill in application name → Select default language → Upload application icon → Create

![](./images/create-client-3.jpeg)

Go back to the **Account Service page** and click **Enable**

![](./images/create-client-4.jpeg)

Configure **Application callback address**

- Application callback address: Fill in `https://core.genauth.ai/connection/social/{Unique ID}/{User Pool ID}/callback`, you need to replace `{Unique ID}` with the `Unique ID` filled in the identity source you are creating in {{$localeConfig.brandName}}, and `{User Pool ID}` with your [User Pool ID](/guides/faqs/get-userpool-id-and-secret.md)

![](./images/add-client-callback.jpeg)

Finally, click "Submit". After the creation is completed, you need to record the `Application ID` and `APP SECRET`, which will be used in the next step.
![](./images/get-client-info.jpeg)

## Step 2: Configure Honor application configuration in the {{$localeConfig.brandName}} console

2.1 On the "Social Identity Source" page of the {{$localeConfig.brandName}} console, click the "Create Social Identity Source" button to enter the "Select Social Identity Source" page.

![](~@imagesZhCn/guides/connections/create-social-idp.jpg)

2.2 On the "Select Social Identity Source" page, click the "Honor" card.
![](./images/add-app-1.jpeg)

2.3 On the "Honor" configuration page, fill in the relevant field information.
![](./images/add-app-2.jpeg)

| Field                        | Description                                                                                                                                                                                                                                                                                         |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unique ID                    | a. The unique ID consists of lowercase letters, numbers, and -, and its length is less than 32 bits. <br />b. This is the unique ID of this connection and cannot be modified after setting.                                                                                                        |
| Display Name                 | This name will be displayed on the button of the terminal user's login interface.                                                                                                                                                                                                                   |
| APP ID                       | The Honor application ID obtained in the previous step.                                                                                                                                                                                                                                             |
| APP Secret                   | The Honor application Secret obtained in the previous step.                                                                                                                                                                                                                                         |
| Login Mode                   | After turning on "Login Only Mode", you can only log in to existing accounts and cannot create new accounts. Please choose carefully.                                                                                                                                                               |
| Account Identity Association | When "Account Identity Association" is not turned on, a new user is created by default when a user logs in through an identity source. After turning on "Account Identity Association", users can be allowed to log in directly to an existing account through "Field Matching" or "Query Binding". |

2.4 After the configuration is completed, click the "Create" or "Save" button to complete the creation.

## Step 3: Development Access

- **Recommended development access method**: Use a hosted login page
- **Pros and cons description**: Simple operation and maintenance, which is handled by {{$localeConfig.brandName}}. Each user pool has an independent secondary domain name; if you need to embed it in your application, you need to log in using the pop-up mode, that is: after clicking the login button, a window will pop up with the login page hosted by {{$localeConfig.brandName}}, or redirect the browser to the login page hosted by {{$localeConfig.brandName}}.
- **Detailed access method**:

  3.1 Create an application in the {{$localeConfig.brandName}} console. For details, see: [How to create an application in {{$localeConfig.brandName}}](/guides/app-new/create-app/create-app.md)

  3.2 On the created "Honor" identity source connection details page, open and associate an application created in the {{$localeConfig.brandName}} console

![](./images/connect-app.jpeg)

3.3 Click the "Experience Login" button of the {{$localeConfig.brandName}} console application to experience the "Honor" login in the pop-up login window

![](./images/test-honor.jpeg)
