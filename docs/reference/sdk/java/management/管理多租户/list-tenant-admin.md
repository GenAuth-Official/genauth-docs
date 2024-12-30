# Get the list of tenant administrators

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This interface is used to obtain the list of tenant members and supports fuzzy search.

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| tenantId | string | yes | - | tenant ID | |
| keywords | string | no | - | search keywords | |
| page | string | no | - | page number | |
| limit | string | no | - | amount of data to get per page | |
| withCustomData | boolean | no | - | whether to return custom fields | |
| withIdentities | boolean | no | - | | |
| withDepartmentIds | boolean | no | - | whether to return department information | |



  
## Request Response

Type： `TenantUserListPaginatedRespDto`

| Name | Type | Description |
| ---- | ---- | ---- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message | string | Description |
| apiCode | number | Segmented error code, which can be used to get the specific error type. |
| requestId | string | Request ID. It will be returned when the request fails. |
| data | <a href="#TenantUserListPagingDto">TenantUserListPagingDto</a> | Data |



Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "tenantId": "60b49eb83fd80adb96f26e68",
      "userPoolId": "60b49eb83fd80adb96f26e68"
    }
  }
}
```

## Data Structure


### <a id="TenantUserListPagingDto"></a> TenantUserListPagingDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | yes | Total number of records | |
| list | array | yes | Response data nested type: <a href="#TenantUserDto">TenantUserDto</a>. | |

### <a id="TenantUserDto"></a> TenantUserDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | ---- | ---- | ---- |
| tenantId | string | Yes | Tenant ID | `60b49eb83fd80adb96f26e68` |
| userPoolId | string | Yes | User Pool ID | `60b49eb83fd80adb96f26e68` |
| username | string | Yes | Username | |
| name | string | Yes | Full name | |
| nickname | string | Yes | Nickname | |
| email | string | Yes | Email | |
| phone | string | yes | mobile phone | |
| address | string | yes | address | |
| birthdate | string | yes | birthday | |
| blocked | boolean | yes | locked | |
| isTenantAdmin | boolean | yes | tenant administrator | |
| lastIP | string | yes | last login IP | |
| lastLoginApp | string | yes | last login app | |
| lastLoginAppLogo | string | yes | last login app Logo | |
| lastLoginAppName | string | yes | last login appName | |
| loginsCount | number | yes | number of logins | |
| memberId | string | yes | tenant member ID | |
| linkUserId | string | yes | user ID at the associated user pool level | |

