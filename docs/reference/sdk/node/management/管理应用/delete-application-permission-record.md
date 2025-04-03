# Delete application access authorization record

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Remove application access authorization for users, groups, organizations, or roles

## Request parameters

| Name  | Type                                                                                         | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----- | -------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| list  | <a href="#DeleteApplicationPermissionRecordItem">DeleteApplicationPermissionRecordItem[]</a> | Yes                                          | -                                           | Authorization subject list, up to 10 items |                                             |
| appId | string                                                                                       | Yes                                          | -                                           | Application ID                             | `6229ffaxxxxxxxxcade3e3d9`                  | ## Sample code ```ts import { ManagementClient } from '@genauth/nodejs'; // Referenced in Node.js: // const { ManagementClient } = require('@genauth/nodejs'); const managementClient = new ManagementClient({ accessKeyId: 'GEN_AUTH_USERPOOL_ID', accessKeySecret: 'GEN_AUTH_USERPOOL_SECRET', }); (async () => { const result = await managementClient.deleteApplicationPermissionRecord({ appId: '6229ffaxxxxxxxxcade3e3d9', list: [{ targetType: 'USER', namespaceCode: 'code1', targetIdentifier: ["6229ffaxxxxxxxxcade3e3d9"], |

}],
});
})();

````

## Request response

Type: `IsSuccessRespDto`

| Name | Type | Description |
| ---- | ---- | ---- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message | string | Description |
| apiCode | number | Segment error code, which can be used to get the specific error type. |
| requestId | string | Request ID. It will be returned when the request fails. |
| data | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful |

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
````

## Data structure

### <a id="DeleteApplicationPermissionRecordItem"></a> DeleteApplicationPermissionRecordItem

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                             | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| targetType       | string | yes                                          | Subject type                                                                                                                                                                                                                                                                                           | USER                                        |
| namespaceCode    | string | no                                           | Permission group code, required when subject type is "ROLE"                                                                                                                                                                                                                                            | `code1`                                     |
| targetIdentifier | array  | yes                                          | Subject identifier list, when subject type is "USER", the value should be user ID; when subject type is "GROUP", the value should be group code; when subject type is "ROLE", the value should be role code; when subject type is "ORG", the value should be organization node ID. Maximum 50 entries. | `["6229ffaxxxxxxxxcade3e3d9"]`              |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| success | boolean | yes                                          | Whether the operation was successful       | `true`                                      |
