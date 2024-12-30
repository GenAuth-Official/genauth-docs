# Get custom field values ​​for users, groups, roles, and organizations

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the document description is incorrect, please refer to the V3 API.

Get custom field values ​​for users, groups, roles, and organizations by filtering conditions.

## Method Name

`ManagementClient.getCustomData`

## Request Parameters

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                 | <div style="width:200px">Example Value</div> |
| ---------------- | ------ | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| targetIdentifier | string | Yes                                          | -                                           | Unique identifier of the target object:<br>- If Yes user, the user's ID, such as `6343b98b7cfxxx9366e9b7c`<br>- If Yes role, the role's code, such as `admin`<br>- If Yes group, the group's code, such as `developer`<br>- If Yes department, the department's ID, such as `6343bafc019xxxx889206c4c`<br> | `userId1`                                    |
| targetType       | string | Yes                                          | -                                           | Target object Type:<br>- `USER`: user<br>- `ROLE`: role<br>- `GROUP`: group<br>- `DEPARTMENT`: department<br>                                                                                                                                                                                              | `USER`                                       |
| tenantId         | string | Yes                                          | -                                           | Tenant ID                                                                                                                                                                                                                                                                                                  | `642c1df417c2d8a80d744c1d`                   |
| namespace        | string | No                                           | -                                           | The code of the permission group. This field is required when targetType is role. If this field is No, it can be ignored.                                                                                                                                                                                  | `default`                                    |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.GetCustomDataDto;
import cn.authing.sdk.java.dto.GetCustomDataRespDto;
import cn.authing.sdk.java.dto.TargetDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetCustomDataTest {
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

        GetCustomDataDto reqDto = new GetCustomDataDto();
        reqDto.setTargetType(TargetDto.TargetType.USER.getValue());
        reqDto.setTargetIdentifier("6343b98b7cfxxx9366e9b7c");
        GetCustomDataRespDto response = client.getCustomData(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `GetCustomDataRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | object | Specific custom data value                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "age": 18,
    "school": "pku"
  }
}
```

## Data Structure
