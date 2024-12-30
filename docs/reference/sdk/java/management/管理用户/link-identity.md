# Bind an identity to the user

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the document description is incorrect, please refer to the V3 API.

The user pool administrator manually binds the identity information from the external identity source to the user. After the binding is completed, you can use the identity source that has performed the binding operation to log in to the corresponding GenAuth user.

## Method Name

`ManagementClient.linkIdentity`

## Request Parameters

| Name        | Type    | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                    | <div style="width:200px">Example Value</div> |
| ----------- | ------- | -------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| userIdInIdp | string  | Yes                                          | -                                           | Required, the unique identifier of the user in the external identity source, which needs to be obtained from the authentication return value of the external identity source. |                                              |
| userId      | string  | Yes                                          | -                                           | Required, the GenAuth user ID for the binding operation.                                                                                                                      |                                              |
| extIdpId    | string  | Yes                                          | -                                           | Required, the identity source ID, used to specify which identity source the identity belongs to.                                                                              |                                              |
| type        | string  | No                                           | -                                           | Optional, indicates the specific type of the identity, which can be obtained from the type field of the user identity information. If not passed, the default is generic      |                                              |
| isSocial    | boolean | No                                           | -                                           | Deprecated, can be passed in arbitrarily, and this field will be removed in the future.                                                                                       |                                              |

## Request Response

Type： `LinkIdentityResDto`

| Name       | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                 | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                 | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#LinkIdentityDataDto">LinkIdentityDataDto</a> | Data                                                                                                                                                                                                                                                                                                                                           |

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

### <a id="LinkIdentityDataDto"></a> LinkIdentityDataDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| success | boolean | Yes                                          | Yes No Operation successful                | `true`                                       |
