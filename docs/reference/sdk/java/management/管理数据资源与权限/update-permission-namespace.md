# Modify the permission space

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the document description is incorrect, please refer to the V3 API.

Modify the permission space, you can modify the permission space Name, permission space description information and the new unique identifier (Code) of the permission space.

## Method Name

`ManagementClient.updatePermissionNamespace`

## Request Parameters

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>  | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------- | -------------------------------------------- |
| code        | string | yes                                          | -                                           | Permission group old unique identifier Code | `examplePermissionNamespace`                 |
| name        | string | no                                           | -                                           | Permission space Name                       | `Example Permission Space`                   |
| newCode     | string | no                                           | -                                           | Permission group new unique identifier Code | `exampleNewPermissionNamespace`              |
| description | string | no                                           | -                                           | Permission space description                | `Example Permission Space Description`       |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.UpdatePermissionNamespaceDto;
import cn.authing.sdk.java.dto.UpdatePermissionNamespaceResponseDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;


public class UpdatePermissionNamespaceTest {
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

        UpdatePermissionNamespaceDto request = new UpdatePermissionNamespaceDto();
        request.setCode("examplePermissionNamespace");
        request.setName("example new permission space Name");
        request.setNewCode("exampleNewPermissionNamespace");
        request.setDescription("example new permission space description");

        UpdatePermissionNamespaceResponseDto response = client.updatePermissionNamespace(request);
        System.out.println(JsonUtils.serialize(response));
    }

}
```

## Request Response

Type： `UpdatePermissionNamespaceResponseDto`

| Name       | Type                                                                             | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                           | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                           | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                           | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#UpdatePermissionNamespaceRespDto">UpdatePermissionNamespaceRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

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

### <a id="UpdatePermissionNamespaceRespDto"></a> UpdatePermissionNamespaceRespDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| code        | string | yes                                          | permission space unique identifier         | `examplePermissionNamespace`                 |
| name        | string | yes                                          | permission space Name                      | `example permission space`                   |
| description | string | no                                           | permission space description               | `example permission space description`       |
