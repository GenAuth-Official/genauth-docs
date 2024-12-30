# Create data resources (recommended, key points)

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

## Description

This interface is used to create data resources. When you have data that needs to be set with permissions, create data resources of the corresponding type according to their data types. Currently, we support three types: string, array, and tree.

## Note

The `struct` field in the request body needs to pass in different Data Structures according to different resource types. Please refer to the following examples for details

## Request Example

### Example of creating a string type data resource

This type can be used when your data can be represented by only a string, such as an API, a user ID, etc.

The following is an example of creating a data resource representing the '/resource/create' API:

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "createResource API",
  "description": "This createResource API",
  "resourceCode": "createResourceAPI",
  "type": "STRING",
  "struct": "/resource/create",
  "actions": ["access"]
}
```

### Example of creating an array type data resource

This type can be used when your data is a group of data of the same type, such as a group of document links, a group of access card numbers, etc.
The following is an example of creating a data resource representing a group of access card numbers:

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "A group of access card numbers",
  "description": "This is a group of access card numbers",
  "resourceCode": "accessCardNumber",
  "type": "ARRAY",
  "struct": ["accessCardNumber1", "accessCardNumber2", "accessCardNumber3"],
  "actions": ["get", "update"]
}
```

### Example of creating a tree-type data resource

This type can be used when your data has a hierarchical relationship, such as organizational structure, folder structure, etc.
The following is an example of creating a data resource representing the company's organizational structure:

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "GenAuth",
  "description": "This is the organizational structure of GenAuth",
  "resourceCode": "authing",
  "type": "TREE",
  "struct": [
    {
      "name": "product",
      "code": "product",
      "value": "product",
      "children": [
        {
          "name": "productManager",
          "code": "productManager",
          "value": "pm"
        },
        {
          "name": "design",
          "code": "design",
          "value": "ui"
        }
      ]
    },
    {
      "name": "researchAndDevelopment",
      "code": "researchAndDevelopment",
      "value": "rd",
      "extendFieldValue": {
        "str": "str_value",
        "select": "option1"
      }
    }
  ],
  "actions": ["get", "update", "delete"],
  "extendFieldList": [
    {
      "key": "str",
      "label": "str_label",
      "valueType": "STRING",
      "description": "string"
    },
    {
      "key": "select",
      "label": "select_label",
      "valueType": "SELECT",
      "description": "select",
      "config": {
        "options": ["option1", "option2", "option3"]
      }
    }
  ]
}
```

## Method Name

`ManagementClient.createDataResource`

## Request Parameters

| Name            | Type                       | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                              | <div style="width:200px">Example Value</div> |
| --------------- | -------------------------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| actions         | string[]                   | Yes                                          | -                                           | Data resource permission operation list. Array length limit: 50.                                        | `["read","get"]`                             |
| struct          | <a href="#"></a>           | Yes                                          | -                                           | Data resource structure, supporting string (STRING), tree structure (TREE) and array structure (ARRAY). |                                              |
| type            | string                     | yes                                          | -                                           | Data resource type, currently supports tree structure (TREE), string (STRING), array (ARRAY)            | `TREE`                                       |
| resourceCode    | string                     | yes                                          | -                                           | Data resource Code, unique in the permission space                                                      | `dataResourceTestCode`                       |
| resourceName    | string                     | yes                                          | -                                           | Data resource Name, unique in the permission space                                                      | `example data resource Name`                 |
| namespaceCode   | string                     | yes                                          | -                                           | Permission space Code to which the data resource belongs                                                | `examplePermissionNamespace`                 |
| description     | string                     | no                                           | -                                           | Data resource description                                                                               | `example data resource description`          |
| extendFieldList | <a href="#Dnef">Dnef[]</a> | no                                           | -                                           | Data resource extension field (currently only supports tree type resources)                             |                                              |

## Sample Code

```java
package test.management.dataPermission.resource;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CreateDataResourceDto;
import cn.authing.sdk.java.dto.CreateDataResourceResponseDto;
import cn.authing.sdk.java.dto.DataResourceTreeStructs;
import cn.authing.sdk.java.dto.Dnef;
import cn.authing.sdk.java.dto.DnefConfig;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import cn.hutool.core.collection.ListUtil;
import cn.hutool.core.map.MapUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


public class CreateDataResourceTest {
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

        CreateDataResourceDto request = new CreateDataResourceDto();
        request.setNamespaceCode("examplePermissionNamespace");
        request.setResourceCode("treeResourceCode");
        request.setResourceName("Example Tree Data Resource");
        request.setType(CreateDataResourceDto.Type.TREE);
        ArrayList<DataResourceTreeStructs> dataResourceTreeStructList = new ArrayList<>();
        DataResourceTreeStructs dataResourceTreeStruct1 = new DataResourceTreeStructs();
        dataResourceTreeStruct1.setCode("tree1");
        dataResourceTreeStruct1.setName("tree node 1");
        dataResourceTreeStruct1.setValue("tree node 1 description");

        // Set the extended field value of the node (optional)
        Map<String, Object> extendFieldValue = MapUtil.of("str", "str_value");
        extendFieldValue.put("select", "option1");
        dataResourceTreeStruct1.setExtendFieldValue(extendFieldValue);

        List<Object> childrenList = new ArrayList<>();
        DataResourceTreeStructs dataResourceTreeStructChildren = new DataResourceTreeStructs();
        dataResourceTreeStructChildren.setCode("tree11");
        dataResourceTreeStructChildren.setName("tree node 11");
        dataResourceTreeStructChildren.setValue("tree node 11 description");
        childrenList.add(dataResourceTreeStructChildren); dataResourceTreeStruct1.setChildren(childrenList); DataResourceTreeStructs dataResourceTreeStruct2 = new DataResourceTreeStructs(); dataResourceTreeStruct2.setCode("tree2"); dataResourceTreeStruct2.setName("Tree Node 2"); dataResourceTreeStruct2.setValue("Tree node 2 description"); dataResourceTreeStructList.add(dataResourceTreeStruct1); dataResourceTreeStructList.add(dataResourceTreeStruct2); request.setStruct(dataResourceTreeStructList); request.setDescription("Example Tree Data Resource Description"); ArrayList<String> actions = new ArrayList<>(); actions.add("get"); actions.add("read"); request.setActions(actions);

        // Set extended fields (optional)
        request.setExtendFieldList(buildDnef());

        CreateDataResourceResponseDto response = client.createDataResource(request);
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
        List<DnefConfig.Option> options = ListUtil.of(new DnefConfig.Option("option1"),
                new DnefConfig.Option("option2"),
                new DnefConfig.Option("option3"));
        DnefConfig config = new DnefConfig(options);
        select.setConfig(config);
        dnefs.add(select);

        return dnefs;
    }
}

```

## Request Response

Type： `CreateDataResourceResponseDto`

| Name       | Type                                                               | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                             | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                             | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#CreateDataResourceRespDto">CreateDataResourceRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

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

### <a id="CreateDataResourceRespDto"></a> CreateDataResourceRespDto

| Name            | Type                       | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                            | <div style="width:200px">Example Value</div> |
| --------------- | -------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| resourceName    | string                     | yes                                          | Data resource Name, unique in the permission space                                                    | `Sample data resource Name`                  |
| resourceCode    | string                     | yes                                          | Data resource Code, unique in the permission space                                                    | `dataResourceTestCode`                       |
| type            | string                     | yes                                          | Data resource type, currently supports tree structure (TREE), string (STRING), array (ARRAY)          | TREE                                         |
| description     | string                     | no                                           | Data resource description                                                                             | `Sample Data Resource Description`           |
| struct          |                            | yes                                          | Data resource structure, supports string (STRING), tree structure (TREE) and array structure (ARRAY). |                                              |
| actions         | array                      | yes                                          | Data resource permission operation list Array length limit: 50.                                       | `["read","get"]`                             |
| extendFieldList | <a href="#Dnef">Dnef[]</a> | No                                           | Data resource extension field (currently only supports tree type resources)                           |                                              |

### <a id="Dnef"></a> Dnef

| Name      | Type                                 | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                    | <div style="width:200px">Example Value</div> |
| --------- | ------------------------------------ | -------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------- |
| key       | string                               | Yes                                          | Extended field Key                                            | `str`                                        |
| valueType | ValueType                            | Yes                                          | Extended field value type                                     | `STRING` (text), `SELECT` (single choice)    |
| label     | string                               | Yes                                          | Extended field display Name                                   | `str_label`                                  |
| config    | <a href="#DnefConfig">DnefConfig</a> | No                                           | Field configuration, single-select type fields must be passed |                                              |

### <a id="DnefConfig"></a> DnefConfig

| Name    | Type                           | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------------------------------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| options | <a href="#Option">Option[]</a> | Yes                                          | Single-select type field option list       |                                              |

### <a id="Option"></a> Option

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| value | string | yes                                          | option value                               | `option1`                                    |
