# Get simple application information

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get simple application information through application ID.

## Method Name

`ManagementClient.getApplicationSimpleInfo`

## Request Parameters

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| appId | string | Yes                                          | -                                           | Application ID                             | `6229ffaxxxxxxxxcade3e3d9`                   |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.ApplicationSimpleInfoSingleRespDto;
import cn.authing.sdk.java.dto.GetApplicationSimpleInfoDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetApplicationSimpleInfoTest {
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

        GetApplicationSimpleInfoDto reqDto = new GetApplicationSimpleInfoDto();
        reqDto.setAppId("6229ffaxxxxxxxxcade3e3d9");
        ApplicationSimpleInfoSingleRespDto response = client.getApplicationSimpleInfo(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `ApplicationSimpleInfoSingleRespDto`

| Name       | Type                                                             | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                           | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                           | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                           | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#ApplicationSimpleInfoDto">ApplicationSimpleInfoDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "appId": "62eaa95fe0xxxx9a5295bf7c",
    "appIdentifier": "example",
    "appName": "Demo",
    "appLogo": "Demo",
    "appDescription": "Example description",
    "appType": "web"
  }
}
```

## Data Structure

### <a id="ApplicationSimpleInfoDto"></a> ApplicationSimpleInfoDto

| Name           | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| -------------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| appId          | string  | Yes                                          | Application ID                             | `62eaa95fe0xxxx9a5295bf7c`                   |
| appIdentifier  | string  | Yes                                          | Application unique identifier              | `example`                                    |
| appName        | string  | Yes                                          | Application Name                           | `Demo`                                       |
| appLogo        | string  | Yes                                          | Application Logo link                      | `Demo`                                       |
| appDescription | string  | No                                           | Application description                    | `Example description`                        |
| appType        | string  | Yes                                          | Application type                           | web                                          |
| isIntegrateApp | boolean | Yes                                          | Yes No For integrated applications         |                                              |
