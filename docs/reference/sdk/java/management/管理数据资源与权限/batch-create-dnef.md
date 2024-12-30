# Create data resource extension fields

<LastUpdated />

Currently only supports tree type data resources

## Method Name

`ManagementClient.batchCreateDnef`

## Request Parameters

Type: `BatchCreateDenfDto`

| Name          | Type                       | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------------- | -------------------------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| namespaceCode | string                     | Yes                                          | Permission space code                       | `examplePermissionNamespace`               |
| resourceCode  | string                     | Yes                                          | Data resource code                          | `treeResourceCode`                         |
| key           | string                     | Yes                                          | Extension field Key                         | `str`                                      |
| fieldList     | <a href="#Dnef">Dnef[]</a> | Yes                                          | Extended field list                         |

## Sample Code

```java
package test.management.dataPermission.resource;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.BatchCreateDenfDto;
import cn.authing.sdk.java.dto.Dnef;
import cn.authing.sdk.java.dto.Dnef.ValueType;
import cn.authing.sdk.java.dto.DnefConfig;
import cn.authing.sdk.java.dto.IsSuccessRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import cn.hutool.core.collection.ListUtil;

public class BatchCreateDnefTest {

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
        BatchCreateDenfDto createDenfDto = new BatchCreateDenfDto();
        createDenfDto.setResourceCode("treeResourceCode");
        createDenfDto.setNamespaceCode("examplePermissionNamespace");

        Dnef dnef1 = new Dnef();
        dnef1.setKey("select");
        dnef1.setValueType(ValueType.SELECT);
        dnef1.setDescription("select");
        dnef1.setLabel("select");
        dnef1.setConfig(new DnefConfig(ListUtil.of(new DnefConfig.Option("str_value"))));

        Dnef dnef2 = new Dnef();
        dnef2.setKey("str");
        dnef2.setValueType(ValueType.STRING);
        dnef2.setDescription("str");
        dnef2.setLabel("str");

        createDenfDto.setFieldList( ListUtil.of(dnef1, dnef2));

        IsSuccessRespDto res = client.batchCreateDnef(createDenfDto);
        System.out.println(JsonUtils.serialize(res));
    }

}
```

## Request Response

Type： `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                   | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                   | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                                                                                                                                                                                                                                                               |

## Data Structure

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| success | boolean | yes                                          | Whether the operation is successful        | `true`                                       |

### <a id="Dnef"></a> Dnef

| Name      | Type                                 | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                   | <div style="width:200px">Example Value</div> |
| --------- | ------------------------------------ | -------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------- |
| key       | string                               | Yes                                          | Extended field Key                                           | `str`                                        |
| valueType | ValueType                            | Yes                                          | Extended field value type                                    | `STRING` (text), `SELECT` (single choice)    |
| label     | string                               | Yes                                          | Extended field display Name                                  | `str_label`                                  |
| config    | <a href="#DnefConfig">DnefConfig</a> | No                                           | Field configuration, single choice type field must be passed |                                              |

### <a id="DnefConfig"></a> DnefConfig

| Name    | Type                           | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------------------------------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| options | <a href="#Option">Option[]</a> | Yes                                          | Single-select type field option list       |                                              |

### <a id="Option"></a> Option

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| value | string | Yes                                          | Option value                               | `option1`                                    |
