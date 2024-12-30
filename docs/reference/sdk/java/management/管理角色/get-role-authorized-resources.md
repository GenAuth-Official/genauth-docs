# Get the list of resources authorized by the role

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the list of resources authorized by the role through the role code in the permission group.

## Method Name

`ManagementClient.getRoleAuthorizedResources`

## Request Parameters

| Name         | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                | <div style="width:200px">Example Value</div> |
| ------------ | ------ | -------------------------------------------- | ------------------------------------------- | --------------------------------------------------------- | -------------------------------------------- |
| code         | string | yes                                          | -                                           | Unique identifier of the role within the permission group | `60b49eb83fd80adb96f26e68`                   |
| namespace    | string | no                                           | -                                           | Code of the permission group                              | `default`                                    |
| resourceType | string | no                                           | -                                           | Resource type, e.g. data, API, button, menu               | `DATA`                                       |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.GetRoleAuthorizedResourcesDto;
import cn.authing.sdk.java.dto.RoleAuthorizedResourcePaginatedRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetRoleAuthorizedResourcesTest {
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

        GetRoleAuthorizedResourcesDto reqDto = new GetRoleAuthorizedResourcesDto();
        reqDto.setCode("60b49eb83fd80axxx96f26e68");
        RoleAuthorizedResourcePaginatedRespDto response = client.getRoleAuthorizedResources(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `RoleAuthorizedResourcePaginatedRespDto`

| Name       | Type                                                                           | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                         | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                         | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#RoleAuthorizedResourcePagingDto">RoleAuthorizedResourcePagingDto</a> | data                                                                                                                                                                                                                                                                                                                                              |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "resourceCode": "ecs",
      "resourceType": "DATA",
      "actions": "[\"ecs:Start\",\"ecs:Stop\"]",
      "apiIdentifier": "dd8d7stf44"
    }
  }
}
```

## Data Structure

### <a id="RoleAuthorizedResourcePagingDto"></a> RoleAuthorizedResourcePagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                       | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| totalCount | number | yes                                          | Total number of records                                                                          |                                              |
| list       | array  | yes                                          | data Nested Type：<a href="#RoleAuthorizedResourcesRespDto">RoleAuthorizedResourcesRespDto</a>。 |                                              |

### <a id="RoleAuthorizedResourcesRespDto"></a> RoleAuthorizedResourcesRespDto

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>   | <div style="width:200px">Example Value</div> |
| ------------- | ------ | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | --- |
| resourceCode  | string | yes                                          | resource descriptor                          | `ecs`                                        |
| resourceType  | string | yes                                          | resource type                                | DATA                                         |
| actions       | array  | yes                                          | authorized action list                       | ` ["ecs:Start","ecs:Stop"]`                  |
| apiIdentifier | string | yes                                          | API Identifier corresponding to the resource | `dd8d7stf44`                                 |     |
