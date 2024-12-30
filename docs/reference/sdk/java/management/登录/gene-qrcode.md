# Generate a QR code for login

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Generate a QR code for login. Currently supports the generation of QR codes for WeChat public account scan code login, mini program scan code login, and self-built mobile APP scan code login.

## Method Name

`ManagementClient.geneQrCode`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| --------------- | ------- | -------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| type | string | Yes | - | QR code type. Currently supports three types: <br>- `MOBILE_APP`: Scan the QR code with a self-built mobile APP<br>- `WECHAT_MINIPROGRAM`: Scan the QR code with a WeChat applet<br>- `WECHAT_OFFICIAL_ACCOUNT` Scan the QR code with a WeChat public account | `MOBILE_APP` |
| extIdpConnId | string | No | - | When `type` is `WECHAT_MINIPROGRAM` or `WECHAT_OFFICIAL_ACCOUNT`, you can specify the identity source connection, otherwise the first corresponding identity source connection opened by the application is used by default to generate the QR code. | `62eb7ed1f04xxxxc6955b329` |
| customData | object | No | - | When `type` is `MOBILE_APP`, you can pass the user's custom data. When the user successfully scans the QR code for authorization, this data will be stored in the user's custom data. | `{"school":"hust"}` |
| context | object | No | - | When type is `WECHAT_OFFICIAL_ACCOUNT` or `WECHAT_MINIPROGRAM`, specify a custom pipeline context, which will be passed in the pipeline context | `{"source":"utm"}` |
| autoMergeQrCode | boolean | No | - | When type is `WECHAT_MINIPROGRAM`, whether to automatically merge the custom logo into the generated image, the default value is false. The process of merging QR codes on the server will increase the interface response speed. It is recommended to use the default value and stitch the images on the client. If you use the GenAuth SDK, you can save the manual stitching process. |                                      |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.GeneQRCodeRespDto;
import cn.authing.sdk.java.dto.GenerateQrcodeDto;
import cn.authing.sdk.java.enums.AuthMethodEnum;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GeneQrCodeTest {
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

        GenerateQrcodeDto reqDto = new GenerateQrcodeDto();
        reqDto.setType(GenerateQrcodeDto.Type.MOBILE_APP);
        GeneQRCodeRespDto response = client.geneQrCode(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `GeneQRCodeRespDto`

| Name | Type | Description |
| ---------- | -------------------------------------------------- | ------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message | string | Description |
| apiCode | number | Segmented error code, which can be used to get the specific error type. |
| requestId | string | Request ID. It will be returned when the request fails. |
| data | <a href="#GeneQRCodeDataDto">GeneQRCodeDataDto</a> | Response data                                                    |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "qrcodeId": "gQE-8TwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyMGJjX",
    "url": "https://files.authing.co/user-contentsqrcode/59f86b4832eb28071bdd9214/gQE-8TwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyMGJjX1ZhOFNiM1UxV29GVTF5MWMAAgQY4_RiAwSAxhMA.png",
    "customLogoUrl": "https://files.authing.co/authing-console/social-connections/wechatMiniLogin.svg"
  }
}
```

## Data Structure

### <a id="GeneQRCodeDataDto"></a> GeneQRCodeDataDto

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                   | <div style="width:200px">Example Value</div>                                                                                                                                        |
| ------------- | ------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| qrcodeId | string | Yes | The unique ID of the QR code. You can use this unique ID to query the QR code status. | `gQE-8TwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyMGJjX` |
| url | string | Yes | The QR code URL. The front end can render the QR code based on this link. | `https://files.authing.co/user-contentsqrcode/59f86b4832eb28071bdd9214/gQE-8TwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyMGJjX1ZhOFNiM1UxV29GVTF5MWMAAgQY4_RiAwSAxhMA.png` |
| customLogoUrl | string | No | If the mini program scan code login is used and Request Parameters autoMergeQrCode is set to false, the configured custom logo will be returned, and the front end can stitch this logo onto the QR code URL by itself. | `https://files.authing.co/authing-console/social-connections/wechatMiniLogin.svg`                                                                                           |
