# Get the bound external identity source

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

As described in the **Introduction** section, an external identity source corresponds to multiple external identity source connections. After a user binds an external identity source account through an external identity source connection,
the user will establish an association relationship with this external identity source. This interface is used to obtain all external identity sources bound to this user.

Depending on the specific implementation of the external identity source, a user may have multiple identity IDs in the external identity source, such as `openid` and `unionid` in the WeChat system, and `open_id`, `union_id` and `user_id` in non-books. In GenAuth, we call such an `open_id` or `unionid_` an `Identity`, so a user will have multiple `Identity` records in one identity source.

Taking WeChat as an example, if a user logs in with WeChat or binds a WeChat account, his `Identity` information is as follows:

```json
[
  {
    "identityId": "62f20932xxxxbcc10d966ee5",
    "extIdpId": "62f209327xxxxcc10d966ee5",
    "provider": "wechat",
    "type": "openid",
    "userIdInIdp": "oH_5k5SflrwjGvk7wqpoBKq_cc6M",
    "originConnIds": ["62f2093244fa5cb19ff21ed3"]
  },
  {
    "identityId": "62f726239xxxxe3285d21c93",
    "extIdpId": "62f209327xxxxcc10d966ee5",
    "provider": "wechat",
    "type": "unionid",
    "userIdInIdp": "o9Nka5ibU-lUGQaeAHqu0nOZyJg0",
    "originConnIds": ["62f2093244fa5cb19ff21ed3"]
  }
]
```

You can see that their `extIdpId` is the same, which is the **identity source ID** you created in GenAuth; `provider` is `wechat`;
`type` can be used to distinguish which is `openid` and which is `unionid`, as well as the specific value (`userIdInIdp`); they all come from the same identity source connection (`originConnIds`).

## Method name

`AuthenticationClient.getIdentities`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |

## Request response

Type: `GetIdentitiesRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                   |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | array  | User's identity source list                                                                                                                                                                                                                                                                                                                    |

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

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | <div style="width:200px">Sample value</div> |
| ------------- | ------ | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| identityId    | string | yes                                          | Identity source ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `62299d8b866d2dab79a89dc4`                  |
| extIdpId      | string | yes                                          | Identity source connection ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `6076bacxxxxxxxxd80d993b5`                  |
| provider      | string | yes                                          | External identity source type:<br>- `wechat`: WeChat<br>- `qq`: QQ<br>- `wechatwork`: WeChat for Enterprise<br>- `dingtalk`: DingTalk<br>- `weibo`: Weibo<br>- `github`: GitHub<br>- `alipay`: alipay<br>- `baidu`: Baidu<br>- `lark`: Feishu<br>- `welink`: Welink<br>- `yidun`: NetEase Yidun<br>- `qingcloud`: Qingyun<br>- `google`: Google<br>- `gitlab`: GitLab<br>- `gitee`: Gitee<br>- `twitter`: Twitter<br>- `facebook`: Facebook<br>- `slack`: Slack<br>- `linkedin`: Linkedin<br>- `instagram`: Instagram<br>- `oidc`: OIDC-type enterprise identity source<br>- `oauth2`: OAuth2-type enterprise identity source<br>- `saml`: SAML-type enterprise identity source<br>- `ldap`: LDAP-type enterprise identity source<br>- `ad`: AD-type enterprise identity source<br>- `cas`: CAS Enterprise identity source<br>- `azure-ad`: Azure AD enterprise identity source<br> | oidc                                        |
| type          | string | yes                                          | Identity type, such as unionid, openid, primary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `openid`                                    |
| userIdInIdp   | string | yes                                          | ID in the external identity source                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `oj7Nq05R-RRaqak0_YlMLnnIwsvg`              |
| userInfoInIdp | object | yes                                          | User's identity information in idp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                             |
| accessToken   | string | no                                           | Access Token in the external identity source (this parameter is returned only when the user actively obtains it, and it is not returned by the management interface).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `57_fK0xgSL_NwVlS-gmUwlMQ2N6AONNIOAYxxxx`   |
| refreshToken  | string | no                                           | Refresh Token in the external identity source (this parameter is returned only when the user actively obtains it, and it is not returned by the management interface).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `57_IZFu91Ak1Wg6DRytZFFIOd3upNF5lH7vPxxxxx` |
| originConnIds | array  | yes                                          | Identity source connection ID list from which the identity comes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `["605492ac41xxxxe0362f0707"]`              |
