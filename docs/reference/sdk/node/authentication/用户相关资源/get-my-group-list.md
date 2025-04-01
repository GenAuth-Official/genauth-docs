# Get group list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the group list

## Method name

`AuthenticationClient.getGroupList`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |

## Sample code

```ts
import { AuthenticationClient, Models } from "@genauth/nodejs";

const authenticationClient = new AuthenticationClient({
  // Need to replace with your GenAuth AppId, Secret and Host
  appId: "GEN_AUTH_APP_ID",
  appSecret: "GEN_AUTH_APP_SECRET",
  appHost: "GEN_AUTH_APP_HOST",
});

(async () => {
  // Please call the login interface to get access_token first, and call the setAccessToken method to set access_token
  authenticationClient.setAccessToken("REPLACE_ME_WITH_REAL_ACCESS_TOKEN");

  const result = await authenticationClient.getGroupList();

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `GroupListRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful request is not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | array  | response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "id": "60b49eb83fd80adb96f26e68",
    "code": "developer",
    "name": "Developer",
    "description": "Description content",
    "type": "static",
    "members": {
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
        "school": "Peking University",
        "age": 22
      },
      "statusChangedAt ": "2022-07-03T03:20:30.000Z"
    }
  }
}
```

## Data structure### <a id="GroupDto"></a> GroupDto

| Name           | Type   | <div style=" width:80px">Is it required?</div> | <div style="width:300px">Description</div>                      | <div style="width:200px">Example value</div> |
| -------------- | ------ | ---------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------- |
| id             | string | yes                                            | group id                                                        | `60b49eb83fd80adb96f26e68`                   |
| code           | string | yes                                            | group code                                                      | `developer`                                  |
| name           | string | yes                                            | Group name                                                      | `Developer`                                  |
| description    | string | yes                                            | Group description                                               | `Description content`                        |
| type           | string | yes                                            | Group type                                                      | `static`                                     |
| metadataSource | array  | yes                                            | Group metadata information                                      |                                              |
| members        | array  | Yes                                            | List of members of nested type: <a href="#UserDto">UserDto</a>. |                                              |

### <a id="UserDto"></a> UserDto

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px" >Description</div>                                                                                                                                                                                          | <div style="width:200px">Example value</div> |
| ---------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| userId     | string | is                                            | The unique identifier of the user, which can be user ID, user name, email address, mobile phone number, externalId, or ID in an external identity source. For details, see Description of the userIdType field. Defaults to user id. | `6229ffaxxxxxxxxcade3e3d9`                   |
| createdAt  | string | yes                                           | creation time                                                                                                                                                                                                                        | `2022-07-03T03:20:30.000Z`                   |
| updatedAt  | string | yes                                           | update time                                                                                                                                                                                                                          | `2022-07-03T03:20:30.000Z`                   |
| status     | string | yes                                           | Current status of the account:<br>- Activated: Normal status<br>- Suspended: Deactivated<br>- Deactivated: Disabled<br>- Resigned: Resigned<br>- Archived : Archived<br>                                                             | Suspended                                    |
| workStatus | string | yes                                           | The current work status of the account                                                                                                                                                                                               |
