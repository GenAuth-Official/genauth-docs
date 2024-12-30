# Get apps with access permissions

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get apps with access permissions

## Method Name

`ManagementClient.getAccessibleApps`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.GetAccessibleAppsRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetAccessibleAppsTest {
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

        GetAccessibleAppsRespDto response = client.getAccessibleApps();
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `GetAccessibleAppsRespDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string | Request ID. Returned when the request fails.                                                                 |
| data       | array  | Response data                                                                                                |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "appId": "xxx",
    "appName": "Demo",
    "appLoginUrl": "https://example.genauth.ai/login",
    "appLogo": "https://files.authing.co/authing-console/default-app-logo.png",
    "active": true
  }
}
```

## Data Structure

### <a id="AccessibleAppsDto"></a> AccessibleAppsDto

| Name        | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div>                    |
| ----------- | ------- | -------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------- |
| appId       | string  | Yes                                          | Application ID                             | `xxx`                                                           |
| appName     | string  | Yes                                          | Application Name                           | `Demo`                                                          |
| appLoginUrl | string  | Yes                                          | Application login address                  | `https://example.genauth.ai/login`                              |
| appLogo     | string  | Yes                                          | Application Logo                           | `https://files.authing.co/authing-console/default-app-logo.png` |
| active      | boolean | Yes                                          | Currently logged in                        | `true`                                                          |
