# My device list

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

List of devices I have logged in.

## Method name

`AuthenticationClient.list`

## Request parameters

| Name  | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>               | <div style="width:200px"></div>Sample value</div> |
| ----- | ------ | -------------------------------------- | ------------- | -------------------------------------------------------- | ------------------------------------------------- |
| page  | number | No                                     | 1             | Current page number, starting from 1                     | `1`                                               |
| limit | number | No                                     | 10            | Number per page, maximum cannot exceed 50, default is 10 | `10`                                              |

## Request response

Type: `TerminalSessionRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                   |
| message    | string | description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | array  | response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "device": {
      "deviceId": "HZ2F6J3AGNAVSOTV",
      "name": "Printer",
      "version": "Android 1.0",
      "type": "Mobile",
      "mod": "Vig9a",
      "os": "iOS",
      "status": "activated",
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    },
    "lastLoginTime": "2023-05-05T19:06:22.434Z",
    "online": true
  }
}
```

## Data structure

### <a id="TerminalSessionDto"></a> TerminalSessionDto

| Name          | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                            | <div style="width:200px">Sample value</div> |
| ------------- | ------- | -------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------- |
| device        |         | Yes                                          | Device information Nested type: <a href="#DeviceInfo">DeviceInfo</a>. |                                             |
| lastLoginTime | string  | yes                                          | Last login time                                                       | `2023-05-05T19:06:22.434Z`                  |
| lastIp        | string  | no                                           | Last login IP                                                         |                                             |
| online        | boolean | yes                                          | Online                                                                | `true`                                      |

### <a id="DeviceInfo"></a> DeviceInfo

| name      | type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div>                                                                             |
| --------- | ------ | -------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| deviceId  | string | yes                                    | Device unique identifier                   | `HZ2F6J3AGNAVSOTV`                                                                                                      |
| name      | string | no                                     | Device name                                | `Printer`                                                                                                               |
| version   | string | no                                     | System version                             | `Android 1.0`                                                                                                           |
| type      | string | yes                                    | device type                                | Browser                                                                                                                 |
| mod       | string | no                                     | device module                              | `Vig9a`                                                                                                                 |
| os        | string | no                                     | device system                              | `iOS`                                                                                                                   |
| status    | string | no                                     | device status                              | activated                                                                                                               |
| userAgent | string | no                                     | user agent                                 | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36` |
