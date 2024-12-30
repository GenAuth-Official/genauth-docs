# Get the list of permissions for user-specified resources

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the list of permissions for user-specified resources. Users get the list of permissions for specified resources under a certain application.

## Method name

`AuthenticationClient.getUserAuthResourcePermissionList`

## Request parameters

| Name      | Type     | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                    | <div style="width:200px"></div>Sample value</div>                                                  |
| --------- | -------- | -------------------------------------- | ------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| resources | string[] | Yes                                    | -             | Data resource path list, **Tree resources need to go to specific tree nodes** | `["strResourceCode","arrResourceCode","treeResourceCode/StructCode1/resourceStructChildrenCode1"]` |

## Request response

Type: `GetUserAuthResourcePermissionListRespDto`

| Name       | Type                                                                                             | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                                           | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                                                           | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                                                           | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#GetUserAuthResourcePermissionListDataDto">GetUserAuthResourcePermissionListDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "permissionList": {
      "namespaceCode": "examplePermissionNamespace",
      "actions": "[\"get\",\"read\",\"write\",\"delete\"]",
      "resource": "treeResourceCode1"
    }
  }
}
```

## Data structure

### <a id="GetUserAuthResourcePermissionListDataDto"></a> GetUserAuthResourcePermissionListDataDto

| Name           | Type  | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                       | <div style="width:200px">Sample value</div> |
| -------------- | ----- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| permissionList | array | Yes                                    | Permission list Nested type: <a href="#GetUserAuthResourcePermissionList">GetUserAuthResourcePermissionList</a>. |                                             |

### <a id="GetUserAuthResourcePermissionList"></a> GetUserAuthResourcePermissionList

| Name          | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| ------------- | ------ | --------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| namespaceCode | string | Yes                                           | Current application ID                     | `examplePermissionNamespace`                 |
| actions       | array  | Yes                                           | Data resource permission operation list    | `["get","read","write","delete"]`            |
| resource      | string | Yes                                           | Data resource path                         | `treeResourceCode1`                          |
