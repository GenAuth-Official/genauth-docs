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

## Method Name

`AuthenticationClient.list`

## Request Parameters

| Name  | Type   | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div>               | <div style="width:200px"></div>Example Value</div> |
| ----- | ------ | -------------------------------------------- | ------------- | -------------------------------------------------------- | -------------------------------------------------- |
| page  | number | No                                           | 1             | Current page number, starting from 1                     | `1`                                                |
| limit | number | No                                           | 10            | Number per page, maximum cannot exceed 50, default is 10 | `10`                                               |

## Request Response

Type: `TerminalSessionRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                     |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                 |
| apiCode    | number | Segment error code, through which you can get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                |
| data       | array  | Response Data                                                                                                                                                                                                                                                                                                                               |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "device": {
      "deviceId": "HZ2F6J3AGNAVSOTV",
      "name": "printer",
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

## Data Structure

### <a id="TerminalSessionDto"></a> TerminalSessionDto

| Name          | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                            | <div style="width:200px">Example Value</div> |
| ------------- | ------- | -------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------- |
| device        |         | Yes                                          | Device information Nested Type: <a href="#DeviceInfo">DeviceInfo</a>. |                                              |
| lastLoginTime | string  | Yes                                          | Last login time                                                       | `2023-05-05T19:06:22.434Z`                   |
| lastIp        | string  | No                                           | Last login IP                                                         |                                              |
| online        | boolean | Yes                                          | Yes online                                                            | `true`                                       |

### <a id="DeviceInfo"></a> DeviceInfo

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div>                                                                            |
| --------- | ------ | -------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| deviceId  | string | Yes                                          | Device unique identifier                   | `HZ2F6J3AGNAVSOTV`                                                                                                      |
| name      | string | No                                           | Device Name                                | `Printer`                                                                                                               |
| version   | string | No                                           | System version                             | `Android 1.0`                                                                                                           |
| type      | string | Yes                                          | device type                                | Browser                                                                                                                 |
| mod       | string | No                                           | device module                              | `Vig9a`                                                                                                                 |
| os        | string | No                                           | device system                              | `iOS`                                                                                                                   |
| status    | string | No                                           | device status                              | activated                                                                                                               |
| userAgent | string | No                                           | user agent                                 | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36` |
