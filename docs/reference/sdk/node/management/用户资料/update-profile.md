# Modify user information

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This interface is used to modify the user's user information, including the user's custom data. If you need to **modify email**, **modify mobile phone number**, **modify password**, please use the corresponding separate interface.

## Method name

`ManagementClient.updateProfile`

## Request parameters

| Name          | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                     | <div style="width:200px">Sample value</div>                        |
| ------------- | ------ | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| name          | string | No                                     | -                                           | User's real name, not unique                                                                                   | `Zhang San`                                                        |
| nickname      | string | No                                     | -                                           | Nickname                                                                                                       | `Zhang San`                                                        |
| photo         | string | No                                     | -                                           | Avatar link                                                                                                    | `https://files.authing.co/authing-console/default-user-avatar.png` |
| externalId    | string | No                                     | -                                           | Third-party external ID                                                                                        | `10010`                                                            |
| birthdate     | string | no                                     | -                                           | Date of birth                                                                                                  | `2022-06-03`                                                       |
| country       | string | no                                     | -                                           | Country                                                                                                        | `CN`                                                               |
| province      | string | no                                     | -                                           | Province                                                                                                       | `BJ`                                                               |
| city          | string | no                                     | -                                           | City                                                                                                           | `BJ`                                                               |
| address       | string | no                                     | -                                           | Address                                                                                                        | `Beijing Chaoyang`                                                 |
| streetAddress | string | no                                     | -                                           | Street address                                                                                                 | `Beijing Chaoyang District xxx Street`                             |
| postalCode    | string | no                                     | -                                           | Postal code                                                                                                    | `438100`                                                           |
| gender        | string | no                                     | U                                           | Gender                                                                                                         | `M`                                                                |
| username      | string | no                                     | -                                           | Username, unique in the user pool                                                                              | `bob`                                                              |
| company       | string | no                                     | -                                           | Company                                                                                                        | `steamory`                                                         |
| customData    | object | No                                     | -                                           | For custom data, the key in the object passed in must first define the relevant custom fields in the user pool | `{"school":"Peking University","age":22}`                          |

## Sample code

````ts
import { AuthenticationClient, Models } from "@genauth/nodejs";

const authenticationClient = new AuthenticationClient({
// Need to be replaced with your GenAuth AppId, Secret and Host
appId: "GEN_AUTH_APP_ID",
appSecret: "GEN_AUTH_APP_SECRET",
appHost: "GEN_AUTH_APP_HOST",
});

(async () => {
// Please call the login interface to get access_token first, and call the setAccessToken method to set access_token
authenticationClient.setAccessToken("REPLACE_ME_WITH_REAL_ACCESS_TOKEN");

const result = await authenticationClient.updateProfile({
name: "xxxx",
nickname: "xxxx",
photo: "https://files.authing.co/authing-console/default-user-avatar.png",
birthdate: "2022-06-03",
country: "CN",
province: "BJ",
city: "BJ",
address: "Beijing Chaoyang",
streetAddress: "Beijing Chaoyang District xxx Street",
postalCode: "438100",
customData:# Modify user information

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This interface is used to modify the user's user information, including the user's custom data. If you need to **modify email**, **modify mobile phone number**, **modify password**, please use the corresponding separate interface.

## Method name

`ManagementClient.updateProfile`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------- | ------ | -------------------------------------- | ------------------------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------ |
| name | string | No | - | User's real name, not unique | `Zhang San` |
| nickname | string | No | - | Nickname | `Zhang San` |
| photo | string | No | - | Avatar link | `https://files.authing.co/authing-console/default-user-avatar.png` |
| externalId | string | No | - | Third-party external ID | `10010` |
| birthdate | string | no | - | Date of birth | `2022-06-03` |
| country | string | no | - | Country | `CN` |
| province | string | no | - | Province | `BJ` |
| city | string | no | - | City | `BJ` |
| address | string | no | - | Address | `Beijing Chaoyang` |
| streetAddress | string | no | - | Street address | `Beijing Chaoyang District xxx Street` |
| postalCode | string | no | - | Postal code | `438100` |
| gender | string | no | U | Gender | `M` |
| username | string | no | - | Username, unique in the user pool | `bob` |
| company | string | no | - | Company | `steamory` |
| customData | object | No | - | For custom data, the key in the object passed in must first define the relevant custom fields in the user pool | `{"school":"Peking University","age":22}` |

## Sample code

```ts
import { AuthenticationClient, Models } from "@genauth/nodejs";

const authenticationClient = new AuthenticationClient({
// Need to be replaced with your GenAuth AppId, Secret and Host
appId: "GEN_AUTH_APP_ID",
appSecret: "GEN_AUTH_APP_SECRET",
appHost: "GEN_AUTH_APP_HOST",
});

(async () => {
// Please call the login interface to get access_token first, and call the setAccessToken method to set access_token
authenticationClient.setAccessToken("REPLACE_ME_WITH_REAL_ACCESS_TOKEN");

const result = await authenticationClient.updateProfile({
name: "xxxx",
nickname: "xxxx",
photo: "https://files.authing.co/authing-console/default-user-avatar.png",
birthdate: "2022-06-03",
country: "CN",
province: "BJ",
city: "BJ",
address: "Beijing Chaoyang",
streetAddress: "Beijing Chaoyang District xxx Street",
postalCode: "438100",
customData:|
| status | string | yes | Current account status | Suspended |
| workStatus | string | yes | Current account work status | Closed |
| externalId | string | no | Third-party external ID | `10010` |
| email | string | no | Email address, case insensitive | `test@example.com` |
| phone | string | no | Phone number without area code. If it is a foreign phone number, please specify the area code in the phoneCountryCode parameter. | `188xxxx8888` |
| phoneCountryCode | string | no | Phone area code. It is optional for mainland China phone numbers. The GenAuth SMS service does not currently support international phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes. | `+86` |
| username | string | No | Username, unique in the user pool | `bob` |
| name | string | No | User's real name, not unique | `Zhang San` |
| nickname | string | No | Nickname | `Zhang San` |
| photo | string | No | Avatar link | `https://files.authing.co/authing-console/default-user-avatar.png` |
| loginsCount | number | No | Total number of historical logins | `3` |
| lastLogin | string | No | Last login time| `2022-07-03T02:20:30.000Z` |
| lastIp | string | no | Last login IP | `127.0.0.1` |
| gender | string | yes | Gender:<br>- `M`: Male<br>- `F`: Female<br>- `U`: Unknown<br> | M |
| emailVerified | boolean | yes | Email verified | `true` |
| phoneVerified | boolean | yes | Phone number verified | `true` |
| passwordLastSetAt | string | no | User's last password modification time | `2022-07-03T02:20:30.000Z` |
| birthdate | string | no | Date of birth | `2022-06-03` |
| country | string | no | Country | `CN` |
| province | string | No | Province | `BJ` |
| city | string | No | City | `BJ` |
| address | string | No | Address | `Beijing Chaoyang` |
| streetAddress | string | No | Street Address| `Beijing Chaoyang District xxx Street` |
| postalCode | string | No | Postal code | `438100` |
| company | string | No | Company | `steamory` |
| browser | string | No | Last login browser UA | `Mozilla/5.0 (Linux; Android 10; V2001A; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.2.10.0` |
| device | string | No | Last login device | `iOS` |
| givenName | string | No | First name | `San` |
| familyName | string | No | Last name | `Zhang` |
| middleName | string | No | Middle name | |
| profile | string | No | Preferred Username | |
| preferredUsername | string | no | Preferred Username | |
| website | string | no | User personal website | |
| zoneinfo | string | no | User time zone information ||
| locale | string | No | Locale | |
| formatted | string | No | Standard full address | |
| region | string | No | User's region | |
| userSourceType | string | Yes | Source type:<br>- `excel`: Imported via excel<br>- `register`: User self-registration<br>- `adminCreated`: Manual creation by the administrator backend (including creating users using the management API)<br>- `syncTask`: Sync task in the sync center <br> | excel |
| userSourceId | string | No | Application ID or sync task ID | |
| lastLoginApp | string | No | Application ID of the user's last login | |
| mainDepartmentId | string | No | User's main department ID | |
| lastMfaTime | string | No | Time of the user's last MFA authentication | |
| passwordSecurityLevel | number | No | User password security strength level | `1` |
| resetPasswordOnNextLogin | boolean | no | Require password reset on next login | |
| departmentIds | array | no | List of department IDs to which the user belongs | `["624d930c3xxxx5c08dd4986e","624d93102xxxx012f33cd2fe"]` |
| identities | array | no | External identity source Nested type: <a href="#IdentityDto">IdentityDto</a>. | |
| customData | object | No| User's extended field data| `{"school":"Peking University","age":22}` |
| statusChangedAt | string | No| User status last modified time| `2022 -07-03T02:20:30.000Z` |

### <a id="IdentityDto"></a> IdentityDto

| Name| Type| <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| ------------- | -- ---- | -------------------------------------- | ------ -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------- | ---------------------- --------------------- |
| identityId | string | yes | Identity source ID | `62299d8b866d2dab79a89dc4` |
| extIdpId | string | yes | Identity source connection ID | `6076bacxxxxxxxxd80d993b5` |
| provider | string | yes | External identity source type: <br>- `wechat`: WeChat <br>- `qq`: QQ<br>- `wechatwork`: WeChat for Business<br>- `dingtalk`: DingTalk<br>- `weibo`: Weibo<br>- `github`: GitHub<br>- `alipay`: Alipay<br> br>- `baidu`: Baidu<br>- `lark`: Feishu<br>- `welink`: Welink<br>- `yidun`: NetEase Yidun<br>- `qingcloud`: Qingyun<br> - `google`: Google<br>- `gitlab`: GitLab<br>- `gitee`: Gitee<br>- `twitter`: Twitter<br>- `facebook`: Facebook<br>- `slack`: Slack<br>- `linkedin`: Linkedin<br>- `instagram`: Instagram<br>- `oidc`: OIDC-based enterprise identity source<br>- `oauth2`: OAuth2-based enterprise identity source<br>- `saml`: SAML-based enterprise identity source<br>-`ldap`: LDAP-based enterprise identity source<br>- `ad`: AD-based enterprise identity source<br>- `cas`: CAS-based enterprise identity source<br>- `azure-ad`: Azure AD-based enterprise identity source<br> | oidc |
| type | string | yes | Identity type, such as unionid, openid, primary | `openid` |
| userIdInIdp | string | yes | ID in the external identity source | `oj7Nq05R-RRaqak0_YlMLnnIwsvg` |
| userInfoInIdp | | yes | User's identity information in idp Nested type: <a href="#User">User</a>. | |
| accessToken | string | no | Access Token in the external identity source (this parameter is only returned when the user actively obtains it, and will not be returned by the management-side interface). | `57_fK0xgSL_NwVlS-gmUwlMQ2N6AONNIOAYxxxx` |
| refreshToken | string | no | Refresh Token in the external identity source (this parameter is only returned when the user actively obtains it, and will not be returned by the management interface). | `57_IZFu91Ak1Wg6DRytZFFIOd3upNF5lH7vPxxxxx` |
| originConnIds | array | yes | Identity source connection ID list from which the identity comes | `["605492ac41xxxxe0362f0707"]` |

### <a id="User"></a> User

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | ----------------------------------------- | ------------- ----------------------- | -------------------------- ---------- |
````
