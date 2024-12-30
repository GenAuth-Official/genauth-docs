# Modify email

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

When the end user modifies the email on his own, he needs to provide the corresponding verification method, see [Initiate verification request for modifying email](#tag/user profile/modify email/operation/ProfileV3Controller_updateEmailVerification).
This parameter needs to provide a one-time temporary credential `updateEmailToken`, which needs to be obtained from the **Initiate verification request for modifying email** interface.

## Method Name

`ManagementClient.updateEmail`

## Request Parameters

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                      | <div style="width:200px">Example Value</div> |
| ---------------- | ------ | -------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| updateEmailToken | string | Yes                                          | -                                           | Token used to temporarily modify the mailbox, which can be obtained from the **Initiate verification request to modify the mailbox** interface. | `xxxx`                                       |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.CommonResponseDto;
import cn.authing.sdk.java.dto.UpdateEmailDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class UpdateEmailTest {
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

        UpdateEmailDto reqDto = new UpdateEmailDto();
        // The token used to temporarily modify the mailbox can be obtained from the verification request interface for initiating mailbox modification.
        reqDto.setUpdateEmailToken("xxx");
        CommonResponseDto response = client.updateEmail(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `CommonResponseDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string | Request ID. Returned when the request fails.                                                                 |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## Data Structure
