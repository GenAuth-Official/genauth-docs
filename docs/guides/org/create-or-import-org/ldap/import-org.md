If you want to access the LDAP service, please follow the steps below to complete the LDAP configuration.

#### Add LDAP service

![](https://cdn.genauth.ai/blog/20201107163714.png)
::: img-description
Add LDAP service
:::

![](https://cdn.genauth.ai/blog/20201107163722.png)
::: img-description
Add LDAP service page
:::

#### Fill in relevant information

Fill in the relevant information in the pop-up dialog box. If you don’t know how to fill in, you can click "Click here" in the upper right corner to fill in the test configuration information.

![](https://cdn.genauth.ai/blog/20201107163734.png)
::: img-description
LDAP service information test
:::

![](https://cdn.genauth.ai/blog/20201107163752.png)
::: img-description
Use the LDAP service information we provide
:::

#### Parameter explanation

1. `LDAP alias`, required, custom LDAP service name
2. `LDAP link`, required, address of LDAP server, such as: ldap://dc.fabrikam.com
3. `Base DN`, required, user name used to connect to LDAP, this user name will be used to test the connection result and search for users or user groups
4. `Password`, required, password used to connect to LDAP, the password will be encrypted and stored in the database
5. `Binding endpoint`, required, defines which directory to start searching from, such as: dc=fabrikam,dc=local
6. `Query condition`, required, if it is mail here, it means that the query of user information is through the mailbox information. Note that the field information corresponds to the field where the LDAP database stores data. If the field storing the user's mailbox information is email, it needs to be changed to email here.

#### Connectivity test

The connectivity test can help you check whether the parameters are filled in correctly. If you fill in the "Test Configuration", then click "Connectivity Test" on the page and you should see the following results:

![](https://cdn.genauth.ai/blog/20201107165043.png)
::: img-description
Connectivity test
:::

You can use this test to test different `Base DN` and `Password`.

#### Verify user

Verifying the user can help you check whether the query condition is correct. If the query condition is incorrect, an error that the user cannot be found will be returned.

The test username we gave is `admin`, the password is `admin`, and the query condition is `cn`, which is the default account and password information provided by `openLDAP`. After clicking "Verify User", you should see the following result:

![](https://cdn.genauth.ai/blog/20201107163802.png)
::: img-description
Verify User
:::

If you change the query condition from `cn` to `cnn`, the following result should be returned at this time:

![](https://cdn.genauth.ai/blog/20201107163810.png)
::: img-description
Query Condition Test
:::

Users can use this method to complete the debugging of LDAP by modifying `binding endpoint` and `query condition`.

After the configuration is completed, you can log in with the LDAP account by accessing any OAuth application or OIDC application.

::: hint-info
We have prepared an [LDAP test application](https://ldap-test.genauth.ai) to let you experience the whole process of logging in with LDAP:

Test account: admin

Test password: admin
:::
