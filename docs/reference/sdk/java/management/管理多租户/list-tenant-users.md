# Get/search tenant member list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This interface is used to obtain the user list, supports fuzzy search, and filters users by user basic fields, user custom fields, user department, user history login application and other dimensions.

### Fuzzy search example

Fuzzy search will perform fuzzy search on users from five fields by default: `phone`, `email`, `name`, `username`, `nickname`. You can also set `options.fuzzySearchOn`
to determine the fuzzy matching field range:

```json
{
  "keywords": "xxx",
  "options": {
    "fuzzySearchOn": ["address"]
  }
}
```

### Advanced search example

You can use `advancedFilter` to perform advanced search. Advanced search supports filtering users by basic information, custom data, department, user source, login application, external identity source information, etc.
**These filtering conditions can be combined arbitrarily. **

#### Filter users whose status is disabled

User status (`status`) is of string type, and optional values ​​are `Activated` and `Suspended`:

```json
{
  "advancedFilter": [
    {
      "field": "status",
      "operator": "EQUAL",
      "value": "Suspended"
    }
  ]
}
```

#### Filter users whose mailbox contains `@example.com`

User mailbox (`email`) is of string type, and fuzzy search can be performed:

```json
{
  "advancedFilter": [
    {
      "field": "email",
      "operator": "CONTAINS",
      "value": "@example.com"
    }
  ]
}
```

#### Search based on any extended field of the user

```json
{
  "advancedFilter": [
    {
      "field": "some-custom-key",
      "operator": "EQUAL",
      "value": "some-value"
    }
  ]
}
```

#### Filter by the number of user logins

Filter users with more than 10 logins:

```json
{
  "advancedFilter": [
    {
      "field": "loginsCount",
      "operator": "GREATER",
      "value": 10
    }
  ]
}
```

Filter users with 10-100 logins:

```json
{
  "advancedFilter": [
    {
      "field": "loginsCount",
      "operator": "BETWEEN",
      "value": [10, 100]
    }
  ]
}
```

#### Filter by the last login time of the user

Filter users who have logged in within the last 7 days:

```json
{
  "advancedFilter": [
    {
      "field": "lastLoginTime",
      "operator": "GREATER",
      "value": new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    }
  ]
}
```

Filter users who have logged in within a certain period of time:

```json
{
  "advancedFilter": [
    {
      "field": "lastLoginTime",
      "operator": "BETWEEN",
      "value": [
        new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
        new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      ]
    }
  ]
}
```

#### Filter based on the application that the user has logged in

Filter out users who have logged in to the application `appId1` or `appId2`:

```json
{
  "advancedFilter": [
    {
      "field": "loggedInApps",
      "operator": "IN",
      "value": ["appId1", "appId2"]
    }
  ]
}
```

#### Filter by user's department

```json
{
  "advancedFilter": [
    {
      "field": "department",
      "operator": "IN",
      "value": [
        {
          "organizationCode": "steamory",
          "departmentId": "root",
          "departmentIdType": "department_id",
          "includeChildrenDepartments": true
        }
      ]
    }
  ]
}
```

## Request Parameters

| Name              | Type    | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----------------- | ------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| tenantId          | string  | yes                                          | -                                           | tenant ID                                  |                                              |
| keywords          | string  | no                                           | -                                           | search keywords                            |                                              |
| page              | string  | no                                           | -                                           | page number                                |                                              |
| limit             | string  | no                                           | -                                           | amount of data to get per page             |                                              |
| withCustomData    | boolean | no                                           | -                                           | whether to return custom fields            |                                              |
| withIdentities    | boolean | no                                           | -                                           |                                            |                                              |
| withDepartmentIds | boolean | no                                           | -                                           | whether to return department information   |                                              |

## Request Response

Type： `TenantUserListPaginatedRespDto`

| Name       | Type                                                           | Description                                                                                                  |
| ---------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                         | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                         | Description                                                                                                  |
| apiCode    | number                                                         | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                         | Request ID. It will be returned when the request fails.                                                      |
| data       | <a href="#TenantUserListPagingDto">TenantUserListPagingDto</a> | data                                                                                                         |

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

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                              | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | yes                                          | Total number of records                                                 |                                              |
| list       | array  | yes                                          | Response data nested type：<a href="#TenantUserDto">TenantUserDto</a>。 |                                              |

### <a id="TenantUserDto"></a> TenantUserDto

| Name             | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---------------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| tenantId         | string  | yes                                          | tenant ID                                  | `60b49eb83fd80adb96f26e68`                   |
| userPoolId       | string  | yes                                          | user pool ID                               | `60b49eb83fd80adb96f26e68`                   |
| username         | string  | yes                                          | username                                   |                                              |
| name             | string  | yes                                          | name                                       |                                              |
| nickname         | string  | yes                                          | nickname                                   |                                              |
| email            | string  | yes                                          | email                                      |                                              |
| phone            | string  | yes                                          | phone                                      |                                              |
| address          | string  | yes                                          | address                                    |                                              |
| birthdate        | string  | yes                                          | birthday                                   |                                              |
| blocked          | boolean | yes                                          | locked                                     |                                              |
| isTenantAdmin    | boolean | yes                                          | tenant administrator                       |                                              |
| lastIP           | string  | yes                                          | last login IP                              |                                              |
| lastLoginApp     | string  | yes                                          | last login app                             |                                              |
| lastLoginAppLogo | string  | yes                                          | Last login app logo                        |                                              |
| lastLoginAppName | string  | yes                                          | Last login app name                        |                                              |
| loginsCount      | number  | yes                                          | Number of logins                           |                                              |
| memberId         | string  | yes                                          | Tenant member ID                           |                                              |
| linkUserId       | string  | yes                                          | User ID at the associated user pool level  |                                              |
