# Decrypt WeChat applet data

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Decrypt WeChat Mini Program Data

## Method Name

`AuthenticationClient.decryptWechatMiniProgramData`

## Request Parameters

| Name                 | Type   | <div style="width:80px">Required</div> | Default Value | <div style="width:300px">Description</div>                               | <div style="width:200px"></div>Sample Value</div> |
| -------------------- | ------ | -------------------------------------- | ------------- | ------------------------------------------------------------------------ | ------------------------------------------------- |
| code                 | string | Yes                                    | -             | User `code` returned by `wx.login` interface                             |                                                   |
| iv                   | string | Yes                                    | -             | Symmetric decryption algorithm initialization vector, returned by WeChat |                                                   |
| encryptedData        | string | Yes                                    | -             | Get the encrypted data (encryptedData) returned by WeChat open data      |                                                   |
| extIdpConnidentifier | string | Yes                                    | -             | External identity source connection identifier of WeChat Mini Program    | `my-wxapp`                                        |

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
  const result = await authenticationClient.decryptWechatMiniProgramData({
    extIdpConnidentifier: "my-wxapp",
    encryptedData: "xxxxxx",
    iv: "xxxxxx",
    code: "xxxxxx",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `DecryptWechatMiniProgramDataRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | object | response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "nickName": "xxxx",
    "gender": 1,
    "language": "zh_CN",
    "city": "Guangzhou",
    "province": "Guangdong",
    "country": "CN",
    "avatarUrl": "http://wx.qlogo.cn/mmopen/vi_32/aSKcBBPpibyKNicHNTMM0qJVh8Kjgiak2AHWr8MHM4WgMEm7GFhsf8OYrySdbvAMvTsw3mo8ibKicsnfN5pRjl1p8HQ/0",
    "unionId": "ocMvos6NjeKLIBqg5Mr9QjxrP1FA",
    "watermark": {
      "timestamp": 1477314187,
      "appid": "wx4f4bc4dec97d474b"
    }
  }
}
```

## Data structure
