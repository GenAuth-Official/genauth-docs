# Self-built APP scan code login: APP end modifies QR code status

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

This endpoint is used to modify the QR code status in the self-built APP scan code login, which corresponds to the process of terminal users scanning the code, confirming authorization, and canceling authorization after the browser renders the QR code. **This interface requires the user's login status**.

## Method name

`AuthenticationClient.changeQrCodeStatus`

## Request parameters

| Name     | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                               | <div style="width:200px"></div>Sample value</div> |
| -------- | ------ | -------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| action   | string | yes                                    | -             | Action to change QR code status:<br>- `SCAN`: Change the QR code status to scanned status. This operation should be performed immediately after the mobile APP scans the code;<br>- `CONFIRM`: Change the QR code status to authorized. Before performing this operation, you must first perform the `SCAN operation;<br>- `CANCEL`: Change the QR code status to canceled. Before performing this operation, you must first perform the `SCAN operation Operation; <br> | `CONFIRM`                                         |
| qrcodeId | string | yes                                    | -             | QR code unique ID                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                   |

## Sample code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.ChangeQRCodeStatusDto;
import cn.authing.sdk.java.dto.CommonResponseDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class ChangeQrCodeStatusTest {
// Need to be replaced with your GenAuth App ID
private static final String APP_ID = "AUTHING_APP_ID";
// Need to be replaced with your GenAuth App Secret
private static final String APP_SECRET = "AUTHING_APP_SECRET"; // Needs to be replaced with your GenAuth App Host private static final String APP_HOST = "AUTHING_APP_HOST"; // Needs to be replaced with your GenAuth Access Token private static final String ACCESS_TOKEN = "AUTHING_ACCESS_TOKEN"; public static void main(String[] args) throws Throwable { AuthenticationClientOptions clientOptions = new AuthenticationClientOptions(); clientOptions.setAppId(APP_ID); clientOptions.setAppSecret(APP_SECRET); clientOptions.setAppHost(APP_HOST); clientOptions.setAccessToken(ACCESS_TOKEN); AuthenticationClient client = new AuthenticationClient(clientOptions); ChangeQRCodeStatusDto reqDto = new ChangeQRCodeStatusDto(); reqDto.setQrcodeId("123"); reqDto.setAction(ChangeQRCodeStatusDto.Action.CONFIRM);
CommonResponseDto response = client.changeQrCodeStatus(reqDto);
System.out.println(JsonUtils.serialize(response));
}
}

```

## Request response

Type: `CommonResponseDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## Data structure
