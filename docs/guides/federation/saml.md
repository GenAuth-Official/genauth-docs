# Become a SAML2 Identity Source

<LastUpdated/>

This article describes how to enable a SAML2 identity provider in GenAuth to provide **identity assertions** to other service providers. GenAuth can be integrated with third-party applications through the SAML2 protocol. You can learn more about the SAML2 protocol [here](/concepts/saml/saml-overview.md).

## Create an application

In order to enable your application to have identity authentication capabilities, you need to create an application in GenAuth. It is recommended to fill in the name of your actual application project. Go to **Console** > **Application** > **Application List** and click Create Application:

![](~@imagesZhCn/guides/federation/oidc/1-1.png)

Fill in your **Application Name**, for example: Alibaba Cloud Test, and fill in an **Authentication Address** at will, and finally click the "Create" button:

![](~@imagesZhCn/guides/federation/saml/1-1.png)

## Configure SAML2 Identity Provider

In order to use your organization and users for SAML2 identity authentication, you need to enable the SAML2 identity provider of the application and configure it. Find your application and go to the "Enable Identity Provider" tab.

![](~@imagesZhCn/guides/federation/oauth/1-1.png)

In the "SAML2 Identity Provider" card, turn on the Enable SAML2 Provider switch and fill in the **Default ACS address** and **Settings** information. Then click Save. The specific ACS address will be provided by the SAML SP, and the specific settings need to be configured according to the requirements of the SAML SP.

::: hint-info
When you create a SAML2 IdP in GenAuth, some SPs may ask you to upload the IdP metadata document before providing you with the corresponding configuration information. At this time, it is recommended to fill in an **arbitrary** ACS address and default settings information. Then **download** the IdP **metadata document** of GenAuth and upload it to the SP. Then **modify the ACS address and settings information** to the correct content obtained from the SP.
:::

![](~@imagesZhCn/guides/federation/saml/1-3.png)

**Default ACS Address**: SAML2 Identity Provider will send SAML Response to the consumption address specified in SAML Request by default (return to where it came from, GenAuth will send SAML identity assertion to the address specified by `AssertionConsumerServiceURL` parameter in SAML Request by default). If the consumption address is not specified in SAML Request, GenAuth will send SAML Response to the address filled in here. You can **get** this address from SP and fill it in here. If you can't find it at SP, you might as well fill in one at random, but **some SPs will not specify the consumption address in SAML Request**, in this case **you must fill in the correct address** here.

**Settings**: Advanced configuration of SAML2 Identity Provider, you need to fill in a **JSON format** object, containing the following:

| key                     | type    | description                                                                                                                                                                                                                                                                                                                                       | default                                                                                                                                                                                                                                                                                |
| ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| samlRequestSigningCert  | string  | SAML Request signing certificate, you can get this certificate content from SP. After filling in this field, it will be considered that the SAML Request is signed and check whether the signature is legal. If **SP does not sign the request**, GenAuth will **reject the SAML Request and cause authentication failure**.                      | -                                                                                                                                                                                                                                                                                      |
| signResponse            | boolean | Whether to sign the SAML Response                                                                                                                                                                                                                                                                                                                 | false                                                                                                                                                                                                                                                                                  |
| nameIdentifierFormat    | string  | The unique identifier format in the SAML Response.                                                                                                                                                                                                                                                                                                | urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified                                                                                                                                                                                                                                  |
| lifetimeInSeconds       | number  | The expiration time of the SAML identity assertion, in seconds.                                                                                                                                                                                                                                                                                   | 3600                                                                                                                                                                                                                                                                                   |
| authnContextClassRef    | string  | SAML authentication context.                                                                                                                                                                                                                                                                                                                      | urn:oasis:names:tc:SAML:2.0:ac:classes:unspecified                                                                                                                                                                                                                                     |
| signatureAlgorithm      | string  | SAML assertion signature algorithm.                                                                                                                                                                                                                                                                                                               | http://www.w3.org/2001/04/xmldsig-more#rsa-sha256                                                                                                                                                                                                                                      |
| mappings                | object  | Attribute mapping dictionary, mapping fields in GenAuth user information to mapping dictionary in SAML identity assertion. The key on the **left** side represents the user information field in **GenAuth**, and the value on the **right** side represents the attribute name in **SAML identity assertion**.                                   | No field mapping is done by default.                                                                                                                                                                                                                                                   |
| destination             | string  | Destination in SAML Response.                                                                                                                                                                                                                                                                                                                     | Defaults to `AssertionConsumerServiceURL` in SAML Request. If it does not exist, it is the configured default ACS address. If the IdP initiates the login, you may need to find this value from the third-party application document to fill in, otherwise the login may be incorrect. |
| recipient               | string  | recipient in SAML Response.                                                                                                                                                                                                                                                                                                                       | Defaults to `AssertionConsumerServiceURL` in SAML Request. If it does not exist, it is the configured default ACS address. If the IdP initiates the login, you may need to find this value from the third-party application document to fill in, otherwise the login may be incorrect. |
| audience                | string  | audience in SAML Response.                                                                                                                                                                                                                                                                                                                        | Defaults to `AssertionConsumerServiceURL` in SAML Request. If it does not exist, it is the configured default ACS address. If the IdP initiates the login, you may need to find this value from the third-party application document to fill in, otherwise the login may be incorrect. |
| emailDomainSubstitution | string  | Email domain substitution. The **email domain** in the identity in the SAML assertion will be replaced with the content filled in here. Some SPs require that the email domain in the identity assertion must be specific. If this field is filled in, user pool registration must be prohibited\*\*, otherwise there is a risk of account fraud. | -                                                                                                                                                                                                                                                                                      |

**Example**:

```json
{
  "audience": null,
  "recipient": "https://signin.aliyun.com/saml/SSO",
  "destination": "https://signin.aliyun.com/saml/SSO",
  "mappings": {
    "email": "Email",
    "username": "UserName"
  },
  "digestAlgorithm": "http://www.w3.org/2000/09/xmldsig#sha1",
  "signatureAlgorithm": "http://www.w3.org/2000/09/xmldsig#rsa-sha1",
  "authnContextClassRef": "urn:oasis:names:tc:SAML:2.0:ac:classes:unspecified",
  "lifetimeInSeconds": 3600,
  "nameIdentifierFormat": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified",
  "samlRequestSigningCert": "-----BEGIN CERTIFICATE-----\nMIICyDCCAjGgAwIBAgIBADANBgkqhkiG9w0BAQUFADCBgDELMAkGA1UEBhMCdXMx\nDTALBgNVBAgMBGFzZGYxDTALBgNVBAoMBGFzZGYxGDAWBgNVBAMMD2lkcDMuYXV0\naGluZy5jbjENMAsGA1UEBwwEYXNkZjENMAsGA1UECwwEYXNkZjEbMBkGCSqGSIb3\nDQEJARYMYXNkZkAxMjMuY29tMB4XDTE5MDUyNTA1NTgwMFoXDTIwMDUyNDA1NTgw\nMFowgYAxCzAJBgNVBAYTAnVzMQ0wCwYDVQQIDARhc2RmMQ0wCwYDVQQKDARhc2Rm\nMRgwFgYDVQQDDA9pZHAzLmF1dGhpbmcuY24xDTALBgNVBAcMBGFzZGYxDTALBgNV\nBAsMBGFzZGYxGzAZBgkqhkiG9w0BCQEWDGFzZGZAMTIzLmNvbTCBnzANBgkqhkiG\n9w0BAQEFAAOBjQAwgYkCgYEA2gggFHKUYkoEp83BfGgVjBiev+MIBm+AOuKVqIAX\naJDa1NHL+ApBWsfbKNoPPMy8sZdCBrDm6w5cx9cBjw4uBUap3elxr+MiFoCCc2Eg\nJundFhBVXkU6TafLzfoW4w6/yonmQ798nBKQrTmdc76tpT9xCwU2AmS5ooScQ9Xu\nNn0CAwEAAaNQME4wHQYDVR0OBBYEFMDHVJxYcOlCxnnRi1Lx4tj7gWKNMB8GA1Ud\nIwQYMBaAFMDHVJxYcOlCxnnRi1Lx4tj7gWKNMAwGA1UdEwQFMAMBAf8wDQYJKoZI\nhvcNAQEFBQADgYEAvDodW/ewvCEadY4PCFaBT0ZqoEvrb96hOrbP2hZV4lkCMbLq\noPWASgGTNr9TPnxGCvP9xOv77wzgLs7EAOI+ea1D+NIjUuKnjCLLBv034vMp8bRI\n/Ea9AsGqVCr8tK/3dPoJMxHIjs2cpqNdDcalCZkwBZ1Z0c0YtKIVDFnym5U=\n-----END CERTIFICATE-----",
  "emailDomainSubstitution": "authing.onaliyun.com"
}
```

**Custom SAML Response Attributes**:
You can add some custom attributes to the SAML identity assertion, and the newly added attributes will appear in the Attributes of the SAML identity assertion.

**Example**:

![Configure custom SAML Response attributes](~@imagesZhCn/guides/federation/saml/1-4.png)
::: img-description
Configure custom SAML Response attributes
:::

The above configuration will add the following attributes to the SAML identity assertion:

```xml
<saml:Attribute Name="https://cloud.tencent.com/SAML/Attributes/Role" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
  <saml:AttributeValue
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">qcs::cam::uin/2165337796:roleName/authing,qcs::cam::uin/2165337796:saml-provider/authing
  </saml:AttributeValue>
</saml:Attribute>
<saml:Attribute Name="https://cloud.tencent.com/SAML/Attributes/RoleSessionName" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
  <saml:AttributeValue
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">Test
  </saml:AttributeValue>
</saml:Attribute>
```

你还可以从 GenAuth 的用户信息上动态读取字段，在一行中最右侧的文本框中输入：`My email is ${user.email} and my gender is ${user.gender}`。
![动态读取用户信息字段](https://cdn.genauth.ai/docs/20200929110025.png)
::: img-description
Dynamically read user information fields
:::

This content will add the following attributes to the SAML identity assertion:

```xml
<saml:Attribute Name="CustomName" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
  <saml:AttributeValue
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">My email is yezuwei@genauth.ai and my gender is M
  </saml:AttributeValue>
</saml:Attribute>
```

## Integration with Applications

GenAuth has been integrated with Alibaba Cloud, Tencent Cloud, Huawei Cloud, AWS, and Kibana (AWS) for SAML2. Please refer to the corresponding configuration documents for detailed steps.

### Log in to the Alibaba Cloud Console (China Region)

Please refer to the [Access Document](/integration/ali-cloud/).

### Log in to the Alibaba Cloud Console (International Region)

Please refer to the [Access Document](/integration/ali-cloud-intl/).

### Log in to the Tencent Cloud Console

Please refer to the [Access Document](/integration/tencent-cloud/).

### Log in to the AWS Console (China Region)

Please refer to the [Access Document](/integration/aws/).

### Log in to the Huawei Cloud Console (China Region)

Please refer to the [Access Document](/integration/huawei-cloud/).

### Log in to the Kibana Console (AWS China Region)

Please refer to the [Access Document](/integration/aws-kibana/).
