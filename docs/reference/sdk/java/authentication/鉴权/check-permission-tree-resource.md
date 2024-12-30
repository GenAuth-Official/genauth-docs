# Tree type resource authentication

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Tree type resource authentication supports users to determine the permissions of one or more tree resources

## Method Name

`AuthenticationClient.checkPermissionByTreeResource`

## Request Parameters

| Name      | Type     | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div>                             | <div style="width:200px"></div>Example Value</div>                                                                                                          |
| --------- | -------- | -------------------------------------------- | ------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| resources | string[] | yes                                          | -             | Tree data resource path list,                                          | `["treeResourceCode1/StructCode1/resourceStructChildrenCode1","treeResourceCode1/StructCode1/resourceStructChildrenCode2","treeResourceCode1/StructCode2"]` |
| action    | string   | yes                                          | -             | Data resource permission operation, read, get, write and other actions | `get`                                                                                                                                                       |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.BindEmailDto;
import cn.authing.sdk.java.dto.CheckPermissionStringResourceDto;
import cn.authing.sdk.java.dto.CheckPermissionTreeResourceDto;
import cn.authing.sdk.java.dto.CheckResourcePermissionsRespDto;
import cn.authing.sdk.java.dto.CommonResponseDto;
import cn.authing.sdk.java.dto.LoginTokenRespDto;
import cn.authing.sdk.java.dto.SignInOptionsDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import java.util.ArrayList;

public class CheckPermissionTreeResourceTest {
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

        CheckPermissionTreeResourceDto reqDto = new CheckPermissionTreeResourceDto();
        ArrayList<String> list = new ArrayList<>();

        list.add("/treeExampleResourceCode/children1Code");
        list.add("/treeExampleResourceCode/children1Code/children2Code");
        reqDto.setResources(list);
        reqDto.setAction("get");
        CheckResourcePermissionsRespDto checkResourcePermissionsRespDto = client
                .checkPermissionByTreeResource(reqDto);
        System.out.println(JsonUtils.serialize(checkResourcePermissionsRespDto));
    }
}
```

## Request Response

Type: `CheckResourcePermissionsRespDto`

| Name       | Type                                                                         | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                                       | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                                       | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#CheckResourcePermissionDataDto">CheckResourcePermissionDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
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

| Name            | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                  | <div style="width:200px">Example Value</div> |
| --------------- | ----- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| checkResultList | array | yes                                          | Check result list NestedType: <a href="#CheckResourcePermissionRespDto">CheckResourcePermissionRespDto</a>. |                                              |

### <a id="CheckResourcePermissionRespDto"></a> CheckResourcePermissionRespDto

| Name          | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                     | <div style="width:200px">Example Value</div> |
| ------------- | ------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| namespaceCode | string  | yes                                          | Permission space Code                                                                          | `examplePermissionNamespace`                 |
| action        | string  | yes                                          | Data resource permission operation                                                             | `get`                                        |
| resource      | string  | yes                                          | Resource path                                                                                  | `exampleResource`                            |
| enabled       | boolean | yes                                          | Whether the user has a certain operation of the data resource under a certain permission space | `true`                                       |
