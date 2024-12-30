# String type resource authentication

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

String type resource authentication, supports users to judge the permissions of one or more string resources

## Method name

`ManagementClient.check_permission_by_string_resource`

## Request parameters

| Name      | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                             | <div style="width:200px">Sample value</div> |
| --------- | -------- | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------- |
| resources | string[] | Yes                                          | -                                           | Data resource path list,                                               | `["exampleResource"]`                       |
| action    | string   | yes                                          | -                                           | Data resource permission operation, read, get, write and other actions | `get`                                       |

## Request Response

Type: `CheckResourcePermissionsRespDto`

| Name       | Type                                                                         | Description                                                                                                  |
| ---------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                       | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string                                                                       | Description                                                                                                  |
| apiCode    | number                                                                       | Segmented error code, which can be used to get the specific error type.                                      |
| data       | <a href="#CheckResourcePermissionDataDto">CheckResourcePermissionDataDto</a> | Response data                                                                                                |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "apiCode": 20001,
  "data": {
    "checkResultList": {
      "namespaceCode": "examplePermissionNamespace",
      "action": "get",
      "resource": "exampleResource",
      "enabled": true
    }
  }
}
```

## Data Structure

### <a id="CheckResourcePermissionDataDto"></a> CheckResourcePermissionDataDto

| Name            | Type  | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                   | <div style="width:200px">Sample value</div> |
| --------------- | ----- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| checkResultList | array | Yes                                    | Check result list Nested type: <a href="#CheckResourcePermissionRespDto">CheckResourcePermissionRespDto</a>. |                                             |

### <a id="CheckResourcePermissionRespDto"></a> CheckResourcePermissionRespDto

| Name          | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                     | <div style="width:200px">Example value</div> |
| ------------- | ------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| namespaceCode | string  | Yes                                           | Permission space Code                                                                          | `examplePermissionNamespace`                 |
| action        | string  | Yes                                           | Data resource permission operation                                                             | `get`                                        |
| resource      | string  | Yes                                           | Resource path                                                                                  | `exampleResource`                            |
| enabled       | boolean | Yes                                           | Whether the user has a certain operation on the data resource under a certain permission space | `true`                                       |
