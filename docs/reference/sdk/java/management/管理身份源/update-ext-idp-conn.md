# Update identity source connection

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Update the identity source connection, you can set the identity source icon, whether to support login only, etc.

## Method Name

`ManagementClient.updateExtIdpConn`

## Request Parameters

| Name        | Type    | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                              | <div style="width:200px">Example Value</div>                                          |
| ----------- | ------- | -------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| fields      | object  | yes                                          | -                                           | Identity source connection custom parameters (incremental modification) | `{"clientId":"clientId"}`                                                             |
| displayName | string  | yes                                          | -                                           | Identity source connection display name                                 | `exampleName`                                                                         |
| id          | string  | yes                                          | -                                           | Identity source connection ID                                           | `60b49eb83fd80adb96f26e68`                                                            |
| logo        | string  | no                                           | -                                           | Icon for identity source connection                                     | `https://files.authing.co/authing-console/social-connections/icon_xiaochengxu@2x.png` |
| loginOnly   | boolean | no                                           | -                                           | Whether to support login only                                           |                                                                                       |
| tenantId    | string  | no                                           | -                                           | tenant ID                                                               | `60b49eb83fd80adb96f26e68`                                                            |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.ExtIdpConnDetailSingleRespDto;
import cn.authing.sdk.java.dto.UpdateExtIdpConnDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class UpdateExtIdpConnTest {
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

        UpdateExtIdpConnDto reqDto = new UpdateExtIdpConnDto();
        reqDto.setFields(new Object());
        reqDto.setDisplayName("exampleName");
        reqDto.setId("60b49eb83xxx0adb96f26e68");
        ExtIdpConnDetailSingleRespDto response = client.updateExtIdpConn(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `ExtIdpConnDetailSingleRespDto`

| Name       | Type                                             | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                           | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                           | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                           | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#ExtIdpConnDetail">ExtIdpConnDetail</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "id": "60b49eb83fd80adb96f26e68",
    "type": "default",
    "extIdpId": "6318061be13c0ce6a64093e5",
    "logo": "https://files.authing.co/authing-console/social-connections/icon_xiaochengxu@2x.png",
    "identifier": "60b49eb83fd80adb96f26e68",
    "displayName": "Login Page",
    "loginOnly": true,
    "associationMode": "challenge",
    "challengeBindingMethods": "[\"email-password\"]"
  }
}
```

## Data Structure

### <a id="ExtIdpConnDetail"></a> ExtIdpConnDetail

| Name                    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                       | <div style="width:200px">Example Value</div>                                          |
| ----------------------- | ------- | -------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| id                      | string  | yes                                          | Identity source connection id                                    | `60b49eb83fd80adb96f26e68`                                                            |
| type                    | string  | yes                                          | Identity source connection type                                  | oidc                                                                                  |
| extIdpId                | string  | yes                                          | Identity source ID                                               | `6318061be13c0ce6a64093e5`                                                            |
| logo                    | string  | yes                                          | Identity source connection icon                                  | `https://files.authing.co/authing-console/social-connections/icon_xiaochengxu@2x.png` |
| identifier              | string  | no                                           | Identity source connection logo                                  | `60b49eb83fd80adb96f26e68`                                                            |
| displayName             | string  | no                                           | Display name of the identity source connection on the login page | `Login page`                                                                          |
| loginOnly               | boolean | yes                                          | Whether to support only login                                    | `true`                                                                                |
| associationMode         | string  | yes                                          | Account association mode                                         | none                                                                                  |
| challengeBindingMethods | array   | yes                                          | Account binding method                                           | `["email-password"]`                                                                  |
