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

`ManagementClient.getUserActionLogs`

## Request parameters

| Name       | Type                                           | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ---------------------------------------------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| requestId  | string                                         | No                                     | -                                           | Request ID                                 | `xxx`                                       |
| clientIp   | string                                         | no                                     | -                                           | client IP                                  | `xxx`                                       |
| eventType  | string                                         | no                                     | -                                           | event type                                 | `login`                                     |
| userId     | string                                         | no                                     | -                                           | user ID                                    | `xxx`                                       |
| appId      | string                                         | no                                     | -                                           | application ID                             | `xxx`                                       |
| start      | number                                         | no                                     | -                                           | start timestamp                            | `11`                                        |
| end        | number                                         | no                                     | -                                           | end timestamp                              | `111`                                       |
| success    | boolean                                        | no                                     | -                                           | request success                            | `true`                                      |
| pagination | <a href="#ListWebhooksDto">ListWebhooksDto</a> | no                                     | -                                           | pagination                                 |                                             |

## sample code

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
  const result = await managementClient.getUserActionLogs({
    requestId: "requestId",
    eventType: "login",
    userId: "userId1",
    appId: "appId1",
    success: true,
    pagination: {
      page: 1,
      limit: 10,
    },
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `UserActionLogRespDto`

| Name       | Type                                                       | Description                                                                                                  |
| ---------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                     | Description                                                                                                  |
| apiCode    | number                                                     | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                     | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#UserActionLogRespData">UserActionLogRespData</a> | Response data                                                                                                |

Sample result:

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
      "appName": "Sample application",
      "clientIp": "127.0.0.1",
      "eventType": "login",
      "eventDetail": "Login account「 test@example.com 」",
      "success": true,
      "appLoginUrl": "https://example.genauth.ai/login",
      "appLogo": "https://files.authing.co/authing-console/default-app-logo.png",
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36(KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
      "parsedUserAgent": {
        "device": "Desktop",
        "browser": "Chrome",
        "os": "Windows"
      },
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
      "timestamp": "2022-09-20T08:55:00.188+0800",
      "requestId": "b63b9772-384c-4f2d-981b-01d1feed964d"
    }
  }
}
```

## Data structure### <a id="ListWebhooksDto"></a> ListWebhooksDto

| Name  | Type   | <div style="width:80px ">Is it required?</div> | <div style="width:300px">Description</div>                                      | <div style="width:200px">Sample value</div> |
| ----- | ------ | ---------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------- |
| page  | number | no                                             | Current page number, starting from 1                                            | `1`                                         |
| limit | number | no                                             | Number of pages per page Items, the maximum cannot exceed 50, the default is 10 | `10`                                        |

### <a id="UserActionLogRespData"></a> UserActionLogRespData

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                 | <div style="width:200px"> Example value</div> |
| ---------- | ------ | --------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------- |
| totalCount | number | yes                                           | total number of records                                                    | `1`                                           |
| list       | array  | yes                                           | return list nested type: <a href="#UserActionLogDto">UserActionLogDto</a>. |                                               |

### <a id="UserActionLogDto"></a> UserActionLogDto

| Name            | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px" >Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | <div style="width:200px">Example value</div>                                                                            |
| --------------- | ------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| userId          | string  | yes                                           | user ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `xxx`                                                                                                                   |
| userAvatar      | string  | yes                                           | User avatar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `https://files.authing.co/authing-console/default-app-logo.png`                                                         |
| userDisplayName | string  | yes                                           | User display name , displayed in the following user field order: nickname > username > name > givenName > familyName -> email -> phone -> id                                                                                                                                                                                                                                                                                                                                                                                                                                           | `Zhang San`                                                                                                             |
| userLoginsCount | number  | yes                                           | Number of user logins                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `3`                                                                                                                     |
| appId           | string  | yes                                           | Application ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `xxx`                                                                                                                   |
| appName         | string  | yes                                           | Application name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `Sample Application`                                                                                                    |
| clientIp        | string  | no                                            | Client IP, can be filtered based on the client IP at login. By default, the login history of all login IPs is not obtained.                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `127.0.0.1`                                                                                                             |
| eventType       | string  | yes                                           | Event type:<br>- `login`: login<br>- `logout`: logout<br>- `register`: register<br>- `verifyMfa`: verify MFA<br>- `updateUserProfile`: modify user information<br>- `updateUserPassword`: modify password<br>- `updateUserEmail`: modify email<br>- `updateUserPhone`: modify phone number<br>- `bindMfa`: bind MFA<br>- `bindEmail`: bind email<br>- `bindPhone`: bind phone number<br>- `unbindPhone`: unbind phone number<br>- `unbindEmail`: unbind email<br>- `unbindMFA`: unbind MFA<br>- `deleteAccount`: cancel account<br>- `verifyFirstLogin`: first login verification <br> | login                                                                                                                   |
| eventDetail     | string  | No                                            | Event details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `Login account "test@example.com"`                                                                                      |
| success         | boolean | Yes                                           | Success                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `true`                                                                                                                  |
| appLoginUrl     | string  | Yes                                           | Application login address                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `https://example.genauth.ai/login`                                                                                      |
| appLogo         | string  | Yes                                           | Application Logo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `https://files.authing.co/authing-console/default-app-logo.png`                                                         |
| userAgent       | string  | Yes                                           | User Agent                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36` |
| parsedUserAgent |         | Yes                                           | Parsed User Agent Nested type: <a href="#ParsedUserAgent">ParsedUserAgent</a>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                         |
| geoip           |         | Yes                                           | Geographic location Nested type: <a href="#GeoIp">GeoIp</a>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                         |
| timestamp       | string  | yes                                           | time                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `2022-09-20T08:55:00.188+0800`                                                                                          |
| requestId       | string  | yes                                           | request ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `b63b9772-384c-4f2d-981b-01d1feed964d`                                                                                  |

### <a id="ParsedUserAgent"></a> ParsedUserAgent

| name    | type   | <div style="width:80px">is it required</div> | <div style="width:300px">description</div> | <div style="width:200px">example value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| device  | string | yes                                          | device type used                           | `Desktop`                                    |
| browser | string | yes                                          | browser name                               | `Chrome`                                     |
| os      | string | yes                                          | operating system                           | `Windows`                                    |

### <a id="GeoIp"></a> GeoIp

| name           | type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                   | <div style="width:200px">Sample value</div> |
| -------------- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------- |
| location       |        | yes                                          | geographic location Nested type: <a href="#GeoIpLocation">GeoIpLocation</a>. |                                             |
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
