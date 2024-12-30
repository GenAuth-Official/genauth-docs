# Batch delete public accounts

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Delete public accounts through the public account ID list, support batch deletion, and can choose to specify the user ID type, etc.

## Method name

`ManagementClient.deletePublicAccountsBatch`

## Request parameters

| Name    | Type                                                                                   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>          | <div style="width:200px">Sample value</div> |
| ------- | -------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------- | --------------------------------------------------- | ------------------------------------------- |
| userIds | string[]                                                                               | Yes                                    | -                                           | Public account user ID list Array length limit: 50. | `["userId1","userId2"]`                     |
| options | <a href="#DeletePublicAccountsBatchOptionsDto">DeletePublicAccountsBatchOptionsDto</a> | No                                     | -                                           | Optional parameters                                 | `{"userIdType":"user_id"}`                  |

## Request response

Type: `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                   | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                                                                                                                                                                                                                                                            |

Sample result:

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

## Data structure

### <a id="DeletePublicAccountsBatchOptionsDto"></a> DeletePublicAccountsBatchOptionsDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                   | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| userIdType | string | No                                           | User ID type, the default value is `user_id`, the optional values ​​are:<br>- `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`<br>- `phone`: user phone number<br>- `email`: user email<br>- `username`: user name<br>- `external_id`: user ID in the external system, corresponding to the `externalId` field of GenAuth user information<br> | user_id                                     |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name | Type | <div styl
