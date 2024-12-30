This script will be executed when an administrator deletes a user account using the console or API. This script is only needed when using a completely custom database model.

### Function definition

The `deleteUser` function is defined as follows:

```javascript
async function deleteUser(id, context) {
  // This script should validate password of a exists user entry in your database. It will
  // be executed when a user attempts to change password.

  // The first argument `id` is the user'id in your database

  // The last argument `context` contains information about the authentication context.
  // see http://core.genauth.ai/connections/custom-db/config-custom-db-connection.html for more information.

  //
  // There are three ways this script can finish:
  // 1. Delete user success
  //    return true
  // 2. Delete user failed
  //    throw new Error("Delete Account Failed")
  // 3. Something went wrong while trying to reach your database:
  //    throw new Error("my error message")

  const msg =
    "Please implement the Delete Account script for this database connection";
  throw new Error(msg);
}
```

| Parameter | Type            | nullable | Description             |
| :-------- | :-------------- | :------- | :---------------------- |
| id        | string / number | false    | User ID                 |
| context   | object          | true     | Request context context |

The context contains the following information:

| Property name    | Type   | Description                                                                                                                                                  |
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

#### Successful deletion

When the user profile is successfully modified, you need to return `true`:

```javascript
async function deleteUser(id, updates, context) {
  // Implement your logic here
  return true;
}
```

#### User does not exist

When the user does not exist, you need to throw an error directly (the error message can be freely defined), for example:

```javascript
async function deleteUser(id, updates, context) {
  // Implement your logic here
  throw new Error("User not exists!");
}
```

#### Other abnormal errors

When encountering other abnormal errors, you can catch the error and return a more friendly error prompt, for example:

```javascript
async function deleteUser(id, updates, context) {
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

Please remember to close the connection to the database when the script is executed, such as calling client.end(). For example, you can execute it in try/finally to ensure that it will always be executed:

```javascript
try {
  const result = await client.updates("YOUR updates");
} finally {
  // NOTE: always call `client.end()` here to close the connection to the database
  client.end();
}
```

## Example function

Take the `postgres` database as an example, there are the following points:

- You can get the database connection string through `env.DB_CONNECTION_URI` to create a database connection.
- Execute the SQL statement DELETE FROM users WHERE id = $1. If result.effected is 0, it means the user does not exist. An exception is thrown with the error message User not exists!.
- If the deletion is successful, true is returned.
- Call client.end() in try/finally to disconnect the database.

```javascript
async function deleteUser(id, context) {
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

  const QUERY = "DELETE FROM users WHERE id = $1";
  try {
    const result = await client.query(QUERY, [id]);
    if (result.effected === 0) {
      throw new Error("User not exists!");
    }
    return true;
  } catch (error) {
    throw new Error(`Execute query failed: ${error.message}`);
  } finally {
    // NOTE: always call `client.end()` here to close the connection to the database
    client.end();
  }
}
```
