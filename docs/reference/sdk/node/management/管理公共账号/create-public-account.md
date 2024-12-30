# Create a public account

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

To create a public account, one of the email address, mobile phone number, and user name must be included. The email address, mobile phone number, user name, and externalId are unique in the user pool. This interface will create a public account user as an administrator, so there is no need to perform security checks such as mobile phone number verification code verification.

## Method name

`ManagementClient.createPublicAccount`

## Request parameters

| Name             | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                         | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| status           | string | No                                     | Activated                                   | Current status of the account                                                                                                                                                                                                                                                                                                                                                                      | `Activated`                                 |
| email            | string | No                                     | -                                           | Email address, case insensitive                                                                                                                                                                                                                                                                                                                                                                    | `test@example.com`                          |
| phone            | string | No                                     | -                                           | Phone number without area code. If it is a foreign phone number, please specify the area code in the phoneCountryCode parameter.                                                                                                                                                                                                                                                                   | `188xxxx8888`                               |
| phoneCountryCode | string | No                                     | -                                           | Mobile phone area code. This field is optional for mobile phone numbers in mainland China. The GenAuth SMS service does not yet support international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of mobile phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes. | `+86`                                       |
| username         | string | No                                     | -                                           | User name, unique in the user pool                                                                                                                                                                                                                                                                                                                                                                 | `bob`                                       |
| externalId       | string | No                                     | -                                           | Third-party external ID                                                                                                                                                                                                                                                                                                                                                                            | `10010`                                     |
| name             | string | No                                     | -                                           | User's real name, not unique                                                                                                                                                                                                                                                                                                                                                                       |
