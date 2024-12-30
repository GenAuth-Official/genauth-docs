# Get role list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get role list

## Method name

`ManagementClient.get_role_list`

## Request parameters

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>      | <div style="width:200px">Sample value</div> |
| --------- | ------ | -------------------------------------------- | ------------------------------------------- | ----------------------------------------------- | ------------------------------------------- |
| namespace | string | No                                           | -                                           | Code of the permission group (permission space) | `default`                                   |

## Request response

Type: `RoleListRespDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string | Description information                                                                                      |
| apiCode    | number | Segment error code, which can be used to get the specific error type.                                        |
| requestId  | string | Request ID. It will be returned when the request fails.                                                      |
| data       | array  | response data                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "code": "role1",
    "name": "role1",
    "description": "this is role description",
    "namespace": "default",
    "namespaceName": "Sample permission name",
    "status": "ENABLE",
    "disableTime": "1669881887852"
  }
}
```

## Data structure

### <a id="RoleDto"></a> RoleDto

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                               | <div style="width:200px">Sample value</div> |
| ------------- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------- |
| code          | string | Yes                                          | Unique identifier of the role in the permission group (permission space) Code            | `role1`                                     |
| name          | string | Yes                                          | Role name in the permission group (permission space)                                     | `role1`                                     |
| description   | string | Yes                                          | Role description                                                                         | `this is role description`                  |
| namespace     | string | Yes                                          | Code of the permission group (permission space)                                          | `default`                                   |
| namespaceName | string | Yes                                          | Name of the permission group (permission space)                                          | `Sample permission name`                    |
| status        | string | No                                           | Role status, ENABLE- means normal, DISABLE- means disabled                               | `ENABLE`                                    |
| disableTime   | number | No                                           | Role automatic disable time, in milliseconds, if null is passed, it is permanently valid | `1669881887852`                             |
