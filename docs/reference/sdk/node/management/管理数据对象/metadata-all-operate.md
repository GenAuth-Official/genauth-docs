# List of all operation management

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

List of all operation management

## Method name

`ManagementClient.listOperateAll`

## Request parameters

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| modelId | string | Yes                                          | -                                           | model Id                                   |                                             |

## Request response

Type: `OperateModelDto`

| Name        | Type    | Description                                                                                                           |
| ----------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| id          | string  | Operation id                                                                                                          |
| userPoolId  | string  | User pool id                                                                                                          |
| modelId     | string  | Function id                                                                                                           |
| operateName | string  | Operation name                                                                                                        |
| operateKey  | string  | Operation method key                                                                                                  |
| show        | boolean | Whether to display:<br> - true: display<br> - false: do not display<br>                                               |
| isDefault   | boolean | Whether it is the default operation:<br> - true is the default operation<br> - false is not the default operation<br> |
| createdAt   | string  | creation time                                                                                                         |
| updatedAt   | string  | update time                                                                                                           |

Sample result:

```json
{}
```

## Data structure
