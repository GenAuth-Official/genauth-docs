# Get the department list of the role

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Get the department list of the role through the role code in the permission group, supporting paging.

## Method Name

`ManagementClient.listRoleDepartments`

## Request Parameters

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                        | <div style="width:200px">Example Value</div> |
| --------- | ------ | -------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------- |
| code      | string | yes                                          | -                                           | Unique identifier of the role in the permission group             | `manager`                                    |
| namespace | string | no                                           | -                                           | Code of the permission group                                      | `default`                                    |
| page      | number | no                                           | 1                                           | Current page number, starting from 1                              | `1`                                          |
| limit     | number | no                                           | 10                                          | Number of pages per page, maximum cannot exceed 50, default is 10 | `10`                                         |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.ListRoleDepartmentsDto;
import cn.authing.sdk.java.dto.RoleDepartmentListPaginatedRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class ListRoleDepartmentsTest {
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

        ListRoleDepartmentsDto reqDto = new ListRoleDepartmentsDto();
        reqDto.setCode("manager");
        RoleDepartmentListPaginatedRespDto response = client.listRoleDepartments(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `RoleDepartmentListPaginatedRespDto`

| Name       | Type                                                                   | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                 | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                 | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                 | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#RoleDepartmentListPagingDto">RoleDepartmentListPagingDto</a> | Data                                                                                                                                                                                                                                                                                                                                              |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "id": "60b49eb83fd80adb96f26e68",
      "code": "code",
      "name": "departmentName",
      "description": "dd8d7stf44"
    }
  }
}
```

## Data Structure

### <a id="RoleDepartmentListPagingDto"></a> RoleDepartmentListPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                     | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------- |
| totalCount | number | yes                                          | Total number of records                                                        |                                              |
| list       | array  | yes                                          | Data Nested Type：<a href="#RoleDepartmentRespDto">RoleDepartmentRespDto</a>。 |                                              |

### <a id="RoleDepartmentRespDto"></a> RoleDepartmentRespDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| id          | string | yes                                          | Department ID                              | `60b49eb83fd80adb96f26e68`                   |
| code        | string | yes                                          | Department code                            | `code`                                       |
| name        | string | yes                                          | Department Name                            | `departmentName`                             |
| description | string | yes                                          | Department description                     | `dd8d7stf44`                                 |
