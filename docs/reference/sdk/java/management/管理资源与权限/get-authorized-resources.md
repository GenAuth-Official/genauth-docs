# Get a list of resources authorized by a subject

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

According to the filtering conditions, get a list of resources authorized by a subject.

## Method Name

`ManagementClient.getAuthorizedResources`

## Request Parameters

| Name             | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                          | <div style="width:200px">Example Value</div> |
| ---------------- | -------- | -------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| targetIdentifier | string   | Yes                                          | -                                           | Unique identifier of the target object:<br>- If Yes is user, it is the user's ID, such as `6343b98b7cfxxx9366e9b7c`<br>- If Yes is role, it is the role's code, such as `admin`<br>- If Yes is group, it is the group's code, such as `developer`<br>- If Yes is department, it is the department's ID, such as `6343bafc019xxxx889206c4c`<br>                                      | `userId1`                                    |
| targetType       | string   | Yes                                          | -                                           | Target object Type:<br>- `USER`: user<br>- `ROLE`: role<br>- `GROUP`: group<br>- `DEPARTMENT`: department<br>                                                                                                                                                                                                                                                                       | `USER`                                       |
| namespace        | string   | No                                           | -                                           | Code of the permission group (permission space). If it is not passed, the default permission group will be obtained.                                                                                                                                                                                                                                                                | `default`                                    |
| resourceType     | string   | No                                           | -                                           | Limit Resource Type, such as data, API, button, menu                                                                                                                                                                                                                                                                                                                                | `DATA`                                       |
| resourceList     | string[] | No                                           | -                                           | Limit the query resource list. If specified, only the specified resource list will be returned. <br><br>The resourceList parameter supports prefix matching, for example: <br>- Authorize a resource as `books:123`, which can be matched by `books:*`; <br>- Authorize a resource as `books:fictions_123`, which can be matched by `books:fictions_`; <br> Array length limit: 50. |                                              |
| withDenied       | boolean  | No                                           | -                                           | Whether to obtain denied resources                                                                                                                                                                                                                                                                                                                                                  |                                              |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.AuthorizedResourcePaginatedRespDto;
import cn.authing.sdk.java.dto.GetAuthorizedResourcesDto;
import cn.authing.sdk.java.dto.TargetDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetAuthorizedResourcesTest {
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

        GetAuthorizedResourcesDto reqDto = new GetAuthorizedResourcesDto();
        reqDto.setTargetType(TargetDto.TargetType.USER.getValue());
        reqDto.setTargetIdentifier("6343b98b7cfxxx9366e9b7c");
        AuthorizedResourcePaginatedRespDto response = client.getAuthorizedResources(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `AuthorizedResourcePaginatedRespDto`

| Name       | Type                                                                   | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                 | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                 | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                 | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#AuthorizedResourcePagingDto">AuthorizedResourcePagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "resourceCode": "ecs:1",
      "description": "Server",
      "condition": {
        "param": "AppId",
        "operator": "StringEquals",
        "value": "1"
      },
      "resourceType": "API",
      "apiIdentifier": "/api/v1/example",
      "actions": "[\"ecs:Start\",\"ecs:Stop\"]",
      "effect": "ALLOW"
    }
  }
}
```

## Data Structure

### <a id="AuthorizedResourcePagingDto"></a> AuthorizedResourcePagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                              | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | Yes                                          | Total number of records                                                                 |                                              |
| list       | array  | Yes                                          | Response data nested type：<a href="#AuthorizedResourceDto">AuthorizedResourceDto</a>。 |                                              |

### <a id="AuthorizedResourceDto"></a> AuthorizedResourceDto

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                       | <div style="width:200px">Example Value</div> |
| ------------- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------- |
| resourceCode  | string | Yes                                          | Resource Descriptor                                                              | `ecs:1`                                      |
| description   | string | No                                           | Resource description information                                                 | `Server`                                     |
| condition     | array  | No                                           | Strategy Condition Nested Type：<a href="#PolicyCondition">PolicyCondition</a>。 |                                              |
| resourceType  | string | Yes                                          | Resource Type                                                                    | DATA                                         |
| apiIdentifier | string | Yes                                          | API URL                                                                          | `/api/v1/example`                            |
| actions       | array  | Yes                                          | List of authorized operations                                                    | `["ecs:Start","ecs:Stop"]`                   |
| effect        | string | Yes                                          | Allow or Yes Reject                                                              | ALLOW                                        |

### <a id="PolicyCondition"></a> PolicyCondition

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| param    | string | Yes                                          | Condition Param                            | UserPoolId                                   |
| operator | string | Yes                                          | Condition Operator                         | Bool                                         |
| value    | string | Yes                                          | Condition Value                            | `1`                                          |
