# Get the list of external identity sources enabled by the application

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Get the list of external identity sources enabled by the application. The front end can render the external identity source button based on this.

## Method Name

`AuthenticationClient.getApplicationEnabledExtIdps`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------- | ------------------------------------------ | -------------------------------------------------- |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.GetExtIdpsRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetApplicationEnabledExtIdpsTest {
    // Need to be replaced with your GenAuth App ID
    private static final String APP_ID = "AUTHING_APP_ID";
    // Need to be replaced with your GenAuth App Secret
    private static final String APP_SECRET = "AUTHING_APP_SECRET";
    // Need to be replaced with your GenAuth App Host
    private static final String APP_HOST = "AUTHING_APP_HOST";
    // Need to be replaced with your GenAuth Access Token
    private static final String ACCESS_TOKEN = "AUTHING_ACCESS_TOKEN";

    public static void main(String[] args) throws Throwable {
        AuthenticationClientOptions clientOptions = new AuthenticationClientOptions();
        clientOptions.setAppId(APP_ID);
        clientOptions.setAppSecret(APP_SECRET);
        clientOptions.setAppHost(APP_HOST);
        clientOptions.setAccessToken(ACCESS_TOKEN);

        AuthenticationClient client = new AuthenticationClient(clientOptions);

        GetExtIdpsRespDto response = client.getApplicationEnabledExtIdps();
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type: `GetExtIdpsRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                             |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number | Segmented error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | array  | List of external identity sources                                                                                                                                                                                                                                                                                                                   |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "identifier": "wechat"
  }
}
```

## Data Structure

### <a id="ExtIdpInfoDto"></a> ExtIdpInfoDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>   | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| identifier | string | Yes                                          | Identity source connection unique identifier | `wechat`                                     |
| extIdpId   | string | Yes                                          | Identity source ID                           |                                              |
| type       | string | Yes                                          | Identity source type                         | oidc                                         |
| extIdpType | string | Yes                                          | Authentication type                          | social                                       |
| bindUrl    | string | Yes                                          | Authentication address                       |                                              |
| name       | string | Yes                                          | Identity source display name                 |                                              |
| name_en    | string | No                                           | Identity source display name (English)       |                                              |
| desc       | string | No                                           | Description                                  |                                              |
| desc_en    | string | No                                           | Description in English                       |                                              |
| logo       | string | No                                           | Icon                                         |                                              |
