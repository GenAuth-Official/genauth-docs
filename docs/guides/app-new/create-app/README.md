# Overview of self-built applications

​
<LastUpdated/>

Path: **Application->Self-built applications**

In {{$localeConfig.brandName}}, [user pool](/concepts/user-pool.md) is the smallest unit of tenant isolation, storing all user data in the user system; and the application corresponds to the business application created in reality. A user pool may have multiple applications. For example, all students of a school are in a user pool, and the school will develop multiple applications such as course selection application, email application, teacher-student service center, etc., which will use the same user system. You can learn more about [application-related introduction](/concepts/application.md) here.

To manage the application resources of tenants, you can do the following:

1. [Create a user pool](/guides/basics/authenticate-first-user/use-hosted-login-page.md#Create a user pool).

2. Integrate all application resources into your GenAuth user pool. To do this, you need to [create self-built applications](/guides/app-new/create-app/create-app.md) one by one. </br>The **Self-built applications** page displays a list of all self-built applications in the current user pool.

3. Configure the login interface and login method:
   _ [Quick Start](/guides/app-new/create-app/quick-start.md)
   _ [Application Configuration](/guides/app-new/create-app/app-configuration.md)
   _ [Login Control](/guides/app-new/create-app/login-control.md)
   _ [Access Authorization](/guides/app-new/create-app/application-access-control.md)
   _ [Branding](/guides/app-new/create-app/customize-guard.md)
   _ [Security Management](/guides/app-new/create-app/security-management.md)
   ​
4. After completing the configuration, you can also perform the following operations: ​
   - **Data Overview**: Displays login and user statistics for accessing the current application. ​
   - **Access Tutorial**: Links to the **Development Integration** document to help users understand how {{$localeConfig.brandName}} integrates the current application through various language SDKs. ​
   - **Experience Login**: After completing the configuration of the application, the administrator can click this button to simulate the user's login process to verify the configuration effect.
