# Authorization data policy

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Data policy creates subject authorization, and mutual authorization is performed through authorization subject and data policy.

## Method Name

`ManagementClient.authorizeDataPolicies`

## Request Parameters

| Name       | Type                                   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                   | <div style="width:200px">Example Value</div>           |
| ---------- | -------------------------------------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| targetList | <a href="#SubjectDto">SubjectDto[]</a> | Yes                                          | -                                           | Data permission list, all data permissions under each policy |                                                        |
| policyIds  | string[]                               | Yes                                          | -                                           | Data policy id list Array length limit: 50.                  | `["6301cexxxxxxxxxx27478","63123cexxxxxxxxxx2123101"]` |

## Sample Code

```java
package test.management.dataPermission.policy;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CommonResponseDto;
import cn.authing.sdk.java.dto.CreateAuthorizeDataPolicyDto;
import cn.authing.sdk.java.dto.SubjectDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import com.nimbusds.jose.shaded.ow2asm.Type;

import java.util.ArrayList;
import java.util.List;

public class AuthorizeDataPoliciesTest {
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

        CreateAuthorizeDataPolicyDto reqDto = new CreateAuthorizeDataPolicyDto();
        List<String> list = new ArrayList<>();
        list.add("6301cexxxxxxxxxx27478");
        list.add("63123cexxxxxxxxxx2123101");
        reqDto.setPolicyIds(list);
        List<SubjectDto> targetList = new ArrayList<>();
        SubjectDto subjectDto = new SubjectDto();
        subjectDto.setId("6301cexxxxxxxxxxxxxxxxx78");
        subjectDto.setName("UserName");
        subjectDto.setType(SubjectDto.Type.USER);
        targetList.add(subjectDto);
        reqDto.setTargetList(targetList);
        CommonResponseDto response = client.authorizeDataPolicies(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `CommonResponseDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## Data Structure

### <a id="SubjectDto"></a> SubjectDto

| Name | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                       | <div style="width:200px">Example Value</div> |
| ---- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------- |
| id   | string | yes                                          | Subject ID, including user ID, user group ID, role ID, organization ID           | `6301cexxxxxxxxxxxxxxxxx78`                  |
| type | string | yes                                          | Subject type, including USER, GROUP, ROLE, ORG                                   | USER                                         |
| name | string | no                                           | Subject Name, including user Name, user group Name, role Name, organization Name | `user name`                                  |
