# Create departments in batches based on the organization tree

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Create departments in batches according to the organization tree. If the department name does not exist, it will be created automatically.

## Method name

`ManagementClient.createDepartmentTree`

## Request parameters

| Name     | Type                                   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------- | -------------------------------------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| name     | string                                 | yes                                    | -                                           | Department name                            | `R&D`                                       |
| children | string[]                               | no                                     | -                                           | Sub-department                             |                                             |
| members  | <a href="#UserInfoDto">UserInfoDto</a> | no                                     | -                                           | Department members                         |                                             |
| tenantId | string                                 | no                                     | -                                           | Tenant ID                                  | `623c20b2a062aaaaf41b17da`                  |

## Request response

Type: `CreateDepartmentTreeRespDto`

| Name       | Type                         | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                       | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                       | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#Result">Result</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {}
}
```

## Data structure

### <a id="UserInfoDto"></a> UserInfoDto

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                       | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| username         | string | No                                           | Username, unique in the user pool                                                                                                                                                                                                                                                                                                                                                | `bob`                                       |
| email            | string | No                                           | Email address, case-insensitive                                                                                                                                                                                                                                                                                                                                                  | `test@example.com`                          |
| phone            | string | No                                           | Phone number without area code. If it is an international phone number, please specify the area code in the phoneCountryCode parameter.                                                                                                                                                                                                                                          | `188xxxx8888`                               |
| phoneCountryCode | string | No                                           | Phone area code. This parameter is optional for phone numbers in mainland China. The GenAuth SMS service does not currently support international phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes. | `+86`                                       |
| name             | string | No                                           | User's real name, not unique                                                                                                                                                                                                                                                                                                                                                     | `Zhang San`                                 |
| gender           | string | No                                           | Gender                                                                                                                                                                                                                                                                                                                                                                           | M                                           |
| country          | string | No                                           | Country                                                                                                                                                                                                                                                                                                                                                                          | `CN`                                        |
| province         | string | No                                           | Province                                                                                                                                                                                                                                                                                                                                                                         | `BJ`                                        |
| city             | string | No                                           | City                                                                                                                                                                                                                                                                                                                                                                             | `BJ`                                        |

### <a id="Result"></a> Result

| Name             | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| addUser          | number | Yes                                           | Number of new users                        |                                             |
| updateUser       | number | Yes                                           | Number of updated users                    |                                             |
| addDepartment    | number | Yes                                           | Number of new departments                  |                                             |
| updateDepartment | number | yes                                           | Update department number                   |                                             |
