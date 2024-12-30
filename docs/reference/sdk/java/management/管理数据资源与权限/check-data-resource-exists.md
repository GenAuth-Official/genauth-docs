# Check if the data resource Code or Name is available

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Check if the data resource Name or Code is valid in the permission space. Use the data resource Name or data resource Code and the permission space Code to determine whether it is available in the specified permission space.

### Data resource Code valid example

- Entry

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceCode": "test"
}
```

- Parameters

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 0,
  "data": {
    "isValid": "true"
  }
}
```

### Valid examples of data resource Name

- Entry

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "test"
}
```

- Parameters

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 0,
  "data": {
    "isValid": "true"
  }
}
```

### Data resource Code Invalid example

- Entry

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceCode": "test"
}
```

- Parameters

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 0,
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "isValid": "false",
    "message": "data resource code already exist"
  }
}
```

## Method Name

`ManagementClient.checkDataResourceExists`

## Request Parameters

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                   | <div style="width:200px">Example Value</div> |
| ------------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------- |
| namespaceCode | string | yes                                          | -                                           | The permission space Code to which the data resource belongs | `examplePermissionNamespace`                 |
| resourceName  | string | no                                           | -                                           | Data resource Name, unique in the permission space           | `Example data resource Name`                 |
| resourceCode  | string | no                                           | -                                           | Data resource Code, unique in the permission space           | `dataResourceTestCode`                       |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CheckDataResourceExistsDto;
import cn.authing.sdk.java.dto.CheckParamsDataResourceResponseDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;


public class CheckDataResourceExistsTest {
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

        CheckDataResourceExistsDto request = new CheckDataResourceExistsDto();
        request.setNamespaceCode("examplePermissionNamespace");
        request.setResourceName("Example tree data resource Name");

        CheckParamsDataResourceResponseDto response1 = client.checkDataResourceExists(request);
        System.out.println(JsonUtils.serialize(response1));

        request.setNamespaceCode("examplePermissionNamespace");
        request.setResourceCode("treeResourceCode");

        CheckParamsDataResourceResponseDto response2 = client.checkDataResourceExists(request);
        System.out.println(JsonUtils.serialize(response2));
    }

}
```

## Request Response

Type： `CheckParamsDataResourceResponseDto`

| Name       | Type                                                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                       | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                       | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                       | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#CheckParamsDataResourceRespDto">CheckParamsDataResourceRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "isValid": "false",
    "message": "data resource name already exist"
  }
}
```

## Data Structure

### <a id="CheckParamsDataResourceRespDto"></a> CheckParamsDataResourceRespDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                  | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| isValid | boolean | Yes                                          | Is the data resource Name or Code verification valid?                                                                       | `false`                                      |
| message | string  | No                                           | Prompt message if the data resource Name or Code verification fails. If the verification succeeds, message is not returned. | `data resource name already exist`           |
