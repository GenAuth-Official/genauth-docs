# Update identity source configuration

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Update the identity source configuration, you can set the identity source ID and name.

## Method name

`ManagementClient.updateExtIdp`

## Request parameters

| Name     | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| -------- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| id       | string | yes                                    | -                                           | Identity source ID                         | `60b49eb83fd80adb96f26e68`                   |
| name     | string | yes                                    | -                                           | Name                                       | `exampleName`                                |
| tenantId | string | no                                     | -                                           | Tenant ID                                  | `60b49eb83fd80adb96f26e68`                   |

## Sample code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

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
  const result = await managementClient.updateExtIdp({
    name: "exampleName",
    id: "60b49exxxxxadb96f26e68",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `ExtIdpSingleRespDto`

| Name       | Type                               | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                             | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                             | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                             | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#ExtIdpDto">ExtIdpDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "id": "60b49eb83fd80adb96f26e68",
    "name": "default",
    "logo": "https://files.authing.co/authing-console/social-connections/wechatIdentitySource.svg",
    "tenantId": "60b49eb83fd80adb96f26e68",
    "type": "wechat"
  }
}
```

## Data structure

### <a id="ExtIdpDto"></a> ExtIdpDto

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div>                                            |
| -------- | ------ | --------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------- |
| id       | string | Yes                                           | Identity source id                         | `60b49eb83fd80adb96f26e68`                                                             |
| name     | string | Yes                                           | Identity source name                       | `default`                                                                              |
| logo     | string | yes                                           | Identity source logo                       | `https://files.authing.co/authing-console/social-connections/wechatIdentitySource.svg` |
| tenantId | string | no                                            | Tenant ID                                  | `60b49eb83fd80adb96f26e68`                                                             |
| type     | string | yes                                           | Identity source type                       | `wechat`                                                                               |
