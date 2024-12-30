# Authorize application access permissions

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Authorize application access permissions to users, groups, organizations, or roles

## Request parameters

| Name  | Type                                                                             | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----- | -------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| list  | <a href="#ApplicationPermissionRecordItem">ApplicationPermissionRecordItem[]</a> | yes                                           | -                                           | List of authorized subjects, up to 10      |                                             |
| appId | string                                                                           | yes                                           | -                                           | App ID                                     | `6229ffaxxxxxxxxcade3e3d9`                  |

## Sample code

```py
from authing import ManagementClient

management_client = ManagementClient(
    access_key_id="GEN_AUTH_USERPOOL_ID",
    access_key_secret="GEN_AUTH_USERPOOL_SECRET",
)

data = management_client.add_application_permission_record(
     app_id: "6229ffaxxxxxxxxcade3e3d9",
     list: [{
           target_type: "USER",
         namespace_code: "code1",
         inherit_by_children: true,
         target_identifier: "["6229ffaxxxxxxxxcade3e3d9"]",
         effect: "ALLOW",
      }],

)
```

## Request Response

Type： `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                  |
| ---------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                   | Description                                                                                                  |
| apiCode    | number                                   | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                          |

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

## Data Structure

### <a id="ApplicationPermissionRecordItem"></a> ApplicationPermissionRecordItem

| Name              | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                        | <div style="width:200px">Sample value</div> |
| ----------------- | ------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| targetType        | string  | yes                                           | Subject type                                                                                                                                                                                                                                                                                                                                      | USER                                        |
| namespaceCode     | string  | no                                            | Permission group code, required when subject type is "ROLE"                                                                                                                                                                                                                                                                                       | `code1`                                     |
| inheritByChildren | boolean | no                                            | When subject type is "ORG", whether authorization is inherited by child nodes                                                                                                                                                                                                                                                                     | `true`                                      |
| targetIdentifier  | array   | yes                                           | Subject identifier list, when subject type is "USER", the value should be user ID; when subject type is "GROUP", the value should be group code; when subject type is "ROLE" When the subject type is "ORG", the value should be the role code; when the subject type is "ORG", the value should be the organization node ID. Maximum 50 entries. | `["6229ffaxxxxxxxxcade3e3d9"]`              |
| effect            | string  | yes                                           | Authorization effect, allow or deny                                                                                                                                                                                                                                                                                                               | ALLOW                                       |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| success | boolean | yes                                          | Whether the operation was successful       | `true`                                      |
