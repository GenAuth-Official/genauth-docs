# Get user behavior log

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

You can select request ID, client IP, user ID, application ID, start timestamp, request success, and paging parameters to obtain user action logs

## Method name

`ManagementClient.get_user_action_logs`

## Request parameters

| Name       | Type                                           | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                               | <div style="width:200px">Sample value</div> |
| ---------- | ---------------------------------------------- | -------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------- |
| requestId  | string                                         | No                                     | -                                           | Request ID                                                                               | `xxx`                                       |
| clientIp   | string                                         | No                                     | -                                           | Client IP                                                                                | `xxx`                                       |
| eventType  | string                                         | No                                     | -                                           | Event type, a series of user operations, such as login, logout, register, verifyMfa etc. | `login`                                     |
| userId     | string                                         | no                                     | -                                           | user ID                                                                                  | `xxx`                                       |
| appId      | string                                         | no                                     | -                                           | application ID                                                                           | `xxx`                                       |
| start      | number                                         | no                                     | -                                           | start timestamp                                                                          | `11`                                        |
| end        | number                                         | no                                     | -                                           | end timestamp                                                                            | `111`                                       |
| success    | boolean                                        | no                                     | -                                           | request success                                                                          | `true`                                      |
| pagination | <a href="#ListWebhooksDto">ListWebhooksDto</a> | no                                     | -                                           | pagination                                                                               |                                             |

## Request Response

Type: `UserActionLogRespDto`

| Name       | Type                                                       | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                                     | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                                     | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#UserActionLogRespData">UserActionLogRespData</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 1,
    "list": {
      "userId": "xxx",
      "userAvatar": "https://files.authing.co/authing-console/default-app-logo.png",
      "userDisplayName": "ZhangSan",
      "userLoginsCount": 3,
      "appId": "xxx",
      "appName": "ExampleApp",
      "clientIp": "127.0.0.1",
      "eventType": "login",
      "eventDetail": "Login account \" test@example.com \"",
      "success": true,
      "appLoginUrl": "https://example.genauth.ai/login",
      "appLogo": "https://files.authing.co/authing-console/default-app-logo.png",
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
      "parsedUserAgent": {
        "device": "Desktop",
        "browser": "Chrome",
        "os": "Windows"
      },
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
      },
      "timestamp": "2022-09-20T08:55:00.188+0800",
      "requestId": "b63b9772-384c-4f2d-981b-01d1feed964d"
    }
  }
}
```

## Data Structure

### <a id="ListWebhooksDto"></a> ListWebhooksDto

| Name  | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| ----- | ------ | --------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| page  | number | No                                            | Current page number, starting from 1                     | `1`                                         |
| limit | number | No                                            | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |

### <a id="UserActionLogRespData"></a> UserActionLogRespData

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                 | <div style="width:200px">Sample value</div> |
| ---------- | ------ | --------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | yes                                           | total number of records                                                    | `1`                                         |
| list       | array  | yes                                           | return list Nested type: <a href="#UserActionLogDto">UserActionLogDto</a>. |                                             |

### <a id="UserActionLogDto"></a> UserActionLogDto

| Name            | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | <div style="width:200px">Sample value</div>                                                                             |
| --------------- | ------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| userId          | string  | yes                                          | User ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `xxx`                                                                                                                   |
| userAvatar      | string  | yes                                          | User avatar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `https://files.authing.co/authing-console/default-app-logo.png`                                                         |
| userDisplayName | string  | yes                                          | User display name, displayed in the following user field order: nickname > username > name > givenName > familyName -> email -> phone -> id                                                                                                                                                                                                                                                                                                                                                                                                                                            | `xxx`                                                                                                                   |
| userLoginsCount | number  | yes                                          | Number of user logins                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `3`                                                                                                                     |
| appId           | string  | yes                                          | Application ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `xxx`                                                                                                                   |
| appName         | string  | yes                                          | Application name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `sample application`                                                                                                    |
| clientIp        | string  | no                                           | Client IP, can be filtered according to the client IP at login. By default, the login history of all login IPs is not transmitted.                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `127.0.0.1`                                                                                                             |
| eventType       | string  | yes                                          | Event Type:<br>- `login`: Login<br>- `logout`: Logout<br>- `register`: Register<br>- `verifyMfa`: Verify MFA<br>- `updateUserProfile`: Modify user information<br>- `updateUserPassword`: Modify password<br>- `updateUserEmail`: Modify email<br>- `updateUserPhone`: Modify phone number<br>- `bindMfa`: Bind MFA<br>- `bindEmail`: Bind email<br>- `bindPhone`: Bind phone number<br>- `unbindPhone`: Unbind phone number<br>- `unbindEmail`: Unbind email<br>- `unbindMFA`: Unbind MFA<br>- `deleteAccount`: Delete account<br>- `verifyFirstLogin`: First login verification <br> | login                                                                                                                   |
| eventDetail     | string  | No                                           | Event details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `Login account "test@example.com"`                                                                                      |
| success         | boolean | Yes                                          | Successful or not                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `true`                                                                                                                  |
| appLoginUrl     | string  | Yes                                          | Application login address                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `https://example.genauth.ai/login`                                                                                      |
| appLogo         | string  | Yes                                          | Application Logo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `https://files.authing.co/authing-console/default-app-logo.png`                                                         |
| userAgent       | string  | Yes                                          | User Agent                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36` |
| parsedUserAgent |         | Yes                                          | Parsed User Agent Nested type: <a href="#ParsedUserAgent">ParsedUserAgent</a>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                         |
| geoip           |         | yes                                          | Geolocation Nested type: <a href="#GeoIp">GeoIp</a>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                         |
| timestamp       | string  | yes                                          | Time                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `2022-09-20T08:55:00.188+0800`                                                                                          |
| requestId       | string  | yes                                          | Request ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `b63b9772-384c-4f2d-981b-01d1feed964d`                                                                                  |

### <a id="ParsedUserAgent"></a> ParsedUserAgent

| Name    | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------ | -------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| device  | string | Yes                                    | Device type used                           | `Desktop`                                   |
| browser | string | Yes                                    | Browser name                               | `Chrome`                                    |
| os      | string | Yes                                    | Operating system                           | `Windows`                                   |

### <a id="GeoIp"></a> GeoIp

| Name           | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                   | <div style="width:200px">Sample value</div> |
| -------------- | ------ | -------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------- |
| location       |        | Yes                                    | Geographic location Nested type: <a href="#GeoIpLocation">GeoIpLocation</a>. |                                             |
| country_name   | string | Yes                                    | Country Name                                                                 | `China`                                     |
| country_code2  | string | Yes                                    | Country Code 2                                                               | `CN`                                        |
| country_code3  | string | Yes                                    | Country Code 3                                                               | `CN`                                        |
| region_name    | string | Yes                                    | Region Name                                                                  | `Beijing`                                   |
| region_code    | string | Yes                                    | Region Code                                                                  | `BJ`                                        |
| city_name      | string | Yes                                    | City Name                                                                    | `Beijing`                                   |
| continent_code | string | Yes                                    | Continent Code                                                               | `AS`                                        |
| timezone       | string | Yes                                    | Time Zone                                                                    | `Asia/Shanghai`                             |

### <a id="GeoIpLocation"></a> GeoIpLocation

| Name | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample Value</div> |
| ---- | ------ | -------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| lon  | number | is                                     | longitude                                  | `116.3889`                                  |
| lat  | number | is                                     | latitude                                   | `39.9288`                                   |
