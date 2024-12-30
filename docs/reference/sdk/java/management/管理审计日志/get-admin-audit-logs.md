# Get the administrator operation log

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

You can select request ID, client IP, operation type, resource type, administrator user ID, request success, start timestamp, end timestamp, and paging to obtain the administrator operation log interface

## Method Name

`ManagementClient.getAdminAuditLogs`

## Request Parameters

| Name          | Type                                           | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                      | <div style="width:200px">Example Value</div> |
| ------------- | ---------------------------------------------- | -------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------- |
| requestId     | string                                         | No                                           | -                                           | Request ID                                                      | `xxx`                                        |
| clientIp      | string                                         | No                                           | -                                           | Client IP                                                       | `xxx`                                        |
| operationType | string                                         | No                                           | -                                           | Operation type, for example create, update, delete, login, etc. | `create`                                     |
| resourceType  | string                                         | no                                           | -                                           | Resource type, such as DATA, API, BUTTON, etc.                  | `user`                                       |
| userId        | string                                         | no                                           | -                                           | Admin user ID                                                   | `xxx`                                        |
| success       | boolean                                        | no                                           | -                                           | Whether the request is successful                               | `true`                                       |
| start         | number                                         | no                                           | -                                           | Start timestamp                                                 | `11`                                         |
| end           | number                                         | no                                           | -                                           | End timestamp                                                   | `111`                                        |
| pagination    | <a href="#ListWebhooksDto">ListWebhooksDto</a> | no                                           | -                                           | Pagination                                                      |                                              |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.AdminAuditLogRespDto;
import cn.authing.sdk.java.dto.CostGetCurrentUsageRespDto;
import cn.authing.sdk.java.dto.GetAdminAuditLogsDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetAdminAuditLogsTest {
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

        GetAdminAuditLogsDto getAdminAuditLogsDto = new GetAdminAuditLogsDto();
        AdminAuditLogRespDto adminAuditLogs = client.getAdminAuditLogs(getAdminAuditLogsDto);
        System.out.println(JsonUtils.serialize(adminAuditLogs.getData()));
    }
}

```

## Request Response

Type： `AdminAuditLogRespDto`

| Name       | Type                                                       | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                     | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                     | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                     | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#AdminAuditLogRespData">AdminAuditLogRespData</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 1,
    "list": {
      "adminUserId": "xxx",
      "adminUserAvatar": "https://files.authing.co/authing-console/default-app-logo.png",
      "adminUserDisplayName": "Zhang San",
      "clientIp": "127.0.0.1",
      "operationType": "create",
      "resourceType": "user",
      "eventDetail": "Modify application「Discourse」",
      "operationParam": "{\"ext\":{\"_dontFinishNotYet\":true,\"_appName\":\"Discourse\"},\"protocol\":\"oidc\",\"isAsa\":false,\"name\":\"Discourse\",\"oidcConfig\":{\"grant_types\":[\"authorization_code\",\"password\",\"refresh_token\"],\"response_types\":[\"code\"],\"id_token_signed_response_alg\":\"RS256\",\"token_endpoint_auth_method\":\"client_secret_post\",\"introspection_endpoint_auth_method\":\"client_secret_post\",\"revocation_endpoint_auth_method\":\"client\"}",
      "success": true,
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

### <a id="AdminAuditLogRespData"></a> AdminAuditLogRespData

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                     | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------- |
| totalCount | number | yes                                          | Total number of records                                                        | `1`                                          |
| list       | array  | yes                                          | Return to list Nested Type：<a href="#AdminAuditLogDto">AdminAuditLogDto</a>。 |                                              |

### <a id="AdminAuditLogDto"></a> AdminAuditLogDto

| Name                 | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | <div style="width:200px">Example Value</div>                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| adminUserId          | string  | yes                                          | User ID of the administrator                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `xxx`                                                                                                                                                                                                                                                                                                                                                                                                                |
| adminUserAvatar      | string  | yes                                          | User avatar of the administrator                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `https://files.authing.co/authing-console/default-app-logo.png`                                                                                                                                                                                                                                                                                                                                                      |
| adminUserDisplayName | string  | yes                                          | Display name of the administrator user, displayed in the following user field order: nickname > username > name > givenName > familyName -> email -> phone -> id                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `Zhang San`                                                                                                                                                                                                                                                                                                                                                                                                          |
| clientIp             | string  | no                                           | Client IP, can be filtered according to the client IP at login. By default, the login history of all login IPs is not obtained.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `127.0.0.1`                                                                                                                                                                                                                                                                                                                                                                                                          |
| operationType        | string  | yes                                          | Operation Type:<br>- `create`: create<br>- `delete`: delete<br>- `import`: import<br>- `export`: export<br>- `update`: modify<br>- `refresh`: refresh<br>- `sync`: synchronize<br>- `invite`: invite<br>- `resign`: resign<br>- `recover`: recover<br>- `disable`: disable<br>- `userEnable`: enable<br>                                                                                                                                                                                                                                                                                                                                                                                         | all                                                                                                                                                                                                                                                                                                                                                                                                                  |
| resourceType         | string  | yes                                          | Event Type:<br>- `user`: user<br>- `userpool`: user pool<br>- `tenant`: tenant<br>- `userLoginState`: user login state<br>- `userAccountState`: user account state<br>- `userGroup`: user group<br>- `fieldEncryptState`: field encryption state<br>- `syncTask`: synchronization task<br>- `socialConnection`: social identity source<br>- `enterpriseConnection`: social identity source<br>- `customDatabase`: custom database<br>- `org`: organization<br>- `cooperator`: collaboration administrator<br>- `application`: application<br>- `resourceNamespace`: permission group<br>- `resource`: resource<br>- `role`: role<br>- `roleAssign`: role authorization<br>- `policy`: Policy<br> | all                                                                                                                                                                                                                                                                                                                                                                                                                  |
| eventDetail          | string  | No                                           | Event details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `The integrated application "Discourse" was modified`                                                                                                                                                                                                                                                                                                                                                                |
| operationParam       | string  | No                                           | Specific operation parameters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `{"ext":{"_dontFinishNotYet":true,"_appName":"Discourse"},"protocol":"oidc","isAsa":false,"name":"Discourse","oidcConfig":{"grant_types":["authorization_code","password","refresh_token"],"response_types":["code"],"id_token_signed_response_alg":"RS256","token_endpoint_auth_method":"client_secret_post","introspection_endpoint_auth_method":"client_secret_post","revocation_endpoint_auth_method":"client"}` |
| originValue          | string  | No                                           | Original value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                      |
| targetValue          | string  | no                                           | new value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                      |
| success              | boolean | yes                                          | Success                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `true`                                                                                                                                                                                                                                                                                                                                                                                                               |
| userAgent            | string  | yes                                          | User Agent                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36`                                                                                                                                                                                                                                                                                              |
| parsedUserAgent      |         | yes                                          | Parsed User Agent Nested Type: <a href="#ParsedUserAgent">ParsedUserAgent</a>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                      |
| geoip                |         | yes                                          | Geographic location Nested Type: <a href="#GeoIp">GeoIp</a>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                      |
| timestamp            | string  | yes                                          | Time                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `2022-09-20T08:55:00.188+0800`                                                                                                                                                                                                                                                                                                                                                                                       |
| requestId            | string  | yes                                          | Request ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `b63b9772-384c-4f2d-981b-01d1feed964d`                                                                                                                                                                                                                                                                                                                                                                               |

### <a id="ParsedUserAgent"></a> ParsedUserAgent

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| device  | string | Yes                                          | Type of device used                        | `Desktop`                                    |
| browser | string | Yes                                          | Browser Name                               | `Chrome`                                     |
| os      | string | Yes                                          | Operating System                           | `Windows`                                    |

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
