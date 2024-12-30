# Generate a link to bind an external identity source

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

This interface is used to generate a link to bind an external identity source, and after generation, it can guide users to jump.

## Method Name

`AuthenticationClient.generateLinkExtIdpUrl`

## Request Parameters

| Name                    | Type   | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div>            | <div style="width:200px"></div>Example Value</div> |
| ----------------------- | ------ | -------------------------------------------- | ------------- | ----------------------------------------------------- | -------------------------------------------------- |
| id_token                | string | Yes                                          | -             | User's id_token                                       |                                                    |
| app_id                  | string | Yes                                          | -             | GenAuth application ID                                |                                                    |
| ext_idp_conn_identifier | string | Yes                                          | -             | External identity source connection unique identifier | `my-wechat`                                        |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.GenerateBindExtIdpLinkRespDto;
import cn.authing.sdk.java.dto.GenerateLinkExtidpUrlDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GenerateLinkExtIdpUrlTest {
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

        GenerateLinkExtidpUrlDto reqDto = new GenerateLinkExtidpUrlDto();
        reqDto.setAppId(APP_ID);
        reqDto.setIdToken("xxx");
        reqDto.setExtIdpConnIdentifier("my-wechat");
        GenerateBindExtIdpLinkRespDto response = client.generateLinkExtIdpUrl(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type: `GenerateBindExtIdpLinkRespDto`

| Name       | Type                                                                       | Description                                                                                                                                                                                                                                                                                                                                 |
| ---------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                     | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                     |
| message    | string                                                                     | Description                                                                                                                                                                                                                                                                                                                                 |
| apiCode    | number                                                                     | Segment error code, through which you can get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                |
| data       | <a href="#GenerateBindExtIdpLinkDataDto">GenerateBindExtIdpLinkDataDto</a> | Response Data                                                                                                                                                                                                                                                                                                                               |

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

### <a id="GenerateBindExtIdpLinkDataDto"></a> GenerateBindExtIdpLinkDataDto

| Name | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| url  | string | Yes                                          | User binding external identity source link |                                              |
