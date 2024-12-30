# Get the list of resources authorized by the user in the logged-in application

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project for generation
-->

<LastUpdated />

Get the list of resource permissions specified by the user, and the user gets the list of resources owned by a certain application

## Method name

`ManagementClient.get_user_authorized_resources_list`

## Request parameters

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

## Request Response

Type: `GetUserAuthResourceListRespDto`

| Name       | Type                                                                         | Description                                                                                                  |
| ---------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                                       | Description                                                                                                  |
| apiCode    | number                                                                       | Segmented error code, which can be used to get the specific error type.                                      |
| data       | <a href="#GetUserAuthResourceListDataDto">GetUserAuthResourceListDataDto</a> | Response data                                                                                                |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "apiCode": 20001,
  "data": {
    "userPermissionList": {
      "userId": "6301cexxxxxxxxxxxxxxxxx78",
      "namespaceCode": "examplePermissionNamespace",
      "resourceList": {
        "resourceCode": "resourceCode"
      }
    }
  }
}
```

## Data Structure

### <a id="GetUserAuthResourceListDataDto"></a> GetUserAuthResourceListDataDto

| Name               | Type  | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                        | <div style="width:200px">Sample value</div> |
| ------------------ | ----- | -------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| userPermissionList | array | Yes                                    | User permission list Nested type: <a href="#UserAuthResourceListDto">UserAuthResourceListDto</a>. |                                             |

### <a id="UserAuthResourceListDto"></a> UserAuthResourceListDto

| Name          | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                      | <div style="width:200px">Example value</div> |
| ------------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| userId        | string | Yes                                           | User ID authorized by data policy                                                                                               | `6301cexxxxxxxxxxxxxxxxx78`                  |
| namespaceCode | string | Yes                                           | Permission space authorized by data policy Code                                                                                 | `examplePermissionNamespace`                 |
| resourceList  | array  | No                                            | List of all data policy resources of the user under the permission space Nested type: <a href="#OpenResource">OpenResource</a>. |                                              |

### <a id="OpenResource"></a> OpenResource

| Name         | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                | <div style="width:200px">Sample value</div> |
| ------------ | ------ | -------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------- |
| resourceCode | string | Yes                                    | Data resource Code authorized under data policy                           | `resourceCode`                              |
| authorize    |        | Yes                                    | Resource list of all data policies under the permission space of the user |                                             |
