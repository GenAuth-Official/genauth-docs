# Basic settings

<LastUpdated/>

::: hint-info
For information about the {{$localeConfig.brandName}} user pool version that supports the various benefits of the "Settings" function, please check the [official website "Pricing" page](https://www.genauth.ai/pricing). If your version does not support this benefit and you want to try it, you can activate the trial period. For an introduction to the trial period and how to activate it, please check [Trial Period](/guides/basics/trial/README.md).
:::

## Basic information

Path: **Settings->Basic Settings->Basic Information**

Administrators can modify the basic information of the user pool, configure the user pool authentication address, delete the user pool, and other operations on the **Basic Information** tab.

![](./images/basic-config.png)​

| Serial number | Field                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1             | User pool name         | You can modify the user pool name in this field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2             | User pool ID           | The system automatically generates the ID when creating a user pool. You can click the copy button after the input box to copy the ID for configuring single sign-on and other scenarios.                                                                                                                                                                                                                                                                                                                                                |
| 3             | Authentication address | GenAuth The default user pool does not use a unified third-level domain name. If you need to modify the third-level domain name of some applications in your user pool, you can go to the **Application Configuration** page of the application to modify it. </br>**Note**: If you [use a user pool with a unified domain name](/guides/faqs/union-domain.md), you can modify the third-level domain names of all applications (self-built applications, integrated applications, and application panels) in the user pool at one time. |
| 4             | User Pool Description  | You can enter a brief user pool description here, which should accurately describe the user pool's business information and purpose of use to distinguish it from other user pools.                                                                                                                                                                                                                                                                                                                                                      |
| 5             | User Pool Logo         | Administrators can click the user pool logo to upload and replace the current system default logo image locally.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 6             | Delete User Pool       | You can delete a user pool here. </br>**Note**: "Delete User Pool" is a high-risk operation. Once a user pool is deleted, it cannot be recovered. {{$localeConfig.brandName}} will delete all user information and configuration information in this user pool from the database in real time after you make the "Delete User Pool" operation.                                                                                                                                                                                           |

## Key Management

Path: **Settings->Basic Settings->Key Management**

The user pool key can be used in multiple scenarios such as using tickets to exchange for user information. You can obtain the **User Pool ID** (`UserPoolId`) and **User Pool Key** (`UserPool Secret`) on the **Key Management** page of the console.

![](./images/key-management.png)​

One user pool ID automatically generates two corresponding user pool keys:

- **Current key**: It is the key provided to customers for online use requests.

- **Next key**: It is a backup key automatically created in advance when customers are ready to change the key.

Currently, the user pool key of {{$localeConfig.brandName}} supports refresh rotation. To refresh and rotate the user pool key, perform the following steps:

1. Click the **Rotate and revoke current key** button.

2. Check the prompt information in the pop-up window and click **Rotate and revoke current key** to confirm.

![](./images/change-userpool-secret.png)​

3. The prompt "Rotation key successful" will be displayed, **Current key** will be disabled and enter the **Revoked keys** list, the status of **Next key** will be changed to **Current key**, and a new **Next key** will be automatically created.

![](./images/secret-updated-successfully.png)​
