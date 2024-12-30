# Get the department list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

This interface is used to obtain the user's department list, which can be sorted according to certain sorting rules.

## Method name

`AuthenticationClient.getDepartmentList`

## Request parameters

| Name           | Type    | <div style="width:80px">Required</div> | Default value    | <div style="width:300px">Description</div>                                                                       | <div style="width:200px"></div>Sample value</div> |
| -------------- | ------- | -------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| page           | number  | No                                     | 1                | Current page number, starting from 1                                                                             | `1`                                               |
| limit          | number  | No                                     | 10               | Number per page, maximum cannot exceed 50, default is 10                                                         | `10`                                              |
| withCustomData | boolean | No                                     | -                | Whether to obtain custom data of the department                                                                  | `true`                                            |
| sortBy         | string  | No                                     | JoinDepartmentAt | Sorting basis, such as Department creation time, department joining time, department name, department identifier | `JoinDepartmentAt`                                |
| orderBy        | string  | No                                     | Desc             | Ascending or descending                                                                                          | `Desc`                                            |

## Sample code

```ts
import { AuthenticationClient, Models } from "authing-node-sdk";

const authenticationClient = new AuthenticationClient({
  // Need to be replaced with your GenAuth AppId, Secret and Host
  appId: "GEN_AUTH_APP_ID",
  appSecret: "GEN_AUTH_APP_SECRET",
  appHost: "GEN_AUTH_APP_HOST",
});

(async () => {
  // Please call the login interface to get access_token first, and call the setAccessToken method to set access_token
  authenticationClient.setAccessToken("REPLACE_ME_WITH_REAL_ACCESS_TOKEN");

  const result = await authenticationClient.getDepartmentList({
    page: 1,
    limit: 10,
    withCustomData: true,
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `UserDepartmentPaginatedRespDto`

| Name       | Type                                                           | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                         | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                         | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                         | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#UserDepartmentPagingDto">UserDepartmentPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "organizationCode": "steamory",
      "departmentId": "60b49eb83fd80adb96f26e68",
      "createdAt": "2022-07-03T03:20:30.000Z",
      "name": "dd8d7stf44",
      "description": "dd8d7stf44",
      "openDepartmentId": "ou_7dab8a3d3cdccxxxxxx777c7ad535d62",
      "isLeader": true,
      "code": "6229c4deb3e4d8a20b6021ff",
      "isMainDepartment": true,
      "joinedAt": "2022-07-03T03:20:30.000Z",
      "i18n": {
        "name": {
          "zh-CN": { "enabled": false, "value": "Chinese" },
          "en-US": { "enabled": false, "value": "English" }
        }
      },
      "customData": { "icon": "https://example.com/logo" },
      "departmentIdPath": "[\"parentId1\",\"parentId2\"]",
      "departmentCodePath": "[\"parentCode1\",\"parentCode2\"]",
      "departmentNamePath": "[\"parentName1\",\"parentName2\"]"
    }
  }
}
```

## Data Structure# ## <a id="UserDepartmentPagingDto"></a> UserDepartmentPagingDto
