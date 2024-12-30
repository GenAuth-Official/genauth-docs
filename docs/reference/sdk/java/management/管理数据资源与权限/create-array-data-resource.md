# Create array data resource

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to V3 API.

When you only need to create array type data resources, you can use this API. We have fixed the data resource type, and you do not need to pass in the `type` character field. Note: The `struct` field can only pass in array type data.

## Method Name

`ManagementClient.createDataResourceByArray`

## Request Parameters

| Name          | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                      | <div style="width:200px">Example Value</div>    |
| ------------- | -------- | -------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------- |
| actions       | string[] | Yes                                          | -                                           | Data resource permission operation list Array length limit: 50. | `["read","get"]`                                |
| struct        | string[] | Yes                                          | -                                           | Array data resource node Array length limit: 50.                | `["exampleArrayStruct1","exampleArrayStruct2"]` |
| resourceCode  | string   | yes                                          | -                                           | Data resource Code, unique in the permission space              | `dataResourceTestCode`                          |
| resourceName  | string   | yes                                          | -                                           | Data resource Name, unique in the permission space              | `Sample data resource Name`                     |
| namespaceCode | string   | yes                                          | -                                           | Permission space where the data policy is located               | `code1`                                         |
| description   | string   | no                                           | -                                           | Data resource description                                       | `Sample data resource description`              |

## Sample Code

```java
package test.management.dataPermission.resource;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CreateArrayDataResourceDto;
import cn.authing.sdk.java.dto.CreateArrayDataResourceResponseDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

import java.util.ArrayList;
import java.util.List;

public class CreateDataResourceByArrayTest {
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

        CreateArrayDataResourceDto reqDto = new CreateArrayDataResourceDto();
        reqDto.setResourceCode("arrayResourceCode");
        reqDto.setResourceName("Example array data resource");
        reqDto.setNamespaceCode("examplePermissionNamespace");
        List<String> list = new ArrayList<>();
        list.add("read");
        list.add("get");
        reqDto.setActions(list);
        List<String> list1 = new ArrayList<>();
        list1.add("exampleArrayStruct1");
        list1.add("exampleArrayStruct2");
        reqDto.setStruct(list1);
        reqDto.setDescription("Example Array Data Resource Description");
        CreateArrayDataResourceResponseDto response = client.createDataResourceByArray(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `CreateArrayDataResourceResponseDto`

| Name       | Type                                                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                       | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                       | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                       | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#CreateArrayDataResourceRespDto">CreateArrayDataResourceRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "resourceName": "Example Array Data Resource Name",
    "resourceCode": "dataResourceTestCode",
    "type": "TREE",
    "description": "Example Array Data Resource Description",
    "struct": "[\"exampleArrayStruct1\",\"exampleArrayStruct2\"]",
    "actions": "[\"read\",\"get\"]"
  }
}
```

## Data Structure

### <a id="CreateArrayDataResourceRespDto"></a> CreateArrayDataResourceRespDto

| Name         | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                   | <div style="width:200px">Example Value</div>    |
| ------------ | ------ | -------------------------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| resourceName | string | yes                                          | Data resource name, unique in the permission space                                           | `Example data resource name`                    |
| resourceCode | string | yes                                          | Data resource code, unique in the permission space                                           | `dataResourceTestCode`                          |
| type         | string | yes                                          | Data resource type, currently supports tree structure (TREE), string (STRING), array (ARRAY) | TREE                                            |
| description  | string | no                                           | Data resource description                                                                    | `Example data resource description`             |
| struct       | array  | yes                                          | Array data resource node Array length limit: 50.                                             | `["exampleArrayStruct1","exampleArrayStruct2"]` |
| actions      | array  | yes                                          | Data resource permission operation list Array length limit: 50.                              | `["read","get"]`                                |
