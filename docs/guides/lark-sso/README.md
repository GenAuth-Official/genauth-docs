# Feishu Workbench SSO Solution

<LastUpdated/>

Traditional identity systems are often pieced together from various solutions, and "identity data" is separated from each other. The need for unified account management is becoming more frequent and necessary. By using a centralized identity management platform, the user's login experience and IT office efficiency can be greatly improved, and access security can be effectively improved.

We are often asked by developers how to log in to all applications through a single identity source and the same platform, and uniformly perform fine-grained permission management. Today, we take Feishu as an example to quickly add Gitlab as a single identity source for enterprises, and provide you with a very simple solution to the problem of unified account management.

![Sample](./images/lark-sso-1.gif)

## Design idea

<img src="./images/lark-sso-15.jpeg" class="medium-zoom-image" >

## How to implement

### Step 1: Take Feishu as an example and configure Feishu as a single identity source

1. Configure Feishu address book in GenAuth and fill in the following information as required.

- Feishu application App ID
- Feishu application App Secret;
- Event subscription Encrypt Key (optional), if you do not need to keep in real-time synchronization with Feishu organization, you can leave it blank;
- Event subscription Verification Token (optional), if you do not need to keep in real-time synchronization with Feishu organization, you can leave it blank.

<img src="./images/feishu_01.png" class="medium-zoom-image" />

<img src="./images/feishu_02.png" class="medium-zoom-image" />

<img src="./images/feishu_03.png" class="medium-zoom-image" />

2. Synchronize the organization from Feishu address book to GenAuth.

In the GenAuth console **User Management->Organization** page, click **Organization Import->Sync Center Synchronization** in the upper right corner to create Feishu upstream synchronization. After that, Feishu's addition, deletion, and modification operations will be synchronized to the console's organization in real time.

<img src="./images/sync-button.png" class="medium-zoom-image" />

<img src="./images/create-feishu-upstream-sync.png" class="medium-zoom-image" />

### Step 2: Take GitLab as an example and use Feishu account to single sign-on GitLab

### Integrate applications

1. Enter [Feishu Open Platform](https://open.feishu.cn/app) and click "Create Enterprise Self-built Application".

<img src="./images/lark-sso-1.jpeg" class="medium-zoom-image" />

2. Fill in the pop-up window information and click "Confirm to create".

<img src="./images/lark-sso-2.png" class="medium-zoom-image" >

3. Enter the GenAuth console **Application->Single Sign-On SSO**, click **Add Integrated Application** in the upper right corner of the page, and get GitLab. Copy the **Application Access Link** under **Application Configuration**.

<img src="./images/lark-sso-3.png" class="medium-zoom-image" >

4. Enter the Lark Open Platform **Application Function->Web Page**, turn on the **Enable Web Page** switch, paste the link to **Web Page Configuration**, and click **Save**.

<img src="./images/lark-sso-5.png" class="medium-zoom-image" >

5. Enter **Version Management and Release**, and click **Create Version**.

<img src="./images/lark-sso-6.png" class="medium-zoom-image" >

6. Fill in the version details and save.

<img src="./images/lark-sso-7.png" class="medium-zoom-image" >

7. Click **Apply for online release**.

<img src="./images/lark-sso-8.png" class="medium-zoom-image" >

8. In the GenAuth console **Application->Single Sign-On SSO->Application List**, enter GitLab and set the users who can access GitLab under **Access Authorization**.

9. All users who have access to this application can see the newly added application on the Lark workbench. As long as the user logs in to one application, they can single-sign on all applications.

<img src="./images/lark-sso-9.png" class="medium-zoom-image" >

### Self-built applications

For self-built applications, you need to do the following:

1. Create a self-built application.

::: hint-info
For creating an application, refer to [How to create a self-built application](/guides/app-new/create-app/create-app.md).

You can also use an existing application.
:::

2. The user goes to **Application->Single Sign-On SSO** and clicks **Add a self-built application** in the upper right corner of the page.

<img src="./images/create-app-sso.png" class="medium-zoom-image" >

<img src="./images/add-created-app-to-sso.png" class="medium-zoom-image" >

::: hint-info
After adding, log in to any application (self-built or integrated application) in the SSO list page to sign in to all applications on the panel.
:::

3. The user returns to the application list, clicks to enter the self-built application, and copies the **Authentication address** under **Application configuration**.

<img src="./images/feishu_07.png" class="medium-zoom-image" >

4. Repeat the above "Integrated application" solution, and the user pastes the address in the Feishu Open Platform **Application function->Web configuration**.
