# Get the list of resources authorized by the user in the logged-in application

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Get the list of resource permissions specified by the user. The user obtains the list of resources owned by the user in a certain application.

## Method Name

`AuthenticationClient.getUserAuthorizedResourcesList`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------- | ------------------------------------------ | -------------------------------------------------- |

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

Type: `GetUserAuthResourceListRespDto`

| Name       | Type                                                                         | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                                       | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                                       | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#GetUserAuthResourceListDataDto">GetUserAuthResourceListDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "userPermissionList": {
      "userId": "6301cexxxxxxxxxxxxxxxxx78",
      "namespaceCode": "examplePermissionNamespace",
      "resourceList": {
        "resourceCode": "resourceCode",
        "resourceType": "STRING",
        "strAuthorize": {
          "value": "Example string resource Value",
          "actions": "[\"read\",\"get\"]"
        },
        "arrAuthorize": {
          "values": "[\"value0\",\"value1\"]",
          "actions": "[\"read\",\"get\"]"
        },
        "treeAuthorize": {
          "authList": {
            "nodePath": "/treeCode1/treeCode11",
            "nodeName": "Example Tree Resource Node Name",
            "nodeActions": "[\"read\",\"get\"]",
            "nodeValue": "Example Tree Resource Node  Value"
          }
        }
      }
    }
  }
}
```

## Data Structure

### <a id="GetUserAuthResourceListDataDto"></a> GetUserAuthResourceListDataDto

| Name               | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                       | <div style="width:200px">Example Value</div> |
| ------------------ | ----- | -------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| userPermissionList | array | yes                                          | User permission list nestedType: <a href="#UserAuthResourceListDto">UserAuthResourceListDto</a>. |                                              |

### <a id="UserAuthResourceListDto"></a> UserAuthResourceListDto

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                      | <div style="width:200px">Example Value</div> |
| ------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| userId        | string | Yes                                          | User ID authorized by data policy                                                                                               | `6301cexxxxxxxxxxxxxxxxx78`                  |
| namespaceCode | string | Yes                                          | Permission space Code authorized by data policy                                                                                 | `examplePermissionNamespace`                 |
| resourceList  | array  | No                                           | List of all data policy resources of the user under the permission space Nested Type: <a href="#OpenResource">OpenResource</a>. |                                              |

### <a id="OpenResource"></a> OpenResource

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                   | <div style="width:200px">Example Value</div> |
| ------------- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| resourceCode  | string | Yes                                          | Data resource Code authorized under data policy                                                                                                                                                                                                                                                                                              | `resourceCode`                               |
| resourceType  | string | Yes                                          | Data resource type authorized under data policy. Currently, it supports three types: tree structure (TREE), string (STRING), and array (ARRAY). Different structures are returned according to different types. <br>- `STRING`: string type result StrAuthorize<br>- `ARRAY`: array type ArrayAuthorize<br>- `TREE`: tree type TreeAuthorize | TREE                                         |
| strAuthorize  |        | No                                           | string resource of data policy Nested Type: <a href="#StrAuthorize">StrAuthorize</a>.                                                                                                                                                                                                                                                        |                                              |
| arrAuthorize  |        | No                                           | array resource of data policy Nested Type: <a href="#ArrayAuthorize">ArrayAuthorize</a>.                                                                                                                                                                                                                                                     |                                              |
| treeAuthorize |        | No                                           | tree resource of data policy Nested Type: <a href="#TreeAuthorize">TreeAuthorize</a>.                                                                                                                                                                                                                                                        |                                              |

### <a id="StrAuthorize"></a> StrAuthorize

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| value   | string | Yes                                          | String resource Value                      | `Example string resource Value`              |
| actions | array  | Yes                                          | String resource action list                | `["read","get"]`                             |

### <a id="ArrayAuthorize"></a> ArrayAuthorize

| Name      | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| --------- | ----- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| values ​​ | array | Yes                                          | Array resource Value list                  | `["value0","value1"]`                        |
| actions   | array | Yes                                          | Array resource action list                 | `["read","get"]`                             |

### <a id="TreeAuthorize"></a> TreeAuthorize

| Name     | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                          | <div style="width:200px">Example Value</div> |
| -------- | ----- | -------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------- |
| authList | array | Yes                                          | Tree resource authorization list nested Type: <a href="#TreeAuthBo">TreeAuthBo</a>. |                                              |

### <a id="TreeAuthBo"></a> TreeAuthBo

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>   | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| nodePath    | string | Yes                                          | Tree resource node path                      | `/treeCode1/treeCode11`                      |
| nodeName    | string | Yes                                          | Tree resource node Name                      | `Example Tree Resource Node Name`            |
| nodeActions | array  | Yes                                          | Tree resource node operation permission list | `["read","get"]`                             |
| nodeValue   | string | No                                           | Tree resource node Value                     | `Example Tree Resource Node Value`           |
