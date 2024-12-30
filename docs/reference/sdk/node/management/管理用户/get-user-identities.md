# Get the user's external identity source

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Get the user's external identity source through the user ID and select the specified user ID type.

## Method name

`ManagementClient.getUserIdentities`

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
  const result = await managementClient.getUserIdentities({
    // Replace user ID
    userId: "6229ffaxxxxxxxxcade3e3d9",
    userIdType: "user_id",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `IdentityListRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
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
    "identityId": "62299d8b866d2dab79a89dc4",
    "extIdpId": "6076bacxxxxxxxxd80d993b5",
    "provider": "wechat",
    "type": "openid",
    "userIdInIdp": "oj7Nq05R-RRaqak0_YlMLnnIwsvg",
    "accessToken": "57_fK0xgSL_NwVlS-gmUwlMQ2N6AONNIOAYxxxx",
    "refreshToken": "57_IZFu91Ak1Wg6DRytZFFIOd3upNF5lH7vPxxxxx",
    "originConnIds": "[\"605492ac41xxxxe0362f0707\"]"
  }
}
```

## Data Structure

### <a id="IdentityDto"></a> IdentityDto

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------- | ------ | -------------------------------------- | -------------------------- ... identityId | string | yes | Identity source ID | `62299d8b866d2dab79a89dc4` |
| extIdpId | string | yes | Identity source connection ID | `6076bacxxxxxxxxd80d993b5` |
| provider | string | yes | External identity source type:<br>- `wechat`: WeChat<br>- `qq`: QQ<br>- `wechatwork`: WeChat for Business<br>- `dingtalk`: DingTalk<br>- `weibo`: Weibo<br>- `github`: GitHub<br>- `alipay`: Alipay<br>- `baidu`: Baidu<br>- `lark`: Feishu<br>- `welink`: Welink<br>- `yidun`: NetEase Yidun<br>- `qingcloud`: Qingyun<br>- `google`: Google<br>- `gitlab`: GitLab<br>- `gitee`: Gitee<br>- `twitter`: Twitter<br>- `facebook`: Facebook<br>- `slack`: Slack<br>- `linkedin`: Linkedin<br>- `instagram`: Instagram<br>- `oidc`: OIDC-based enterprise identity source<br>- `oauth2`: OAuth2-based enterprise identity source<br>- `saml`: SAML-based enterprise identity source<br>- `ldap`: LDAP-based enterprise identity source<br>- `ad`: AD-based enterprise identity source<br>- `cas`: CAS-based enterprise identity source<br>- `azure-ad`: Azure AD-based enterprise identity source<br> | oidc |
| type | string | yes | Identity type, such as unionid, openid, primary | `openid` |
| userIdInIdp | string | yes | ID in external identity source | `oj7Nq05R-RRaqak0_YlMLnnIwsvg` |
| userInfoInIdp | object | yes | User's identity information in idp | |
| accessToken | string | no | in external identity source Access Token (this parameter is returned only when the user actively obtains it, and will not be returned by the management interface). | `57_fK0xgSL_NwVlS-gmUwlMQ2N6AONNIOAYxxxx` |
| refreshToken | string | No | Refresh Token in the external identity source (this parameter is returned only when the user actively obtains it, and will not be returned by the management interface). | `57_IZFu91Ak1Wg6DRytZFFIOd3upNF5lH7vPxxxxx` |
| originConnIds | array | Yes | List of identity source connection IDs from which the identity comes| A["605492AS41XXXXXXXX0362F0707"]A |
