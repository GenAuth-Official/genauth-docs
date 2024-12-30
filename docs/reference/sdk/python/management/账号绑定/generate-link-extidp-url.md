# Generate a link to bind an external identity source

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This interface is used to generate a link to bind an external identity source, and after generation, it can guide users to jump.

## Method name

`ManagementClient.generate_link_ext_idp_url`

## Request parameters

| Name                    | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>            | <div style="width:200px">Sample value</div> |
| ----------------------- | ------ | -------------------------------------------- | ------------------------------------------- | ----------------------------------------------------- | ------------------------------------------- |
| ext_idp_conn_identifier | string | Yes                                          | -                                           | External identity source connection unique identifier | `my-wechat`                                 |
| app_id                  | string | Yes                                          | -                                           | GenAuth application ID                                |                                             |
| id_token                | string | Yes                                          | -                                           | User's id_token                                       |                                             |

## Request Response

Type: `GenerateBindExtIdpLinkRespDto`

| Name       | Type                                                                       | Description                                                                                                  |
| ---------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                                     | Description                                                                                                  |
| apiCode    | number                                                                     | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                                     | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#GenerateBindExtIdpLinkDataDto">GenerateBindExtIdpLinkDataDto</a> | Response data                                                                                                |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {}
}
```

## Data Structure

### <a id="GenerateBindExtIdpLinkDataDto"></a> GenerateBindExtIdpLinkDataDto

| Name | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>            | <div style="width:200px">Example value</div> |
| ---- | ------ | -------------------------------------------- | ----------------------------------------------------- | -------------------------------------------- |
| url  | string | yes                                          | URL of the external identity source bound by the user |                                              |
