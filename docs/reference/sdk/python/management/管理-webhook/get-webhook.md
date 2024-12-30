# Get Webhook details

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get webhook details based on the specified webhookId

## Method name

`ManagementClient.get_webhook`

## Request parameters

| Name      | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| --------- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| webhookId | string | Yes                                    | -                                           | Webhook ID                                 | `6229ffaxxxxxxxxcade3e3d9`                  |

## Request response

Type: `GetWebhookRespDto`

| Name       | Type                                 | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                               | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                   |
| message    | string                               | description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                               | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#WebhookDto">WebhookDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "webhookId": "6229ffaxxxxxxxxcade3e3d9",
    "createdAt": "2022-07-03T02:20:30.000Z",
    "updatedAt": "2022-07-03T02:20:30.000Z",
    "name": "User creation event",
    "url": "https://example.com/callback",
    "contentType": "application/json",
    "enabled": true,
    "events": "[\"user:created\"]",
    "secret": "xxxxxxxxxxxx"
  }
}
```

## Data structure

### <a id="WebhookDto"></a> WebhookDto

| Name        | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>             | <div style="width:200px">Sample value</div> |
| ----------- | ------- | --------------------------------------------- | ------------------------------------------------------ | ------------------------------------------- |
| webhookId   | string  | Yes                                           | Webhook ID                                             | `6229ffaxxxxxxxxcade3e3d9`                  |
| createdAt   | string  | Yes                                           | Creation time                                          | `2022-07-03T02:20:30.000Z`                  |
| updatedAt   | string  | Yes                                           | Update time                                            | `2022-07-03T02:20:30.000Z`                  |
| name        | string  | yes                                           | Webhook name                                           | `User created event`                        |
| url         | string  | yes                                           | Webhook callback address                               | `https://example.com/callback`              |
| contentType | string  | yes                                           | Request data format                                    | application/json                            |
| enabled     | boolean | yes                                           | Enabled or not                                         | `true`                                      |
| events      | array   | no                                            | User's real name, not unique. Example value: Zhang San | `["user:created"]`                          |
| secret      | string  | no                                            | Request key                                            | `xxxxxxxxxxxx`                              |
