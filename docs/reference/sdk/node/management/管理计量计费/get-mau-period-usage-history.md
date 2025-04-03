# Get MAU usage records

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the current user pool MAU usage record

## Method name

`ManagementClient.getMauPeriodUsageHistory`

## Request parameters

| Name      | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| --------- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| startTime | string | yes                                    | -                                           | Start time (year, month, day)              | `20220202`                                  |
| endTime   | string | yes                                    | -                                           | End time (year, month, day)                | `20220802`                                  |

## Sample code

```ts
import { ManagementClient, Models } from "@genauth/nodejs";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If it is a private deployment customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.getMauPeriodUsageHistory({
    startTime: "20220802",
    endTime: "20221002",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `CostGetMauPeriodUsageHistoryRespDto`

| Name       | Type                                                       | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                     | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                     | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#MauPeriodUsageHistory">MauPeriodUsageHistory</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "records": {
      "periodStartTime": "20210901",
      "periodEndTime": "20220901",
      "amount": "0",
      "current": "0"
    }
  }
}
```

## Data structure

### <a id="MauPeriodUsageHistory"></a> MauPeriodUsageHistory

| Name    | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                   | <div style="width:200px">Sample value</div> |
| ------- | ----- | -------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------- |
| records | array | Yes                                          | Response data Nested type: <a href="#MauPeriodUsageHistoryDto">MauPeriodUsageHistoryDto</a>. |                                             |

### <a id="MauPeriodUsageHistoryDto"></a> MauPeriodUsageHistoryDto

| Name            | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>     | <div style="width:200px">Sample value</div> |
| --------------- | ------ | -------------------------------------------- | ---------------------------------------------- | ------------------------------------------- |
| periodStartTime | string | yes                                          | Period start time (year, month, day)           | `20210901`                                  |
| periodEndTime   | string | yes                                          | Period end time (year, month, day)             | `20220901`                                  |
| amount          | string | yes                                          | Total amount of mau used in the current period | `0`                                         |
| current         | string | yes                                          | Amount of mau used in the current period       | `0`                                         |
