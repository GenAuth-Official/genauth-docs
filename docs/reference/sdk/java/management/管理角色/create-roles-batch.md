# Create roles in batches

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Create roles in batches, you can choose permission grouping, role description, etc.

## Method Name

`ManagementClient.createRolesBatch`

## Request Parameters

| Name | Type                                       | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div>                                          |
| ---- | ------------------------------------------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------- |
| list | <a href="#RoleListItem">RoleListItem[]</a> | yes                                          | -                                           | Role list Array length limit: 50。         | `[{"code":"my-role-code","namespace":"default","description":"this is description"}]` |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CreateRolesBatch;
import cn.authing.sdk.java.dto.IsSuccessRespDto;
import cn.authing.sdk.java.dto.RoleListItem;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

import java.util.ArrayList;
import java.util.List;

public class CreateRolesBatchTest {
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

        CreateRolesBatch reqDto = new CreateRolesBatch();
        List<RoleListItem> list = new ArrayList<>();
        RoleListItem item = new RoleListItem();
        item.setCode("code1");
        list.add(item);
        reqDto.setList(list);
        IsSuccessRespDto response = client.createRolesBatch(reqDto);
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

### <a id="RoleListItem"></a> RoleListItem

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                           | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| code        | string | yes                                          | Unique identifier of the role in the permission group                                                | `my-role-code`                               |
| name        | string | no                                           | Name of the role in the permission group                                                             | `my-role-name`                               |
| description | string | no                                           | Role description                                                                                     | `this is a description about the role`       |
| namespace   | string | no                                           | Code of the permission group (permission space). Do not pass it to get the default permission group. | `default`                                    |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| success | boolean | yes                                          | Whether the operation is successful        | `true`                                       |
