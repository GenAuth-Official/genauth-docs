# Delete department synchronization association

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

If the department in GenAuth is synchronized upstream and downstream, this interface can be used to delete the association relationship of a department under the specified identity source.

## Method name

`ManagementClient.delete_department_sync_relations`

## Request parameters

| Name             | Type   | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                   | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | --------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| provider         | string | Yes                                           | -                                           | External identity source type, such as:<br>- `wechatwork`: WeChat for Enterprise<br>- `dingtalk`: DingTalk<br>- `lark`: Feishu<br>- `welink`: Welink<br>- `ldap`: LDAP<br>- `active-directory`: Windows AD<br>- `italent`: Beisen<br>- `xiaoshouyi`: SalesEasy<br>- `maycur`: Meike Reimbursement<br>- `scim`: SCIM<br>- `moka`: Moka HR<br> |                                             |
| departmentId     | string | yes                                           | -                                           | Department ID, root department passed `root`                                                                                                                                                                                                                                                                                                 | `root`                                      |
| organizationCode | string | yes                                           | -                                           | Organization code                                                                                                                                                                                                                                                                                                                            | `steamory`                                  |
| departmentIdType | string | no                                            | department_id                               | The type of department ID used in this call                                                                                                                                                                                                                                                                                                  | `department_id`                             |

## Request Response

Type: `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                   | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                   | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                                                                                                                                                                                                                                                          |

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

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| success | boolean | yes                                          | Whether the operation was successful       | `true`                                       |
