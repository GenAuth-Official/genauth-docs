# Create public accounts in batches

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

To create public accounts in batches, one of the email, mobile number, and user name must be included. The email, mobile number, user name, and externalId are unique in the user pool. This interface will create public account users as administrators, so there is no need to perform security checks such as mobile number verification code verification.

## Method name

`ManagementClient.createPublicAccountsBatch`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | -------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------ | ----------------------------------- | -------------------------- ... | `[{"status":"Activated","email":"test@example.com","username":"bob","name":"xxxx","nickname":"xxxx","password":"passw0rd","photo":"https://files.authing.co/authing-console/default-user-avatar.png","gender":"M","birthdate":"2022-06-03","country":"CN","province":"BJ","city":"BJ","address":"xxxxxxx","streetAddress":"xxx street","postalCode":"438100","company":"steamory","browser":"Mozilla/5.0 (Linux; Android 10; V2001A; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.2.10.0","device":"iOS","givenName":"xx","familyName":"xx","middleName":"James","profile":"alice","pr eferredUsername":"alice","website":"https://my-website.com","zoneinfo":"GMT-08:00","locale":"af","formatted":"132, My Street, Kingston, New York 12401.","region":"Xinjiang Uyghur Autonomous Region"}]` | | options | <a href="#CreatePublicAccountOptionsDto">CreatePublicAccountOptionsDto</a> | No | - | Optional parameters | `{"autoGeneratePassword":true,"resetPasswordOnFirstLogin":true,"passwordEncryptType":"none"}` |

## Request Response

Type: `PublicAccountListRespDto`

| Name | Type | Description |
| ---- | ---- | ----------- |
