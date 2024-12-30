# Create a data policy (key points)

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

## Description

This interface is used to create a data policy. Through the data policy, you can bind a group of data resources and their specified operations together and jointly authorize them to the subject.

## Note

For ease of use, we provide a shortcut for the `permissions` field based on the path, such as:

- Array, string resources: permission space code/data resource code/data resource action (if it means all operations, use `*` instead of action)

- Tree type resources: permission space code/data resource code/node code 1/node code 1_1/.../data resource action

## Request example

Suppose we want to authorize a developer, first create 3 data resources as follows:

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "server",
  "resourceCode": "server_2023",
  "type": "STRING",
  "struct": "server_2023",
  "actions": ["read", "write"]
}
```

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "test",
  "description": "",
  "resourceCode": "rd_document",
  "type": "STRING",
  "struct": "https://www.authing.com/rd_document",
  "actions": ["read", "write", "share"]
}
```

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "R&D internal platform menu",
  "description": "This is the internal platform menu used by R&D",
  "resourceCode": "rd_internal_platform",
  "type": "TREE",
  "struct": [
    {
      "name": "deploy",
      "code": "deploy",
      "children": [
        {
          "name": "prod",
          "code": "prod"
        },
        {
          "name": "test",
          "code": "test"
        }
      ]
    },
    {
      "name": "db",
      "code": "db",
      "children": [
        {
          "name": "query",
          "code": "query"
        },
        {
          "name": "export",
          "code": "export"
        }
      ]
    }
  ],
  "actions": ["access", "execute"]
}
```

We assign a server: server_2023 for him to use. He can perform any operation on it. He can also read and edit the R&D knowledge base. Finally, he can deploy the test environment in the R&D internal platform, but he cannot export the database data.

```json
{
  "policyName": "Developer Policy",
  "description": "This is a sample data policy",
  "statementList": [
    {
      "effect": "ALLOW",
      "permissions": [
        "examplePermissionNamespaceCode/server_2023/*",
        "examplePermissionNamespaceCode/rd_document/read",
        "examplePermissionNamespaceCode/rd_document/write",
        "examplePermissionNamespaceCode/rd_internal_platform/deploy/test/execute"
      ]
    },
    {
      "effect": "DENY",
      "permissions": [
        "examplePermissionNamespaceCode/rd_internal_platform/db/export/execute"
      ]
    }
  ]
}
```

## Method Name

`ManagementClient.createDataPolicy`

## Request Parameters

| Name          | Type                                                                   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                   | <div style="width:200px">Example Value</div> |
| ------------- | ---------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------- |
| statementList | <a href="#DataStatementPermissionDto">DataStatementPermissionDto[]</a> | Yes                                          | -                                           | Data permission list, data resource permission list under the policy. Array length limit: 5. |                                              |
| policyName    | string                                                                 | Yes                                          | -                                           | Data policy Name, unique to the user pool                                                    | `Sample data policy Name`                    |
| description   | string                                                                 | No                                           | -                                           | Data policy description                                                                      | `Sample data policy description`             |

## Sample Code

```java
package test.management.dataPermission.policy;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CreateDataPolicyDto;
import cn.authing.sdk.java.dto.CreateDataPolicyResponseDto;
import cn.authing.sdk.java.dto.DataStatementPermissionDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

import java.util.ArrayList;
import java.util.List;

public class CreateDataPolicyTest {
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

        CreateDataPolicyDto reqDto = new CreateDataPolicyDto();
        reqDto.setPolicyName("Example Data Policy Name");
        List<DataStatementPermissionDto> list = new ArrayList<>();
        DataStatementPermissionDto permissionDto = new DataStatementPermissionDto();
        List<String> list1 = new ArrayList<>();
        list1.add("namespaceCode/treeResourceCode/path/action");
        permissionDto.setPermissions(list1);
        permissionDto.setEffect(DataStatementPermissionDto.Effect.ALLOW);
        list.add(permissionDto);
        reqDto.setStatementList(list);
        reqDto.setDescription("Example Data Policy Description");
        CreateDataPolicyResponseDto response = client.createDataPolicy(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `CreateDataPolicyResponseDto`

| Name       | Type                                                           | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                         | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                         | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#CreateDataPolicyRespDto">CreateDataPolicyRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "policyId": "60b49xxxxxxxxxxxxxxx6e68",
    "policyName": "Example Data Policy Name",
    "description": "Example Data Policy Description",
    "createdAt": "2022-07-03T03:20:30.000Z",
    "updatedAt": "2022-07-03T03:20:30.000Z"
  }
}
```

## Data Structure

### <a id="DataStatementPermissionDto"></a> DataStatementPermissionDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                           | <div style="width:200px">Example Value</div>                                                                                        |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| effect      | string | yes                                          | Data resource permission operation: ALLOW (allow) / DENY (deny)                      | DENY                                                                                                                                |
| permissions | array  | yes                                          | Resource permission list, string data resource and array data resource, no path path | `["namespaceCode/stringResourceCode/action","namespaceCode/arrayResourceCode/action","namespaceCode/treeResourceCode/path/action"]` |

### <a id="CreateDataPolicyRespDto"></a> CreateDataPolicyRespDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| policyId    | string | yes                                          | Data policy ID                             | `60b49xxxxxxxxxxxxxxx6e68`                   |
| policyName  | string | yes                                          | Data policy name, unique to the user pool  | `Sample data policy name`                    |
| description | string | no                                           | Data policy description                    | `Sample data policy description`             |
| createdAt   | string | yes                                          | Data policy creation time                  | `2022-07-03T03:20:30.000Z`                   |
| updatedAt   | string | yes                                          | Data policy update time                    | `2022-07-03T03:20:30.000Z`                   |
