# 查询二维码状态

<LastUpdated />

按照用户扫码顺序，共分为未扫码、已扫码等待用户确认、用户同意/取消授权、二维码过期以及未知错误六种状态，前端应该通过不同的状态给到用户不同的反馈。你可以通过下面这篇文章了解扫码登录详细的流程：[扫码登录的原理](https://docs.genauth.ai/concepts/how-qrcode-works.html)。

## 请求参数

| 名称     | 类型   | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| -------- | ------ | -------------------------------------- | ------ | ----------------------------------- | ------------------------------------------- |
| qrcodeId | String | 是                                     | -      | 二维码唯一 ID                       |                                             |

## 示例代码

```java
AuthClient authClient = new AuthClient();
authClient.checkQRCodeStatus("", new AuthCallback() {
    @Override
    public void call(AuthResponse response) {
      if (response.getStatusCode() == 200) {
        	JSONObject data = response.getData();
          // data：请求成功返回的数据
      }
    }
});

```

## 请求响应

类型： `AuthResponse`

| 名称       | 类型       | 描述                                                         |
| ---------- | ---------- | ------------------------------------------------------------ |
| statusCode | Int        | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message    | String     | 描述信息                                                     |
| apiCode    | Int        | 细分错误码，可通过此错误码得到具体的错误类型。               |
| requestId  | String     | 请求 ID，当请求失败时会返回。                                |
| data       | JsonObject | 响应数据                                                     |

示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "status": "PENDING",
    "briefUserInfo": "当二维码状态为已扫码、已授权、已取消授权时返回。如果在控制台应用安全 - 通用安全 - 登录安全 - APP 扫码登录 Web 安全中未开启「Web 轮询接口返回完整用户信息」（默认处于关闭状态），接口只会返回用户的头像和显示名称，前端可以基于此渲染用户昵称和头像，给到用户已成功扫码的提示。",
    "tokenSet": {
      "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InIxTGtiQm8zOTI1UmIyWkZGckt5VTNNVmV4OVQyODE3S3gwdmJpNmlfS2MifQ.eyJqdGkiOiJ4R01uczd5cmNFckxiakNRVW9US1MiLCJzdWIiOiI1YzlmNzVjN2NjZjg3YjA1YTkyMWU5YjAiLCJpc3MiOiJodHRwczovL2F1dGhpbmcuY24iLCJpYXQiOjE1NTQ1Mzc4NjksImV4cCI6MTU1NDU0MTQ2OSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBvZmZsaW5lX2FjY2VzcyBwaG9uZSBlbWFpbCIsImF1ZCI6IjVjYTc2NWUzOTMxOTRkNTg5MWRiMTkyNyJ9.wX05OAgYuXeYM7zCxhrkvTO_taqxrCTG_L2ImDmQjMml6E3GXjYA9EFK0NfWquUI2mdSMAqohX-ndffN0fa5cChdcMJEm3XS9tt6-_zzhoOojK-q9MHF7huZg4O1587xhSofxs-KS7BeYxEHKn_10tAkjEIo9QtYUE7zD7JXwGUsvfMMjOqEVW6KuY3ZOmIq_ncKlB4jvbdrduxy1pbky_kvzHWlE9El_N5qveQXyuvNZVMSIEpw8_y5iSxPxKfrVwGY7hBaF40Oph-d2PO7AzKvxEVMamzLvMGBMaRAP_WttBPAUSqTU5uMXwMafryhGdIcQVsDPcGNgMX6E1jzLA",
      "id_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InIxTGtiQm8zOTI1UmIyWkZGckt5VTNNVmV4OVQyODE3S3gwdmJpNmlfS2MifQ.eyJzdWIiOiI1YzlmNzVjN2NjZjg3YjA1YTkyMWU5YjAiLCJub25jZSI6IjIyMTIxIiwiYXRfaGFzaCI6Ik5kbW9iZVBZOEFFaWQ2T216MzIyOXciLCJzaWQiOiI1ODM2NzllNC1lYWM5LTRjNDEtOGQxMS1jZWFkMmE5OWQzZWIiLCJhdWQiOiI1Y2E3NjVlMzkzMTk0ZDU4OTFkYjE5MjciLCJleHAiOjE1NTQ1NDE0NjksImlhdCI6MTU1NDUzNzg2OSwiaXNzIjoiaHR0cHM6Ly9hdXRoaW5nLmNuIn0.IQi5FRHO756e_eAmdAs3OnFMU7QuP-XtrbwCZC1gJntevYJTltEg1CLkG7eVhdi_g5MJV1c0pNZ_xHmwS0R-E4lAXcc1QveYKptnMroKpBWs5mXwoOiqbrjKEmLMaPgRzCOdLiSdoZuQNw_z-gVhFiMNxI055TyFJdXTNtExt1O3KmwqanPNUi6XyW43bUl29v_kAvKgiOB28f3I0fB4EsiZjxp1uxHQBaDeBMSPaRVWQJcIjAJ9JLgkaDt1j7HZ2a1daWZ4HPzifDuDfi6_Ob1ZL40tWEC7xdxHlCEWJ4pUIsDjvScdQsez9aV_xMwumw3X4tgUIxFOCNVEvr73Fg",
      "refresh_token": "WPsGJbvpBjqXz6IJIr1UHKyrdVF",
      "token_type": "xxx",
      "expire_in": 7200
    }
  }
}
```

## 数据结构

### <a id="data"></a> data

| 名称          | 类型       | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                                                                                                                                                                           | <div style="width:200px">示例值</div>                                                                                                                                                                                                                                            |
| ------------- | ---------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status        | string     | 是                                     | 二维码状态。按照用户扫码顺序，共分为未扫码(`EXPIRED`)、已扫码等待用户确认(`PENDING`)、用户同意授权(`SCANNED`)、用户取消授权(`CANCELLED`)、二维码过期(`AUTHORIZED`)以及未知错误(`ERROR`)六种状态。             | `EXPIRED`                                                                                                                                                                                                                                                                        |
| ticket        | string     | 否                                     | 当二维码状态为已授权时返回。如果在控制台 **应用安全 - 通用安全 - 登录安全 - APP 扫码登录 Web 安全** 中未开启 **Web 轮询接口返回完整用户信息**（默认处于关闭状态），会返回此 ticket，用于换取完整的用户信息。  |                                                                                                                                                                                                                                                                                  |
| briefUserInfo | JsonObject | 否                                     | 用户信息                                                                                                                                                                                                      | `当二维码状态为已扫码、已授权、已取消授权时返回。如果在控制台应用安全 - 通用安全 - 登录安全 - APP 扫码登录 Web 安全中未开启「Web 轮询接口返回完整用户信息」（默认处于关闭状态），接口只会返回用户的头像和显示名称，前端可以基于此渲染用户昵称和头像，给到用户已成功扫码的提示。` |
| tokenSet      | JsonObject | 否                                     | 当二维码状态为已授权并且在控制台 **应用安全 - 通用安全 - 登录安全 - APP 扫码登录 Web 安全** 中开启了 **Web 轮询接口返回完整用户信息**（默认处于关闭状态）开关，此数据才会返回。推荐使用 ticket 换取用户信息。 |                                                                                                                                                                                                                                                                                  |

### <a id="briefUserInfo"></a> briefUserInfo

| 名称        | 类型   | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ----------- | ------ | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| displayName | String | 是                                     | 用户显示昵称                        |                                       |
| photo       | String | 是                                     | 用户头像                            |                                       |

### <a id="tokenSet"></a> tokenSet

!!!include(reference/sdk/common/token_response_table.md)!!!
