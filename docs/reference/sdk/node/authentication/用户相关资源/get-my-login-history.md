# Get login log

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get login log

## Method name

`AuthenticationClient.getLoginHistory`

## Request parameters

| Name     | Type    | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                                                                   | <div style="width:200px"></div>Sample value</div> |
| -------- | ------- | -------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| appId    | string  | No                                     | -             | Application ID, can be filtered by application ID. By default, it is not passed to get the login history of all applications.                                                                | `5f6265c67fxxxxae64ec516e`                        |
| clientIp | string  | No                                     | -             | Client IP, can be filtered by the client IP at the time of login. By default, it is not passed to get the login history of all login IPs.                                                    | `127.0.0.1`                                       |
| success  | boolean | no                                     | -             | Whether the login is successful or not. You can filter based on whether the login is successful or not. By default, the acquired records contain both successful and failed login histories. | `true`                                            |
| start    | number  | No                                     | -             | Start time, as a timestamp in milliseconds                                                                                                                                                   | `1660828100000`                                   |
| end      | number  | No                                     | -             | End time, as a timestamp in milliseconds                                                                                                                                                     | `1660828100000`                                   |
| page     | number  | No                                     | 1             | Current page number, starting from 1                                                                                                                                                         | `1`                                               |
| limit    | number  | No                                     | 10            | Number per page, maximum cannot exceed 50, default is 10                                                                                                                                     | `10`                                              |

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

  const result = await authenticationClient.getLoginHistory({
    appId: "635143ae1xxxxx9afb54c39",
    page: 1,
    limit: 10,
  });

  // Empty return

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `GetLoginHistoryRespDto`

| Name       | Type                                                                     | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                                   | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#LoginHistoryPaginatedRespDto">LoginHistoryPaginatedRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "userId": "xxx",
      "appId": "xxx",
      "appName": "Sample application",
      "appLoginUrl": "https://example.genauth.ai/login",
      "appLogo": "https://files.authing.co/authing-console/default-app-logo.png",
      "loginAt": "2022-07-03T02:20:30.000Z",
      "clientIp": "127.0.0.1",
      "success": true,
      "errorMessage": "Incorrect account or password",
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
      "parsedUserAgent": {
        "device": "Desktop",
        "browser": "Chrome",
        "os": "Windows"
      },
      "loginMethod": "loginByEmail",
      "geoip": {
        "location": { "lon": 116.3889, "lat": 39.9288 },
        "country_name": "China",
        "country_code2": "CN",
        "country_code3": "CN",
        "region_name": "Beijing",
        "region_code": "BJ",
        "city_name": "Beijing",
        "continent_code": "AS",
        "timezone": "Asia/Shanghai"
      },
      "tenantId": "642c1df417c2d8a80d744c1d"
    }
  }
}
```

## Data structure

### <a id="LoginHistoryPaginatedRespDto"></a> LoginHistoryPaginatedRespDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                   | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                          | Total number of records                                                      |                                             |
| list       | array  | Yes                                          | List of records Nested type: <a href="#LoginHistoryDto">LoginHistoryDto</a>. |                                             |

### <a id="LoginHistoryDto"></a> LoginHistoryDto

| Name         | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>   | <div style="width:200px">Sample value</div>                     |
| ------------ | ------- | --------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------- |
| userId       | string  | Yes                                           | User ID                                      | `xxx`                                                           |
| appId        | string  | Yes                                           | Application ID                               | `xxx`                                                           |
| appName      | string  | Yes                                           | Application name                             | `Sample application`                                            |
| appLoginUrl  | string  | Yes                                           | Application login address                    | `https://example.genauth.ai/login`                              |
| appLogo      | string  | Yes                                           | Application Logo                             | `https://files.authing.co/authing-console/default-app-logo.png` |
| loginAt      | string  | yes                                           | Login time                                   | `2022-07-03T02:20:30.000Z`                                      |
| clientIp     | string  | yes                                           | Client IP used when logging in               | `127.0.0.1`                                                     |
| success      | boolean | yes                                           | Whether the login was successful             | `true`                                                          |
| errorMessage | string  | no                                            | Specific error message when the login failed |
