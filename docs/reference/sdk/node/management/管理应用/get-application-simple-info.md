# Get simple application information

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get simple application information through application ID.

## Method name

`ManagementClient.getApplicationSimpleInfo`

## Request parameters

| Name  | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| appId | string | Yes                                    | -                                           | Application ID                             | `6229ffaxxxxxxxxcade3e3d9`                  |

## Sample code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If you are a privately deployed customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.getApplicationSimpleInfo({
    appId: "6229ffaxxxxxxxxcade3e3d9",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request Response

Type: `ApplicationSimpleInfoSingleRespDto`

| Name       | Type                                                             | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                           | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                           | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                           | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#ApplicationSimpleInfoDto">ApplicationSimpleInfoDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "appId": "62eaa95fe0xxxx9a5295bf7c",
    "appIdentifier": "example",
    "appName": "Sample application",
    "appLogo": "Sample application",
    "appDescription": "Sample description information",
    "appType": "web"
  }
}
```

## Data structure

### <a id="ApplicationSimpleInfoDto"></a> ApplicationSimpleInfoDto

| Name           | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| -------------- | ------- | --------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| appId          | string  | Yes                                           | Application ID                             | `62eaa95fe0xxxx9a5295bf7c`                   |
| appIdentifier  | string  | Yes                                           | Application unique identifier              | `example`                                    |
| appName        | string  | Yes                                           | Application name                           | `Example application`                        |
| appLogo        | string  | Yes                                           | App Logo Link                              | `Sample App`                                 |
| appDescription | string  | No                                            | App Description                            | `Sample Description`                         |
| appType        | string  | Yes                                           | App Type                                   | web                                          |
| isIntegrateApp | boolean | Yes                                           | Is it an integrated app?                   |                                              |
