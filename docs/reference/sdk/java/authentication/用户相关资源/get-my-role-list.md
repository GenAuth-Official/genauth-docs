# Get the role list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the role list

## Method Name

`AuthenticationClient.getRoleList`

## Request Parameters

| Name      | Type   | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div>                                                                    | <div style="width:200px"></div>Example Value</div> |
| --------- | ------ | -------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| namespace | string | No                                           | -             | The code of the permission group (permission space). If not passed, the default permission group is obtained. | `default`                                          |

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

Type: `RoleListRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                             |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number | Segmented error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | array  | Response Data                                                                                                                                                                                                                                                                                                                                       |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "id": "60b49eb83fd80adb96f26e68",
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

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                | <div style="width:200px">Example Value</div> |
| ------------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| id            | string | Yes                                          | Role ID                                                                                                   | `60b49eb83fd80adb96f26e68`                   |
| code          | string | Yes                                          | Unique identifier of the role in the permission group (permission space) Code                             | `role1`                                      |
| name          | string | Yes                                          | Role Name in the permission group (permission space)                                                      | `role1`                                      |
| description   | string | Yes                                          | Role description                                                                                          | `this is role description`                   |
| namespace     | string | Yes                                          | Code of the permission group (permission space). If not passed, the default permission group is obtained. | `default`                                    |
| namespaceName | string | Yes                                          | Name of the permission group (permission space)                                                           | `Sample permission Name`                     |
| status        | string | No                                           | Role status, ENABLE- means normal, DISABLE- means disabled                                                | `ENABLE`                                     |
| disableTime   | number | No                                           | Role automatic disable time, in milliseconds, if null is passed, it means permanent                       | `1669881887852`                              |
