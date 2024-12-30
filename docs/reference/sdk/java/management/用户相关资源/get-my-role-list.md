# Get a list of roles

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get a list of roles

## Method Name

`ManagementClient.getRoleList`

## Request Parameters

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                          | <div style="width:200px">Example Value</div> |
| --------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------- |
| namespace | string | No                                           | -                                           | Code of the permission group (permission space) to which it belongs | `default`                                    |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.GetMyRoleListDto;
import cn.authing.sdk.java.dto.RoleListRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetRoleListTest {
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

        RoleListRespDto response = client.getRoleList(new GetMyRoleListDto());
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `RoleListRespDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string | Request ID. Returned when the request fails.                                                                 |
| data       | array  | Response data                                                                                                |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "code": "role1",
    "name": "role1",
    "description": "this is role description",
    "namespace": "default",
    "namespaceName": "Example permission Name",
    "status": "ENABLE",
    "disableTime": "1669881887852"
  }
}
```

## Data Structure

### <a id="RoleDto"></a> RoleDto

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                          | <div style="width:200px">Example Value</div> |
| ------------- | ------ | -------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------- |
| code          | string | Yes                                          | Unique identifier of the role in the permission group (permission space) Code       | `role1`                                      |
| name          | string | Yes                                          | Name of the role in the permission group (permission space)                         | `role1`                                      |
| description   | string | Yes                                          | Role description                                                                    | `this is role description`                   |
| namespace     | string | Yes                                          | Code of the permission group (permission space)                                     | `default`                                    |
| namespaceName | string | Yes                                          | Name of the permission group (permission space)                                     | `Sample permission Name`                     |
| status        | string | No                                           | Role status, ENABLE- means normal, DISABLE- means disabled                          | `ENABLE`                                     |
| disableTime   | number | No                                           | Role automatic disable time, in milliseconds, if null is passed, it means permanent | `1669881887852`                              |
