# Get the user's login history

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get the user login history through the user ID, support paging, and can choose to specify the user ID type, application ID, start and end timestamps, etc.

## Method Name

`ManagementClient.getUserLoginHistory`

## Request Parameters

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| userId     | string | Yes                                          | -                                           | The unique identifier of the user. It can be Yes user ID, user name, email address, mobile phone number, externalId, or ID in the external identity source. For details, see the description of the userIdType field. The default is user id.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `6229ffaxxxxxxxxcade3e3d9`                   |
| userIdType | string | No                                           | user_id                                     | User id type, the default value is `user_id`, the optional values ​​are:<br>- `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`<br>- `phone`: user phone number<br>- `email`: user email<br>- `username`: user name<br>- `external_id`: user ID in the external system, corresponding to the `externalId` field of GenAuth user information<br>- `identity`: user's external identity source information, the format is `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, and `<userIdInIdp>` is the ID of the user in the external identity source. <br>Example Value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`. <br>- `sync_relation`: User's external identity source information, in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the type of sync identity source, such as wechatwork, lark; `<userIdInIdp>` is the user's ID in the external identity source. <br>Example Value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`. <br> | `user_id`                                    |
| appId      | string | No                                           | -                                           | Application ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                              |
| clientIp   | string | No                                           | -                                           | Client IP                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `127.0.0.1`                                  |
| start      | number | No                                           | -                                           | Start timestamp (milliseconds)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `1647360000000`                              |
| end        | number | No                                           | -                                           | End timestamp (milliseconds)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `1648051199000`                              |
| page       | number | No                                           | 1                                           | Current page number, starting from 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `1`                                          |
| limit      | number | No                                           | 10                                          | The maximum number of pages per page cannot exceed 50, and the default value is 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `10`                                         |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.GetUserLoginHistoryDto;
import cn.authing.sdk.java.dto.UserLoginHistoryPaginatedRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetUserLoginHistoryTest {
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

        GetUserLoginHistoryDto reqDto = new GetUserLoginHistoryDto();
        reqDto.setUserId("6229ffaxxxxxxxxcade3e3d9");
        UserLoginHistoryPaginatedRespDto response = client.getUserLoginHistory(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `UserLoginHistoryPaginatedRespDto`

| Name       | Type                                                               | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                             | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                             | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#UserLoginHistoryPagingDto">UserLoginHistoryPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "appId": "app1",
      "appName": "App Name",
      "appLogo": "https://example.com/logo.png",
      "appLoginUrl": "https://example.com/login",
      "clientIp": "127.0.0.1",
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    }
  }
}
```

## Data Structure

### <a id="UserLoginHistoryPagingDto"></a> UserLoginHistoryPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                          | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | Yes                                          | Total number of records                                                             |                                              |
| list       | array  | Yes                                          | Response data nested type：<a href="#UserLoginHistoryDto">UserLoginHistoryDto</a>。 |                                              |

### <a id="UserLoginHistoryDto"></a> UserLoginHistoryDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div>                                                                               |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| appId       | string | Yes                                          | App ID                                     | `app1`                                                                                                                     |
| appName     | string | Yes                                          | App Name                                   | `App Name`                                                                                                                 |
| appLogo     | string | Yes                                          | App Logo                                   | `https://example.com/logo.png`                                                                                             |
| appLoginUrl | string | Yes                                          | App login address                          | `https://example.com/login`                                                                                                |
| clientIp    | string | Yes                                          | Client IP                                  | `127.0.0.1`                                                                                                                |
| userAgent   | string | No                                           | User agent used when logging in            | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36` |
| time        | string | Yes                                          | Login time                                 |                                                                                                                            |
