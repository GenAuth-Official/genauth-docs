# Get the department list

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

This interface is used to obtain the user's department list, which can be sorted according to certain sorting rules.

## Method Name

`AuthenticationClient.getDepartmentList`

## Request Parameters

| Name           | Type    | <div style="width:80px">Is it required</div> | Default Value    | <div style="width:300px">Description</div>                                                                 | <div style="width:200px"></div>Example Value</div> |
| -------------- | ------- | -------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| page           | number  | No                                           | 1                | Current page number, starting from 1                                                                       | `1`                                                |
| limit          | number  | No                                           | 10               | Number per page, maximum cannot exceed 50, default is 10                                                   | `10`                                               |
| withCustomData | boolean | No                                           | -                | Yes or no get department custom data                                                                       | `true`                                             |
| sortBy         | string  | No                                           | JoinDepartmentAt | Sort by, such as Department creation time, department joining time, department name, department identifier | `JoinDepartmentAt`                                 |
| orderBy        | string  | No                                           | Desc             | Ascending or descending order                                                                              | `Desc`                                             |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.GetMyDepartmentListDto;
import cn.authing.sdk.java.dto.UserDepartmentPaginatedRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetDepartmentListTest {
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

        UserDepartmentPaginatedRespDto response = client.getDepartmentList(new GetMyDepartmentListDto());
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type: `UserDepartmentPaginatedRespDto`

| Name       | Type                                                           | Description                                                                                                                                                                                                                                                                                                                                 |
| ---------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                         | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                     |
| message    | string                                                         | Description                                                                                                                                                                                                                                                                                                                                 |
| apiCode    | number                                                         | Segment error code, through which you can get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                |
| data       | <a href="#UserDepartmentPagingDto">UserDepartmentPagingDto</a> | Response Data                                                                                                                                                                                                                                                                                                                               |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "organizationCode": "steamory",
      "departmentId": "60b49eb83fd80adb96f26e68",
      "createdAt": "2022-07-03T03:20:30.000Z",
      "name": "dd8d7stf44",
      "description": "dd8d7stf44",
      "openDepartmentId": "ou_7dab8a3d3cdccxxxxxx777c7ad535d62",
      "isLeader": true,
      "code": "6229c4deb3e4d8a20b6021ff",
      "isMainDepartment": true,
      "joinedAt": "2022-07-03T03:20:30.000Z",
      "i18n": {
        "name": {
          "zh-CN": {
            "enabled": false,
            "value": "中文"
          },
          "en-US": {
            "enabled": false,
            "value": "English"
          }
        }
      },
      "customData": {
        "icon": "https://example.com/logo"
      },
      "departmentIdPath": "[\"parentId1\",\"parentId2\"]",
      "departmentCodePath": "[\"parentCode1\",\"parentCode2\"]",
      "departmentNamePath": "[\"parentName1\",\"parentName2\"]"
    }
  }
}
```

## Data Structure

### <a id="UserDepartmentPagingDto"></a> UserDepartmentPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                            | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | Yes                                          | Total number of records                                                               |                                              |
| list       | array  | Yes                                          | Response Data NestedType: <a href="#UserDepartmentRespDto">UserDepartmentRespDto</a>. |                                              |

### <a id="UserDepartmentRespDto"></a> UserDepartmentRespDto

| Name               | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                               | <div style="width:200px">Example Value</div>                                                      |
| ------------------ | ------- | -------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| organizationCode   | string  | Yes                                          | Organization Code (organizationCode)                                                     | `steamory`                                                                                        |
| departmentId       | string  | Yes                                          | Department ID                                                                            | `60b49eb83fd80adb96f26e68`                                                                        |
| isRoot             | boolean | Yes                                          | Is it the root department?                                                               |                                                                                                   |
| createdAt          | string  | Yes                                          | Department creation time                                                                 | `2022-07-03T03:20:30.000Z`                                                                        |
| name               | string  | Yes                                          | Department Name                                                                          | `dd8d7stf44`                                                                                      |
| description        | string  | Yes                                          | Department Description                                                                   | `dd8d7stf44`                                                                                      |
| openDepartmentId   | string  | No                                           | Customized department ID, used to store customized IDs                                   | `ou_7dab8a3d3cdccxxxxxx777c7ad535d62`                                                             |
| isLeader           | boolean | Yes                                          | Yes, is the department leader                                                            | `true`                                                                                            |
| code               | string  | Yes                                          | Department identification code                                                           | `6229c4deb3e4d8a20b6021ff`                                                                        |
| isMainDepartment   | boolean | Yes                                          | Yes, is the main department                                                              | `true`                                                                                            |
| joinedAt           | string  | Yes                                          | Joined department time                                                                   | `2022-07-03T03:20:30.000Z`                                                                        |
| isVirtualNode      | boolean | Yes                                          | YesNo Is it a virtual department                                                         |                                                                                                   |
| i18n               |         | No                                           | Multi-language settings Nested Type: <a href="#DepartmentI18nDto">DepartmentI18nDto</a>. | `{"name":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}}` |
| customData         | object  | No                                           | Extended field data of the department                                                    | `{"icon":"https://example.com/logo"}`                                                             |
| departmentIdPath   | array   | No                                           | Department ID path                                                                       | `["parentId1","parentId2"]`                                                                       |
| departmentCodePath | array   | No                                           | Department Code path                                                                     | `["parentCode1","parentCode2"]`                                                                   |
| departmentNamePath | array   | No                                           | Department name path                                                                     | `["parentName1","parentName2"]`                                                                   |

### <a id="DepartmentI18nDto"></a> DepartmentI18nDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                      | <div style="width:200px">Example Value</div>                                             |
| ---- | ---- | -------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| name |      | Yes                                          | Multi-language support field Nested Type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}` |

### <a id="LangObject"></a> LangObject

| Name  | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                              | <div style="width:200px">Example Value</div> |
| ----- | ---- | -------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------- |
| zh-CN |      | Yes                                          | Multi-language Chinese content Nested Type: <a href="#LangUnit">LangUnit</a>.           | `{"enabled":false,"value":"中文"}`           |
| en-US |      | Yes                                          | Multilingual English content Nested Type: <a href="#LangUnit">LangUnit</a>.             | `{"enabled":false,"value":"English"}`        |
| zh-TW |      | Yes                                          | Multilingual Traditional Chinese content Nested Type: <a href="#LangUnit">LangUnit</a>. | `{"enabled":false,"value":"繁體中文"}`       |
| ja-JP |      | Yes                                          | Multilingual Japanese content Nested Type: <a href="#LangUnit">LangUnit</a>.            | `{"enabled":false,"value":"日本語"}`         |

### <a id="LangUnit"></a> LangUnit

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                    | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| enabled | boolean | Yes                                          | Yes Whether it is enabled. If enabled, and the console selects this language, the content will be displayed. (Default is off) |                                              |
| value   | string  | Yes                                          | Multilingual content                                                                                                          |                                              |
