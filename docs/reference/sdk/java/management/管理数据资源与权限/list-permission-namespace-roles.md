# Paginated query of all role lists under the permission space

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Paginated query of all role lists under the permission space, paginated acquisition of all role lists under the permission space.

## Method Name

`ManagementClient.listPermissionNamespaceRoles`

## Request Parameters

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                         | <div style="width:200px">Example Value</div> |
| ----- | ------ | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- |
| code  | string | yes                                          | -                                           | Permission grouping unique identifier Code                                         | `examplePermissionNamespace`                 |
| page  | number | No                                           | 1                                           | Current page number, starting from 1                                               | `1`                                          |
| limit | number | No                                           | 10                                          | The maximum number of pages per page cannot exceed 50, and the default value is 10 | `10`                                         |
| query | string | No                                           | -                                           | Role Code or Name                                                                  | `test`                                       |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.ListPermissionNamespaceRolesDto;
import cn.authing.sdk.java.dto.PermissionNamespaceRolesListPaginatedRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;


public class ListPermissionNamespaceRolesTest {
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

        ListPermissionNamespaceRolesDto request = new ListPermissionNamespaceRolesDto();
        request.setPage(1);
        request.setLimit(10);
        request.setCode("examplePermissionNamespace");
        request.setQuery("exampleRole");
        PermissionNamespaceRolesListPaginatedRespDto response = client.listPermissionNamespaceRoles(request);
        System.out.println(JsonUtils.serialize(response));
    }

}
```

## Request Response

Type： `PermissionNamespaceRolesListPaginatedRespDto`

| Name       | Type                                                                                       | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                                     | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                                     | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                                     | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#PermissionNamespaceRolesListPagingDto">PermissionNamespaceRolesListPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "name": "RoleName",
      "code": "role1",
      "description": "This is a description of an example role",
      "namespace": "system",
      "updatedAt": "2022-07-03T02:20:30.000Z"
    }
  }
}
```

## Data Structure

### <a id="PermissionNamespaceRolesListPagingDto"></a> PermissionNamespaceRolesListPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                          | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | yes                                          | Total number of records                                                                                             |                                              |
| list       | array  | yes                                          | Response data nested type：<a href="#PermissionNamespaceRolesListRespDto">PermissionNamespaceRolesListRespDto</a>。 |                                              |

### <a id="PermissionNamespaceRolesListRespDto"></a> PermissionNamespaceRolesListRespDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| name        | string | yes                                          | Role Name                                  | `Role Name`                                  |
| code        | string | yes                                          | Role Code                                  | `role1`                                      |
| description | string | no                                           | Role Description                           | `This is a sample role description`          |
| namespace   | string | yes                                          | Permission Space Code                      | `system`                                     |
| updatedAt   | string | yes                                          | Updated At                                 | `2022-07-03T02:20:30.000Z`                   |
