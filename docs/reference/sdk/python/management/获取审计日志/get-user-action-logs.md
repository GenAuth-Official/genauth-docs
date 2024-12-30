# Get user action log

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

You can select request ID, client IP, user ID, application ID, start timestamp, request success, and paging parameters to get user action log

## Method name

`ManagementClient.get_user_action_logs`

## Request parameters

| Name       | Type                                           | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ---------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| requestId  | string                                         | No                                           | -                                           | Request ID                                 | `xxx`                                       |
| clientIp   | string                                         | no                                           | -                                           | Client IP                                  | `xxx`                                       |
| eventType  | string                                         | no                                           | -                                           | Event type                                 | `login`                                     |
| userId     | string                                         | no                                           | -                                           | User ID                                    | `xxx`                                       |
| appId      | string                                         | no                                           | -                                           | Application ID                             | `xxx`                                       |
| start      | number                                         | no                                           | -                                           | Start timestamp                            | `11`                                        |
| end        | number                                         | no                                           | -                                           | End timestamp                              | `111`                                       |
| success    | boolean                                        | no                                           | -                                           | Whether the request is successful          | `true`                                      |
| pagination | <a href="#ListWebhooksDto">ListWebhooksDto</a> | no                                           | -                                           | Pagination                                 |                                             |

## Request Response

Type: `UserActionLogRespDto`

| Name       | Type                                                       | Description                                                                                                  |
| ---------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                     | Description                                                                                                  |
| apiCode    | number                                                     | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                     | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#UserActionLogRespData">UserActionLogRespData</a> | Response data                                                                                                |

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
      "userDisplayName": "xxx",
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

| Name            | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | <div style="width:200px">Sample value</div>                                                                             |
| --------------- | ------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| userId          | string  | yes                                          | User ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `xxx`                                                                                                                   |
| userAvatar      | string  | yes                                          | User avatar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `https://files.authing.co/authing-console/default-app-logo.png`                                                         |
| userDisplayName | string  | yes                                          | User display name, displayed in the following user field order: nickname > username > name > givenName > familyName -> email -> phone -> id                                                                                                                                                                                                                                                                                                                                                                                                                                               | `xxx`                                                                                                                   |
| userLoginsCount | number  | yes                                          | Number of user logins                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `3`                                                                                                                     |
| appId           | string  | yes                                          | Application ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `xxx`                                                                                                                   |
| appName         | string  | yes                                          | Application name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `Sample application`                                                                                                    |
| clientIp        | string  | No                                           | Client IP, can be filtered based on the client IP at login. By default, it is not passed to obtain the login history of all login IPs.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `127.0.0.1`                                                                                                             |
| eventType       | string  | yes                                          | Event type:<br>- `login`: login<br>- `logout`: logout<br>- `register`: register<br>- `verifyMfa`: verify MFA<br>- `updateUserProfile`: modify user information<br>- `updateUserPassword`: modify password<br>- `updateUserEmail`: modify email<br>- `updateUserPhone`: modify phone number<br>- `bindMfa`: bind MFA<br>- `bindEmail`: bind email<br>- `bindPhone`: bind phone number<br>- `unbindPhone`: unbind phone number<br>- `unbindEmail`: unbind email<br>- `unbindMFA`: unbind MFA<br>- `deleteAccount`: Delete an account<br>- `verifyFirstLogin`: First login verification <br> | login                                                                                                                   |
| eventDetail     | string  | No                                           | Event details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `Login account "test@example.com"`                                                                                      |
| success         | boolean | Yes                                          | Successful or not                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `true`                                                                                                                  |
| appLoginUrl     | string  | Yes                                          | Application login address                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `https://example.genauth.ai/login`                                                                                      |
| appLogo         | string  | yes                                          | Application Logo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `https://files.authing.co/authing-console/default-app-logo.png`                                                         |
| userAgent       | string  | yes                                          | User Agent                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36` |
| parsedUserAgent |         | yes                                          | Parsed User Agent Nested type: <a href="#ParsedUserAgent">ParsedUserAgent</a>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                         |
| geoip           |         | yes                                          | Geographic location Nested type: <a href="#GeoIp">GeoIp</a>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                         |
| timestamp       | string  | yes                                          | time                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `2022-09-20T08:55:00.188+0800`                                                                                          |
| requestId       | string  | yes                                          | request ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `b63b9772-384c-4f2d-981b-01d1feed964d`                                                                                  |

### <a id="ParsedUserAgent"></a> ParsedUserAgent

| name     | type   | <div style="width:80px">Is this field required</div> | <div style="width:300px">Description</div>  | <div style="width:200px">Sample value</div> |
| -------- | ------ | ---------------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| device   | string | yes                                                  | Type of device to use                       | `Desktop`                                   |
| browser  | string | yes                                                  | Browser name                                | `Chrome`                                    |
| os       | string | yes                                                  | Operating system                            | `Windows`                                   |

### <a id="GeoIp"></a> GeoIp

| Name            | Type    | <div style="width:80px">Is this field required</div> | <div style="width:300px">Description</div>                             | <div style="width:200px">Sample value</div>          |
| --------------- | ------- | ---------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------- | ------------ | --------------------------------------- | --- | --- | ------------- | ------ | --- | ------------- | ------ | --- | --------------------------------------------- |
| location        |         | Yes                                                  | Geolocation Nested type: <a href="#GeoIpLocation">GeoIpLocation</a>.   |                                                      | country_name | string                                  | Yes |     | country_code2 | string | is  | country_code3 | string | Yes | `Bangkok`                                     |
| region_name     | string  | yes                                                  | Region Name                                                            | `City`                                               |              | `Beijing`                               |
| continent_code  | string  | yes                                                  | Continent Code                                                         | `AS`                                                 |
| timezone        | string  | yes                                                  | Timezone style="width:300px">Description</div>                         | <div style="width:200px">Example Value</div>         |
| ----            | ------  | --------------------------------------               | -----------------------------------                                    | -------------------------------------                |
| lon             | number  | yes                                                  | longitude                                                              | `116.3889`                                           |
| lat             | number  | yes                                                  | latitude                                                               | `39.9288`                                            |
