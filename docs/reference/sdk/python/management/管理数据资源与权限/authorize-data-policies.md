# Authorization data policy

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Data policy creates subject authorization, and mutual authorization is performed through authorization subject and data policy.

## Method name

`ManagementClient.authorize_data_policies`

## Request parameters

| Name       | Type                                   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                   | <div style="width:200px">Sample value</div>            |
| ---------- | -------------------------------------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| targetList | <a href="#SubjectDto">SubjectDto[]</a> | Yes                                    | -                                           | Data permission list, all data permissions under each policy |                                                        |
| policyIds  | string[]                               | Yes                                    | -                                           | Data policy id list Array length limit: 50.                  | `["6301cexxxxxxxxxx27478","63123cexxxxxxxxxx2123101"]` |

## Request Response

Type: `CommonResponseDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## Data Structure

### <a id="SubjectDto"></a> SubjectDto

| Name | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                           | <div style="width:200px">Sample value</div> |
| ---- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------- |
| id   | string | Yes                                           | Subject ID, including user ID, user group ID, role ID, and organization ID           | `6301cexxxxxxxxxxxxxxxxx78`                 |
| type | string | Yes                                           | Subject type, including USER, GROUP, ROLE, and ORG                                   | USER                                        |
| name | string | No                                            | Subject name, including user name, user group name, role name, and organization name | `User name`                                 |
