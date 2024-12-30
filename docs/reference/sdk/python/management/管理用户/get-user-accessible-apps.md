# Get the applications that the user can access

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Get the applications that the user can access through the user ID, and you can choose to specify the user ID type, etc.

## Method name

`ManagementClient.get_user_accessible_apps`

## Request parameters

| Name       | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| userId     | string | yes                                    | -                                           | The unique identifier of the user, which can be user ID, user name, email, phone number, externalId, or ID in an external identity source. For details, see the description of the userIdType field. The default is user id.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `6229ffaxxxxxxxxcade3e3d9`                  |
| userIdType | string | No                                     | user_id                                     | User ID type, the default value is `user_id`, the optional values ​​are:<br>- `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`<br>- `phone`: User phone number<br>- `email`: User email<br>- `username`: User name<br>- `external_id`: User ID in the external system, corresponding to the `externalId` field of GenAuth user information<br>- `identity`: User's external identity source information, the format is `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, and `<userIdInIdp>` is the ID of the user in the external identity source. <br>Example value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`. <br>- `sync_relation`: The user's external identity source information, in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the synchronization identity source type, such as wechatwork, lark; `<userIdInIdp>` is the user's ID in the external identity source. <br>Example value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`. <br> | `user_id`                                   |

## Request Response

Type: `AppListRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | array  | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "appId": "app1",
    "appName": "App Name",
    "appLogo": "https://example.com/logo.png",
    "appLoginUrl": "https://example.com/login",
    "appDefaultLoginStrategy": "ALLOW_ALL"
  }
}
```

## Data Structure

### <a id="AppDto"></a> AppDto

| Name                    | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------------------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| appId                   | string | Yes                                           | App ID                                     | `app1`                                      |
| appName                 | string | Yes                                           | App Name                                   | `App Name`                                  |
| appLogo                 | string | Yes                                           | App Logo                                   | `https://example.com/logo.png`              |
| appLoginUrl             | string | Yes                                           | App login URL                              | `https://example.com/login`                 |
| appDefaultLoginStrategy | string | Yes                                           | App default login strategy                 | ALLOW_ALL                                   |
