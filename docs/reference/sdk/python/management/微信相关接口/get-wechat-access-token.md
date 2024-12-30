# Get WeChat Mini Program, Official Account Access Token

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get WeChat Mini Program, Official Account Access Token cached by GenAuth server

## Method name

`ManagementClient.get_wechat_mp_access_token`

## Request parameters

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| --------- | ------ | -------------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| appSecret | string | Yes                                          | -                                           | WeChat Mini Program or WeChat Official Account AppSecret |                                             |
| appId     | string | yes                                          | -                                           | AppId of WeChat Mini Program or WeChat Official Account  |                                             |

## Request Response

Type: `GetWechatAccessTokenRespDto`

| Name       | Type                                                                   | Description                                                                                                  |
| ---------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                 | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string                                                                 | Description                                                                                                  |
| apiCode    | number                                                                 | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                                 | Request ID. It will be returned when the request fails.                                                      |
| data       | <a href="#GetWechatAccessTokenDataDto">GetWechatAccessTokenDataDto</a> | Response data                                                                                                |

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

### <a id="GetWechatAccessTokenDataDto"></a> GetWechatAccessTokenDataDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>              | <div style="width:200px">Sample value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------------------- | ------------------------------------------- |
| accessToken | string | yes                                          | WeChat Access Token cached by the GenAuth server        |                                             |
| expiresAt   | number | yes                                          | Access Token expiration time, as a timestamp in seconds |                                             |
