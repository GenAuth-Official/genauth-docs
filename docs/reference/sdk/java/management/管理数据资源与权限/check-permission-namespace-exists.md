# Verify whether the permission space Code or Name is available

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Check whether it is available through user pool ID and permission space Code, or user pool ID and permission space Name.

## Method Name

`ManagementClient.checkPermissionNamespaceExists`

## Request Parameters

| Name | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| code | string | No                                           | -                                           | Permission space Code                      | `examplePermissionNamespace`                 |
| name | string | No                                           | -                                           | Permission space Name                      | `Example Permission Space`                   |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CheckPermissionNamespaceExistsDto;
import cn.authing.sdk.java.dto.PermissionNamespaceCheckExistsRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;


public class CheckPermissionNamespaceExistsTest {

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

        CheckPermissionNamespaceExistsDto request1 = new CheckPermissionNamespaceExistsDto();
        request1.setName("Example permission space Name");
        PermissionNamespaceCheckExistsRespDto response1 = client.checkPermissionNamespaceExists(request1);
        System.out.println(JsonUtils.serialize(response1));
        CheckPermissionNamespaceExistsDto request2 = new CheckPermissionNamespaceExistsDto();
        request2.setCode("examplePermissionNamespace");
        PermissionNamespaceCheckExistsRespDto response2 = client.checkPermissionNamespaceExists(request2);
        System.out.println(JsonUtils.serialize(response2));
    }

}
```

## Request Response

Type： `PermissionNamespaceCheckExistsRespDto`

| Name       | Type                                                                                       | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                                     | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                                     | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                                     | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#CheckPermissionNamespaceExistsRespDto">CheckPermissionNamespaceExistsRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "isValid": " false",
    "message": " permission namespace code already exist"
  }
}
```

## Data Structure

### <a id="CheckPermissionNamespaceExistsRespDto"></a> CheckPermissionNamespaceExistsRespDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                     | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| isValid | boolean | yes                                          | Check whether the permission space Name or permission space Name Code is valid                                                                 | ` false`                                     |
| message | string  | no                                           | Prompt message if the permission space Name or permission space Code verification fails. If the verification succeeds, Message is not returned | ` permission namespace code already exist`   |
