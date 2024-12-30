# Modify data policy

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Modify data policy, modify data policy information through fields such as data policy Name, data policy description, and related data resources.

## Method Name

`ManagementClient.updateDataPolicy`

## Request Parameters

| Name          | Type                                                                   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                           | <div style="width:200px">Example Value</div> |
| ------------- | ---------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------- |
| policyId      | string                                                                 | yes                                          | -                                           | Data Policy ID                                                                       | `60b49xxxxxxxxxxxxxxx6e68`                   |
| policyName    | string                                                                 | no                                           | -                                           | Data policy name, unique to the user pool                                            | `Example Data Policy Name`                   |
| description   | string                                                                 | no                                           | -                                           | Data policy description                                                              | `Example Data Policy Description`            |
| statementList | <a href="#DataStatementPermissionDto">DataStatementPermissionDto[]</a> | No                                           | -                                           | Data permission list, all data permissions under each policy. Array length limit: 5. |                                              |

## Sample Code

```java
package test.management.dataPermission.policy;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.DataStatementPermissionDto;
import cn.authing.sdk.java.dto.UpdateDataPolicyDto;
import cn.authing.sdk.java.dto.UpdateDataPolicyResponseDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

import java.util.ArrayList;
import java.util.List;

public class UpdateDataPolicyTest {
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

        UpdateDataPolicyDto reqDto = new UpdateDataPolicyDto();
        reqDto.setPolicyId("60b49xxxxxxxxxxxxxxx6e68");
        reqDto.setPolicyName("Sample Data Policy Name");
        List<DataStatementPermissionDto> list = new ArrayList<>();
        DataStatementPermissionDto permissionDto = new DataStatementPermissionDto();
        List<String> list1 = new ArrayList<>();
        list1.add("namespaceCode/treeResourceCode/path/action");
        permissionDto.setPermissions(list1);
        permissionDto.setEffect(DataStatementPermissionDto.Effect.ALLOW);
        list.add(permissionDto);
        reqDto.setStatementList(list);
        reqDto.setDescription("Sample Data Policy Description");
        UpdateDataPolicyResponseDto response = client.updateDataPolicy(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `UpdateDataPolicyResponseDto`

| Name       | Type                                                           | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                         | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                         | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#UpdateDataPolicyRespDto">UpdateDataPolicyRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "policyId": "60b49xxxxxxxxxxxxxxx6e68",
    "policyName": "Sample Data Policy Name",
    "description": "Sample Data Policy Description",
    "createdAt": "2022-07-03T03:20:30.000Z",
    "updatedAt": "2022-07-03T03:20:30.000Z"
  }
}
```

## Data Structure

### <a id="DataStatementPermissionDto"></a> DataStatementPermissionDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                           | <div style="width:200px">Example Value</div>                                                                                        |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| effect      | string | yes                                          | Data resource permission operation: ALLOW (allow)/DENY (deny)                        | DENY                                                                                                                                |
| permissions | array  | yes                                          | Resource permission list, string data resource and array data resource, no path path | `["namespaceCode/stringResourceCode/action","namespaceCode/arrayResourceCode/action","namespaceCode/treeResourceCode/path/action"]` |

### <a id="UpdateDataPolicyRespDto"></a> UpdateDataPolicyRespDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| policyId    | string | yes                                          | Data Policy ID                             | `60b49xxxxxxxxxxxxxxx6e68`                   |
| policyName  | string | yes                                          | Data policy name, unique to the user pool  | `Sample data policy name`                    |
| description | string | No                                           | Data policy description                    | `Sample data policy description`             |
| createdAt   | string | yes                                          | Data policy creation time                  | `2022-07-03T03:20:30.000Z`                   |
| updatedAt   | string | yes                                          | Data policy update time                    | `2022-07-03T03:20:30.000Z`                   |
