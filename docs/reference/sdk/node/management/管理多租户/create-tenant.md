# Create a tenant

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

## Request parameters

| name        | type     | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                   | <div style="width:200px">Sample value</div> |
| ----------- | -------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| rejectHint  | string   | yes                                    | -                                           | The prompt displayed when the user is rejected by the tenant |                                             |
| appIds      | string[] | yes                                    | -                                           | The application ID associated with the tenant                | `["a","b"]`                                 |
| name        | string   | yes                                    | -                                           | Tenant name                                                  | `Tenant name`                               |
| logo        | string[] | No                                     | -                                           | Tenant logo                                                  | `https://baidu.com/a.png`                   |
| description | string   | No                                     | -                                           | Tenant description                                           |                                             |

## Request response

Type: `TenantSingleRespDto`

| Name       | Type                                           | Description                                                                                                  |
| ---------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                         | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string                                         | Description                                                                                                  |
| apiCode    | number                                         | Segment error code, which can be used to get the specific error type.                                        |
| requestId  | string                                         | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#UpdateTenantDto">UpdateTenantDto</a> | Response data                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "tenantId": "60b49eb83fd80adb96f26e68",
    "appIds": "[\"a\",\"b\"]"
  }
}
```

## Data structure

### <a id="UpdateTenantDto"></a> UpdateTenantDto

| Name                         | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>        | <div style="width:200px">Sample value</div> |
| ---------------------------- | ------ | -------------------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| tenantId                     | string | yes                                          | Tenant ID                                         | `60b49eb83fd80adb96f26e68`                  |
| name                         | string | yes                                          | Tenant name                                       |                                             |
| appIds                       | array  | yes                                          | Application ID associated with the tenant         | `["a","b"]`                                 |
| css                          | string | yes                                          | Custom CSS                                        |                                             |
| defaultLoginTab              | string | yes                                          | Default login tab                                 |                                             |
| defaultRegisterTab           | string | yes                                          | Default registration tab                          |                                             |
| passwordTabConfig            | string | yes                                          | Password login page configuration                 |                                             |
| loginTabs                    | string | yes                                          | Login tab list                                    |                                             |
| registerTabs                 | string | yes                                          | Registration tab list                             |                                             |
| extendsFields                | string | yes                                          | Registration information completion configuration |                                             |
| ssoPageCustomizationSettings | string | yes                                          | Page customization configuration                  |                                             |
