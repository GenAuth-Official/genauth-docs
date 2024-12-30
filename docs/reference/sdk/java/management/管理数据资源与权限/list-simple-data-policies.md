# Get a list of data policy brief information

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to V3 API.

Get a list of data policy brief information in pages, and use keywords to search for data policy Name or data policy Code to fuzzy find data policy ID, data policy Name and data policy description information.

## Method Name

`ManagementClient.listSimpleDataPolices`

## Request Parameters

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                         | <div style="width:200px">Example Value</div> |
| ----- | ------ | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- |
| page  | number | no                                           | 1                                           | Current page number, starting from 1                                               | `1`                                          |
| limit | number | no                                           | 10                                          | The maximum number of pages per page cannot exceed 50, and the default value is 10 | `10`                                         |
| query | string | no                                           | -                                           | Data Strategy Name Keyword Search                                                  | `examplePolicyName`                          |

## Sample Code

```java
package test.management.dataPermission.policy;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.ListSimpleDataPoliciesDto;
import cn.authing.sdk.java.dto.ListSimpleDataPoliciesPaginatedRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class ListSimpleDataPolicesTest {
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

        ListSimpleDataPoliciesDto reqDto = new ListSimpleDataPoliciesDto();
        reqDto.setPage(1);
        reqDto.setLimit(10);
        reqDto.setQuery("examplePolicyName");
        ListSimpleDataPoliciesPaginatedRespDto response = client.listSimpleDataPolices(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `ListSimpleDataPoliciesPaginatedRespDto`

| Name       | Type                                                                                 | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                               | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                               | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                               | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#DataPoliciesSimplePaginatedRespDto">DataPoliciesSimplePaginatedRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 20,
    "list": {
      "policyId": "60b49xxxxxxxxxxxxxxx6e68",
      "policyName": "Sample Data Policy Name",
      "description": "Sample Data Policy Description"
    }
  }
}
```

## Data Structure

### <a id="DataPoliciesSimplePaginatedRespDto"></a> DataPoliciesSimplePaginatedRespDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                              | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | no                                           | Total number of records                                                                                 | `20`                                         |
| list       | array  | yes                                          | Response data nested type：<a href="#ListSimpleDataPoliciesRespDto">ListSimpleDataPoliciesRespDto</a>。 |                                              |

### <a id="ListSimpleDataPoliciesRespDto"></a> ListSimpleDataPoliciesRespDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| policyId    | string | yes                                          | Data Policy ID                             | `60b49xxxxxxxxxxxxxxx6e68`                   |
| policyName  | string | yes                                          | Data policy name, unique to the user pool  | `Sample data policy name`                    |
| description | string | no                                           | Data policy description                    | `Sample data policy description`             |
