# Operation Management List (Pagination)

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Operation management list (pagination)

## Method name

`ManagementClient.list_operate`

## Request parameters

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| modelId  | string | Yes                                          | -                                           | model Id                                                 |                                             |
| keywords | string | No                                           | -                                           | Search function name                                     |                                             |
| page     | number | No                                           | 1                                           | Current page number, starting from 1                     | `1`                                         |
| limit    | number | No                                           | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |

## Request Response

Type: `OperateModelDto`

| Name        | Type    | Description                                                                                                           |
| ----------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| id          | string  | Operation id                                                                                                          |
| userPoolId  | string  | User pool id                                                                                                          |
| modelId     | string  | Function id                                                                                                           |
| operateName | string  | Operation name                                                                                                        |
| operateKey  | string  | Operation method key                                                                                                  |
| show        | boolean | Whether to display:<br> - true: Display<br> - false: Do not display<br>                                               |
| isDefault   | boolean | Whether it is the default operation:<br> - true is the default operation<br> - fasle is not the default operation<br> |
| createdAt   | string  | Creation time                                                                                                         |
| updatedAt   | string  | Update time                                                                                                           |

Example results:

```json
{}
```

## Data Structure
