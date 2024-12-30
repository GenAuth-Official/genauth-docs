# Search for members under a department

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Search for members under a department by organization code, department ID, and search keywords. Paging is supported, and you can choose to obtain custom data, identities, etc.

## Method name

`ManagementClient.searchDepartmentMembers`

## Request parameters

| Name                       | Type    | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                 | <div style="width:200px">Sample value</div> |
| -------------------------- | ------- | --------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------- |
| organizationCode           | string  | yes                                           | -                                           | Organization code                                          | `steamory`                                  |
| departmentId               | string  | yes                                           | -                                           | Department ID, root department passed `root`               | `root`                                      |
| keywords                   | string  | yes                                           | -                                           | Search keywords, such as member name                       | `Zhang San`                                 |
| page                       | number  | no                                            | 1                                           | Current page number, starting from 1                       | `1`                                         |
| limit                      | number  | no                                            | 10                                          | The maximum number of pages is 50. The default value is 10 | `10`                                        |
| departmentIdType           | string  | no                                            | department_id                               | The type of department ID used in this call                | `department_id`                             |
| includeChildrenDepartments | boolean | no                                            | -                                           | Whether to include members of child departments            |                                             |
| withCustomData             | boolean | no                                            | -                                           | Whether to obtain custom data                              | `true`                                      |
| withIdentities             | boolean | no                                            | -                                           | Whether to obtain identities                               | `true`                                      |
| withDepartmentIds          | boolean | no                                            | -                                           | Whether to obtain a list of department IDs                 | `true`                                      |
| tenantId                   | string  | no                                            | -                                           | Tenant ID                                                  | `623c20b2a062aaaaf41b17da`                  |

## Sample code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If it is a private deployment customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.listDepartmentMembers({
    // Replace organization Code and department ID
    organizationCode: "steamory",
    departmentId: "root",
    sortBy: "JoinDepartmentAt",
    orderBy: "Desc",
    departmentIdType: "department_id",
    includeChildrenDepartments: false,
    page: 1,
    limit: 10,
    withCustomData: true,
    withIdentities: true,
    withDepartmentIds: true,
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `UserPaginatedRespDto`

| Name       | Type                                       | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                     | Description information                                                                                                                                                                                                                                                                                                                        |
| apiCode    | number                                     | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#UserPagingDto">UserPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

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

````
