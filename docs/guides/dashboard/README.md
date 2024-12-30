# Application Panel

<LastUpdated/>

The {{$localeConfig.brandName}} application panel is used to display various applications required by the enterprise. It is a good place to provide employees with single sign-on, improve work efficiency, and ensure information security.

The single sign-on (SSO) of enterprise employees to various applications is based on Security Assertion Markup Language (SAML) or {{$localeConfig.brandName}} self-developed secure authentication ({{$localeConfig.brandName}} Secure Authentication).

![](~@imagesZhCn/guides/dashboard/app-panel.png)

## Operation Instructions for End Users

### Login to the Application Panel

End users need to log in to {{$localeConfig.brandName}} before accessing the application panel. First, the user needs to enter the login address URL of the application panel in the browser, such as "https://org-name.genauth.ai" (where "org-name" is the name of the company or organization). Next, the user needs to enter his username and password, or log in through a third-party account. If the user does not know his username or forgets his password, he needs to contact the IT department of his company, and the IT administrator will set up a {{$localeConfig.brandName}} account or reset the password for him.

![](~@imagesZhCn/guides/dashboard/app-panel2.png)

### Add or uninstall applications

The application panel will display all applications accessible to the user by default. Users can add or uninstall their frequently used applications at will to reduce the interference of unnecessary applications.

You can add self-built applications or third-party applications to the application panel.

![](~@imagesZhCn/guides/dashboard/app-panel3.png)

To delete an application from the application panel, click the "..." button in the upper right corner of the application to be deleted in the application list and confirm it in the pop-up deletion window.

![](~@imagesZhCn/guides/dashboard/app-panel4.png)

### Update personal information

In the upper right corner of the application panel, users can click the **Personal Center** button to enter the user's personal center to edit personal information.

![](~@imagesZhCn/guides/dashboard/app-panel5.png)

![](~@imagesZhCn/guides/dashboard/app-panel6.png)

## Instructions for enterprise administrators

### Step 1: Install the app for team members

Enterprise administrators or administrators with {{$localeConfig.brandName}} console permissions (for details on administrators and adding collaboration administrators, see [Add User Pool Collaboration Administrator](/guides/userpool-config/collaboration-adminstrator.md)) log in to the {{$localeConfig.brandName}} console **Application->Single Sign-On SSO->Application List->App Details Page->Access Authorization**, and set the permissions to access the app in the **Application Access Control** module.

![](~@imagesZhCn/guides/dashboard/app-panel7.png)

### Step 2: Configure the application panel

Enterprise administrators or administrators with {{$localeConfig.brandName}} console permissions can go to the console **Branding->App Panel->Basic Settings** and **App->Single Sign-On SSO->Configuration** to configure the basic information of the application panel, login registration method, social login method, enterprise login method, etc. (For details, please refer to [Login Control](/guides/app-new/create-app/login-control.html) and [Application Panel Configuration](https://docs.genauth.ai/guides/customize/app-panel/#%E5%BA%94%E7%94%A8%E9%9D%A2%E6%9D%BF%E9%85%8D%E7%BD%AE)).

![](~@imagesZhCn/guides/dashboard/base-set.png)
![](~@imagesZhCn/guides/dashboard/login-set.png)

### Step 3: View the applications accessible to users or organizations

Administrators can enter the console **Applications->Single Sign-On SSO->Assigned Applications** to view the list of applications accessible to users or organizations. Clicking an application will enter the application details page.

![](~@imagesZhCn/guides/dashboard/app-panel9.png)

### Step 4: Configure application single sign-on SSO

Users enter the "Single Sign-On SSO" page and add the self-built application just now.

::: hint-info
After adding, log in to any application (self-built or integrated application) in the SSO list page to single sign-on all applications on the panel.
:::

![](~@imagesZhCn/guides/dashboard/app-panel3.png)

![](~@imagesZhCn/guides/dashboard/add-created-app-to-sso.png)
