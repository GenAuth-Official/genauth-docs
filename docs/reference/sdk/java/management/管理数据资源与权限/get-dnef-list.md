# Create data resource extension fields

<LastUpdated />

Currently only supports tree type data resources

## Method Name

`ManagementClient.getDnefList`

## Request Parameters

Type: `GetDenfListDto`

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div>                   | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------------- | ------ | -------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| namespaceCode | string | yes                                          | Permission space code                                         | `examplePermissionNamespace`               |
| resourceCode  | string | yes                                          | Data resource code                                            | `treeResourceCode`                         |
| startIndex    | number | No                                           | Starting index, default is 1, i.e. starting from the 1st item | 11                                         |
| maxSize       | number | No                                           | Maximum number of queries at a time, default is 10            | 20                                         |
| query         | string | No                                           | Keyword search, can be field unique identifier, display Name  | `str`                                      |

## Sample Code

```java
package test.management.dataPermission.resource;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.GetDenfListDto;
import cn.authing.sdk.java.dto.GetDenfListResponseDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetDnefListTest {

    // Need to be replaced with your GenAuth Access Key ID
    private static final String ACCESS_KEY_ID = "AUTHING_ACCESS_KEY_ID";
    // Need to be replaced with your GenAuth Access Key Secret
    private static final String ACCESS_KEY_SECRET = "AUTHING_ACCESS_KEY_SECRET";

    public static void main(String[] args) throws Throwable {
        ManagementClientOptions clientOptions = new ManagementClientOptions();
        clientOptions.setAccessKeyId(ACCESS_KEY_ID);
        clientOptions.setAccessKeySecret(ACCESS_KEY_SECRET);
        // If you are a private deployment customer, you need to set the GenAuth service domain name
        // clientOptions.setHost("https://api.your-authing-service.com");
        ManagementClient client = new ManagementClient(clientOptions);
        GetDenfListDto getDenfListDto = new GetDenfListDto();
        getDenfListDto.setResourceCode("treeResourceCode");
        getDenfListDto.setNamespaceCode("examplePermissionNamespace");
        GetDenfListResponseDto dnefList = client.getDnefList(getDenfListDto);
        System.out.println(JsonUtils.serialize(dnefList));
    }

}
```

## Request Response

Type： `GetDenfListResponseDto`

| Name       | Type                                                 | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                               | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                               | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                               | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#GetDenfListRespDto">GetDenfListRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

## Data Structure

### <a id="GetDenfListRespDto"></a> GetDenfListRespDto

| Name           | Type                       | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                       | <div style="width:200px">Example Value</div> |
| -------------- | -------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| nextStartIndex | number                     | yes                                          | The index of the next page. Return -1 when it is the last page                                   | 31                                           |
| truncated      | boolean                    | yes                                          | Truncated or not. True means the next page can be queried. False means the data is the last page | false                                        |
| list           | <a href="#Dnef">Dnef[]</a> | yes                                          | Field list                                                                                       |                                              |

### <a id="Dnef"></a> Dnef

| Name      | Type                                 | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                   | <div style="width:200px">Example Value</div> |
| --------- | ------------------------------------ | -------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------- |
| key       | string                               | yes                                          | Extended field Key                                           | `str`                                        |
| valueType | ValueType                            | yes                                          | Extended field value type                                    | `STRING` (text), `SELECT` (single choice)    |
| label     | string                               | yes                                          | Extended field display Name                                  | `str_label`                                  |
| config    | <a href="#DnefConfig">DnefConfig</a> | No                                           | Field configuration, single choice type field must be passed |                                              |

### <a id="DnefConfig"></a> DnefConfig

| Name    | Type                           | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------------------------------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| options | <a href="#Option">Option[]</a> | yes                                          | Single choice type field option list       |                                              |

### <a id="Option"></a> Option

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| value | string | yes                                          | option value                               | `option1`                                    |
