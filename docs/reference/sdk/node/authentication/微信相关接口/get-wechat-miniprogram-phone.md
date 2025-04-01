# Get the phone number of the mini program

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

## Method name

`AuthenticationClient.getWechatMiniprogramPhone`

## Request parameters

| Name                 | Type   | <div style="width:80px">Is it required</div> | Default value | <div style="width:300px">Description</div>                         | <div style="width:200px"></div>Example value</div> |
| -------------------- | ------ | -------------------------------------------- | ------------- | ------------------------------------------------------------------ | -------------------------------------------------- |
| code                 | string | Yes                                          | -             | `code` returned by `open-type=getphonecode` interface              |                                                    |
| extIdpConnidentifier | string | Yes                                          | -             | WeChat Mini Program External Identity Source Connection Identifier | `my-wxapp`                                         |

## Sample code

```ts
import { AuthenticationClient, Models } from "@genauth/nodejs";

const authenticationClient = new AuthenticationClient({
  // Need to be replaced with your GenAuth AppId, Secret and Host
  appId: "GEN_AUTH_APP_ID",
  appSecret: "GEN_AUTH_APP_SECRET",
  appHost: "GEN_AUTH_APP_HOST",
});

(async () => {
  const result = await authenticationClient.getWechatMiniprogramPhone({
    extIdpConnidentifier: "my-wxapp",
    code: "xxxx",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `GetWechatMiniProgramPhoneRespDto`

| Name       | Type                                                                             | Description                                                                                                  |
| ---------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                           | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                                           | Description                                                                                                  |
| apiCode    | number                                                                           | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                                           | Request ID. Returned when the request fails.                                                                 |
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
