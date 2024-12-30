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

Fuzzy search will perform fuzzy search on users from five fields: `phone`, `email`, `name`, `username`, `nickname` by default. You can also set `options.fuzzySearchOn`
to determine the fuzzy matching field range:

```json
{
  "keywords": "xxxx",
  "options": {
    "fuzzySearchOn": ["address"]
  }
}
```

### Advanced search example

You can use `advancedFilter` to perform advanced search. Advanced search supports filtering users by user basic information, custom data, department, user source, login application, external identity source information, etc.
**These filtering conditions can be combined arbitrarily. **

#### Filter users with disabled status

User status (`status`) is a string type, with optional values `Activated` and `Suspended`:

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

#### Filter users with email containing `@example.com`

User email (`email`) is a string type, and can be fuzzy searched:

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

#### Search by any extended field of the user

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

#### Filter users by login count

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

Filter users with login count between 10 and 100:

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

#### Filter users by last login time

Filter users who logged in within the last 7 days:

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

Filter users who logged in within a certain period of time:

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

#### Filter users who have logged in through an application

Filter users who have logged in through application `appId1` or `appId2`:

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

#### Filter users by department

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

## Method name

`ManagementClient.list_public_accounts`

## Request parameters

| Name           | Type                                                                                             | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>         | <div style="width:200px">Sample value</div>                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------- | ------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --- | ------- | ------------------------------------------------------------------------ | --- | --- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keywords       | string                                                                                           | No                                            | -                                           | Fuzzy search keywords                              | `Zhang San`                                                                                                           |
| advancedFilter | <a href="#ListPublicAccountsAdvancedFilterItemDto">ListPublicAccountsAdvancedFilterItemDto[]</a> | No                                            | -                                           | Advanced search                                    | `[{"field":"status","operator":"EQUAL","value":"Activated"}]`                                                         |
| searchQuery    | object                                                                                           | No                                            | -                                           | Use ES query statements to execute search commands | `{"query":{"bool":{"must":[{"term":{"phone":"18818888888"}}],"must_not":[]}},"sort":["_score",{"created_at":"ASC"}]}` |     | options | <a href="#ListPublicAccountsOptionsDto">ListPublicAccountsOptionsDto</a> | No  | -   | Optional | `{"pagination":{"page":1,"limit":10},"fuzzySearchOn":["phone","email","name","username","nickname","identityNumber"],"withCustomData":true,"withDepartmentIds":true}` |

## Request Response

Type: `PublicAccountPaginatedRespDto`

| Name       | Type                                                         | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                                       | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                                       | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#PublicAccountPagingDto">PublicAccountPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

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
      "name": "xxx",
      "nickname": "xxx",
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
      "address": "xxx",
      "streetAddress": "xxx",
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
        "school": "xx",
        "age": 22
      },
      "statusChangedAt": "2022-07-03T03:20:30.000Z"
    }
  }
}
```

## Data Structure

### <a id="ListPublicAccountsAdvancedFilterItemDto"></a> ListPublicAccountsAdvancedFilterItemDto

| Name     | Type   | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | <div style="width:200px">Sample value</div> |
| -------- | ------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| field    | string | yes                                                   | Specific public account fields for advanced search:<br>- `id`: public account ID<br>- `phone`: phone number <br>- `email`: email address<br>- `username`: username<br>- `externalId`: public account ID in external system<br>- `name`: name<br>- `status`: public account status, optional values ​​are `Activated` and `Suspended`<br>- `gender`: public account gender, optional values ​​are `M` (male), `F` (female) and `U` (unknown)<br>- `birthdate`: date of birth<br>- `givenName`: first name<br>- `familyName`: last name<br>- `preferredUsername`: Preferred Username<br>- `profile`: profile<br>- `country`: country<br>- `province`: province<br>- `zoneinfo`: Time zone<br>- `website`: personal website<br>- `address`: address<br>- `streetAddress`: street address<br>- `company`: company<br>- `postalCode`: postal code<br>- `formatted`: formatted address<br>- `signedUp`: registration time<br>- `locale`: language information<br>- `lastLogin`: last login time, as timestamp type<br>- `loginsCount`: number of logins, as numeric type<br>- `lastLoginApp`: last logged in application ID<br>- `userSource`: public account source, see the example for specific usage<br>- `department`: public account department, see the example for specific usage<br>- `loggedInApps`: applications that have been logged in, see the example for specific usage<br>- ... Other custom fields<br> | `nickname`                                  |
| operator | string | yes                                                   | Operator, optional values ​​are:<br>- `EQUAL`: all equal, applicable to all equal matching of numbers and strings<br>- `NOT_EQUAL`: not equal, applicable to matching of numbers and strings<br>- `CONTAINS`: string contains<br>- `NOT_CONTAINS`: string does not contain<br>- `IS_NULL`: empty<br>- `NOT_NULL`: not empty<br>- `IN`: an element in an array<br>- `GREATER`: greater than or equal to, applicable to comparison of numbers and date type data<br>- `LESSER`: less than or equal to, applicable to comparison of numbers and date type data<br>- `BETWEEN`: between something, applicable to comparison of numbers and date type data<br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | EQUAL                                       |
| value    | object | No                                                    | Search value, different `field` may correspond to different `value` types, see examples for details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `test`                                      |

### <a id="ListPublicAccountsOptionsDto"></a> ListPublicAccountsOptionsDto

| Name              | Type    | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | <div style="width:200px">Sample value</div>                                             |
| ----------------- | ------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| pagination        |         | No                                                    | Pagination configuration Nested type: <a href="#PaginationDto">PaginationDto</a>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `{"page":1,"limit":10}`                                                                 |
| sort              | array   | No                                                    | Sorting settings, you can set multiple items to be sorted according to multiple fields Nested type: <a href="#SortingDto">SortingDto</a>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `[{"field":"createdAt","direction":"desc"},{"field":"loginsCount","direction":"desc"}]` |
| fuzzySearchOn     | array   | No                                                    | Fuzzy search matching public account fields, optional values ​​are:<br>- `phone`: public account phone number, cannot contain phone number area code, included by default<br>- `email`: public account email address, included by default<br>- `name`: public account name, included by default<br>- `username`: username, included by default<br>- `nickname`: public account nickname, included by default<br>- `id`: public account ID<br>- `company`: company<br>- `givenName`: first name<br>- `familyName`: last name<br>- `middleName`: middle name<br>- `preferredUsername`: Preferred Username<br>- `profile`: profile<br>- `website`: personal website<br>- `address`: address<br>- `formatted`: formatted address<br>- `streetAddress`: street address<br>- `postalCode`: postal code<br> |                                                                                         |
| withCustomData    | boolean | no                                                    | whether to get custom data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `true`                                                                                  |
| withDepartmentIds | boolean | no                                                    | whether to get department ID list                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `true`                                                                                  |

### <a id="PaginationDto"></a> PaginationDto

| Name  | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| ----- | ------ | -------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| page  | number | No                                     | Current page number, starting from 1                     | `1`                                         |
| limit | number | No                                     | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |

### <a id="SortingDto"></a> SortingDto

| Name  | Type   | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | <div style="width:200px">Sample value</div> |
| ----- | ------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| field | string | yes                                                   | The field to be sorted. Optional values ​​are:<br>- `createdAt`: creation time<br>- `updatedAt`: modification time<br>- `email`: email address<br>- `phone`: phone number<br>- `username`: username<br>- `externalId`: external ID<br>- `status`: public account status<br>- `statusChangedAt`: status change time<br>- `passwordLastSetAt`: password change time<br>- `loginsCount`: number of logins<br>- `gender`: gender<br>- `lastLogin`: last login time<br>- `userSourceType`: public account registration source<br>- `lastMfaTime`: last MFA authentication time<br>- `passwordSecurityLevel`: password security level<br>- `phoneCountryCode`: Mobile phone area code<br>- `lastIp`: IP used for last login<br> | createdAt                                   |
| order | string | yes                                                   | Sorting order:<br>- `desc`: Sort by descending order from largest to smallest.<br>- `asc`: Sort by ascending order from smallest to largest.<br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | desc                                        |

### <a id="PublicAccountPagingDto"></a> PublicAccountPagingDto

| Name       | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                               | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------- |
| totalCount | number | Yes                                    | Total number of records                                                  |                                             |
| list       | array  | Yes                                    | Data list Nested type: <a href="#PublicAccountDto">PublicAccountDto</a>. |                                             |

### <a id="PublicAccountDto"></a> PublicAccountDto

| Name                     | Type    | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                 | <div style="width:200px">Sample value</div>                                                                                                                      |
| ------------------------ | ------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId                   | string  | Yes                                                   | The unique identifier of the user, which can be user ID, user name, email, phone number, externalId, or ID in an external identity source. For details, see the description of the userIdType field. The default is user id.                                                                                                                                               | `6229ffaxxxxxxxxcade3e3d9`                                                                                                                                       |
| createdAt                | string  | yes                                                   | creation time                                                                                                                                                                                                                                                                                                                                                              | `2022-07-03T03:20:30.000Z`                                                                                                                                       |
| updatedAt                | string  | yes                                                   | update time                                                                                                                                                                                                                                                                                                                                                                | `2022-07-03T03:20:30.000Z`                                                                                                                                       |
| status                   | string  | yes                                                   | current status of the account:<br>- Activated: normal status<br>- Suspended: deactivated<br>- Deactivated: disabled<br>- Resigned: resigned<br>- Archived: archived<br>                                                                                                                                                                                                    | Suspended                                                                                                                                                        |
| workStatus               | string  | yes                                                   | current work status of the account                                                                                                                                                                                                                                                                                                                                         | Closed                                                                                                                                                           |
| externalId               | string  | no                                                    | third-party external ID                                                                                                                                                                                                                                                                                                                                                    | `10010`                                                                                                                                                          |
| email                    | string  | no                                                    | email address, case insensitive                                                                                                                                                                                                                                                                                                                                            | `test@example.com`                                                                                                                                               |
| phone                    | string  | no                                                    | Phone number without area code. If it is an international phone number, please specify the area code in the phoneCountryCode parameter.                                                                                                                                                                                                                                    | `188xxxx8888`                                                                                                                                                    |
| phoneCountryCode         | string  | no                                                    | Phone area code. This parameter is optional for phone numbers in mainland China. The GenAuth SMS service does not yet support international phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes. | `+86`                                                                                                                                                            |
| username                 | string  | no                                                    | User name, unique in the user pool                                                                                                                                                                                                                                                                                                                                         | `bob`                                                                                                                                                            |
| name                     | string  | no                                                    | User's real name, not unique                                                                                                                                                                                                                                                                                                                                               | `Zhang San`                                                                                                                                                      |
| nickname                 | string  | no                                                    | Nickname                                                                                                                                                                                                                                                                                                                                                                   | `Zhang San`                                                                                                                                                      |
| photo                    | string  | no                                                    | Avatar link                                                                                                                                                                                                                                                                                                                                                                | `https://files.authing.co/authing-console/default-user-avatar.png`                                                                                               |
| loginsCount              | number  | no                                                    | History total login times                                                                                                                                                                                                                                                                                                                                                  | `3`                                                                                                                                                              |
| lastLogin                | string  | no                                                    | Last login time                                                                                                                                                                                                                                                                                                                                                            | `2022-07-03T03:20:30.000Z`                                                                                                                                       |
| lastIp                   | string  | no                                                    | Last login IP                                                                                                                                                                                                                                                                                                                                                              | `127.0.0.1`                                                                                                                                                      |
| gender                   | string  | no                                                    | Gender:<br>- `M`: Male，`male`<br>- `F`: Female，`female`<br>- `U`: Unknown，`unknown`<br>                                                                                                                                                                                                                                                                                 | M                                                                                                                                                                |
| emailVerified            | boolean | no                                                    | Email verification                                                                                                                                                                                                                                                                                                                                                         | `true`                                                                                                                                                           |
| phoneVerified            | boolean | no                                                    | Phone number verification                                                                                                                                                                                                                                                                                                                                                  | `true`                                                                                                                                                           |
| passwordLastSetAt        | string  | no                                                    | User last password modification time                                                                                                                                                                                                                                                                                                                                       | `2022-07-03T03:20:30.000Z`                                                                                                                                       |
| birthdate                | string  | no                                                    | Birthdate                                                                                                                                                                                                                                                                                                                                                                  | `2022-06-03`                                                                                                                                                     |
| country                  | string  | no                                                    | Country                                                                                                                                                                                                                                                                                                                                                                    | `CN`                                                                                                                                                             |
| province                 | string  | no                                                    | Province                                                                                                                                                                                                                                                                                                                                                                   | `BJ`                                                                                                                                                             |
| city                     | string  | no                                                    | City                                                                                                                                                                                                                                                                                                                                                                       | `BJ`                                                                                                                                                             |
| address                  | string  | no                                                    | Address                                                                                                                                                                                                                                                                                                                                                                    | `xxx`                                                                                                                                                            |
| streetAddress            | string  | no                                                    | Street address                                                                                                                                                                                                                                                                                                                                                             | `xxx`                                                                                                                                                            |
| postalCode               | string  | no                                                    | Postal code                                                                                                                                                                                                                                                                                                                                                                | `438100`                                                                                                                                                         |
| company                  | string  | no                                                    | Company                                                                                                                                                                                                                                                                                                                                                                    | `steamory`                                                                                                                                                       |
| browser                  | string  | no                                                    | Browser                                                                                                                                                                                                                                                                                                                                                                    | `Mozilla/5.0 (Linux; Android 10; V2001A; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.2.10.0` |
| device                   | string  | no                                                    | Device                                                                                                                                                                                                                                                                                                                                                                     | `iOS`                                                                                                                                                            |
| givenName                | string  | no                                                    | Given name                                                                                                                                                                                                                                                                                                                                                                 | `xx`                                                                                                                                                             |
| familyName               | string  | no                                                    | Family name                                                                                                                                                                                                                                                                                                                                                                | `xxx`                                                                                                                                                            |
| middleName               | string  | no                                                    | Middle name                                                                                                                                                                                                                                                                                                                                                                | `James`                                                                                                                                                          |
| profile                  | string  | no                                                    | Preferred Username                                                                                                                                                                                                                                                                                                                                                         | `alice`                                                                                                                                                          |
| preferredUsername        | string  | no                                                    | Preferred Username                                                                                                                                                                                                                                                                                                                                                         | `alice`                                                                                                                                                          |
| website                  | string  | no                                                    | Website                                                                                                                                                                                                                                                                                                                                                                    | `https://my-website.com`                                                                                                                                         |
| zoneinfo                 | string  | no                                                    | Zoneinfo                                                                                                                                                                                                                                                                                                                                                                   | `GMT-08:00`                                                                                                                                                      |
| locale                   | string  | no                                                    | Locale                                                                                                                                                                                                                                                                                                                                                                     | `af`                                                                                                                                                             |
| formatted                | string  | no                                                    | Formatted                                                                                                                                                                                                                                                                                                                                                                  | `132, My Street, Kingston, New York 12401.`                                                                                                                      |
| region                   | string  | no                                                    | Region                                                                                                                                                                                                                                                                                                                                                                     | `Xinjiang Uyghur Autonomous Region`                                                                                                                              |
| userSourceType           | string  | yes                                                   | Source type:<br>- `excel`: Imported through excel<br>- `register`: User self-registration<br>- `adminCreated`: Manual creation by the administrator backend (including creating users using the management API)<br>- `syncTask`: Synchronization task of the synchronization center <br>                                                                                   | excel                                                                                                                                                            |
| userSourceId             | string  | no                                                    | Application ID or synchronization task ID                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                  |
| lastLoginApp             | string  | no                                                    | Last login application ID                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                  |
| mainDepartmentId         | string  | no                                                    | Main department ID                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                  |
| lastMfaTime              | string  | No                                                    | The time when the user last performed MFA authentication                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                  |
| passwordSecurityLevel    | number  | no                                                    | Password security level                                                                                                                                                                                                                                                                                                                                                    | `1`                                                                                                                                                              |
| resetPasswordOnNextLogin | boolean | no                                                    | Next login requires password reset                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                  |
| registerSource           | array   | no                                                    | Registration method                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                  |
| departmentIds            | array   | No                                                    | List of department IDs to which the public account belongs                                                                                                                                                                                                                                                                                                                 | `["624d930c3xxxx5c08dd4986e","624d93102xxxx012f33cd2fe"]`                                                                                                        |
| identityNumber           | string  | No                                                    | User ID number                                                                                                                                                                                                                                                                                                                                                             | `420421xxxxxxxx1234`                                                                                                                                             |
| customData               | object  | No                                                    | Extended field data of the public account                                                                                                                                                                                                                                                                                                                                  | `{"school":"Peking University","age":22}`                                                                                                                        |
| statusChangedAt          | string  | No                                                    | Last modified time of the public account status                                                                                                                                                                                                                                                                                                                            | `2022-07-03T03:20:30.000Z`                                                                                                                                       |
| tenantId                 | string  | No                                                    | User tenant ID                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                  |
