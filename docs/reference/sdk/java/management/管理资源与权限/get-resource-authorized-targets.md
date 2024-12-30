# Get the authorized subject of the resource

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the authorized subject of the resource

## Method Name

`ManagementClient.getResourceAuthorizedTargets`

## Request Parameters

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                    | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| resource   | string | Yes                                          | -                                           | Resource                                                                                                      | `ecs:1`                                      |
| namespace  | string | No                                           | default                                     | Permission group                                                                                              |                                              |
| targetType | string | No                                           | -                                           | Target object Type:<br>- `USER`: User<br>- `ROLE`: Role<br>- `GROUP`: Group<br>- `DEPARTMENT`: Department<br> | `USER`                                       |
| page       | number | No                                           | 1                                           | Current page number, starting from 1                                                                          | `1`                                          |
| limit      | number | No                                           | 10                                          | The maximum number of pages per page cannot exceed 50, and the default value is 10                            | `10`                                         |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.GetResourceAuthorizedTargetRespDto;
import cn.authing.sdk.java.dto.GetResourceAuthorizedTargetsDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetResourceAuthorizedTargetsTest {
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

        GetResourceAuthorizedTargetsDto reqDto = new GetResourceAuthorizedTargetsDto();
        reqDto.setResource("ecs:1");
        GetResourceAuthorizedTargetRespDto response = client.getResourceAuthorizedTargets(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `GetResourceAuthorizedTargetRespDto`

| Name       | Type                                                                                 | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                               | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                               | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                               | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#GetResourceAuthorizedTargetDataDto">GetResourceAuthorizedTargetDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 10,
    "list": {
      "targetType": "USER",
      "targetIdentifier": "code",
      "actions": "[\"ecs:Start\",\"ecs:Stop\"]"
    }
  }
}
```

## Data Structure

### <a id="GetResourceAuthorizedTargetDataDto"></a> GetResourceAuthorizedTargetDataDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                        | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | Yes                                          | Total                                                                                             | `10`                                         |
| list       | array  | Yes                                          | Element list Nested Type: <a href="#ResourceAuthorizedTargetDto">ResourceAuthorizedTargetDto</a>. |                                              |

### <a id="ResourceAuthorizedTargetDto"></a> ResourceAuthorizedTargetDto

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---------------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| targetType       | string | Yes                                          | Subject type                               | USER                                         |
| targetIdentifier | string | Yes                                          | Subject unique identifier                  | `code`                                       |
| actions          | array  | Yes                                          | Action list                                | `["ecs:Start","ecs:Stop"]`                   |
