# Get permission view data list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

## Description

This interface is used to export menu: Permission Management -> Data Permission -> Permission View List Data. If you need to pull the authorization data of our data permissions (all permissions of all resources owned by all users), you can use this interface.

## Method name

`ManagementClient.listPermissionView`

## Request parameters

| Name    | Type   | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| ------- | ------ | --------------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| page    | number | No                                            | 1                                           | Current page number, starting from 1                     | `1`                                         |
| limit   | number | No                                            | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |
| keyword | string | No                                            | -                                           | Keyword search, can support userName search              | `123`                                       |

## Request response

Type: `ListPermissionViewResponseDto`

| Name       | Type                                                                                 | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                               | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                                               | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                                               | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#ListPermissionViewPaginatedRespDto">ListPermissionViewPaginatedRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 20,
    "list": {
      "userId": "6229ffaxxxxxxxxcade3e3d9",
      "username": "xxxx",
      "namespaceId": "6229ffaxxxxxxxxcade3e3d9",
      "namespaceCode": "examplePermissionNamespace",
      "namespaceName": "Example Permission Space",
      "dataResourceId": "6229ffaxxxxxxxxcade3e3d9",
      "dataResourceCode": "exampleDataResource",
      "dataResourceName": "Example data resource name",
      "dataPolicyList": {
        "dataPolicyId": "6229ffaxxxxxxxxcade3e3d9",
        "dataPolicyName": "Example data policy"
      },
      "roleList": {
        "roleId": "6229ffaxxxxxxxxcade3e3d9",
        "roleName": "Example role",
        "roleCode": "exampleCode"
      },
      "groupList": {
        "groupId": "6229ffaxxxxxxxxcade3e3d9",
        "groupName": "Example user group",
        "groupCode": "exampleCode"
      },
      "nodeList": {
        "nodeId": "6229ffaxxxxxxxxcade3e3d9",
        "nodeName": "Example organization",
        "nodeCode": "exampleCode"
      }
    }
  }
}
```

## Data structure

### <a id="ListPermissionViewPaginatedRespDto"></a> ListPermissionViewPaginatedRespDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                     | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                          | Total number of records                                                                        | `20`                                        |
| list       | array  | Yes                                          | Response data Nested type: <a href="#ListPermissionViewRespDto">ListPermissionViewRespDto</a>. |                                             |

### <a id="ListPermissionViewRespDto"></a> ListPermissionViewRespDto

| Name             | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                  | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| userId           | string | Yes                                    | The unique identifier of the user, which can be user ID, user name, email address, mobile phone number, externalId, or ID in an external identity source. For details, see the description of the userIdType field. The default is user id. | `6229ffaxxxxxxxxcade3e3d9`                  |
| username         | string | No                                     | User's real name, not unique                                                                                                                                                                                                                | `Zhang San`                                 |
| namespaceId      | string | Yes                                    | Permission space id                                                                                                                                                                                                                         | `6229ffaxxxxxxxxcade3e3d9`                  |
| namespaceCode    | string | Yes                                    | Permission space Code                                                                                                                                                                                                                       | `examplePermissionNamespace`                |
| namespaceName    | string | Yes                                    | Permission space name                                                                                                                                                                                                                       | `Example Permission Space`                  |
| dataResourceId   | string | Yes                                    | Data resource id                                                                                                                                                                                                                            | `6229ffaxxxxxxxxcade3e3d9`                  |
| dataResourceCode | string | Yes                                    | Data resource Code                                                                                                                                                                                                                          | `exampleDataResource`                       |
| dataResourceName | string | Yes                                    | Data resource name                                                                                                                                                                                                                          | `Example Data Resource Name`                |
| dataPolicyList   | array  | Yes                                    | Data policy list Nested type: <a href="#PolicyBo">PolicyBo</a>.                                                                                                                                                                             |                                             |
| roleList         | array  | Yes                                    | Role list Nested type: <a href="#RoleBo">RoleBo</a>.                                                                                                                                                                                        |                                             |
| groupList        | array  | Yes                                    | User group list Nested type: <a href="#GroupBo">GroupBo</a>.                                                                                                                                                                                |                                             |
| nodeList         | array  | Yes                                    | Organization list Nested type: <a href="#NodeBo">NodeBo</a>.                                                                                                                                                                                |                                             |

### <a id="PolicyBo"></a> PolicyBo

| Name           | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| dataPolicyId   | string | Yes                                           | Data policy id                             | `6229ffaxxxxxxxxcade3e3d9`                  |
| dataPolicyName | string | Yes                                           | Data policy name                           | `Sample data policy`                        |

### <a id="RoleBo"></a> RoleBo

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| roleId   | string | yes                                           | role id                                    | `6229ffaxxxxxxxxcade3e3d9`                  |
| roleName | string | yes                                           | role name                                  | `example role`                              |
| roleCode | string | yes                                           | role code                                  | `exampleCode`                               |

### <a id="GroupBo"></a> GroupBo

| name      | type   | <div style="width:80px">is it required</div> | <div style="width:300px">description</div> | <div style="width:200px">example value</div> |
| --------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| groupId   | string | yes                                          | user group id                              | `6229ffaxxxxxxxxcade3e3d9`                   |
| groupName | string | yes                                          | user group name                            | `example user group`                         |
| groupCode | string | yes                                          | user group code                            | `exampleCode`                                |

### <a id="NodeBo"></a> NodeBo

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| -------- | ------ | --------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| nodeId   | string | Yes                                           | Organization id                            | `6229ffaxxxxxxxxcade3e3d9`                   |
| nodeName | string | Yes                                           | Organization name                          | `Example organization`                       |
| nodeCode | string | Yes                                           | Organization code                          | `exampleCode`                                |
