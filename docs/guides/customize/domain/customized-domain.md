# Custom Domain Name

<LastUpdated/>

::: hint-info
For information about the {{$localeConfig.brandName}} user pool version that supports the "Custom Domain Name" feature benefit, please check the [Official Website "Pricing" page](https://www.genauth.ai/pricing). If your version does not support this benefit and you want to try it, you can activate the trial period. For an introduction to the trial period and how to activate it, please check [Trial Period](/guides/basics/trial/README.md).
:::

## Why use a custom domain name?

In your {{$localeConfig.brandName}} user pool, the application panel will have a default domain name `default.genauth.ai`. After completing the configuration of the custom domain name, your users can visit `login.your_domain.cn` to always complete the login within the domain name. Custom domains can enhance your brand awareness and allow users to always use the application services provided under your domain name.

## Use the custom domain name function provided by GenAuth ​

Path: **Branding->Custom Domain Name ​**

::: hint-info
For this function, there are several important notes:​

- Version benefits: {{$localeConfig.brandName}} currently supports configuring custom domain names for your application panel in B2B (Premium Edition and above) and B2E (Premium Edition and above) user pool scenarios. If you are a newly registered user, you can also use this function freely during the trial period. For more detailed version benefits, please check the [official website "Price" page](https://www.genauth.ai/pricing).
- After configuring your custom domain name, the default domain name provided by {{$localeConfig.brandName}} will still be effective. When accessing the original domain name, it will also jump to the custom domain name you configured to complete the login. ​.
- At the moment when the custom domain name configuration is completed, if a user is using the original domain name to log in, his login status will not be affected; when he logs in again, he will complete the login under the custom domain name ​.
- When using embedded login ({{$localeConfig.brandName}} Guard) / {{$localeConfig.brandName}} SDK to implement login, you can also use the default domain name provided by {{$localeConfig.brandName}} or configure a custom domain name.
  :::

## Configure your custom domain name

It only takes three steps to configure a custom domain name in {{$localeConfig.brandName}}:

### Step 1: Enter a valid domain name

::: hint-info
Your custom domain name must comply with the domain name standard specifications. For details, please refer to [RFC Domain Name Standard Specifications](https://www.rfc-editor.org/rfc/rfc7230#section-3.2.2).
:::

1. Prepare a domain name. </br>If you don’t have your own domain name, you can go to a domain name registrar platform (such as Alibaba Cloud, Tencent Cloud, Huawei Cloud, etc.) to purchase your own domain name.

2. Filing. </br>According to [Ministry of Industry and Information Technology's "Internet Information Service Management Measures" (State Council Order No. 292)](http://www.scio.gov.cn/wlcb/zcfg/Document/553828/553828.htm), the website cannot point to a server in mainland China to open access before the filing is completed. If your website is hosted on a node server in mainland China, you must apply for Internet Content Provider (ICP) registration. If the website server is not in mainland China, you do not need to apply for registration. For compliance reasons, custom domain names used in {{$localeConfig.brandName}} must first be registered before they can be used.

3. Enter the domain name. </br>After ensuring that the domain name format is correct, legal and effective, fill in your domain name in the input box and click **Next**.

<img src="../images/input-domain-name.png" style="display:block;margin: 0 auto;">

### Step 2: Add a new CNAME to your domain name server

1. After filling in the valid domain name information, {{$localeConfig.brandName}} will generate the corresponding **TXT** and **CNAME** information. You need to go to the DNS service provider to add **TXT** and **CNAME** records, copy and paste the relevant information on this page to your DNS server, and point the domain name to the domain name corresponding to {{$localeConfig.brandName}}.

<img src="../images/cname-record.png" height=700 style="display:block;margin: 0 auto;">

::: img-description Example: Alibaba Cloud Console DNS Configuration Page - CNAME Record ​
:::

::: hint-info
The steps for adding **TXT** and **CNAME** records in different DNS servers are slightly different. You can refer to: [Create a new CNAME pointing to GenAuth in Alibaba Cloud](/guides/customize/domain/create-cname.md).
:::

2. After ensuring that the current information is configured and effective in your domain name server, return to {{$localeConfig.brandName}} **Custom Domain Name->DNS Configuration** and click **Connectivity Test**.

::: hint-info
Generally speaking, it takes a few minutes for a valid **CNAME** information to take effect after it is added to the DNS server. Therefore, if your connectivity test fails, please wait and try again.
:::

3. After the connectivity test is completed, click **Next**.

### Step 3: Fill in valid SSL certificate information ​

For security reasons, {{$localeConfig.brandName}} currently only supports domain names under the `https` protocol. To ensure that the domain name can be accessed normally, you need to find your SSL certificate in the domain name server and download it.

Due to the wide variety of certificate information provided by different service providers, you need to find the following two pieces of information: ​

- Signed certificate ​
- Signed private key ​

<img src="../images/ssl-certificate-config.png" style="display:block;margin: 0 auto;">

1. Upload the signed certificate ​. </br>Certificates are usually files with the extension of `.crt` or `.pem`. Use a text editor to open the certificate file and you can see that the content starts with `BEGIN CERTIFICATE` and ends with `END CERTIFICATE`. ​</br>After confirming the certificate content format, directly copy and paste the certificate content into the signature certificate input box. ​</br>The format of the signature certificate is:

```language
----- BEGIN CERTIFICATE-----
Signature certificate body
----- END CERTIFICATE-----
```

2. Upload the signature private key ​. </br>The private key is usually a file with an extension such as `.key` or `.pem`. Use a text editor to open the certificate file and you can see that the content starts with `BEGIN PRIVATE KEY` and ends with `END PRIVATE KEY`. ​​</br>After confirming the certificate content format, directly copy and paste the certificate content into the signature private key input box. ​​</br>The format of the certificate private key is:

```language
-----BEGIN RSA PRIVATE KEY-----
Signature certificate private key body
----- END RSA PRIVATE KEY-----
```

3. After completing the configuration of the above two parts of information, click **Connectivity Test**. We will verify whether the certificate you configured corresponds to the domain name you configured in the first step, and verify whether this certificate is still valid. ​
   ​
4. After the connectivity test passes, click **Finish**. Your custom domain name will take effect immediately!

<img src="../images/ssl-certificate-valid.png" style="display:block;margin: 0 auto;">

::: hint-info
[Here, Alibaba Cloud is used as an example to explain how to download and use SSL certificates. ](/guides/customize/domain/use-aliyun-ssl-certificate.md)
:::

## Related function configuration ​

Before you start using a custom domain name, you need to make some modifications to the existing function configuration to ensure that the custom domain name you configured is effective for all existing functions. ​
​

### User pool using a unified domain name

In a user pool that does not use a unified domain name, after the custom domain name is configured, it will only take effect on the authentication address of the application panel (i.e. single sign-on SSO):

<img src="../images/non-unified-domainname-userpool.png" style="display:block;margin: 0 auto;">

In a user pool that uses a unified domain name, after the custom domain name is configured, all applications in the user pool (including the application panel, integrated applications, and all self-built applications) use a unified, user pool-level domain name. Therefore, after the custom domain name is configured, it will take effect on all applications in the user pool.

<img src="../images/unified-domainname-userpool.png" style="display:block;margin: 0 auto;">

If you are not sure whether to use a unified domain name user pool, please go to [Learn when to use a unified domain name user pool](/guides/faqs/union-domain.md).

### Email templates involving application domains ​

When you start using a custom domain, the parts of the pre-set email templates involving application domains will be updated to the custom domain name. The scenarios involved in sending emails include: ​

- Welcome email ​
- First email login verification ​
- Console initiated verification ​
- Password expiration reminder ​
- Administrator password reset reminder ​
- Account password change reminder ​
- Send login address to internal administrators ​
- Send login address to tenant administrators ​

### Custom SMS templates

Unfortunately, due to legal regulations, third-party SMS service providers need to first register your custom domain name on the platform when allowing the use of SMS templates. Therefore, we do not support you using custom domain names while using custom SMS services. Such configuration will cause SMS to fail to send normally.

If you are using the built-in SMS service of {{$localeConfig.brandName}}, you do not need to worry about this and can use it normally.
​

### Third-party identity source login (social identity source, enterprise identity source)

If you are using GenAuth's third-party identity source (social identity source/enterprise identity source), in order to ensure that these identity sources can still be used normally under custom domain names, you need to update the login address contained in your application code.​
​

### GenAuth API Calls ​

​
All requests (i.e. getting a token, and actually calling the API) must use the same domain. Tokens obtained with a custom domain must be used under the same domain name. ​

If you use the authentication flow with a custom domain to request an access token to access the Admin API, you must also use the custom domain to call the Admin API endpoints.

```language
POST https://mycustomdomain.cn/oidc/token
... // other parameters
...
audience:https://YOUR_APP.genauth.ai/api/v3/
```

Your access token request should be similar to:

```language
GET https://mycustomdomain.com/api/v3/clients
Headers:
Authorization: Bearer <access_token>
```

### SAML-related function configuration

For integrated applications that have completed SAML configuration in the console and added SAML applications to the application panel, if a custom domain name has been configured, to make it effective, you need to re-download the SAML metadata document\*\* (the newly configured custom domain name will be directly updated to the value of `entityID`) to replace the metadata configured on Alibaba Cloud.

![](../images/download-saml-metadata-file.png)​
::: img-description Download SAML metadata document ​ - Console
:::

![](../images/replace-saml-metadata-file.jpg)​
::: img-description Replace SAML metadata document ​ - Alibaba Cloud Workbench
:::

### Private deployment

Currently, we do not support custom domain names in private scenarios. If you have special needs, please contact your service support team.

## Common operations

### Update SSL certificate

Each SSL certificate has its own expiration date. If you find that the SSL certificate is about to expire, you can click **Edit** to modify it. After updating the certificate information, you need to re-test the connectivity. After it takes effect, your custom domain name can continue to be used normally.

<img src="../images/edit-ssl-certificate.png" style="display:block;margin: 0 auto;">

### Change custom domain name

If you need to change the custom domain name, you need to delete the existing domain name and start over. If the current custom domain name is in effect, then after you delete this custom domain name, users currently accessing under this domain name will not be able to continue to use your application service, and need to close this page and log in again.

<img src="../images/delete-domain.png" style="display:block;margin: 0 auto;">

### Stop using a custom domain name

If you want to restore the default domain name, you need to delete the currently configured domain name. If the current custom domain name is in effect, then when you delete this custom domain name, users currently accessing under this domain name will not be affected, and need to log in again after refreshing the interface.
