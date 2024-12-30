# Get user real-name authentication information

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get user real-name authentication information through user ID, and you can choose to specify the user ID type.

## Method name

`ManagementClient.getUserPrincipalAuthenticationInfo`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ------------------------------------ | ---------------------------- ... | `6229ffaxxxxxxxxcade3e3d9` |
| userIdType | string | No | user_id | User ID type, the default value is `user_id`, the optional values ​​are:<br>- `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`<br>- `phone`: User phone number<br>- `email`: User email<br>- `username`: User name<br>- `external_id`: User ID in the external system, corresponding to the `externalId` field of GenAuth user information<br>- `identity`: User's external identity source information, the format is `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, and `<userIdInIdp>` is the ID of the user in the external identity source. <br>Example value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`. <br>- `sync_relation`: The user's external identity source information, in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the synchronization identity source type, such as wechatwork, lark; `<userIdInIdp>` is the user's ID in the external identity source. <br>Example value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`. <br> | `user_id` |

## Sample code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

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
  const result = await managementClient.getUserPrincipalAuthenticationInfo({
    // Replace user ID
    userId: "6229ffaxxxxxxxxcade3e3d9",
    userIdType: "user_id",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request Response

Type: `PrincipalAuthenticationInfoPaginatedRespDto`

| Name       | Type                                                                                     | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                                                   | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#PrincipalAuthenticationInfoPagingDto">PrincipalAuthenticationInfoPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "authenticated": true,
      "principalType": "Authentication subject type, P represents individual, E represents enterprise",
      "principalCode": "6229c4deb3e4d8a20b6021ff",
      "principalName": "ss",
      "authenticatedAt": "2022-04-05T10:23:50.631Z"
    }
  }
}
```

## Data Structure

### <a id="PrincipalAuthenticationInfoPagingDto"></a> PrincipalAuthenticationInfoPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                               | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                          | Total number of records                                                                                  |                                             |
| list       | array  | Yes                                          | Response data Nested type: <a href="#PrincipalAuthenticationInfoDto">PrincipalAuthenticationInfoDto</a>. |                                             |

### <a id="PrincipalAuthenticationInfoDto"></a> PrincipalAuthenticationInfoDto

| Name            | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>  | <div style="width:200px">Sample value</div>                                       |
| --------------- | ------- | --------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------- |
| authenticated   | boolean | yes                                           | Whether to authenticate                     | `true`                                                                            |
| principalType   | string  | yes                                           | User ID                                     | `Authentication principal type, P stands for individual, E stands for enterprise` |
| principalCode   | string  | yes                                           | Authentication principal certificate number | `6229c4deb3e4d8a20b6021ff`                                                        |
| principalName   | string  | yes                                           | Authentication principal name               | `ss`                                                                              |
| authenticatedAt | string  | yes                                           | Certification time, standard time string    | `2022-04-05T10:23:50.631Z`                                                        |
