# 获取服务器公开信息

<LastUpdated />

可端点可获取服务器的公开信息，如 RSA256 公钥、SM2 公钥、GenAuth 服务版本号等。

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | -------------------------------------- | ------ | ----------------------------------- | ------------------------------------------- |

## 示例代码

```java
AuthClient authClient = new AuthClient();
authClient.system((AuthCallback) response -> {
    if (response.getStatusCode() == 200) {
        JSONObject data = response.getData();
        // data：请求成功返回的数据
    }
});
```

## 请求响应

类型： `SystemInfoResp`

| 名称      | 类型   | 描述                                                             |
| --------- | ------ | ---------------------------------------------------------------- |
| rsa       | Object | RSA256 加密配置信息<br/>参考：<a href="#rsa">rsa</a>。           |
| sm2       | Object | 国密 SM2 加密配置信息<br/>参考：<a href="#sm2">sm2</a>。         |
| version   | Object | 国密 SM2 加密配置信息<br/>参考：<a href="#version">version</a>。 |
| publicIps | array  | GenAuth 服务对外 IP 列表                                         |

示例结果：

```json
{
  "rsa": {
    "publicKey": "xxxxxxxxxxxxxxxxxxxxxx"
  },
  "sm2": {
    "publicKey": "xxxxxxxxxxxxxxxxxxxxxx"
  },
  "version": {
    "server": "2.0.0",
    "console": "2.0.0",
    "login": "2.0.0"
  },
  "publicIps": ["string"]
}
```

## 数据结构

### <a id="rsa"></a> rsa

| 名称      | 类型   | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| --------- | ------ | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| publicKey | string | 是                                     | RSA256 公钥                         | `xxxxxxxxxxxxxxxxxxxxxx`              |

### <a id="sm2"></a> sm2

| 名称      | 类型   | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| --------- | ------ | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| publicKey | string | 是                                     | SM2 公钥                            | `xxxxxxxxxxxxxxxxxxxxxx`              |

### <a id="version"></a> version

| 名称    | 类型   | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ------- | ------ | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| server  | string | 是                                     | GenAuth 核心服务版本号              | `2.0.0`                               |
| console | string | 是                                     | GenAuth 控制台版本号                | `2.0.0`                               |
| login   | string | 是                                     | GenAuth 托管登录页版本号            | `2.0.0`                               |
