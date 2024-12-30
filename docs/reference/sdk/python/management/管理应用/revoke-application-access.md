# Delete application access authorization record

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Cancel the application access authorization for users, groups, organizations or roles. If the input data does not exist, the returned data will not be processed with an error.

## Method name

`ManagementClient.revoke_application_access`

## Request parameters

| Name  | Type                                                                                         | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----- | -------------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| list  | <a href="#DeleteApplicationPermissionRecordItem">DeleteApplicationPermissionRecordItem[]</a> | Yes                                    | -                                           | Authorization subject list, up to 10 items |                                             |
| appId | string                                                                                       | Yes                                    | -                                           | Application ID                             | `6229ffaxxxxxxxxcade3e3d9`                  |

## Request Response

Type: `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                   | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                                                                                                                                                                                                                                                            |

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

### <a id="DeleteApplicationPermissionRecordItem"></a> DeleteApplicationPermissionRecordItem

| Name             | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                             | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| targetType       | string | Yes                                    | Subject type                                                                                                                                                                                                                                                                                           | USER                                        |
| namespaceCode    | string | No                                     | Permission group code, required when subject type is "ROLE"                                                                                                                                                                                                                                            | `code1`                                     |
| targetIdentifier | array  | Yes                                    | Subject identifier list, when subject type is "USER", the value should be user ID; when subject type is "GROUP", the value should be group code; when subject type is "ROLE", the value should be role code; when subject type is "ORG", the value should be organization node ID. Maximum 50 entries. | `["6229ffaxxxxxxxxcade3e3d9"]`              |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| success | boolean | yes                                          | Whether the operation was successful       | `true`                                      |
