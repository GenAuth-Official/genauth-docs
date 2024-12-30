# Decrypt WeChat Mini Program Data

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Decrypt WeChat Mini Program Data

## Method Name

`ManagementClient.decryptWechatMiniProgramData`

## Request Parameters

| Name                 | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                               | <div style="width:200px">Example Value</div> |
| -------------------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------- |
| code                 | string | Yes                                          | -                                           | User returned by `wx.login` interface `code`                             |                                              |
| iv                   | string | Yes                                          | -                                           | Symmetric decryption algorithm initialization vector, returned by WeChat |                                              |
| encryptedData        | string | Yes                                          | -                                           | Get the encrypted data (encryptedData) returned by WeChat open data      |                                              |
| extIdpConnidentifier | string | Yes                                          | -                                           | External identity source connection identifier of WeChat applet          | `my-wxapp`                                   |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.DecryptWechatMiniProgramDataDto;
import cn.authing.sdk.java.dto.DecryptWechatMiniProgramDataRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class DecryptWechatMiniProgramDataTest {
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

        DecryptWechatMiniProgramDataDto reqDto = new DecryptWechatMiniProgramDataDto();
        reqDto.setCode("xxx");
        reqDto.setIv("xxx");
        reqDto.setEncryptedData("xxx");
        reqDto.setExtIdpConnidentifier("my-wxapp");
        DecryptWechatMiniProgramDataRespDto response = client.decryptWechatMiniProgramData(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `DecryptWechatMiniProgramDataRespDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string | Request ID. Returned when the request fails.                                                                 |
| data       | object | Response data                                                                                                |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "nickName": "Zhang San",
    "gender": 1,
    "language": "zh_CN",
    "city": "Guangzhou",
    "province": "Guangdong",
    "country": "CN",
    "avatarUrl": "http://wx.qlogo.cn/mmopen/vi_32/aSKcBBPpibyKNicHNTMM0qJVh8Kjgiak2AHWr8MHM4WgMEm7GFhsf8OYrySdbvAMvTsw3mo8ibKicsnfN5pRjl1p8HQ/0",
    "unionId": "ocMvos6NjeKLIBqg5Mr9QjxrP1FA",
    "watermark": {
      "timestamp": 1477314187,
      "appid": "wx4f4bc4dec97d474b"
    }
  }
}
```

## Data Structure
