# Force users to go offline

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Force users to go offline through user ID and App ID list, and you can choose to specify user ID type, etc.

## Method name

`ManagementClient.kickUsers`

## Request Parameters

| Name    | Type                                                   | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------------------------------------------------------ | --------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| appIds  | string[]                                               | yes                                           | -                                           | APP ID list. Array length limit: 50.       | `["62188e71cxxxx3075289c580"]`              |
| userId  | string                                                 | yes                                           | -                                           | User ID                                    |                                             |
| options | <a href="#KickUsersOptionsDto">KickUsersOptionsDto</a> | no                                            | -                                           | Optional parameters                        | `{"userIdType":"user_id"}`                  |

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
  const result = await managementClient.kickUsers({
    // Replace User ID
    userId: "6229ffaxxxxxxxxcade3e3d9",
    // Replace App ID
    appIds: ["62188e71cxxxx3075289c580"],
    options: {
      userIdType: Models.KickUsersOptionsDto.userIdType.USER_ID,
    },
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request Response

type: `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                       |
| message    | string                                   | Description                                                                                                                                                                                                                                                                                                                                        |
| apiCode    | number                                   | Segmented error code, which can be used to get the specific error type (no return for successful requests). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                       |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                                                                                                                                                                                                                                                                |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "success": true
  }
}
```

Data Structure

### <a id="KickUsersOptionsDto"></a> KickUsersOptionsDto

| Name | Type | <div style="width:80px">Required</div> | <div style="width:300px">Description</div># Force offline users

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Force users to go offline through user ID and App ID lists, and you can choose to specify user ID types, etc.

## Method Name

`ManagementClient.kickUsers`

## Request Parameters

| Name    | Type                                                   | <div style="width:80px">Required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample Value</div> |
| ------- | ------------------------------------------------------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| appIds  | string[]                                               | Yes                                    | -                                           | APP ID List Array length limit: 50.        | `["62188e71cxxxx3075289c580"]`              |
| userId  | string                                                 | yes                                    | -                                           | user ID                                    |                                             |
| options | <a href="#KickUsersOptionsDto">KickUsersOptionsDto</a> | no                                     | -                                           | optional parameter                         | `{"userIdType":"user_id"}`                  |

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
  const result = await managementClient.kickUsers({
    // Replace User ID
    userId: "6229ffaxxxxxxxxcade3e3d9",
    // Replace App ID
    appIds: ["62188e71cxxxx3075289c580"],
    options: {
      userIdType: Models.KickUsersOptionsDto.userIdType.USER_ID,
    },
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request Response

type: `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                       |
| message    | string                                   | Description                                                                                                                                                                                                                                                                                                                                        |
| apiCode    | number                                   | Segmented error code, which can be used to get the specific error type (no return for successful requests). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                       |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                                                                                                                                                                                                                                                                |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "success": true
  }
}
```

Data Structure

### <a id="KickUsersOptionsDto"></a> KickUsersOptionsDto

| Name | Type |

<div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>
