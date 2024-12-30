# Get the bound external identity source

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

As described in the **Introduction** section, an external identity source corresponds to multiple external identity source connections. After a user binds an external identity source account through an external identity source connection,
the user will establish an association with this external identity source. This interface is used to obtain all external identity sources bound to this user.

Depending on the specific implementation of the external identity source, a user may have multiple identity IDs in the external identity source, such as `openid` and `unionid` in the WeChat system, and `open_id`, `union_id` and `user_id` in non-books. In GenAuth, we call such an `open_id` or `unionid_` an `Identity`, so a user will have multiple `Identity` records in one identity source.

Taking WeChat as an example, if a user logs in using WeChat or binds a WeChat account, his `Identity` information is as follows:

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

`ManagementClient.get_identities`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

## Request Response

Type: `GetIdentitiesRespDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string | Request ID. Returned when the request fails.                                                                 |
| data       | array  | User's identity source list                                                                                  |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "identityId": "62299d8b866d2dab79a89dc4",
    "extIdpId": "6076bacxxxxxxxxd80d993b5",
    "provider": "wechat",
    "type": "openid",
    "userIdInIdp": "oj7Nq05R-RRaqak0_YlMLnnIwsvg",
    "userInfoInIdp": {},
    "accessToken": "57_fK0xgSL_NwVlS-gmUwlMQ2N6AONNIOAYxxxx",
    "refreshToken": "57_IZFu91Ak1Wg6DRytZFFIOd3upNF5lH7vPxxxxx",
    "originConnIds": "[\"605492ac41xxxxe0362f0707\"]"
  }
}
```

## Data Structure

### <a id="IdentityDto"></a> IdentityDto

| Name          | Type   | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | <div style="width:200px">Sample value</div> |
| ------------- | ------ | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| identityId    | string | yes                                                   | Identity source ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `62299d8b866d2dab79a89dc4`                  |
| extIdpId      | string | yes                                                   | Identity source connection ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `6076bacxxxxxxxxd80d993b5`                  |
| provider      | string | yes                                                   | External identity source type:<br>- `wechat`: WeChat<br>- `qq`: QQ<br>- `wechatwork`: WeChat for Business<br>- `dingtalk`: DingTalk<br>- `weibo`: Weibo<br>- `github`: GitHub<br>- `alipay`: Alipay<br>- `baidu`: Baidu<br>- `lark`: Feishu<br>- `welink`: Welink<br>- `yidun`: NetEase Yidun<br>- `qingcloud`: Qingyun<br>- `google`: Google<br>- `gitlab`: GitLab<br>- `gitee`: Gitee<br>- `twitter`: Twitter<br>- `facebook`: Facebook<br>- `slack`: Slack<br>- `linkedin`: Linkedin<br>- `instagram`: Instagram<br>- `oidc`: OIDC-based enterprise identity source<br>- `oauth2`: OAuth2-based enterprise identity source<br>- `saml`: SAML-based enterprise identity source<br>- `ldap`: LDAP-based enterprise identity source<br>- `ad`: AD-based enterprise identity source<br>- `cas`: CAS-based enterprise identity source<br>- `azure-ad`: Azure AD-based enterprise identity source<br> | oidc                                        |
| type          | string | Yes                                                   | Identity type, such as unionid, openid, primary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `openid`                                    |
| userIdInIdp   | string | Yes                                                   | ID in external identity source                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `oj7Nq05R-RRaqak0_YlMLnnIwsvg`              |
| userInfoInIdp |        | Yes                                                   | User's identity information in idp Nested type: <a href="#User">User</a>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                             |
| accessToken   | string | No                                                    | Access Token in the external identity source (this parameter is only returned when the user actively obtains it, and the management side interface will not return it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `57_fK0xgSL_NwVlS-gmUwlMQ2N6AONNIOAYxxxx`   |
| refreshToken  | string | No                                                    | Refresh Token in the external identity source (this parameter is only returned when the user actively obtains it, and the management side interface will not return it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `57_IZFu91Ak1Wg6DRytZFFIOd3upNF5lH7vPxxxxx` |
| originConnIds | array  | yes                                                   | List of identity origin connection IDs from which the identity comes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `["605492ac41xxxxe0362f0707"]`              |

### <a id="User"></a> User

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
