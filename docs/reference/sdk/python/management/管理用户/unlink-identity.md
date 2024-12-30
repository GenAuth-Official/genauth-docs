# Unbind all identity information of the user under the identity source

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Unbind all identity information of the user under a certain identity source. After unbinding, you will not be able to use the identity source that has performed the unbinding operation to log in to the corresponding GenAuth user unless you rebind the identity information.

## Method name

`ManagementClient.unlink_identity`

## Request parameters

| Name     | Type    | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                | <div style="width:200px">Sample value</div> |
| -------- | ------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| userId   | string  | Yes                                    | -                                           | Required, the GenAuth user ID for the binding operation.                                                                                                                  |                                             |
| extIdpId | string  | Yes                                    | -                                           | Required, the identity source ID, used to specify which identity source the identity belongs to.                                                                          |                                             |
| type     | string  | No                                     | -                                           | Optional, indicating the specific type of the identity, which can be obtained from the type field of the user identity information. If not passed, the default is generic |                                             |
| isSocial | boolean | no                                     | -                                           | Deprecated, can be passed in arbitrarily, and will be removed in the future.                                                                                              |                                             |

## Request Response

Type: `UnlinkIdentityResDto`

| Name       | Type                                                       | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                     | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                     | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                     | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#UnlinkIdentityDataDto">UnlinkIdentityDataDto</a> | data                                                                                                                                                                                                                                                                                                                                         |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "success": true
  }
}
```

## Data Structure

### <a id="UnlinkIdentityDataDto"></a> UnlinkIdentityDataDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| success | boolean | yes                                          | whether success                            | `true`                                       |
