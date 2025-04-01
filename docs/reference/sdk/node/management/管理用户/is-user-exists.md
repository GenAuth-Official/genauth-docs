# Determine if the user exists

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Determine if the user exists based on the conditions, you can filter the user name, email address, mobile phone number, third-party external ID, etc.

## Method name

`ManagementClient.isUserExists`

## Request Parameters

| Name       | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                  | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| username   | string | No                                     | -                                           | Username, unique in the user pool                                                                                           | `bob`                                       |
| email      | string | No                                     | -                                           | Email address, case-insensitive                                                                                             | `test@example.com`                          |
| phone      | string | No                                     | -                                           | Phone number without area code. If it is an overseas phone number, specify the area code in the phoneCountryCode parameter. | `188xxxx8888`                               |
| externalId | string | No                                     | -                                           | Third-party external ID                                                                                                     | `10010`                                     |

## Example Code

```ts
import { ManagementClient, Models } from "@genauth/nodejs";

// Init ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If you are a private deployment customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.isUserExists({
    username: "bob",
    email: "test@example.com",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request Response

type: `IsUserExistsRespDto`

| Name       | Type                                           | Description                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                         | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                       |
| message    | string                                         | Description                                                                                                                                                                                                                                                                                                                                        |
| apiCode    | number                                         | Segmented error code, which can be used to get the specific error type (no return for successful requests). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                       |
| data       | <a href="#IsUserExistsDto">IsUserExistsDto</a> | Response data                                                                                                                                                                                                                                                                                                                                      |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "exists": true
  }
}
```

Data Structure

### <a id="IsUserExistsDto"></a> IsUserExistsDto

| Name   | Type    | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------ | ------- | ----------------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| exists | boolean | yes                                                   | Whether the user exists                    | `true`                                      |
