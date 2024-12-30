# Get the role list of a public account

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get the user role list through the user ID, you can select the permission group code, select the specified user ID type, etc.

## Method name

`ManagementClient.getPublicAccountRoles`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ------------------------------------ | ---------------------------- ... | `6229ffaxxxxxxxxcade3e3d9` |
| userIdType | string | No | user_id | User ID type, the default value is `user_id`, the optional values ​​are:<br>- `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`<br>- `phone`: User phone number<br>- `email`: User email<br>- `username`: User name<br>- `external_id`: User ID in the external system, corresponding to the `externalId` field of GenAuth user information<br>- `identity`: User's external identity source information, the format is `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, and `<userIdInIdp>` is the ID of the user in the external identity source. <br>Example value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`. <br>- `sync_relation`: The user's external identity source information, in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the type of sync identity source, such as wechatwork, lark; `<userIdInIdp>` is the user's ID in the external identity source. <br>Example value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`. <br> | `user_id` |
| namespace | string | No | default | The code of the permission group (permission space). If not passed, the default permission group is obtained. | `default` |

## Request Response

Type: `PublicAccountPaginatedRespDto`

| Name       | Type                                                         | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                       | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                       | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#PublicAccountPagingDto">PublicAccountPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

````json
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
"externalId": "10010", "email": "test@example.com", "phone": "188xxxx8888", "phoneCountryCode": "+86", "username": "bob", "name": "Zhang San", "nickname": "xxxx", "photo": "https://files.authing.co/authing-console/default-user-avatar.png", "loginsCount": 3, "lastLogin": "2022-07-03T03:20:30.000Z", "lastIp": "127.0.0.1", "gender": "M", "emailVerified": true, "phoneVerified": true, "passwordLastSetAt": "2022-07-03T03:20:30.000Z", "birthdate": "2022-06-03", "country": "CN", "province": "BJ",
"city": "BJ",
"address": "Beijing Chaoyang",
"streetAddress": "Beijing Chaoyang District xxx Street",
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
"zoneinfo": "GMT-08:00", "locale": "af", "formatted": "132, My Street, Kingston, New York 12401.", "region": "Xinjiang Uyghur Autonomous Region", "userSourceType": "register", "passwordSecurityLevel": 1, "departmentIds": "[\"624d930c3xxxx5c08dd4986e\",\"624d93102xxxx012f33cd2fe\"]", "identityNumber": "420421xxxxxxxx1234", "customData": { "school": "Peking University", "age": 22 }, "statusChangedAt": "2022-07-03T03:20:30.000Z" } } } ``` ## Data structure

### <a id="PublicAccountPagingDto"></a> PublicAccountPagingDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | --------------------------------------------------------------------- | ------------------------------------- |
| totalCount | number | Yes | Total number of records | |
| list | array | Yes | Data list Nested type: <a href="#PublicAccountDto">PublicAccountDto</a>. | |

### <a id="PublicAccountDto"></a> PublicAccountDto

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:300px">Description</div>dth:200px">Sample value</div> |
| ------------------------ | ------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId | string | yes | The unique identifier of the user, which can be user ID, user name, email, mobile number, externalId, or ID in the external identity source. For details, see the description of the userIdType field. The default is user id. | `6229ffaxxxxxxxxcade3e3d9` |
| createdAt | string | yes | Creation time | `2022-07-03T03:20:30.000Z` |
| updatedAt | string | yes | Update time | `2022-07-03T03:20:30.000Z` |
| status | string | yes | Current status of the account:<br>- Activated: Normal status<br>- Suspended: Suspended<br>- Deactivated: Deactivated<br>- Resigned: Resigned<br>- Archived: Archived<br> | Suspended |
| workStatus | string | Yes | Current work status of the account | Closed |
| externalId | string | No | Third-party external ID | `10010` |
| email | string | No | Email address, case insensitive | `test@example.com` |
| phone | string | No | Mobile phone number without area code. If it is an overseas mobile phone number, please specify the area code in the phoneCountryCode parameter. | `188xxxx8888` |
| phoneCountryCode | string | No | Mobile phone area code, which can be left blank for mobile phone numbers in mainland China. The GenAuth SMS service does not currently support international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. A complete list of mobile area codes can be found at https://en.wikipedia.org/wiki/List_of_country_calling_codes. | `+86` |
| username | string | No | Username, unique within the user pool | `bob` |
| name | string | No | User's real name, not unique| `Zhang San` |
| nickname | string | no | Nickname | `Zhang San` |
| photo | string | no | Avatar link | `https://files.authing.co/authing-console/default-user-avatar.png` |
| loginsCount | number | no | Total number of historical logins | `3` |
| lastLogin | string | no | Last login time | `2022-07-03T03:20:30.000Z` |
| lastIp | string | no | Last login IP | `127.0.0.1` |
| gender | string | yes | Gender:<br>- `M`: Male, `male`<br>- `F`: Female, `female`<br>- `U`: Unknown, `unknown`<br> | M |
| emailVerified | boolean | yes | Is the email verified | `true` |
| phoneVerified | boolean | yes | Is the phone number verified? | `true` |
| passwordLastSetAt | string | no | The time when the user last changed his password | `2022-07-03T03:20:30.000Z` |
| birthdate | string | no | Date of birth | `2022-06-03` |
| country | string | no | Country| `CN` |
| province | string | No | Province | `BJ` |
| city | string | No | City | `BJ` |
| address | string | No | Address | `Beijing Chaoyang` |
| streetAddress | string | No | Street address | `Beijing Chaoyang District xxx Street` |
| postalCode | string | No | Postal code | `438100` |
| company | string | No | Company | `steamory` |
| browser | string | No | Last browser used for login UA | `Mozilla/5.0 (Linux; Android 10; V2001A; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.2.10.0` |
| device | string | no | Last login device | `iOS` |
| givenName | string | no | First name | `San` |
| familyName | string | no | Last name | `Zhang` |
| middleName | string | no | Middle name | `James`|
| profile | string | no | Preferred Username | `alice` |
| preferredUsername | string | no | Preferred Username | `alice` |
| website | string | no | User personal website | `https://my-website.com` |
| zoneinfo | string | no | User time zone information | `GMT-08:00` |
| locale | string | no | Locale | `af` |
| formatted | string | no | Full standard address | `132, My Street, Kingston, New York 12401.` |
| region | string | no | User region | `Xinjiang Uyghur Autonomous Region` |
| userSourceType | string | yes | Source type:<br>- `excel`: Imported through excel<br>- `register`: User self-registration<br>- `adminCreated`: Manual creation by administrator backend (including creating users using management API)<br>- `syncTask`: Sync tasks in the Sync Center <br> | excel |
| userSourceId | string | No | Application ID or sync task ID | |
| lastLoginApp | string | No | Application ID where the user last logged in | |
| mainDepartmentId | string | No | User's main department ID | |
| lastMfaTime | string | No| The time when the user last performed MFA authentication | |
| passwordSecurityLevel | number | No | User password security strength level | `1` |
| resetPasswordOnNextLogin | boolean | No | Require password reset on next login | |
| registerSource | array | No | Registration method | |
| departmentIds | array | No | List of department IDs to which the public account belongs | `["624d930c3xxxx5c08dd4986e","624d93102xxxx012f33cd2fe"]` |
| identityNumber | string | No | User ID number | `420421xxxxxxxx1234` |
| customData | object | No | Extended field data of the public account | `{"school":"Peking University","age":22}` |
| statusChangedAt | string | No | Last modified time of the public account status | `2022-07-03T03:20:30.000Z` |
| tenantId | string | No | User tenant ID | |
````
