---
meta:
  - name: description
    content: user object
---

# user object

<LastUpdated/>

The user object stores various data of the current user, as well as methods for adding custom fields and custom token fields.

::: hint-info
The user object of the Pre-Register Pipeline contains the information filled in when the user registered, but it is not actually written to the database.

Only supports modifying user information (user object) in the Pipeline before and after authentication. It does not support directly modifying user information in the Pipeline at other nodes (such as before and after token issuance).
:::

## Attributes

| Attribute name | Value type | Description |
| -------------- | ------- | --------------------------------------------- |
| id | string | User ID |
| username | string | User name |
| email | string | Email |
| emailVerified | boolean | Email verified |
| phone | string | Phone number |
| phoneVerified | boolean | Phone number verified |
| photo | string | Avatar link |
| nickname | string | Nickname |
| gender | string | Gender |
| lastLogin | string | Last login time, in the format of 2020-02-07T04:29:40.877Z |
| company | string | Company name |
| browser | string | Registered browser |
| device | string | Registered device |
| country | string | Country |
| region | string | Region |
| address | string | Address |

## Methods

| Method Name | Description | Sample Code |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| addCustomData | Add user-defined fields. You need to define preset user-defined fields at the user pool level before you can set them for users in Pipeline. | ​​user.addCustomData("KEY", "VALUE") |
| addIdToken | Set custom fields for ID Token. It can also be used to replace the original ID Token content. **This interface is only available before OIDC ID Token is issued. ** | user.addIdToken("KEY","VALUE") |
| removeIdToken | Delete original or custom fields of ID Token. **This interface is only available before OIDC ID Token is issued. ** | user.removeIdToken("KEY","VALUE") |
| addAccessToken | Set custom fields for Access Token. It can also be used to replace the original Access Token content. **This interface is only available before OIDC Access Token is issued. ** | user.addAccessToken("KEY","VALUE") |
| removeAccessToken | Delete the original or custom fields of Access Token. **This interface is only available before OIDC Access Token is issued. ** | user.removeAccessToken("KEY") |
