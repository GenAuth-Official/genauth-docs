# Get the list of resources that the user is authorized to log in to the application

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get the list of resource permissions specified by the user, and the user gets the list of resources owned by a certain application

## Method Name

`ManagementClient.getUserAuthorizedResourcesList`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.CheckPermissionArrayResourceDto;
import cn.authing.sdk.java.dto.CheckResourcePermissionsRespDto;
import cn.authing.sdk.java.dto.GetUserAuthResourceListRespDto;
import cn.authing.sdk.java.dto.LoginTokenRespDto;
import cn.authing.sdk.java.dto.SignInOptionsDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import java.util.ArrayList;

public class GetUserAuthResourceListTest {
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

        GetUserAuthResourceListRespDto userAuthorizedResourcesList = client
                .getUserAuthorizedResourcesList();
        System.out.println(JsonUtils.serialize(userAuthorizedResourcesList));
    }
}
```

## Request Response

Type： `GetUserAuthResourceListRespDto`

| Name       | Type                                                                         | Description                                                                                                             |
| ---------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                       | Business status code. You can use this status code to determine whether the operation is successful. 200 means success. |
| message    | string                                                                       | Description                                                                                                             |
| apiCode    | number                                                                       | This error code is used to get the specific error type.                                                                 |
| data       | <a href="#GetUserAuthResourceListDataDto">GetUserAuthResourceListDataDto</a> | Response data                                                                                                           |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {
    "userPermissionList": {
      "userId": "6301cexxxxxxxxxxxxxxxxx78",
      "namespaceCode": "examplePermissionNamespace",
      "resourceList": {
        "resourceCode": "resourceCode"
      }
    }
  }
}
```

## Data Structure

### <a id="GetUserAuthResourceListDataDto"></a> GetUserAuthResourceListDataDto

| Name               | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                        | <div style="width:200px">Example Value</div> |
| ------------------ | ----- | -------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| userPermissionList | array | Yes                                          | User permission list nested Type: <a href="#UserAuthResourceListDto">UserAuthResourceListDto</a>. |                                              |

### <a id="UserAuthResourceListDto"></a> UserAuthResourceListDto

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                      | <div style="width:200px">Example Value</div> |
| ------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| userId        | string | yes                                          | User ID authorized by data policy                                                                                               | `6301cexxxxxxxxxxxxxxxxx78`                  |
| namespaceCode | string | yes                                          | Permission space authorized by data policy Code                                                                                 | `examplePermissionNamespace`                 |
| resourceList  | array  | no                                           | List of all data policy resources of the user under the permission space Nested Type: <a href="#OpenResource">OpenResource</a>. |                                              |

### <a id="OpenResource"></a> OpenResource

| Name         | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                             | <div style="width:200px">Example Value</div> |
| ------------ | ------ | -------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------- |
| resourceCode | string | Yes                                          | Data resource Code authorized under data policy                        | `resourceCode`                               |
| authorize    |        | Yes                                          | Resource list of all data policies of the user in the permission space |                                              |
