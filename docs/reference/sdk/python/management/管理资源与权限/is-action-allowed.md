# Determine whether the user has permission to perform a certain operation on a certain resource

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Determine whether the user has permission to perform a certain operation on a certain resource.

## Method name

`ManagementClient.is_action_allowed`

## Request parameters

| Name      | Type   | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                           | <div style="width:200px">Sample value</div> |
| --------- | ------ | --------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| resource  | string | Yes                                           | -                                           | Resource identifier                                                                                  | `ecs:1`                                     |
| action    | string | Yes                                           | -                                           | Action corresponding to the resource                                                                 | `ecs:Start`                                 |
| userId    | string | Yes                                           | -                                           | User ID                                                                                              | `userId1`                                   |
| namespace | string | No                                            | -                                           | Code of the permission group (permission space). Do not pass to obtain the default permission group. | `default`                                   |

## Request Response

Type: `IsActionAllowedRespDtp`

| Name       | Type                                                         | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                       | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                       | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#IsActionAllowedDataDto">IsActionAllowedDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "allowed": true
  }
}
```

## Data Structure

### <a id="IsActionAllowedDataDto"></a> IsActionAllowedDataDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| allowed | boolean | yes                                          | is it allowed                              | `true`                                       |
