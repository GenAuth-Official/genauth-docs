# Get the list of external identity sources enabled by the application

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get the list of external identity sources enabled by the application, and the front end can render the external identity source button based on this.

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------- | ------------------------------------------ | -------------------------------------------------- |

## Request Response

Type: `GetExtIdpsRespDto`

| Name       | Type   | Description                                                                                                             |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code. You can use this status code to determine whether the operation is successful. 200 means success. |
| message    | string | Description                                                                                                             |
| apiCode    | number | This error code is used to get the specific error type.                                                                 |
| requestId  | string | Request ID. Returned when the request fails.                                                                            |
| data       | array  | List of external identity sources                                                                                       |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "identifier": "wechat"
  }
}
```

## Data Structure

### <a id="ExtIdpInfoDto"></a> ExtIdpInfoDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>   | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| identifier | string | Yes                                          | Identity source connection unique identifier | `wechat`                                     |
| extIdpId   | string | Yes                                          | Identity source ID                           |                                              |
| type       | string | Yes                                          | Identity source type                         | oidc                                         |
| extIdpType | string | Yes                                          | Authentication type                          | social                                       |
| bindUrl    | string | Yes                                          | Authentication address                       |                                              |
| name       | string | Yes                                          | Identity source display name                 |                                              |
| name_en    | string | No                                           | Identity source display name (English)       |                                              |
| desc       | string | No                                           | Description                                  |                                              |
| desc_en    | string | No                                           | Description in English                       |                                              |
| logo       | string | No                                           | Icon                                         |                                              |
