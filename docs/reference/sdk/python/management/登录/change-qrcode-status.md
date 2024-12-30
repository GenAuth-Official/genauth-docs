# Self-built APP scan code login: Modify QR code status on the APP side

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This endpoint is used to modify the QR code status in the self-built APP scan code login, corresponding to the process of the terminal user scanning the code, confirming authorization, and canceling authorization after the browser renders the QR code. **This interface requires the user's login status**.

## Method name

`ManagementClient.change_qr_code_status`

## Request parameters

| Name     | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                    | <div style="width:200px">Sample value</div> |
| -------- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| action   | string | yes                                    | -                                           | Action to modify QR code status:<br>- `SCAN`: Modify the QR code status to scanned status. This operation should be performed immediately after the mobile APP scans the code;<br>- `CONFIRM`: Modify the QR code status to authorized. Before performing this operation, you must first perform the `SCAN operation;<br>- `CANCEL`: Modify the QR code status to canceled. Before performing this operation, you must first perform the `SCAN operation;<br> | `CONFIRM`                                   |
| qrcodeId | string | yes                                    | -                                           | QR code unique ID                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                             |

## Request response

Type: `CommonResponseDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string | Request ID. It will be returned when the request fails.                                                      |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## Data structure
