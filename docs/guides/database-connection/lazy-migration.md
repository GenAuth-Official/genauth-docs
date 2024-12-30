# Lazy migration of users to {{$localeConfig.brandName}}

<LastUpdated/>

<!-- ::: hint-warning
Only **Enterprise Edition** users can use the function of connecting to a custom database. For details, please see [https://www.genauth.ai/pricing](https://www.genauth.ai/pricing). If you want to try it, please contact <a href="mailto:csm@genauth.ai">GenAuth after-sales service staff</a>.
::: -->

## Migration process

GenAuth supports smooth migration of users from a custom database to GenAuth without downtime. When this function is enabled, the following effects will be produced on login and registration requests:

Authentication request:

- The user will use the custom data script you configured to authenticate the user for the first time. After successful authentication, it will be migrated to the GenAuth database. Otherwise, it will prompt that the user does not exist or the password is incorrect.
- The user does not need to change the account password.
- The user's subsequent authentication will go through the GenAuth database.
- When all users have been successfully authenticated at least once, the database migration is completed smoothly.

Registration request:

- When registering a user, it will first check whether it exists in the GenAuth database. If it already exists, an error prompt will be returned.
- If the user does not exist in the GenAuth database, the `getUser` interface will be used to check whether the user exists in the custom database. If it already exists, an error prompt will be returned.
- If the user does not exist in both the GenAuth database and the custom database, the registration is successful.

## Configuration script

You need to write the **Login** and **Search user** scripts in the [GenAuth console](https://console.genauth.ai/console/userpool), **Connect to identity source** - **Custom database** page. For details, please see:

- [Write login script](./configuration/#Write database operation script).
- [Write search user script](./configuration/#Write database operation script).

## Verify the migration effect

After you enable user data migration, you can verify the fully migrated users in the following ways:

- Use the [management API to get a list of users or search for users](/reference/sdk-for-node/management/UsersManagementClient.md#Get a list of users).
- View users in the [GenAuth console](https://console.genauth.ai/console/userpool) **User Management** - **User List** page.

## After user migration is complete

After all users have been migrated, close the custom database.

![](https://cdn.genauth.ai/blog/20201130175955.png)
