# Get a bound MFA authentication factor

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get the details of a user-bound MFA Factor based on the Factor ID.

## Method name

`ManagementClient.getFactor`

## Request parameters

| Name     | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| factorId | string | Yes                                    | -                                           | MFA Factor ID                              | `6229ffaxxxxxxxxcade3e3d9`                  |

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
  // Please call the login interface to get access_token first, and call the setAccessToken method to set access_token
  authenticationClient.setAccessToken("REPLACE_ME_WITH_REAL_ACCESS_TOKEN");

  const result = await authenticationClient.getFactor({
    factorId: "635391f4xxxxxx6bba26ed4|email",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `GetFactorRespDto`

| Name       | Type                               | Description                                                                                                      |
| ---------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| statusCode | number                             | Business status code, which can be used to determine whether the operation is successful, 200 Indicates success. |
| message    | string                             | Description                                                                                                      |
| apiCode    | number                             | Segmented error code, which can be used to get the specific error type.                                          |
| requestId  | string                             | Request ID. Returned when the request fails.                                                                     |
| data       | <a href="#FactorDto">FactorDto</a> | MFA Factor details                                                                                               |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "factorId": "6229ffaxxxxxxxxcade3e3d9",
    "factorType": "SMS",
    "profile": {
      "phoneNumber": "188xxxx8888",
      "phoneCountryCode": "+86"
    }
  }
}
```

## Data structure

### <a id="FactorDto"></a> FactorDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div>              |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------------------- |
| factorId   | string | yes                                          | MFA authentication factor ID               | `6229ffaxxxxxxxxcade3e3d9`                               |
| factorType | string | yes                                          | MFA authentication factor type             | OTP                                                      |
| profile    | object | yes                                          | MFA authentication factor information      | `{"phoneNumber":"188xxxx8888","phoneCountryCode":"+86"}` |
