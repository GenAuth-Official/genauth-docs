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

`ManagementClient.unlinkExtIdp`

## Request parameters

| Name     | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| extIdpId | string | Yes                                    | -                                           | External identity source ID                | `62f209327xxxxcc10d966ee5`                  |

## Request response

Type: `CommonResponseDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string | description                                                                                                  |
| apiCode    | number | subdivision error code, which can be used to get the specific error type.                                    |
| requestId  | string | request ID. It will be returned when the request fails.                                                      |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## Data structure
