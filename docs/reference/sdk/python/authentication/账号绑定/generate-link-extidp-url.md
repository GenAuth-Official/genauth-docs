# Generate a link to bind an external identity source

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

This interface is used to generate a link to bind an external identity source, and after generation, it can guide users to jump.

## Method name

`AuthenticationClient.generate_link_ext_idp_url`

## Request parameters

| Name                    | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>            | <div style="width:200px"></div>Sample value</div> |
| ----------------------- | ------ | -------------------------------------- | ------------- | ----------------------------------------------------- | ------------------------------------------------- |
| ext_idp_conn_identifier | string | Yes                                    | -             | External identity source connection unique identifier | `my-wechat`                                       |
| app_id                  | string | Yes                                    | -             | GenAuth application ID                                |                                                   |
| id_token                | string | Yes                                    | -             | User's id_token                                       |                                                   |

## Request response

Type: `GenerateBindExtIdpLinkRespDto`

| Name       | Type                                                                       | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                                     | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                                     | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#GenerateBindExtIdpLinkDataDto">GenerateBindExtIdpLinkDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {}
}
```

## Data structure

### <a id="GenerateBindExtIdpLinkDataDto"></a> GenerateBindExtIdpLinkDataDto

| Name | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                  | <div style="width:200px">Sample value</div> |
| ---- | ------ | -------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------- |
| url  | string | yes                                          | URL of the external identity source to which the user binds |                                             |
