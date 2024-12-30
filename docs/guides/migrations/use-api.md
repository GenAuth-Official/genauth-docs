# Import users using SDK

<LastUpdated/>

{{$localeConfig.brandName}} supports SDKs for multiple languages including Java, JavaScript/Node.js, Python, PHP, C#, Go, and Ruby:

- [Java/Kotlin](/reference/sdk-for-java/)
- [JavaScript/Node.js](/reference/sdk-for-node/)
- [Python](/reference/sdk-for-python/)
- [PHP](/reference/sdk-for-php/)
- [C#](/reference/sdk-for-csharp/)
- [Go](/reference/sdk-for-go/)
- [Ruby](/reference/sdk-for-ruby.md)

This article uses Node.js as an example to introduce how to write a script to import users. You can choose the language you are familiar with.

## Step 1: Use a custom password function (optional)

If the password field in your user data table is in plain text, you can skip this step; if it is in cipher text, you need to go to **Basic Configuration** -> **Password Management** -> **Custom Password Encryption Method** to enable the option and write a function for encrypting and verifying passwords. For details, see [Custom Password Encryption Method](/guides/extensibility/custom-password-script.md).

## Step 2: Export your user data

Please export your user data to JSON format, the content is an array, each element is an object, one element corresponds to a user's information, save it as users.json, for example:

```json
[
  {
    "uid": "GEN_AUTH_USER_1",
    "nickname": "zhang",
    "account_id": "zhang",
    "mail": "test1@123.com",
    "password": "$2b$12$nCa3WDbsc3tvM57ifzjwrOAGGuNK7EPV0R17WKcW6f13NZvX97yLe",
    "phone": "13100000001",
    "emailVerified": true,
    "loginsCount": 4
  },
  {
    "uid": "GEN_AUTH_USER_2",
    "nickname": "wang",
    "account_id": "wang",
    "mail": "test2@123.com",
    "password": "$2b$12$HGloOlfz1HzD0v/r5m1r7OCMcx6X85eC5.At3Ckxe.Jn/u/Za/yy2",
    "phone": "13100000002",
    "emailVerified": false,
    "loginsCount": 12
  },
  {
    "uid": "GEN_AUTH_USER_3",
    "nickname": "zhao",
    "account_id": "zhao",
    "mail": "test3@123.com",
    "password": "$2b$12$ia1oUZZFbEUpLvuqUsKideQq9lVkf2kq9vFaTvp7dlfeCx8UlTmDu",
    "phone": "13100000003",
    "emailVerified": true,
    "loginsCount": 0
  }
]
```

## Step 3: Confirm the mapping relationship between user fields

Before you start importing, you need to confirm the mapping relationship between your user structure and the {{$localeConfig.brandName}} user field. You can get all the fields and their definitions of the {{$localeConfig.brandName}} user [here](/guides/user/user-profile.md).

## Step 4: Import user data to GenAuth

If you don't have a NodeJS environment, you need to [install NodeJS](http://nodejs.cn/download/) first.

Create an index.js file.

Paste the following js script into index.js:

```js
const fs = require("fs");
const path = require("path");

const { ManagementClient } = require("authing-js-sdk");
const userPoolId = "xxxxxxxxxxxxxxxxxxx";
const secret = "xxxxxxxxxxxxxxxxxxx";

// If the file is large, it is recommended to read it in batches
// Please save the user information and this file in the same directory. The file content is an array JSON of user data. One element is an information object of one user. Here, read the users.json mentioned above
let users = fs.readFileSync(path.resolve("users.json"), { encoding: "utf8" });
users = JSON.parse(users);
async function main() {
  const managementClient = new ManagementClient({
    userPoolId,
    secret,
  });

  for (let i = 0; i < users.length; i++) {
    let yourUser = users[i];
    try {
      // Complete field alignment here
      await managementClient.users.create(
        {
          nickname: yourUser.nickname,
          password: yourUser.password,
          email: yourUser.mail,
          emailVerified: yourUser.emailVerified,
          phone: yourUser.phone,
          loginsCount: yourUser.loginsCount,
          // Store raw data for future use
          oauth: JSON.stringify(yourUser),
        },
        {
          /**
           * Turn on this switch, the password field will be written directly to the GenAuth database, and GenAuth will not encrypt this field again
           * If your password is not stored in plain text, you should keep it turned on and write a password function calculation
           */
          keepPassword: true,
        }
      );
    } catch (err) {
      console.log(err);
      // Write users who failed to import to a file
      fs.writeFileSync(
        path.resolve("users_failed.json"),
        JSON.stringify(yourUser) + "\n",
        {
          flag: "a",
        }
      );
    }
  }
}

main();
```

After copying, please **align the fields** and then execute

```bash
$ npm install authing-js-sdk
$ node index.js
```

The code can be viewed on GitHub: [users-migration](https://github.com/authing/authing-js-sdk/tree/master-backups-20220901)

## Get help

Have a problem? [Contact us](https://forum.genauth.ai/), Feel free to talk.
