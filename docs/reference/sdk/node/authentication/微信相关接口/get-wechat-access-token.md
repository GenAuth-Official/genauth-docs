# Get WeChat Mini Program, Official Account Access Token

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the WeChat Mini Program and Official Account Access Token cached by the GenAuth server (obsolete, please use /api/v3/get-wechat-access-token-info)

## Method name

`AuthenticationClient.getWechatMpAccessToken`

## Request parameters

| Name      | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                  | <div style="width:200px"></div>Sample value</div> |
| --------- | ------ | -------------------------------------- | ------------- | ----------------------------------------------------------- | ------------------------------------------------- |
| appSecret | string | Yes                                    | -             | AppSecret of WeChat Mini Program or WeChat Official Account |                                                   |
| appId     | string | Yes                                    | -             | AppId of WeChat Mini Program or WeChat Official Account     |                                                   |

## Sample code

```ts
import { AuthenticationClient, Models } from "authing-node-sdk";

const authenticationClient = new AuthenticationClient({
  // Need to be replaced with your GenAuth AppId, Secret and Host
  appId: "GEN_AUTH_APP_ID",
  appSecret: "GEN_AUTH_APP_SECRET",
  appHost: "GEN_AUTH_APP_HOST",
});

(async () => {
  const result = await authenticationClient.getWechatMpAccessToken({
    appId: "xxxx",
    appSecret: "xxxx",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `GetWechatAccessTokenRespDto`

| Name       | Type                                                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                                 | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                                 | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#GetWechatAccessTokenDataDto">GetWechatAccessTokenDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

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
| accessToken | string | Yes                                          | WeChat Access Token cached by the GenAuth server        |                                             |
| expiresAt   | string | Yes                                          | Access Token expiration time, as a timestamp in seconds |                                             |
