# Update the fields of the data object

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Update the field information and basic validation rules of related data objects

## Method name

`ManagementClient.updateField`

## Request parameters

| Name                  | Type                                                       | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                   | <div style="width:200px">Sample value</div> |
| --------------------- | ---------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| userVisible           | boolean                                                    | yes                                          | -                                           | Whether the user center is displayed, only meaningful in the user module:<br> - true: User center is displayed<br> - false: User center is not displayed<br> |                                             |
| relationOptionalRange | <a href="#RelationOptionalRange">RelationOptionalRange</a> | yes                                          | -                                           | Optional range of related data                                                                                                                               |                                             |
| relationShowKey       | string                                                     | yes                                          | -                                           | Attributes to be displayed for related data                                                                                                                  |                                             |
| forLogin              | boolean                                                    | yes                                          | -                                           | Whether it can be used for login, only meaningful in the user module:<br> - true: used for login<br> - false: not used for login<br>                         |                                             |
| fuzzySearch           | boolean                                                    | yes                                          | -                                           | Whether to support fuzzy search:<br> - true: support fuzzy search<br> - false: do not support fuzzy search<br>                                               |                                             |
| dropDown              | string[]                                                   | yes                                          | -                                           | drop-down menu options                                                                                                                                       |                                             |
| format                | number                                                     | yes                                          | -                                           | front-end formatting rules                                                                                                                                   | `                                           |

- 0: original data
- 31: keep one decimal place
- 32: keep two decimal places
- 33: keep three decimal places
- 34: keep four decimal places
- 35: thousandths
- 36: thousandths with decimals
- 37: percentage
- 38: percentage with decimals
- 50: 'YYYY/MM/DD/ HH:mm:ss'
- 51: 'YYYY/MM/DD'
- 52: 'YYYY/MM/DDHH:mm'
- 53: 'YYYY-MM-DD'
- 54: 'YYYY-MM-DDHH:mm'
- 55: 'MM-DD'
- 56: 'MM/DD/YYYY'
- 57: 'DD/MM/YYYY'
  ` |
  | regexp | string | yes | - | String validation matching rule | |
  | min | number | yes | - | If the type is a number, it indicates the lower limit of the number; if the type is a date, it indicates the start date | |
  | max | number | yes | - | If the type is a number, it indicates the upper limit of the number; if the type is a date, it indicates the end date | |
  | maxLength | number | yes | - | String length limit | |
  | unique | boolean | yes | - | Is it unique:<br> - true: unique<br> - false: not unique<br> | |
  | require | boolean | yes | - | Is it required:<br> - true: required<br> - false: not required<br> | |
  | default | object | yes | - | Default value | |
  | help | string | yes | - | Help description | |
  | editable | boolean | yes | - | Is it editable:<br> - true: editable<br> - false: not editable<br> | |
  | show | boolean | yes | - | Is it displayed:<br> - true: display<br> - false: not display<br> | |
  | name | string | yes | - | Field name | |
  | modelId | string | yes | - | Function id | |
  | id | string | yes | - | Field id | |

## Request response

Type: `FunctionModelFieldResDto`

| Name       | Type                                                       | Description                                                                                                                                                                                                                                                                                                                                |
| ---------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                     | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                               |
| message    | string                                                     | Description                                                                                                                                                                                                                                                                                                                                |
| apiCode    | number                                                     | Segment error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                               |
| data       | <a href="#FunctionModelFieldDto">FunctionModelFieldDto</a> | Response data                                                                                                                                                                                                                                                                                                                              |

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

### <a id="RelationOptionalRange"></a> RelationOptionalRange

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                       | <div style="width:200px">Example value</div> |
| ----------- | ------ | --------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------- |
| conjunction | string | is                                            | The relationship of multiple search conditions: <br> - and: and<br> - or: or<br> |                                              |
| conditions  |        | is                                            | Search condition Nesting type: <a href="#Condition">Condition</a>.               |                                              |

### <a id="Condition"></a> Condition

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                         | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| key      | string | Yes                                           | The key of the search field                                                                                                                                                                                                        |                                             |
| value    | object | Yes                                           | The search value                                                                                                                                                                                                                   |                                             |
| operator | string | Yes                                           | Operation type: <br> - eq: equal to <br> - ne: not equal to <br> - co: contains <br> - gt: greater than <br> - lt: less than <br> - lte: less than or equal to <br> - gte: greater than or equal to <br> - in: array contains <br> |                                             |

### <a id="FunctionModelFieldDto"></a> FunctionModelFieldDto

| Name      | Type     | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                      | <div style="width:200px">Sample value</div> |
| --------- | -------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| id        | string   | Yes                                           | Field id                                                                                                                                                                                                        |                                             |
| modelId   | string   | Yes                                           | Function id                                                                                                                                                                                                     |                                             |
| name      | string   | Yes                                           | Field name                                                                                                                                                                                                      |                                             |
| key       | string   | Yes                                           | Field attribute name                                                                                                                                                                                            |                                             |
| type      | number   | Yes                                           | Field type:<br> - 1: Single-line text<br> - 2: Multi-line text<br> - 3: Number<br> - 4: Boolean type<br> - 5: Date<br> - 6: Enumeration<br> - 7: Association type<br> - 8: Reverse association data display<br> |                                             |
| show      | boolean  | Yes                                           | Whether to display:<br> - true: display<br> - false: do not display<br>                                                                                                                                         |                                             |
| editable  | boolean  | yes                                           | Whether editable:<br> - true: editable<br> - false: not editable<br>                                                                                                                                            |                                             |
| help      | string   | yes                                           | help description                                                                                                                                                                                                |                                             |
| default   | string   | yes                                           | default value                                                                                                                                                                                                   |                                             |
| require   | booleann | yes                                           | Required or not:<br> - true: Required<br> - false: Not required<br>                                                                                                                                             |                                             |
| unique    | boolean  | yes                                           | Unique or not:<br> - true: Unique<br> - false: Not unique<br>                                                                                                                                                   |                                             |
| maxLength | number   | yes                                           | String length limit                                                                                                                                                                                             |                                             |
| max       | number   | yes                                           | If the type is a number, it indicates the upper limit of the number; if the type is a date, it indicates the end date                                                                                           |                                             |
| min       | number   | yes                                           | If the type is a number, it indicates the lower limit of the number; if the type is a date, it indicates the start date                                                                                         |                                             |
| regexp    | string   | yes                                           | String validation matching rules                                                                                                                                                                                |                                             |
| format    | number   | yes                                           | Front-end formatting display rules:                                                                                                                                                                             | `                                           |

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
  ` |
  | dropDown | number | yes | drop-down menu options | |
  | relationType | string | yes | properties of the associated data to be displayed | |
  | relationMultiple | boolean | yes | whether the associated relationship is 1-N:<br> - true: yes 1-N relationship<br> - false: Not a 1-N relationship<br> | |
  | relationShowKey | string | Yes | Attributes of the related data to be displayed | |
  | relationOptionalRange | | Yes | Optional range of related data Nested type: <a href="#RelationOptionalRange">RelationOptionalRange</a>. | |
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
