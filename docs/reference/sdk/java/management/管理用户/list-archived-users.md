# Get the archived user list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get the archived user list, support paging, can filter start time, etc.

## Method Name

`ManagementClient.listArchivedUsers`

## Request Parameters

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                         | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- |
| page    | number | No                                           | 1                                           | Current page number, starting from 1                                               | `1`                                          |
| limit   | number | No                                           | 10                                          | The maximum number of pages per page cannot exceed 50, and the default value is 10 | `10`                                         |
| startAt | number | No                                           | -                                           | Start time, UNIX timestamp accurate to seconds, unspecified by default             | `1655714763890`                              |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.ListArchivedUsersDto;
import cn.authing.sdk.java.dto.ListArchivedUsersSingleRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class ListArchivedUsersTest {
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

        ListArchivedUsersSingleRespDto response = client.listArchivedUsers(new ListArchivedUsersDto());
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `ListArchivedUsersSingleRespDto`

| Name       | Type                                                                 | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                               | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                               | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                               | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#ArchivedUsersListPagingDto">ArchivedUsersListPagingDto</a> | Data                                                                                                                                                                                                                                                                                                                                              |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "userId": "userId",
      "archivedAt": "2022-07-03T03:20:30.000Z"
    }
  }
}
```

## Data Structure

### <a id="ArchivedUsersListPagingDto"></a> ArchivedUsersListPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                    | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | Yes                                          | Total number of records                                                                       |                                              |
| list       | array  | Yes                                          | Response data nested type：<a href="#ListArchivedUsersRespDto">ListArchivedUsersRespDto</a>。 |                                              |

### <a id="ListArchivedUsersRespDto"></a> ListArchivedUsersRespDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| userId     | string | Yes                                          | User id                                    | `userId`                                     |
| archivedAt | string | Yes                                          | Archive time                               | `2022-07-03T03:20:30.000Z`                   |
