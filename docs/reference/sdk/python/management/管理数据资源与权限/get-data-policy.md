# Get data policy details

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get data policy details, get the corresponding data policy information through the data policy ID, including data policy ID, data policy name, data policy description, all data permission lists under the data policy, etc.

## Method name

`ManagementClient.get_data_policy`

## Request parameters

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| policyId | string | Yes                                           | -                                           | Data policy ID                             | `60b49xxxxxxxxxxxxxxx6e68`                  |

## Request Response

Type: `GetDataPolicyResponseDto`

| Name       | Type                                                     | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                   | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#GetDataPolicyRespDto">GetDataPolicyRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
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

## Data Structure

### <a id="GetDataPolicyRespDto"></a> GetDataPolicyRespDto

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| policyId    | string | Yes                                           | Data policy ID                             | `60b49xxxxxxxxxxxxxxx6e68`                  |
| policyName  | string | Yes                                           | Data policy name, unique to the user pool  | `Sample data policy name`                   |
| description | string | No                                            | Data policy description                    | `Sample data policy description`            |
| createdAt   | string | Yes                                           | Data policy creation time                  | `2022-07-03T03:20:30.000Z`                  |
| updatedAt   | string | Yes                                           | Data policy update time                    | `2022-07-03T03:20:30.000Z`                  |
