# Get the list of subjects authorized by the data policy

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the list of subjects authorized by the data policy, and find the list of authorized subjects by authorization subject type, data policy ID and data resource ID.

## Method Name

`ManagementClient.listDataPolicyTargets`

## Request Parameters

| Name       | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                         | <div style="width:200px">Example Value</div> |
| ---------- | -------- | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- |
| policyId   | string   | yes                                          | -                                           | Data Policy ID                                                                     | `60b49xxxxxxxxxxxxxxxxxx6e68`                |
| page       | number   | No                                           | 1                                           | Current page number, starting from 1                                               | `1`                                          |
| limit      | number   | No                                           | 10                                          | The maximum number of pages per page cannot exceed 50, and the default value is 10 | `10`                                         |
| query      | string   | no                                           | -                                           | Subject Name                                                                       | `Example 1`                                  |
| targetType | string[] | No                                           | -                                           | Subject type, including USER, GROUP, ROLE, and ORG                                 | `[0]`                                        |

## Sample Code

```java
package test.management.dataPermission.policy;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.ListDataPolicySubjectPaginatedRespDto;
import cn.authing.sdk.java.dto.ListDataPolicyTargetsDto;
import cn.authing.sdk.java.dto.SubjectDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

import java.util.ArrayList;
import java.util.List;

public class ListDataPolicyTargetsTest {
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

        ListDataPolicyTargetsDto reqDto = new ListDataPolicyTargetsDto();
        reqDto.setPolicyId("60b49xxxxxxxxxxxxxxx6e68");
        reqDto.setQuery("SubjectName");
        reqDto.setPage(1);
        reqDto.setLimit(10);
        List<SubjectDto.Type> targetType = new ArrayList<>();
        targetType.add(SubjectDto.Type.USER);
        targetType.add(SubjectDto.Type.ROLE);
        reqDto.setTargetType(targetType);
        ListDataPolicySubjectPaginatedRespDto response = client.listDataPolicyTargets(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `ListDataPolicySubjectPaginatedRespDto`

| Name       | Type                                                                     | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                   | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                   | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                   | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#ListDataPolicySubjectPageDto">ListDataPolicySubjectPageDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 20,
    "list": {
      "targetIdentifier": "6301cexxxxxxxxxxxxxxxxx78",
      "targetName": "test",
      "authorizationTime": "2022-07-03T03:20:30.000Z"
    }
  }
}
```

## Data Structure

### <a id="ListDataPolicySubjectPageDto"></a> ListDataPolicySubjectPageDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                        | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | no                                           | Total number of records                                                           | `20`                                         |
| list       | array  | yes                                          | Response data nested type：<a href="#DataSubjectRespDto">DataSubjectRespDto</a>。 |                                              |

### <a id="DataSubjectRespDto"></a> DataSubjectRespDto

| Name              | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                       | <div style="width:200px">Example Value</div> |
| ----------------- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------- |
| targetIdentifier  | string | yes                                          | Subject ID, including user ID, user group ID, role ID, organization ID           | `6301cexxxxxxxxxxxxxxxxx78`                  |
| targetType        | string | yes                                          | Subject type, including USER, GROUP, ROLE, ORG                                   | USER                                         |
| targetName        | string | yes                                          | Subject Name, including user Name, user group Name, role Name, organization Name | `test`                                       |
| authorizationTime | string | yes                                          | Time when the subject object is authorized                                       | `2022-07-03T03:20:30.000Z`                   |
