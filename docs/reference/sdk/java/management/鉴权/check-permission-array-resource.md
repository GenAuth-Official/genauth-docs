# Array type resource authentication

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Array type resource authentication, supports users to judge the permissions of one or more array resources

## Method Name

`ManagementClient.checkPermissionByArrayResource`

## Request Parameters

| Name      | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                             | <div style="width:200px">Example Value</div> |
| --------- | -------- | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------- |
| resources | string[] | Yes                                          | -                                           | Data resource path list,                                               | `["exampleResource"]`                        |
| action    | string   | yes                                          | -                                           | Data resource permission operation, read, get, write and other actions | `get`                                        |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.BindEmailDto;
import cn.authing.sdk.java.dto.CheckPermissionArrayResourceDto;
import cn.authing.sdk.java.dto.CheckPermissionStringResourceDto;
import cn.authing.sdk.java.dto.CheckResourcePermissionsRespDto;
import cn.authing.sdk.java.dto.CommonResponseDto;
import cn.authing.sdk.java.dto.LoginTokenRespDto;
import cn.authing.sdk.java.dto.SignInOptionsDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import java.util.ArrayList;

public class CheckPermissionArrayResourceTest {

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

        CheckPermissionArrayResourceDto reqDto = new CheckPermissionArrayResourceDto();
        ArrayList<String> list = new ArrayList<>();
        list.add("arrayResourceCode");
        list.add("arrayResourceCode1");
        reqDto.setResources(list);
        reqDto.setAction("get");
        CheckResourcePermissionsRespDto checkResourcePermissionsRespDto = client
                .checkPermissionByArrayResource(reqDto);
        System.out.println(JsonUtils.serialize(checkResourcePermissionsRespDto));
    }
}
```

## Request Response

Type： `CheckResourcePermissionsRespDto`

| Name       | Type                                                                         | Description                                                                                                             |
| ---------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                       | Business status code. You can use this status code to determine whether the operation is successful. 200 means success. |
| message    | string                                                                       | Description                                                                                                             |
| apiCode    | number                                                                       | This error code is used to get the specific error type.                                                                 |
| data       | <a href="#CheckResourcePermissionDataDto">CheckResourcePermissionDataDto</a> | Response data                                                                                                           |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {
    "checkResultList": {
      "namespaceCode": "examplePermissionNamespace",
      "action": "get",
      "resource": "exampleResource",
      "enabled": true
    }
  }
}
```

## Data Structure

### <a id="CheckResourcePermissionDataDto"></a> CheckResourcePermissionDataDto

| Name            | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                   | <div style="width:200px">Example Value</div> |
| --------------- | ----- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| checkResultList | array | Yes                                          | Check result list Nested Type: <a href="#CheckResourcePermissionRespDto">CheckResourcePermissionRespDto</a>. |                                              |

### <a id="CheckResourcePermissionRespDto"></a> CheckResourcePermissionRespDto

| Name          | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                     | <div style="width:200px">Example Value</div> |
| ------------- | ------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| namespaceCode | string  | yes                                          | permission space Code                                                                          | `examplePermissionNamespace`                 |
| action        | string  | yes                                          | data resource permission operation                                                             | `get`                                        |
| resource      | string  | yes                                          | resource path                                                                                  | `exampleResource`                            |
| enabled       | boolean | yes                                          | whether the user has a certain operation on the data resource under a certain permission space | `true`                                       |
