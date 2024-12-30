# Authorize application access rights

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Authorize application access rights to users, groups, organizations or roles. If the user, group, organization or role does not exist, skip and proceed to the next step of authorization without returning an error.

## Method Name

`ManagementClient.authorizeApplicationAccess`

## Request Parameters

| Name  | Type                                                                             | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----- | -------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| list  | <a href="#ApplicationPermissionRecordItem">ApplicationPermissionRecordItem[]</a> | Yes                                          | -                                           | Authorization subject list, up to 10 items |                                              |
| appId | string                                                                           | Yes                                          | -                                           | Application ID                             | `6229ffaxxxxxxxxcade3e3d9`                   |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.ApplicationPermissionRecordItem;
import cn.authing.sdk.java.dto.AuthorizeApplicationAccessDto;
import cn.authing.sdk.java.dto.IsSuccessRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class AuthorizeApplicationAccessTest {
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

        AuthorizeApplicationAccessDto reqDto = new AuthorizeApplicationAccessDto();
        reqDto.setAppId("6229ffaxxxxxxxxcade3e3d9");
        List<ApplicationPermissionRecordItem> list = new ArrayList<>();
        ApplicationPermissionRecordItem recordItem = new ApplicationPermissionRecordItem();
        recordItem.setTargetType(ApplicationPermissionRecordItem.TargetType.USER);
        recordItem.setTargetIdentifier(Collections.singletonList("6sd9ffaxxxxxcade3eds9"));
        recordItem.setEffect(ApplicationPermissionRecordItem.Effect.ALLOW);
        list.add(recordItem);
        reqDto.setList(list);
        IsSuccessRespDto response = client.authorizeApplicationAccess(reqDto);
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

### <a id="ApplicationPermissionRecordItem"></a> ApplicationPermissionRecordItem

| Name              | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                           | <div style="width:200px">Example Value</div> |
| ----------------- | ------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| targetType        | string  | Yes                                          | Subject type                                                                                                                                                                                                                                                                                         | USER                                         |
| namespaceCode     | string  | No                                           | Permission group code, required when subject type is "ROLE"                                                                                                                                                                                                                                          | `code1`                                      |
| inheritByChildren | boolean | No                                           | When subject type is "ORG", the authorization is inherited by child nodes                                                                                                                                                                                                                            | `true`                                       |
| targetIdentifier  | array   | Yes                                          | Subject identifier list, when subject type is "USER", the value should be user ID; when subject type is "GROUP", the value should be group code; when subject type is "ROLE", the value should be role code; when subject type is "ORG", the value should be organization node ID. Maximum 50 items. | `["6229ffaxxxxxxxxcade3e3d9"]`               |
| effect            | string  | Yes                                          | Authorization effect, allow or deny                                                                                                                                                                                                                                                                  | ALLOW                                        |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| success | boolean | Yes                                          | Whether the operation is successful        | `true`                                       |
