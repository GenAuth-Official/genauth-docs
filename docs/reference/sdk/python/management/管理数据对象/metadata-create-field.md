# Create fields for data objects

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to V3 API.

Create fields for related data objects, configure field information and basic validation rules

## Method name

`ManagementClient.create_field`

## Request parameters

| Name                  | Type                                           | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                   | <div style="width:200px">Sample value</div> |
| --------------------- | ---------------------------------------------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| userVisible           | boolean                                        | yes                                    | -                                           | Whether the user center is displayed, only meaningful in the user module:<br> - true: User center is displayed<br> - false: User center is not displayed<br> |                                             |
| relationOptionalRange | <a href="#Condition">Condition</a>             | yes                                    | -                                           | Optional range of related data                                                                                                                               |                                             |
| relationShowKey       | string                                         | yes                                    | -                                           | Attributes of related data to be displayed                                                                                                                   |                                             |
| relationMultiple      | boolean                                        | yes                                    | -                                           | Whether the relationship is 1-N:<br> - true: It is a 1-N relationship<br> - false: It is not a 1-N relationship<br>                                          |                                             |
| relationType          | string                                         | yes                                    | -                                           | Association type                                                                                                                                             |                                             |
| forLogin              | boolean                                        | yes                                    | -                                           | Whether it can be used for login, only meaningful in the user module:<br> - true: It is used for login<br> - false: It is not used for login<br>             |                                             |
| fuzzySearch           | boolean                                        | yes                                    | -                                           | Support fuzzy search:<br> - true: Support fuzzy search<br> - false: Do not support fuzzy search<br>                                                          |                                             |
| dropDown              | <a href="#DropDownItemDto">DropDownItemDto</a> | yes                                    | -                                           | Drop-down menu options                                                                                                                                       |                                             |
| format                | number                                         | yes                                    | -                                           | Front-end formatting display rules:                                                                                                                          | `                                           |

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

| regexp | string | yes | - | String validation matching rule | |
| min | number | yes | - | If the type is a number, it indicates the lower limit of the number; if the type is a date, it indicates the start date | |
| max | number | yes | - | If the type is a number, it indicates the upper limit of the number; if the type is a date, it indicates the end date | |
| maxLength | number | yes | - | String length limit | |
| unique | boolean | yes | - | Is it unique:<br> - true: unique<br> - false: not unique<br> | |
| require | boolean | yes | - | Required:<br> - true: Required<br> - false: Not required<br> | |
| default | object | yes | - | Default value | |
| help | string | yes | - | Help description | |
| editable | boolean | yes | - | Editable:<br> - true: Editable<br> - false: Not editable<br> | |
| show | boolean | yes | - | Display:<br> - true: Display<br> - false: Do not display<br> | |
| type | string | yes | - | Field type:<br> - 1: Single-line text<br> - 2: Multi-line text<br> - 3: Number<br> - 4: Boolean type<br> - 5: Date<br> - 6: Enumeration<br> - 7: Association type<br> - 8: Reverse association data display<br> | |
| key | string | yes | - | field attribute name | |
| name | string | yes | - | field name | |
| modelId | string | yes | - | feature id | |

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

### <a id="DropDownItemDto"></a> DropDownItemDto

| Name  | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| key   | string | Yes                                           | Option id                                  |                                             |
| label | string | Yes                                           | Option name                                |                                             |

### <a id="Condition"></a> Condition

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| key      | string | Yes                                           | The key of the search field                                                                                                                                                                                               |                                             |
| value    | object | Yes                                           | Search value                                                                                                                                                                                                              |                                             |
| operator | string | yes                                           | Operation type:<br> - eq: equal to<br> - ne: not equal to<br> - co: contains<br> - gt: greater than<br> - lt: less than<br> - lte: less than or equal to<br> - gte: greater than or equal to<br> - in: array contains<br> |                                             |

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
- 37: Percentages
- 38: Percentages with decimals
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
| relationType | string | yes | properties of the related data to be displayed | |
| relationMultiple | boolean | yes | whether the related relationship is 1-N:<br> - true: it is a 1-N relationship<br> - false: it is not a 1-N relationship<br> | |
| relationShowKey | string | yes | properties of the related data to be displayed | |
| relationOptionalRange | | yes | optional range of related data nested type: <a href="#RelationOptionalRange">RelationOptionalRange</a>. | |
| userVisible | boolean | yes | whether the user center is displayed, which is only meaningful in the user module:<br> - true: the user center is displayed<br> - false: the user center is not displayed<br> | |

### <a id="RelationOptionalRange"></a> RelationOptionalRange

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                            | <div style="width:200px">Sample value</div> |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------- |
| conjunction | string | Yes                                           | The relationship between multiple search conditions: <br> - and: and<br> - or: or<br> |                                             |
| conditions  |        | Yes                                           | Search condition nested type: <a href="#Condition">Condition</a>.                     |                                             |

### <a id="Condition"></a> Condition

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                         | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| key      | string | Yes                                           | The key of the search field                                                                                                                                                                                                        |                                             |
| value    | object | Yes                                           | The search value                                                                                                                                                                                                                   |                                             |
| operator | string | Yes                                           | Operation type: <br> - eq: equal to <br> - ne: not equal to <br> - co: contains <br> - gt: greater than <br> - lt: less than <br> - lte: less than or equal to <br> - gte: greater than or equal to <br> - in: array contains <br> |                                             |
