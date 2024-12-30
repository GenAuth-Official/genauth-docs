# Get the Pipeline function list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Get Pipeline function list

## Method Name

`ManagementClient.listPipelineFunctions`

## Request Parameters

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                | <div style="width:200px">Example Value</div> |
| ----- | ------ | -------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| scene | string | yes                                          | -                                           | Filter by the triggering scene of the function (optional, all are returned by default):<br>- `PRE_REGISTER`: before registration<br>- `POST_REGISTER`: after registration<br>- `PRE_AUTHENTICATION`: before authentication<br>- `POST_AUTHENTICATION`: After authentication<br>- `PRE_OIDC_ID_TOKEN_ISSUED`: Before OIDC ID Token is issued<br>- `PRE_OIDC_ACCESS_TOKEN_ISSUED`: Before OIDC Access Token is issued<br>- `PRE_COMPLETE_USER_INFO`: Before completing user information<br> | `PRE_REGISTER`                               |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CostGetCurrentPackageRespDto;
import cn.authing.sdk.java.dto.ListPipelineFunctionsDto;
import cn.authing.sdk.java.dto.PipelineFunctionPaginatedRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class ListPipelineFunctionsTest {
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

        ListPipelineFunctionsDto listPipelineFunctionsDto = new ListPipelineFunctionsDto();
        listPipelineFunctionsDto.setScene("PRE_OIDC_ACCESS_TOKEN_ISSUED");
        PipelineFunctionPaginatedRespDto pipelineFunctionPaginatedRespDto = client.listPipelineFunctions(listPipelineFunctionsDto);
        System.out.println(JsonUtils.serialize(pipelineFunctionPaginatedRespDto));
    }
}

```

## Request Response

Type： `PipelineFunctionPaginatedRespDto`

| Name       | Type                                                               | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                             | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                             | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#PipelineFunctionPagingDto">PipelineFunctionPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "funcId": "62ce9135dxxxxb83e373f5d6",
      "funcName": "System maintenance is prohibited from registration/login every Sunday morning from 3 to 6 am",
      "funcDescription": "Registration/login is prohibited every Sunday from 3-6 am due to system maintenance.",
      "scene": "PRE_REGISTER",
      "createdAt": "2022-07-03T03:20:30.000Z",
      "updatedAt": "2022-07-03T03:20:30.000Z",
      "timeout": 3,
      "sourceCode": "async function pipe(user, context, callback) {\n const date = new Date();\n const d = date.getDay();\n const n = date.getHours();\n // Registration is prohibited between 3-6 a.m. every Sunday\n if (d === 0 && (3 <= n && n <= 6)) {\n return callback(new Error('System maintenance, registration temporarily suspended!'));\n }\n callback(null, user, context)\n}",
      "status": "success"
    }
  }
}
```

## Data Structure

### <a id="PipelineFunctionPagingDto"></a> PipelineFunctionPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                     | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------- |
| totalCount | number | yes                                          | total                                                                          |                                              |
| list       | array  | yes                                          | data list nestedType：<a href="#PipelineFunctionDto">PipelineFunctionDto</a>。 |                                              |

### <a id="PipelineFunctionDto"></a> PipelineFunctionDto

| Name               | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                      | <div style="width:200px">Example Value</div>                                           |
| ------------------ | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --- | ------ | ------ | --- | -------------------------------------------------------------------------------------------------------------------------------- | --------- |
| funcId             | string  | yes                                          | Function ID                                                                                                                                                                                                                                                                                                                                                                                                                     | `62ce9135dxxxxb83e373f5d6`                                                             |
| funcName           | string  | yes                                          | Function Name                                                                                                                                                                                                                                                                                                                                                                                                                   | `Registration/login is prohibited every Sunday from 3-6 am due to system maintenance.` |
| funcDescription    | string  | no                                           | Function description                                                                                                                                                                                                                                                                                                                                                                                                            | `Registration/login is prohibited every Sunday from 3-6 am due to system maintenance.` |
| scene              | string  | yes                                          | Function triggering scenario:<br>- `PRE_REGISTER`: before registration<br>- `POST_REGISTER`: after registration<br>- `PRE_AUTHENTICATION`: before authentication<br>- `POST_AUTHENTICATION`: after authentication<br>- `PRE_OIDC_ID_TOKEN_ISSUED`: before OIDC ID Token is issued<br>- `PRE_OIDC_ACCESS_TOKEN_ISSUED`: Before OIDC Access Token is issued<br>- `PRE_COMPLETE_USER_INFO`: Before completing user information<br> | PRE_REGISTER                                                                           |
| createdAt          | string  | yes                                          | Function creation time                                                                                                                                                                                                                                                                                                                                                                                                          | `2022-07-03T03:20:30.000Z`                                                             |
| updatedAt          | string  | yes                                          | Function modification time                                                                                                                                                                                                                                                                                                                                                                                                      | `2022-07-03T03:20:30.000Z`                                                             |
| isAsynchronous     | boolean | yes                                          | Whether to execute asynchronously. Functions set to asynchronous execution will not block the execution of the entire process and are suitable for asynchronous notification scenarios, such as Feishu group notifications, DingTalk group notifications, etc.                                                                                                                                                                  |                                                                                        |
| timeout            | number  | yes                                          | Function running timeout, the shortest is 1 second, the longest is 60 seconds, and the default is 3 seconds.                                                                                                                                                                                                                                                                                                                    | `3`                                                                                    |
| terminateOnTimeout | boolean | yes                                          | If the function runs out of time, whether to terminate the entire process, the default is no.                                                                                                                                                                                                                                                                                                                                   |                                                                                        |
| sourceCode         | string  | yes                                          | Function source code                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                        |     | status | string | yes | Current status of the function: <br>- `uploading`: uploading<br>- `success`: upload successful<br>- `failed`: upload failed <br> | uploading |
| uploadErrMsg       | string  | no                                           | Error message for upload failure                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                        |
| enabled            | boolean | yes                                          | Whether this Pipeline is enabled                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                        |

```
async function pipe(user, context, callback) { |

const date = new Date();
const d = date.getDay();
const n = date.getHours();
// Registration is prohibited from 3-6 am every Sunday
if (d === 0 && (3 <= n && n <= 6)) {
return callback(new Error('The system is under maintenance, registration is temporarily suspended! '));
}
callback(null, user, context)
}
```
