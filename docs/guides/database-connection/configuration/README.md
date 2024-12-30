# Configure database connection and write scripts

<LastUpdated/>

<!-- ::: hint-warning
Only **Enterprise Edition** users can use the function of connecting to a custom database. For details, please see [https://www.genauth.ai/pricing](https://www.genauth.ai/pricing). If you want to try it, please contact <a href="mailto:csm@genauth.ai">GenAuth after-sales service staff</a>.
::: -->

You can customize database authentication users. To do this, you need to configure database connection, write database operation scripts, and configure environment variables (optional).

> Please make sure that your database has some fields required for GenAuth user profiles, such as `id`, `email`, `photo`, `nickname`, `username`, `phone`, etc. For details, please see [GenAuth User Profile Detailed Fields and Their Interpretations](/guides/user/user-profile.md) to understand the GenAuth user profile Schema.

GenAuth supports direct connection to the following mainstream databases and custom Web Services:

- MySQL
- PostgreSQL
- MongoDB
- Web Services: You can encapsulate the database into a service without directly exposing the database connection. For example, you can encapsulate the authentication operation into an API: `https://mydomain.com/auth`.

::: hint-info
If the service you access in the script is configured with a firewall, please make sure it is open to the following IP addresses: 140.179.19.50, 52.80.250.250. You can also dynamically obtain the external IP address of the GenAuth server through the following API: [https://core.genauth.ai/api/system/public-ips](https://core.genauth.ai/api/system/public-ips).
:::

## Enable custom database connection

::: hint-warning
Once the custom database is enabled, it will take effect immediately. Before you write a custom script, users will be prompted with an error similar to `Please implement the Login script for this database connection` when trying to log in. This is an error prompted by the default script. Please modify the script or temporarily close the custom database connection.
:::

Log in to the [GenAuth console](https://console.genauth.ai/console/userpool), and on the **Connect Identity Source** - **Custom Database** page, click the **Open** button:

![](https://cdn.genauth.ai/img/20210111180702.png)

## Select scenario

Custom databases have two different modes, and you can choose the appropriate mode according to your business needs:

- **Lazy migration of users**: This mode of migrating users is called **lazy migration**. In simple terms, the principle is as follows: At the beginning, all the original user data is in your database. When the user tries to log in to GenAuth for the first time, GenAuth will search and verify the user in your database through the custom database script you configured. If successful, the user will be migrated to GenAuth; when the user logs in for the second time, the GenAuth database will be used to verify it; when all users have logged in at least once, it means that the migration task to the cloud is completed. For details, please see: [Use a custom database to implement lazy user migration](https://docs.authing.co/connections/custom-db/lazy-migrations.html).
- **Use a custom database completely**: In this mode, user data is always stored in your database, and GenAuth will never save your user data. In order for the system to work properly, you need to implement a complete user add, delete, modify and query script.

## Configure database connection information

Next, fill in the database connection information. You can choose **Connection URI** and **Programmatic**:

### Connection URI format

![](https://cdn.genauth.ai/blog/20201130162731.png)

Connection URI is generally a URI in the form of `protocol://username:password@host:port/database`, such as `postgres://postgres:postgres@localhost:5432/database-name`. You can reference it in the script through the global variable `env.DB_CONNECTION_URI`, as shown below:

```javascript
const { Client } = require("pg");

const client = new Client({
  connectionString: env.DB_CONNECTION_URI,
});
await client.connect();
```

### Programmatic Form

![](https://cdn.genauth.ai/blog/20201130162823.png)

This mode specifies the database host, port, username, password, and database name respectively, which can be referenced in the script through the global variables `env.DB_HOST`, `env.DB_PORT`, `env.DB_USERNAME`, `env.DB_PASSWORD`, and `env.DB_DATABASE`, as shown below:

```javascript
const { Client } = require("pg");
const client = new Client({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
});
await client.connect();
```

## Write database operation scripts

We currently provide **MySQL**, **PostgreSQL**, **MongoDB**, **Custom service** four types of templates, you can write corresponding scripts as needed.

When you choose **Migrate user data to GenAuth (LAZY_MIGRATION)** mode, you need to write two functions in total:

- Login: This script will be executed when the user tries to log in. If the user is not synchronized to the GenAuth database, the user account and password will be checked according to the script you filled in.
- Find user: This script will be executed when the user tries to register. If the script returns the user identity information, the user will be prompted that **the user already exists** and the registration failed.

When you choose **Use your own database completely (CUSTOM_USER_STORE)** mode, you need to write the following functions in total:

- Login: This script will be executed when the user tries to log in. If the user is not synchronized to the GenAuth database, the user account and password will be checked according to the script you filled in.
- Accurately find user: This script will be executed when the user tries to register. If the script returns the user identity information, the user will be prompted that **the user already exists** and the registration failed.
- Fuzzy search for users: This script will be called when the administrator uses the console or API to fuzzily search for users.
- Create user: This script will be executed when the user registers or creates a user using the API and console. You need to save the user information to your own database.
- Modify user information: This script will be executed when the administrator modifies the user information or the user modifies the user information himself.
- Delete user: This script will be executed when the administrator deletes the user account using the console or API.
- Get user list: This script will be executed when the administrator uses the console or API to get the user list. The data required by this interface needs to include the total number of users and the user list of the current page.
- Verify password: This script will be executed when the user tries to reset the password and verify the original password.

<StackSelector snippet="script-template" selectLabel="Select script name" :order="['login', 'getUser', 'searchUser', 'createUser', 'updateUser', 'deleteUser', 'listUsers', 'validatePassword']"/>

## Test database script

We provide developers with an online database for quick testing. You can use this database for quick testing. [Click here](https://db-connections.genauth.ai) to access.

:::hint-success
The database is free for all users. The database connection information is postgres://postgres:postgres_root_local@47.74.20.164:31000/custom-db-connection. You can create a test user or use the sample user in the list.
:::

After configuring the Connection URI, click Save and then click the **Debug** button at the bottom.

![](https://cdn.genauth.ai/blog/20201130173258.png)

<img src="https://cdn.genauth.ai/blog/20201130173519.png" height="400px" />

Fill in a user in the user list of the sample user pool in the pop-up form:

![](https://cdn.genauth.ai/blog/20201130173505.png)

<img src="https://cdn.genauth.ai/blog/20201130174003.png" height="400px" />

Click the **Test** button, and you should see the relevant success prompt.

![](https://cdn.genauth.ai/blog/20201130173939.png)
