# Get WeChat Mini Program, Official Account Access Token

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get WeChat Mini Program, Official Account Access Token cached by GenAuth server

## Method Name

`ManagementClient.getWechatMpAccessToken`

## Request Parameters

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                  | <div style="width:200px">Example Value</div> |
| --------- | ------ | -------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------- |
| appSecret | string | Yes                                          | -                                           | AppSecret of WeChat Mini Program or WeChat Official Account |                                              |
| appId     | string | Yes                                          | -                                           | AppId of WeChat Mini Program or WeChat Official Account     |                                              |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.GetWechatAccessTokenDto;
import cn.authing.sdk.java.dto.GetWechatAccessTokenRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetWechatMpAccessTokenTest {
    // Need to be replaced with your GenAuth App ID
    private static final String APP_ID = "AUTHING_APP_ID";
    // Need to be replaced with your GenAuth App Secret
    private static final String APP_SECRET = "AUTHING_APP_SECRET";
    // Need to be replaced with your GenAuth App Host
    private static final String APP_HOST = "AUTHING_APP_HOST";

    public static void main(String[] args) throws Throwable {
        AuthenticationClientOptions clientOptions = new AuthenticationClientOptions();
        clientOptions.setAppId(APP_ID);
        clientOptions.setAppSecret(APP_SECRET);
        clientOptions.setAppHost(APP_HOST);

        AuthenticationClient client = new AuthenticationClient(clientOptions);

        GetWechatAccessTokenDto reqDto = new GetWechatAccessTokenDto();
        reqDto.setAppId(APP_ID);
        reqDto.setAppSecret(APP_SECRET);
        GetWechatAccessTokenRespDto response = client.getWechatMpAccessToken(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `GetWechatAccessTokenRespDto`

| Name       | Type                                                                   | Description                                                                                                             |
| ---------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                 | Business status code. You can use this status code to determine whether the operation is successful. 200 means success. |
| message    | string                                                                 | Description                                                                                                             |
| apiCode    | number                                                                 | This error code is used to get the specific error type.                                                                 |
| requestId  | string                                                                 | Request ID. Returned when the request fails.                                                                            |
| data       | <a href="#GetWechatAccessTokenDataDto">GetWechatAccessTokenDataDto</a> | Response data                                                                                                           |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {}
}
```

## Data Structure

### <a id="GetWechatAccessTokenDataDto"></a> GetWechatAccessTokenDataDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>              | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------------------- | -------------------------------------------- |
| accessToken | string | Yes                                          | WeChat Access Token cached by the GenAuth server        |                                              |
| expiresAt   | number | Yes                                          | Access Token expiration time, as a timestamp in seconds |                                              |
