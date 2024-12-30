# Push login: Modify push code status on APP side

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

This endpoint is used to modify the push code status in GenAuth token APP push login, which corresponds to the process of using push login in the browser, after clicking login, the terminal user receives the push login information, confirms authorization, and cancels authorization. **This interface requires the user's login status**.

## Method name

`AuthenticationClient.change_push_code_status`

## Request parameters

| Name       | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                                                                                                        | <div style="width:200px"></div>Sample value</div> |
| ---------- | ------ | -------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| action     | string | yes                                    | -             | Action to modify push code status:<br>- `CONFIRM`: Modify push code status to authorized;<br>- `CANCEL`: Modify push code status to canceled;<br> | `CONFIRM`                                         |
| pushCodeId | string | yes                                    | -             | Push code (unique ID for push login)                                                                                                              |                                                   |

## Request response

Type: `CommonResponseDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
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
