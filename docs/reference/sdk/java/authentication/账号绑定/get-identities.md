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

## Method Name

`AuthenticationClient.getIdentities`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------- | ------------------------------------------ | -------------------------------------------------- |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.GetIdentitiesRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetIdentitiesTest {
    // Need to be replaced with your GenAuth App ID
    private static final String APP_ID = "AUTHING_APP_ID";
    // Need to be replaced with your GenAuth App Secret
    private static final String APP_SECRET = "AUTHING_APP_SECRET";
    // Need to be replaced with your GenAuth App Host
    private static final String APP_HOST = "AUTHING_APP_HOST";
    // Need to be replaced with your GenAuth Access Token
    private static final String ACCESS_TOKEN = "AUTHING_ACCESS_TOKEN";

    public static void main(String[] args) throws Throwable {
        AuthenticationClientOptions clientOptions = new AuthenticationClientOptions();
        clientOptions.setAppId(APP_ID);
        clientOptions.setAppSecret(APP_SECRET);
        clientOptions.setAppHost(APP_HOST);
        clientOptions.setAccessToken(ACCESS_TOKEN);

        AuthenticationClient client = new AuthenticationClient(clientOptions);

        GetIdentitiesRespDto response = client.getIdentities();
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type: `GetIdentitiesRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                             |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number | Segmented error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | array  | List of identity sources for the user                                                                                                                                                                                                                                                                                                               |

Example Results：

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

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | <div style="width:200px">Example Value</div> |
| ------------- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| identityId    | string | Yes                                          | Identity source ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `62299d8b866d2dab79a89dc4`                   |
| extIdpId      | string | Yes                                          | Identity source connection ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `6076bacxxxxxxxxd80d993b5`                   |
| provider      | string | Yes                                          | External identity source Type: <br>- `wechat`: WeChat<br>- `qq`: QQ<br>- `wechatwork`: WeChat for Business<br>- `dingtalk`: DingTalk<br>- `weibo`: Weibo<br>- `github`: GitHub<br>- `alipay`: Alipay<br>- `baidu`: Baidu<br>- `lark`: Feishu<br>- `welink`: Welink<br>- `yidun`: NetEase Yidun<br>- `qingcloud`: Qingyun<br>- `google`: Google<br>- `gitlab`: GitLab<br>- `gitee`: Gitee<br>- `twitter`: Twitter<br>- `facebook`: Facebook<br>- `slack`: Slack<br>- `linkedin`: Linkedin<br>- `instagram`: Instagram<br>- `oidc`: OIDC-type enterprise identity source<br>- `oauth2`: OAuth2-type enterprise identity source<br>- `saml`: SAML-type enterprise identity source<br>- `ldap`: LDAP-type enterprise identity source<br>- `ad`: AD-type enterprise identity source<br>- `cas`: CAS-type enterprise identity source<br>- `azure-ad`: Azure AD-type enterprise identity source<br> | oidc                                         |
| type          | string | Yes                                          | Identity type, such as unionid, openid, primary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `openid`                                     |
| userIdInIdp   | string | Yes                                          | ID in the external identity source                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `oj7Nq05R-RRaqak0_YlMLnnIwsvg`               |
| userInfoInIdp | object | Yes                                          | User's identity information in idp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                              |
| accessToken   | string | No                                           | Access Token in external identity source (this parameter is returned only when user actively obtains it, and it is not returned by management interface).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `57_fK0xgSL_NwVlS-gmUwlMQ2N6AONNIOAYxxxx`    |
| refreshToken  | string | No                                           | Refresh Token in external identity source (this parameter is returned only when user actively obtains it, and it is not returned by management interface).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `57_IZFu91Ak1Wg6DRytZFFIOd3upNF5lH7vPxxxxx`  |
| originConnIds | array  | Yes                                          | Identity source connection ID list from which the identity comes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `["605492ac41xxxxe0362f0707"]`               |
