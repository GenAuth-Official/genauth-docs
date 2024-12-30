# Custom Password Encryption Method

<LastUpdated/>

If you want to customize the password encryption function, please upload the function snippet here (currently only supports Node.js). You can [click here to download](https://console.genauth.ai/api/password/template/download) the function template (GenAuth does not store users' password plaintext).

This feature is suitable for the following scenarios:

1. You have migrated all users to GenAuth but don't want them to change their passwords;
2. You don't trust {{$localeConfig.brandName}}'s password encryption algorithm and want to use your own;

This document explains how to configure the password encryption function.

## Configuration Steps

Path: **Security Settings->Password Security->Custom Password Encryption Method**

As shown below:

![](~@imagesZhCn/guides/security/1616578690192.png)

::: img-description
Custom Password Encryption Method
:::

### Download Template

Click [Download Template](https://console.genauth.ai/console/62c6aac0e65730661e1c5f17/safety-management/password?password_policy=custom_password) on the page to download the Node.js code template. The template code is shown below:

```js
var getRawBody = require("raw-body");

const encryptPassword = (password) => {
  // Write the password encryption function here

  return password;
};

/**
 *
 * @param {String} password plaintext password
 * @param {String} encryptedPassword encrypted password
 */
const comparePassword = (password, encryptedPassword) => {
  // Write the password validation function here

  return password === encryptedPassword;
};

module.exports.encrypt = function (request, response, context) {
  // get request body
  getRawBody(request, function (err, body) {
    const queries = request.queries;
    const password = queries.password;

    if (!password) {
      response.setStatusCode(500);
      response.setHeader("content-type", "application/json");
      response.send(
        JSON.stringify(
          {
            message: "Please provide password via url query",
          },
          null,
          4
        )
      );
    }

    const respBody = {
      password: encryptPassword(password), // Encrypt password here
    };

    response.setStatusCode(200);
    response.setHeader("content-type", "application/json");
    response.send(JSON.stringify(respBody, null, 4));
  });
};

module.exports.validate = function (request, response, context) {
  // get request body
  getRawBody(request, function (err, body) {
    const queries = request.queries;
    const password = queries.password;
    const encryptedPassword = queries.encryptedPassword;

    if (!password) {
      response.setStatusCode(500);
      response.setHeader("content-type", "application/json");
      response.send(
        JSON.stringify(
          {
            message: "Please provide password via url query",
          },
          null,
          4
        )
      );
    }

    const respBody = {
      isValid: comparePassword(password, encryptedPassword), // Validate password here
    };

    response.setStatusCode(200);
    response.setHeader("content-type", "application/json");
    response.send(JSON.stringify(respBody, null, 4));
  });
};
```

### 编写代码

You need to write the corresponding password encryption method in the `encryptPassword` function, and write the corresponding password validation method in the `vlidatePassword` function.

If developers need to import third-party NPM packages, please install them directly using NPM.

::: hint-info
NPM is the package management tool for the Node.js ecosystem.
:::

Here is a code example of importing the `bcryptjs` package:

```haskell
$ npm install bcryptjs
```

After installation is complete, a node_modules folder will appear in the directory, then write the code:

```js
var getRawBody = require("raw-body");

const encryptPassword = (password) => {
  // Implement your login here.
  // Your can use bcrypt for example
  // more info here: https://github.com/kelektiv/node.bcrypt.js
  var bcryptjs = require("bcryptjs");
  var genSaltSync = bcryptjs.genSaltSync();
  return bcryptjs.hashSync(password, genSaltSync);
};

const vlidatePassword = (plainText, encrypted) => {
  // plainText is the plainText password use provide to be validate.
  // encrypted is user's password encryped in database.

  // Implement your login here.
  // Your can use bcrypt for example
  // more info here: https://github.com/kelektiv/node.bcrypt.js
  var bcryptjs = require("bcryptjs");
  return bcryptjs.compareSync(password, encryptedPassword);
};
```

### Upload Function to Server

::: hint-info
{{$localeConfig.brandName}} only supports code packages in .js format or .zip format.
:::

If you haven't imported any packages, you can directly upload the .js format template file; if you have imported packages, please package them together with node_modules into .zip format and upload in the {{$localeConfig.brandName}} console.

![](~@imagesZhCn/guides/migrations/1616579059776.jpg)

### Test Password Encryption Function

After successful upload, developers can test the password encryption effect. As shown below, enter the original password in the input box and click "Encryption Test" to see the encrypted password (if no encryption function is uploaded, {{$localeConfig.brandName}}'s default password encryption result will be displayed).

![](~@imagesZhCn/guides/migrations/1616579347869.jpg)

[Sample Code](https://files.authing.co/docs/project.zip)

## Notes

::: hint-info
The password encryption function takes effect immediately after uploading and will affect existing users. It is recommended to use this feature in a completely new user pool.

If you need to modify the password encryption function in an old user pool, please contact <a href="mailto:csm@genauth.ai">GenAuth After-sales Service</a>.
:::
