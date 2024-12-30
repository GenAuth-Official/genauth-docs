# 获取登录日志

<LastUpdated />

获取登录日志

## 请求参数

| 名称     | 类型    | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div>                                                              | <div style="width:200px"></div>示例值</div> |
| -------- | ------- | -------------------------------------- | ------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| appId    | string  | 否                                     | -      | 应用 ID，可根据应用 ID 筛选。默认不传获取所有应用的登录历史。                                    | `5f6265c67fxxxxae64ec516e`                  |
| clientIp | string  | 否                                     | -      | 客户端 IP，可根据登录时的客户端 IP 进行筛选。默认不传获取所有登录 IP 的登录历史。                | `127.0.0.1`                                 |
| success  | boolean | 否                                     | -      | 是否登录成功，可根据是否登录成功进行筛选。默认不传获取的记录中既包含成功也包含失败的的登录历史。 | `true`                                      |
| start    | number  | 否                                     | -      | 开始时间，为单位为毫秒的时间戳                                                                   | `1660828100000`                             |
| end      | number  | 否                                     | -      | 结束时间，为单位为毫秒的时间戳                                                                   | `1660828100000`                             |
| page     | number  | 否                                     | 1      | 当前页数，从 1 开始                                                                              | `1`                                         |
| limit    | number  | 否                                     | 10     | 每页数目，最大不能超过 50，默认为 10                                                             | `10`                                        |

## 示例代码

```java
AuthClient authClient = new AuthClient();
authClient.getLoginHistory("5f6265c67fxxxxae64ec516e", "127.0.0.1", true, 1660828100000, 1660828100000, 1, 10, (AuthCallback) response -> {
    if (response.getStatusCode() == 200) {
        JSONObject data = response.getData();
        // data：请求成功返回的数据
    }
});
```

## 请求响应

类型： `AuthResponse`

| 名称       | 类型       | 描述                                                         |
| ---------- | ---------- | ------------------------------------------------------------ |
| statusCode | int        | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message    | String     | 描述信息                                                     |
| apiCode    | int        | 细分错误码，可通过此错误码得到具体的错误类型。               |
| requestId  | String     | 请求 ID，当请求失败时会返回。                                |
| data       | JSONObject | 响应数据<br/>参考：<a href="#data">data</a>。                |

示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "userId": "xxx",
      "appId": "xxx",
      "appName": "示例应用",
      "appLoginUrl": "https://example.genauth.ai/login",
      "appLogo": "https://files.authing.co/authing-console/default-app-logo.png",
      "loginAt": "2022-07-03T02:20:30.000Z",
      "clientIp": "127.0.0.1",
      "success": true,
      "errorMessage": "账号或密码不正确",
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
      "parsedUserAgent": {
        "device": "Desktop",
        "browser": "Chrome",
        "os": "Windows"
      },
      "loginMethod": "loginByEmail",
      "geoip": {
        "location": {
          "lon": 116.3889,
          "lat": 39.9288
        },
        "country_name": "China",
        "country_code2": "CN",
        "country_code3": "CN",
        "region_name": "Beijing",
        "region_code": "BJ",
        "city_name": "Beijing",
        "continent_code": "AS",
        "timezone": "Asia/Shanghai"
      }
    }
  }
}
```

## 数据结构

### <a id="data"></a> data

| 名称       | 类型   | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>           | <div style="width:200px">示例值</div> |
| ---------- | ------ | -------------------------------------- | --------------------------------------------- | ------------------------------------- |
| totalCount | number | 是                                     | 记录总数                                      |                                       |
| list       | array  | 是                                     | 记录列表<br/>参考：<a href="#list">list</a>。 |                                       |

### <a id="list"></a> list

| 名称            | 类型    | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                                               | <div style="width:200px">示例值</div>                                                                                   |
| --------------- | ------- | -------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| userId          | string  | 是                                     | 用户 ID                                                                           | `xxx`                                                                                                                   |
| appId           | string  | 是                                     | 应用 ID                                                                           | `xxx`                                                                                                                   |
| appName         | string  | 是                                     | 应用名称                                                                          | `示例应用`                                                                                                              |
| appLoginUrl     | string  | 是                                     | 应用登录地址                                                                      | `https://example.genauth.ai/login`                                                                                      |
| appLogo         | string  | 是                                     | 应用 Logo                                                                         | `https://files.authing.co/authing-console/default-app-logo.png`                                                         |
| loginAt         | string  | 是                                     | 登录时间                                                                          | `2022-07-03T02:20:30.000Z`                                                                                              |
| clientIp        | string  | 是                                     | 登录时使用的客户端 IP                                                             | `127.0.0.1`                                                                                                             |
| success         | boolean | 是                                     | 是否登录成功                                                                      | `true`                                                                                                                  |
| errorMessage    | string  | 否                                     | 登录失败时的具体错误信息                                                          | `账号或密码不正确`                                                                                                      |
| userAgent       | string  | 是                                     | User Agent                                                                        | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36` |
| parsedUserAgent |         | 是                                     | 解析过后的 User Agent <br/>参考：<a href="#parsedUserAgent">parsedUserAgent</a>。 |                                                                                                                         |
| loginMethod     | string  | 是                                     | 使用的登录方式                                                                    | `loginByEmail`                                                                                                          |
| geoip           |         | 是                                     | 地理位置 <br/>参考：<a href="#geoip">geoip</a>。                                  |                                                                                                                         |

### <a id="parsedUserAgent"></a> parsedUserAgent

| 名称    | 类型   | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ------- | ------ | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| device  | string | 是                                     | 使用的设备类型                      | `Desktop`                             |
| browser | string | 是                                     | 浏览器名称                          | `Chrome`                              |
| os      | string | 是                                     | 操作系统                            | `Windows`                             |

### <a id="geoip"></a> geoip

| 名称           | 类型   | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                    | <div style="width:200px">示例值</div> |
| -------------- | ------ | -------------------------------------- | ------------------------------------------------------ | ------------------------------------- |
| location       |        | 是                                     | 地理位置 <br/>参考：<a href="#location">location</a>。 |                                       |
| country_name   | string | 是                                     | Country Name                                           | `China`                               |
| country_code2  | string | 是                                     | Country Code 2                                         | `CN`                                  |
| country_code3  | string | 是                                     | Country Code 3                                         | `CN`                                  |
| region_name    | string | 是                                     | Region Name                                            | `Beijing`                             |
| region_code    | string | 是                                     | Region Code                                            | `BJ`                                  |
| city_name      | string | 是                                     | 城市名称                                               | `Beijing`                             |
| continent_code | string | 是                                     | Continent Code                                         | `AS`                                  |
| timezone       | string | 是                                     | 时区                                                   | `Asia/Shanghai`                       |

### <a id="location"></a> location

| 名称 | 类型   | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ------ | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| lon  | number | 是                                     | 经度                                | `116.3889`                            |
| lat  | number | 是                                     | 纬度                                | `39.9288`                             |
