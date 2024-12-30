# Get permission view data list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

## Description

This interface is used to export menu: Permission Management -> Data Permission -> Permission View List Data. If you need to pull the authorization data of our data permissions (all permissions of all resources owned by all users), you can use this interface.

## Method Name

`ManagementClient.listPermissionView`

## Request Parameters

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                         | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- |
| page    | number | no                                           | 1                                           | Current page number, starting from 1                                               | `1`                                          |
| limit   | number | no                                           | 10                                          | The maximum number of pages per page cannot exceed 50, and the default value is 10 | `10`                                         |
| keyword | string | no                                           | -                                           | Keyword search, can support userName search                                        | `123`                                        |

## Request Response

Type： `ListPermissionViewResponseDto`

| Name       | Type                                                                                 | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                               | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                               | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                               | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#ListPermissionViewPaginatedRespDto">ListPermissionViewPaginatedRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 20,
    "list": {
      "userId": "6229ffaxxxxxxxxcade3e3d9",
      "username": "Zhang San",
      "namespaceId": "6229ffaxxxxxxxxcade3e3d9",
      "namespaceCode": "examplePermissionNamespace",
      "namespaceName": "Example Permission Space",
      "dataResourceId": "6229ffaxxxxxxxxcade3e3d9",
      "dataResourceCode": "exampleDataResource",
      "dataResourceName": "Sample data resource Name",
      "dataPolicyList": {
        "dataPolicyId": "6229ffaxxxxxxxxcade3e3d9",
        "dataPolicyName": "Example Data Policy"
      },
      "roleList": {
        "roleId": "6229ffaxxxxxxxxcade3e3d9",
        "roleName": "Example Role",
        "roleCode": "exampleCode"
      },
      "groupList": {
        "groupId": "6229ffaxxxxxxxxcade3e3d9",
        "groupName": "Example User Group",
        "groupCode": "exampleCode"
      },
      "nodeList": {
        "nodeId": "6229ffaxxxxxxxxcade3e3d9",
        "nodeName": "Example Organization",
        "nodeCode": "exampleCode"
      }
    }
  }
}
```

## Data Structure

### <a id="ListPermissionViewPaginatedRespDto"></a> ListPermissionViewPaginatedRespDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                      | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | yes                                          | Total number of records                                                                         | `20`                                         |
| list       | array  | yes                                          | Response data nested type：<a href="#ListPermissionViewRespDto">ListPermissionViewRespDto</a>。 |                                              |

### <a id="ListPermissionViewRespDto"></a> ListPermissionViewRespDto

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                   | <div style="width:200px">Example Value</div> |
| ---------------- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ---------------------------------- | ---- | ---- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- | --- | ---- | ---- | ---- | ---- | ---- | --- | ------------ | ------ | --- | -------------- | -------------------------- | --- | -------------- | ------ | --- | ------------------- | -------------------- | ------------------------------ | ---- | ---- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- | --- | ---- | ---- | ---- | ---- | ---- |
| userId           | string | yes                                          | The unique identifier of the user, which can be user ID, user name, email, phone number, externalId, or ID in an external identity source. For details, see the description of the userIdType field. The default is user id. | `6229ffaxxxxxxxxcade3e3d9`                   |
| username         | string | No                                           | User's real name, not unique                                                                                                                                                                                                 | `Zhang San`                                  |
| namespaceId      | string | yes                                          | Permission space id                                                                                                                                                                                                          | `6229ffaxxxxxxxxcade3e3d9`                   |
| namespaceCode    | string | yes                                          | Permission space Code                                                                                                                                                                                                        | `examplePermissionNamespace`                 |
| namespaceName    | string | yes                                          | Permission space Name                                                                                                                                                                                                        | `Sample Permission Space`                    |
| dataResourceId   | string | yes                                          | Data resource id                                                                                                                                                                                                             | `6229ffaxxxxxxxxcade3e3d9`                   |
| dataResourceCode | string | yes                                          | Data resource Code                                                                                                                                                                                                           | `exampleDataResource`                        |
| dataResourceName | string | yes                                          | Data resource Name                                                                                                                                                                                                           | `Sample data resource Name`                  |
| dataPolicyList   | array  | yes                                          | Data policy list Nested Type: <a href="#PolicyBo">PolicyBo</a>.                                                                                                                                                              |                                              |
| roleList         | array  | yes                                          | Role list Nested Type: <a href="#RoleBo">RoleBo</a>.                                                                                                                                                                         |                                              |
| groupList        | array  | yes                                          | User group list Nested Type: <a href="#GroupBo">GroupBo</a>.                                                                                                                                                                 |                                              |
| nodeList         | array  | yes                                          | Organization list Nested Type: <a href="#NodeBo">NodeBo</a>.                                                                                                                                                                 |                                              | ### <a id="PolicyBo"></a> PolicyBo | Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |     | ---- | ---- | ---- | ---- | ---- |     | dataPolicyId | string | yes | Data Policy ID | `6229ffaxxxxxxxxcade3e3d9` |     | dataPolicyName | string | yes | data policyNameName | `Sample data policy` | ### <a id="RoleBo"></a> RoleBo | Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |     | ---- | ---- | ---- | ---- | ---- |
| roleId           | string | yes                                          | role id                                                                                                                                                                                                                      | `6229ffaxxxxxxxxcade3e3d9`                   |
| roleName         | string | yes                                          | role Name                                                                                                                                                                                                                    | `example role`                               |
| roleCode         | string | yes                                          | role Code                                                                                                                                                                                                                    | `exampleCode`                                |

### <a id="GroupBo"></a> GroupBo

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| --------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| groupId   | string | yes                                          | group id                                   | `6229ffaxxxxxxxxcade3e3d9`                   |
| groupName | string | yes                                          | group Name                                 | `example group`                              |
| groupCode | string | yes                                          | group Code                                 | `exampleCode`                                |

### <a id="NodeBo"></a> NodeBo

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| nodeId   | string | yes                                          | Organization id                            | `6229ffaxxxxxxxxcade3e3d9`                   |
| nodeName | string | yes                                          | Organization Name                          | `Example Organization`                       |
| nodeCode | string | yes                                          | Organization Code                          | `exampleCode`                                |
