# Get the data policy list

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Query the data policy list by page, or search the data policy Name or data policy Code by keyword for fuzzy search.

## Method Name

`ManagementClient.listDataPolices`

## Request Parameters

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                         | <div style="width:200px">Example Value</div> |
| ----- | ------ | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- |
| page  | number | No                                           | 1                                           | Current page number, starting from 1                                               | `1`                                          |
| limit | number | No                                           | 10                                          | The maximum number of pages per page cannot exceed 50, and the default value is 10 | `10`                                         |
| query | string | No                                           | -                                           | Data strategy Name keyword search                                                  | `examplePolicyName`                          |

## Sample Code

```java
package test.management.dataPermission.policy;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.ListDataPoliciesDto;
import cn.authing.sdk.java.dto.ListDataPoliciesPaginatedRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class ListDataPolicesTest {
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

        ListDataPoliciesDto reqDto = new ListDataPoliciesDto();
        reqDto.setPage(1);
        reqDto.setLimit(10);
        reqDto.setQuery("examplePolicyName");
        ListDataPoliciesPaginatedRespDto response = client.listDataPolices(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `ListDataPoliciesPaginatedRespDto`

| Name       | Type                                                                     | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                   | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                   | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                   | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#DataPoliciesPaginatedRespDto">DataPoliciesPaginatedRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 20,
    "list": {
      "policyName": "Sample Data Policy Name",
      "description": "Sample Data Policy Description",
      "resourceList": {
        "resourceId": "6301cexxxxxxxxx27478",
        "resourceName": "Resource 1"
      },
      "policyId": "60b49xxxxxxxxxxxxxxx6e68",
      "targetList": {
        "id": "6301cexxxxxxxxxxxxxxxxx78",
        "type": "USER",
        "name": "test"
      },
      "updatedAt": "2022-07-03T03:20:30.000Z"
    }
  }
}
```

## Data Structure

### <a id="DataPoliciesPaginatedRespDto"></a> DataPoliciesPaginatedRespDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                  | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | yes                                          | Total number of records                                                                     | `20`                                         |
| list       | array  | yes                                          | Response data nested type：<a href="#ListDataPoliciesRespDto">ListDataPoliciesRespDto</a>。 |                                              |

### <a id="ListDataPoliciesRespDto"></a> ListDataPoliciesRespDto

| Name         | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                            | <div style="width:200px">Example Value</div> |
| ------------ | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| policyName   | string | yes                                          | Data policy name, unique to the user pool                                                                                                                             | `Sample data policy name`                    |
| description  | string | no                                           | Data policy description                                                                                                                                               | `Sample data policy description`             |
| resourceList | array  | yes                                          | Data permission list, all data resource IDs and names under each policy Nested Type: <a href="#DataResourceSimpleRespDto">DataResourceSimpleRespDto</a>.              |                                              |
| policyId     | string | yes                                          | Data Policy ID                                                                                                                                                        | `60b49xxxxxxxxxxxxxxx6e68`                   |
| targetList   | array  | yes                                          | Subject object list, including all subject objects under the data policy, including USER, GROUP, ROLE, ORG Nested Type: <a href="#SubjectRespDto">SubjectRespDto</a>. |                                              |
| updatedAt    | string | yes                                          | Data policy update time                                                                                                                                               | `2022-07-03T03:20:30.000Z`                   |

### <a id="DataResourceSimpleRespDto"></a> DataResourceSimpleRespDto

| Name         | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>          | <div style="width:200px">Example Value</div> |
| ------------ | ------ | -------------------------------------------- | --------------------------------------------------- | -------------------------------------------- |
| resourceId   | string | yes                                          | Data resource ID to which data permissions belong   | `6301cexxxxxxxxx27478`                       |
| resourceName | string | yes                                          | Data resource name to which data permissions belong | `Resource 1`                                 |

### <a id="SubjectRespDto"></a> SubjectRespDto

| Name | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                       | <div style="width:200px">Example Value</div> |
| ---- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------- |
| id   | string | yes                                          | Subject ID, including user ID, user group ID, role ID, organization ID           | `6301cexxxxxxxxxxxxxxxxx78`                  |
| type | string | yes                                          | Subject type, including USER, GROUP, ROLE, ORG                                   | USER                                         |
| name | string | yes                                          | Subject Name, including user Name, user group Name, role Name, organization Name | `test`                                       |
