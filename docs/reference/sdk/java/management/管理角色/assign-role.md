# Batch authorization for a single role

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Assign roles through the role code in the permission group. The assignee can be a user or department.

## Method Name

`ManagementClient.assignRole`

## Request Parameters

| Name       | Type                                 | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                     | <div style="width:200px">Example Value</div>                            |
| ---------- | ------------------------------------ | -------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------- |
| targets    | <a href="#TargetDto">TargetDto[]</a> | Yes                                          | -                                           | Target object Array length limit: 50.                          | `[{"targetIdentifier":"60b49eb83fd80adb96f26e68","targetType":"USER"}]` |
| code       | string                               | yes                                          | -                                           | Unique identifier of the role in the permission group          | `code1`                                                                 |
| endTime    | number                               | no                                           | -                                           | Subject expiration time in milliseconds, valid forever if null | `1669114748050`                                                         |
| enableTime | number                               | no                                           | -                                           | Subject join time in milliseconds, join immediately if null    | `1669114748050`                                                         |
| namespace  | string                               | no                                           | -                                           | Code of the permission group to which it belongs               | `60b49eb83fd80adb96f26e68`                                              |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.AssignRoleDto;
import cn.authing.sdk.java.dto.IsSuccessRespDto;
import cn.authing.sdk.java.dto.TargetDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

import java.util.ArrayList;
import java.util.List;

public class AssignRoleTest {
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

        AssignRoleDto reqDto = new AssignRoleDto();
        reqDto.setCode("code1");
        List<TargetDto> list = new ArrayList<>();
        TargetDto targetDto = new TargetDto();
        targetDto.setTargetType(TargetDto.TargetType.USER);
        targetDto.setTargetIdentifier("6343b98b7cfxxx9366e9b7c");
        list.add(targetDto);
        reqDto.setTargets(list);
        IsSuccessRespDto response = client.assignRole(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                   | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                   | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                                                                                                                                                                                                                                                               |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "success": true
  }
}
```

## Data Structure

### <a id="TargetDto"></a> TargetDto

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                   | <div style="width:200px">Example Value</div> |
| ---------------- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| targetType       | string | yes                                          | Target object type:<br>- `USER`: user<br>- `ROLE`: role<br>- `GROUP`: group<br>- `DEPARTMENT`: department<br>                                                                                                                                                                                                                                | USER                                         |
| targetIdentifier | string | yes                                          | Unique identifier of the target object:<br>- If it is a user, it is the user's ID, such as `6343b98b7cfxxx9366e9b7c`<br>- If it is a role, it is the role code, such as `admin`<br>- If it is a group, it is the group code, such as `developer`<br>- If it is a department, it is the department ID, such as `6343bafc019xxxx889206c4c`<br> | `60b49eb83fd80adb96f26e68`                   |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| success | boolean | yes                                          | Whether the operation is successful        | `true`                                       |
