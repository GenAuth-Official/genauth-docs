# Get the administrator operation log

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

You can select request ID, client IP, operation type, resource type, administrator user ID, request success, start timestamp, end timestamp, and paging to get the administrator operation log interface

## Method name

`ManagementClient.getAdminAuditLogs`

## Request parameters

| Name          | Type                                           | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------- | ---------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| requestId     | string                                         | No                                           | -                                           | Request ID                                 | `xxx`                                       |
| clientIp      | string                                         | No                                           | -                                           | Client IP                                  | `xxx`                                       |
| operationType | string                                         | No                                           | -                                           | Operation type                             | `create`                                    |
| resourceType  | string                                         | No                                           | -                                           | Resource type                              | `user`                                      |
| userId        | string                                         | No                                           | -                                           | Admin user ID                              | `xxx`                                       |
| success       | boolean                                        | No                                           | -                                           | Request success                            | `true`                                      |
| start         | number                                         | No                                           | -                                           | Start timestamp                            | `11`                                        |
| end           | number                                         | No                                           | -                                           | End timestamp                              | `111`                                       |
| pagination    | <a href="#ListWebhooksDto">ListWebhooksDto</a> | No                                           | -                                           | Pagination                                 |                                             |

## Sample code

```ts
import { ManagementClient, Models } from "@genauth/nodejs";

// Initialization ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If it is a private deployment customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.getAdminAuditLogs({
    requestId: "requestId",
    operationType: "create",
    userId: "userId1",
    resourceType: "user",
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

Type: `AdminAuditLogRespDto`

| Name       | Type                                                       | Description                                                                                                  |
| ---------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                     | Description                                                                                                  |
| apiCode    | number                                                     | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                     | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#AdminAuditLogRespData">AdminAuditLogRespData</a> | Response data                                                                                                |

Sample result:

````json
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
"eventDetail": "The integrated application "Discourse" was modified",
"operationParam": "{\"ext\":{\"_dontFinishNotYet\":true,\"_appName\":\"Discourse\"},\"protocol\":\"oidc\",\"isAsa\":fal se,\"name\":\"Discourse\",\"oidcConfig\":{\"grant_types\":[\"authorization_code\",\"password\",\"refresh_token\"],\"response_types\":[\"code\"],\"id_token_signed_response_alg\":\"RS256\",\"token_endpoint_auth_method\":\"client _secret_post\",\"introspection_endpoint_auth_method\":\"client_secret_post\",\"revocation_endpoint_auth_method\":\"client\"}", "success": true, "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36", "parsedUserAgent": { "device": "Desktop", "browser": "Chrome", "os": "Windows" }, "geoip": { "location": { "lon": 116.3889, "lat": 39.9288 }, "country_name": "China", "country_code2": "CN", "country_code3": "CN", "region_name": "Beijing", "region_code": "BJ", "city_name": "Beijing", "continent_code": "AS", "timezone": "Asia/Shanghai" }, "timestamp": "2022-09-20T08:55:00.188+0800", "requestId": "b63b9772-384c-4f2d-981b-01d1feed964d" } } } ``` ## Data structure ### <a id="ListWebhooksDto"></a> ListWebhooksDto

| Name| Type| <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| ----- | ------ | ------------------- ------------------- | ------------------------------ ------ | ------------------------------------- |
| page | number | No | Current page number, starting from 1 | `1` |
| limit | number | No | Number per page, maximum cannot exceed 50, default is 10 | `10` |

### <a id="AdminAuditLogRespData"> </a> AdminAuditLogRespData

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width :200px">Example value</div> |
| ---------- | ------ | ------------------------------ -------- | ----------------------------------------- ---------------------------- | --------------------- ---------------- |
| totalCount | number | yes | total number of records | `1` |
| list | array | yes | return list nested type: <a href="# AdminAuditLogDto">AdminAuditLogDto</a>. | |

### <a id="AdminAuditLogDto"></a> AdminAuditLogDto

| Name| Type| <div style="width:80px">Is it required?</div> | <div style="width:300px" >Description</div> | <div style="width:200px">Example value</div> |
| -------------------- | ---- --- | -------------------------------------- | ------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------------------ | - -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --- |
| adminUserId | string | yes | The administrator's user ID| `xxx` |
| adminUserAvatar | string | yes | Admin user avatar | `https://files.authing.co/authing-console/default-app-logo.png` |
| adminUserDisplayName | string | yes | Admin user display name, displayed in the following user field order: nickname > username > name > givenName > familyName -> email -> phone -> id | `xxxx xxx` |
| clientIp | string | no | Client IP, can be filtered according to the client IP at login. By default, the login history of all login IPs is not obtained. | `127.0.0.1` |
| operationType | string | yes | Operation type:<br>- `create`: create<br>- `delete`: delete<br>- `import`: import<br>- `export`: export<br>- `update`: modify<br>- `refresh`: refresh<br>- `sync`: synchronize<br>- `invite`: invite<br>- `resign`: resign<br>- `recover`: recover<br>- `disable`: disable<br>- `userEnable`: enable<br> | all |
| resourceType | string | yes | Event type:<br>- `user`: user<br>- `userpool`: user pool<br>- `tenant`: tenant<br>- `userLoginState`: user login state<br>- `userAccountState`: user account state<br>- `userGroup`: user group<br>- `fieldEncryptState`: field encryption state<br>- `syncTask`: synchronization task<br>- `socialConnection`: social identity source<br>- `enterpriseConnection`: social identity source<br>- `customDatabase`: custom database<br>- `org`: organization<br>- `cooperator`: collaboration administrator<br>- `application`:Application<br>- `resourceNamespace`: Permission group<br>- `resource`: Resource<br>- `role`: Role<br>- `roleAssign`: Role authorization<br>- `policy`: Policy<br> | all |
| eventDetail | string | No | Event details | `The integrated application "Discourse" was modified` |
| operationParam | string | No | Specific operation parameters | `{"ext":{"_dontFinishNotYet":true,"_appName":"Discourse"},"protocol":"oidc","isAsa":false,"name":"Discourse","oidcConfig":{"grant_types":["authorization_code","password","refresh_token"],"response_types ":["code"],"id_token_signed_response_alg":"RS256","token_endpoint_auth_method":"client_secret_post","introspection_endpoint_auth_method":"client_secret_post","revocation_endpoint_auth_method":"client"}` | | originValue | string | no | original value | | | targetValue | string | no | new value | | | success | boolean | yes | whether it was successful| `true` |
| userAgent | string | yes | User Agent | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36` |
| parsedUserAgent | | yes | Parsed User Agent Nested type: <a href="#ParsedUserAgent">ParsedUserAgent</a>. | |
| geoip | | yes | Geolocation Nested type: <a href="#GeoIp">GeoIp</a>. | |
| timestamp | string | yes | Time | `2022-09-20T08:55:00.188+0800` |
| requestId | string | yes | Request ID| `b63b9772-384c-4f2d-981b-01d1feed964d` |

### <a id="ParsedUserAgent"></a> ParsedUserAgent

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------ | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| device | string | Yes | Device type used | `Desktop` |
| browser | string | Yes | Browser name | `Chrome` |
| os | string | Yes | Operating system | `Windows` |

### <a id="GeoIp"></a> GeoIp

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------------- | ------ | -------------------------------------- | --------------------------------------------------------------- | ------------------------------------- |
| location | | Yes | Geographic location Nested type: <a href="#GeoIpLocation">GeoIpLocation</a>. | |
| country_name | string | Yes | Country Name | `China` |
| country_code2 | string | Yes | Country Code 2 | `CN` |
| country_code3 | string | Yes | Country Code 3 | `CN` |
| region_name | string | Yes | Region Name | `Beijing` |
| region_code | string | Yes | Region Code | `BJ` |
| city_name | string | Yes | City Name | `Beijing` |
| continent_code | string | Yes | Continent Code | `AS` |
| timezone | string | Yes | Time Zone | `Asia/Shanghai` |

### <a id="GeoIpLocation"></a> GeoIpLocation

| Name | Type | <div style="width:80px">Required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample Value</div> |
| ---- | ------ | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| lon | number | is | longitude | `116.3889` |
| lat | number | is | latitude | `39.9288` |
````
