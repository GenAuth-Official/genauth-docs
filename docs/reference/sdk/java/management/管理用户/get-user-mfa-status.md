# Get user MFA status

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get user MFA status through user ID. You can choose to specify user ID type, etc.

## Method Name

`ManagementClient.getUsersMfaStatus`

## Request Parameters

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| userId     | string | Yes                                          | -                                           | User unique identifier, which can be user ID, user name, email address, mobile phone number, external ID, or ID in an external identity source.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `6229ffaxxxxxxxxcade3e3d9`                   |
| userIdType | string | No                                           | user_id                                     | User id type, the default value is `user_id`, the optional values ​​are:<br>- `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`<br>- `phone`: user phone number<br>- `email`: user email<br>- `username`: user name<br>- `external_id`: user ID in the external system, corresponding to the `externalId` field of GenAuth user information<br>- `identity`: user's external identity source information, the format is `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, and `<userIdInIdp>` is the ID of the user in the external identity source. <br>Example Value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`. <br> | `user_id`                                    |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.GetMapInfoRespDto;
import cn.authing.sdk.java.dto.GetMfaStatusDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetUserMfaStatusTest {
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

        GetMfaStatusDto getMfaStatusDto = new GetMfaStatusDto();
        getMfaStatusDto.setUserId("64355e5f20dfae11d8ae12dc");
        GetMapInfoRespDto response = client.getUserMfaStatus(getMfaStatusDto);
        System.out.println(JsonUtils.serialize(response));
    }
}
```

## Request Response

Type： `GetMapInfoRespDto`

| Name       | Type   | Description                                                                                                             |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------- | --- | ---- | -------------------------------------------- | --------------------- |
| statusCode | number | Business status code. You can use this status code to determine whether the operation is successful. 200 means success. |
| message    | string | Description                                                                                                             |
| apiCode    | number | This error code is used to get the specific error type.                                                                 |
| requestId  | string | Request ID. Returned when the request fails.                                                                            |     | data | <a href="#MfaTriggerData">MfaTriggerData</a> | User MFA trigger data |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "mfaToken": "xxxxxxx",
    "mfaPhone": null,
    "mfaPhoneCountryCode": null,
    "mfaEmail": null,
    "nickname": null,
    "username": null,
    "phone": null,
    "phoneCountryCode": null,
    "faceMfaEnabled": true,
    "totpMfaEnabled": true,
    "applicationMfa": [
      {
        "mfaPolicy": "EMAIL",
        "status": 1,
        "sort": 0
      }
    ]
  }
}
```

## Data Structure

### <a id="MfaTriggerData"></a> MfaTriggerData

| Name                | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                  | <div style="width:200px">Example Value</div> |
| ------------------- | ------- | -------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------- |
| mfaToken            | string  | Yes                                          | MFA Token                                                                   | `xxxxxxx`                                    |
| applicationMfa      | array   | Yes                                          | MFA configuration Type: <a href="#ApplicationMfaDto">ApplicationMfaDto</a>. |                                              |
| mfaPhone            | string  | No                                           | MFA bound phone number                                                      | `null`                                       |
| mfaPhoneCountryCode | string  | No                                           | MFA bound phone area code                                                   | `null`                                       |
| mfaEmail            | string  | No                                           | MFA bound email                                                             | `null`                                       |
| nickname            | string  | No                                           | User nickname                                                               | `null`                                       |
| username            | string  | No                                           | User name                                                                   | `null`                                       |
| phone               | string  | No                                           | User phone number                                                           | `null`                                       |
| phoneCountryCode    | string  | No                                           | User phone area code                                                        | `null`                                       |
| faceMfaEnabled      | boolean | No                                           | Face verification Yes No Enable                                             | `true`                                       |
| totpMfaEnabled      | boolean | No                                           | OTP verification Yes No Enable                                              | `true`                                       |

### <a id="ApplicationMfaDto"></a> ApplicationMfaDto

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| --------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| mfaPolicy | string | Yes                                          | MFA type                                   | `EMAIL`                                      |
| status    | number | Yes                                          | Yes No Enabled status                      | 1                                            |
| sort      | number | Yes                                          | Sorting                                    | 0                                            |
