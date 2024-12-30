# Get the list of external identity sources enabled by the application

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get the list of external identity sources enabled by the application, and the front end can render the external identity source button based on this.

## Method Name

`ManagementClient.getApplicationEnabledExtIdps`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

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

Type： `GetExtIdpsRespDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string | Request ID. Returned when the request fails.                                                                 |
| data       | array  | List of external identity sources                                                                            |

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
| identifier | string | yes                                          | Identity source connection unique identifier | `wechat`                                     |
| extIdpId   | string | yes                                          | Identity source ID                           |                                              |
| type       | string | yes                                          | Identity source type                         | oidc                                         |
| extIdpType | string | yes                                          | Authentication type                          | social                                       |
| bindUrl    | string | yes                                          | Authentication address                       |                                              |
| name       | string | yes                                          | Identity source display name                 |                                              |
| name_en    | string | no                                           | Identity source display name (English)       |                                              |
| desc       | string | no                                           | Description                                  |                                              |
| desc_en    | string | no                                           | Description in English                       |                                              |
| logo       | string | no                                           | Icon                                         |                                              |
