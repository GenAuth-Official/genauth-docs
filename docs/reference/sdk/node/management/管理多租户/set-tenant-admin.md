# Set tenant administrator

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This interface is used to set the tenant administrator based on the user ID or tenant member ID.

## Request parameters

| Name        | Type     | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | -------- | --------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| memberIds   | string[] | Yes                                           | -                                           | Tenant member ID                           |                                             |
| linkUserIds | string[] | Yes                                           | -                                           | User ID at the associated user pool level  |                                             |
| tenantId    | string   | Yes                                           | -                                           | Tenant ID                                  |                                             |

## Request response

Type: `CommonResponseDto`

| Name       | Type   | Description                                                                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code. This status code can be used to determine whether the operation is successful. 200 indicates success. |
| message    | string | description                                                                                                                 |
| apiCode    | number | subdivision error code, which can be used to get the specific error type.                                                   |
| requestId  | string | request ID. It will be returned when the request fails.                                                                     |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## Data structure
