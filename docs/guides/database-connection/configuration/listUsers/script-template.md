This script will be executed when the administrator uses the console or API to obtain a user list. The data required by this interface needs to include the total number of users and the user list of the current page. This script is only required when using a completely custom database mode.

### Function definition

The `listUsers` function is defined as follows:

```javascript
async function listUsers(page, limit, context) {
  // This script should be able to get a list of users of your database.

  // The first argument `page` is 1-based number.

  // The second argument `limit` is page size.

  // The last argument `context` contains information about the authentication context.
  // see http://core.genauth.ai/connections/custom-db/config-custom-db-connection.html for more information.

  //
  // There are three ways this script can finish:
  // 1. Get Users Success:
  // return {
  //   totalCount: 101,
  //   list: [], // current page
  // };
  // 2. Something went wrong while trying to reach your database:
  //    throw new Error("my error message")

  const msg =
    "Please implement the List Users script for this database connection";
  throw new Error(msg);
}
```

| Parameter | Type   | nullable | Description                   |
| :-------- | :----- | :------- | :---------------------------- |
| page      | number | false    | Page number, starting from 1. |
| limit     | number | false    | Number of pages per page.     |
| context   | object | true     | Request context context       |

The context contains the following information:

| Property name    | Type   | Description                                                                                                                                                  |
| :--------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userPoolId       | string | User pool ID                                                                                                                                                 |
| userPoolName     | string | User pool name                                                                                                                                               |
| userPoolMetadata | object | User pool configuration information                                                                                                                          |
| appId            | string | ID of the current user. **You can use appId to distinguish the application source of the user request. **                                                    |
| appName          | string | The name of the current application                                                                                                                          |
| appMetadata      | object | Configuration information of the current application                                                                                                         |
| application      | string | User pool ID                                                                                                                                                 |
| request          | object | Detailed information of the current request, including: <br> `ip`: Client IP <br> `geo`: Client geographic location resolved by IP <br> `body`: Request body |

### Return data convention

#### Get user list successfully

You need to assemble user data in the following format: The returned data needs to be an object, key `totalCount` represents the total number of users, key `list` represents the user list of the current page, such as:

```javascript
async function listUsers(id, updates, context) {
  // Implement your logic here
  return {
    totalCount: 12,
    list: [
      {
        id: 1,
        ...
      }
    ],
  };
}
```

#### Other abnormal errors

When encountering other abnormal errors, you can catch the error and return a more friendly error prompt, for example:

```javascript
async function listUsers(id, updates, context) {
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

#### Disconnect the database connection when the function ends

Please remember to close the connection to the database when the script is executed, such as calling client.end(). For example, you can execute it in try/finally to ensure that it will always be executed:

```javascript
try {
  const result = await client.updates("YOUR updates");
} finally {
  // NOTE: always call `client.end()` here to close the connection to the database
  client.end();
}
```

### Example function

Take `postgres` database as an example, there are the following points:

- You can get the database connection string through `env.DB_CONNECTION_URI` to create a database connection.
- Assemble the user information into the format specified by GenAuth.
- Call `client.end()` in `try/finally` to disconnect the database connection.

```javascript
async function listUsers(page, limit, context) {
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

  const data = await client.query("SELECT COUNT(*) FROM users");
  const totalCount = parseInt(data.rows[0].count);
  const QUERY = `SELECT * from users LIMIT ${limit} OFFSET ${
    (page - 1) * limit
  }`;
  try {
    const result = await client.query(QUERY);
    const list = result.rows.map((user) => {
      return {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        username: user.username,
        photo: user.photo,
        nickname: user.nickname,
        token: user.token,
        emailVerified: user.email_verified,
        phoneVerified: user.phone_verified,
        loginsCount: user.logins_count,
        lastIp: user.last_ip,
        gender: user.gender,
        address: user.address,
        company: user.company,
        birthdate: user.birthdate,
        website: user.website,
      };
    });
    return {
      totalCount,
      list,
    };
  } catch (error) {
    throw new Error(`Execute query failed: ${error.message}`);
  } finally {
    // NOTE: always call `client.end()` here to close the connection to the database
    client.end();
  }
}
```
