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

## Method name

`ManagementClient.listDataPolicyTargets`

## Request parameters

| Name       | Type     | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| ---------- | -------- | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| policyId   | string   | yes                                    | -                                           | Data policy ID                                           | `60b49xxxxxxxxxxxxxxx6e68`                  |
| page       | number   | no                                     | 1                                           | Current page number, starting from 1                     | `1`                                         |
| limit      | number   | no                                     | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |
| query      | string   | no                                     | -                                           | Subject name                                             | `Example 1`                                 |
| targetType | string[] | No                                     | -                                           | Subject type, including USER, GROUP, ROLE, and ORG       | `[0]`                                       |

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
  const result = await managementClient.listDataPolicyTargets({
    policyId: "60b49xxxxxxxxxxxxxxx6e68",
    page: 1,
    limit: 10,
    query: "Subject Name",
    targetType: ["USER"],
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request Response

Type: `ListDataPolicySubjectPaginatedRespDto`

| Name       | Type                                                                     | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                   | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                                   | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                                   | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#ListDataPolicySubjectPageDto">ListDataPolicySubjectPageDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

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

## Data structure

### <a id="ListDataPolicySubjectPageDto"></a> ListDataPolicySubjectPageDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                        | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | No                                           | Total number of records                                                           | `20`                                        |
| list       | array  | Yes                                          | Response data Nested type: <a href="#DataSubjectRespDto">DataSubjectRespDto</a>。 |                                             |

### <a id="DataSubjectRespDto"></a> DataSubjectRespDto

| Name              | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                       | <div style="width:200px">Sample value</div> |
| ----------------- | ------ | --------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------- |
| targetIdentifier  | string | Yes                                           | Subject ID, including user ID, user group ID, role ID, organization ID           | `6301cexxxxxxxxxxxxxxxxx78`                 |
| targetType        | string | Yes                                           | Subject type, including USER, GROUP, ROLE, ORG                                   | USER                                        |
| targetName        | string | Yes                                           | Subject name, including user name, user group name, role name, organization name | `test`                                      |
| authorizationTime | string | yes                                           | Subject object authorization time                                                | `2022-07-03T03:20:30.000Z`                  |
