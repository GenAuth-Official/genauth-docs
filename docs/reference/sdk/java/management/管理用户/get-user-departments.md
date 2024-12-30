# Get user department list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get the user department list through user ID, support paging, and choose to get custom data, select a specified user ID type, ascending or descending, etc.

## Method Name

`ManagementClient.getUserDepartments`

## Request Parameters

| Name                | Type    | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | <div style="width:200px">Example Value</div> |
| ------------------- | ------- | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --- | ---- | ------ | --- | --- | ------------------------------------ | --- | --- | ----- | ------ | --- | --- | ---------------------------------------------------------------------------------- | ---- |
| userId              | string  | Yes                                          | -                                           | The unique identifier of the user. It can be Yes user ID, user name, email address, mobile phone number, externalId, or ID in the external identity source. For details, see the description of the userIdType field. The default is user id.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `6229ffaxxxxxxxxcade3e3d9`                   |
| userIdType          | string  | No                                           | user_id                                     | User id type, the default value is `user_id`, the optional values ​​are:<br>- `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`<br>- `phone`: user phone number<br>- `email`: user email<br>- `username`: user name<br>- `external_id`: user ID in the external system, corresponding to the `externalId` field of GenAuth user information<br>- `identity`: user's external identity source information, the format is `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, and `<userIdInIdp>` is the ID of the user in the external identity source. <br>Example Value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`. <br>- `sync_relation`: The user's external identity source information, in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the synchronization identity source type, such as wechatwork, lark; `<userIdInIdp>` is the user's ID in the external identity source. <br>Example Value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`. <br> | `user_id`                                    |     | page | number | No  | 1   | Current page number, starting from 1 | `1` |     | limit | number | No  | 10  | The maximum number of pages per page cannot exceed 50, and the default value is 10 | `10` |
| withCustomData      | boolean | No                                           | -                                           | Yes No Get custom data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `true`                                       |
| withDepartmentPaths | boolean | No                                           | -                                           | Yes No Get department path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `true`                                       |
| sortBy              | string  | No                                           | JoinDepartmentAt                            | Sorting basis, such as department creation time, department joining time, department name, department identifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `JoinDepartmentAt`                           |
| orderBy             | string  | No                                           | Desc                                        | Ascending or descending                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `Desc`                                       |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.GetUserDepartmentsDto;
import cn.authing.sdk.java.dto.UserDepartmentPaginatedRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetUserDepartmentsTest {
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

        GetUserDepartmentsDto reqDto = new GetUserDepartmentsDto();
        reqDto.setUserId("6229ffaxxxxxxxxcade3e3d9");
        UserDepartmentPaginatedRespDto response = client.getUserDepartments(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `UserDepartmentPaginatedRespDto`

| Name       | Type                                                           | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                         | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                         | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#UserDepartmentPagingDto">UserDepartmentPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

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

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                              | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | Yes                                          | Total number of records                                                                 |                                              |
| list       | array  | Yes                                          | Response data nested type：<a href="#UserDepartmentRespDto">UserDepartmentRespDto</a>。 |                                              |

### <a id="UserDepartmentRespDto"></a> UserDepartmentRespDto

| Name               | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                               | <div style="width:200px">Example Value</div>                                                      |
| ------------------ | ------- | -------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| organizationCode   | string  | Yes                                          | Organization Code (organizationCode)                                                     | `steamory`                                                                                        |
| departmentId       | string  | Yes                                          | Department ID                                                                            | `60b49eb83fd80adb96f26e68`                                                                        |
| isRoot             | boolean | Yes                                          | Yes No Root department                                                                   |                                                                                                   |
| createdAt          | string  | Yes                                          | Department creation time                                                                 | `2022-07-03T03:20:30.000Z`                                                                        |
| name               | string  | Yes                                          | Department Name                                                                          | `dd8d7stf44`                                                                                      |
| description        | string  | Yes                                          | Department description                                                                   | `dd8d7stf44`                                                                                      |
| openDepartmentId   | string  | No                                           | Custom department ID, used to store custom IDs                                           | `ou_7dab8a3d3cdccxxxxxx777c7ad535d62`                                                             |
| isLeader           | boolean | Yes                                          | Yes No Yes Department Leader                                                             | `true`                                                                                            |
| code               | string  | Yes                                          | Department identification code                                                           | `6229c4deb3e4d8a20b6021ff`                                                                        |
| isMainDepartment   | boolean | Yes                                          | Yes No Yes Main department                                                               | `true`                                                                                            |
| joinedAt           | string  | Yes                                          | Joined department time                                                                   | `2022-07-03T03:20:30.000Z`                                                                        |
| isVirtualNode      | boolean | Yes                                          | Yes No Yes Virtual department                                                            |                                                                                                   |
| i18n               |         | No                                           | Multi-language settings Nested Type: <a href="#DepartmentI18nDto">DepartmentI18nDto</a>. | `{"name":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}}` |
| customData         | object  | No                                           | Department extension field data                                                          | `{"icon":"https://example.com/logo"}`                                                             |
| departmentIdPath   | array   | No                                           | Department ID path                                                                       | `["parentId1","parentId2"]`                                                                       |
| departmentCodePath | array   | No                                           | Department Code path                                                                     | `["parentCode1","parentCode2"]`                                                                   |
| departmentNamePath | array   | No                                           | Department name path                                                                     | `["parentName1","parentName2"]`                                                                   |

### <a id="DepartmentI18nDto"></a> DepartmentI18nDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                       | <div style="width:200px">Example Value</div>                                             |
| ---- | ---- | -------------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| name |      | Yes                                          | Support multi-language fields Nested Type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}` |

### <a id="LangObject"></a> LangObject

| Name  | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                              | <div style="width:200px">Example Value</div> |
| ----- | ---- | -------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------- |
| zh-CN |      | Yes                                          | Multilingual Chinese content Nested Type: <a href="#LangUnit">LangUnit</a>.             | `{"enabled":false,"value":"中文"}`           |
| en-US |      | Yes                                          | Multilingual English content Nested Type: <a href="#LangUnit">LangUnit</a>.             | `{"enabled":false,"value":"English"}`        |
| zh-TW |      | Yes                                          | Multilingual Traditional Chinese content Nested Type: <a href="#LangUnit">LangUnit</a>. | `{"enabled":false,"value":"繁體中文"}`       |
| ja-JP |      | Yes                                          | Multilingual Japanese content Nested Type: <a href="#LangUnit">LangUnit</a>.            | `{"enabled":false,"value":"日本語"}`         |

### <a id="LangUnit"></a> LangUnit

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                        | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| enabled | boolean | Yes                                          | Yes No Enabled. If enabled and the console selects this language, the content will be displayed. (Off by default) |                                              |
| value   | string  | Yes                                          | Multilingual content                                                                                              |                                              |
