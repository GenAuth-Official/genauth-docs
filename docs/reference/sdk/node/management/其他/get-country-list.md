# Get the country list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Dynamically get the country list, which can be used for front-end login page country selection and international SMS input box selection to reduce the size of front-end static resources.

## Method name

`ManagementClient.getCountryList`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

## Sample code

```ts
import { AuthenticationClient, Models } from "authing-node-sdk";

const authenticationClient = new AuthenticationClient({
  // Need to replace with your GenAuth AppId, Secret and Host
  appId: "GEN_AUTH_APP_ID",
  appSecret: "GEN_AUTH_APP_SECRET",
  appHost: "GEN_AUTH_APP_HOST",
});

(async () => {
  const result = await authenticationClient.getCountryList();

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `GetCountryListRespDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string | Request ID. It will be returned when the request fails.                                                      |
| data       | array  | response data                                                                                                |

Sample result:

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

## Data structure

### <a id="CountryDetailInfo"></a> CountryDetailInfo

| Name             | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                     | <div style="width:200px">Sample value</div>                                            |
| ---------------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| alpha2           | string | Yes                                           | Alpha-2 abbreviation of the country in [ISO 3166 international standard](https://www.iban.com/country-codes)                   | `CN`                                                                                   |
| alpha3           | string | Yes                                           | Alpha-3 abbreviation of the country in [ISO 3166 international standard](https://www.iban.com/country-codes)                   | `CHN`                                                                                  |
| phoneCountryCode | string | Yes                                           | Country mobile phone area code                                                                                                 | `+86`                                                                                  |
| flag             | string | Yes                                           | Flag icon                                                                                                                      | `🇨🇳`                                                                                   |
| name             |        | Yes                                           | Name, multi-language structure, currently only supports Chinese and English Nested type: <a href="#LangObject">LangObject</a>. | `{"zh-CN":{"enabled":false,"value":"中国"},"en-US":{"enabled":false,"value":"China"}}` |

### <a id="LangObject"></a> LangObject

| Name  | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                               | <div style="width:200px">Sample value</div> |
| ----- | ---- | -------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------- |
| zh-CN |      | Yes                                          | Multi-language Chinese content Nested type: <a href="#LangUnit">LangUnit</a>.            | `{"enabled":false,"value":"中文"}`          |
| en-US |      | Yes                                          | Multilingual English content Nesting type: <a href="#LangUnit">LangUnit</a>.             | `{"enabled":false,"value":"English"}`       |
| zh-TW |      | Yes                                          | Multilingual Traditional Chinese content Nesting type: <a href="#LangUnit">LangUnit</a>. | `{"enabled":false,"value":"繁體中文"}`      |
| ja-JP |      | Yes                                          | Multilingual Japanese content Nesting type: <a href="#LangUnit">LangUnit</a>.            | `{"enabled":false,"value":"日本語"}`        |

### <a id="LangUnit"></a> LangUnit

| Name    | Type    | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                | <div style="width:200px">Sample value</div> |
| ------- | ------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| enabled | boolean | yes                                    | Whether it is enabled. If enabled, and the console selects this language, the content will be displayed. (Off by default) |                                             |
| value   | string  | yes                                    | Multilingual content                                                                                                      |                                             |
