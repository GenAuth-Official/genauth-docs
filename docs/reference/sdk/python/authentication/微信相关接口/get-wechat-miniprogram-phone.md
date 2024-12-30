# Get the phone number of the mini program

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

## Method name

`AuthenticationClient.get_wechat_miniprogram_phone`

## Request parameters

| Name                 | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                            | <div style="width:200px"></div>Sample value</div> |
| -------------------- | ------ | -------------------------------------- | ------------- | --------------------------------------------------------------------- | ------------------------------------------------- |
| code                 | string | Yes                                    | -             | `code` returned by `open-type=getphonecode` interface                 |                                                   |
| extIdpConnidentifier | string | Yes                                    | -             | External identity source connection identifier of WeChat mini program | `my-wxapp`                                        |

## Request response

Type: `GetWechatMiniProgramPhoneRespDto`

| Name       | Type                                                                             | Description                                                                                                  |
| ---------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                           | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string                                                                           | Description                                                                                                  |
| apiCode    | number                                                                           | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                                           | Request ID. It will be returned when the request fails.                                                      |
| data       | <a href="#GetWechatMiniProgramPhoneDataDto">GetWechatMiniProgramPhoneDataDto</a> | Response data                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "phoneNumber": "+86188xxxx8888",
    "purePhoneNumber": "188xxxx8888",
    "countryCode": "86"
  }
}
```

## Data structure

### <a id="GetWechatMiniProgramPhoneDataDto"></a> GetWechatMiniProgramPhoneDataDto

| Name            | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| --------------- | ------ | -------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| phoneNumber     | string | yes                                    | Phone number with area code                | `+86188xxxx8888`                            |
| purePhoneNumber | string | yes                                    | Phone number without area code             | `188xxxx8888`                               |
| countryCode     | string | yes                                    | Area code                                  | `86`                                        |
