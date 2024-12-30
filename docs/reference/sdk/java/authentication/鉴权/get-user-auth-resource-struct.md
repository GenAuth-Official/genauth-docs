# Get the list of resources authorized by the user under the logged-in application

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get the list of resources authorized by the user. The user obtains the structure list authorized by a resource under a certain application, and returns the authorization list of the corresponding resource through different resource types.

## Method Name

`AuthenticationClient.getUserAuthResourceStruct`

## Request Parameters

Type: `GetUserAuthResourceStructDto`

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">default</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| resource | string | Yes s                                        | -                                     | Data resources Code                        | `exampleResourceCode`                        |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.GetUserAuthResourcePermissionListDto;
import cn.authing.sdk.java.dto.GetUserAuthResourcePermissionListRespDto;
import cn.authing.sdk.java.dto.LoginTokenRespDto;
import cn.authing.sdk.java.dto.SignInOptionsDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import java.util.ArrayList;
import java.util.List;

public class GetUserAuthResourceStructTest {
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

    AuthenticationClient clientSing = new AuthenticationClient(clientOptions);
    LoginTokenRespDto response = clientSing.signInByUsernamePassword(
        "username",
        "password",
        new SignInOptionsDto());
    clientOptions.setAccessToken(response.getData().getAccessToken());
    AuthenticationClient clientAuth = new AuthenticationClient(clientOptions);
    GetUserAuthResourceStructDto dto = new GetUserAuthResourceStructDto();
    dto.setResource("resourceCode");
    GetUserAuthResourceStructRespDto userAuthResourceStruct = clientAuth
        .getUserAuthResourceStruct(dto);
    System.out.println(JsonUtils.serialize(userAuthResourceStruct));
  }
}
```

## Request Response

Type: `GetUserAuthResourceStructRespDto`

| Name       | Type                                                                             | Description                                                                                                  |
| ---------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                           | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                                           | Description                                                                                                  |
| apiCode    | number                                                                           | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                                           | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#GetUserAuthResourceStructDataDto">GetUserAuthResourceStructDataDto</a> | Response data                                                                                                |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 0,
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "namespaceCode": "namespaceCode",
    "resourceCode": "resourceCode",
    "resourceType": "TREE",
    "treeResourceAuthAction": {
      "nodeAuthActionList": [
        {
          "code": "123",
          "name": "Tree Data Resources",
          "value": "Example Tree Resource Policy Node",
          "actions": "read",
          "children": [
            {
              "code": "code1",
              "name": "Child Nodes 1",
              "value": "Child Nodes Value",
              "actions": ["create"],
              "children": [
                {
                  "code": "code2",
                  "name": "Child Nodes 2",
                  "value": "Child Nodes 2 Value",
                  "actions": ["get"]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

## Data Structure

### <a id="GetUserAuthResourceStructDataDto"></a> GetUserAuthResourceStructDataDto

| Name                   | Type                   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                  | <div style="width:200px">Example Value</div> |
| ---------------------- | ---------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| namespaceCode          | string                 | Yes                                          | Permission space Code                                                                                                                                                                                                                                                                                                                                                                       | `namespaceCode`                              |
| resourceCode           | string                 | Yes                                          | Data resource Code                                                                                                                                                                                                                                                                                                                                                                          | `resourceCode`                               |
| resourceType           | string                 | Yes                                          | Data resource type, nested type, <a href="#ResourceType">ResourceType</a>. Currently supports three types: tree structure (TREE), string (STRING), array (ARRAY), and returns different structures according to different types. <br>- `STRING`: string type result StrResourceAuthAction. <br>- `ARRAY`: array type ArrResourceAuthAction. <br>- `TREE`: tree type TreeResourceAuthAction. |                                              |
| strResourceAuthAction  | StrResourceAuthAction  | No                                           | String resource authorization structure, nested Type: <a href="#StrResourceAuthAction">StrResourceAuthAction</a>.                                                                                                                                                                                                                                                                           |
| arrResourceAuthAction  | ArrResourceAuthAction  | No                                           | Array resource authorization structure, nested Type: <a href="#ArrResourceAuthAction">ArrResourceAuthAction</a>.                                                                                                                                                                                                                                                                            |                                              |
| treeResourceAuthAction | TreeResourceAuthAction | No                                           | Tree resource authorization structure, nested Type: <a href="#TreeResourceAuthAction">TreeResourceAuthAction</a>.                                                                                                                                                                                                                                                                           |

### <a id="ResourceType"></a> ResourceType

| Name   | Type | Description |
| :----- | :--- | ----------- |
| STRING | enum | String type |
| ARRAY  | enum | Array type  |
| TREE   | enum | Tree type   |

### <a id="StrResourceAuthAction"></a> StrResourceAuthAction

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                 | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------- |
| value   | string | Yes                                          | The value of a string data resource                        | `resourceValue`                              |
| actions | array  | Yes                                          | A list of permission operations for a string data resource | `["read","get"]`                             |

### <a id="ArrResourceAuthAction"></a> ArrResourceAuthAction

| Name      | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>            | <div style="width:200px">Example Value</div> |
| --------- | ----- | -------------------------------------------- | ----------------------------------------------------- | -------------------------------------------- |
| values ​​ | array | is                                           | the values ​​of array data resources                  | `["resourceValue1","resourceValue2"]`        |
| actions   | array | is                                           | the permission operation list of array data resources | `["read","get"]`                             |

### <a id="TreeResourceAuthAction"></a> TreeResourceAuthAction

| Name               | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                     | <div style="width:200px">Example Value</div> |
| ------------------ | ----- | -------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------- |
| nodeAuthActionList | array | Yes                                          | Tree structure node list, nested Type: <a href="#TreeStructs">TreeStructs</a>. | -                                            |

### <a id="TreeStructs"></a> TreeStructs

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                    | <div style="width:200px">Example Value</div>                                                                                                                                                               |
| -------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code     | string | yes                                          | Tree resource node Code, unique at the same level                                                             | `123`                                                                                                                                                                                                      |
| name     | string | yes                                          | Tree resource node Name, unique at the same level                                                             | `Data Resource`                                                                                                                                                                                            |
| value    | string | no                                           | Tree resource node Value                                                                                      | `Example Resource Policy Node`                                                                                                                                                                             |
| actions  | array  | yes                                          | Permission operation list of tree data resource policy node                                                   | `read`                                                                                                                                                                                                     |
| children | object | no                                           | Subnode data, subnode data has a maximum of five levels, nested Type: <a href="#TreeStructs">TreeStructs</a>. | `[{"code":"code1","name":"Subnode 1","value":"Subnode value","enabled":false,"action":"create","children":[{"code":"code2","name":"Subnode 2","value":"Subnode 2 value","enabled":true,"action":"get"}]}]` |
