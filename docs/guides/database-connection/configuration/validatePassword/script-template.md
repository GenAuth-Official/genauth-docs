This script will be executed when the administrator uses the console or API to obtain a user list. The data required by this interface needs to include the total number of users and the user list of the current page. This script is only required when using a completely custom database mode.

### Function definition

The `validatePassword` function is defined as follows:

```javascript
async function validatePassword(id, password, context) {
  // This script should validate password of a exists user entry in your database. It will
  // be executed when a user attempts to change password.

  // The first argument `id` is the user'id in your database

  // The second argument `password` is the password user input in palin text format.

  // The last argument `context` contains information about the authentication context.
  // see http://core.genauth.ai/connections/custom-db/config-custom-db-connection.html for more information.

  //
  // There are three ways this script can finish:
  // 1. The password
  // format: https://docs.authing.co/user/profile.html .
  //    return profile
  // 2. A user was not found
  //     return null
  // 3. Something went wrong while trying to reach your database:
  //     throw new Error("my error message")

  const msg =
    "Please implement the Validate Password script for this database connection";
  throw new Error(msg);
}
```

| Parameter | Type            | nullable | Description               |
| :-------- | :-------------- | :------- | :------------------------ |
| id        | number / string | false    | User ID                   |
| password  | string          | false    | User plain text password. |
| context   | object          | true     | Request context context   |

The context contains the following information:

| Attribute name   | Type   | Description                                                                                                                                                  |
| :--------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userPoolId       | string | User pool ID                                                                                                                                                 |
| userPoolName     | string | User pool name                                                                                                                                               |
| userPoolMetadata | object | User pool configuration information                                                                                                                          |
| appId            | string | The ID of the current user. **You can use appId to distinguish the application source of the user request. **                                                |
| appName          | string | The name of the current application                                                                                                                          |
| appMetadata      | object | Configuration information of the current application                                                                                                         |
| application      | string | User pool ID                                                                                                                                                 |
| request          | object | Detailed information of the current request, including: <br> `ip`: Client IP <br> `geo`: Client geographic location resolved by IP <br> `body`: Request body |

### Return data convention

#### Password verification success

When the password verification is successful, you need to return `true`:

```javascript
async function validatePassword(id, password, context) {
  // Implement your logic here
  return true;
}
```

#### Password verification failed

When the password verification fails, you need to return `false`:

```javascript
async function validatePassword(id, password, context) {
  // Implement your logic here
  return false;
}
```

#### Other abnormal errors

When encountering other abnormal errors, you can catch the error and return a more friendly error prompt, for example:

```javascript
async function validatePassword(id, password, context) {
  try {
    // Implement your logic here
  } catch (error) {
    throw new Error("Something went wrong ...");
  }
}
```

### Best Practices

#### Provide friendly error prompts

When encountering unknown errors, we recommend throwing a standard `Error` object, which GenAuth will capture and eventually return to the end user. For example: `throw new Error("My nice error message")`, you can see the error log in the **Log History** of the custom database.

![](https://cdn.genauth.ai/img/20210111163154.png)

#### Disconnect the database connection at the end of the function

Remember to close the connection to the database when the script is finished, such as calling client.end(). For example, you can execute it in try/finally to ensure that it will always be executed:

```javascript
try {
  const result = await client.updates("YOUR updates");
} finally {
  // NOTE: always call `client.end()` here to close the connection to the database
  client.end();
}
```

### Example function

Take the `postgres` database as an example, there are the following points:

- You can get the database connection string through `env.DB_CONNECTION_URI` to create a database connection.
- Execute the `SQL` statement `SELECT password FROM users WHERE id = $1`. If `result.rows.length` is 0, it means that the user does not exist, and an exception is thrown with the error message: `User not exists!`.
- Use `bcrypt.compare` to check whether the password is correct.
- Call `client.end()` in `try/finally` to disconnect the database connection.

```javascript
async function validatePassword(id, password, context) {
  // This example uses the "pg" library
  // more info here: https://github.com/brianc/node-postgres
  const { Client } = require("pg");

  const client = new Client({
    connectionString: env.DB_CONNECTION_URI,
  });

  // Or you can:
  // const client = new Client({
  //   host: env.DB_HOST,
  //   port: env.DB_PORT,
  //   user: env.DB_USERNAME,
  //   password: env.DB_PASSWORD,
  //   database: env.DB_DATABASE,
  // });

  await client.connect();

  // Use bcrypt to validate password
  // more info here: https://github.com/kelektiv/node.bcrypt.js
  const bcrypt = require("bcrypt");

  const QUERY = "SELECT password FROM users WHERE id = $1";
  try {
    const result = await client.query(QUERY, [id]);
    if (result.rows.length === 0) {
      throw new Error("User not exists!");
    }
    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    return isPasswordValid;
  } catch (error) {
    throw new Error(`Execute query failed: ${error.message}`);
  } finally {
    // NOTE: always call `client.end()` here to close the connection to the database
    client.end();
  }
}
```
