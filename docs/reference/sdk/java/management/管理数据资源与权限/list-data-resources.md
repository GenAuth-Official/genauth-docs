# Get data resource list

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the data resource list, you can specify the filter by data resource Name, data resource Code and the permission space Code list to which the data resource belongs.

## Method Name

`ManagementClient.listDataResources`

## Request Parameters

| Name           | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                  | <div style="width:200px">Example Value</div>                   |
| -------------- | -------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| page           | number   | No                                           | 1                                           | Current page number, starting from 1                                                        | `1`                                                            |
| limit          | number   | No                                           | 10                                          | The maximum number of pages per page cannot exceed 50, and the default value is 10          | `10`                                                           |
| query          | string   | No                                           | -                                           | Keyword search, can be data resource Name or data resource Code                             | `Resource1`                                                    |
| namespaceCodes | string[] | No                                           | -                                           | The permission space to which the permission data belongs Code list Array length limit: 50. | `["examplePermissionNamespace1","examplePermissionNamespac2"]` |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.ListDataResourcesDto;
import cn.authing.sdk.java.dto.ListDataResourcesPaginatedRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;


public class ListDataResourcesTest {
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

        ListDataResourcesDto request = new ListDataResourcesDto();
        request.setPage(1);
        request.setLimit(10);
        request.setNamespaceCodes("examplePermissionNamespace1,examplePermissionNamespace2");

        ListDataResourcesPaginatedRespDto response = client.listDataResources(request);
        System.out.println(JsonUtils.serialize(response));
    }

}
```

## Request Response

Type： `ListDataResourcesPaginatedRespDto`

| Name       | Type                                                                       | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                     | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                     | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                     | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#DataResourcesPaginatedRespDto">DataResourcesPaginatedRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "resourceName": "Sample data resource Name",
      "resourceCode": "dataResourceTestCode",
      "type": "TREE",
      "description": "Sample Data Resource Description",
      "namespaceCode": "examplePermissionNamespace",
      "namespaceName": "Example Permission Space",
      "authorizationNum": 1,
      "updatedAt": "2022-07-03T03:20:30.000Z"
    }
  }
}
```

## Data Structure

### <a id="DataResourcesPaginatedRespDto"></a> DataResourcesPaginatedRespDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                    | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | yes                                          | Total number of records                                                                       |                                              |
| list       | array  | yes                                          | Response data nested type：<a href="#ListDataResourcesRespDto">ListDataResourcesRespDto</a>。 |                                              |

### <a id="ListDataResourcesRespDto"></a> ListDataResourcesRespDto

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                   | <div style="width:200px">Example Value</div> |
| ---------------- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------- |
| resourceName     | string | yes                                          | Data resource Name, unique in the permission space                                           | `Sample data resource Name`                  |
| resourceCode     | string | yes                                          | Data resource Code, unique in the permission space                                           | `dataResourceTestCode`                       |
| type             | string | yes                                          | Data resource type, currently supports tree structure (TREE), string (STRING), array (ARRAY) | TREE                                         |
| description      | string | no                                           | Data resource description                                                                    | `Sample Data Resource Description`           |
| namespaceCode    | string | yes                                          | The permission space Code to which the data resource belongs                                 | `examplePermissionNamespace`                 |
| namespaceName    | string | yes                                          | The permission space Name to which the data resource belongs                                 | `Sample Permission Space`                    |
| authorizationNum | number | yes                                          | The number of authorizations associated with the data resource                               | `1`                                          |
| updatedAt        | string | yes                                          | The time when the data resource was updated                                                  | `2022-07-03T03:20:30.000Z`                   |
