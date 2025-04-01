# Authorize application access rights

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Authorize application access permissions to users, groups, organizations, or roles. If the user, group, organization, or role does not exist, skip and proceed to the next step of authorization without returning an error

## Method name

`ManagementClient.authorizeApplicationAccess`

## Request parameters

| Name  | Type                                                                             | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----- | -------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| list  | <a href="#ApplicationPermissionRecordItem">ApplicationPermissionRecordItem[]</a> | Yes                                    | -                                           | Authorization subject list, up to 10 items |                                             |
| appId | string                                                                           | Yes                                    | -                                           | Application ID                             | `6229ffaxxxxxxxxcade3e3d9`                  |

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
  const result = await managementClient.authorizeApplicationAccess({
    appId: "6229ffaxxxxxxxxcade3e3d9",
    list: [
      {
        targetType: Models.AuthorizeApplicationAccessDto.targetType.USER,
        namespaceCode: "code1",
        inheritByChildren: true,
        targetIdentifier: ["6229ffaxxxxxxxxcade3e3d9"],
        effect: Models.AuthorizeApplicationAccessDto.effect.ALLOW,
      },
    ],
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                   | description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                   | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                                                                                                                                                                                                                                                            |

Sample result:

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

### <a id="ApplicationPermissionRecordItem"></a> ApplicationPermissionRecordItem

| Name              | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                             | <div style="width:200pxx">Sample value</div> |
| ----------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| targetType        | string  | yes                                          | Subject type                                                                                                                                                                                                                                                                                           | USER                                         |
| namespaceCode     | string  | no                                           | Permission group code, must be passed when subject type is "ROLE"                                                                                                                                                                                                                                      | `code1`                                      |
| inheritByChildren | boolean | no                                           | When subject type is "ORG", whether authorization is inherited by child nodes                                                                                                                                                                                                                          | `true`                                       |
| targetIdentifier  | array   | yes                                          | Subject identifier list, when subject type is "USER", the value should be user ID; when subject type is "GROUP", the value should be group code; when subject type is "ROLE", the value should be role code; when subject type is "ORG", the value should be organization node ID. Maximum 50 entries. | `["6229ffaxxxxxxxxcade3e3d9"]`               |
| effect            | string  | yes                                          | Authorization effect, allow or deny                                                                                                                                                                                                                                                                    | ALLOW                                        |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| success | boolean | yes                                          | Whether the operation was successful       | `true`                                      |
