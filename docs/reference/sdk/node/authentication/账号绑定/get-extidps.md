# Get the list of external identity sources enabled by the application

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get the list of external identity sources enabled by the application, and the front end can render the external identity source button based on this.

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |

## Request response

Type: `GetExtIdpsRespDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string | Request ID. It will be returned when the request fails.                                                      |
| data       | array  | External identity source list                                                                                |

Sample result:

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

## Data structure

### <a id="ExtIdpInfoDto"></a> ExtIdpInfoDto

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>   | <div style="width:200px">Sample value</div> |
| ---------- | ------ | --------------------------------------------- | -------------------------------------------- | ------------------------------------------- |
| identifier | string | Yes                                           | Identity source connection unique identifier | `wechat`                                    |
| extIdpId   | string | yes                                           | Identity source ID                           |                                             |
| type       | string | yes                                           | Identity source type                         | oidc                                        |
| extIdpType | string | yes                                           | Authentication type                          | social                                      |
| bindUrl    | string | yes                                           | Authentication URL                           |                                             |
| name       | string | yes                                           | Identity source display name                 |                                             |
| name_en    | string | no                                            | Identity source display name (English)       |                                             |
| desc       | string | no                                            | Description                                  |                                             |
| desc_en    | string | no                                            | Description in English                       |                                             |
| logo       | string | no                                            | Icon                                         |                                             |
