# Get bindable MFA authentication factors

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get all the MFA authentication factors that have been enabled for all applications and not yet bound by the user. The user can bind a new MFA authentication factor from the returned list.

## Method name

`ManagementClient.list_factors_to_enroll`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

## Request response

Type: `ListFactorsToEnrollRespDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string | Request ID. This is returned when the request fails.                                                         |
| data       | array  | MFA Factor list                                                                                              |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "factorType": "SMS"
  }
}
```

## Data structure

### <a id="FactorToEnrollDto"></a> FactorToEnrollDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| factorType | string | Yes                                          | MFA Factor type                            | OTP                                         |
