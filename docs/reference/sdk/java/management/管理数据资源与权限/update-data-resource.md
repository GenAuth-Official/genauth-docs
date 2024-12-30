# Modify data resources

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Modify data resources, query the original information based on the permission space Code and data resource Code, and only allow modification of data resource Name, description and data resource node.

## Method Name

`ManagementClient.updateDataResource`

## Request Parameters

| Name          | Type             | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                            | <div style="width:200px">Example Value</div> |
| ------------- | ---------------- | -------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| resourceCode  | string           | yes                                          | -                                           | Data resource Code, unique in the permission space                                                    | `dataResourceTestCode`                       |
| namespaceCode | string           | yes                                          | -                                           | Permission space Code to which the data resource belongs                                              | `examplePermissionNamespace`                 |
| resourceName  | string           | no                                           | -                                           | Data resource Name, unique in the permission space                                                    | `Sample data resource Name`                  |
| description   | string           | no                                           | -                                           | Data resource description                                                                             | `Sample Data Resource Description`           |
| struct        | <a href="#"></a> | No                                           | -                                           | Data resource structure, supports string (STRING), tree structure (TREE) and array structure (ARRAY). |                                              |
| actions       | string[]         | No                                           | -                                           | Data resource permission operation list Array length limit: 50.                                       | `["read","get"]`                             |

## Sample Code

```java
package test.management.dataPermission.resource;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.DataResourceTreeStructs;
import cn.authing.sdk.java.dto.UpdateDataResourceDto;
import cn.authing.sdk.java.dto.UpdateDataResourceResponseDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import cn.hutool.core.map.MapUtil;

import java.util.ArrayList;
import java.util.Map;


public class UpdateDataResourceTest {

    // Need to be replaced with your GenAuth Access Key ID
    private static final String ACCESS_KEY_ID = "AUTHING_ACCESS_KEY_ID";
    // Need to be replaced with your GenAuth Access Key Secret
    private static final String ACCESS_KEY_SECRET = "AUTHING_ACCESS_KEY_SECRET";

    public static void main(String[] args) throws Throwable {
        ManagementClientOptions clientOptions = new ManagementClientOptions();
        clientOptions.setAccessKeyId(ACCESS_KEY_ID);
        clientOptions.setAccessKeySecret(ACCESS_KEY_SECRET);
        ManagementClient client = new ManagementClient(clientOptions);

        UpdateDataResourceDto request = new UpdateDataResourceDto();
        request.setNamespaceCode("examplePermissionNamespace");
        request.setResourceCode("treeResourceCode");
        request.setResourceName("Sample new tree data resource");
        request.setDescription("Sample data resource new description");
        ArrayList<DataResourceTreeStructs> dataResourceTreeStructList = new ArrayList<>();
        DataResourceTreeStructs dataResourceTreeStruct = new DataResourceTreeStructs();
        dataResourceTreeStruct.setCode("tree1");
        dataResourceTreeStruct.setName("Tree node 1");
        dataResourceTreeStruct.setValue("Tree node 1 description");

        // Modify the extended field value (optional)
        Map<String, Object> extendFieldValue = MapUtil.of("str", "str_valu3");
        extendFieldValue.put("select", "option2");

        dataResourceTreeStruct.setExtendFieldValue(extendFieldValue);
        dataResourceTreeStructList.add(dataResourceTreeStruct);
        request.setStruct(dataResourceTreeStructList);
        ArrayList<String> actionList = new ArrayList<>();
        actionList.add("get");
        actionList.add("read");
        actionList.add("delete");
        actionList.add("update");
        request.setActions(actionList);
        UpdateDataResourceResponseDto response = client.updateDataResource(request);
        System.out.println(JsonUtils.serialize(response));
    }

}
```

## Request Response

Type： `UpdateDataResourceResponseDto`

| Name       | Type                                                               | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                             | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                             | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#UpdateDataResourceRespDto">UpdateDataResourceRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "resourceName": "Sample data resource Name",
    "resourceCode": "dataResourceTestCode",
    "type": "TREE",
    "description": "Sample Data Resource Description",
    "actions": "[\"read\",\"get\"]"
  }
}
```

## Data Structure

### <a id="UpdateDataResourceRespDto"></a> UpdateDataResourceRespDto

| Name         | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                            | <div style="width:200px">Example Value</div> |
| ------------ | ------ | -------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| resourceName | string | yes                                          | Data resource Name, unique in the permission space                                                    | `Sample data resource Name`                  |
| resourceCode | string | yes                                          | Data resource Code, unique in the permission space                                                    | `dataResourceTestCode`                       |
| type         | string | yes                                          | Data resource type, currently supports tree structure (TREE), string (STRING), array (ARRAY)          | TREE                                         |
| description  | string | no                                           | Data resource description                                                                             | `Sample Data Resource Description`           |
| struct       |        | yes                                          | Data resource structure, supports string (STRING), tree structure (TREE) and array structure (ARRAY). |                                              |
| actions      | array  | yes                                          | Data resource permission operation list Array length limit: 50.                                       | `["read","get"]`                             |
