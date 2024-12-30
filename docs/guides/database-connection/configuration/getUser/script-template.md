This script will be executed in the following scenarios: when a user tries to register, if the database script you configured finds the user record, the registration request will be rejected; when the OIDC protocol is used to exchange user information; when viewing user information through the console or API, etc. This script is required in both lazy migration of users and fully using a custom database mode.

### Function definition

The `getUser` function is defined as follows:

```javascript
async function getUser(query, context) {
  // The first argument query contains following contents:
  // query.id
  // query.email
  // query.username
  // query.phone

  // The Second argument context contains information about the authentication context.
  // see http://core.genauth.ai/connections/custom-db/config-custom-db-connection.html for more information.

  // This script should retrieve a user profile from your existing database,
  // without authenticating the user.
  // It is used to check if a user exists before executing flows that do not
  // require authentication (signup and password reset).
  //
  // There are three ways this script can finish:
  // 1. A user was successfully found. The profile should be in the following
  // format: https://docs.authing.co/user/profile.html .
  //    return profile
  // 2. A user was not found
  //     return null
  // 3. Something went wrong while trying to reach your database:
  //     throw new Error("my error message")

  const msg =
    "Please implement the Find User script for this database connection ";
  throw new Error(msg);
}
```

| Parameter      | Type   | nullable | Description                                 |
| :------------- | :----- | :------- | :------------------------------------------ |
| query          | object | false    | Query conditions                            |
| query.id       | string | true     | User ID. This parameter may be empty.       |
| query.email    | string | true     | Email address. This parameter may be empty. |
| query.phone    | string | true     | Phone number. This parameter may be empty.  |
| query.username | string | true     | User name. This parameter may be empty.     |
| context        | object | true     | Request context context                     |

The context contains the following information:

| Attribute name   | Type   | Description                                                                                                                                                  |
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

#### User exists

When the user exists, you need to return the user information of the user to GenAuth. For the detailed format of the user information, please refer to: [User Profile Detailed Fields](/guides/user/user-profile.md) . Example:

```javascript
async function getUser(query, context) {
  // Implement your logic here
  return {
    id: 1, // must not empty
    email: "test@example.com",
    emailVerified: true,
    nickname: "Nick",
    photo: "",
  };
}
```

#### User does not exist

When the user does not exist, you need to return `null`, please do not throw an error.

#### Other abnormal errors

When encountering other abnormal errors, you can catch the error and return a more friendly error prompt, for example:

```javascript
async function getUser(query, context) {
  try {
    // Implement your logic here
  } catch (error) {
    throw new Error("Something went wrong ...");
  }
}
```

## Best Practices

### Provide friendly error prompts

When encountering an unknown error, we recommend throwing a standard `Error` object, which GenAuth will capture and eventually return to the end user. For example: `throw new Error("My nice error message")`, you can see the error log in the **Log History** of the custom database.

![](https://cdn.genauth.ai/img/20210111163154.png)

### Disconnect the database connection at the end of the function

Please remember to close the connection to the database when the script is executed, such as calling client.end(). For example, you can execute it in try/finally to ensure that it will always be executed:

```javascript
try {
  const result = await client.query("YOUR QUERY");
} finally {
  // NOTE: always call `client.end()` here to close the connection to the database
  client.end();
}
```

### Example function

Take the `postgres` database as an example, there are the following points:

- You can get the database connection string through `env.DB_CONNECTION_URI` to create a database connection.
- Dynamically create a query statement based on the query conditions passed in `query` (`query.id`, `query.email`, `query.username`, `query.phone` may be empty, but not all empty at the same time).
- If the user does not exist, return `null`.
- Finally, return the user information in the specified format. For the detailed format of the user information, please see: [User Profile Detailed Fields](/guides/user/user-profile.md).
- Call `client.end()` in `try/finally` to disconnect the database connection.

```javascript
async function getUser(query, context) {
  // The first argument query contains following contents:
  // query.id
  // query.email
  // query.username
  // query.phone

  const { id, email, username, phone } = query;

  // The Second argument context contains information about the authentication context.
  // see http://core.genauth.ai/connections/custom-db/config-custom-db-connection.html for more information.

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

  // Building query parameters
  const queries = [];
  const parameters = [];
  let index = 1;
  if (id) {
    queries.push(`id = $${index}`);
    parameters.push(id);
    index += 1;
  }
  if (email) {
    queries.push(`email = $${index}`);
    parameters.push(email);
    index += 1;
  }
  if (phone) {
    queries.push(`phone = $${index}`);
    parameters.push(phone);
    index += 1;
  }
  if (username) {
    queries.push(`username = $${index}`);
    parameters.push(username);
    index += 1;
  }

  const QUERY = `SELECT * FROM users WHERE ${queries.join(" OR ")}`;

  try {
    const result = await client.query(QUERY, parameters);
    if (result.rows.length === 0) {
      return null;
    }
    const user = result.rows[0];
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
  } catch (error) {
    throw new Error(`Execute query failed: ${error.message}`);
  } finally {
    // NOTE: always call `client.end()` here to close the connection to the database
    client.end();
  }
}
```
