# Get the user MFA trigger data under the application

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get the user MFA trigger data under the application

## Method name

`ManagementClient.getMfaTriggerData`

## Request parameters

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| appId      | string | Yes                                          | -                                           | Application ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `6229ffaxxxxxxxxcade3e3d9`                  |
| userId     | string | Yes                                          | -                                           | User ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `6229ffaxxxxxxxxcade3e3d9`                  |
| userIdType | string | No                                           | user_id                                     | User ID type, the default value is `user_id`, the optional values ​​are:<br>- `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`<br>- `phone`: User phone number<br>- `email`: User email<br>- `username`: User name<br>- `external_id`: User ID in the external system, corresponding to the `externalId` field of the GenAuth user information<br>- `identity`: User's external identity source information, in the format of `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, and `<userIdInIdp>` is the ID of the user in the external identity source. <br>Example value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`. <br> | `user_id`                                   |

## Sample code

```ts
import { ManagementClient, Models } from "@genauth/nodejs";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If it is a private deployment customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.getMfaTriggerData({
    appId: "6433c0xxxxxxxxx9021b2cec",
    userId: "64071dxxxxxxxxx6b910d6ef",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `GetMapInfoRespDto`

| Name       | Type                                         | Description                                                                                                  |
| ---------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                       | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string                                       | Description                                                                                                  |
| apiCode    | number                                       | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                       | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#MfaTriggerData">MfaTriggerData</a> | User MFA trigger data                                                                                        |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "mfaToken": "xxxxxxx",
    "mfaPhone": null,
    "mfaPhoneCountryCode": null,
    "mfaEmail": null,
    "nickname": null,
    "username": null,
    "phone": null,
    "phoneCountryCode": null,
    "faceMfaEnabled": true,
    "totpMfaEnabled": true,
    "applicationMfa": [
      {
        "mfaPolicy": "EMAIL",
        "status": 1,
        "sort": 0
      }
    ]
  }
}
```

## Data Structure

### <a id="MfaTriggerData"></a> MfaTriggerData

| Name                | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                  | <div style="width:200px">Sample value</div> |
| ------------------- | ------- | --------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------- |
| mfaToken            | string  | Yes                                           | MFA Token                                                                   | `xxxxxxx`                                   |
| applicationMfa      | array   | Yes                                           | MFA configuration type: <a href="#ApplicationMfaDto">ApplicationMfaDto</a>. |                                             |
| mfaPhone            | string  | No                                            | Mobile phone number bound to MFA                                            | `null`                                      |
| mfaPhoneCountryCode | string  | No                                            | Mobile area code bound to MFA                                               | `null`                                      |
| mfaEmail            | string  | No                                            | Email address bound to MFA                                                  | `null`                                      |
| nickname            | string  | No                                            | User nickname                                                               | `null`                                      |
| username            | string  | No                                            | User name                                                                   | `null`                                      |
| phone               | string  | No                                            | User mobile phone number                                                    | `null`                                      |
| phoneCountryCode    | string  | No                                            | User mobile area code                                                       | `null`                                      |
| faceMfaEnabled      | boolean | No                                            | Face verification enabled                                                   | `true`                                      |
| totpMfaEnabled      | boolean | No                                            | OTP verification enabled                                                    | `true`                                      |

### <a id="ApplicationMfaDto"></a> ApplicationMfaDto

| Name      | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| --------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| mfaPolicy | string | yes                                           | MFA type                                   | `EMAIL`                                     |
| status    | number | yes                                           | Enabled status                             | 1                                           |
| sort      | number | yes                                           | Sort                                       | 0                                           |
