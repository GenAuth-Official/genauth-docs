# Modify email

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

When the end user modifies the email on his own, he needs to provide the corresponding verification method, see [Initiate verification request for modifying email](#tag/user profile/modify email/operation/ProfileV3Controller_updateEmailVerification).
This parameter needs to provide a one-time temporary credential `updateEmailToken`, which needs to be obtained from the **Initiate verification request for modifying email** interface.

## Method name

`ManagementClient.update_email`

## Request parameters

| Name             | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                          | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | -------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| updateEmailToken | string | Yes                                    | -                                           | Token used to temporarily modify the mailbox, which can be obtained from the **Initiate verification request for modifying the mailbox** interface. | `xxxx`                                      |

## Request response

Type: `CommonResponseDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string | description                                                                                                  |
| apiCode    | number | subdivision error code, which can be used to get the specific error type.                                    |
| requestId  | string | request ID. It will be returned when the request fails.                                                      |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## Data structure
