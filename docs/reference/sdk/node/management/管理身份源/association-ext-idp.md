# Tenant association identity source

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Tenants can associate or disassociate identity source connections.

## Request parameters

| Name        | Type    | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| association | boolean | yes                                    | -                                           | Whether to associate with identity source  |                                             |
| id          | string  | yes                                    | -                                           | Identity source connection ID              | `60b49eb83fd80adb96f26e68`                  |
| tenantId    | string  | no                                     | -                                           | Tenant ID                                  | `60b49eb83fd80adb96f26e68`                  |

## Sample code

```ts
import { ManagementClient } from "authing-node-sdk";
// In Node.js Reference:
// const { ManagementClient } = require('authing-node-sdk');

const managementClient = new ManagementClient({
  accessKeyId: "GEN_AUTH_USERPOOL_ID",
  accessKeySecret: "GEN_AUTH_USERPOOL_SECRET",
});

(async () => {
  const result = await managementClient.associationExtIdp({
    id: "60b49eb83fd80adb96f26e68",
    association: false,
    tenantId: "60b49eb83fd80adb96f26e68",
  });
})();
```

## Request response

Type: `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                  |
| ---------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                   | Description                                                                                                  |
| apiCode    | number                                   | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                          |

Example result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "success": true
  }
}
```

## Data structure

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| success | boolean | yes                                          | Whether the operation was successful       | `true`                                       |
