This script will be executed when the user tries to log in. If the user is not synchronized to the GenAuth database, the user account and password will be checked according to the script you filled in. This script is required in both lazy migration of users and fully using a custom database mode.

### Function definition

The `login` function is defined as follows:

```javascript
async function login(query, password, context) {
  // The first argument query contains following contents:
  // query.email
  // query.username
  // query.phone

  // The second argument password is user's password in plain text format.

  // The Second argument context contains information about the authentication context.
  // see http://core.genauth.ai/connections/custom-db/config-custom-db-connection.html for more information.

  // This script should retrieve a user profile from your existing database,
  // without authenticating the user.

  // It is used to check if a user exists before executing flows that do not
  // require authentication (signup and password reset).
  //
  // There are three ways this script can finish:
  // 1. A user was successfully found, and password is valid, The profile should be in the following
  // format: https://docs.authing.co/user/profile.html .
  //    return profile
  // 2. A user was not found
  //    throw new Error('User not exists!');
  // 3. A user was found, but password is not valid
  //    throw new Error('Password is not valid!');
  // 4. Something went wrong while trying to reach your database:
  //    throw new Error("my error message")

  const msg = "Please implement the Login script for this database connection";
  throw new Error(msg);
}
```

| Parameter      | Type   | nullable | Description                                                                                                       |
| :------------- | :----- | :------- | :---------------------------------------------------------------------------------------------------------------- |
| query          | object | false    | Query conditions                                                                                                  |
| query.email    | string | true     | Email address. This parameter is not empty when the user logs in using an email address.                          |
| query.phone    | string | true     | Phone number. This parameter is not empty when the user logs in using a phone number.                             |
| query.username | string | true     | Username. This parameter is not empty when the user logs in using a username.                                     |
| password       | string | false    | Plain text password. It is strongly recommended to use `bcrypt` to encrypt user passwords. See below for details. |
| context        | object | true     | Request context context                                                                                           |

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

#### User exists and password is correct

When the user exists and the password is correct, you need to return the user's user information to GenAuth. For the detailed format of the user information, please refer to: [User Profile Detailed Fields](/guides/user/user-profile.md) . Example:

```javascript
async function login(query, password, context) {
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

When the user does not exist, you need to throw an error directly (the error message can be freely defined), for example:

```javascript
async function login(query, password, context) {
  // Implement your logic here
  throw new Error("User not exists");
}
```

#### User exists but password is incorrect

When the user exists but the password is incorrect, you need to throw an error directly (the error message can be freely defined), for example:

```javascript
async function login(query, password, context) {
  // Implement your logic here
  throw new Error("User not exists");
}
```

#### Other abnormal errors

When encountering other abnormal errors, you can catch the error and return a more friendly error prompt, for example:

```javascript
async function login(query, password, context) {
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

#### Encrypt passwords with `bcrypt`

We recommend using `bcrypt` to encrypt and save user data, such as:

```javascript
const bcrypt = require("bcrypt");
const hashedPassword = await bcrypt.hash("passw0rd", await bcrypt.genSalt(10));
```

Verify that the password is correct:

```javascript
const bcrypt = require("bcrypt");
const valid = await bcrypt.compare("passw0rd", user.password);
```

#### Disconnect database connection at the end of the function

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

Take `postgres` database as an example, there are the following points:

- You can get the database connection string through `env.DB_CONNECTION_URI` to create a database connection.
- Dynamically create a query statement based on the query conditions passed in `query` (`query.email`, `query.username`, `query.phone` may all be empty, but not empty at the same time).
- If the user does not exist, throw an exception directly, and the error message is `User not exists!`.
- If the user exists but the password is incorrect, throw an exception directly, and the error message is `Password is not valid!`.
- Finally, return the user information in the specified format. For the detailed format of the user information, please see: [User Profile Detailed Fields](/guides/user/user-profile.md).
- Call `client.end()` in `try/finally` to disconnect the database connection.

```javascript
async function login(query, password, context) {
  // The first argument query contains following contents:
  // query.email
  // query.username
  // query.phone
  const { email, username, phone } = query;

  // The second argument password is user's password in plain text format.

  // The last argument context contains information about the authentication context.
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

  // Use bcrypt to validate password
  // more info here: https://github.com/kelektiv/node.bcrypt.js
  const bcrypt = require("bcrypt");

  // Building query parameters
  const queries = [];
  const parameters = [];
  let index = 1;
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
      throw new Error("User not exists!");
    }
    const user = result.rows[0];

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Password is not valid!");
    }

    return {
      id: user.id,
      email: user.email,
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
