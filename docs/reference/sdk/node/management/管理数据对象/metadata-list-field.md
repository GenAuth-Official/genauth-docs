# Get the data object field list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the list of data object fields

## Method name

`ManagementClient.listField`

## Request parameters

| Name    | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| modelId | string | Yes                                    | -                                           | Function id                                |                                             |

## Request response

Type: `FunctionFieldListResDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                   |
| message    | string | description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | array  | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "format": "\n - 0: Original data\n - 31: Keep one decimal place\n - 32: Keep two decimal places\n - 33: Keep three decimal places\n - 34: Keep four decimal places\n - 35: Thousands\n - 36: Thousands with decimals\n - 37: Percentage\n - 38: Percentage with decimals\n - 50: 'YYYY/MM/DD/ HH:mm:ss'\n - 51: 'YYYY/MM/DD'\n - 52: 'YYYY/MM/DDHH:mm'\n - 53: 'YYYY-MM-DD'\n - 54: 'YYYY-MM-DDHH:mm'\n - 55: 'MM-DD'\n - 56: 'MM/DD/YYYY'\n - 57: 'DD/MM/YYYY'\n ",
    "relationOptionalRange": {
      "conditions": {}
    }
  }
}
```

## Data structure

### <a id="FunctionModelFieldDto"></a> FunctionModelFieldDto

| Name      | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                      | <div style="width:200px">Sample value</div> |
| --------- | ------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| id        | string  | yes                                          | field id                                                                                                                                                                                                        |                                             |
| modelId   | string  | yes                                          | function id                                                                                                                                                                                                     |                                             |
| name      | string  | yes                                          | field name                                                                                                                                                                                                      |                                             |
| key       | string  | yes                                          | field attribute name                                                                                                                                                                                            |                                             |
| type      | number  | yes                                          | field type:<br> - 1: single line text<br> - 2: multi-line text<br> - 3: number<br> - 4: boolean type<br> - 5: date<br> - 6: enumeration<br> - 7: association type<br> - 8: reverse association data display<br> |                                             |
| show      | boolean | yes                                          | whether to display:<br> - true: display<br> - false: do not display<br>                                                                                                                                         |                                             |
| editable  | boolean | yes                                          | whether to edit:<br> - true: editable<br> - false: cannot be edited<br>                                                                                                                                         |                                             |
| help      | string  | yes                                          | help description                                                                                                                                                                                                |                                             |
| default   | string  | yes                                          | default value                                                                                                                                                                                                   |                                             |
| require   | boolean | yes                                          | required:<br> - true: required<br> - false: not required<br>                                                                                                                                                    |                                             |
| unique    | boolean | yes                                          | unique:<br> - true: unique<br> - false: not unique<br>                                                                                                                                                          |                                             |
| maxLength | number  | yes                                          | string length limit                                                                                                                                                                                             |                                             |
| max       | number  | yes                                          | if the type is a number, it indicates the upper limit of the number; if the type is a date, it indicates the end date                                                                                           |                                             |
| min       | number  | yes                                          | if the type is a number, it indicates the lower limit of the number; if the type is a date, it indicates the start date                                                                                         |                                             |
| regexp    | string  | yes                                          | string validation matching rules                                                                                                                                                                                |                                             |
| format    | number  | yes                                          | front-end formatting display rules:                                                                                                                                                                             | `                                           |

- 0: original data
- 31: keep one decimal place
- 32: 2 decimal places
- 33: 3 decimal places
- 34: 4 decimal places
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
  ` |
  | dropDown | number | yes | dropdown menu options | |
  | relationType | string | Yes | Attributes to be displayed for the associated data | |
  | relationMultiple | boolean | Yes | Is the associated relationship 1-N:<br> - true: It is a 1-N relationship<br> - false: It is not a 1-N relationship<br> | |
  | relationShowKey | string | Yes | Attributes to be displayed for the associated data | |
  | relationOptionalRange | | Yes | Optional range of associated data Nested type: <a href="#RelationOptionalRange">RelationOptionalRange</a>. | |
  | userVisible | boolean | yes | Whether the user center is displayed, only meaningful in the user module:<br> - true: User center is displayed<br> - false: User center is not displayed<br> | |

### <a id="RelationOptionalRange"></a> RelationOptionalRange

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                  | <div style="width:200px">Sample value</div> |
| ----------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------- |
| conjunction | string | yes                                          | Relationship of multiple search conditions:<br> - and: and<br> - or: or<br> |                                             |
| conditions  |        | yes                                          | Search condition nested type: <a href="#Condition">Condition</a>.           |                                             |

### <a id="Condition"></a> Condition

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                         | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| key      | string | Yes                                           | The key of the search field                                                                                                                                                                                                        |                                             |
| value    | object | Yes                                           | The search value                                                                                                                                                                                                                   |                                             |
| operator | string | Yes                                           | Operation type: <br> - eq: equal to <br> - ne: not equal to <br> - co: contains <br> - gt: greater than <br> - lt: less than <br> - lte: less than or equal to <br> - gte: greater than or equal to <br> - in: array contains <br> |                                             |
