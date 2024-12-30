# Add user-defined fields

<LastUpdated/>

User-defined fields are additional fields that can be added to user objects in addition to [basic user fields](/guides/user/user-profile.md). Developers can store **a small amount** of business-related data by setting custom fields.

You can configure custom user fields on the **Settings->Field Management->User Field Management** page.

The following types of custom fields can be defined:

- String
- Numeric
- Date
- Boolean
- Object

![](../images/extend-column.png)

When naming a newly created custom field, you can edit the display name of the field in multiple language environments:

- Edit directly in the input box under "Display Name" to get the default displayed field name
- Check "Chinese" and edit the field display name in the Chinese environment
- Check "English" and edit the field display name in the English environment
- Check "Traditional" and edit the field display name in the Traditional Chinese environment
- Check "Japanese" and edit the field display name in the Japanese environment

In particular, if the display environment of the field is not included in the above four language environments, it will be displayed using the "Default Display Field Name" you configured.

![](../images/extend-column-i18n.jpg)

After configuring custom fields, you can enable the registration information completion page of the application and let users complete the information of these custom fields.

On the **App Details** - **Advanced Configuration** page, enable **Customize the login box of this application**

![](../images/extend-column-supplement-1.png)

Then switch to **Branding**, check the **Enable registration information completion** switch, and then select the custom field you just added:

![](../images/extend-column-supplement-2.png)

![](../images/extend-column-supplement-3.png)

You can choose text, password, number, date, color, email and image for input type, which will determine the final display style of the page.

Click Save and then visit the login page of the application.

After the user clicks "Register", he will be redirected to the following registration information completion page:

![](../images/extend-column-supplement-4.png)

After the user successfully registers, you can see the custom field value just entered by the user on the user details page:

![](../images/extend-column-supplement-5.png)