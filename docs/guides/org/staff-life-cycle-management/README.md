# Manage member lifecycle

<LastUpdated/>

As the company grows, the number of internal applications and personnel will continue to increase. With the continuous entry and exit of employees, the frequent adjustment of the personnel organizational structure, the complex application account system within the enterprise, and the workload of administrators to manually operate accounts has increased sharply. At the same time, the lack of a unified account management control solution will also bring hidden dangers to the company's production safety, and there are often security risk cases where employees leave but the application account is not closed.

Replacing manual account management with automated **Account Lifecycle Management (LCM)** is the key to liberating enterprise IT personnel from the tedious and complex identity information management work involved in flexible employment. At the same time, it can also improve the overall business security factor of the enterprise by timely closing personnel accounts and reducing the authorization error rate.

Automated LCM covers multiple nodes involved in the employee lifecycle, from employee recruitment, employee employment, to employee resignation, including both administrator operations and end-user triggering behaviors, as follows:

<img src="../images/employee-lifecycle.png" style="display:block;margin: 0 auto;">

Account lifecycle management has the following advantages:

- Improve productivity and reduce costs.
- Reduce complexity.
- More secure and compliant.

You can read more about [Account Lifecycle Management](/concepts/account-life-cycle-management.md) .

## Old version of organization management

### Member onboarding

You can onboard members on the console organization management page:

<img src="~@imagesZhCn/guides/org/Xnip2021-02-27_14-39-48.png" alt="drawing"/>

#### Create an account

You can create an account using a mobile phone number or email address:

<img src="~@imagesZhCn/guides/org/Xnip2021-02-27_14-41-35.png" alt="drawing"/>

#### Select an organization

You can specify the department for new employees:

<img src="~@imagesZhCn/guides/org/Xnip2021-02-27_14-42-12.png" alt="drawing"/>

#### Authorize Applications

You can authorize the applications that new employees can access:

<img src="~@imagesZhCn/guides/org/Xnip2021-02-27_14-42-52.png" alt="drawing"/>

#### Authorize Roles

You can authorize roles to the employee, so that the member automatically inherits all permissions granted to the role:

<img src="~@imagesZhCn/guides/org/Xnip2021-02-27_14-43-47.png" alt="drawing"/>

### View Details

Click the **View Details** button of an employee under the corresponding organizational level to jump to the user's details page in **Member Management** (for B2B and B2C scenarios, jump to the **User List** page).

<img src="../images/check-employee-details-button.png" style="display:block;margin: 0 auto;">

::: img-description
View Details Button
:::

You can view user information, grant roles to the employee, authorize applications, and view the employee's application access log on the employee details page.

<img src="../images/check-employee-details.png" style="display:block;margin: 0 auto;">

::: img-description
View Employee Details
:::

### Lock / Unlock Account

You can temporarily lock an employee's account. After locking, the user cannot log in to the application until it is unlocked.

<img src="../images/lock-account.png" style="display:block;margin: 0 auto;">

::: img-description
Lock Account
:::

<img src="../images/unlock-account.png" style="display:block;margin: 0 auto;">

::: img-description
Unlock Account
:::

### Change Department

If a member needs to change departments during his/her employment, he/she can click the **Change Department** button in the employee's row on the **Organization Management** page, and select the target department in the window that opens, or search in the search box and select:

<img src="../images/change-department.png" style="display:block;margin: 0 auto;">

You can also select members in the member list under the corresponding level organization, and then click the **Change Department** button above the member list to open the **Change Department** window to make changes.

<img src="../images/top-button-for-department-change.png" style="display:block;margin: 0 auto;">

### Set the main department

If the current member belongs to multiple departments, you can set one as the main department. To do this, you can click the **Set Main Department** button in the row of the target member in the user list on the **Organization Management** page:

<img src="../images/set-to-main-department-userlist.png" style="display:block;margin: 0 auto;">

Then select and confirm the main department in the open window:

<img src="../images/select-main-department-old.png" style="display:block;margin: 0 auto;">

### Disable / Enable employee accounts

In an emergency such as an account being stolen, you need to temporarily disable the employee account. You can click the **Disable Account** button in the row of the employee on the **Member Management** page (**User List** page for B2B and B2C scenarios).

<img src="~@imagesZhCn/guides/org/Xnip2021-02-27_14-52-24.png" alt="drawing"/>

After disabling the account, the following operations will be performed automatically:

- Cancel the application authorization relationship.
- Cancel the policy authorization relationship.
- The account cannot log in.
- The department relationship is still retained.
- User information can still be edited.

After confirming safety, you can **Enable Account** in the same path. Then the account permissions will return to normal.

<img src="../images/activate-account.png" style="display:block;margin: 0 auto;">

### Handle resignation

You can handle employee resignation on the **Organization Management** page.

<img src="../images/leave-corp.png" style="display:block;margin: 0 auto;">

After an employee leaves, the following operations will be performed automatically:

- Cancel the application authorization relationship.
- Cancel the policy authorization relationship.
- The account cannot be logged in.
- Move out of the original department and move to the department where the employee has left.
- Keep the basic user information and delete the department, role, and group relationship of the employee.

::: hint-info
This operation cannot be restored, please operate with caution!
:::

### Delete Account

After processing the resignation of an employee, the **Delete Account** button of the employee under **Member Management** is activated:

<img src="../images/delete-account-member-management.png" style="display:block;margin: 0 auto;">

Deleting an employee account will completely delete all user-related data. Such as:

- User data
- Application authorization
- Policy authorization
- Department relationship
- Group relationship
- Role relationship
- Delete from user pool
- Login history

## New version of organization management

### Member onboarding

You can onboard members on the console organization management page:

<img src="../images/org-management-new.png" style="display:block;margin: 0 auto;">

You can create an account using a mobile phone number or email address, enter your **name**, **mobile phone number/email**, and **select department** in the **Member onboarding** window:

<img src="../images/employee-onboard.png" style="display:block;margin: 0 auto;">

Newly added members will be displayed in the user list:

<img src="../images/add-employee-list.png" style="display:block;margin: 0 auto;">

Click on the newly added member in the list to enter the user details page, where you can grant role authorization and application authorization:

<img src="../images/user-role-authorize.png" style="display:block;margin: 0 auto;">

::: img-description
Role authorization
:::

<img src="../images/user-app-authorize.png" style="display:block;margin: 0 auto;">

::: img-description
Application authorization
:::

### Disable/enable employee account

In case of emergency such as account theft, it is necessary to temporarily disable the employee account.

After disabling the account, the following operations will be performed automatically:

- Cancel the application authorization relationship.
- Cancel the policy authorization relationship.
- The account cannot log in.
- The department relationship is still retained.
- User information can still be edited.

Employee accounts can be disabled/enabled in two paths.

#### Disable/Enable Accounts Under Organization Management

Click the Disable Account button in the row of the employee on the Organization Management page and confirm in the pop-up window.

<img src="../images/deactivate-account-under-org-management.png" style="display:block;margin: 0 auto;">

You can also re-enable the account in the same path:

<img src="../images/activate-account-under-org-management.png" style="display:block;margin: 0 auto;">

#### Disable/Enable Accounts Under Member Management

Click the Disable Account button in the row of the employee on the Member Management page (the User List page for B2B and B2C scenarios).

<img src="~@imagesZhCn/guides/org/Xnip2021-02-27_14-52-24.png" alt="drawing"/>

After confirming safety, you can **activate the account** in the same path. Then the account permissions will return to normal.

<img src="../images/activate-account.png" style="display:block;margin: 0 auto;">

### Change department

If a member needs to change departments during his/her employment, he/she can click the **Change department** button on the **Organization management** page, check the target department in the open window, or search in the search box and check it. The changed department will be displayed in the list on the right side of the window:

<img src="../images/change-department.png" style="display:block;margin: 0 auto;">

### Set the main department

If the current member belongs to multiple departments, one can be set as the main department. To do this, just click **Set to Main Department** in the department list on the right side of the **Change Department** window above, and then click **OK**:

<img src="../images/set-to-main-department.png" style="display:block;margin: 0 auto;">

You can also click the **Set Main Department** button in the row of the target member in the user list on the **Organization Management** page:

<img src="../images/set-to-main-department-userlist.png" style="display:block;margin: 0 auto;">

Then select and confirm the main department in the open window:

<img src="../images/select-main-department.png" style="display:block;margin: 0 auto;">

### Set as Person in Charge

You can set persons in charge for organizations/departments at different levels.

::: hint-info
You can set persons in charge across departments. However, the person in charge label will only be marked if the selected person is a direct member of the selected department.
:::

There are two ways to set the department head:

* Click the More button after the department to be set in the organization tree, and select **Set department head**.

<img src="../images/select-manager-in-org-tree.png" height=450 style="display:block;margin: 0 auto;">

* Set the head in the user list corresponding to the organization:

1. Select the organization/department in the organization list on the left.

2. Click the row of the corresponding member in the user list of the current organization/department on the right **Set as head**.

<img src="../images/set-to-manager.png" style="display:block;margin: 0 auto;">

The selected member becomes the head of the organization/department.

<img src="../images/person-in-charge.png" style="display:block;margin: 0 auto;">

### Handling Resignation

You can handle employee resignation on the **Organization Management** page.

<img src="../images/resign.png" style="display:block;margin: 0 auto;">

After an employee resigns, the following operations will be performed automatically:

- Cancel the application authorization relationship.
- Cancel the policy authorization relationship.
- The account cannot log in.
- Move out of the original department and move to the department where the employee has left.

### Deleting an Account

You can delete the employee account simultaneously when **handling resignation**:

<img src="../images/resign-and-delete-account.png" style="display:block;margin: 0 auto;">

Resignation and account deletion can also be performed in steps:

1. First, **handle resignation** on the **Organization Management** page.

2. Then **delete the account** in **member management**.

<img src="../images/delete-account-member-management.png" style="display:block;margin: 0 auto;">

All user-related data will be completely deleted. For example:

- User data
- Application authorization
- Policy authorization
- Department relationship
- Group relationship
- Role relationship
- Delete from user pool
- Login history