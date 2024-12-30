# Get the list of resources authorized by the group

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to V3 API.

Get the list of resources authorized by the group code, which can be filtered by Resource Type and permission group code.

## Method Name

`ManagementClient.getGroupAuthorizedResources`

## Request Parameters

| Name         | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                           | <div style="width:200px">Example Value</div> |
| ------------ | ------ | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| code         | string | Yes                                          | -                                           | Group code                                                                                           | `developer`                                  |
| namespace    | string | No                                           | -                                           | Code of the permission group (permission space). Do not pass to obtain the default permission group. | `default`                                    |
| resourceType | string | No                                           | -                                           | Resource Type                                                                                        |                                              |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.AuthorizedResourceListRespDto;
import cn.authing.sdk.java.dto.GetGroupAuthorizedResourcesDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetGroupAuthorizedResourcesTest {
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

        GetGroupAuthorizedResourcesDto reqDto = new GetGroupAuthorizedResourcesDto();
        reqDto.setCode("code1");
        AuthorizedResourceListRespDto response = client.getGroupAuthorizedResources(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `AuthorizedResourceListRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | array  | Response data                                                                                                                                                                                                                                                                                                                                  |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "resourceCode": "ecs:1",
    "description": "Server",
    "condition": {
      "param": "AppId",
      "operator": "StringEquals",
      "value": "1"
    },
    "resourceType": "API",
    "apiIdentifier": "/api/v1/example",
    "actions": "[\"ecs:Start\",\"ecs:Stop\"]",
    "effect": "ALLOW"
  }
}
```

## Data Structure

### <a id="AuthorizedResourceDto"></a> AuthorizedResourceDto

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                       | <div style="width:200px">Example Value</div> |
| ------------- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------- |
| resourceCode  | string | Yes                                          | Resource Descriptor                                                              | `ecs:1`                                      |
| description   | string | No                                           | Resource description information                                                 | `Server`                                     |
| condition     | array  | No                                           | Strategy Condition Nested Type：<a href="#PolicyCondition">PolicyCondition</a>。 |                                              |
| resourceType  | string | Yes                                          | Resource Type                                                                    | DATA                                         |
| apiIdentifier | string | Yes                                          | API URL                                                                          | `/api/v1/example`                            |
| actions       | array  | Yes                                          | List of authorized operations                                                    | `["ecs:Start","ecs:Stop"]`                   |
| effect        | string | Yes                                          | Allow or Yes Reject                                                              | ALLOW                                        |

### <a id="PolicyCondition"></a> PolicyCondition

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| param    | string | Yes                                          | Condition Param                            | UserPoolId                                   |
| operator | string | Yes                                          | Condition Operator                         | Bool                                         |
| value    | string | Yes                                          | Condition Value                            | `1`                                          |
