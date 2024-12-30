# Get login log

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get login log

## Method name

`ManagementClient.getLoginHistory`

## Request parameters

| Name     | Type    | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                               | <div style="width:200px">Sample value</div> |
| -------- | ------- | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| appId    | string  | No                                           | -                                           | Application ID, can be filtered by application ID. By default, the login history of all applications is not passed.                                                                      | `5f6265c67fxxxxae64ec516e`                  |
| clientIp | string  | No                                           | -                                           | Client IP, can be filtered based on the client IP at login. Not passed by default. Get the login history of all login IPs.                                                               | `127.0.0.1`                                 |
| success  | boolean | No                                           | -                                           | Whether the login is successful, can be filtered based on whether the login is successful. Not passed by default. The acquired records contain both successful and failed login history. | `true`                                      |
| start    | number  | No                                           | -                                           | Start time, as a timestamp in milliseconds                                                                                                                                               | `1660828100000`                             |
| end      | number  | No                                           | -                                           | End time, as a timestamp in milliseconds                                                                                                                                                 | `1660828100000`                             |
| page     | number  | No                                           | 1                                           | Current page number, starting from 1                                                                                                                                                     | `1`                                         |
| limit    | number  | No                                           | 10                                          | Number per page, maximum cannot exceed 50, default is 10                                                                                                                                 | `10`                                        |

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

| Name       | Type                                                                     | Description                                                                                                  |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                                   | Description                                                                                                  |
| apiCode    | number                                                                   | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                                   | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#LoginHistoryPaginatedRespDto">LoginHistoryPaginatedRespDto</a> | Response data                                                                                                |

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
      "errorMessage": "Account or password is incorrect",
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
      }
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

| Name            | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                     | <div style="width:200px">Sample value</div>                                                                             |
| --------------- | ------- | --------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| userId          | string  | Yes                                           | User ID                                                                        | `xxx`                                                                                                                   |
| appId           | string  | Yes                                           | Application ID                                                                 | `xxx`                                                                                                                   |
| appName         | string  | Yes                                           | Application name                                                               | `Sample application`                                                                                                    |
| appLoginUrl     | string  | Yes                                           | Application login address                                                      | `https://example.genauth.ai/login`                                                                                      |
| appLogo         | string  | Yes                                           | Application Logo                                                               | `https://files.authing.co/authing-console/default-app-logo.png`                                                         |
| loginAt         | string  | yes                                           | Login time                                                                     | `2022-07-03T02:20:30.000Z`                                                                                              |
| clientIp        | string  | yes                                           | Client IP used for login                                                       | `127.0.0.1`                                                                                                             |
| success         | boolean | yes                                           | Login success                                                                  | `true`                                                                                                                  |
| errorMessage    | string  | no                                            | Specific error message when login fails                                        | `Incorrect account or password`                                                                                         |
| userAgent       | string  | yes                                           | User Agent                                                                     | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36` |
| parsedUserAgent |         | yes                                           | Parsed User Agent Nested type: <a href="#ParsedUserAgent">ParsedUserAgent</a>. |                                                                                                                         |
| loginMethod     | string  | yes                                           | Login method used                                                              | `loginByEmail`                                                                                                          |
| geoip           |         | yes                                           | Geographic location Nested type: <a href="#GeoIp">GeoIp</a>.                   |                                                                                                                         |

### <a id="ParsedUserAgent"></a> ParsedUserAgent

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:300px">Description</div>h:200px">Sample value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------- |
| device  | string | Yes                                          | Device type used                           | `Desktop`                                                             |
| browser | string | Yes                                          | Browser name                               | `Chrome`                                                              |
| os      | string | Yes                                          | Operating system                           | `Windows`                                                             |

### <a id="GeoIp"></a> GeoIp

| Name           | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                   | <div style="width:200px">Sample value</div> |
| -------------- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------- |
| location       |        | Yes                                          | Geographic location Nested type: <a href="#GeoIpLocation">GeoIpLocation</a>. |                                             |
| country_name   | string | Yes                                          | Country Name                                                                 | `China`                                     |
| country_code2  | string | Yes                                          | Country Code 2                                                               | `CN`                                        |
| country_code3  | string | Yes                                          | Country Code 3                                                               | `CN`                                        |
| region_name    | string | Yes                                          | Region Name                                                                  | `Beijing`                                   |
| region_code    | string | Yes                                          | Region Code                                                                  | `BJ`                                        |
| city_name      | string | Yes                                          | City Name                                                                    | `Beijing`                                   |
| continent_code | string | Yes                                          | Continent Code                                                               | `AS`                                        |
| timezone       | string | Yes                                          | Time Zone                                                                    | `Asia/Shanghai`                             |

### <a id="GeoIpLocation"></a> GeoIpLocation

| Name | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample Value</div> |
| ---- | ------ | -------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| lon  | number | is                                     | longitude                                  | `116.3889`                                  |
| lat  | number | is                                     | latitude                                   | `39.9288`                                   |
