This script will be called when the administrator uses the console or API to fuzzy search for users.

### Function definition

The `searchUser` function is defined as follows:

```javascript
async function searchUser(keyword, context) {
  // The first argument keyword is the keywork used to Search Users

  // The Second argument context contains information about the authentication context.
  // see http://docs.genauth.ai/connections/custom-db/config-custom-db-connection.html for more information.

  // This script should retrieve a user profile from your existing database,
  // without authenticating the user.
  // It is used to check if a user exists before executing flows that do not
  // require authentication (signup and password reset).
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
    "Please implement the Search User script for this database connection ";
  throw new Error(msg);
}
```

| Parameter | Type   | nullable | Description          |
| :-------- | :----- | :------- | :------------------- |
| keyword   | string | false    | Fuzzy search keyword |

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

#### Successfully obtain user list

When a user is saved, you need to return the user's user information to GenAuth. For the detailed format of the user information, please refer to: [User Profile Detailed Fields](/guides/user/user-profile.md) . Example:

```javascript
async function searchUser(query, context) {
  // Implement your logic here
  return {
    totalCount: 10,
    list: [
      {
        id: 1, // must not empty
        email: "test@example.com",
        emailVerified: true,
        nickname: "Nick",
        photo: "",
      },
    ],
  };
}
```

#### Other abnormal errors

When encountering other abnormal errors, you can catch the error and return a more friendly error prompt, for example:

```javascript
async function searchUser(keyword, context) {
  try {
    // Implement your logic here
  } catch (error) {
    throw new Error("Something went wrong ...");
  }
}
```

### Best Practices

#### Provide friendly error prompts

When encountering unknown errors, we recommend throwing a standard `Error` object, which GenAuth will catch and eventually return to the end user. For example: `throw new Error("My nice error message")`, you can see the error log in the **log history** of the custom database.

![](https://cdn.genauth.ai/img/20210111163154.png)

#### Disconnect the database connection at the end of the function

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

Take the `mongodb` database as an example, there are the following points:

- You can get the database connection string through `env.DB_CONNECTION_URI` to create a database connection.
- Search for users based on the fuzzy search keyword passed in `keyword`.
- If the user does not exist, return `null`.
- Finally, return the user information in the specified format. For the detailed format of user information, please refer to: [User Profile Detailed Fields](/guides/user/user-profile.md).
- Call `client.end()` in `try/finally` to disconnect the database connection.

```javascript
async function searchUser(keyword, context) {
  // This example uses the "mongodb" v3.6 library
  // more info here: http://mongodb.github.io/node-mongodb-native/contents.html

  const MongoClient = require("mongodb").MongoClient;
  const client = await MongoClient.connect(env.DB_CONNECTION_URI, {
    useNewUrlParser: true,
  });

  if (!client) {
    throw new Error("Failed to connect to the database");
  }

  const queries = [
    {
      email: {
        $regex: `.*${keyword}.*`,
      },
    },
    {
      name: {
        $regex: `.*${keyword}.*`,
      },
    },
    {
      nickname: {
        $regex: `.*${keyword}.*`,
      },
    },
  ];

  try {
    const db = client.db();
    const collection = db.collection("Users");
    let list = await collection
      .find({
        $or: queries,
      })
      .toArray();
    list = list.map((user) => {
      return {
        id: user._id.toString(),
        blocked: user.blocked,
        email: user.email,
        emailVerified: user.email_verified,
        name: user.name,
        nickname: user.nickname,
        address: user.address,
        company: user.company,
        country: user.country,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
      };
    });
    return {
      list,
      totalCount: list.length,
    };
  } catch (error) {
    throw new Error(`Execute query failed: ${error.message}`);
  } finally {
    client.close();
  }
}
```
