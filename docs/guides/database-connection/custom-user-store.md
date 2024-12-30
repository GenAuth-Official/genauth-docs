# Use custom database to save user data completely

<LastUpdated/>

<!-- ::: hint-warning
Only **Enterprise Edition** users can use the function of connecting to custom database. For details, please see [https://www.genauth.ai/pricing](https://www.genauth.ai/pricing). If you want to try it, please contact <a href="mailto:csm@genauth.ai">GenAuth after-sales service staff</a>.
::: -->

## Migration process

When using this mode, user data is always saved in your database, and GenAuth will never save your user data. In order for the system to work properly, you need to implement a complete user addition, deletion, modification and query script.

## Configuration script

You need to write **Login**, **Search user**, **Create user**, **Update user information**, **Delete user**, **Get user list**, **Verify password** scripts in the [GenAuth console](https://console.genauth.ai/console/userpool), **Connect to identity source** - **Customize database** page, for details, please see:

- [Write login script](./configuration/#Write database operation script).
- [Write search user script](./configuration/#Write database operation script).
- [Write create user script](./configuration/#Write database operation script).
- [Write update user information script](./configuration/#Write database operation script).
- [Write delete user script](./configuration/#Write database operation script).
- [Write get user list script](./configuration/#Write database operation script).
- [Write verification password script](./configuration/#Write database operation script).
