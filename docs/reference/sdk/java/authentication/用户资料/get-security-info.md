# Get password strength and account security rating

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

To obtain the user's password strength and account security rating, you need to bring the user's `access_token` in the request header.

## Method Name

`AuthenticationClient.getSecurityLevel`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------- | ------------------------------------------ | -------------------------------------------------- |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.GetSecurityInfoRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetSecurityLevelTest {
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

        GetSecurityInfoRespDto response = client.getSecurityLevel();
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type: `GetSecurityInfoRespDto`

| Name       | Type                                                 | Description                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                               | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                     |
| message    | string                                               | Description                                                                                                                                                                                                                                                                                                                                 |
| apiCode    | number                                               | Segment error code, through which you can get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                |
| data       | <a href="#GetSecurityInfoDto">GetSecurityInfoDto</a> | Response Data                                                                                                                                                                                                                                                                                                                               |

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

### <a id="GetSecurityInfoDto"></a> GetSecurityInfoDto

| Name                  | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>  | <div style="width:200px">Example Value</div> |
| --------------------- | ------- | -------------------------------------------- | ------------------------------------------- | -------------------------------------------- |
| passwordSecurityLevel | number  | Yes                                          | Password strength level                     |                                              |
| mfaEnrolled           | boolean | Yes                                          | Yes, whether MFA is bound                   |                                              |
| passwordSet           | boolean | Yes                                          | Yes, whether a password is set              |                                              |
| emailBinded           | boolean | Yes                                          | Yes, whether an email address is bound      |                                              |
| phoneBinded           | boolean | Yes                                          | Yes, whether a mobile phone number is bound |                                              |
| securityScore         | number  | Yes                                          | Account level score                         |                                              |
