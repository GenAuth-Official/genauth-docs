# Get user behavior log

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

You can select request ID, client IP, user ID, application ID, start timestamp, request success, and paging parameters to obtain user behavior logs

## Method Name

`ManagementClient.getUserActionLogs`

## Request Parameters

| Name       | Type                                           | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                | <div style="width:200px">Example Value</div> |
| ---------- | ---------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------- |
| requestId  | string                                         | No                                           | -                                           | Request ID                                                                                | `xxx`                                        |
| clientIp   | string                                         | No                                           | -                                           | Client IP                                                                                 | `xxx`                                        |
| eventType  | string                                         | No                                           | -                                           | Event type, a series of user operations, such as login, logout, register, verifyMfa, etc. | `login`                                      |
| userId     | string                                         | no                                           | -                                           | User id                                                                                   | `xxx`                                        |
| appId      | string                                         | no                                           | -                                           | Application ID                                                                            | `xxx`                                        |
| start      | number                                         | no                                           | -                                           | Start timestamp                                                                           | `11`                                         |
| end        | number                                         | no                                           | -                                           | End timestamp                                                                             | `111`                                        |
| success    | boolean                                        | no                                           | -                                           | Whether the request is successful                                                         | `true`                                       |
| pagination | <a href="#ListWebhooksDto">ListWebhooksDto</a> | no                                           | -                                           | Pagination                                                                                |                                              |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.GetUserActionLogsDto;
import cn.authing.sdk.java.dto.UserActionLogRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetUserActionLogsTest {
    // Need to be replaced with your GenAuth Access Key ID
    private static final String ACCESS_KEY_ID = "AUTHING_ACCESS_KEY_ID";
    // Need to be replaced with your GenAuth Access Key Secret
    private static final String ACCESS_KEY_SECRET = "AUTHING_ACCESS_KEY_SECRET";

    public static void main(String[] args) throws Throwable {
        ManagementClientOptions clientOptions = new ManagementClientOptions();
        clientOptions.setAccessKeyId(ACCESS_KEY_ID);
        clientOptions.setAccessKeySecret(ACCESS_KEY_SECRET);
        // If you are a private deployment customer, you need to set the GenAuth service domain name
        // clientOptions.setHost("https://api.your-authing-service.com");

        ManagementClient client = new ManagementClient(clientOptions);

        GetUserActionLogsDto getUserActionLogsDto = new GetUserActionLogsDto();
        UserActionLogRespDto userActionLogs = client.getUserActionLogs(getUserActionLogsDto);
        System.out.println(JsonUtils.serialize(userActionLogs));
    }
}

```

## Request Response

Type： `UserActionLogRespDto`

| Name       | Type                                                       | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                     | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                     | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                     | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#UserActionLogRespData">UserActionLogRespData</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 1,
    "list": {
      "userId": "xxx",
      "userAvatar": "https://files.authing.co/authing-console/default-app-logo.png",
      "userDisplayName": "Zhang San",
      "userLoginsCount": 3,
      "appId": "xxx",
      "appName": "Sample Application",
      "clientIp": "127.0.0.1",
      "eventType": "login",
      "eventDetail": "Log in to the account 「test@example.com」",
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

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                         | <div style="width:200px">Example Value</div> |
| ----- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- |
| page  | number | no                                           | Current page number, starting from 1                                               | `1`                                          |
| limit | number | no                                           | The maximum number of pages per page cannot exceed 50, and the default value is 10 | `10`                                         |

### <a id="UserActionLogRespData"></a> UserActionLogRespData

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                     | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------- |
| totalCount | number | yes                                          | Total number of records                                                        | `1`                                          |
| list       | array  | yes                                          | Return to list Nested Type：<a href="#UserActionLogDto">UserActionLogDto</a>。 |                                              |

### <a id="UserActionLogDto"></a> UserActionLogDto

| Name            | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | <div style="width:200px">Example Value</div>                                                                            |
| --------------- | ------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| userId          | string  | yes                                          | User id                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `xxx`                                                                                                                   |
| userAvatar      | string  | yes                                          | User avatar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `https://files.authing.co/authing-console/default-app-logo.png`                                                         |
| userDisplayName | string  | yes                                          | User display name, displayed in the following user field order: nickname > username > name > givenName > familyName -> email -> phone -> id                                                                                                                                                                                                                                                                                                                                                                                                                                            | `Zhang San`                                                                                                             |
| userLoginsCount | number  | yes                                          | Number of user logins                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `3`                                                                                                                     |
| appId           | string  | yes                                          | Application ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `xxx`                                                                                                                   |
| appName         | string  | yes                                          | Application Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `Sample Application`                                                                                                    |
| clientIp        | string  | no                                           | Client IP, can be filtered based on the client IP at login. By default, the login history of all login IPs is not obtained.                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `127.0.0.1`                                                                                                             |
| eventType       | string  | yes                                          | Event Type:<br>- `login`: Login<br>- `logout`: Logout<br>- `register`: Register<br>- `verifyMfa`: Verify MFA<br>- `updateUserProfile`: Modify user information<br>- `updateUserPassword`: Modify password<br>- `updateUserEmail`: Modify email<br>- `updateUserPhone`: Modify phone number<br>- `bindMfa`: Bind MFA<br>- `bindEmail`: Bind email<br>- `bindPhone`: Bind phone number<br>- `unbindPhone`: Unbind phone number<br>- `unbindEmail`: Unbind email<br>- `unbindMFA`: Unbind MFA<br>- `deleteAccount`: Logout account<br>- `verifyFirstLogin`: First login verification <br> | login                                                                                                                   |
| eventDetail     | string  | no                                           | Event details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `Login account「 test@example.com 」`                                                                                   |
| success         | boolean | yes                                          | Success                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `true`                                                                                                                  |
| appLoginUrl     | string  | yes                                          | Application login address                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `https://example.genauth.ai/login`                                                                                      |
| appLogo         | string  | yes                                          | Application Logo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `https://files.authing.co/authing-console/default-app-logo.png`                                                         |
| userAgent       | string  | yes                                          | User Agent                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36` |
| parsedUserAgent |         | yes                                          | Parsed User Agent nested Type:<a href="#ParsedUserAgent">ParsedUserAgent</a>。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                         |
| geoip           |         | Yes                                          | Geographic location Nested Type: <a href="#GeoIp">GeoIp</a>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                         |
| timestamp       | string  | yes                                          | time                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `2022-09-20T08:55:00.188+0800`                                                                                          |
| requestId       | string  | yes                                          | request ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `b63b9772-384c-4f2d-981b-01d1feed964d`                                                                                  |

### <a id="ParsedUserAgent"></a> ParsedUserAgent

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| device  | string | yes                                          | device type used                           | `Desktop`                                    |
| browser | string | yes                                          | browserName                                | `Chrome`                                     |
| os      | string | Yes                                          | Operating system                           | `Windows`                                    |

### <a id="GeoIp"></a> GeoIp

| Name           | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                   | <div style="width:200px">Example Value</div> |
| -------------- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------- |
| location       |        | Yes                                          | Geographic location Nested Type: <a href="#GeoIpLocation">GeoIpLocation</a>. |                                              |
| country_name   | string | Yes                                          | Country Name                                                                 | `China`                                      |
| country_code2  | string | Yes                                          | Country Code 2                                                               | `CN`                                         |
| country_code3  | string | Yes                                          | Country Code 3                                                               | `CN`                                         |
| region_name    | string | Yes                                          | Region Name                                                                  | `Beijing`                                    |
| region_code    | string | Yes                                          | Region Code                                                                  | `BJ`                                         |
| city_name      | string | Yes                                          | City Name                                                                    | `Beijing`                                    |
| continent_code | string | Yes                                          | Continent Code                                                               | `AS`                                         |
| timezone       | string | Yes                                          | Time Zone                                                                    | `Asia/Shanghai`                              |

### <a id="GeoIpLocation"></a> GeoIpLocation

| Name | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| lon  | number | is                                           | longitude                                  | `116.3889`                                   |
| lat  | number | is                                           | latitude                                   | `39.9288`                                    |
