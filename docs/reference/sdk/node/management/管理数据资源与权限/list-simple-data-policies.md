# Get a list of data policy brief information

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to V3 API.

Get a list of data policy brief information in pages, and use keywords to search for data policy name or data policy Code to fuzzy find data policy ID, data policy name and data policy description information.

## Method name

`ManagementClient.listSimpleDataPolices`

## Request parameters

| Name  | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Example value</div> |
| ----- | ------ | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | -------------------------------------------- |
| page  | number | No                                     | 1                                           | Current page number, starting from 1                     | `1`                                          |
| limit | number | No                                     | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                         |
| query | string | No                                     | -                                           | Data policy name keyword search                          | `examplePolicyName`                          |

## Sample code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If it is a private deployment customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.listSimpleDataPolices({
    page: 1,
    limit: 10,
    query: "examplePolicyName",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `ListSimpleDataPoliciesPaginatedRespDto`

| Name       | Type                                                                                 | Description                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                               | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                |
| message    | string                                                                               | Description                                                                                                                                                                                                                                                                                                                                 |
| apiCode    | number                                                                               | Segmented error code, which can be used to get the specific error type (no return for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                |
| data       | <a href="#DataPoliciesSimplePaginatedRespDto">DataPoliciesSimplePaginatedRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                               |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 20,
    "list": {
      "policyId": "60b49xxxxxxxxxxxxxxx6e68",
      "policyName": "Sample data policy name",
      "description": "Sample data policy description"
    }
  }
}
```

## Data structure

### <a id="DataPoliciesSimplePaginatedRespDto"></a> DataPoliciesSimplePaginatedRespDto

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------# Get a list of data policy brief information

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to V3 API.

Get a list of data policy brief information in pages, and use keywords to search for data policy name or data policy Code to fuzzy find data policy ID, data policy name and data policy description information.

## Method name

`ManagementClient.listSimpleDataPolices`

## Request parameters

| Name  | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Example value</div> |
| ----- | ------ | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | -------------------------------------------- |
| page  | number | No                                     | 1                                           | Current page number, starting from 1                     | `1`                                          |
| limit | number | No                                     | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                         |
| query | string | No                                     | -                                           | Data policy name keyword search                          | `examplePolicyName`                          |

## Sample code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If it is a private deployment customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.listSimpleDataPolices({
    page: 1,
    limit: 10,
    query: "examplePolicyName",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `ListSimpleDataPoliciesPaginatedRespDto`

| Name       | Type                                                                                 | Description                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                               | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                |
| message    | string                                                                               | Description                                                                                                                                                                                                                                                                                                                                 |
| apiCode    | number                                                                               | Segmented error code, which can be used to get the specific error type (no return for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                |
| data       | <a href="#DataPoliciesSimplePaginatedRespDto">DataPoliciesSimplePaginatedRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                               |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 20,
    "list": {
      "policyId": "60b49xxxxxxxxxxxxxxx6e68",
      "policyName": "Sample data policy name",
      "description": "Sample data policy description"
    }
  }
}
```

## Data structure

### <a id="DataPoliciesSimplePaginatedRespDto"></a> DataPoliciesSimplePaginatedRespDto

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
