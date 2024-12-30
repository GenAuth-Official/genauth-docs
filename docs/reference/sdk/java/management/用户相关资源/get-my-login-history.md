# Get login log

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get login log

## Method Name

`ManagementClient.getLoginHistory`

## Request Parameters

| Name     | Type    | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                         | <div style="width:200px">Example Value</div> |
| -------- | ------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| appId    | string  | No                                           | -                                           | Application ID, can be filtered based on application ID. Not passed by default. Get login history of all applications.                                             | `5f6265c67fxxxxae64ec516e`                   |
| clientIp | string  | No                                           | -                                           | Client IP, can be filtered based on client IP at login. Not passed by default. Get login history of all login IPs.                                                 | `127.0.0.1`                                  |
| success  | boolean | No                                           | -                                           | Yes No Login success, can be filtered based on Yes No Login success. Not passed by default. The records obtained include both successful and failed login history. | `true`                                       |
| start    | number  | No                                           | -                                           | Start time, as a timestamp in milliseconds                                                                                                                         | `1660828100000`                              |
| end      | number  | No                                           | -                                           | End time, as a timestamp in milliseconds                                                                                                                           | `1660828100000`                              |
| page     | number  | No                                           | 1                                           | Current page number, starting from 1                                                                                                                               | `1`                                          |
| limit    | number  | No                                           | 10                                          | The maximum number of pages per page cannot exceed 50, and the default value is 10                                                                                 | `10`                                         |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.GetLoginHistoryRespDto;
import cn.authing.sdk.java.dto.GetMyLoginHistoryDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetLoginHistoryTest {
    // Need to be replaced with your GenAuth App ID
    private static final String APP_ID = "AUTHING_APP_ID";
    // Need to be replaced with your GenAuth App Secret
    private static final String APP_SECRET = "AUTHING_APP_SECRET";
    // Need to be replaced with your GenAuth App Host
    private static final String APP_HOST = "AUTHING_APP_HOST";
    // Need to be replaced with your GenAuth Access Token
    private static final String ACCESS_TOKEN = "AUTHING_ACCESS_TOKEN";

    public static void main(String[] args) throws Throwable {
        AuthenticationClientOptions clientOptions = new AuthenticationClientOptions();
        clientOptions.setAppId(APP_ID);
        clientOptions.setAppSecret(APP_SECRET);
        clientOptions.setAppHost(APP_HOST);
        clientOptions.setAccessToken(ACCESS_TOKEN);

        AuthenticationClient client = new AuthenticationClient(clientOptions);

        GetMyLoginHistoryDto reqDto = new GetMyLoginHistoryDto();
        GetLoginHistoryRespDto response = client.getLoginHistory(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `GetLoginHistoryRespDto`

| Name       | Type                                                                     | Description                                                                                                             |
| ---------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                   | Business status code. You can use this status code to determine whether the operation is successful. 200 means success. |
| message    | string                                                                   | Description                                                                                                             |
| apiCode    | number                                                                   | This error code is used to get the specific error type.                                                                 |
| requestId  | string                                                                   | Request ID. Returned when the request fails.                                                                            |
| data       | <a href="#LoginHistoryPaginatedRespDto">LoginHistoryPaginatedRespDto</a> | Response data                                                                                                           |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "userId": "xxx",
      "appId": "xxx",
      "appName": "Demo",
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
        "location": {
          "lon": 116.3889,
          "lat": 39.9288
        },
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

## Data Structure

### <a id="LoginHistoryPaginatedRespDto"></a> LoginHistoryPaginatedRespDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | Yes                                          | Total number of records                                                   |                                              |
| list       | array  | Yes                                          | Record List Nested Type：<a href="#LoginHistoryDto">LoginHistoryDto</a>。 |                                              |

### <a id="LoginHistoryDto"></a> LoginHistoryDto

| Name            | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                     | <div style="width:200px">Example Value</div>                                                                            |
| --------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| userId          | string  | Yes                                          | User id                                                                        | `xxx`                                                                                                                   |
| appId           | string  | Yes                                          | App ID                                                                         | `xxx`                                                                                                                   |
| appName         | string  | Yes                                          | App Name                                                                       | `Demo`                                                                                                                  |
| appLoginUrl     | string  | Yes                                          | Application login address                                                      | `https://example.genauth.ai/login`                                                                                      |
| appLogo         | string  | Yes                                          | Application Logo                                                               | `https://files.authing.co/authing-console/default-app-logo.png`                                                         |
| loginAt         | string  | Yes                                          | Login time                                                                     | `2022-07-03T02:20:30.000Z`                                                                                              |
| clientIp        | string  | Yes                                          | Client IP used for login                                                       | `127.0.0.1`                                                                                                             |
| success         | boolean | Yes                                          | Yes No Login successful                                                        | `true`                                                                                                                  |
| errorMessage    | string  | No                                           | Specific error message when login fails                                        | `Incorrect account or password`                                                                                         |
| userAgent       | string  | Yes                                          | User Agent                                                                     | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36` |
| parsedUserAgent |         | Yes                                          | Parsed User Agent nested Type: <a href="#ParsedUserAgent">ParsedUserAgent</a>. |                                                                                                                         |
| loginMethod     | string  | Yes                                          | Login method used                                                              | `loginByEmail`                                                                                                          |
| geoip           |         | Yes                                          | Geographic location nested Type: <a href="#GeoIp">GeoIp</a>.                   |                                                                                                                         |

### <a id="ParsedUserAgent"></a> ParsedUserAgent

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| device  | string | Yes                                          | Type of device used                        | `Desktop`                                    |
| browser | string | Yes                                          | Browser Name                               | `Chrome`                                     |
| os      | string | Yes                                          | Operating System                           | `Windows`                                    |

### <a id="GeoIp"></a> GeoIp

| Name           | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                    | <div style="width:200px">Example Value</div> |
| -------------- | ------ | -------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------- |
| location       |        | Yes                                          | Geographic location Nested Type：<a href="#GeoIpLocation">GeoIpLocation</a>。 |                                              |
| country_name   | string | Yes                                          | Country Name                                                                  | `China`                                      |
| country_code2  | string | Yes                                          | Country Code 2                                                                | `CN`                                         |
| country_code3  | string | Yes                                          | Country Code 3                                                                | `CN`                                         |
| region_name    | string | Yes                                          | Region Name                                                                   | `Beijing`                                    |
| region_code    | string | Yes                                          | Region Code                                                                   | `BJ`                                         |
| city_name      | string | Yes                                          | City Name                                                                     | `Beijing`                                    |
| continent_code | string | Yes                                          | Continent Code                                                                | `AS`                                         |
| timezone       | string | Yes                                          | Time Zone                                                                     | `Asia/Shanghai`                              |

### <a id="GeoIpLocation"></a> GeoIpLocation

| Name | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| lon  | number | Yes                                          | longitude                                  | `116.3889`                                   |
| lat  | number | Yes                                          | latitude                                   | `39.9288`                                    |
