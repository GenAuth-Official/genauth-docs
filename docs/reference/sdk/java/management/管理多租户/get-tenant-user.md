# Get a single tenant member

<!--
WARNING ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
use this project to generate
-->

<LastUpdated />

Get tenant member information based on user ID or tenant member ID

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| tenantId | string | yes | - | tenant ID | |
| linkUserId | string | no | - | user ID at the associated user pool level | |
| memberId | string | no | - | tenant member ID | |



  
## Request Response

Type： `TenantUserSingleRespDto`

| Name | Type | Description |
| ---- | ---- | ---- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message | string | Description |
| apiCode | number | Segmented error code, which can be used to get the specific error type. |
| requestId | string | Request ID. It will be returned when the request fails. |
| data | <a href="#TenantUserDto">TenantUserDto</a> | Response data |



Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "tenantId": "60b49eb83fd80adb96f26e68",
    "userPoolId": "60b49eb83fd80adb96f26e68"
  }
}
```

## Data Structure


### <a id="TenantUserDto"></a> TenantUserDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- |  ---- | ---- | ---- | ---- |
| tenantId | string | yes | tenant ID | `60b49eb83fd80adb96f26e68` |
| userPoolId | string | yes | user pool ID | `60b49eb83fd80adb96f26e68` |
| username | string | yes | username | |
| name | string | yes | name | |
| nickname | string | yes | nickname | |
| email | string | yes | email | |
| phone | string | yes | phone | |
| address | string | yes | address | |
| birthdate | string | yes | birthday | |
| blocked | boolean | yes | locked | |
| isTenantAdmin | boolean | yes | tenant administrator | |
| lastIP | string | yes | last login IP | |
| lastLoginApp | string | yes | last login app | |
| lastLoginAppLogo | string | yes | Last login app logo | |
| lastLoginAppName | string | yes | Last login app name | |
| loginsCount | number | yes | Number of logins | |
| memberId | string | yes | Tenant member ID | |
| linkUserId | string | yes | User ID at the associated user pool level | |


