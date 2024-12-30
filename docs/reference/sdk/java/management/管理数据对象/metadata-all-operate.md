# List of all operations management

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

List of all operations management

## Method Name

`ManagementClient.listOperateAll`

## Request Parameters

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| modelId | string | yes                                          | -                                           | model Id                                   |                                              |

## Request Response

Type: `OperateModelDto`

| Name        | Type    | Description                                                                                                           |
| ----------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| id          | string  | operation id                                                                                                          |
| userPoolId  | string  | user pool id                                                                                                          |
| modelId     | string  | function id                                                                                                           |
| operateName | string  | operation name                                                                                                        |
| operateKey  | string  | operation method key                                                                                                  |
| show        | boolean | whether to display:<br> - true: display<br> - false: do not display<br>                                               |
| isDefault   | boolean | whether it is the default operation:<br> - true is the default operation<br> - false is not the default operation<br> |
| createdAt   | string  | creation time                                                                                                         |
| updatedAt   | string  | update time                                                                                                           |

Example Results：

```json
{}
```

## Data Structure
