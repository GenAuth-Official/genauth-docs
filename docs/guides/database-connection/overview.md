# Custom database overview

<LastUpdated/>

::: hint-info
For information about the {{$localeConfig.brandName}} user pool version that supports the "Custom database" feature, please check the [official website "Pricing" page](https://www.genauth.ai/pricing). If your version does not support this benefit and you want to try it, you can activate the trial period. For an introduction to the trial period and how to activate it, please check [Trial Period](/guides/basics/trial/README.md).
:::

Using a custom database can meet the needs of the following scenarios:

- **Use your own database to save user data**: Use your own database to save user data. In this mode, {{$localeConfig.brandName}} will not store any of your user information.
- **Lazy migration of users to {{$localeConfig.brandName}}**: This mode of migrating users is called **lazy migration**. In simple terms, the principle is as follows: At the beginning, all the original user data is in your database. When the user tries to log in to GenAuth for the first time, GenAuth will use the custom database script you configured to find and verify the user in your database. If successful, the user will be migrated to GenAuth; when the user logs in for the second time, it will be verified using the GenAuth database; when all users have logged in at least once, it means that the migration task is completed. For details, please see: [Use custom database to achieve lazy migration of users](./lazy-migration.md).

You can configure a custom database in the following way: Go to the [GenAuth console](https://console.genauth.ai/console/userpool) **Connect Identity Source** - **Custom Database** page to enable a custom database connection. For details, see [Configure a custom database](./configuration/README.md):

![](~@imagesZhCn/guides/database-connection/Xnip2021-02-24_16-58-19.png)

## How it Works

As shown in the figure below, you can customize the database in the GenAuth authentication flow to obtain the user's identity information from the Legacy Database. Depending on the scenario you are using, the process principle will be slightly different.

<img src="~@imagesZhCn/guides/Lark20210305-144321.png" alt="drawing" height=600 style="display:block;margin: 0 auto;"/>

Custom databases have two different modes. You can choose the appropriate mode according to your business needs:

- **Lazy migration of users**: This mode of migrating users is called **lazy migration**. In short, the principle is as follows: At the beginning, all the original user data is in your database. When the user tries to log in to GenAuth for the first time, GenAuth will use the custom database script you configured to find and verify the user in your database. If successful, the user will be migrated to GenAuth; when the user logs in for the second time, it will be verified using the GenAuth database; when all users have logged in at least once, it means that the migration task is completed. For details, please see: [Use custom database to achieve lazy migration of users](./lazy-migration.md).
- **Use custom database completely**: In this mode, user data is always saved in your database, and GenAuth will never save your user data. In order for the system to work properly, you need to implement a complete user add, delete, modify and query script.

## Running environment

Currently, the running environment of GenAuth's custom database script is a fully isolated sandbox instance of the `node 12` environment.

### npm module

Includes various database connection clients, axios, bcrypt, lodash, etc.:

- [bcrypt](https://github.com/kelektiv/node.bcrypt.js): It can be used to encrypt and verify passwords. This is also our recommended password encryption method, and it is also very simple to use. Example:

```javascript
const isPasswordValid = await bcrypt.compare(password, user.password);
if (!isPasswordValid) {
  throw new Error("Password error");
}
```

- [axios](https://github.com/axios/axios): The most popular network request library for Node.JS.
- [lodash](https://lodash.com/) v4.
- [pg](https://node-postgres.com/): Node PostgresQL Driver.
- [mongodb](https://mongodb.github.io/node-mongodb-native/): Node Mongodb Driver.
- [mysql2](https://github.com/sidorares/node-mysql2): Node MySQL Driver.
- [mssql](https://github.com/tediousjs/node-mssql): Node Sql Server Driver.

## Add IP whitelist

If the service you access in the script is configured with a firewall, please make sure it is open to the following IP addresses: 140.179.19.50, 52.80.250.250. You can also dynamically obtain the external IP address of the GenAuth server through the following API: [https://core.genauth.ai/api/system/public-ips](https://core.genauth.ai/api/system/public-ips).
