# Update the fields of the data object

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Update the field information and basic validation rules of the relevant data object

## Method name

`ManagementClient.update_field`

## Request parameters

| Name                  | Type                                                       | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                   | <div style="width:200px">Sample value</div> |
| --------------------- | ---------------------------------------------------------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| userVisible           | boolean                                                    | yes                                    | -                                           | Whether the user center is displayed, only meaningful in the user module:<br> - true: User center is displayed<br> - false: User center is not displayed<br> |                                             |
| relationOptionalRange | <a href="#RelationOptionalRange">RelationOptionalRange</a> | yes                                    | -                                           | Optional range of related data                                                                                                                               |                                             |
| relationShowKey       | string                                                     | yes                                    | -                                           | Attributes of related data to be displayed                                                                                                                   |                                             |
| forLogin              | boolean                                                    | yes                                    | -                                           | Whether it can be used for login, only meaningful in the user module:<br> - true: Used for login<br> - false: Not used for login<br>                         |                                             |
| fuzzySearch           | boolean                                                    | yes                                    | -                                           | Whether fuzzy search is supported:<br> - true: Support fuzzy search<br> - false: Do not support fuzzy search<br>                                             |                                             |
| dropDown              | string[]                                                   | yes                                    | -                                           | Drop-down menu options                                                                                                                                       |                                             |
| format                | number                                                     | yes                                    | -                                           | Front-end formatting rules                                                                                                                                   | `                                           |

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

| regexp | string | yes | - | Verification matching rules for strings | |
| min | number | yes | - | If the type is a number, it indicates the lower limit of the number; if the type is a date, it indicates the start date | |
| max | number | yes | - | If the type is a number, it indicates the upper limit of the number; if the type is a date, it indicates the end date | |
| maxLength | number | yes | - | String length limit | |
| unique | boolean | yes | - | Is it unique:<br> - true: unique<br> - false: not unique<br> | |
| require | boolean | yes | - | Is it required:<br> - true: required<br> - false: not required<br> | |
| default | object | yes | - | Default value | |
| help | string | yes | - | Help | |
| editable | boolean | yes | - | Is it editable:<br> - true: editable<br> - false: not editable<br> | |
| show | boolean | yes | - | Display:<br> - true: Display<br> - false: Do not display<br> | |
| name | string | yes | - | Field name | |
| modelId | string | yes | - | Function id | |
| id | string | yes | - | Field id | |

## Request Response

Type: `FunctionModelFieldResDto`

| Name       | Type                                                       | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                                     | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                                     | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#FunctionModelFieldDto">FunctionModelFieldDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "format": "\n - 0: Original data\n - 31: Keep one decimal place\n - 32: Keep two decimal places\n - 33: Keep three decimal places\n - 34: Keep four decimal places\n - 35: Thousands\n - 36: Thousands with decimals\n - 37: Percentage\n - 38: Percentage with decimals\n - 50: 'YYYY/MM/DD/ HH:mm:ss'\n - 51: 'YYYY/MM/DD'\n - 52: 'YYYY/MM/DDHH:mm'\n - 53: 'YYYY-MM-DD'\n - 54: 'YYYY-MM-DDHH:mm'\n - 55: 'MM-DD'\n - 56: 'MM/DD/YYYY'\n - 57: 'DD/MM/YYYY'\n ",
    "relationOptionalRange": { "conditions": {} }
  }
}
```

## Data Structure

### <a id="RelationOptionalRange"></a> RelationOptionalRange

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                              | <div style="width:200px">Sample value</div> |
| ----------- | ------ | --------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------- |
| conjunction | string | Yes                                           | The relationship between multiple search conditions: <br> - and: and <br> - or: or <br> |                                             |
| conditions  |        | Yes                                           | Search condition nesting type: <a href="#Condition">Condition</a>.                      |                                             |

### <a id="Condition"></a> Condition

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| key      | string | Yes                                           | The key of the search field                                                                                                                                                                                               |                                             |
| value    | object | Yes                                           | The search value                                                                                                                                                                                                          |                                             |
| operator | string | Yes                                           | Operation type:<br> - eq: equal to<br> - ne: not equal to<br> - co: contains<br> - gt: greater than<br> - lt: less than<br> - lte: less than or equal to<br> - gte: greater than or equal to<br> - in: array contains<br> |                                             |

### <a id="FunctionModelFieldDto"></a> FunctionModelFieldDto

| Name      | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                 | <div style="width:200px">Sample value</div> |
| --------- | ------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| id        | string  | Yes                                           | Field id                                                                                                                                                                                                   |                                             |
| modelId   | string  | Yes                                           | Function id                                                                                                                                                                                                |                                             |
| name      | string  | Yes                                           | Field name                                                                                                                                                                                                 |                                             |
| key       | string  | Yes                                           | Field attribute name                                                                                                                                                                                       |                                             |
| type      | number  | Yes                                           | Field type:<br> - 1: Single line text<br> - 2: Multi-line text<br> - 3: Number<br> - 4: Boolean<br> - 5: Date<br> - 6: Enumeration<br> - 7: Association type<br> - 8: Reverse association data display<br> |                                             |
| show      | boolean | yes                                           | Display or not:<br> - true: Display<br> - false: Do not display<br>                                                                                                                                        |                                             |
| editable  | boolean | yes                                           | Editable or not:<br> - true: Editable<br> - false: Not editable<br>                                                                                                                                        |                                             |
| help      | string  | yes                                           | Help description                                                                                                                                                                                           |                                             |
| default   | string  | yes                                           | Default value                                                                                                                                                                                              |                                             |
| require   | boolean | yes                                           | Required or not:<br> - true: Required<br> - false: Not required<br>                                                                                                                                        |                                             |
| unique    | boolean | yes                                           | Unique or not:<br> - true: Unique<br> - false: Not unique<br>                                                                                                                                              |                                             |
| maxLength | number  | yes                                           | String length limit                                                                                                                                                                                        |                                             |
| max       | number  | yes                                           | If the type is a number, it indicates the upper limit of the number; if the type is a date, it indicates the end date                                                                                      |                                             |
| min       | number  | yes                                           | If the type is a number, it indicates the lower limit of the number; if the type is a date, it indicates the start date                                                                                    |                                             |
| regexp    | string  | yes                                           | String validation matching rules                                                                                                                                                                           |                                             |
| format    | number  | yes                                           | Front-end formatting display rules:                                                                                                                                                                        | `                                           |

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

| dropDown | number | yes | Drop-down menu options | |
| relationType | string | yes | Attributes to display for the associated data | |
| relationMultiple | boolean | yes | Whether the associated relationship is 1-N:<br> - true: It is a 1-N relationship<br> - false: It is not a 1-N relationship<br> | |
| relationShowKey | string | Yes | The attribute of the related data to be displayed | |
| relationOptionalRange | | Yes | The optional range of the related data Nested type: <a href="#RelationOptionalRange">RelationOptionalRange</a>. | |
| userVisible | boolean | Yes | Whether the user center is displayed, which is only meaningful in the user module:<br> - true: The user center is displayed<br> - false: The user center is not displayed<br> | |

### <a id="RelationOptionalRange"></a> RelationOptionalRange

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                     | <div style="width:200px">Sample value</div> |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------- |
| conjunction | string | Yes                                           | Relationship of multiple search conditions: <br> - and: and <br> - or: or <br> |                                             |
| conditions  |        | Yes                                           | Search condition nested type: <a href="#Condition">Condition</a>.              |                                             |

### <a id="Condition"></a> Condition

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| key      | string | Yes                                           | The key of the search field                                                                                                                                                                                               |                                             |
| value    | object | Yes                                           | The search value                                                                                                                                                                                                          |                                             |
| operator | string | Yes                                           | Operation type:<br> - eq: equal to<br> - ne: not equal to<br> - co: contains<br> - gt: greater than<br> - lt: less than<br> - lte: less than or equal to<br> - gte: greater than or equal to<br> - in: array contains<br> |                                             |
