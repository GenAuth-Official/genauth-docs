# Get the list of data object fields

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get a list of data object fields

## Method Name

`ManagementClient.listField`

## Request Parameters

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| modelId | string | yes                                          | -                                           | feature id                                 |                                              |

## Request Response

Type： `FunctionFieldListResDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | array  | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "format": "\n - 0: Original data\n - 31: Keep one decimal place\n - 32: Keep two decimal places\n - 33: Keep three decimal places\n - 34: Keep four decimal places\n - 35: Thousands\n - 36: Thousands with decimals\n - 37: Percentage\n - 38: Percentage with decimals\n - 50: 'YYYY/MM/DD/ HH:mm:ss'\n - 51: 'YYYY/MM/DD'\n - 52: 'YYYY/MM/DDHH:mm'\n - 53: 'YYYY-MM-DD'\n - 54: 'YYYY-MM-DDHH:mm'\n - 55: 'MM-DD'\n - 56: 'MM/DD/YYYY'\n - 57: 'DD/MM/YYYY'\n    ",
    "relationOptionalRange": {
      "conditions": {}
    }
  }
}
```

## Data Structure

### <a id="FunctionModelFieldDto"></a> FunctionModelFieldDto

| Name                  | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                      | <div style="width:200px">Example Value</div> |
| --------------------- | ------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| id                    | string  | yes                                          | Field id                                                                                                                                                                                                        |                                              |
| modelId               | string  | yes                                          | Function id                                                                                                                                                                                                     |                                              |
| name                  | string  | yes                                          | Field Name                                                                                                                                                                                                      |                                              |
| key                   | string  | yes                                          | Field attribute name                                                                                                                                                                                            |                                              |
| type                  | number  | yes                                          | Field type:<br> - 1: Single-line text<br> - 2: Multi-line text<br> - 3: Number<br> - 4: Boolean type<br> - 5: Date<br> - 6: Enumeration<br> - 7: Association type<br> - 8: Reverse association data display<br> |                                              |
| show                  | boolean | yes                                          | Whether to display:<br> - true: Display<br> - false: Do not display<br>                                                                                                                                         |                                              |
| editable              | boolean | yes                                          | Whether editable:<br> - true: Editable<br> - false: Not editable<br>                                                                                                                                            |                                              |
| help                  | string  | yes                                          | Help                                                                                                                                                                                                            |                                              |
| default               | string  | Yes                                          | Default value                                                                                                                                                                                                   |                                              |
| require               | boolean | Yes                                          | Is it required:<br> - true: Required<br> - false: Not required<br>                                                                                                                                              |                                              |
| unique                | boolean | Yes                                          | Is it unique:<br> - true: Unique<br> - false: Not unique<br>                                                                                                                                                    |                                              |
| maxLength             | number  | Yes                                          | String length limit                                                                                                                                                                                             |                                              |
| max                   | number  | Yes                                          | If the type is a number, it indicates the upper limit of the number; if the type is a date, it indicates the end date                                                                                           |                                              |
| min                   | number  | Yes                                          | If the type is a number, it indicates the lower limit of the number; if the type is a date, it indicates the start date                                                                                         |                                              |
| regexp                | string  | Yes                                          | String validation matching rules                                                                                                                                                                                |                                              |
| format                | number  | Yes                                          | Front-end formatting display rules:                                                                                                                                                                             |                                              |
| dropDown              | number  | yes                                          | drop-down menu options                                                                                                                                                                                          |                                              |
| relationType          | string  | yes                                          | properties of the related data to be displayed                                                                                                                                                                  |                                              |
| relationMultiple      | boolean | yes                                          | whether the related relationship is 1-N:<br> - true: it is a 1-N relationship<br> - false: it is not a 1-N relationship<br>                                                                                     |                                              |
| relationShowKey       | string  | yes                                          | properties of the related data to be displayed                                                                                                                                                                  |                                              |
| relationOptionalRange |         | yes                                          | optional range of related data nested type: <a href="#RelationOptionalRange">RelationOptionalRange</a>.                                                                                                         |                                              |
| userVisible           | boolean | yes                                          | whether the user center is displayed, which is only meaningful in the user module:<br> - true: the user center is displayed<br> - false: the user center is not displayed<br>                                   |                                              |

format:

```
    - 0: Original data
    - 31: Keep one decimal place
    - 32: Keep two decimal places
    - 33: Keep three decimal places
    - 34: Keep four decimal places
    - 35: Thousands
    - 36: Thousands with decimals
    - 37: Percentage
    - 38: Percentage with decimals
    - 50: 'YYYY/MM/DD/ HH:mm:ss'
    - 51: 'YYYY/MM/DD'
    - 52: 'YYYY/MM/DDHH:mm'
    - 53: 'YYYY-MM-DD'
    - 54: 'YYYY-MM-DDHH:mm'
    - 55: 'MM-DD'
    - 56: 'MM/DD/YYYY'
    - 57: 'DD/MM/YYYY'
```

### <a id="RelationOptionalRange"></a> RelationOptionalRange

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                              | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------- |
| conjunction | string | is                                           | The relationship between multiple search conditions: <br> - and: and <br> - or: or <br> |                                              |
| conditions  |        | is                                           | Search condition Nested Type：<a href="#Condition">Condition</a>。                      |                                              |

### <a id="Condition"></a> Condition

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| key      | string | is                                           | the key of the search field                                                                                                                                                                                               |                                              |
| value    | object | is                                           | the search value                                                                                                                                                                                                          |                                              |
| operator | string | is                                           | operation type:<br> - eq: equal to<br> - ne: not equal to<br> - co: contains<br> - gt: greater than<br> - lt: less than<br> - lte: less than or equal to<br> - gte: greater than or equal to<br> - in: array contains<br> |                                              |
