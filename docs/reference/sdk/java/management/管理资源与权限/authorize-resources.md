# Authorized resources

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Authorize one or more resources to users, roles, groups, organizations, etc., and specify different operation permissions for each.

## Method Name

`ManagementClient.authorizeResources`

## Request Parameters

| Name      | Type                                                         | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                           | <div style="width:200px">Example Value</div> |
| --------- | ------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| list      | <a href="#AuthorizeResourceItem">AuthorizeResourceItem[]</a> | Yes                                          | -                                           | Authorization resource list Array length limit: 10.                                                  |                                              |
| namespace | string                                                       | No                                           | -                                           | Code of the permission group (permission space). Do not pass to obtain the default permission group. | `default`                                    |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.AuthorizeResourceItem;
import cn.authing.sdk.java.dto.AuthorizeResourcesDto;
import cn.authing.sdk.java.dto.IsSuccessRespDto;
import cn.authing.sdk.java.dto.ResourceItemDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class AuthorizeResourcesTest {
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

        AuthorizeResourcesDto reqDto = new AuthorizeResourcesDto();
        List<AuthorizeResourceItem> list = new ArrayList<>();
        AuthorizeResourceItem item = new AuthorizeResourceItem();
        List<ResourceItemDto> resourceList = new ArrayList<>();
        ResourceItemDto resourceItemDto = new ResourceItemDto();
        resourceItemDto.setResourceType(ResourceItemDto.ResourceType.DATA);
        resourceItemDto.setCode("code1");
        resourceItemDto.setActions(Collections.singletonList("action1"));
        resourceList.add(resourceItemDto);
        item.setResources(resourceList);
        item.setTargetType(AuthorizeResourceItem.TargetType.USER);
        item.setTargetIdentifiers(Collections.singletonList("6343b98b7cfxxx9366e9b7c"));
        list.add(item);
        reqDto.setList(list);
        IsSuccessRespDto response = client.authorizeResources(reqDto);
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

### <a id="AuthorizeResourceItem"></a> AuthorizeResourceItem

| Name              | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                        | <div style="width:200px">Example Value</div> |
| ----------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| targetType        | string | Yes                                          | Target object Type:<br>- `USER`: user<br>- `ROLE`: role<br>- `GROUP`: group<br>- `DEPARTMENT`: department<br>                                                                                                                                                                                                                                     | USER                                         |
| targetIdentifiers | array  | Yes                                          | Unique identifier of target object:<br>- If Yes user, it is the user's ID, such as `6343b98b7cfxxx9366e9b7c`<br>- If Yes role, it is the role code, such as `admin`<br>- If Yes group, it is the group code, such as `developer`<br>- If Yes department, it is the department ID, such as `6343bafc019xxxx889206c4c`<br> Array length limit: 100. | `["userId1","userId2"]`                      |
| resources         | array  | Yes                                          | Authorized resource list Nested Type: <a href="#ResourceItemDto">ResourceItemDto</a>.                                                                                                                                                                                                                                                             |                                              |

### <a id="ResourceItemDto"></a> ResourceItemDto

| Name         | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                      | <div style="width:200px">Example Value</div> |
| ------------ | ------ | -------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------- |
| code         | string | Yes                                          | Resource unique identifier                                      | `ecs`                                        |
| actions      | array  | Yes                                          | Operation type defined by the resource. Array length limit: 50. | `["ecs:Stop","ecs:Start"]`                   |
| resourceType | string | Yes                                          | Resource Type, such as data, API, button, menu                  | DATA                                         |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| success | boolean | Yes                                          | Whether the operation is successful        | `true`                                       |
