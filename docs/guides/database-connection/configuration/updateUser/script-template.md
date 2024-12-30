This script will be executed when the administrator modifies the user's profile or the user modifies the user's profile himself. This script is only needed when using a completely custom database mode.

### Function definition

The `updateUser` function is defined as follows:

```javascript
async function updateUser(id, updates, context) {
  // This script should update a user entry in your existing database. It will
  // be executed when a user attempts to change profile or when a user is updated
  // through the Auth0 dashboard or API.

  // The first argument `id` is the id of user.

  // The second argument `updates` contains following properties:
  // * email: the user's email
  // * username: the user's username
  // * phone: the user's phone number
  // * password: the user's password in plain text format
  // * nickname: the user's nickname
  // * photo: the user's photo
  // * and many other fields

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

| Parameter             | Type            | nullable | Description                                                                                                                                    |
| :-------------------- | :-------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| id                    | string / number | false    | User ID                                                                                                                                        |
| updates               | object          | false    | User fields to be modified                                                                                                                     |
| updates.email         | string          | true     | Email address. This parameter may be empty.                                                                                                    |
| updates.phone         | string          | true     | Phone number. This parameter may be empty.                                                                                                     |
| updates.username      | string          | true     | User name. This parameter may be empty.                                                                                                        |
| updates.password      | string          | true     | Plain text password. This parameter may be empty. It is strongly recommended to use `bcrypt` to encrypt user passwords. See below for details. |
| updates.nickname      | string          | true     | User nickname. This parameter may be empty.                                                                                                    |
| updates.photo         | string          | true     | User avatar. This parameter may be empty.                                                                                                      |
| updates.token         | string          | true     | User token. This parameter may be empty.                                                                                                       |
| updates.emailVerified | bool            | true     | Whether the email address is verified. This parameter may be empty.                                                                            |
| updates.phoneVerified | bool            | true     | Whether the phone number is verified. This parameter may be empty.                                                                             |
| updates.loginsCount   | number          | true     | Number of user logins. This parameter may be empty.                                                                                            |
| updates.xxxx          | any             | true     | For more user fields, please refer to [User Profile Detailed Fields](/guides/user/user-profile.md) for detailed format of user information     |
| context               | object          | true     | Request context context                                                                                                                        |

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

#### Successful modification

When the user profile is successfully modified, you need to return the latest user information of the user to GenAuth. For the detailed format of the user information, please refer to: [User Profile Detailed Fields](/guides/user/user-profile.md) . Example:

```javascript
async function updateUser(id, updates, context) {
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
async function updateUser(id, updates, context) {
  // Implement your logic here
  throw new Error("User not exists!");
}
```

#### Other abnormal errors

When encountering other abnormal errors, you can catch the error and return a more friendly error prompt, for example:

```javascript
async function updateUser(id, updates, context) {
  try {
    // Implement your logic here
  } catch (error) {
    throw new Error("Something went wrong ...");
  }
}
```

## Best Practices

### Provide Friendly Error Messages

When encountering unknown errors, we recommend throwing a standard `Error` object, which GenAuth will capture and eventually return to the end user. For example: `throw new Error("My nice error message")`, you can see the error log in the **log history** of the custom database.

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

### Example function

Taking `postgres` database as an example, there are several points to explain:

- You can get the database connection string through `env.DB_CONNECTION_URI` to create a database connection.
- Dynamically create `update` `SQL` statements according to the query conditions passed in `updates` (`updates.id`, `updates.email`, `updates.username`, `updates.phone` may be empty, but not empty at the same time).
- If `insertResult.rowCount` is 0, it means that the user does not exist, and an exception is thrown with the error message: `User not exists!`.
- Finally, the user information in the specified format is returned. For the detailed format of the user information, please see: [User Profile Detailed Fields](/guides/user/user-profile.md).
- Call `client.end()` in `try/finally` to disconnect the database connection.

```javascript
async function updateUser(id, updates, context) {
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

  // GenAuth user attribute to database column
  const userColumnMap = {
    id: "id",
    email: "email",
    name: "name",
    username: "username",
    phone: "phone",
    nickname: "nickname",
    gender: "gender",
    address: "address",
    company: "company",
    birthdate: "birthdate",
    website: "website",
    token: "token",
    password: "password",
    photo: "photo",
    emailVerified: "email_verified",
    phoneVerified: "phone_verified",
    loginsCount: "logins_count",
    lastIp: "last_ip",
  };

  // Make sure to delete cols not exists in your table,
  // or sql might fail.
  for (const key in updates) {
    if (userColumnMap[key] === undefined) {
      delete updates[key];
    }
  }

  // If nothing interested, just return
  if (Object.keys(updates).length === 0) {
    return null;
  }

  function generateQuery(id, cols) {
    const _ = require("lodash");
    // Setup static beginning of query
    var query = ["UPDATE users"];
    query.push("SET");

    // Create another array storing each set command
    // and assigning a number value for parameterized query
    var set = [];
    Object.keys(cols)
      .filter((col) => !!userColumnMap[col])
      .forEach(function (key, i) {
        set.push(userColumnMap[key] + " = ($" + (i + 1) + ")");
      });
    query.push(set.join(", "));

    // Add the WHERE statement to look up by id
    query.push("WHERE id = " + id);

    // Return all fields
    query.push("RETURNING *");

    // Return a complete query string
    return query.join(" ");
  }

  // Use bcrypt to encrypt password
  // more info here: https://github.com/kelektiv/node.bcrypt.js
  const bcrypt = require("bcrypt");

  try {
    const query = generateQuery(id, updates);
    const insertResult = await client.query(
      query,
      Object.keys(updates)
        .filter((col) => !!userColumnMap[col])
        .map((key) => {
          const val = updates[key];
          if (key === "password") {
            // If key is password, use bcrypt to encrypt it
            return bcrypt.hashSync(val, bcrypt.genSaltSync(10));
          }
          return val;
        })
    );
    if (insertResult.rowCount === 0) {
      throw new Error("User not exists!");
    }
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
