# Query the list of public accounts that the currently logged-in user can switch to

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

This endpoint is used to query the list of public accounts that the currently logged-in user can switch to. If there is no public account that can be switched to, an empty array is returned.

## Method Name

`AuthenticationClient.listPublicAccountsForSwitchLoggedIn`

## Request Parameters

| Name           | Type    | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div>                           | <div style="width:200px"></div>Example Value</div> |
| -------------- | ------- | -------------------------------------------- | ------------- | -------------------------------------------------------------------- | -------------------------------------------------- |
| withOriginUser | boolean | No                                           | -             | Yes Whether to include the current personal user's basic information |                                                    |

## Request Response

Type: `GetPublicAccountDataRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                     |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                 |
| apiCode    | number | Segment error code, through which you can get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                |
| data       | array  | Response Data                                                                                                                                                                                                                                                                                                                               |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "publicAccounts": "[]",
    "originUser": {
      "userId": "623c20b2a062aaaaf41b17da"
    }
  }
}
```

## Data Structure

### <a id="GetUserSelectLoginPublicAccountsDataDto"></a> GetUserSelectLoginPublicAccountsDataDto

| Name           | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                           | <div style="width:200px">Example Value</div> |
| -------------- | ----- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| publicAccounts | array | Yes                                          | Public account list NestedType: <a href="#ListPublicAccountDataDto">ListPublicAccountDataDto</a>.                                                    | `[]`                                         |
| originUser     |       | No                                           | Personal account information NestedType: <a href="#GetUserSelectLoginPublicAccountsOriginUserDto">GetUserSelectLoginPublicAccountsOriginUserDto</a>. |                                              |

### <a id="ListPublicAccountDataDto"></a> ListPublicAccountDataDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>   | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| userId      | string | Yes                                          | Account ID                                   | `623c20b2a062aaaaf41b17da`                   |
| avatar      | string | No                                           | Account avatar                               |                                              |
| displayName | string | No                                           | Display Name                                 |                                              |
| usertype    | string | No                                           | User Type: 1 Personal user, 2 Public account | 1                                            |

### <a id="GetUserSelectLoginPublicAccountsOriginUserDto"></a> GetUserSelectLoginPublicAccountsOriginUserDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>   | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| userId      | string | Yes                                          | Account ID                                   | `623c20b2a062aaaaf41b17da`                   |
| avatar      | string | No                                           | Account avatar                               |                                              |
| displayName | string | No                                           | Display Name                                 |                                              |
| usertype    | string | No                                           | User Type: 1 Personal user, 2 Public account | 1                                            |
