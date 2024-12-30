# Update ASA account

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Update an ASA account information

## Method name

`ManagementClient.update_asa_account`

## Request parameters

| Name        | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                     | <div style="width:200px">Sample value</div>             |
| ----------- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------- |
| accountInfo | object | Yes                                    | -                                           | Account information, usually a key-value pair containing "account", "password" | `{"account":"account@example.com","password":"123456"}` |
| accountId   | string | Yes                                    | -                                           | ASA account ID                                                                 | `6228edaxxxxxxxxcade3a3d9`                              |
| appId       | string | yes                                    | -                                           | App ID                                                                         | `62a50xxxxxxxxxxxd15d57c7`                              |

## Request Response

Type: `AsaAccountSingleRespDto`

| Name       | Type                                       | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                     | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                     | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#AsaAccountDto">AsaAccountDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "appId": "62a50xxxxxxxxxxxd15d57c7",
    "accountId": "62b40xxxxxxxxxxxd16f57c7",
    "accountInfo": {
      "account": "account@example.com",
      "password": "123456"
    }
  }
}
```

## Data Structure

### <a id="AsaAccountDto"></a> AsaAccountDto

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                          | <div style="width:200px">Sample value</div>             |
| ----------- | ------ | --------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------- |
| appId       | string | Yes                                           | Application ID                                                                      | `62a50xxxxxxxxxxxd15d57c7`                              |
| accountId   | string | Yes                                           | Account ID                                                                          | `62b40xxxxxxxxxxxd16f57c7`                              |
| accountInfo | object | Yes                                           | Account information, usually a key-value pair containing "account", "password" keys | `{"account":"account@example.com","password":"123456"}` |
