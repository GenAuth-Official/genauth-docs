# Obtaining user behavior logs

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

You can select request ID, client IP, user ID, application ID, start timestamp, request success, and paging parameters to obtain user behavior logs.

## Method Name

`ManagementClient.getUserActionLogs`

## Request Parameters

| Name       | Type                                           | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---------- | ---------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| requestId  | string                                         | no                                           | -                                           | request ID                                 | `xxx`                                        |
| clientIp   | string                                         | no                                           | -                                           | client IP                                  | `xxx`                                        |
| eventType  | string                                         | no                                           | -                                           | event type                                 | `login`                                      |
| userId     | string                                         | no                                           | -                                           | user id                                    | `xxx`                                        |
| appId      | string                                         | no                                           | -                                           | application ID                             | `xxx`                                        |
| start      | number                                         | no                                           | -                                           | start timestamp                            | `11`                                         |
| end        | number                                         | no                                           | -                                           | end timestamp                              | `111`                                        |
| success    | boolean                                        | no                                           | -                                           | request success                            | `true`                                       |
| pagination | <a href="#ListWebhooksDto">ListWebhooksDto</a> | no                                           | -                                           | pagination                                 |                                              |

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

| Name       | Type                                                       | Description                                                                                                  |
| ---------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                     | Description                                                                                                  |
| apiCode    | number                                                     | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                     | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#UserActionLogRespData">UserActionLogRespData</a> | Response data                                                                                                |

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
      "appName": "Demo",
      "clientIp": "127.0.0.1",
      "eventType": "login",
      "eventDetail": "Login「 test@example.com 」",
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

| Name | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- | --- | ----- | ------ | --- | ---------------------------------------------------------------------------------- | ---- |
| page | number | No                                           | Current page number, starting from 1       | `1`                                          |     | limit | number | No  | The maximum number of pages per page cannot exceed 50, and the default value is 10 | `10` |

### <a id="UserActionLogRespData"></a> UserActionLogRespData

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- | --- | ---- | ----- | --- | ----------------------------------------------------------------------------- | --- |
| totalCount | number | Yes                                          | Total number of records                    | `1`                                          |     | list | array | Yes | Return to list Nested Type: <a href="#UserActionLogDto">UserActionLogDto</a>. |     |

### <a id="UserActionLogDto"></a> UserActionLogDto

| Name            | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | <div style="width:200px">Example Value</div>                                                                            |
| --------------- | ------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| userId          | string  | yes                                          | User id                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `xxx`                                                                                                                   |
| userAvatar      | string  | yes                                          | User avatar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `https://files.authing.co/authing-console/default-app-logo.png`                                                         |
| userDisplayName | string  | yes                                          | User display name, displayed in the following user field order: nickname > username > name > givenName > familyName -> email -> phone -> id                                                                                                                                                                                                                                                                                                                                                                                                                                            | `Zhang San`                                                                                                             |
| userLoginsCount | number  | yes                                          | Number of user logins                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `3`                                                                                                                     |
| appId           | string  | yes                                          | Application ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `xxx`                                                                                                                   |
| appName         | string  | yes                                          | Application Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `Demo`                                                                                                                  |
| clientIp        | string  | no                                           | Client IP, can be filtered based on the client IP at login. By default, the login history of all login IPs is not obtained.                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `127.0.0.1`                                                                                                             |
| eventType       | string  | yes                                          | Event Type:<br>- `login`: Login<br>- `logout`: Logout<br>- `register`: Register<br>- `verifyMfa`: Verify MFA<br>- `updateUserProfile`: Modify user information<br>- `updateUserPassword`: Modify password<br>- `updateUserEmail`: Modify email<br>- `updateUserPhone`: Modify phone number<br>- `bindMfa`: Bind MFA<br>- `bindEmail`: Bind email<br>- `bindPhone`: Bind phone number<br>- `unbindPhone`: Unbind phone number<br>- `unbindEmail`: Unbind email<br>- `unbindMFA`: Unbind MFA<br>- `deleteAccount`: cancel account<br>- `verifyFirstLogin`: first login verification <br> | login                                                                                                                   |
| eventDetail     | string  | No                                           | Event details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `Login account "test@example.com"`                                                                                      |
| success         | boolean | Yes                                          | Success                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `true`                                                                                                                  |
| appLoginUrl     | string  | Yes                                          | Application login address                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `https://example.genauth.ai/login`                                                                                      |
| appLogo         | string  | Yes                                          | Application Logo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `https://files.authing.co/authing-console/default-app-logo.png`                                                         |
| userAgent       | string  | Yes                                          | User Agent                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36` |
| parsedUserAgent |         | Yes                                          | Parsed User Agent Nested Type: <a href="#ParsedUserAgent">ParsedUserAgent</a>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                         |
| geoip           |         | Yes                                          | Geographic location Nested Type: <a href="#GeoIp">GeoIp</a>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                         |
| timestamp       | string  | yes                                          | time                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `2022-09-20T08:55:00.188+0800`                                                                                          |
| requestId       | string  | yes                                          | request ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `b63b9772-384c-4f2d-981b-01d1feed964d`                                                                                  |

### <a id="ParsedUserAgent"></a> ParsedUserAgent

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| device  | string | yes                                          | Type of device used                        | `Desktop`                                    |
| browser | string | yes                                          | Browser Name                               | `Chrome`                                     |
| os      | string | yes                                          | Operating System                           | `Windows`                                    |

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
| timezone       | string | Yes                                          | Time zone                                                                    | `Asia/Shanghai`                              |

### <a id="GeoIpLocation"></a> GeoIpLocation

| Name | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| lon  | number | is                                           | longitude                                  | `116.3889`                                   |
| lat  | number | is                                           | latitude                                   | `39.9288`                                    |
