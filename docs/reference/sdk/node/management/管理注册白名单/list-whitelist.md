# Get the registration whitelist

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the registered whitelist list, you can select the number of pages and paging size to get it

## Method name

`ManagementClient.listWhitelists`

## Request parameters

| Name | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| type | string | Yes                                          | -                                           | Whitelist type                             | `EMAIL`                                     |

## Request response

Type: `WhitelistListRespDto`

| Name       | Type                                             | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                           | Business status code, you can use this status code to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                        |
| message    | string                                           | description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                           | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#WhitelistRespDto">WhitelistRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "value": "User",
    "createdAt": "65589653369"
  }
}
```

## Data structure

### <a id="WhitelistRespDto"></a> WhitelistRespDto

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| --------- | ------ | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| value     | string | yes                                          | data                                       | `User`                                      |
| createdAt | string | yes                                          | creation time                              | `65589653369`                               |
