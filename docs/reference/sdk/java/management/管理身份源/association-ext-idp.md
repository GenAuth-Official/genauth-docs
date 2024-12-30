# Tenant Associate Identity Source

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Tenants can associate or disassociate identity source connections.

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| association | boolean | yes | - | Whether to associate with the identity source | |
| id | string | yes | - | Identity source connection ID | `60b49eb83fd80adb96f26e68` |
| tenantId | string | no | - | Tenant ID | `60b49eb83fd80adb96f26e68` |

## Sample Code
```java
import cn.authing.sdk.java.dto.*;
import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.model.ManagementClientOptions;

class Test {
    private static String ACCESS_KEY_ID = "AUTHING_USERPOOL_ID";
    private static String ACCESS_KEY_SECRET = "AUTHING_USERPOOL_SECRET";

    public static void main(String[] args) {
        ManagementClientOptions clientOptions = new ManagementClientOptions(ACCESS_KEY_ID, ACCESS_KEY_SECRET);
        ManagementClient managementClient = new ManagementClient(clientOptions);
    
        AssociationExtIdpDto request = new AssociationExtIdpDto();
        request.setId("60b49eb83fd80adb96f26e68");
        request.setAssociation(false);
        request.setTenantId("60b49eb83fd80adb96f26e68");
        
        IsSuccessRespDto response = managementClient.associationExtIdp(request);
        System.out.println(response);
    }
}
```


## Request Response

Type： `IsSuccessRespDto`

| Name | Type | Description |
| ---- | ---- | ---- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message | string | Description |
| apiCode | number | Segmented error code, which can be used to get the specific error type. |
| requestId | string | Request ID. It will be returned when the request fails. |
| data | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful |



Example Results：

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

## Data Structure


### <a id="IsSuccessDto"></a> IsSuccessDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- |  ---- | ---- | ---- | ---- |
| success | boolean | yes | Whether the operation is successful   |  `true` |


