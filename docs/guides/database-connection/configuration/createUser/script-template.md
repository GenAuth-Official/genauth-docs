This script will be executed when a user registers or creates a user using the API and console. You need to save the user information to your own database. This script is only required when using a completely custom database mode.

### Function definition

The `createUser` function is defined as follows:

```javascript
async function createUser(userinfo, context) {
  // This script should create a user entry in your existing database. It will
  // be executed when a user attempts to sign up, or when a user is created
  // through the Auth0 dashboard or API.
  // When this script has finished executing, the Login script will be
  // executed immediately afterwards, to verify that the user was created
  // successfully.

  // The first argument userinfo contains following properties:
  // * email: the user's email
  // * username: the user's username
  // * phone: the user's phone number
  // * password: the user's password in plain text format
  // * nickname: the user's nickname
  // * photo: the user's photo

  // The Second argument context contains information about the authentication context.
  // see http://core.genauth.ai/connections/custom-db/config-custom-db-connection.html for more information.

  //
  // There are three ways this script can finish:
  // 1. A user was successfully created
  // format: https://docs.authing.co/user/profile.html .
  //    return null
  // 2. This user already exists in your database
  //    throw new Error("user allready exists")
  // 3. Something went wrong while trying to reach your database:
  //     throw new Error("my error message")

  const msg =
    "Please implement the Find User script for this database connection ";
  throw new Error(msg);
}
```

| Parameter         | Type   | nullable | Description                                                                                                                                    |
| :---------------- | :----- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| userinfo          | object | false    | Query conditions                                                                                                                               |
| userinfo.email    | string | true     | Email address. This parameter may be empty.                                                                                                    |
| userinfo.phone    | string | true     | Phone number. This parameter may be empty.                                                                                                     |
| userinfo.username | string | true     | Username. This parameter may be empty.                                                                                                         |
| userinfo.password | string | true     | Plain text password. This parameter may be empty. It is strongly recommended to use `bcrypt` to encrypt user passwords. See below for details. |
| userinfo.nickname | string | true     | User nickname. This parameter may be empty.                                                                                                    |
| userinfo.photo    | string | true     | User photo. This parameter may be empty.                                                                                                       |
| context           | object | true     | Request context context                                                                                                                        |

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

#### Successful creation

When the user is successfully created, you need to return the user information of the user to GenAuth. For the detailed format of the user information, please refer to: [User Profile Detailed Fields](/guides/user/user-profile.md) . Example:

```javascript
async function createUser(userinfo, context) {
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

#### User already exists

When the user already exists, you need to throw an error directly (the error message can be freely defined), for example:

```javascript
async function createUser(query, password, context) {
  // Implement your logic here
  throw new Error("User allready exists!");
}
```

#### Other abnormal errors

When encountering other abnormal errors, you can catch the error and return a more friendly error prompt, for example:

```javascript
async function createUser(userinfo, context) {
  try {
    // Implement your logic here
  } catch (error) {
    throw new Error("Something went wrong ...");
  }
}
```

### Best Practices

#### Provide Friendly Error Tips

When encountering an unknown error, we recommend throwing a standard `Error` object. GenAuth will capture this error and eventually return it to the end user. For example: `throw new Error("My nice error message")`, you can see the error log in the **Log History** of the custom database.

![](https://cdn.genauth.ai/img/20210111163154.png)

#### Disconnect the database connection at the end of the function

Please remember to close the connection to the database when the script is executed, such as calling client.end(). For example, you can execute it in try/finally to ensure that it will always be executed:

```javascript
try {
  const result = await client.userinfo("YOUR userinfo");
} finally {
  // NOTE: always call `client.end()` here to close the connection to the database
  client.end();
}
```

### Example function

Take the `postgres` database as an example, there are the following points:

- You can get the database connection string through `env.DB_CONNECTION_URI` to create a database connection.
- Dynamically create query statements based on the query conditions passed in `userinfo` (`userinfo.id`, `userinfo.email`, `userinfo.username`, `userinfo.phone` may be empty, but not all empty at the same time).
- First check whether the user exists. If the user exists, throw an exception with the error message: `User allready exists!`.
- Finally, return the user information in the specified format. For the detailed format of the user information, please see: [User Profile Detailed Fields](/guides/user/user-profile.md).
- Call `client.end()` in `try/finally` to disconnect the database.

```javascript
async function createUser(userinfo, context) {
  // get exist user from database
  const queryUser = async (client, query) => {
    const { email, phone, username } = query;
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

    const QUERY = `SELECT * FROM users WHERE ${queries.join(" OR ")} LIMIT 1`;
    const result = await client.query(QUERY, parameters);
    return result;
  };

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

  try {
    const findResult = await queryUser(client, {
      email: userinfo.email,
      phone: userinfo.phone,
      username: userinfo.username,
    });
    if (findResult.rows.length > 0) {
      throw new Error("User allready exists!");
    }

    // Use bcrypt to encrypt password
    // more info here: https://github.com/kelektiv/node.bcrypt.js
    const bcrypt = require("bcrypt");
    let hashedPassword = null;

    // Phone Code Login may not have a password
    if (userinfo.password) {
      hashedPassword = await bcrypt.hash(
        userinfo.password,
        await bcrypt.genSalt(10)
      );
    }
    const insertResult = await client.query(
      `INSERT INTO users(email, username, phone, password, nickname, photo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [
        userinfo.email,
        userinfo.username,
        userinfo.phone,
        hashedPassword,
        userinfo.nickname,
        userinfo.photo,
      ]
    );
    const user = insertResult.rows[0];
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
