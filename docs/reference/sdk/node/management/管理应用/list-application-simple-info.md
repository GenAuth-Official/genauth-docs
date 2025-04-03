# Get a list of simple application information

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get a list of simple application information

## Method name

`ManagementClient.listApplicationSimpleInfo`

## Request parameters

| Name           | Type    | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| -------------- | ------- | --------------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| page           | number  | No                                            | 1                                           | Current page number, starting from 1                     | `1`                                         |
| limit          | number  | No                                            | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |
| isIntegrateApp | boolean | No                                            | -                                           | Is it an integrated application?                         |                                             |
| isSelfBuiltApp | boolean | No                                            | -                                           | Is it a self-built application?                          |                                             |
| ssoEnabled     | boolean | No                                            | -                                           | Is single sign-on enabled?                               |                                             |
| keywords       | string  | No                                            | -                                           | Fuzzy search string                                      | `test`                                      |

## Sample code

```ts
import { ManagementClient, Models } from "@genauth/nodejs";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If it is a privately deployed customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.listApplicationSimpleInfo({
    page: 1,
    limit: 10,
    keywords: "test",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `ApplicationSimpleInfoPaginatedRespDto`

| Name       | Type                                                                                       | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                                                                     | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                                                                     | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#ApplicationSimpleInfoPaginatedDataDto">ApplicationSimpleInfoPaginatedDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "appId": "62eaa95fe0xxxx9a5295bf7c",
      "appIdentifier": "example",
      "appName": "Sample application",
      "appLogo": "Sample application",
      "appDescription": "Sample description information",
      "appType": "web"
    },
    "totalCount": 10
  }
}
```

## Data structure

### <a id="ApplicationSimpleInfoPaginatedDataDto"></a> ApplicationSimpleInfoPaginatedDataDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                               | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------- |
| list       | array  | Yes                                          | List data Nested type: <a href="#ApplicationSimpleInfoDto">ApplicationSimpleInfoDto</a>. |                                             |
| totalCount | number | Yes                                          | Total number of records                                                                  | `10`                                        |

### <a id="ApplicationSimpleInfoDto"></a> ApplicationSimpleInfoDto

| Name           | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------------- | ------- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| appId          | string  | Yes                                          | Application ID                             | `62eaa95fe0xxxx9a5295bf7c`                  |
| appIdentifier  | string  | yes                                          | Application unique identifier              | `example`                                   |
| appName        | string  | yes                                          | Application name                           | `Example application`                       |
| appLogo        | string  | yes                                          | Application logo link                      | `Example application`                       |
| appDescription | string  | no                                           | Application description                    | `Example description`                       |
| appType        | string  | yes                                          | Application type                           | web                                         |
| isIntegrateApp | boolean | yes                                          | Whether it is an integrated application    |                                             |
