# Get the data policy list

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Query the data policy list by page, or search the data policy name or data policy code by keyword for fuzzy search.

## Method name

`ManagementClient.listDataPolices`

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
  const result = await managementClient.listDataPolices({
    page: 1,
    limit: 10,
    query: "examplePolicyName",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `ListDataPoliciesPaginatedRespDto`

| Name       | Type                                                                     | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                                   | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                                   | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#DataPoliciesPaginatedRespDto">DataPoliciesPaginatedRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 20,
    "list": {
      "policyName": "Sample data policy name",
      "description": "Sample data policy description",
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

## Data structure

### <a id="DataPoliciesPaginatedRespDto"></a> DataPoliciesPaginatedRespDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                 | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------- |
| totalCount | number | yes                                          | Total number of records                                                                    | `20`                                        |
| list       | array  | yes                                          | Response data Nested type: <a href="#ListDataPoliciesRespDto">ListDataPoliciesRespDto</a>. |                                             |

### <a id="ListDataPoliciesRespDto"></a> ListDataPoliciesRespDto

| Name         | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                            | <div style="width:200px">Sample value</div> |
| ------------ | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| policyName   | string | yes                                          | Data policy name, unique to the user pool                                                                                                                             | `Sample data policy name`                   |
| description  | string | no                                           | Data policy description                                                                                                                                               | `Sample data policy description`            |
| resourceList | array  | yes                                          | Data permission list, all data resource IDs and names under each policy Nested type: <a href="#DataResourceSimpleRespDto">DataResourceSimpleRespDto</a>.              |                                             |
| policyId     | string | yes                                          | Data policy ID                                                                                                                                                        | `60b49xxxxxxxxxxxxxxx6e68`                  |
| targetList   | array  | yes                                          | Subject object list, including all subject objects under the data policy, including USER, GROUP, ROLE, ORG Nested type: <a href="#SubjectRespDto">SubjectRespDto</a>. |                                             |
| updatedAt    | string | yes                                          | Data policy update time                                                                                                                                               | `2022-07-03T03:20:30.000Z`                  |

### <a id="DataResourceSimpleRespDto"></a> DataResourceSimpleRespDto

| Name         | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>              | <div style="width:200px">Sample value</div> |
| ------------ | ------ | --------------------------------------------- | ------------------------------------------------------- | ------------------------------------------- |
| resourceId   | string | yes                                           | Data resource ID to which the data permission belongs   | `6301cexxxxxxxxx27478`                      |
| resourceName | string | yes                                           | Data resource name to which the data permission belongs | `Resource1`                                 |

### <a id="SubjectRespDto"></a> SubjectRespDto

| Name | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                       | <div style="width:200px">Sample value</div> |
| ---- | ------ | --------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------- |
| id   | string | Yes                                           | Subject ID, including user ID, user group ID, role ID, organization ID           | `6301cexxxxxxxxxxxxxxxxx78`                 |
| type | string | Yes                                           | Subject type, including USER, GROUP, ROLE, ORG                                   | USER                                        |
| name | string | Yes                                           | Subject name, including user name, user group name, role name, organization name | `test`                                      |
