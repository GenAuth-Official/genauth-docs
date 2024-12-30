# Get the list of tenant administrators

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This interface is used to obtain the list of tenant members and supports fuzzy search.

## Request parameters

| Name              | Type    | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------------- | ------- | --------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| tenantId          | string  | yes                                           | -                                           | Tenant ID                                  |                                             |
| keywords          | string  | no                                            | -                                           | Search keywords                            |                                             |
| page              | string  | no                                            | -                                           | Page number                                |                                             |
| limit             | string  | no                                            | -                                           | Data amount to get per page                |                                             |
| withCustomData    | boolean | no                                            | -                                           | Whether to return custom fields            |                                             |
| withIdentities    | boolean | no                                            | -                                           |                                            |                                             |
| withDepartmentIds | boolean | no                                            | -                                           | Whether to return department information   |                                             |

## Request response

Type: `TenantUserListPaginatedRespDto`

| Name       | Type                                                           | Description                                                                                                  |
| ---------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                         | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                         | Description                                                                                                  |
| apiCode    | number                                                         | Segment error code, which can be used to get the specific error type.                                        |
| requestId  | string                                                         | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#TenantUserListPagingDto">TenantUserListPagingDto</a> | data                                                                                                         |

Sample result:

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

## Data structure

### <a id="TenantUserListPagingDto"></a> TenantUserListPagingDto

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                             | <div style="width:200px">Sample value</div> |
| ---------- | ------ | --------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                           | Total number of records                                                |                                             |
| list       | array  | Yes                                           | Response data Nested type: <a href="#TenantUserDto">TenantUserDto</a>. |                                             |

### <a id="TenantUserDto"></a> TenantUserDto

| Name             | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------------- | ------- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| tenantId         | string  | yes                                           | Tenant ID                                  | `60b49eb83fd80adb96f26e68`                  |
| userPoolId       | string  | yes                                           | User Pool ID                               | `60b49eb83fd80adb96f26e68`                  |
| username         | string  | yes                                           | Username                                   |                                             |
| name             | string  | yes                                           | Full name                                  |                                             |
| nickname         | string  | yes                                           | Nickname                                   |                                             |
| email            | string  | yes                                           | Email                                      |                                             |
| phone            | string  | yes                                           | mobile                                     |                                             |
| address          | string  | yes                                           | address                                    |                                             |
| birthdate        | string  | yes                                           | birthday                                   |                                             |
| blocked          | boolean | yes                                           | locked                                     |                                             |
| isTenantAdmin    | boolean | yes                                           | tenant administrator                       |                                             |
| lastIP           | string  | yes                                           | last login IP                              |                                             |
| lastLoginApp     | string  | yes                                           | last login app                             |                                             |
| lastLoginAppLogo | string  | yes                                           | last login app logo                        |                                             |
| lastLoginAppName | string  | yes                                           | last login app name                        |                                             |
| loginsCount      | number  | yes                                           | number of logins                           |                                             |
| memberId         | string  | yes                                           | tenant member ID                           |                                             |
| linkUserId       | string  | yes                                           | user ID at the associated user pool level  |                                             |
