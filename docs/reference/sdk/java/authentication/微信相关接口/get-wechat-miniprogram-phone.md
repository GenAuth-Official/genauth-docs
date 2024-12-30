# Get the phone number of the mini program

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

## Method Name

`AuthenticationClient.getWechatMiniprogramPhone`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Example Value</div> |
| -------------------- | ------ | -------------------------------------- | ------ | ------------------------------------------ | ------------------------------------------- |
| code | string | Yes | - | `code` returned by `open-type=getphonecode` interface | |
| extIdpConnidentifier | string | Yes | - | WeChat applet external identity source connection identifier | `my-wxapp`                                  |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.GetWechatMiniProgramPhoneDto;
import cn.authing.sdk.java.dto.GetWechatMiniProgramPhoneRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetWechatMiniprogramPhoneTest {
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

        GetWechatMiniProgramPhoneDto reqDto = new GetWechatMiniProgramPhoneDto();
        reqDto.setCode("xxx");
        reqDto.setExtIdpConnidentifier("my-wxapp");
        GetWechatMiniProgramPhoneRespDto response = client.getWechatMiniprogramPhone(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type:  `GetWechatMiniProgramPhoneRespDto`

| Name       | Type                                                                             | Description                                                         |
| ---------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| statusCode | number                                                                           | Business status code. You can use this status code to determine whether the operation is successful. 200 means success. |
| message    | string                                                                           | Description                                                     |
| apiCode    | number                                                                           | This error code is used to get the specific error type.               |
| requestId  | string                                                                           | Request ID. Returned when the request fails.                                |
| data       | <a href="#GetWechatMiniProgramPhoneDataDto">GetWechatMiniProgramPhoneDataDto</a> | Response Data                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "phoneNumber": "+86188xxxx8888",
    "purePhoneNumber": "188xxxx8888",
    "countryCode": "86"
  }
}
```

## Data Structure

### <a id="GetWechatMiniProgramPhoneDataDto"></a> GetWechatMiniProgramPhoneDataDto

| Name            | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| --------------- | ------ | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| phoneNumber     | string | Yes                                     | Mobile phone number including area code                    | `+86188xxxx8888`                      |
| purePhoneNumber | string | Yes                                     | Mobile phone number without area code                  | `188xxxx8888`                         |
| countryCode     | string | Yes                                     | Area Code                                | `86`                                  |
