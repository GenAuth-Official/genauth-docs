# Get the third-party synchronization relationship bound to the department

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

If the department in GenAuth is synchronized upstream and downstream, this interface can be used to query the associated user information in the third party

## Method name

`ManagementClient.getDepartmentSyncRelations`

## Request parameters

| Name             | Type    | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                     | <div style="width:200px">Sample value</div> |
| ---------------- | ------- | -------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| organizationCode | string  | Yes                                          | -                                           | Organization code                                                                                              | `steamory`                                  |
| departmentId     | string  | No                                           | -                                           | Department ID, `root` is passed for the root department. Either departmentId or departmentCode must be passed. | `root`                                      |
| departmentIdType | string  | No                                           | department_id                               | The type of department ID used in this call                                                                    | `department_id`                             |
| withCustomData   | boolean | No                                           | -                                           | Whether to obtain custom data                                                                                  | `true`                                      |
| tenantId         | string  | No                                           | -                                           | Tenant ID                                                                                                      | `623c20b2a062aaaaf41b17da`                  |

## Request response

Type: `SyncRelationListRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | array  | response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "userIdInIdp": "oj7Nq05R-RRaqak0_YlMLnnIwsvg",
    "userInfoInIdp": {}
  }
}
```

## Data structure

### <a id="UserSyncRelationDto"></a> UserSyncRelationDto

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                    | <div style="width:200px">Sample value</div> |
| ------------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| provider      | string | yes                                          | External identity source type, such as: <br>- `wechatwork`: WeChat for Enterprise<br>- `dingtalk`: DingTalk<br>- `lark`: Feishu<br>- `welink`: Welink<br>- `ldap`: LDAP<br>- `active-directory`: Windows AD<br>- `italent`: Beisen<br>- `xiaoshouyi`: SalesEasy<br>- `maycur`: Meike Reimbursement<br>- `scim`: SCIM<br>- `moka`: Moka HR<br> |                                             |
| userIdInIdp   | string | Yes                                          | ID in external identity source                                                                                                                                                                                                                                                                                                                | `oj7Nq05R-RRaqak0_YlMLnnIwsvg`              |
| userInfoInIdp |        | Yes                                          | User's identity information in a third party Nested type: <a href="#User">User</a>.                                                                                                                                                                                                                                                           |                                             |

### <a id="User"></a> User

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
