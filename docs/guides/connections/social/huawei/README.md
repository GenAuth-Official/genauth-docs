# Huawei

<LastUpdated />

## Scenario Introduction

- **Overview**: Huawei social login allows users to log in to third-party applications or websites securely using Huawei as the identity source. Configure and enable Huawei's social login in {{$localeConfig.brandName}} to quickly obtain Huawei's basic open information through {{$localeConfig.brandName}} and help users achieve password-free login.
- **Application scenario**: PC website
- **Terminal user preview**:

![](./images/login-app-1.jpeg)

## Notes

- If you do not have a Huawei account, please go to the [Huawei Developer Alliance website](https://developer.huawei.com/consumer/cn) to register as a developer and complete real-name authentication. For specific methods, please refer to [Huawei Account Registration and Authentication](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148).
- If you have not opened a {{$localeConfig.brandName}} console account, please go to [{{$localeConfig.brandName}} console](https://www.genauth.ai/) to register a developer account

## Step 1: Create a server application on Huawei

Log in to [Huawei Developer Alliance Official Website](https://developer.huawei.com/consumer/cn/), click **Management Center**:
![](./images/open-manage-center-1.jpeg)

On the **Management Center** page, click **Account**:
![](./images/open-account-1.jpeg)

On the **Account** page, click **Apply for Account Service**:
![](./images/apply-account-1.jpeg)

Select **Server Application**, select **Create Product** and configure **Application Callback Address**

- Application callback address: Fill in `https://core.genauth.ai/connection/social/{Unique ID}/{User Pool ID}/callback`. You need to replace `{Unique ID}` with the `Unique ID` filled in the identity source you are creating in {{$localeConfig.brandName}}, and replace `{User Pool ID}` with your [User Pool ID](/guides/faqs/get-userpool-id-and-secret.md)

![](./images/create-client-1.jpeg)

Finally, click "**Submit**". After the creation is completed, you need to record the `APP ID` and `APP SECRET`, which will be used in the next step.
![](./images/get-client-info.jpeg)

## Step 2: Configure Huawei App Configuration in the {{$localeConfig.brandName}} console

2.1 On the "Social Identity Source" page of the {{$localeConfig.brandName}} console, click the "Create Social Identity Source" button to enter the "Select Social Identity Source" page.

![](~@imagesZhCn/guides/connections/create-social-idp.jpg)

2.2 On the "Select Social Identity Source" page, click the "Huawei" card.
![](./images/add-app-1.jpeg)

2.3 On the "Huawei" configuration page, fill in the relevant field information.
![](./images/add-app-2.jpeg)

| Field                        | Description                                                                                                                                                                                                                                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unique ID                    | a. The unique ID consists of lowercase letters, numbers, and -, and is less than 32 bits long. <br />b. This is the unique ID for this connection and cannot be modified after it is set.                                                                                                       |
| Display Name                 | This name will be displayed on the button on the terminal user's login interface.                                                                                                                                                                                                               |
| APP ID                       | The Huawei App ID obtained in the previous step.                                                                                                                                                                                                                                                |
| APP Secret                   | The Huawei App Secret obtained in the previous step.                                                                                                                                                                                                                                            |
| Login Mode                   | After enabling "Login Only Mode", you can only log in to existing accounts and cannot create new accounts. Please choose carefully.                                                                                                                                                             |
| Account Identity Association | When "Account Identity Association" is not enabled, a new user is created by default when a user logs in through an identity source. After enabling "Account Identity Association", users can be allowed to log in directly to an existing account through "Field Matching" or "Query Binding". |

2.4 After the configuration is completed, click the "Create" or "Save" button to complete the creation.

## Step 3: Development Access

- **Recommended development access method**: Use a hosted login page
- **Pros and cons description**: Simple operation and maintenance, which is handled by {{$localeConfig.brandName}}. Each user pool has an independent secondary domain name; if you need to embed it in your application, you need to log in using the pop-up mode, that is: after clicking the login button, a window will pop up with the login page hosted by {{$localeConfig.brandName}}, or redirect the browser to the login page hosted by {{$localeConfig.brandName}}.
- **Detailed access method**:

  3.1 Create an application in the {{$localeConfig.brandName}} console. For details, see: [How to create an application in {{$localeConfig.brandName}}](/guides/app-new/create-app/create-app.md)

  3.2 On the created "Huawei" identity source connection details page, open and associate an application created in the {{$localeConfig.brandName}} console

![](./images/connect-app.jpeg)

3.3 Click the "Experience Login" button of the {{$localeConfig.brandName}} console application to experience the "Huawei" login in the pop-up login window

![](./images/test-huawei.jpeg)
