# Generate a QR code for login

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Generate a QR code for login. Currently, it supports the generation of QR codes for WeChat public account scan code login, mini program scan code login, and self-built mobile APP scan code login.

## Method name

`AuthenticationClient.gene_qr_code`

## Request parameters

| Name            | Type    | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                               | <div style="width:200px"></div>Sample value</div> |
| --------------- | ------- | -------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| type            | string  | Yes                                    | -             | QR code type. Currently supports three types: <br>- `MOBILE_APP`: Scan the QR code with a self-built mobile APP<br>- `WECHAT_MINIPROGRAM`: Scan the QR code with a WeChat applet<br>- `WECHAT_OFFICIAL_ACCOUNT` Scan the QR code with a WeChat public account                                                                                                                            | `MOBILE_APP`                                      |
| extIdpConnId    | string  | No                                     | -             | When `type` is `WECHAT_MINIPROGRAM` or `WECHAT_OFFICIAL_ACCOUNT`, you can specify the identity source connection, otherwise the first corresponding identity source connection opened by the application is used by default to generate the QR code.                                                                                                                                     | `62eb7ed1f04xxxxc6955b329`                        |
| customData      | object  | No                                     | -             | When `type` is `MOBILE_APP`, you can pass the user's custom data. When the user successfully scans the QR code for authorization, this data will be stored in the user's custom data.                                                                                                                                                                                                    | `{"school":"hust"}`                               |
| context         | object  | No                                     | -             | When type is `WECHAT_OFFICIAL_ACCOUNT` or `WECHAT_MINIPROGRAM`, specify a custom pipeline context, which will be passed in the pipeline context                                                                                                                                                                                                                                          | `{"source":"utm"}`                                |
| autoMergeQrCode | boolean | No                                     | -             | When type is `WECHAT_MINIPROGRAM`, whether to automatically merge the custom logo into the generated image, the default value is false. The process of merging QR codes on the server will increase the interface response speed. It is recommended to use the default value and stitch the images on the client. If you use the GenAuth SDK, you can save the manual stitching process. |                                                   |

## Request response

Type: `GeneQRCodeRespDto`

| Name       | Type                                               | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                             | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                             | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#GeneQRCodeDataDto">GeneQRCodeDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example result:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "qrcodeId": "gQE-8TwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyMGJjX",
    "url": "https://files.authing.co/user-contentsqrcode/59f86b4832eb28071bdd9214/gQE-8TwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyMGJjX1ZhOFNiM1UxV29GVTF5MWMAAgQY4_RiAwSAxhMA.png",
    "customLogoUrl": "https://files.authing.co/authing-console/social-connections/wechatMiniLogin.svg"
  }
}
```

## Data structure

### <a id="GeneQRCodeDataDto"></a> GeneQRCodeDataDto

| Name          | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                 | <div style="width:200px">Sample value</div>                                                                                                                                  |
| ------------- | ------ | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| qrcodeId      | string | Yes                                           | The unique ID of the QR code. The QR code status can be queried through this unique ID.                                                                                                                                    | `gQE-8TwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyMGJjX`                                                                                                                  |
| url           | string | Yes                                           | The QR code URL. The front end can render the QR code based on this link.                                                                                                                                                  | `https://files.authing.co/user-contentsqrcode/59f86b4832eb28071bdd9214/gQE-8TwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyMGJjX1ZhOFNiM1UxV29GVTF5MWMAAgQY4_RiAwSAxhMA.png` |
| customLogoUrl | string | No                                            | If the mini program scan code login is used and the request parameter autoMergeQrCode is set to false, the configured custom logo will be returned, and the front end can stitch this logo onto the QR code URL by itself. | `https://files.authing.co/authing-console/social-connections/wechatMiniLogin.svg`                                                                                            |
