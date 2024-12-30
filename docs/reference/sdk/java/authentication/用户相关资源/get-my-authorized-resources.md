# Get the list of authorized resources

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

This interface is used to obtain the list of resources authorized by the user.

## Method Name

`AuthenticationClient.getAuthorizedResources`

## Request Parameters

| Name         | Type   | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div>                                                               | <div style="width:200px"></div>Example Value</div> |
| ------------ | ------ | -------------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| namespace    | string | No                                           | -             | The code of the permission group (permission space). Do not pass to obtain the default permission group. | `default`                                          |
| resourceType | string | No                                           | -             | Resource type, such as data, API, menu, button                                                           |                                                    |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.AuthorizedResourcePaginatedRespDto;
import cn.authing.sdk.java.dto.GetMyAuthorizedResourcesDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetAuthorizedResourcesTest {
    // Need to be replaced with your GenAuth App ID
    private static final String APP_ID = "AUTHING_APP_ID";
    // Need to be replaced with your GenAuth App Secret
    private static final String APP_SECRET = "AUTHING_APP_SECRET";
    // Need to be replaced with your GenAuth App Host
    private static final String APP_HOST = "AUTHING_APP_HOST";
    // Need to be replaced with your GenAuth Access Token
    private static final String ACCESS_TOKEN = "AUTHING_ACCESS_TOKEN";

    public static void main(String[] args) throws Throwable {
        AuthenticationClientOptions clientOptions = new AuthenticationClientOptions();
        clientOptions.setAppId(APP_ID);
        clientOptions.setAppSecret(APP_SECRET);
        clientOptions.setAppHost(APP_HOST);
        clientOptions.setAccessToken(ACCESS_TOKEN);

        AuthenticationClient client = new AuthenticationClient(clientOptions);

        AuthorizedResourcePaginatedRespDto response = client.getAuthorizedResources(new GetMyAuthorizedResourcesDto());
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type: `AuthorizedResourcePaginatedRespDto`

| Name       | Type                                                                   | Description                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                 | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                     |
| message    | string                                                                 | Description                                                                                                                                                                                                                                                                                                                                 |
| apiCode    | number                                                                 | Segment error code, through which you can get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                |
| data       | <a href="#AuthorizedResourcePagingDto">AuthorizedResourcePagingDto</a> | Response Data                                                                                                                                                                                                                                                                                                                               |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "resourceCode": "ecs:1",
      "description": "server",
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
}
```

## Data Structure

### <a id="AuthorizedResourcePagingDto"></a> AuthorizedResourcePagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                            | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | Yes                                          | Total number of records                                                               |                                              |
| list       | array  | Yes                                          | Response Data NestedType: <a href="#AuthorizedResourceDto">AuthorizedResourceDto</a>. |                                              |

### <a id="AuthorizedResourceDto"></a> AuthorizedResourceDto

| Name         | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                    | <div style="width:200px">Example Value</div> |
| ------------ | ------ | -------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------- | --- | ------------ | ------ | --- | ------------- | ---- | --- | ------------- | ------ | --- | ------- | ----------------- | --- | ------- | ----- | --- | ---------------------- | -------------------------- | --- | ------ | ------ | --- | ------------- | ----- | ------------------------------------------------ | ---- | ---- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- | --- | -------- | ------ | ---------------------------------------- | ---------------------------------- | ---------------------------------------- | --- | ----- | ------ | --- | --------------- | ---------- | --- | -------- | ------ | --- | ------------------ | ---- | --- | ----- | ------ | --- | --------------- | --- |
| resourceCode | string | Yes                                          | Resource descriptor                                                           | `ecs:1`                                      |
| description  | string | No                                           | Resource description information                                              | `Server`                                     |
| condition    | array  | No                                           | Policy Condition Nested Type: <a href="#PolicyCondition">PolicyCondition</a>. |                                              |     | resourceType | string | Yes | resource type | DATA |     | apiIdentifier | string | Yes | API URL | `/api/v1/example` |     | actions | array | Yes | Authorized action list | `["ecs:Start","ecs:Stop"]` |     | effect | string | Yes | Allow or deny | ALLOW | ### <a id="PolicyCondition"></a> PolicyCondition | Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |     | -------- | ------ | ---------------------------------------- | ---------------------------------- | ---------------------------------------- |     | param | string | Yes | Condition Param | UserPoolId |     | operator | string | Yes | Condition Operator | Bool |     | value | string | Yes | Condition Value | `1` |
