# Get/search the public account list

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

This interface is used to obtain the user list, supports fuzzy search, and filters users by user basic fields, user custom fields, user department, user history login application and other dimensions.

### Fuzzy search example

Fuzzy search will perform fuzzy search on users from five fields by default: `phone`, `email`, `name`, `username`, `nickname`. You can also set `options.fuzzySearchOn`
to determine the fuzzy matching field range:

```json
{
  "keywords": "Beijing",
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
    "field": "lastLogin",
    "operator": "BETWEEN",
    "value": [
      Date.now() - 14 * 24 * 60 * 60 * 1000,
      Date.now() - 7 * 24 * 60 * 60 * 1000
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

#### Filter by user department

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

## Method Name

`ManagementClient.listPublicAccounts`

## Request Parameters

| Name           | Type                                                                                             | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>         | <div style="width:200px">Example Value</div>                                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keywords       | string                                                                                           | No                                           | -                                           | Fuzzy search keywords                              | `Zhang San`                                                                                                                                                           |
| advancedFilter | <a href="#ListPublicAccountsAdvancedFilterItemDto">ListPublicAccountsAdvancedFilterItemDto[]</a> | No                                           | -                                           | Advanced search                                    | `[{"field":"status","operator":"EQUAL","value":"Activated"}]`                                                                                                         |
| searchQuery    | object                                                                                           | No                                           | -                                           | Use ES query statements to execute search commands | `{"query":{"bool":{"must":[{"term":{"phone":"18818888888"}}],"must_not":[]}},"sort":["_score",{"created_at":"ASC"}]}`                                                 |
| options        | <a href="#ListPublicAccountsOptionsDto">ListPublicAccountsOptionsDto</a>                         | No                                           | -                                           | Optional                                           | `{"pagination":{"page":1,"limit":10},"fuzzySearchOn":["phone","email","name","username","nickname","identityNumber"],"withCustomData":true,"withDepartmentIds":true}` |

## Request Response

Type： `PublicAccountPaginatedRespDto`

| Name       | Type                                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                       | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                       | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                       | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#PublicAccountPagingDto">PublicAccountPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "userId": "6229ffaxxxxxxxxcade3e3d9",
      "createdAt": "2022-07-03T03:20:30.000Z",
      "updatedAt": "2022-07-03T03:20:30.000Z",
      "status": "Activated",
      "workStatus": "Active",
      "externalId": "10010",
      "email": "test@example.com",
      "phone": "188xxxx8888",
      "phoneCountryCode": "+86",
      "username": "bob",
      "name": "Zhang San",
      "nickname": "Zhang San",
      "photo": "https://files.authing.co/authing-console/default-user-avatar.png",
      "loginsCount": 3,
      "lastLogin": "2022-07-03T03:20:30.000Z",
      "lastIp": "127.0.0.1",
      "gender": "M",
      "emailVerified": true,
      "phoneVerified": true,
      "passwordLastSetAt": "2022-07-03T03:20:30.000Z",
      "birthdate": "2022-06-03",
      "country": "CN",
      "province": "BJ",
      "city": "BJ",
      "address": "Beijing Chaoyang",
      "streetAddress": "xx Street, Chaoyang District, Beijing",
      "postalCode": "438100",
      "company": "steamory",
      "browser": "Mozilla/5.0 (Linux; Android 10; V2001A; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.2.10.0",
      "device": "iOS",
      "givenName": "San",
      "familyName": "Zhang",
      "middleName": "James",
      "profile": "alice",
      "preferredUsername": "alice",
      "website": "https://my-website.com",
      "zoneinfo": "GMT-08:00",
      "locale": "af",
      "formatted": "132, My Street, Kingston, New York 12401.",
      "region": "Xinjiang Uyghur Autonomous Region",
      "userSourceType": "register",
      "passwordSecurityLevel": 1,
      "departmentIds": "[\"624d930c3xxxx5c08dd4986e\",\"624d93102xxxx012f33cd2fe\"]",
      "identityNumber": "420421xxxxxxxx1234",
      "customData": {
        "school": "Beijing University",
        "age": 22
      },
      "statusChangedAt": "2022-07-03T03:20:30.000Z"
    }
  }
}
```

## Data Structure

### <a id="ListPublicAccountsAdvancedFilterItemDto"></a> ListPublicAccountsAdvancedFilterItemDto

| Name              | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | <div style="width:200px">Example Value</div>                                            |
| ----------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---- | ---- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- | --- | --------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ---------- | --- | --- | --------------------------------------------------------------------------------- | ----------------------- |
| field             | string  | yes                                          | Specific public account fields for advanced search:<br>- `id`: public account ID<br>- `phone`: phone number <br>- `email`: email address<br>- `username`: username<br>- `externalId`: public account ID in external system<br>- `name`: name<br>- `status`: public account status, optional values ​​are `Activated` and `Suspended`<br>- `gender`: public account gender, optional values ​​are `M` (male), `F` (female) and `U` (unknown)<br>- `birthdate`: date of birth<br>- `givenName`: first name<br>- `familyName`: last name<br>- `preferredUsername`: Preferred Username<br>- `profile`: profile<br>- `country`: country<br>- `province`: province<br>- `zoneinfo`: Time zone<br>- `website`: personal website<br>- `address`: address<br>- `streetAddress`: street address<br>- `company`: company<br>- `postalCode`: postal code<br>- `formatted`: formatted address<br>- `signedUp`: registration time<br>- `locale`: language information<br>- `lastLogin`: last login time, as timestamp type<br>- `loginsCount`: number of logins, as numeric type<br>- `lastLoginApp`: last logged in application ID<br>- `userSource`: public account source, see the example for specific use<br>- `department`: public account department, see the example for specific use<br>- `loggedInApps`: applications that have been logged in, see the example for specific use<br>- ... Other custom fields<br> | `nickname`                                                                              |
| operator          | string  | yes                                          | Operator, optional values ​​are: <br>- `EQUAL`: all equal, applicable to all equal matching of numbers and strings <br>- `NOT_EQUAL`: not equal, applicable to matching of numbers and strings <br>- `CONTAINS`: string contains <br>- `NOT_CONTAINS`: string does not contain <br>- `IS_NULL`: empty <br>- `NOT_NULL`: not empty <br>- `IN`: an element in an array <br>- `GREATER`: greater than or equal to, applicable to comparison of numbers and date type data <br>- `LESSER`: less than or equal to, applicable to comparison of numbers and date type data <br>- `BETWEEN`: between something, applicable to comparison of numbers and date type data <br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | EQUAL                                                                                   |
| value             | object  | No                                           | Search value, different `field` may correspond to different `value` types, see examples for details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `test`                                                                                  | ### <a id="ListPublicAccountsOptionsDto"></a> ListPublicAccountsOptionsDto | Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |     | --------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |     | pagination |     | No  | Pagination configuration Nested Type: <a href="#PaginationDto">PaginationDto</a>. | `{"page":1,"limit":10}` |
| sort              | array   | No                                           | Sorting settings, you can set multiple items to sort by multiple fields Nested Type: <a href="#SortingDto">SortingDto</a>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `[{"field":"createdAt","direction":"desc"},{"field":"loginsCount","direction":"desc"}]` |
| fuzzySearchOn     | array   | No                                           | Fuzzy search matching public account fields, optional values ​​are:<br>- `phone`: public account phone number, cannot contain phone number area code, included by default<br>- `email`: public account email address, included by default<br>- `name`: public account Name, included by default<br>- `username`: username, included by default<br>- `nickname`: public account nickname, included by default<br>- `id`: public account ID<br>- `company`: company<br>- `givenName`: first name<br>- `familyName`: last name<br>- `middleName`: middle name<br>- `preferredUsername`: Preferred Username<br>- `profile`: profile<br>- `website`: personal website<br>- `address`: address<br>- `formatted`: formatted address<br>- `streetAddress`: street address<br>- `postalCode`: postal code<br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                         |
| withCustomData    | boolean | no                                           | whether to obtain custom data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `true`                                                                                  |
| withDepartmentIds | boolean | no                                           | whether to obtain department ID list                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `true`                                                                                  |

### <a id="PaginationDto"></a> PaginationDto

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Example Value</div> |
| ----- | ------ | -------------------------------------------- | -------------------------------------------------------- | -------------------------------------------- |
| page  | number | No                                           | Current page number, starting from 1                     | `1`                                          |
| limit | number | No                                           | Number per page, maximum cannot exceed 50, default is 10 | `10`                                         |

### <a id="SortingDto"></a> SortingDto

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | <div style="width:200px">Example Value</div> |
| ----- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| field | string | yes                                          | The field to be sorted. Optional values ​​are:<br>- `createdAt`: creation time<br>- `updatedAt`: modification time<br>- `email`: email address<br>- `phone`: phone number<br>- `username`: username<br>- `externalId`: external ID<br>- `status`: public account status<br>- `statusChangedAt`: status change time<br>- `passwordLastSetAt`: password change time<br>- `loginsCount`: number of logins<br>- `gender`: gender<br>- `lastLogin`: last login time<br>- `userSourceType`: public account registration source<br>- `lastMfaTime`: last MFA authentication time<br>- `passwordSecurityLevel`: password security level<br>- `phoneCountryCode`: mobile area code<br>- `lastIp`: The IP used for the last login<br> | createdAt                                    |
| order | string | yes                                          | Sorting order:<br>- `desc`: Sort by descending order from largest to smallest.<br>- `asc`: Sort by ascending order from smallest to largest.<br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | desc                                         |

### <a id="PublicAccountPagingDto"></a> PublicAccountPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | yes                                          | Total number of records                                                   |                                              |
| list       | array  | yes                                          | Data List Nested Type：<a href="#PublicAccountDto">PublicAccountDto</a>。 |                                              |

### <a id="PublicAccountDto"></a> PublicAccountDto

| Name                     | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                      | <div style="width:200px">Example Value</div>                                                                                                                     |
| ------------------------ | ------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId                   | string  | Yes                                          | The unique identifier of the user, which can be user ID, user name, email, phone number, externalId, or ID in an external identity source. For details, see the description of the userIdType field. The default is user id.                                                                                                                                                                    | `6229ffaxxxxxxxxcade3e3d9`                                                                                                                                       |
| createdAt                | string  | yes                                          | creation time                                                                                                                                                                                                                                                                                                                                                                                   | `2022-07-03T03:20:30.000Z`                                                                                                                                       |
| updatedAt                | string  | yes                                          | update time                                                                                                                                                                                                                                                                                                                                                                                     | `2022-07-03T03:20:30.000Z`                                                                                                                                       |
| status                   | string  | yes                                          | current status of the account:<br>- Activated: normal status<br>- Suspended: deactivated<br>- Deactivated: disabled<br>- Resigned: resigned<br>- Archived: archived<br>                                                                                                                                                                                                                         | Suspended                                                                                                                                                        |
| workStatus               | string  | yes                                          | current work status of the account                                                                                                                                                                                                                                                                                                                                                              | Closed                                                                                                                                                           |
| externalId               | string  | no                                           | third-party external ID                                                                                                                                                                                                                                                                                                                                                                         | `10010`                                                                                                                                                          |
| email                    | string  | no                                           | email address, case insensitive                                                                                                                                                                                                                                                                                                                                                                 | `test@example.com`                                                                                                                                               |
| phone                    | string  | No                                           | Phone number without area code. If it is a foreign phone number, specify the area code in the phoneCountryCode parameter.                                                                                                                                                                                                                                                                       | `188xxxx8888`                                                                                                                                                    |
| phoneCountryCode         | string  | No                                           | Mobile phone area code. This field is optional for mainland China mobile phone numbers. The GenAuth SMS service does not yet support international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of mobile phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes. | `+86`                                                                                                                                                            |
| username                 | string  | No                                           | Username, unique in the user pool                                                                                                                                                                                                                                                                                                                                                               | `bob`                                                                                                                                                            |
| name                     | string  | No                                           | User's real name, not unique                                                                                                                                                                                                                                                                                                                                                                    | `Zhang San`                                                                                                                                                      |
| nickname                 | string  | No                                           | Nickname                                                                                                                                                                                                                                                                                                                                                                                        | `Zhang San`                                                                                                                                                      |
| photo                    | string  | No                                           | Avatar link                                                                                                                                                                                                                                                                                                                                                                                     | `https://files.authing.co/authing-console/default-user-avatar.png`                                                                                               |
| loginsCount              | number  | No                                           | Total number of historical logins                                                                                                                                                                                                                                                                                                                                                               | `3`                                                                                                                                                              |
| lastLogin                | string  | No                                           | Last login time                                                                                                                                                                                                                                                                                                                                                                                 | `2022-07-03T03:20:30.000Z`                                                                                                                                       |
| lastIp                   | string  | No                                           | Last login IP                                                                                                                                                                                                                                                                                                                                                                                   | `127.0.0.1`                                                                                                                                                      |
| gender                   | string  | Yes                                          | Gender:<br>- `M`: Male, `male`<br>- `F`: Female, `female`<br>- `U`: unknown, `unknown`<br>                                                                                                                                                                                                                                                                                                      | M                                                                                                                                                                |
| emailVerified            | boolean | yes                                          | Email verified                                                                                                                                                                                                                                                                                                                                                                                  | `true`                                                                                                                                                           |
| phoneVerified            | boolean | yes                                          | Phone number verified                                                                                                                                                                                                                                                                                                                                                                           | `true`                                                                                                                                                           |
| passwordLastSetAt        | string  | no                                           | User's last password change time                                                                                                                                                                                                                                                                                                                                                                | `2022-07-03T03:20:30.000Z`                                                                                                                                       |
| birthdate                | string  | No                                           | Date of birth                                                                                                                                                                                                                                                                                                                                                                                   | `2022-06-03`                                                                                                                                                     |
| country                  | string  | No                                           | Country                                                                                                                                                                                                                                                                                                                                                                                         | `CN`                                                                                                                                                             |
| province                 | string  | No                                           | Province                                                                                                                                                                                                                                                                                                                                                                                        | `BJ`                                                                                                                                                             |
| city                     | string  | No                                           | City                                                                                                                                                                                                                                                                                                                                                                                            | `BJ`                                                                                                                                                             |
| address                  | string  | No                                           | Address                                                                                                                                                                                                                                                                                                                                                                                         | `Beijing Chaoyang`                                                                                                                                               |
| streetAddress            | string  | No                                           | Street address                                                                                                                                                                                                                                                                                                                                                                                  | `Beijing Chaoyang District xxx Street`                                                                                                                           |
| postalCode               | string  | No                                           | Postal code                                                                                                                                                                                                                                                                                                                                                                                     | `438100`                                                                                                                                                         |
| company                  | string  | No                                           | Company                                                                                                                                                                                                                                                                                                                                                                                         | `steamory`                                                                                                                                                       |
| browser                  | string  | No                                           | Last browser used for login UA                                                                                                                                                                                                                                                                                                                                                                  | `Mozilla/5.0 (Linux; Android 10; V2001A; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.2.10.0` |
| device                   | string  | No                                           | The device used when logging in last time                                                                                                                                                                                                                                                                                                                                                       | `iOS`                                                                                                                                                            |
| givenName                | string  | no                                           | first name                                                                                                                                                                                                                                                                                                                                                                                      | `xxx`                                                                                                                                                            |
| familyName               | string  | no                                           | last name                                                                                                                                                                                                                                                                                                                                                                                       | `xxx`                                                                                                                                                            |
| middleName               | string  | no                                           | middle name                                                                                                                                                                                                                                                                                                                                                                                     | `James`                                                                                                                                                          |
| profile                  | string  | no                                           | Preferred Username                                                                                                                                                                                                                                                                                                                                                                              | `alice`                                                                                                                                                          |
| preferredUsername        | string  | no                                           | Preferred Username                                                                                                                                                                                                                                                                                                                                                                              | `alice`                                                                                                                                                          |
| website                  | string  | no                                           | User personal website                                                                                                                                                                                                                                                                                                                                                                           | `https://my-website.com`                                                                                                                                         |
| zoneinfo                 | string  | no                                           | User time zone information                                                                                                                                                                                                                                                                                                                                                                      | `GMT-08:00`                                                                                                                                                      |
| locale                   | string  | no                                           | Locale                                                                                                                                                                                                                                                                                                                                                                                          | `af`                                                                                                                                                             |
| formatted                | string  | no                                           | Full standard address                                                                                                                                                                                                                                                                                                                                                                           | `132, My Street, Kingston, New York 12401.`                                                                                                                      |
| region                   | string  | no                                           | User location                                                                                                                                                                                                                                                                                                                                                                                   | `Xinjiang Uyghur Autonomous Region`                                                                                                                              |
| userSourceType           | string  | yes                                          | Source type:<br>- `excel`: via excel Import<br>- `register`: User self-registration<br>- `adminCreated`: Manual creation by the administrator (including creating users using the management API)<br>- `syncTask`: Sync task in the sync center <br>                                                                                                                                            | excel                                                                                                                                                            |
| userSourceId             | string  | No                                           | Application ID or sync task ID                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                  |
| lastLoginApp             | string  | no                                           | ID of the application that the user last logged in                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                  |
| mainDepartmentId         | string  | no                                           | ID of the user's main department                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                  |
| lastMfaTime              | string  | no                                           | Time when the user last performed MFA authentication                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                  |
| passwordSecurityLevel    | number  | no                                           | User password security strength level                                                                                                                                                                                                                                                                                                                                                           | `1`                                                                                                                                                              |
| resetPasswordOnNextLogin | boolean | no                                           | Require password reset on next login                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                  |
| registerSource           | array   | no                                           | Registration method                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                  |
| departmentIds            | array   | no                                           | List of department IDs to which the public account belongs                                                                                                                                                                                                                                                                                                                                      | `["624d930c3xxxx5c08dd4986e","624d93102xxxx012f33cd2fe"]`                                                                                                        |
| identityNumber           | string  | no                                           | User ID number                                                                                                                                                                                                                                                                                                                                                                                  | `420421xxxxxxxx1234`                                                                                                                                             |
| customData               | object  | no                                           | Extended field data of public account                                                                                                                                                                                                                                                                                                                                                           | `{"school":"Beijing University","age":22}`                                                                                                                       |
| statusChangedAt          | string  | No                                           | Last modified time of public account status                                                                                                                                                                                                                                                                                                                                                     | `2022-07-03T03:20:30.000Z`                                                                                                                                       |
| tenantId                 | string  | No                                           | User tenant ID                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                  |
