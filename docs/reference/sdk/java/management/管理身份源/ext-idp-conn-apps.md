# Connection details of the application under the identity source

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the connection status of the application on the identity source details page

## Method Name

`ManagementClient.extIdpConnStateByApps`

## Request Parameters

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| id       | string | yes                                          | -                                           | Identity source ID                         | `6268b0e5e4b9a0e8ffa8fd60`                   |
| tenantId | string | no                                           | -                                           | Tenant ID                                  | `60b49eb83fd80adb96f26e68`                   |
| appId    | string | no                                           | -                                           | Application ID                             | `60b49eb83fd80adb96f26e68`                   |
| type     | string | no                                           | -                                           | Identity source type                       |                                              |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.ExtIdpConnAppsDto;
import cn.authing.sdk.java.dto.ExtIdpListPaginatedRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class ExtIdpConnStateByAppsTest {
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

        ExtIdpConnAppsDto reqDto = new ExtIdpConnAppsDto();
        reqDto.setId("6268b0exxxa0e8ffa8fd60");
        ExtIdpListPaginatedRespDto response = client.extIdpConnStateByApps(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `ExtIdpListPaginatedRespDto`

| Name       | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                 | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                 | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#ExtIdpListPagingDto">ExtIdpListPagingDto</a> | Data                                                                                                                                                                                                                                                                                                                                           |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "id": "60b49eb83fd80adb96f26e68",
      "name": "default",
      "logo": "https://files.authing.co/authing-console/social-connections/wechatIdentitySource.svg",
      "tenantId": "60b49eb83fd80adb96f26e68",
      "type": "wechat"
    }
  }
}
```

## Data Structure

### <a id="ExtIdpListPagingDto"></a> ExtIdpListPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                      | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | yes                                          | Total number of records                                         |                                              |
| list       | array  | yes                                          | Response data nested type：<a href="#ExtIdpDto">ExtIdpDto</a>。 |                                              |

### <a id="ExtIdpDto"></a> ExtIdpDto

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div>                                           |
| -------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------- |
| id       | string | yes                                          | Identity source id                         | `60b49eb83fd80adb96f26e68`                                                             |
| name     | string | yes                                          | Identity source name                       | `default`                                                                              |
| logo     | string | yes                                          | Identity source logo                       | `https://files.authing.co/authing-console/social-connections/wechatIdentitySource.svg` |
| tenantId | string | no                                           | Tenant id                                  | `60b49eb83fd80adb96f26e68`                                                             |
| type     | string | yes                                          | Identity source type                       | `wechat`                                                                               |
