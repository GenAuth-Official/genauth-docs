# Self-built APP scan code login: APP end modifies QR code status

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

This endpoint is used to modify the QR code status in the self-built APP scan code login, which corresponds to the process of terminal users scanning the code, confirming authorization, and canceling authorization after the browser renders the QR code. **This interface requires the user's login status**.

## Method name

`AuthenticationClient.change_qr_code_status`

## Request parameters

| Name     | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                      | <div style="width:200px"></div>Sample value</div> |
| -------- | ------ | -------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| action   | string | Yes                                    | -             | Action to modify QR code status:<br>- `SCAN`: Modify the QR code status to scanned status. This operation should be performed immediately after the mobile APP scans the code;<br>- `CONFIRM`: Modify the QR code status to authorized. Before performing this operation, the `SCAN operation must be performed first;<br>- `CANCEL`: Modify the QR code status to canceled. Before performing this operation, the `SCAN operation must be performed first;<br> | `CONFIRM`                                         |
| qrcodeId | string | Yes                                    | -             | QR code unique ID                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                   |

## Request response

Type: `CommonResponseDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## Data structure
