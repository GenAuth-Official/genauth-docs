# Delete application access authorization records

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Remove application access authorization for users, groups, organizations, or roles

## Request Parameters

| Name  | Type                                                                                         | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----- | -------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| list  | <a href="#DeleteApplicationPermissionRecordItem">DeleteApplicationPermissionRecordItem[]</a> | Yes                                          | -                                           | Authorization subject list, up to 10 items |                                              |
| appId | string                                                                                       | Yes                                          | -                                           | Application ID                             | `6229ffaxxxxxxxxcade3e3d9`                   |

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

        DeleteApplicationPermissionRecord request = new DeleteApplicationPermissionRecord();
        request.setAppId("6229ffaxxxxxxxxcade3e3d9");
            List= new List<DeleteApplicationPermissionRecordItem>(
                    new DeleteApplicationPermissionRecordItem().set

               request.setTargetType(DeleteApplicationPermissionRecordItem.targetType.USER);
      request.setNamespaceCode("code1");
      request.setTargetIdentifier(new List<String>("6229ffaxxxxxxxxcade3e3d9",));

                  ),

        IsSuccessRespDto response = managementClient.deleteApplicationPermissionRecord(request);
        System.out.println(response);
    }
}
```

## Request Response

Type： `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                  |
| ---------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                   | Description                                                                                                  |
| apiCode    | number                                   | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                   | Request ID. It will be returned when the request fails.                                                      |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                          |

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

### <a id="DeleteApplicationPermissionRecordItem"></a> DeleteApplicationPermissionRecordItem

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                             | <div style="width:200px">Example Value</div> |
| ---------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| targetType       | string | Yes                                          | Subject type                                                                                                                                                                                                                                                                                           | USER                                         |
| namespaceCode    | string | No                                           | Permission group code, required when subject type is "ROLE"                                                                                                                                                                                                                                            | `code1`                                      |
| targetIdentifier | array  | Yes                                          | Subject identifier list, when subject type is "USER", the value should be user ID; when subject type is "GROUP", the value should be group code; when subject type is "ROLE", the value should be role code; when subject type is "ORG", the value should be organization node ID. Maximum 50 entries. | `["6229ffaxxxxxxxxcade3e3d9"]`               |

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| success | boolean | Yes                                          | Whether the operation is successful        | `true`                                       |
