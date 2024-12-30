# Create a tree data resource

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

When you only need to create a tree type data resource, you can use this API. We have fixed the data resource type, and you do not need to pass in the `type` character field. Note: `struct` should be passed in according to the tree type data resource structure, please refer to the example.

## Method Name

`ManagementClient.createDataResourceByTree`

## Request Parameters

| Name            | Type                                                             | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                      | <div style="width:200px">Example Value</div> |
| --------------- | ---------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------- |
| actions         | string[]                                                         | Yes                                          | -                                           | Data resource permission operation list Array length limit: 50. | `["read","get"]`                             |
| struct          | <a href="#DataResourceTreeStructs">DataResourceTreeStructs[]</a> | Yes                                          | -                                           | Tree data resource node Array length limit: 50.                 |                                              |
| resourceCode    | string                                                           | yes                                          | -                                           | Data resource Code, unique in the permission space              | `dataResourceTestCode`                       |
| resourceName    | string                                                           | yes                                          | -                                           | Data resource Name, unique in the permission space              | `Sample data resource Name`                  |
| namespaceCode   | string                                                           | yes                                          | -                                           | Permission space where the data policy is located               | `code1`                                      |
| description     | string                                                           | no                                           | -                                           | Data resource description                                       | `Sample Data Resource Description`           |
| extendFieldList | <a href="#Dnef">Dnef[]</a>                                       | no                                           | -                                           | Data resource extension field                                   |                                              |

## Sample Code

```java
package test.management.dataPermission.resource;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CreateTreeDataResourceDto;
import cn.authing.sdk.java.dto.CreateTreeDataResourceResponseDto;
import cn.authing.sdk.java.dto.DataResourceTreeStructs;
import cn.authing.sdk.java.dto.Dnef;
import cn.authing.sdk.java.dto.DnefConfig;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import cn.hutool.core.collection.ListUtil;
import cn.hutool.core.map.MapUtil;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CreateDataResourceByTreeTest {
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

        CreateTreeDataResourceDto reqDto = new CreateTreeDataResourceDto();
        reqDto.setActions(Collections.singletonList("read"));
        reqDto.setResourceCode("treeResourceCode");
        reqDto.setResourceName("Example Tree Data Resource");
        reqDto.setNamespaceCode("examplePermissionNamespace");
        List<DataResourceTreeStructs> treeList = new ArrayList<>();
        DataResourceTreeStructs struct = new DataResourceTreeStructs();
        struct.setCode("tree1");
        struct.setName("tree node 1");
        struct.setExtendFieldValue(MapUtil.of("str", "str_value"));
        struct.setValue("tree node 1 description");
        List<Object> children = new ArrayList<>();
        DataResourceTreeStructs child = new DataResourceTreeStructs();
        child.setName("tree node 11");
        child.setCode("tree11");
        child.setValue("tree node 11 description");
        children.add(child);
        struct.setChildren(children);
        treeList.add(struct);
        reqDto.setStruct(treeList);
        reqDto.setDescription("Example Tree Data Resource description");
        // Set extended fields (optional)
        // Set extension fields (optional)
        reqDto.setExtendFieldList(buildDnef());
        CreateTreeDataResourceResponseDto response = client.createDataResourceByTree(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }

    /**
     * Building extension fields
     */
    private static List<Dnef> buildDnef() {
        List<Dnef> dnefs = new ArrayList<>();
        Dnef str = new Dnef();
        str.setKey("str");
        str.setLabel("str_label");
        str.setValueType(Dnef.ValueType.STRING);
        str.setDescription("string");
        dnefs.add(str);

        Dnef select = new Dnef();
        select.setKey("select");
        select.setLabel("select_label");
        select.setValueType(Dnef.ValueType.SELECT);
        select.setDescription("select");
        List<DnefConfig.Option> options = ListUtil.of(
          new DnefConfig.Option("option1"),
          new DnefConfig.Option("option2"),
          new DnefConfig.Option("option3")
        );
        DnefConfig config = new DnefConfig(options);
        select.setConfig(config);
        dnefs.add(select);

        return dnefs;
    }
}

```

## Request Response

Type： `CreateTreeDataResourceResponseDto`

| Name       | Type                                                                       | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                     | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                     | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                     | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#CreateTreeDataResourceRespDto">CreateTreeDataResourceRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

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
    "struct": {
      "code": "123",
      "name": "Data resource",
      "value": "Sample data resource node",
      "children": [
        {
          "code": "code1",
          "name": "Child node 1",
          "value": "Child node value",
          "children": [
            {
              "code": "code2",
              "name": "Child node 2",
              "value": "Child node 2 value"
            }
          ]
        }
      ]
    },
    "actions": ["read", "get"]
  }
}
```

## Data Structure

### <a id="DataResourceTreeStructs"></a> DataResourceTreeStructs

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                     | <div style="width:200px">Example Value</div>                                                                                                           |
| ---------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| code             | string | yes                                          | Data resource node Code, unique in the same level                              | `123`                                                                                                                                                  |
| name             | string | yes                                          | Data resource node Name, unique in the same level                              | `Data resource`                                                                                                                                        |
| value            | string | no                                           | Data resource node Value                                                       | `Sample data resource node`                                                                                                                            |
| children         | array  | no                                           | Child nodes of data resource node, child node level supports up to five levels | `[{"code":"code1","name":"child node 1","value":"child node value","children":[{"code":"code2","name":"child node 2","value":"child node 2 value"}]}]` |
| extendFieldValue | map    | no                                           | Extend field value                                                             | `{"str":"str_value"}`                                                                                                                                  |

### <a id="CreateTreeDataResourceRespDto"></a> CreateTreeDataResourceRespDto

| Name            | Type                       | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                   | <div style="width:200px">Example Value</div> |
| --------------- | -------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| resourceName    | string                     | yes                                          | Data resource Name, unique in the permission space                                                                           | `Sample data resource Name`                  |
| resourceCode    | string                     | yes                                          | Data resource Code, unique in the permission space                                                                           | `dataResourceTestCode`                       |
| type            | string                     | yes                                          | Data resource type, currently supports tree structure (TREE), string (STRING), array (ARRAY)                                 | TREE                                         |
| description     | string                     | no                                           | Data resource description                                                                                                    | `Sample Data Resource Description`           |
| struct          | array                      | yes                                          | Tree data resource node nested Type: <a href="#DataResourceTreeStructs">DataResourceTreeStructs</a>. Array length limit: 50. |                                              |
| actions         | array                      | Yes                                          | Data resource permission operation list Array length limit: 50.                                                              | `["read","get"]`                             |
| extendFieldList | <a href="#Dnef">Dnef[]</a> | No                                           | Data resource extension field                                                                                                |                                              |

### <a id="DataResourceTreeStructs"></a> DataResourceTreeStructs

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                             | <div style="width:200px">Example Value</div>                                                                                                           |
| -------- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| code     | string | Yes                                          | Data resource node Code, unique at the same level                                      | `123`                                                                                                                                                  |
| name     | string | Yes                                          | Data resource node Name, unique at the same level                                      | `Data Resource`                                                                                                                                        |
| value    | string | No                                           | Data resource node Value                                                               | `Sample data resource node`                                                                                                                            |
| children | array  | No                                           | Child nodes of the data resource node, the child node level supports up to five levels | `[{"code":"code1","name":"child node 1","value":"child node value","children":[{"code":"code2","name":"child node 2","value":"child node 2 value"}]}]` |

### <a id="Dnef"></a> Dnef

| Name      | Type                                 | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                   | <div style="width:200px">Example Value</div> |
| --------- | ------------------------------------ | -------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------- |
| key       | string                               | Yes                                          | Extended field Key                                           | `str`                                        |
| valueType | ValueType                            | Yes                                          | Extended field value type                                    | `STRING` (text), `SELECT` (single choice)    |
| label     | string                               | Yes                                          | Extended field display Name                                  | `str_label`                                  |
| config    | <a href="#DnefConfig">DnefConfig</a> | No                                           | Field configuration, single choice type field must be passed |                                              |

### <a id="DnefConfig"></a> DnefConfig

| Name    | Type                           | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------------------------------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| options | <a href="#Option">Option[]</a> | Yes                                          | Single-select type field option list       |                                              |

### <a id="Option"></a> Option

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| value | string | Yes                                          | Option value                               | `option1`                                    |
