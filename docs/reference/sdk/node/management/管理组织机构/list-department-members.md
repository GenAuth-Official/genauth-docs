# Get a list of department members

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get a list of department members by organization code, department ID, and sorting. It supports paging and can choose to obtain custom data, identities, etc.

## Method name

`ManagementClient.listDepartmentMembers`

## Request parameters

| Name                       | Type    | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| -------------------------- | ------- | --------------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| organizationCode           | string  | Yes                                           | -                                           | Organization code                                        | `steamory`                                  |
| departmentId               | string  | Yes                                           | -                                           | Department ID, root department is `root`                 | `root`                                      |
| sortBy                     | string  | No                                            | JoinDepartmentAt                            | Sort by                                                  | `JoinDepartmentAt`                          |
| orderBy                    | string  | No                                            | Desc                                        | In ascending or descending order                         | `Desc`                                      |
| departmentIdType           | string  | no                                            | department_id                               | The type of department ID used in this call              | `department_id`                             |
| includeChildrenDepartments | boolean | no                                            | -                                           | Whether to include members of child departments          |                                             |
| page                       | number  | no                                            | 1                                           | Current page number, starting from 1                     | `1`                                         |
| limit                      | number  | no                                            | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |
| withCustomData             | boolean | no                                            | -                                           | Whether to get custom data                               | `true`                                      |
| withIdentities             | boolean | no                                            | -                                           | Whether to get identities                                | `true`                                      |
| withDepartmentIds          | boolean | no                                            | -                                           | Whether to get a list of department IDs                  | `true`                                      |
| tenantId                   | string  | no                                            | -                                           | Tenant ID                                                | `623c20b2a062aaaaf41b17da`                  |

## Request response

Type: `UserPaginatedRespDto`

| Name       | Type                                       | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                     | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                     | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#UserPagingDto">UserPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

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
"externalId": "10010",
"email": "test@example.com", "phone": "188xxxx8888", "phoneCountryCode": "+86", "username": "bob", "name": "Zhang San", "nickname": "xxxx", "photo": "https://files.authing.co/authing-console/default-user-avatar.png", "loginsCount": 3, "lastLogin": "2022-07-03T03:20:30.000Z", "lastIp": "127.0.0.1", "gender": "M", "emailVerified": true, "phoneVerified": true, "passwordLastSetAt": "2022-07-03T03:20:30.000Z", "birthdate": "2022-06-03", "country": "CN", "province": "BJ", "city": "BJ",
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
"zoneinfo": "GMT-08:00",
"locale": "af", "formatted": "132, My Street, Kingston, New York 12401.", "region": "Xinjiang Uyghur Autonomous Region", "userSourceType": "register", "passwordSecurityLevel": 1, "departmentIds": "[\"624d930c3xxxx5c08dd4986e\",\"624d93102xxxx012f33cd2fe\"]", "identities": { "identityId": "62299d8b866d2dab79a89dc4", "extIdpId": "6076bacxxxxxxxxd80d993b5", "provider": "wechat", "type": "openid", "userIdInIdp": "oj7Nq05R-RRaqak0_YlMLnnIwsvg", "accessToken": "57_fK0xgSL_NwVlS-gmUwlMQ2N6AONNIOAYxxxx", "refreshToken": "57_IZFu91Ak1Wg6DRytZFFIOd3upNF5lH7vPxxxxx", "originConnIds": "[\"605492ac41xxxxe0362f0707\"]" }, "identityNumber": "420421xxxxxxxx1234", "customData": { "school": "Peking University", "age": 22 }, "statusChangedAt": "2022-07-03T03:20:30.000Z" } } } ``` ## Data structure

### <a id="UserPagingDto"></a> UserPagingDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | --------------------------------------------------- | ------------------------------------- |
| totalCount | number | Yes | Total number of records | |
| list | array | Yes | Data list Nested type: <a href="#UserDto">UserDto</a>. | |

### <a id="UserDto"></a> UserDto

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------------------ | ------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId | string | Yes | The unique identifier of the user, which can be user ID, user name, email address, mobile phone number, externalId, or ID in the external identity source. For details, see the description of the userIdType field. The default is user id. | `6229ffaxxxxxxxxcade3e3d9` |
| createdAt | string | Yes | Creation time | `2022-07-03T03:20:30.000Z` |
| updatedAt | string | yes | Updated time | `2022-07-03T03:20:30.000Z` |
| status | string | yes | Current status of the account:<br>- Activated: Normal status<br>- Suspended: Deactivated<br>- Deactivated: Disabled<br>- Resigned: Resigned<br>- Archived: Archived<br> | Suspended |
| workStatus | string | yes | Current work status of the account | Closed |
| externalId | string | no | Third-party external ID | `10010` |
| email | string | no | Email address, case insensitive | `test@example.com` |
| phone | string | no | Mobile number without area code. If it is a foreign mobile number, please specify the area code in the phoneCountryCode parameter. | `188xxxx8888` |
| phoneCountryCode | string | No | Mobile phone area code. This field is optional for mobile phone numbers in mainland China. The GenAuth SMS service does not yet support international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of mobile phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes. | `+86` |
| username | string | No | User name, unique in the user pool | `bob` |
| name | string | No | User's real name, not unique | `Zhang San` |
| nickname | string | No | Nickname | `Zhang San` |
| photo | string | No | Avatar link | `https://files.authing.co/authing-console/default-user-avatar.png` |
| loginsCount | number | No| Total number of historical logins | `3` |
| lastLogin | string | No | Last login time | `2022-07-03T03:20:30.000Z` |
| lastIp | string | No | Last login IP | `127.0.0.1` |
| gender | string | Yes | Gender:<br>- `M`: Male, `male`<br>- `F`: Female, `female`<br>- `U`: Unknown, `unknown`<br> | M |
| emailVerified | boolean | Yes | Email verified | `true` |
| phoneVerified | boolean | Yes | Phone number verified | `true` |
| passwordLastSetAt | string | No | User's last password modification time | `2022-07-03T03:20:30.000Z` |
| birthdate | string | No | Date of Birth | `2022-06-03` |
| country | string | No | Country | `CN` |
| province | string | No | Province | `BJ` |
| city | string | No | City | `BJ` |
| address | string | No | Address| `Beijing Chaoyang` |
| streetAddress | string | no | Street address | `Beijing Chaoyang District xxx Street` |
| postalCode | string | no | Postal code | `438100` |
| company | string | no | Company | `steamory` |
| browser | string | no | Last login browser UA | `Mozilla/5.0 (Linux; Android 10; V2001A; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.2.10.0` |
| device | string | no | Last login device | `iOS` |
| givenName | string | no | First name | `San` |
| familyName | string | no | Last name | `Zhang` |
| middleName | string | no | middle name | `James` |
| profile | string | no | Preferred Username | `alice` |
| preferredUsername | string | no | Preferred Username | `alice` |
| website | string | no | User's personal website | `https://my-websitee.com` |
| zoneinfo | string | No | User time zone information | `GMT-08:00` |
| locale | string | No | Locale | `af` |
| formatted | string | No | Standard full address | `132, My Street, Kingston, New York 12401.` |
| region | string | No | User location | `Xinjiang Uyghur Autonomous Region` |
| userSourceType | string | Yes | Source type:<br>- `excel`: Imported via excel<br>- `register`: User self-registration<br>- `adminCreated`: Manual creation by the administrator backend (including creating users using the management API)<br>- `syncTask`: Synchronization task of the synchronization center <br> | excel |
| userSourceId | string | No | Application ID or synchronization task ID | |
| lastLoginApp | string | No | Application ID of the user's last login | |
| mainDepartmentId | string | No | User's primary department ID | |
| lastMfaTime | string | No | The time when the user last performed MFA authentication | |
| passwordSecurityLevel | number | No | User password security strength level | `1` |
| resetPasswordOnNextLogin | boolean | No | Require password reset on next login | |
| registerSource| array | No | Registration method | |
| departmentIds | array | No | List of department IDs to which the user belongs | `["624d930c3xxxx5c08dd4986e","624d93102xxxx012f33cd2fe"]` |
| identities | array | No | External identity source Nested type: <a href="#IdentityDto">IdentityDto</a>. | |
| identityNumber | string | No | User ID number | `420421xxxxxxxx1234` |
| customData | object | No | User's extended field data | `{"school":"Peking University","age":22}` |
| postIdList | array | No | User's associated department ID | |
| statusChangedAt | string | No | User status last modified time | `2022-07-03T03:20:30.000Z` |
| tenantId | string | No | User tenant ID | |

### <a id="IdentityDto"></a> IdentityDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------- | ------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| identityId | string | yes | Identity source ID | `62299d8b866d2dab79a89dc4` |
| extIdpId | string | yes | Identity source connection ID | `6076bacxxxxxxxxd80d993b5` |
| provider | string | yes | External identity source type:<br>- `wechat`: WeChat<br>- `qq`: QQ<br>- `wechatwork`: WeChat for Business<br>- `dingtalk`: DingTalk<br>- `weibo`: Weibo<br>- `github`: GitHub<br>- `alipay`: Alipay<br>- `baidu`: Baidu<br>- `lark`: Feishu<br>- `welink`: Welink<br>- `yidun`: NetEase Yidun<br>- `qingcloud`: Qingyun<br>- `google`: Google<br>- `gitlab`: GitLab<br>- `gitee`: Gitee<br>- `twitter`: Twitter<br>- `facebook`: Facebook<br>- `slack`: Slack<br>- `linkedin`: Linkedin<br>- `instagram`: Instagram<br>- `oidc`: OIDC-type enterprise identity source<br>- `oauth2`: OAuth2-type enterprise identity source<br>- `saml`: SAML-type enterprise identity source<br>- `ldap`: LDAP-type enterprise identity source<br>- `ad`: AD-type enterprise identity source<br>- `cas`: CAS-type enterprise identity source<br>- `azure-ad`: Azure AD-type enterprise identity source<br> | oidc |
| type | string | Yes | Identity type, such as unionid, openid, primary | `openid` |
| userIdInIdp | string | yes | ID in the external identity source | `oj7Nq05R-RRaqak0_YlMLnnIwsvg` |
| userInfoInIdp | object | yes | User's identity information in idp | |
| accessToken | string | no | Access Token in the external identity source (this parameter is only returned when the user actively obtains it, and will not be returned by the management side interface).| `57_fK0xgSL_NwVlS-gmUwlMQ2N6AONNIOAYxxxx` |
| refreshToken | string | no | Refresh Token in the external identity source (this parameter is only returned when the user actively obtains it, and the management interface will not return it). | `57_IZFu91Ak1Wg6DRytZFFIOd3upNF5lH7vPxxxxx` |
| originConnIds | array | yes | Identity source connection ID list from which the identity comes | `["605492ac41xxxxe0362f0707"]` |
````
