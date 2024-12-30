# Get a list of countries

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Dynamically obtain the country list, which can be used for front-end login page country selection and international SMS input box selection to reduce the size of front-end static resources.

## Method Name

`ManagementClient.getCountryList`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

## Request Response

Type： `GetCountryListRespDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string | Request ID. It will be returned when the request fails.                                                      |
| data       | array  | Response data                                                                                                |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "alpha2": "CN",
    "alpha3": "CHN",
    "phoneCountryCode": "+86",
    "flag": "🇨🇳",
    "name": {
      "zh-CN": {
        "enabled": false,
        "value": "中国"
      },
      "en-US": {
        "enabled": false,
        "value": "China"
      }
    }
  }
}
```

## Data Structure

### <a id="CountryDetailInfo"></a> CountryDetailInfo

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                     | <div style="width:200px">Example Value</div>                                          |
| ---------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| alpha2           | string | Yes                                          | Alpha-2 abbreviation of the country in [ISO 3166 international standard](https://www.iban.com/country-codes)                   | `CN`                                                                                  |
| alpha3           | string | Yes                                          | Alpha-3 abbreviation of the country in [ISO 3166 international standard](https://www.iban.com/country-codes)                   | `CHN`                                                                                 |
| phoneCountryCode | string | Yes                                          | Country mobile phone area code                                                                                                 | `+86`                                                                                 |
| flag             | string | Yes                                          | Flag icon                                                                                                                      | `🇨🇳`                                                                                  |
| name             |        | Yes                                          | Name, multi-language structure, currently only supports Chinese and English nested Type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中国"},"en-US":{"enabled":false,"value":"中国"}}` |

### <a id="LangObject"></a> LangObject

| Name  | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                              | <div style="width:200px">Example Value</div> |
| ----- | ---- | -------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------- |
| zh-CN |      | Yes                                          | Multilingual Chinese content Nested Type: <a href="#LangUnit">LangUnit</a>.             | `{"enabled":false,"value":"中文"}`           |
| en-US |      | Yes                                          | Multilingual English content Nested Type: <a href="#LangUnit">LangUnit</a>.             | `{"enabled":false,"value":"English"}`        |
| zh-TW |      | Yes                                          | Multilingual Traditional Chinese content Nested Type: <a href="#LangUnit">LangUnit</a>. | `{"enabled":false,"value":"繁體中文"}`       |
| ja-JP |      | Yes                                          | Multilingual Japanese content Nested Type: <a href="#LangUnit">LangUnit</a>.            | `{"enabled":false,"value":"日本語"}`         |

### <a id="LangUnit"></a> LangUnit

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                    | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| enabled | boolean | Yes                                          | Yes Whether it is enabled. If enabled, and the console selects this language, the content will be displayed. (Default is off) |                                              |
| value   | string  | Yes                                          | Multilingual content                                                                                                          |                                              |
