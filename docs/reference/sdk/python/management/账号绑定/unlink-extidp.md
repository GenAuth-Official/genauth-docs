# Unbind external identity source

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Unbind external identity source, this interface needs to pass the external identity source ID bound by the user, **note not the identity source connection ID**.

## Method name

`ManagementClient.unlink_ext_idp`

## Request parameters

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| extIdpId | string | Yes                                          | -                                           | External identity source ID                | `62f209327xxxxcc10d966ee5`                  |

## Request Response

Type: `CommonResponseDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string | Request ID. It will be returned when the request fails.                                                      |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## Data Structure
