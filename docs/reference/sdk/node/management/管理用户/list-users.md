# Get/search user list

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

This interface is used to obtain user lists, supports fuzzy search, and filters users by user basic fields, user custom fields, user department, user history login application and other dimensions.

### Fuzzy search example

Fuzzy search will perform fuzzy search on users from five fields by default: `phone`, `email`, `name`, `username`, `nickname`. You can also set `options.fuzzySearchOn`
to determine the field range of fuzzy matching:

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

#### Filter users with disabled status

User status (`status`) is a string type, and the optional values ​​are `Activated` and `Suspended`:

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

#### Filter users whose mailboxes contain `@example.com`

User mailboxes (`email`) are string types and can be fuzzy searched:

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

#### Search based on any extended fields of the user

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

#### Filter by number of user logins

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

Filter users with 10 to 100 login times:

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

#### Filter based on the user's last login time

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

#### Filter based on the applications that the user has logged in

Filter users who have logged in to applications `appId1` or `appId2`:

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

## Method Name

`ManagementClient.listUsers`

## Request Parameters

| Name           | Type                                                                           | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>         | <div style="width:200px">Sample value</div>                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------ | --------------------------------------------- | ------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keywords       | string                                                                         | No                                            | -                                           | Fuzzy search keywords                              | `xxxx xxx`                                                                                                                                                                                  |
| advancedFilter | <a href="#ListUsersAdvancedFilterItemDto">ListUsersAdvancedFilterItemDto[]</a> | No                                            | -                                           | Advanced search                                    | `[{"field":"status","operator":"EQUAL","value":"Activated"}]`                                                                                                                               |
| searchQuery    | object                                                                         | No                                            | -                                           | Use ES query statements to execute search commands | `{"query":{"bool":{"must":[{"term":{"phone":"18818888888"}}],"must_not":[]}},"sort":["_score",{"created_at":"ASC"}]}`                                                                       |
| options        | <a href="#ListUsersOptionsDto">ListUsersOptionsDto</a>                         | No                                            | -                                           | Optional                                           | `{"pagination":{"page":1,"limit":10},"fuzzySearchOn":["phone","email","name","username","nickname","identityNumber"],"withCustomData":true,"withIdentities":true,"withDepartmentIds":true}` |

## Example Code

```ts
import { ManagementClient, Models } from "@genauth/nodejs";

// Init ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If you are a private deployment customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.listUsers({
    page: 1,
    limit: 10,
    withCustomData: true,
    withIdentities: true,
    withDepartmentIds: true,
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request Response

type: `UserPaginatedRespDto`

| Name       | Type                                       | Description                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                       |
| message    | string                                     | Description                                                                                                                                                                                                                                                                                                                                        |
| apiCode    | number                                     | Segmented error code, which can be used to get the specific error type (no return for successful requests). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                       |
| data       | <a href="#UserPagingDto">UserPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                      |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
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
      "name": "xxxx",
      "nickname": "xxxx",
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
      "address": "xxxxxxx",
      "streetAddress": "xxx street",
      "postalCode": "438100",
      "company": "steamory",
      "browser": "Mozilla/5.0 (Linux; Android 10; V2001A; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.2.10.0",
      "device": "iOS",
      "givenName": "xx",
      "familyName": "xx",
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
      "identities": {
        "identityId": "62299d8b866d2dab79a89dc4",
        "extIdpId": "6076bacxxxxxxxxd80d993b5",
        "provider": "wechat",
        "type": "openid",
        "userIdInIdp": "oj7Nq05R-RRaqak0_YlMLnnIwsvg",
        "accessToken": "57_fK0xgSL_NwVlS-gmUwlMQ2N6AONNIOAYxxxx",
        "refreshToken": "57_IZFu91Ak1Wg6DRytZFFIOd3upNF5lH7vPxxxxx",
        "originConnIds": "[\"605492ac41xxxxe0362f0707\"]"
      },
      "identityNumber": "420421xxxxxxxx1234",
      "customData": {
        "school": "xxx",
        "age": 22
      },
      "statusChangedAt": "2022-07-03T03:20:30.000Z"
    }
  }
}
```

Data Structure

### <a id="ListUsersAdvancedFilterItemDto"></a> ListUsersAdvancedFilterItemDto

| Name              | Type    | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | <div style="width:200px">Sample value</div> |
| ----------------- | ------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | --- | ---------------------------------------- | ------ |
| field             | string  | yes                                                   | User fields specified for advanced search:<br>- `id`: User ID<br>- `phone`: Phone number <br>- `email`: Email address<br>- `username`: User name<br>- `externalId`: User ID in the external system<br>- `name`: Name<br>- `status`: User status, optional values ​​are `Activated` and `Suspended`<br>- `gender`: User gender, optional values ​​are `M` (male), `F` (female) and `U` (unknown)<br>- `birthdate`: Date of birth<br>- `givenName`: First name<br>- `familyName`: Last name<br>- `preferredUsername`: Preferred Username<br>- `profile`: Profile<br>- `country`: Country<br>- `province`: Province<br>- `zoneinfo`: Time zone<br>- `website`: personal website<br>- `address`: address<br>- `streetAddress`: street address<br>- `company`: company<br>- `postalCode`: postal code<br>- `formatted`: formatted address<br>- `signedUp`: registration time<br>- `locale`: language information<br>- `lastLogin`: last login time, as timestamp type<br>- `loginsCount`: number of logins, as numeric type<br>- `lastLoginApp`: last logged in application ID<br>- `userSource`: user source, see the example for specific usage<br>- `department`: user department, see the example for specific usage<br>- `loggedInApps`: applications that have been logged in, see the example for specific usage<br>- `identity`: user external identity source information, see the example for specific usage<br>- ... other custom fields<br> | `nickname`                                  |
| operator          | string  | It is the                                             | operator, and the optional values ​​are:<br>- `EQUAL`: all equal, applicable to all equal matching of numbers and strings<br>- `NOT_EQUAL`: not equal, applicable to matching of numbers and strings<br>- `CONTAINS`: string contains<br>- `NOT_CONTAINS`: string does not contain<br>- `IS_NULL`: empty<br>- `NOT_NULL`: not empty<br>- `IN`: an element in an array<br>- `GREATER`: greater than or equal to, applicable to comparison of numbers and date type data<br>- `LESSER`: less than or equal to, applicable to comparison of numbers and date type data<br>- `BETWEEN`: between something, applicable to comparison of numbers and date type data<br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | EQUAL                                       |
| value             | object  | No                                                    | Search value, different `field` may correspond to different `value` types, see the example for details. ost                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | boolean                                     | No  | Whether to obtain department information | `true` |
| withIdentities    | boolean | no                                                    | whether to obtain identities                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `true`                                      |
| withDepartmentIds | boolean | no                                                    | whether to obtain department ID list                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `true`                                      |
| flatCustomData    | boolean | no                                                    | whether to flatten the extension field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                             |

### <a id="PaginationDto"></a> PaginationDto

| Name  | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| ----- | ------ | --------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| page  | number | No                                            | Current page number, starting from 1                     | `1`                                         |
| limit | number | No                                            | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |

### <a id="SortingDto"></a> SortingDto

| Name  | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | <div style="width:200px">Sample value</div> |
| ----- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| field | string | yes                                           | The field to be sorted. Optional values ​​are:<br>- `createdAt`: creation time<br>- `updatedAt`: modification time<br>- `email`: email address<br>- `phone`: phone number<br>- `username`: username<br>- `externalId`: external ID<br>- `status`: public account status<br>- `statusChangedAt`: status change time<br>- `passwordLastSetAt`: password change time<br>- `loginsCount`: number of logins<br>- `gender`: gender<br>- `lastLogin`: last login time<br>- `userSourceType`: public account registration source<br>- `lastMfaTime`: last MFA authentication time<br>- `passwordSecurityLevel`: password security level<br>- `phoneCountryCode`: Mobile phone area code<br>- `lastIp`: IP used for last login<br> | createdAt                                   |
| order | string | yes                                           | Sorting order:<br>- `desc`: Sort by descending order from largest to smallest.<br>- `asc`: Sort by ascending order from smallest to largest.<br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | desc                                        |

### <a id="UserPagingDto"></a> UserPagingDto

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>             | <div style="width:200px">Sample value</div> |
| ---------- | ------ | --------------------------------------------- | ------------------------------------------------------ | ------------------------------------------- |
| totalCount | number | Yes                                           | Total number of records                                |                                             |
| list       | array  | Yes                                           | Data list Nested type: <a href="#UserDto">UserDto</a>. |                                             |

### <a id="UserDto"></a> UserDto

| Name                     | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                      | <div style="width:200px">Sample value</div>                                                                                                                      |
| ------------------------ | ------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId                   | string  | Yes                                           | The unique identifier of the user, which can be user ID, user name, email address, mobile phone number, externalId, or ID in the external identity source. For details, see the description of the userIdType field. The default is user id.                                                                                                                                                    | `6229ffaxxxxxxxxcade3e3d9`                                                                                                                                       |
| createdAt                | string  | Yes                                           | Creation time                                                                                                                                                                                                                                                                                                                                                                                   | `2022-07-03T03:20:30.000Z`                                                                                                                                       |
| updatedAt                | string  | yes                                           | Update time                                                                                                                                                                                                                                                                                                                                                                                     | `2022-07-03T03:20:30.000Z`                                                                                                                                       |
| status                   | string  | yes                                           | Current status of the account:<br>- Activated: Normal status<br>- Suspended: Deactivated<br>- Deactivated: Disabled<br>- Resigned: Resigned<br>- Archived: Archived<br>                                                                                                                                                                                                                         | Suspended                                                                                                                                                        |
| workStatus               | string  | yes                                           | Current work status of the account                                                                                                                                                                                                                                                                                                                                                              | Closed                                                                                                                                                           |
| externalId               | string  | no                                            | Third-party external ID                                                                                                                                                                                                                                                                                                                                                                         | `10010`                                                                                                                                                          |
| email                    | string  | no                                            | Email address, case insensitive                                                                                                                                                                                                                                                                                                                                                                 | `test@example.com`                                                                                                                                               |
| phone                    | string  | no                                            | Mobile number without area code. If it is a foreign mobile number, please specify the area code in the phoneCountryCode parameter.                                                                                                                                                                                                                                                              | `188xxxx8888`                                                                                                                                                    |
| phoneCountryCode         | string  | No                                            | Mobile phone area code. This field is optional for mainland China mobile phone numbers. The GenAuth SMS service does not yet support international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of mobile phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes. | `+86`                                                                                                                                                            |
| username                 | string  | No                                            | Username, unique in the user pool                                                                                                                                                                                                                                                                                                                                                               | `bob`                                                                                                                                                            |
| name                     | string  | No                                            | User's real name, not unique                                                                                                                                                                                                                                                                                                                                                                    | `xxxx xxx`                                                                                                                                                       |
| nickname                 | string  | No                                            | Nickname                                                                                                                                                                                                                                                                                                                                                                                        | `xxxx xxx`                                                                                                                                                       |
| photo                    | string  | No                                            | Avatar link                                                                                                                                                                                                                                                                                                                                                                                     | `https://files.authing.co/authing-console/default-user-avatar.png`                                                                                               |
| loginsCount              | number  | No                                            | Total number of historical logins                                                                                                                                                                                                                                                                                                                                                               | `3`                                                                                                                                                              |
| lastLogin                | string  | No                                            | Last login time                                                                                                                                                                                                                                                                                                                                                                                 | `2022-07-03T03:20:30.000Z`                                                                                                                                       |
| lastIp                   | string  | No                                            | Last login IP                                                                                                                                                                                                                                                                                                                                                                                   | `127.0.0.1`                                                                                                                                                      |
| gender                   | string  | Yes                                           | Gender:<br>- `M`: Male, `male`<br>- `F`: Female, `female`<br>- `U`: Unknown, `unknown`<br>                                                                                                                                                                                                                                                                                                      | M                                                                                                                                                                |
| emailVerified            | boolean | yes                                           | Is the email verified?                                                                                                                                                                                                                                                                                                                                                                          | `true`                                                                                                                                                           |
| phoneVerified            | boolean | yes                                           | Is the phone number verified?                                                                                                                                                                                                                                                                                                                                                                   | `true`                                                                                                                                                           |
| passwordLastSetAt        | string  | no                                            | The time when the user last changed his password                                                                                                                                                                                                                                                                                                                                                | `2022-07-03T03:20:30.000Z`                                                                                                                                       |
| birthdate                | string  | no                                            | Date of birth                                                                                                                                                                                                                                                                                                                                                                                   | `2022-06-03`                                                                                                                                                     |
| country                  | string  | no                                            | Country                                                                                                                                                                                                                                                                                                                                                                                         | `CN`                                                                                                                                                             |
| province                 | string  | no                                            | Province                                                                                                                                                                                                                                                                                                                                                                                        | `BJ`                                                                                                                                                             |
| city                     | string  | no                                            | City                                                                                                                                                                                                                                                                                                                                                                                            | `BJ`                                                                                                                                                             |
| address                  | string  | no                                            | Address                                                                                                                                                                                                                                                                                                                                                                                         | `Beijing Chaoyang`                                                                                                                                               |
| streetAddress            | string  | no                                            | Street address                                                                                                                                                                                                                                                                                                                                                                                  | `Beijing Chaoyang District xxx Street`                                                                                                                           |
| postalCode               | string  | no                                            | Postal code                                                                                                                                                                                                                                                                                                                                                                                     | `438100`                                                                                                                                                         |
| company                  | string  | no                                            | Company                                                                                                                                                                                                                                                                                                                                                                                         | `steamory`                                                                                                                                                       |
| browser                  | string  | no                                            | Last login browser UA                                                                                                                                                                                                                                                                                                                                                                           | `Mozilla/5.0 (Linux; Android 10; V2001A; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.2.10.0` |
| device                   | string  | no                                            | Last login device                                                                                                                                                                                                                                                                                                                                                                               | `iOS`                                                                                                                                                            |
| givenName                | string  | no                                            | First name                                                                                                                                                                                                                                                                                                                                                                                      | `xx`                                                                                                                                                             |
| familyName               | string  | no                                            | Last name                                                                                                                                                                                                                                                                                                                                                                                       | `xx`                                                                                                                                                             |
| middleName               | string  | no                                            | Middle name                                                                                                                                                                                                                                                                                                                                                                                     | `James`                                                                                                                                                          |
| profile                  | string  | no                                            | Preferred Username                                                                                                                                                                                                                                                                                                                                                                              | `alice`                                                                                                                                                          |
| preferredUsername        | string  | no                                            | Preferred Username                                                                                                                                                                                                                                                                                                                                                                              | `alice`                                                                                                                                                          |
| website                  | string  | no                                            | User personal website                                                                                                                                                                                                                                                                                                                                                                           | `https://my-website.com`                                                                                                                                         |
| zoneinfo                 | string  | no                                            | User time zone information                                                                                                                                                                                                                                                                                                                                                                      | `GMT-08:00`                                                                                                                                                      |
| locale                   | string  | no                                            | Locale                                                                                                                                                                                                                                                                                                                                                                                          | `af`                                                                                                                                                             |
| formatted                | string  | no                                            | Full standard address                                                                                                                                                                                                                                                                                                                                                                           | `132, My Street, Kingston, New York 12401.`                                                                                                                      |
| region                   | string  | no                                            | User region                                                                                                                                                                                                                                                                                                                                                                                     | `Xinjiang Uyghur Autonomous Region`                                                                                                                              |
| userSourceType           | string  | yes                                           | Source type:<br>- `excel`: Imported through excel<br>- `register`: User self-registration<br>- `adminCreated`: Manually created by the administrator backend (including using the management API) Create user )<br>- `syncTask`: synchronization task in sync center <br>                                                                                                                       | excel                                                                                                                                                            |
| userSourceId             | string  | No                                            | Application ID or synchronization task ID                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                  |
| lastLoginApp             | string  | No                                            | Application ID of the user's last login                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                  |
| mainDepartmentId         | string  | No                                            | User's main department ID                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                  |
| lastMfaTime              | string  | No                                            | Time of the user's last MFA authentication                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                  |
| passwordSecurityLevel    | number  | No                                            | User password security strength level                                                                                                                                                                                                                                                                                                                                                           | `1`                                                                                                                                                              |
| resetPasswordOnNextLogin | boolean | No                                            | Require password reset on next login                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                  |
| registerSource           | array   | No                                            | Registration method                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                  |
| departmentIds            | array   | No                                            | User's department ID list                                                                                                                                                                                                                                                                                                                                                                       | `["624d930c3xxxx5c08dd4986e","624d93102xxxx012f33cd2fe"]`                                                                                                        |
| identities               | array   | No                                            | External identity source nested type: <a href="#IdentityDto">IdentityDto</a>.                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                  |
| identityNumber           | string  | No                                            | User ID number                                                                                                                                                                                                                                                                                                                                                                                  | `420421xxxxxxxx1234`                                                                                                                                             |
| customData               | object  | No                                            | User's extended field data                                                                                                                                                                                                                                                                                                                                                                      | `{"school":"Peking University","age":22}`                                                                                                                        |
| postIdList               | array   | No                                            | User-associated department ID                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                  |
| statusChangedAt          | string  | No                                            | User status last modified time                                                                                                                                                                                                                                                                                                                                                                  | `2022-07-03T03:20:30.000Z`                                                                                                                                       |
| tenantId                 | string  | No                                            | User tenant ID                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                  |

### <a id="IdentityDto"></a> IdentityDto

| Name          | Type   | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | <div style="width:200px">Sample value</div> |
| ------------- | ------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| identityId    | string | yes                                                   | Identity source ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `62299d8b866d2dab79a89dc4`                  |
| extIdpId      | string | yes                                                   | Identity source connection ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `6076bacxxxxxxxxd80d993b5`                  |
| provider      | string | yes                                                   | External identity source type: <br>- `wechat`: WeChat<br>- `qq`: QQ<br>- `wechatwork`: WeChat Work<br>- `dingtalk`: DingTalk<br>- `weibo`: Weibo<br>- `github`: GitHub<br>- `alipay`: Alipay<br>- `baidu`: Baidu<br>- `lark`: Feishu<br>- `welink`: Welink<br>- `yidun`: NetEase Yidun<br>- `qingcloud`: Qingyun<br>- `google`: Google<br>- `gitlab`: GitLab<br>- `gitee`: Gitee<br>- `twitter`: Twitter<br>- `facebook`: Facebook<br>- `slack`: Slack<br>- `linkedin`: Linkedin<br>- `instagram`: Instagram<br>- `oidc`: OIDC-based enterprise identity source<br>- `oauth2`: OAuth2-based enterprise identity source<br>- `saml`: SAML-based enterprise identity source<br>- `ldap`: LDAP-based enterprise identity source<br>- `ad`: AD-based enterprise identity source<br>- `cas`: CAS-based enterprise identity source<br>- `azure-ad`: Azure AD-based enterprise identity source<br> | oidc                                        |
| type          | string | Yes                                                   | Identity type, such as unionid, openid, primary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `openid`                                    |
| userIdInIdp   | string | Yes                                                   | ID in external identity source                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `oj7Nq05R-RRaqak0_YlMLnnIwsvg`              |
| userInfoInIdp | object | yes                                                   | User's identity information in idp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                             |
| accessToken   | string | no                                                    | Access Token in external identity source (this parameter is returned only when user actively obtains it, and it is not returned by management interface).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `57_fK0xgSL_NwVlS-gmUwlMQ2N6AONNIOAYxxxx`   |
| refreshToken  | string | no                                                    | Refresh Token in external identity source (this parameter is returned only when user actively obtains it, and it is not returned by management interface).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `57_IZFu91Ak1Wg6DRytZFFIOd3upNF5lH7vPxxxxx` |
| originConnIds | array  | yes                                                   | Identity source connection ID list from which identity comes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | one ["605492AS41XXXXXX0362F0707"]A          |
