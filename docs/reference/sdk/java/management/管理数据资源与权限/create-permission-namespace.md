# Create a permission space

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Create a permission space, you can set the permission space Name, Code and description information.

## Method Name

`ManagementClient.createPermissionNamespace`

## Request Parameters

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| name        | string | yes                                          | -                                           | Permission Space Name                      | `Example Permission Space`                   |
| code        | string | yes                                          | -                                           | Permission Space Code                      | `examplePermissionNamespace`                 |
| description | string | no                                           | -                                           | Permission Space Description               | `Example Permission Space Description`       |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.*;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

import java.util.Collections;

public class CreatePermissionNamespaceTest {

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

        CreatePermissionNamespaceDto request = new CreatePermissionNamespaceDto();
        request.setName("example permission space");
        request.setCode("examplePermissionNamespace");
        request.setDescription("example permission space description");

        CreatePermissionNamespaceResponseDto response = client.createPermissionNamespace(request);
        System.out.println(JsonUtils.serialize(response));
    }

}
```

## Request Response

Type： `CreatePermissionNamespaceResponseDto`

| Name       | Type                                                                             | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                           | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                           | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                           | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#CreatePermissionNamespaceRespDto">CreatePermissionNamespaceRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "code": "examplePermissionNamespace",
    "name": "Example Permission Space",
    "description": "Example Permission Space Description"
  }
}
```

## Data Structure

### <a id="CreatePermissionNamespaceRespDto"></a> CreatePermissionNamespaceRespDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| code        | string | Yes                                          | Permission Space Unique Identifier         | `examplePermissionNamespace`                 |
| name        | string | Yes                                          | Permission Space Name                      | `Example Permission Space`                   |
| description | string | No                                           | Permission Space Description               | `Example Permission Space Description`       |
