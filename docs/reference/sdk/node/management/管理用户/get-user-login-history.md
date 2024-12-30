# Get the user's login history

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get user login history through user ID, support paging, and can choose to specify user ID type, application ID, start and end timestamps, etc.

## Method name

`ManagementClient.getUserLoginHistory`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ------------------------------------ | ---------------------------- ... | `6229ffaxxxxxxxxcade3e3d9` |
| userIdType | string | No | user_id | User ID type, the default value is `user_id`, the optional values ​​are:<br>- `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`<br>- `phone`: User phone number<br>- `email`: User email<br>- `username`: User name<br>- `external_id`: User ID in the external system, corresponding to the `externalId` field of GenAuth user information<br>- `identity`: User's external identity source information, the format is `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, and `<userIdInIdp>` is the ID of the user in the external identity source. <br>Example value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`. <br>- `sync_relation`: User's external identity source information, in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the type of sync identity source, such as wechatwork, lark; `<userIdInIdp>` is the user's ID in the external identity source. <br>Example value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`. <br> | `user_id` |
| appId | string | No | - | Application ID | |
| clientIp | string | No | - | Client IP| `127.0.0.1` |
| start | number | No | - | Start timestamp (milliseconds) | `1647360000000` |
| end | number | No | - | End timestamp (milliseconds) | `1648051199000` |
| page | number | No | 1 | Current page number, starting from 1 | `1` |
| limit | number | No | 10 | Number of pages per page, maximum cannot exceed 50, default is 10 | `10` |

## Sample code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If you are a privately deployed customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.getUserLoginHistory({
    // Replace user ID
    userId: "6229ffaxxxxxxxxcade3e3d9",
    userIdType: "user_id",
    clientIp: "127.0.0.1",
    page: 1,
    limit: 10,
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `UserLoginHistoryPaginatedRespDto`

| Name       | Type                                                               | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                             | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                             | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#UserLoginHistoryPagingDto">UserLoginHistoryPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "appId": "app1",
      "appName": "App Name",
      "appLogo": "https://example.com/logo.png",
      "appLoginUrl": "https://example.com/login",
      "clientIp": "127.0.0.1",
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    }
  }
}
```

## Data structure

### <a id="UserLoginHistoryPagingDto"></a> UserLoginHistoryPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                         | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                          | Total number of records                                                            |                                             |
| list       | array  | Yes                                          | Response data Nested type: <a href="#UserLoginHistoryDto">UserLoginHistoryDto</a>. |                                             |

### <a id="UserLoginHistoryDto"></a> UserLoginHistoryDto

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div>                                                                                |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| appId       | string | Yes                                           | App ID                                     | `app1`                                                                                                                     |
| appName     | string | Yes                                           | App Name                                   | `App Name`                                                                                                                 |
| appLogo     | string | Yes                                           | App Logo                                   | `https://example.com/logo.png`                                                                                             |
| appLoginUrl | string | Yes                                           | App login address                          | `https://example.com/login`                                                                                                |
| clientIp    | string | Yes                                           | Client IP                                  | `127.0.0.1`                                                                                                                |
| userAgent   | string | no                                            | us to use when logging iner agent          | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36` |
| time        | string | yes                                           | login time                                 |                                                                                                                            |
