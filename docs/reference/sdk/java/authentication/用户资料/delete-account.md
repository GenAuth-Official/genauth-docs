# Logout

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

This endpoint is used for users to log out of their accounts on their own. Temporary credentials for logging out of accounts, deleteAccountToken, need to be provided. This parameter needs to be obtained through the **Initiate Logout Request** interface.

## Method Name

`AuthenticationClient.deleteAccount`

## Request Parameters

| Name               | Type   | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Example Value</div> |
| ------------------ | ------ | -------------------------------------------- | ------------- | ------------------------------------------ | -------------------------------------------------- |
| deleteAccountToken | string | Yes                                          | -             | token to cancel account                    |                                                    |

## Request Response

Type: `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                     |
| message    | string                                   | Description                                                                                                                                                                                                                                                                                                                                 |
| apiCode    | number                                   | Segment error code, through which you can get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                                                                                                                                                                                                                                                         |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "success": true
  }
}
```

## Data Structure

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| success | boolean | Yes                                          | Whether the operation is successful        | `true`                                       |
