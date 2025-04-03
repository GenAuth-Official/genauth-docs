# Modify data policy

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Modify the data policy and modify the data policy information through fields such as data policy name, data policy description, and related data resources.

## Method name

`ManagementClient.updateDataPolicy`

## Request parameters

| Name          | Type                                                                   | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                           | <div style="width:200px">Sample value</div> |
| ------------- | ---------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------- |
| policyId      | string                                                                 | Yes                                           | -                                           | Data policy ID                                                                       | `60b49xxxxxxxxxxxxxxx6e68`                  |
| policyName    | string                                                                 | No                                            | -                                           | Data policy name, unique to the user pool                                            | `Sample data policy name`                   |
| description   | string                                                                 | No                                            | -                                           | Data policy description                                                              | `Sample data policy description`            |
| statementList | <a href="#DataStatementPermissionDto">DataStatementPermissionDto[]</a> | No                                            | -                                           | Data permission list, all data permissions under each policy. Array length limit: 5. |                                             |

## Sample code

```ts
import { ManagementClient, Models } from "@genauth/nodejs";

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
  const result = await managementClient.updateDataPolicy({
    policyId: "60b49xxxxxxxxxxxxxxx6e68",
    policyName: "Sample data policy name",
    description: "Sample data policy description",
    statementList: [
      {
        effect: DataStatementPermissionDto.effect.ALLOW,
        permissions: ["namespaceCode/treeResourceCode/path/action"],
      },
    ],
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `UpdateDataPolicyResponseDto`

| Name       | Type                                                           | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                         | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                                         | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                                         | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#UpdateDataPolicyRespDto">UpdateDataPolicyRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "policyId": "60b49xxxxxxxxxxxxxxx6e68",
    "policyName": "Sample data policy name",
    "description": "Sample data policy description",
    "createdAt": "2022-07-03T03:20:30.000Z",
    "updatedAt": "2022-07-03T03:20:30.000Z"
  }
}
```

## Data structure

### <a id="DataStatementPermissionDto"></a> DataStatementPermissionDto

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                      | <div style="width:200px">Sample value</div>                                                                                         |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| effect      | string | Yes                                           | Data resource permission operation: ALLOW (allow)/DENY (deny)                   | DENY                                                                                                                                |
| permissions | array  | Yes                                           | Resource permission list, string data resource and array data resource, no path | `["namespaceCode/stringResourceCode/action","namespaceCode/arrayResourceCode/action","namespaceCode/treeResourceCode/path/action"]` |

### <a id="UpdateDataPolicyRespDto"></a> UpdateDataPolicyRespDto

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| policyId    | string | yes                                           | Data policy ID                             | `60b49xxxxxxxxxxxxxxx6e68`                  |
| policyName  | string | yes                                           | Data policy name, unique to the user pool  | `Sample data policy name`                   |
| description | string | no                                            | Data policy description                    | `Sample data policy description`            |
| createdAt   | string | yes                                           | Data policy creation time                  | `2022-07-03T03:20:30.000Z`                  |
| updatedAt   | string | yes                                           | Data policy update time                    | `2022-07-03T03:20:30.000Z`                  |
