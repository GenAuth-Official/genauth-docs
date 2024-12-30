# Import user's OTP

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Import user's OTP

## Method Name

`ManagementClient.importOtp`

## Request Parameters

| Name | Type                                               | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | -------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| list | <a href="#ImportOtpItemDto">ImportOtpItemDto[]</a> | Yes                                          | -                                           | parameter list                             |                                              |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CommonResponseDto;
import cn.authing.sdk.java.dto.ImportOtpItemDataDto;
import cn.authing.sdk.java.dto.ImportOtpItemDto;
import cn.authing.sdk.java.dto.ImportOtpReqDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

import java.util.ArrayList;
import java.util.List;

public class ImportOtpTest {
    // Need to be replaced with your GenAuth Access Key ID
    private static final String ACCESS_KEY_ID = "AUTHING_ACCESS_KEY_ID";
    // Need to be replaced with your GenAuth Access Key Secret
    private static final String ACCESS_KEY_SECRET = "AUTHING_ACCESS_KEY_SECRET";

    public static void main(String[] args) throws Throwable {
        ManagementClientOptions clientOptions = new ManagementClientOptions();
        clientOptions.setAccessKeyId(ACCESS_KEY_ID);
        clientOptions.setAccessKeySecret(ACCESS_KEY_SECRET);
        // If you are a private deployment customer, you need to set the GenAuth service domain name
        // clientOptions.setHost("https://api.your-authing-service.com");

        ManagementClient client = new ManagementClient(clientOptions);

        ImportOtpReqDto reqDto = new ImportOtpReqDto();
        List<ImportOtpItemDto> list = new ArrayList<>();
        ImportOtpItemDto optDto = new ImportOtpItemDto();
        optDto.setUserId("6229ffaxxxxxxxxcade3e3d9");
        ImportOtpItemDataDto dataDto = new ImportOtpItemDataDto();
        dataDto.setSecret("HZ2F6JxxxxAVSOTV");
        optDto.setOtp(dataDto);
        list.add(optDto);
        reqDto.setList(list);
        CommonResponseDto response = client.importOtp(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `CommonResponseDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## Data Structure

### <a id="ImportOtpItemDto"></a> ImportOtpItemDto

| Name   | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------ | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- | --- | ------------ | ------ | --- | ------------------------------------------------------------------------------- | ------------------------------- | ---------------------------------------------------------- | ---- | ---- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- | --- | ------------ | ------ | --------------------------------------------- | ------------------------------------------- | ---------------------------------------------- |
| userId | string | Yes                                          | User id                                    | `xxxx`                                       |     | otp          |        | Yes | OTP data Nested Type: <a href="#ImportOtpItemDataDto">ImportOtpItemDataDto</a>. |                                 | ### <a id="ImportOtpItemDataDto"></a> ImportOtpItemDataDto | Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |     | ------------ | ------ | -------------------------- ------------------ | ---------------------------------- -------- | ------------------------------------------ --- |
| secret | string | Yes                                          | OTP key                                    | `HZ2F6J3AGNAVSOTV`                           |     | recoveryCode | string | No  | OTP Recovery Code                                                               | `b471-8ec0-874a-087f-bccb-cd54` |
