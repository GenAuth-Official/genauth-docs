# Set the value of a custom field

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If this document description is incorrect, please refer to the V3 API.

Set the value of a custom field for a user, role, or department. If it exists, update it, and if it does not exist, create it.

## Method Name

`ManagementClient.setCustomData`

## Request Parameters

| Name             | Type                                               | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                 | <div style="width:200px">Example Value</div> |
| ---------------- | -------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| list             | <a href="#SetCustomDataDto">SetCustomDataDto[]</a> | Yes                                          | -                                           | Custom data list array length limit: 50.                                                                                                                                                                                                                                                                   |                                              |
| targetIdentifier | string                                             | Yes                                          | -                                           | Unique identifier of the target object:<br>- If Yes user, the user's ID, such as `6343b98b7cfxxx9366e9b7c`<br>- If Yes role, the role's code, such as `admin`<br>- If Yes group, the group's code, such as `developer`<br>- If Yes department, the department's ID, such as `6343bafc019xxxx889206c4c`<br> | `userId1`                                    |
| targetType       | string                                             | Yes                                          | -                                           | Target object Type:<br>- `USER`: user<br>- `ROLE`: role<br>- `GROUP`: group<br>- `DEPARTMENT`: department<br>                                                                                                                                                                                              | `USER`                                       |
| tenantId         | string                                             | No                                           | -                                           | Tenant ID                                                                                                                                                                                                                                                                                                  | `642c1df417c2d8a80d744c1d`                   |
| namespace        | string                                             | No                                           | -                                           | The code of the permission group. This field is required when target_type is a role. If it is No, it can be ignored.                                                                                                                                                                                       | `default`                                    |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.IsSuccessRespDto;
import cn.authing.sdk.java.dto.SetCustomDataDto;
import cn.authing.sdk.java.dto.SetCustomDataReqDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

import java.util.ArrayList;
import java.util.List;

public class SetCustomDataTest {
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

        SetCustomDataReqDto reqDto = new SetCustomDataReqDto();
        List<SetCustomDataDto> list = new ArrayList<>();
        SetCustomDataDto dataDto = new SetCustomDataDto();
        dataDto.setKey("school");
        dataDto.setValue("pku");
        list.add(dataDto);
        reqDto.setList(list);
        reqDto.setTargetType(SetCustomDataReqDto.TargetType.USER);
        reqDto.setTargetIdentifier("6343b98b7cfxxx9366e9b7c");
        IsSuccessRespDto response = client.setCustomData(reqDto);
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

### <a id="SetCustomDataDto"></a> SetCustomDataDto

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                     | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| tenantId | string | No                                           | Tenant ID                                                                                                                      | `642c1df417c2d8a80d744c1d`                   |
| key      | string | Yes                                          | Field key, cannot conflict with the key of built-in fields                                                                     | `school`                                     |
| value    | string | Yes                                          | Custom data, can be of any type, but must match the custom field type defined during creation, otherwise the setting will fail | `pku`                                        |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| success | boolean | Yes                                          | Whether the operation is successful        | `true`                                       |
